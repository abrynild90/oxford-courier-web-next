// A virtual test driver. It reads game state, then supplies accelerator, brake
// and steering demands to the same input mixer as the keyboard. No position edits.
window.driveTest=async function driveTest(destination,mode='drive'){
 const g=window.oxford,d=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]),wrap=a=>Math.atan2(Math.sin(a),Math.cos(a));
 const wait=ms=>new Promise(r=>setTimeout(r,ms));
 let path;
 if(mode==='drive'){
  const raw=g.city.route(g.p,destination);if(raw.length<2)throw Error('No drivable route');
  path=raw.map((p,i)=>{
   const a=raw[Math.max(0,i-1)],b=raw[Math.min(raw.length-1,i+1)],l=d(a,b)||1,r=g.city.roads[p[2]],offset=r.o||r.k==='service'?0:Math.min(1.72,r.w*.22);
   return [p[0]-(b[1]-a[1])/l*offset,p[1]+(b[0]-a[0])/l*offset];
  });path.push(destination);
 }else{
  // Short local walking legs use a pedestrian-clearance grid.
  const stride=1.8,x0=Math.min(g.p[0],destination[0])-24,z0=Math.min(g.p[1],destination[1])-24;
  const cell=p=>[Math.round((p[0]-x0)/stride),Math.round((p[1]-z0)/stride)],point=([x,z])=>[x0+x*stride,z0+z*stride],start=cell(g.p),goal=cell(destination),queue=[[start,0,0]],prev=new Map([[start+'',null]]),cost=new Map([[start+'',0]]);
  let final=null;
  while(queue.length&&prev.size<18000){
   queue.sort((a,b)=>b[2]-a[2]);const [u,c]=queue.pop();if(d(u,goal)<1.8){final=u;break}
   for(const [dx,dz] of [[1,0],[0,1],[-1,0],[0,-1],[1,1],[1,-1],[-1,-1],[-1,1]]){
    const v=[u[0]+dx,u[1]+dz],p=point(v),key=v+'',cc=c+Math.hypot(dx,dz);
    if(cc>=(cost.get(key)??Infinity)||g.world.obstructed(...p,.46))continue;
    const up=point(u);if(g.world.obstructed((p[0]+up[0])*.5,(p[1]+up[1])*.5,.46))continue;
    cost.set(key,cc);prev.set(key,u);queue.push([v,cc,cc+d(v,goal)]);
   }
  }
  if(!final)throw Error('No pedestrian clearance path');
  path=[destination];while(final){path.push(point(final));final=prev.get(final+'')}path.reverse();
 }
 const distances=[0];for(let i=1;i<path.length;i++)distances.push(distances.at(-1)+d(path[i-1],path[i]));
 let passUntil=-1,passSide=0,passes=0;
 let k=0,progress=0,lastMoving=performance.now(),lastPoint=[...g.p],startTime=performance.now(),lastTelemetry=0;
 const at=s=>{let i=k;while(i+1<path.length-1&&distances[i+1]<s)i++;const f=Math.max(0,Math.min(1,(s-distances[i])/Math.max(.01,distances[i+1]-distances[i])));return [path[i][0]+f*(path[i+1][0]-path[i][0]),path[i][1]+f*(path[i+1][1]-path[i][1])]};
 g.testState={mode,destination,path,progress:0};
 try{
  for(;;){
   if(performance.now()-startTime>Math.max(900000,distances.at(-1)*230))throw Error('Test leg timeout');
   let best=Infinity,bestProgress=progress,chosen=k;
   for(let i=Math.max(0,k-1);i<Math.min(k+9,path.length-1);i++){
    const a=path[i],b=path[i+1],l=d(a,b)||.001,f=Math.max(0,Math.min(1,((g.p[0]-a[0])*(b[0]-a[0])+(g.p[1]-a[1])*(b[1]-a[1]))/(l*l)));
    const q=[a[0]+f*(b[0]-a[0]),a[1]+f*(b[1]-a[1])],err=d(q,g.p);if(err<best){best=err;bestProgress=distances[i]+f*l;chosen=i}
   }
   k=chosen;progress=bestProgress;const stop=d(g.p,destination),speed=Math.abs(g.speed);
   if(stop<(mode==='drive'?3.3:1.7)){g.input={brake:1};if(mode==='walk'||speed<.22)break;await wait(30);continue}
   if(d(lastPoint,g.p)>1.1){lastMoving=performance.now();lastPoint=[...g.p]}
   if(performance.now()-lastMoving>38000){
    const nearby=[...g.life.cars,...g.life.people].filter(a=>Math.hypot(a.mesh.position.x-g.p[0],a.mesh.position.z-g.p[1])<18).map(a=>({x:a.mesh.position.x,z:a.mesh.position.z,speed:a.speed,road:a.ri,yaw:a.mesh.rotation.y}));
    throw Error('Driver stopped at '+JSON.stringify({p:g.p,street:g.roadNear?.r.n,width:g.roadNear?.r.w,stop,k,speed,angle:g.yaw,input:g.input,nearby}));
   }
   const look=mode==='drive'?Math.max(3.0,Math.min(9,speed*.55+2.4)):1.65;
   const q=at(progress+look),later=at(progress+look+Math.max(6,speed*.9));
   // On a wide multilane street, move around a stationary queue using steering and throttle.
   // Check both the candidate lane and its approach for people, vehicles and static obstacles.
   if(mode==='drive'&&progress>=passUntil&&speed<.5&&g.roadNear?.r.w>=6.8&&performance.now()-lastMoving>(g.roadNear.r.w>=13.5?2500:10000)){
    const actors=[...g.life.cars,...g.life.people],dx=Math.sin(g.yaw),dz=Math.cos(g.yaw);
    const ahead=actors.some(a=>{const x=a.mesh.position.x-g.p[0],z=a.mesh.position.z-g.p[1];return a.speed<.6&&x*dx+z*dz>2&&x*dx+z*dz<9&&Math.abs(x*dz-z*dx)<2.3});
    if(ahead)for(const side of [-1,1]){
     const clear=[3,6,9,12,15].every(s=>{
      const t=at(progress+s),x=t[0]+side*3.5*dz,z=t[1]-side*3.5*dx;
      return !g.world.obstructed(x,z,.95)&&actors.every(a=>Math.hypot(a.mesh.position.x-x,a.mesh.position.z-z)>2.3);
     });
     const clearOncoming=actors.every(a=>{
      const x=a.mesh.position.x-g.p[0],z=a.mesh.position.z-g.p[1],ahead=x*dx+z*dz,lateral=x*dz-z*dx;
      return ahead<0||ahead>36||Math.abs(lateral-side*3.5)>2.6||Math.cos(a.mesh.rotation.y-g.yaw)>-.35;
     });
     if(clear&&clearOncoming){passUntil=progress+22;passSide=side;passes++;break}
    }
   }
   const passing=mode==='drive'&&progress<passUntil;
   if(passing){
    const a=at(progress+look+2),dx=a[0]-q[0],dz=a[1]-q[1],len=Math.hypot(dx,dz)||1;
    const offset=3.5*passSide*Math.min(1,(passUntil-progress)/5);
    q[0]+=offset*dz/len;q[1]-=offset*dx/len;later[0]+=offset*dz/len;later[1]-=offset*dx/len;
   }
   const angle=Math.atan2(q[0]-g.p[0],q[1]-g.p[1]),error=wrap(angle-g.yaw),bend=Math.abs(wrap(Math.atan2(later[0]-q[0],later[1]-q[1])-angle));
   if(mode==='walk'){g.input={gas:Math.abs(error)<.68?1:0,run:1,steer:Math.max(-1,Math.min(1,error*2.4))}}
   else{
    const cruise=({'motorway':24,'trunk':22,'primary':17,'secondary':16,'tertiary':14,'residential':11,'service':7})[g.roadNear?.r.k]||13;const max=stop<20?Math.max(1.5,Math.sqrt(Math.max(0,stop-2.8)*3.6)):cruise;
    let target=Math.min(max,Math.max(2.8,cruise/(1+Math.max(bend,Math.abs(error)) * 2.6)));
    // Yield behind moving traffic. A clear adjacent lane permits a low-speed pass.
    if(passing)target=Math.min(target,3);
    let avoid=0;
    for(const actor of [...g.life.cars,...g.life.people]){const x=actor.mesh.position.x-g.p[0],z=actor.mesh.position.z-g.p[1],ahead=x*Math.sin(g.yaw)+z*Math.cos(g.yaw),side=x*Math.cos(g.yaw)-z*Math.sin(g.yaw);
     if(!(passing&&actor.speed<.6&&Math.abs(side)<2.25)&&ahead>0&&ahead<18&&Math.abs(side)<2.25&&Math.cos(actor.mesh.rotation.y-g.yaw)>.6){target=Math.min(target,Math.max(0,(ahead-5.4)*.63))}
    }
    // A target behind the rear axle needs a parking turn. The ordinary pure-pursuit sine approaches zero directly behind.
    const heading=Math.max(-Math.PI/2,Math.min(Math.PI/2,error));
    const steer=(Math.atan2(2*2.65*Math.sin(heading),Math.max(2,d(g.p,q)))+avoid)/Math.max(.14,.52/(1+speed*.045));
    g.input={gas:speed<target-.1?1:0,brake:speed>target+.9?1:0,steer:Math.max(-1,Math.min(1,steer))};
   }
   if(performance.now()-lastTelemetry>500){Object.assign(g.testState,{k,progress,total:distances.at(-1),p:[...g.p],speed,stop,positionError:best});lastTelemetry=performance.now()}
   await wait(28);
  }
 }finally{g.input={brake:1}}
 return {duration:(performance.now()-startTime)/1000,meters:distances.at(-1),stationaryQueuePasses:passes,finish:[...g.p],error:d(g.p,destination)};
}

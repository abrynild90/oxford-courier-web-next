(async()=>{
 const params=new URLSearchParams(location.hash.slice(1));
 const mode=params.get('mode')||'handoff';
 const report={url:location.href.split('#')[0],userAgent:navigator.userAgent,mode,steps:[],...window.probe};
 const sleep=ms=>new Promise(r=>setTimeout(r,ms));
 const until=async(fn,timeout=90000)=>{const start=performance.now();while(!fn()){if(performance.now()-start>timeout)throw Error('Timed out waiting for game readiness: '+document.querySelector('#loading p')?.textContent);await sleep(75)}};
 const key=code=>{for(const type of ['keydown','keyup'])window.dispatchEvent(new KeyboardEvent(type,{code,bubbles:true}))};
 const click=selector=>{const el=document.querySelector(selector);if(!el)throw Error('Missing '+selector);el.click()};
 const stage=(g,start,end,dusk)=>{
  const route=g.city.route(start,end);
  g.p=[...start];g.carPos=[...start];g.yaw=Math.atan2(route[1][0]-route[0][0],route[1][1]-route[0][1]);g.carYaw=g.yaw;g.orbit=0;g.first=true;g.speed=0;g.dusk=dusk;g.lighting();g.world.update(...g.p);g.tickPosition(1);g.cameraUpdate(1);g.hud();
 };
 const status=text=>{document.title='Oxford QA · '+text;report.steps.push(text)};
 try{
  await until(()=>window.oxford?.ready&&oxford.car.userData.detailed&&oxford.daySky&&oxford.twilightSky);
  const g=oxford;
  // Fix the render buffer exactly, independent of the browser chrome or available screen area.
  g.renderer.setPixelRatio(1.35);g.renderer.setSize(1360,808,false);g.camera.aspect=1360/808;g.camera.updateProjectionMatrix();
  report.buffer=[g.renderer.domElement.width,g.renderer.domElement.height];
  report.bundleSHA256=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',await(await fetch('game.js')).arrayBuffer())),b=>b.toString(16).padStart(2,'0')).join('');
  if(mode==='campus'||mode==='residential'){
   const day=mode==='campus',start=day?[4,-35]:[-46.2,69.1],end=day?[-1337,145.1]:[-228.25,1728.92];
   stage(g,start,end,!day);await until(()=>!g.world.running&&g.world.tiles.get(g.world.center)?.detail);
   g.frames=[];g.streamingFrames=[];status('Driving '+mode);
   report.drive=await driveTest(end);
   const frames=[...g.frames].sort((a,b)=>a-b);
   report.performance={frames:frames.length,meanFPS:frames.length*1000/frames.reduce((a,b)=>a+b,0),p95MS:frames[Math.floor(frames.length*.95)],p99MS:frames[Math.floor(frames.length*.99)],slowest:g.slowestFrame};
  }else if(mode==='cross'){
   const stops=await(await fetch('qa/cross.json')).json();stage(g,stops[0],stops[1],false);await until(()=>!g.world.running);
   const step=g.step.bind(g);g.step=dt=>{for(let i=0;i<3;i++)step(dt)};report.simulationRate=3;report.legs=[];
   for(const end of stops.slice(1)){status('Crossing to '+end.join(','));report.legs.push(await driveTest(end))}
  }else{
   key('KeyM');report.atlas=document.querySelector('#panel').open&&!!document.querySelector('#atlas');click('#close');
   key('KeyT');const dusk=g.dusk;key('KeyT');report.dayDusk=dusk&&!g.dusk;
   key('KeyJ');click('#begin');
   for(const id of mode==='shift'?['grove','square','park']:['grove']){
    click('[data-job="'+id+'"]');status('Delivering to '+id);const job=g.job;
    if(!g.driving){await driveTest(g.carPos,'walk');key('KeyE')}
    const drive=await driveTest(job.park);key('KeyE');if(!g.parked)throw Error('Parking failed');
    const walk=await driveTest(job.drop,'walk');key('KeyF');(report.deliveries??=[]).push({id,drive,walk,accepted:(g.shift||g.lastResult)?.done.includes(id)});
    if(id==='grove'&&mode==='shift'){const step=g.step.bind(g);g.step=dt=>{for(let i=0;i<3;i++)step(dt)};report.rateAfterFirst=3}
   }
   report.completed=(g.shift||g.lastResult)?.done;
  }
  await until(()=>!g.world.running);report.collisions=g.collisions;report.collisionLog=g.collisionLog;report.tileFailures=[...g.world.failed];report.distance=g.distance;report.walked=g.walkDistance;report.bufferEnd=[g.renderer.domElement.width,g.renderer.domElement.height];
 }catch(error){report.failure=String(error);report.stack=error.stack}
 const resources=performance.getEntriesByType('resource');report.resourceCount=resources.length;
 report.failedRequests.push(...resources.filter(r=>r.responseStatus>=400).map(r=>[r.name,r.responseStatus]));
 document.title='Oxford QA · '+(report.failure?'failed':'finished');
 const pre=document.createElement('pre');pre.style='position:fixed;inset:0;z-index:10000;background:white;color:black;overflow:auto';pre.textContent=JSON.stringify(report,null,2);document.body.append(pre);
 if(params.get('local')==='1')location.assign('http://127.0.0.1:8732/result#'+encodeURIComponent(JSON.stringify(report)));
})()

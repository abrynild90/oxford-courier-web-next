// Loaded only by the explicit QA entry point, before the production game.
window.probe={errors:[],failedRequests:[],resourceCount:0};
const originalError=console.error.bind(console);
console.error=(...args)=>{probe.errors.push(args.map(String).join(' ').slice(0,2200));originalError(...args)};
performance.setResourceTimingBufferSize(20000);
window.addEventListener('error',e=>{
 if(e.target!==window){const url=e.target.currentSrc||e.target.src||e.target.href;if(url)probe.failedRequests.push(url)}
 else probe.errors.push(e.message);
},true);
window.addEventListener('unhandledrejection',e=>probe.errors.push(String(e.reason)));
const originalFetch=window.fetch;
window.fetch=async function(...args){
 try{
  const response=await originalFetch.apply(this,args);
  if(!response.ok)probe.failedRequests.push([response.url,response.status]);
  return response;
 }catch(error){probe.failedRequests.push([String(args[0]),String(error)]);throw error}
};

(()=>{var Rs=1;var Ps=3,Oi=0,Is=1,ht=2;var Ls=1;var Ds=100;var Ns=204,Fs=205;var mi=0,gi=1,xi=2,_n=3,yi=4,_i=5,vi=6,bi=7,zn=0,Us=1,Os=2;var ki=1,Bi=2,zi=3,Vi=4,Gi=5,Hi=6,Wi=7;var Xi=300;var ks=302;var wi=1e3,Ut=1001,Mi=1002;var Bs=1006;var zs=1008;var Vs=1009;var Gs=1015;var Hs=1023;var zt=2300,vn=2301,gn=2302,Si=2303,Ti=2400,Ei=2401,Ai=2402;var qi=0;var Yi="",fe="srgb",Ci="srgb-linear",Ri="linear",xn="srgb";var yn=7680;var Ws=519;var Xs=35044;var Ot=2e3,Pi=2001;function Ur(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Or(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Ii(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}var os={},bn=null;function qs(a){let e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ae(...a){a=qs(a);let e="THREE."+a.shift();if(bn)bn("warn",e,...a);else{let t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function se(...a){a=qs(a);let e="THREE."+a.shift();if(bn)bn("error",e,...a);else{let t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function St(...a){let e=a.join(" ");e in os||(os[e]=!0,ae(...a))}var kr={[mi]:mi,[xi]:vi,[yi]:yi,[_n]:_i,[gi]:gi,[vi]:xi,[bi]:bi,[_i]:_n},Ze=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ls=1234567,Ys=Math.PI/180,Ji=180/Math.PI;function Pt(){let a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ue[a&255]+ue[a>>8&255]+ue[a>>16&255]+ue[a>>24&255]+"-"+ue[e&255]+ue[e>>8&255]+"-"+ue[e>>16&15|64]+ue[e>>24&255]+"-"+ue[t&63|128]+ue[t>>8&255]+"-"+ue[t>>16&255]+ue[t>>24&255]+ue[n&255]+ue[n>>8&255]+ue[n>>16&255]+ue[n>>24&255]).toLowerCase()}function $(a,e,t){return Math.max(e,Math.min(t,a))}function Zi(a,e){return(a%e+e)%e}function Br(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function zr(a,e,t){return a!==e?(t-a)/(e-a):0}function Bt(a,e,t){return(1-t)*a+t*e}function Vr(a,e,t,n){return Bt(a,e,1-Math.exp(-t*n))}function Gr(a,e=1){return e-Math.abs(Zi(a,e*2)-e)}function Hr(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Wr(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Xr(a,e){return a+Math.floor(Math.random()*(e-a+1))}function qr(a,e){return a+Math.random()*(e-a)}function Yr(a){return a*(.5-Math.random())}function Jr(a){a!==void 0&&(ls=a);let e=ls+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zr(a){return a*Ys}function $r(a){return a*Ji}function Kr(a){return a>0&&Number.isInteger(a)&&2**Math.round(Math.log2(a))===a}function jr(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Js(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Qr(a,e,t,n,i){let s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),p=r((n-e)/2);switch(i){case"XYX":a.set(o*h,l*u,l*d,o*c);break;case"YZY":a.set(l*d,o*h,l*u,o*c);break;case"ZXZ":a.set(l*u,l*d,o*h,o*c);break;case"XZX":a.set(o*h,l*p,l*f,o*c);break;case"YXY":a.set(l*f,o*h,l*p,o*c);break;case"ZYZ":a.set(l*p,l*f,o*h,o*c);break;default:ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $i(a){switch(a.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Zs(a,e){if(e.constructor===Float32Array)return a;let t=$i(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(a/t,-1)}function $s(a,e){if(e.constructor===Float32Array)return a;let t=$i(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(a*t)}var Vn={DEG2RAD:Ys,RAD2DEG:Ji,generateUUID:Pt,clamp:$,euclideanModulo:Zi,mapLinear:Br,inverseLerp:zr,lerp:Bt,damp:Vr,pingpong:Gr,smoothstep:Hr,smootherstep:Wr,randInt:Xr,randFloat:qr,randFloatSpread:Yr,seededRandom:Jr,degToRad:Zr,radToDeg:$r,isPowerOfTwo:Kr,ceilPowerOfTwo:jr,floorPowerOfTwo:Js,setQuaternionFromProperEuler:Qr,normalize:$s,denormalize:Zs},te=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$(this.x,e.x,t.x),this.y=$(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$(this.x,e,t),this.y=$(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ke=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[r+0],f=s[r+1],p=s[r+2],m=s[r+3];if(u!==m||l!==d||c!==f||h!==p){let x=l*d+c*f+h*p+u*m;x<0&&(d=-d,f=-f,p=-p,m=-m,x=-x);let y=1-o;if(x<.9995){let S=Math.acos(x),b=Math.sin(S);y=Math.sin(y*S)/b,o=Math.sin(o*S)/b,l=l*y+d*o,c=c*y+f*o,h=h*y+p*o,u=u*y+m*o}else{l=l*y+d*o,c=c*y+f*o,h=h*y+p*o,u=u*y+m*o;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],p=s[r+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),p=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+i*c-s*l,this._y=i*h+r*l+s*o-n*c,this._z=s*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cs.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*i-o*n),h=2*(o*t-s*i),u=2*(s*n-r*t);return this.x=t+l*c+r*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$(this.x,e.x,t.x),this.y=$(this.y,e.y,t.y),this.z=$(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$(this.x,e,t),this.y=$(this.y,e,t),this.z=$(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $n.copy(this).projectOnVector(e),this.sub($n)}reflect(e){return this.sub($n.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$n=new C,cs=new ke,q=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,l,c)}set(e,t,n,i,s,r,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=i[0],x=i[3],y=i[6],S=i[1],b=i[4],w=i[7],g=i[2],_=i[5],v=i[8];return s[0]=r*m+o*S+l*g,s[3]=r*x+o*b+l*_,s[6]=r*y+o*w+l*v,s[1]=c*m+h*S+u*g,s[4]=c*x+h*b+u*_,s[7]=c*y+h*w+u*v,s[2]=d*m+f*S+p*g,s[5]=d*x+f*b+p*_,s[8]=d*y+f*w+p*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*s*h+n*o*l+i*s*c-i*r*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*r-o*c,d=o*l-h*s,f=c*s-r*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(i*c-h*n)*m,e[2]=(o*n-i*r)*m,e[3]=d*m,e[4]=(h*t-i*l)*m,e[5]=(i*s-o*t)*m,e[6]=f*m,e[7]=(n*l-c*t)*m,e[8]=(r*t-n*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return St("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kn.makeScale(e,t)),this}rotate(e){return St("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kn.makeRotation(-e)),this}translate(e,t){return St("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Kn=new q,hs=new q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),us=new q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ea(){let a={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===xn&&(i.r=Oe(i.r),i.g=Oe(i.g),i.b=Oe(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===xn&&(i.r=Tt(i.r),i.g=Tt(i.g),i.b=Tt(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yi?Ri:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[Ci]:{primaries:e,whitePoint:n,transfer:Ri,toXYZ:hs,fromXYZ:us,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fe},outputColorSpaceConfig:{drawingBufferColorSpace:fe}},[fe]:{primaries:e,whitePoint:n,transfer:xn,toXYZ:hs,fromXYZ:us,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fe}}}),a}var Me=ea();function Oe(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Tt(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var ft,wn=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ft===void 0&&(ft=Ii("canvas")),ft.width=e.width,ft.height=e.height;let i=ft.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ft}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ii("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Oe(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oe(t[n]/255)*255):t[n]=Oe(t[n]);return{data:t,width:e.width,height:e.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ta=0,Mn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ta++}),this.uuid=Pt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(jn(i[r].image)):s.push(jn(i[r]))}else s=jn(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function jn(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?wn.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}var na=0,Qn=new C,ot=class a extends Ze{constructor(e=a.DEFAULT_IMAGE,t=a.DEFAULT_MAPPING,n=Ut,i=Ut,s=Bs,r=zs,o=Hs,l=Vs,c=a.DEFAULT_ANISOTROPY,h=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:na++}),this.uuid=Pt(),this.name="",this.source=new Mn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Qn).x}get height(){return this.source.getSize(Qn).y}get depth(){return this.source.getSize(Qn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ae(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xi)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wi:e.x=e.x-Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case Mi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wi:e.y=e.y-Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case Mi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ot.DEFAULT_IMAGE=null;ot.DEFAULT_MAPPING=Xi;ot.DEFAULT_ANISOTROPY=1;var Et=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],m=l[2],x=l[6],y=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(p-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(p+x)<.1&&Math.abs(c+f+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,w=(f+1)/2,g=(y+1)/2,_=(h+d)/4,v=(u+m)/4,M=(p+x)/4;return b>w&&b>g?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=_/n,s=v/n):w>g?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=_/i,s=M/i):g<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(g),n=v/s,i=M/s),this.set(n,i,s,t),this}let S=Math.sqrt((x-p)*(x-p)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(x-p)/S,this.y=(u-m)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+y-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$(this.x,e.x,t.x),this.y=$(this.y,e.y,t.y),this.z=$(this.z,e.z,t.z),this.w=$(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$(this.x,e,t),this.y=$(this.y,e,t),this.z=$(this.z,e,t),this.w=$(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var Ce=class a{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,r,o,l,c,h,u,d,f,p,m,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,l,c,h,u,d,f,p,m,x)}set(e,t,n,i,s,r,o,l,c,h,u,d,f,p,m,x){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=r,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=u,y[14]=d,y[3]=f,y[7]=p,y[11]=m,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new a().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/pt.setFromMatrixColumn(e,0).length(),s=1/pt.setFromMatrixColumn(e,1).length(),r=1/pt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=r*h,f=r*u,p=o*h,m=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=p+f*c,t[10]=r*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,m=c*u;t[0]=d+m*o,t[4]=p*o-f,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=f*o-p,t[6]=m+d*o,t[10]=r*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,m=c*u;t[0]=d-m*o,t[4]=-r*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=r*h,t[9]=m-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){let d=r*h,f=r*u,p=o*h,m=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){let d=r*l,f=r*c,p=o*l,m=o*c;t[0]=l*h,t[4]=m-d*u,t[8]=p*u+f,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-m*u}else if(e.order==="XZY"){let d=r*l,f=r*c,p=o*l,m=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+m,t[5]=r*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ia,e,sa)}lookAt(e,t,n){let i=this.elements;return ge.subVectors(e,t),ge.lengthSq()===0&&(ge.z=1),ge.normalize(),We.crossVectors(n,ge),We.lengthSq()===0&&(Math.abs(n.z)===1?ge.x+=1e-4:ge.z+=1e-4,ge.normalize(),We.crossVectors(n,ge)),We.normalize(),$t.crossVectors(ge,We),i[0]=We.x,i[4]=$t.x,i[8]=ge.x,i[1]=We.y,i[5]=$t.y,i[9]=ge.y,i[2]=We.z,i[6]=$t.z,i[10]=ge.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],x=n[10],y=n[14],S=n[3],b=n[7],w=n[11],g=n[15],_=i[0],v=i[4],M=i[8],T=i[12],E=i[1],A=i[5],R=i[9],I=i[13],N=i[2],L=i[6],D=i[10],F=i[14],V=i[3],Y=i[7],W=i[11],ee=i[15];return s[0]=r*_+o*E+l*N+c*V,s[4]=r*v+o*A+l*L+c*Y,s[8]=r*M+o*R+l*D+c*W,s[12]=r*T+o*I+l*F+c*ee,s[1]=h*_+u*E+d*N+f*V,s[5]=h*v+u*A+d*L+f*Y,s[9]=h*M+u*R+d*D+f*W,s[13]=h*T+u*I+d*F+f*ee,s[2]=p*_+m*E+x*N+y*V,s[6]=p*v+m*A+x*L+y*Y,s[10]=p*M+m*R+x*D+y*W,s[14]=p*T+m*I+x*F+y*ee,s[3]=S*_+b*E+w*N+g*V,s[7]=S*v+b*A+w*L+g*Y,s[11]=S*M+b*R+w*D+g*W,s[15]=S*T+b*I+w*F+g*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],x=e[11],y=e[15],S=l*f-c*d,b=o*f-c*u,w=o*d-l*u,g=r*f-c*h,_=r*d-l*h,v=r*u-o*h;return t*(m*S-x*b+y*w)-n*(p*S-x*g+y*_)+i*(p*b-m*g+y*v)-s*(p*w-m*_+x*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(r*h-o*c)-n*(s*h-o*l)+i*(s*c-r*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],x=e[14],y=e[15],S=t*o-n*r,b=t*l-i*r,w=t*c-s*r,g=n*l-i*o,_=n*c-s*o,v=i*c-s*l,M=h*m-u*p,T=h*x-d*p,E=h*y-f*p,A=u*x-d*m,R=u*y-f*m,I=d*y-f*x,N=S*I-b*R+w*A+g*E-_*T+v*M;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/N;return e[0]=(o*I-l*R+c*A)*L,e[1]=(i*R-n*I-s*A)*L,e[2]=(m*v-x*_+y*g)*L,e[3]=(d*_-u*v-f*g)*L,e[4]=(l*E-r*I-c*T)*L,e[5]=(t*I-i*E+s*T)*L,e[6]=(x*w-p*v-y*b)*L,e[7]=(h*v-d*w+f*b)*L,e[8]=(r*R-o*E+c*M)*L,e[9]=(n*E-t*R-s*M)*L,e[10]=(p*_-m*w+y*S)*L,e[11]=(u*w-h*_-f*S)*L,e[12]=(o*T-r*A-l*M)*L,e[13]=(t*A-n*T+i*M)*L,e[14]=(m*b-p*g-x*S)*L,e[15]=(h*g-u*b+d*S)*L,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,h=r+r,u=o+o,d=s*c,f=s*h,p=s*u,m=r*h,x=r*u,y=o*u,S=l*c,b=l*h,w=l*u,g=n.x,_=n.y,v=n.z;return i[0]=(1-(m+y))*g,i[1]=(f+w)*g,i[2]=(p-b)*g,i[3]=0,i[4]=(f-w)*_,i[5]=(1-(d+y))*_,i[6]=(x+S)*_,i[7]=0,i[8]=(p+b)*v,i[9]=(x-S)*v,i[10]=(1-(d+m))*v,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=pt.set(i[0],i[1],i[2]).length(),o=pt.set(i[4],i[5],i[6]).length(),l=pt.set(i[8],i[9],i[10]).length();s<0&&(r=-r),Te.copy(this);let c=1/r,h=1/o,u=1/l;return Te.elements[0]*=c,Te.elements[1]*=c,Te.elements[2]*=c,Te.elements[4]*=h,Te.elements[5]*=h,Te.elements[6]*=h,Te.elements[8]*=u,Te.elements[9]*=u,Te.elements[10]*=u,t.setFromRotationMatrix(Te),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,r,o=Ot,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,m;if(l)p=s/(r-s),m=r*s/(r-s);else if(o===Ot)p=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(o===Pi)p=-r/(r-s),m=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,r,o=Ot,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),p,m;if(l)p=1/(r-s),m=r/(r-s);else if(o===Ot)p=-2/(r-s),m=-(r+s)/(r-s);else if(o===Pi)p=-1/(r-s),m=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},pt=new C,Te=new Ce,ia=new C(0,0,0),sa=new C(1,1,1),We=new C,$t=new C,ge=new C,ds=new Ce,fs=new ke,$e=class a{constructor(e=0,t=0,n=0,i=a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin($(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin($(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin($(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ds.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ds,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fs.setFromEuler(this),this.setFromQuaternion(fs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$e.DEFAULT_ORDER="XYZ";var Sn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ra=0,ps=new C,mt=new ke,Le=new Ce,Kt=new C,Lt=new C,aa=new C,oa=new ke,ms=new C(1,0,0),gs=new C(0,1,0),xs=new C(0,0,1),ys={type:"added"},la={type:"removed"},gt={type:"childadded",child:null},ei={type:"childremoved",child:null},Be=class a extends Ze{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ra++}),this.uuid=Pt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let e=new C,t=new $e,n=new ke,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new q}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mt.setFromAxisAngle(e,t),this.quaternion.multiply(mt),this}rotateOnWorldAxis(e,t){return mt.setFromAxisAngle(e,t),this.quaternion.premultiply(mt),this}rotateX(e){return this.rotateOnAxis(ms,e)}rotateY(e){return this.rotateOnAxis(gs,e)}rotateZ(e){return this.rotateOnAxis(xs,e)}translateOnAxis(e,t){return ps.copy(e).applyQuaternion(this.quaternion),this.position.add(ps.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ms,e)}translateY(e){return this.translateOnAxis(gs,e)}translateZ(e){return this.translateOnAxis(xs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Le.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kt.copy(e):Kt.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Lt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Le.lookAt(Lt,Kt,this.up):Le.lookAt(Kt,Lt,this.up),this.quaternion.setFromRotationMatrix(Le),i&&(Le.extractRotation(i.matrixWorld),mt.setFromRotationMatrix(Le),this.quaternion.premultiply(mt.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(se("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ys),gt.child=e,this.dispatchEvent(gt),gt.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(la),ei.child=e,this.dispatchEvent(ei),ei.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Le.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Le.multiply(e.parent.matrixWorld)),e.applyMatrix4(Le),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ys),gt.child=e,this.dispatchEvent(gt),gt.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lt,e,aa),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lt,oa,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),p=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Be.DEFAULT_UP=new C(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var lt=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}};var Ks={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xe={h:0,s:0,l:0},jt={h:0,s:0,l:0};function ti(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}var Q=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Me.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Me.workingColorSpace){return this.r=e,this.g=t,this.b=n,Me.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Me.workingColorSpace){if(e=Zi(e,1),t=$(t,0,1),n=$(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=ti(r,s,e+1/3),this.g=ti(r,s,e),this.b=ti(r,s,e-1/3)}return Me.colorSpaceToWorking(this,i),this}setStyle(e,t=fe){function n(s){s!==void 0&&parseFloat(s)<1&&ae("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ae("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fe){let n=Ks[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oe(e.r),this.g=Oe(e.g),this.b=Oe(e.b),this}copyLinearToSRGB(e){return this.r=Tt(e.r),this.g=Tt(e.g),this.b=Tt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fe){return Me.workingToColorSpace(de.copy(this),e),Math.round($(de.r*255,0,255))*65536+Math.round($(de.g*255,0,255))*256+Math.round($(de.b*255,0,255))}getHexString(e=fe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Me.workingColorSpace){Me.workingToColorSpace(de.copy(this),t);let n=de.r,i=de.g,s=de.b,r=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Me.workingColorSpace){return Me.workingToColorSpace(de.copy(this),t),e.r=de.r,e.g=de.g,e.b=de.b,e}getStyle(e=fe){Me.workingToColorSpace(de.copy(this),e);let t=de.r,n=de.g,i=de.b;return e!==fe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xe),this.setHSL(Xe.h+e,Xe.s+t,Xe.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xe),e.getHSL(jt);let n=Bt(Xe.h,jt.h,t),i=Bt(Xe.s,jt.s,t),s=Bt(Xe.l,jt.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},de=new Q;Q.NAMES=Ks;var Ee=new C,De=new C,ni=new C,Ne=new C,xt=new C,yt=new C,_s=new C,ii=new C,si=new C,ri=new C,ai=new Et,oi=new Et,li=new Et,Je=class a{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ee.subVectors(e,t),i.cross(Ee);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ee.subVectors(i,t),De.subVectors(n,t),ni.subVectors(e,t);let r=Ee.dot(Ee),o=Ee.dot(De),l=Ee.dot(ni),c=De.dot(De),h=De.dot(ni),u=r*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(r*h-o*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ne)===null?!1:Ne.x>=0&&Ne.y>=0&&Ne.x+Ne.y<=1}static getInterpolation(e,t,n,i,s,r,o,l){return this.getBarycoord(e,t,n,i,Ne)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ne.x),l.addScaledVector(r,Ne.y),l.addScaledVector(o,Ne.z),l)}static getInterpolatedAttribute(e,t,n,i,s,r){return ai.setScalar(0),oi.setScalar(0),li.setScalar(0),ai.fromBufferAttribute(e,t),oi.fromBufferAttribute(e,n),li.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(ai,s.x),r.addScaledVector(oi,s.y),r.addScaledVector(li,s.z),r}static isFrontFacing(e,t,n,i){return Ee.subVectors(n,t),De.subVectors(e,t),Ee.cross(De).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ee.subVectors(this.c,this.b),De.subVectors(this.a,this.b),Ee.cross(De).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return a.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return a.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,o;xt.subVectors(i,n),yt.subVectors(s,n),ii.subVectors(e,n);let l=xt.dot(ii),c=yt.dot(ii);if(l<=0&&c<=0)return t.copy(n);si.subVectors(e,i);let h=xt.dot(si),u=yt.dot(si);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return r=l/(l-h),t.copy(n).addScaledVector(xt,r);ri.subVectors(e,s);let f=xt.dot(ri),p=yt.dot(ri);if(p>=0&&f<=p)return t.copy(s);let m=f*c-l*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(yt,o);let x=h*p-f*u;if(x<=0&&u-h>=0&&f-p>=0)return _s.subVectors(s,i),o=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(_s,o);let y=1/(x+m+d);return r=m*y,o=d*y,t.copy(n).addScaledVector(xt,r).addScaledVector(yt,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ke=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ae.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ae.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ae.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Ae):Ae.fromBufferAttribute(s,r),Ae.applyMatrix4(e.matrixWorld),this.expandByPoint(Ae);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qt.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qt.copy(n.boundingBox)),Qt.applyMatrix4(e.matrixWorld),this.union(Qt)}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ae),Ae.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dt),en.subVectors(this.max,Dt),_t.subVectors(e.a,Dt),vt.subVectors(e.b,Dt),bt.subVectors(e.c,Dt),qe.subVectors(vt,_t),Ye.subVectors(bt,vt),st.subVectors(_t,bt);let t=[0,-qe.z,qe.y,0,-Ye.z,Ye.y,0,-st.z,st.y,qe.z,0,-qe.x,Ye.z,0,-Ye.x,st.z,0,-st.x,-qe.y,qe.x,0,-Ye.y,Ye.x,0,-st.y,st.x,0];return!ci(t,_t,vt,bt,en)||(t=[1,0,0,0,1,0,0,0,1],!ci(t,_t,vt,bt,en))?!1:(tn.crossVectors(qe,Ye),t=[tn.x,tn.y,tn.z],ci(t,_t,vt,bt,en))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ae).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ae).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fe),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fe=[new C,new C,new C,new C,new C,new C,new C,new C],Ae=new C,Qt=new Ke,_t=new C,vt=new C,bt=new C,qe=new C,Ye=new C,st=new C,Dt=new C,en=new C,tn=new C,rt=new C;function ci(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){rt.fromArray(a,s);let o=i.x*Math.abs(rt.x)+i.y*Math.abs(rt.y)+i.z*Math.abs(rt.z),l=e.dot(rt),c=t.dot(rt),h=n.dot(rt);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var le=new C,nn=new te,ca=0,pe=class extends Ze{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ca++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xs,this.updateRanges=[],this.gpuType=Gs,this.version=0,this._normalizationScale=e!==void 0?$i(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXY(t,nn.x,nn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)le.fromBufferAttribute(this,t),le.applyMatrix3(e),this.setXYZ(t,le.x,le.y,le.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)le.fromBufferAttribute(this,t),le.applyMatrix4(e),this.setXYZ(t,le.x,le.y,le.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)le.fromBufferAttribute(this,t),le.applyNormalMatrix(e),this.setXYZ(t,le.x,le.y,le.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)le.fromBufferAttribute(this,t),le.transformDirection(e),this.setXYZ(t,le.x,le.y,le.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zs(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):$s(e,this.array)}};var Tn=class extends pe{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var En=class extends pe{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ye=class extends pe{constructor(e,t,n){super(new Float32Array(e),t,n)}},ha=new Ke,Nt=new C,hi=new C,Vt=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ha.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nt.subVectors(e,this.center);let t=Nt.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Nt,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hi.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nt.copy(e.center).add(hi)),this.expandByPoint(Nt.copy(e.center).sub(hi))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ua=0,we=new Ce,ui=new Be,wt=new C,xe=new Ke,Ft=new Ke,he=new C,Re=class a extends Ze{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ua++}),this.uuid=Pt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ur(e)?En:Tn)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new q().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return we.makeRotationFromQuaternion(e),this.applyMatrix4(we),this}rotateX(e){return we.makeRotationX(e),this.applyMatrix4(we),this}rotateY(e){return we.makeRotationY(e),this.applyMatrix4(we),this}rotateZ(e){return we.makeRotationZ(e),this.applyMatrix4(we),this}translate(e,t,n){return we.makeTranslation(e,t,n),this.applyMatrix4(we),this}scale(e,t,n){return we.makeScale(e,t,n),this.applyMatrix4(we),this}lookAt(e){return ui.lookAt(e),ui.updateMatrix(),this.applyMatrix4(ui.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wt).negate(),this.translate(wt.x,wt.y,wt.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ye(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ke);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];xe.setFromBufferAttribute(s),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,xe.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,xe.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(xe.min),this.boundingBox.expandByPoint(xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(xe.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];Ft.setFromBufferAttribute(o),this.morphTargetsRelative?(he.addVectors(xe.min,Ft.min),xe.expandByPoint(he),he.addVectors(xe.max,Ft.max),xe.expandByPoint(he)):(xe.expandByPoint(Ft.min),xe.expandByPoint(Ft.max))}xe.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)he.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(he));if(t)for(let s=0,r=t.length;s<r;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)he.fromBufferAttribute(o,c),l&&(wt.fromBufferAttribute(e,c),he.add(wt)),i=Math.max(i,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new pe(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let o=[],l=[],c=new Uint8Array(n.count);for(let T=0;T<n.count;T++)o[T]=new C,l[T]=new C;let h=new C,u=new C,d=new C,f=new te,p=new te,m=new te,x=new C,y=new C;function S(T,E,A){c[T]=c[E]=c[A]=1,h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,A),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),u.sub(h),d.sub(h),p.sub(f),m.sub(f);let R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(R),y.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(R),o[T].add(x),o[E].add(x),o[A].add(x),l[T].add(y),l[E].add(y),l[A].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,E=b.length;T<E;++T){let A=b[T],R=A.start,I=A.count;for(let N=R,L=R+I;N<L;N+=3)S(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let w=new C,g=new C,_=new C,v=new C;function M(T){_.fromBufferAttribute(i,T),v.copy(_);let E=o[T];w.copy(E),w.sub(_.multiplyScalar(_.dot(E))).normalize(),g.crossVectors(v,E);let R=g.dot(l[T])<0?-1:1;r.setXYZW(T,w.x,w.y,w.z,R)}for(let T=0,E=n.count;T<E;++T)c[T]&&M(T);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new pe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new C,s=new C,r=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),m=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)he.fromBufferAttribute(e,t),he.normalize(),e.setXYZ(t,he.x,he.y,he.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let m=0,x=l.length;m<x;m++){o.isInterleavedBufferAttribute?f=l[m]*o.data.stride+o.offset:f=l[m]*h;for(let y=0;y<h;y++)d[p++]=c[f++]}return new pe(d,h,u)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new a,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,h=r.length;c<h;c++){let u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var di=new C,da=new C,fa=new q,An=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=di.subVectors(n,t).cross(da.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(di),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fa.getNormalMatrix(e),i=this.coplanarPoint(di).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},pa=0,At=class extends Ze{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pa++}),this.uuid=Pt(),this.name="",this.type="Material",this.blending=Ls,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ns,this.blendDst=Fs,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Q(0,0,0),this.blendAlpha=0,this.depthFunc=_n,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ws,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yn,this.stencilZFail=yn,this.stencilZPass=yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ae(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(t){let s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Q().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new An().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new te().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ue=new C,fi=new C,sn=new C,rn=new C,Cn=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ue)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ue.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ue.copy(this.origin).addScaledVector(this.direction,t),Ue.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fi.copy(e).add(t).multiplyScalar(.5),sn.copy(t).sub(e).normalize(),rn.copy(this.origin).sub(fi);let s=e.distanceTo(t)*.5,r=-this.direction.dot(sn),o=rn.dot(this.direction),l=-rn.dot(sn),c=rn.lengthSq(),h=Math.abs(1-r*r),u,d,f,p;if(h>0)if(u=r*l-o,d=r*o-l,p=s*h,u>=0)if(d>=-p)if(d<=p){let m=1/h;u*=m,d*=m,f=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-r*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(r*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(fi).addScaledVector(sn,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ue.subVectors(e.center,this.origin);let n=Ue.dot(this.direction),i=Ue.dot(Ue)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ue)!==null}intersectTriangle(e,t,n,i,s){let r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-r.x,d=e.y-r.y,f=e.z-r.z,p=t.x-r.x,m=t.y-r.y,x=t.z-r.z,y=n.x-r.x,S=n.y-r.y,b=n.z-r.z,w=Math.abs(l),g=Math.abs(c),_=Math.abs(h),v,M,T,E,A,R,I,N,L,D,F,V;if(w>=g&&w>=_?(T=l,R=u,L=p,V=y,l>=0?(v=c,M=h,E=d,A=f,I=m,N=x,D=S,F=b):(v=h,M=c,E=f,A=d,I=x,N=m,D=b,F=S)):g>=_?(T=c,R=d,L=m,V=S,c>=0?(v=h,M=l,E=f,A=u,I=x,N=p,D=b,F=y):(v=l,M=h,E=u,A=f,I=p,N=x,D=y,F=b)):(T=h,R=f,L=x,V=b,h>=0?(v=l,M=c,E=u,A=d,I=p,N=m,D=y,F=S):(v=c,M=l,E=d,A=u,I=m,N=p,D=S,F=y)),T===0)return null;let Y=v/T,W=M/T,ee=1/T,P=E-Y*R,U=A-W*R,k=I-Y*L,B=N-W*L,X=D-Y*V,Z=F-W*V,G=X*B-Z*k,J=P*Z-U*X,z=k*U-B*P;if(i){if(G<0||J<0||z<0)return null}else if((G<0||J<0||z<0)&&(G>0||J>0||z>0))return null;let K=G+J+z;if(K===0)return null;let ie=ee*(G*R+J*L+z*V);return(K>0?ie<0:ie>0)?null:this.at(ie/K,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rn=class extends At{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=zn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vs=new Ce,at=new Cn,an=new Vt,bs=new C,on=new C,ln=new C,cn=new C,pi=new C,hn=new C,ws=new C,un=new C,je=class extends Be{constructor(e=new Re,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){hn.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(pi.fromBufferAttribute(u,e),r?hn.addScaledVector(pi,h):hn.addScaledVector(pi.sub(t),h))}t.add(hn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),an.copy(n.boundingSphere),an.applyMatrix4(s),at.copy(e.ray).recast(e.near),!(an.containsPoint(at.origin)===!1&&(at.intersectSphere(an,bs)===null||at.origin.distanceToSquared(bs)>(e.far-e.near)**2))&&(vs.copy(s).invert(),at.copy(e.ray).applyMatrix4(vs),!(n.boundingBox!==null&&at.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,at)))}_computeIntersections(e,t,n){let i,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,m=d.length;p<m;p++){let x=d[p],y=r[x.materialIndex],S=Math.max(x.start,f.start),b=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let w=S,g=b;w<g;w+=3){let _=o.getX(w),v=o.getX(w+1),M=o.getX(w+2);i=dn(this,y,e,n,c,h,u,_,v,M),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),m=Math.min(o.count,f.start+f.count);for(let x=p,y=m;x<y;x+=3){let S=o.getX(x),b=o.getX(x+1),w=o.getX(x+2);i=dn(this,r,e,n,c,h,u,S,b,w),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,m=d.length;p<m;p++){let x=d[p],y=r[x.materialIndex],S=Math.max(x.start,f.start),b=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let w=S,g=b;w<g;w+=3){let _=w,v=w+1,M=w+2;i=dn(this,y,e,n,c,h,u,_,v,M),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let x=p,y=m;x<y;x+=3){let S=x,b=x+1,w=x+2;i=dn(this,r,e,n,c,h,u,S,b,w),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}};function ma(a,e,t,n,i,s,r,o){let l;if(e.side===Is?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===Oi,o),l===null)return null;un.copy(o),un.applyMatrix4(a.matrixWorld);let c=t.ray.origin.distanceTo(un);return c<t.near||c>t.far?null:{distance:c,point:un.clone(),object:a}}function dn(a,e,t,n,i,s,r,o,l,c){a.getVertexPosition(o,on),a.getVertexPosition(l,ln),a.getVertexPosition(c,cn);let h=ma(a,e,t,n,on,ln,cn,ws);if(h){let u=new C;Je.getBarycoord(ws,on,ln,cn,u),i&&(h.uv=Je.getInterpolatedAttribute(i,o,l,c,u,new te)),s&&(h.uv1=Je.getInterpolatedAttribute(s,o,l,c,u,new te)),r&&(h.normal=Je.getInterpolatedAttribute(r,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};Je.getNormal(on,ln,cn,d.normal),h.face=d,h.barycoord=u}return h}var Ct=class extends ot{constructor(e,t,n,i,s,r,o,l,c){super(e,t,n,i,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};function ga(a,e,t=2){let n=e&&e.length,i=n?e[0]*t:a.length,s=js(a,0,i,t,!0),r=[];if(!s||s.next===s.prev)return r;let o,l,c;if(n&&(s=ba(a,e,s,t)),a.length>80*t){o=a[0],l=a[1];let h=o,u=l;for(let d=t;d<i;d+=t){let f=a[d],p=a[d+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Gt(s,r,t,o,l,c,0),r}function js(a,e,t,n,i){let s;if(i===La(a,e,t,n)>0)for(let r=e;r<t;r+=n)s=Ms(r/n|0,a[r],a[r+1],s);else for(let r=t-n;r>=e;r-=n)s=Ms(r/n|0,a[r],a[r+1],s);return s&&Rt(s,s.next)&&(Wt(s),s=s.next),s}function ct(a,e){if(!a)return a;e||(e=a);let t=a,n;do if(n=!1,!t.steiner&&(Rt(t,t.next)||re(t.prev,t,t.next)===0)){if(Wt(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Gt(a,e,t,n,i,s,r){if(!a)return;!r&&s&&Ea(a,n,i,s);let o=a;for(;a.prev!==a.next;){let l=a.prev,c=a.next;if(s?ya(a,n,i,s):xa(a)){e.push(l.i,a.i,c.i),Wt(a),a=c.next,o=c.next;continue}if(a=c,a===o){r?r===1?(a=_a(ct(a),e),Gt(a,e,t,n,i,s,2)):r===2&&va(a,e,t,n,i,s):Gt(ct(a),e,t,n,i,s,1);break}}}function xa(a){let e=a.prev,t=a,n=a.next;if(re(e,t,n)>=0)return!1;let i=e.x,s=t.x,r=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,s,r),u=Math.min(o,l,c),d=Math.max(i,s,r),f=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&kt(i,o,s,l,r,c,p.x,p.y)&&re(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ya(a,e,t,n){let i=a.prev,s=a,r=a.next;if(re(i,s,r)>=0)return!1;let o=i.x,l=s.x,c=r.x,h=i.y,u=s.y,d=r.y,f=Math.min(o,l,c),p=Math.min(h,u,d),m=Math.max(o,l,c),x=Math.max(h,u,d),y=Li(f,p,e,t,n),S=Li(m,x,e,t,n),b=a.prevZ,w=a.nextZ;for(;b&&b.z>=y&&w&&w.z<=S;){if(b.x>=f&&b.x<=m&&b.y>=p&&b.y<=x&&b!==i&&b!==r&&kt(o,h,l,u,c,d,b.x,b.y)&&re(b.prev,b,b.next)>=0||(b=b.prevZ,w.x>=f&&w.x<=m&&w.y>=p&&w.y<=x&&w!==i&&w!==r&&kt(o,h,l,u,c,d,w.x,w.y)&&re(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;b&&b.z>=y;){if(b.x>=f&&b.x<=m&&b.y>=p&&b.y<=x&&b!==i&&b!==r&&kt(o,h,l,u,c,d,b.x,b.y)&&re(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;w&&w.z<=S;){if(w.x>=f&&w.x<=m&&w.y>=p&&w.y<=x&&w!==i&&w!==r&&kt(o,h,l,u,c,d,w.x,w.y)&&re(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function _a(a,e){let t=a;do{let n=t.prev,i=t.next.next;!Rt(n,i)&&er(n,t,t.next,i)&&Ht(n,i)&&Ht(i,n)&&(e.push(n.i,t.i,i.i),Wt(t),Wt(t.next),t=a=i),t=t.next}while(t!==a);return ct(t)}function va(a,e,t,n,i,s){let r=a;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&Ra(r,o)){let l=tr(r,o);r=ct(r,r.next),l=ct(l,l.next),Gt(r,e,t,n,i,s,0),Gt(l,e,t,n,i,s,0);return}o=o.next}r=r.next}while(r!==a)}function ba(a,e,t,n){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s]*n,l=s<r-1?e[s+1]*n:a.length,c=js(a,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Ca(c))}i.sort(wa);for(let s=0;s<i.length;s++)t=Ma(i[s],t);return t}function wa(a,e){let t=a.x-e.x;if(t===0&&(t=a.y-e.y,t===0)){let n=(a.next.y-a.y)/(a.next.x-a.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Ma(a,e){let t=Sa(a,e);if(!t)return e;let n=tr(t,a);return ct(n,n.next),ct(t,t.next)}function Sa(a,e){let t=e,n=a.x,i=a.y,s=-1/0,r;if(Rt(a,t))return t;do{if(Rt(a,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,r=t.x<t.next.x?t:t.next,u===n))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,l=r.x,c=r.y,h=1/0;t=r;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Qs(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);Ht(t,a)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&Ta(r,t)))&&(r=t,h=u)}t=t.next}while(t!==o);return r}function Ta(a,e){return re(a.prev,a,e.prev)<0&&re(e.next,a,a.next)<0}function Ea(a,e,t,n){let i=a;do i.z===0&&(i.z=Li(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,Aa(i)}function Aa(a){let e,t=1;do{let n=a,i;a=null;let s=null;for(e=0;n;){e++;let r=n,o=0;for(let c=0;c<t&&(o++,r=r.nextZ,!!r);c++);let l=t;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,o--):(i=r,r=r.nextZ,l--),s?s.nextZ=i:a=i,i.prevZ=s,s=i;n=r}s.nextZ=null,t*=2}while(e>1);return a}function Li(a,e,t,n,i){return a=(a-t)*i|0,e=(e-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function Ca(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function Qs(a,e,t,n,i,s,r,o){return(i-r)*(e-o)>=(a-r)*(s-o)&&(a-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(s-o)>=(i-r)*(n-o)}function kt(a,e,t,n,i,s,r,o){return!(a===r&&e===o)&&Qs(a,e,t,n,i,s,r,o)}function Ra(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!Pa(a,e)&&(Ht(a,e)&&Ht(e,a)&&Ia(a,e)&&(re(a.prev,a,e.prev)||re(a,e.prev,e))||Rt(a,e)&&re(a.prev,a,a.next)>0&&re(e.prev,e,e.next)>0)}function re(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function Rt(a,e){return a.x===e.x&&a.y===e.y}function er(a,e,t,n){let i=pn(re(a,e,t)),s=pn(re(a,e,n)),r=pn(re(t,n,a)),o=pn(re(t,n,e));return!!(i!==s&&r!==o||i===0&&fn(a,t,e)||s===0&&fn(a,n,e)||r===0&&fn(t,a,n)||o===0&&fn(t,e,n))}function fn(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function pn(a){return a>0?1:a<0?-1:0}function Pa(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&er(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function Ht(a,e){return re(a.prev,a,a.next)<0?re(a,e,a.next)>=0&&re(a,a.prev,e)>=0:re(a,e,a.prev)<0||re(a,a.next,e)<0}function Ia(a,e){let t=a,n=!1,i=(a.x+e.x)/2,s=(a.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==a);return n}function tr(a,e){let t=Di(a.i,a.x,a.y),n=Di(e.i,e.x,e.y),i=a.next,s=e.prev;return a.next=e,e.prev=a,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ms(a,e,t,n){let i=Di(a,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Wt(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Di(a,e,t){return{i:a,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function La(a,e,t,n){let i=0;for(let s=e,r=t-n;s<t;s+=n)i+=(a[r]-a[s])*(a[s+1]+a[r+1]),r=s;return i}var Ni=class{static triangulate(e,t,n=2){return ga(e,t,n)}},ze=class a{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return a.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Ss(e),Ts(n,e);let r=e.length;t.forEach(Ss);for(let l=0;l<t.length;l++)i.push(r),r+=t[l].length,Ts(n,t[l]);let o=Ni.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Ss(a){let e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function Ts(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}function nr(a){let e={};for(let t in a){e[t]={};for(let n in a[t]){let i=a[t][n];if(Es(i))i.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Es(i[0])){let s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function me(a){let e={};for(let t=0;t<a.length;t++){let n=nr(a[t]);for(let i in n)e[i]=n[i]}return e}function Es(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}var Ve=class extends At{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qi,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xt=class extends Ve{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Q(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Q(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Q(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return St('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){St('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var qt=class extends At{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qi,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=zn,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Mt(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function mn(a){return a!==void 0&&a.inTangents!==void 0&&a.outTangents!==void 0}var Qe=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){let o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pn=class extends Qe{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ti,endingEnd:Ti}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ei:s=e,o=2*t-n;break;case Ai:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ei:r=e,l=2*n-t;break;case Ai:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),m=p*p,x=m*p,y=-d*x+2*d*m-d*p,S=(1+d)*x+(-1.5-2*d)*m+(-.5+d)*p+1,b=(-1-f)*x+(1.5+f)*m+.5*p,w=f*x-f*m;for(let g=0;g!==o;++g)s[g]=y*r[h+g]+S*r[c+g]+b*r[l+g]+w*r[u+g];return s}},In=class extends Qe{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}},Ln=class extends Qe{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Dn=class extends Qe{interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),m=1-p;for(let x=0;x!==o;++x)s[x]=r[c+x]*m+r[l+x]*p;return s}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let m=r[c+p],x=r[l+p],y=f*d+p*2,S=u[y],b=u[y+1],w=e*d+p*2,g=h[w],_=h[w+1],v=Na(n,t,S,g,i);s[p]=ir(v,m,b,_,x)}return s}};function ir(a,e,t,n,i){let s=1-a;return s*s*s*e+3*s*s*a*t+3*s*a*a*n+a*a*a*i}function Da(a,e,t,n,i){let s=1-a;return 3*s*s*(t-e)+6*s*a*(n-t)+3*a*a*(i-n)}function Na(a,e,t,n,i){let s=(a-e)/(i-e);for(let r=0;r<8;r++){let o=ir(s,e,t,n,i)-a;if(Math.abs(o)<1e-10)break;let l=Da(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var _e=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mt(t,this.TimeBufferType),this.values=Mt(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mt(e.times,Array),values:Mt(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),mn(e.settings)&&(n.settings={inTangents:Mt(e.settings.inTangents,Array),outTangents:Mt(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ln(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new In(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pn(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Dn(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case zt:t=this.InterpolantFactoryMethodDiscrete;break;case vn:t=this.InterpolantFactoryMethodLinear;break;case gn:t=this.InterpolantFactoryMethodSmooth;break;case Si:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zt;case this.InterpolantFactoryMethodLinear:return vn;case this.InterpolantFactoryMethodSmooth:return gn;case this.InterpolantFactoryMethodBezier:return Si}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;mn(this.settings)&&(As(this.settings.inTangents,e),As(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;mn(this.settings)&&(Cs(this.settings.inTangents,e),Cs(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(se("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(se("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){se("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){se("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&Or(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){se("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===gn,s=e.length-1,r=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let m=t[u+p];if(m!==t[d+p]||m!==t[f+p]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let u=o*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,mn(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function As(a,e){for(let t=0,n=a.length;t!==n;t+=2)a[t]+=e}function Cs(a,e){for(let t=0,n=a.length;t!==n;t+=2)a[t]*=e}_e.prototype.ValueTypeName="";_e.prototype.TimeBufferType=Float32Array;_e.prototype.ValueBufferType=Float32Array;_e.prototype.DefaultInterpolation=vn;var et=class extends _e{constructor(e,t,n){super(e,t,n)}};et.prototype.ValueTypeName="bool";et.prototype.ValueBufferType=Array;et.prototype.DefaultInterpolation=zt;et.prototype.InterpolantFactoryMethodLinear=void 0;et.prototype.InterpolantFactoryMethodSmooth=void 0;var Nn=class extends _e{constructor(e,t,n,i){super(e,t,n,i)}};Nn.prototype.ValueTypeName="color";var Fn=class extends _e{constructor(e,t,n,i){super(e,t,n,i)}};Fn.prototype.ValueTypeName="number";var Un=class extends Qe{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)ke.slerpFlat(s,0,r,c-o,r,c,l);return s}},Yt=class extends _e{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Un(this.times,this.values,this.getValueSize(),e)}};Yt.prototype.ValueTypeName="quaternion";Yt.prototype.InterpolantFactoryMethodSmooth=void 0;var tt=class extends _e{constructor(e,t,n){super(e,t,n)}};tt.prototype.ValueTypeName="string";tt.prototype.ValueBufferType=Array;tt.prototype.DefaultInterpolation=zt;tt.prototype.InterpolantFactoryMethodLinear=void 0;tt.prototype.InterpolantFactoryMethodSmooth=void 0;var On=class extends _e{constructor(e,t,n,i){super(e,t,n,i)}};On.prototype.ValueTypeName="vector";var kn=class{constructor(e,t,n){let i=this,s=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},sr=new kn,Bn=class{constructor(e){this.manager=e!==void 0?e:sr,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Bn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki="\\[\\]\\.:\\/",Fa=new RegExp("["+Ki+"]","g"),ji="[^"+Ki+"]",Ua="[^"+Ki.replace("\\.","")+"]",Oa=/((?:WC+[\/:])*)/.source.replace("WC",ji),ka=/(WCOD+)?/.source.replace("WCOD",Ua),Ba=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ji),za=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ji),Va=new RegExp("^"+Oa+ka+Ba+za+"$"),Ga=["material","materials","bones","map"],Fi=class{constructor(e,t,n){let i=n||ne.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ne=class a{constructor(e,t,n){this.path=t,this.parsedPath=n||a.parseTrackName(t),this.node=a.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new a.Composite(e,t,n):new a(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fa,"")}static parseTrackName(e){let t=Va.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Ga.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=a.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){se("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){se("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){se("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){se("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){se("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let r=e[i];if(r===void 0){let c=t.nodeName;se("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ne.Composite=Fi;ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ne.prototype.GetterByBindingType=[ne.prototype._getValue_direct,ne.prototype._getValue_array,ne.prototype._getValue_arrayElement,ne.prototype._getValue_toArray];ne.prototype.SetterByBindingTypeAndVersioning=[[ne.prototype._setValue_direct,ne.prototype._setValue_direct_setNeedsUpdate,ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_array,ne.prototype._setValue_array_setNeedsUpdate,ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_arrayElement,ne.prototype._setValue_arrayElement_setNeedsUpdate,ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_fromArray,ne.prototype._setValue_fromArray_setNeedsUpdate,ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $c=new Float32Array(1);var Ui=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");var Xa=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qa=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ya=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ja=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Za=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$a=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ka=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ja=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qa=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,eo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,to=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,no=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,io=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,so=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ro=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ao=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,co=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ho=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,po=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mo=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,go=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xo=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_o=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bo="gl_FragColor = linearToOutputTexel( gl_FragColor );",wo=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mo=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,So=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,To=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Eo=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ao=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Co=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ro=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Po=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Io=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lo=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Do=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,No=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fo=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uo=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Oo=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ko=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bo=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zo=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vo=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Go=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ho=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wo=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xo=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qo=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yo=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Jo=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zo=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$o=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ko=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jo=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qo=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,el=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tl=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,il=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rl=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,al=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ol=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ll=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hl=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ul=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pl=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ml=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_l=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vl=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ml=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,El=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Al=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cl=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Il=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ll=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nl=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ul=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ol=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kl=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bl=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zl=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ql=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jl=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$l=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jl=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ql=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ec=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ic=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sc=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ac=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lc=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cc=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fc=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mc=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gc=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_c=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bc=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wc=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,j={alphahash_fragment:Xa,alphahash_pars_fragment:qa,alphamap_fragment:Ya,alphamap_pars_fragment:Ja,alphatest_fragment:Za,alphatest_pars_fragment:$a,aomap_fragment:Ka,aomap_pars_fragment:ja,batching_pars_vertex:Qa,batching_vertex:eo,begin_vertex:to,beginnormal_vertex:no,bsdfs:io,iridescence_fragment:so,bumpmap_pars_fragment:ro,clipping_planes_fragment:ao,clipping_planes_pars_fragment:oo,clipping_planes_pars_vertex:lo,clipping_planes_vertex:co,color_fragment:ho,color_pars_fragment:uo,color_pars_vertex:fo,color_vertex:po,common:mo,defaultnormal_vertex:go,displacementmap_pars_vertex:xo,displacementmap_vertex:yo,emissivemap_fragment:_o,emissivemap_pars_fragment:vo,colorspace_fragment:bo,colorspace_pars_fragment:wo,envmap_fragment:Mo,envmap_common_pars_fragment:So,envmap_pars_fragment:To,envmap_pars_vertex:Eo,envmap_physical_pars_fragment:Oo,envmap_vertex:Ao,fog_vertex:Co,fog_pars_vertex:Ro,fog_fragment:Po,fog_pars_fragment:Io,gradientmap_pars_fragment:Lo,lightmap_pars_fragment:Do,lights_lambert_fragment:No,lights_lambert_pars_fragment:Fo,lights_pars_begin:Uo,lights_toon_fragment:ko,lights_toon_pars_fragment:Bo,lights_phong_fragment:zo,lights_phong_pars_fragment:Vo,lights_physical_fragment:Go,lights_physical_pars_fragment:Ho,lights_fragment_begin:Wo,lights_fragment_maps:Xo,lights_fragment_end:qo,lightprobes_pars_fragment:Yo,logdepthbuf_fragment:Jo,logdepthbuf_pars_fragment:Zo,logdepthbuf_pars_vertex:$o,logdepthbuf_vertex:Ko,map_fragment:jo,map_pars_fragment:Qo,map_particle_fragment:el,map_particle_pars_fragment:tl,metalnessmap_fragment:nl,metalnessmap_pars_fragment:il,morphinstance_vertex:sl,morphcolor_vertex:rl,morphnormal_vertex:al,morphtarget_pars_vertex:ol,morphtarget_vertex:ll,normal_fragment_begin:cl,normal_fragment_maps:hl,normal_pars_fragment:ul,normal_pars_vertex:dl,normal_vertex:fl,normalmap_pars_fragment:pl,clearcoat_normal_fragment_begin:ml,clearcoat_normal_fragment_maps:gl,clearcoat_pars_fragment:xl,iridescence_pars_fragment:yl,opaque_fragment:_l,packing:vl,premultiplied_alpha_fragment:bl,project_vertex:wl,dithering_fragment:Ml,dithering_pars_fragment:Sl,roughnessmap_fragment:Tl,roughnessmap_pars_fragment:El,shadowmap_pars_fragment:Al,shadowmap_pars_vertex:Cl,shadowmap_vertex:Rl,shadowmask_pars_fragment:Pl,skinbase_vertex:Il,skinning_pars_vertex:Ll,skinning_vertex:Dl,skinnormal_vertex:Nl,specularmap_fragment:Fl,specularmap_pars_fragment:Ul,tonemapping_fragment:Ol,tonemapping_pars_fragment:kl,transmission_fragment:Bl,transmission_pars_fragment:zl,uv_pars_fragment:Vl,uv_pars_vertex:Gl,uv_vertex:Hl,worldpos_vertex:Wl,background_vert:Xl,background_frag:ql,backgroundCube_vert:Yl,backgroundCube_frag:Jl,cube_vert:Zl,cube_frag:$l,depth_vert:Kl,depth_frag:jl,distance_vert:Ql,distance_frag:ec,equirect_vert:tc,equirect_frag:nc,linedashed_vert:ic,linedashed_frag:sc,meshbasic_vert:rc,meshbasic_frag:ac,meshlambert_vert:oc,meshlambert_frag:lc,meshmatcap_vert:cc,meshmatcap_frag:hc,meshnormal_vert:uc,meshnormal_frag:dc,meshphong_vert:fc,meshphong_frag:pc,meshphysical_vert:mc,meshphysical_frag:gc,meshtoon_vert:xc,meshtoon_frag:yc,points_vert:_c,points_frag:vc,shadow_vert:bc,shadow_frag:wc,sprite_vert:Mc,sprite_frag:Sc},O={common:{diffuse:{value:new Q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new Q(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},rr={basic:{uniforms:me([O.common,O.specularmap,O.envmap,O.aomap,O.lightmap,O.fog]),vertexShader:j.meshbasic_vert,fragmentShader:j.meshbasic_frag},lambert:{uniforms:me([O.common,O.specularmap,O.envmap,O.aomap,O.lightmap,O.emissivemap,O.bumpmap,O.normalmap,O.displacementmap,O.fog,O.lights,{emissive:{value:new Q(0)},envMapIntensity:{value:1}}]),vertexShader:j.meshlambert_vert,fragmentShader:j.meshlambert_frag},phong:{uniforms:me([O.common,O.specularmap,O.envmap,O.aomap,O.lightmap,O.emissivemap,O.bumpmap,O.normalmap,O.displacementmap,O.fog,O.lights,{emissive:{value:new Q(0)},specular:{value:new Q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:j.meshphong_vert,fragmentShader:j.meshphong_frag},standard:{uniforms:me([O.common,O.envmap,O.aomap,O.lightmap,O.emissivemap,O.bumpmap,O.normalmap,O.displacementmap,O.roughnessmap,O.metalnessmap,O.fog,O.lights,{emissive:{value:new Q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:j.meshphysical_vert,fragmentShader:j.meshphysical_frag},toon:{uniforms:me([O.common,O.aomap,O.lightmap,O.emissivemap,O.bumpmap,O.normalmap,O.displacementmap,O.gradientmap,O.fog,O.lights,{emissive:{value:new Q(0)}}]),vertexShader:j.meshtoon_vert,fragmentShader:j.meshtoon_frag},matcap:{uniforms:me([O.common,O.bumpmap,O.normalmap,O.displacementmap,O.fog,{matcap:{value:null}}]),vertexShader:j.meshmatcap_vert,fragmentShader:j.meshmatcap_frag},points:{uniforms:me([O.points,O.fog]),vertexShader:j.points_vert,fragmentShader:j.points_frag},dashed:{uniforms:me([O.common,O.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:j.linedashed_vert,fragmentShader:j.linedashed_frag},depth:{uniforms:me([O.common,O.displacementmap]),vertexShader:j.depth_vert,fragmentShader:j.depth_frag},normal:{uniforms:me([O.common,O.bumpmap,O.normalmap,O.displacementmap,{opacity:{value:1}}]),vertexShader:j.meshnormal_vert,fragmentShader:j.meshnormal_frag},sprite:{uniforms:me([O.sprite,O.fog]),vertexShader:j.sprite_vert,fragmentShader:j.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:j.background_vert,fragmentShader:j.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:j.backgroundCube_vert,fragmentShader:j.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:j.cube_vert,fragmentShader:j.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:j.equirect_vert,fragmentShader:j.equirect_frag},distance:{uniforms:me([O.common,O.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:j.distance_vert,fragmentShader:j.distance_frag},shadow:{uniforms:me([O.lights,O.fog,{color:{value:new Q(0)},opacity:{value:1}}]),vertexShader:j.shadow_vert,fragmentShader:j.shadow_frag}};rr.physical={uniforms:me([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new q},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new Q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new Q(0)},specularColor:{value:new Q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:j.meshphysical_vert,fragmentShader:j.meshphysical_frag};var Tc=new q;Tc.set(-1,0,0,0,1,0,0,0,1);var ng={[ki]:"LINEAR_TONE_MAPPING",[Bi]:"REINHARD_TONE_MAPPING",[zi]:"CINEON_TONE_MAPPING",[Vi]:"ACES_FILMIC_TONE_MAPPING",[Hi]:"AGX_TONE_MAPPING",[Wi]:"NEUTRAL_TONE_MAPPING",[Gi]:"CUSTOM_TONE_MAPPING"};var ig=new Float32Array(16),sg=new Float32Array(9),rg=new Float32Array(4);var ag={[ki]:"Linear",[Bi]:"Reinhard",[zi]:"Cineon",[Vi]:"ACESFilmic",[Hi]:"AgX",[Wi]:"Neutral",[Gi]:"Custom"};var og={[Rs]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};var lg={[ks]:"ENVMAP_MODE_REFRACTION"};var cg={[zn]:"ENVMAP_BLENDING_MULTIPLY",[Us]:"ENVMAP_BLENDING_MIX",[Os]:"ENVMAP_BLENDING_ADD"};var Ec=new q;Ec.set(-1,0,0,0,1,0,0,0,1);var hg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);async function ar(a){let e=await fetch(a);if(!e.ok)throw Error("Map asset "+e.status+" "+a);return new Response(e.body.pipeThrough(new DecompressionStream("gzip")))}async function or(){return(await ar("data/stream/city.json.gz")).json()}async function lr(a){let e=new Uint8Array(await(await ar("data/stream/height.delta.gz")).arrayBuffer()),t=e.length/2,n=new Int16Array(t);for(let i=0;i<t;i++){let s=i%a?n[i-1]:0,r=i>=a?n[i-a]:0,o=i>=a&&i%a?n[i-a-1]:0,l=Math.max(Math.min(s,r),Math.min(Math.max(s,r),s+r-o));n[i]=l+(e[i]|e[i+t]<<8)}return n}var It=(a,e)=>Math.hypot(a[0]-e[0],a[1]-e[1]),Qi=(a,e,t)=>Math.max(e,Math.min(t,a));var Ac=new Set([624121519,624121520]),Cc=111.72;function es(a,e,t){let n=t[0]-e[0],i=t[1]-e[1],s=Qi(((a[0]-e[0])*n+(a[1]-e[1])*i)/(n*n+i*i||1),0,1);return[e[0]+n*s,e[1]+i*s,s]}var Gn=class a{static async load(){let e=fetch("data/terrain.json").then(s=>s.json()),[t,n,i]=await Promise.all([or(),e,e.then(s=>lr(s.width))]);return new a(t,n,i)}constructor(e,t,n){Object.assign(this,e,{dem:t,heights:n}),this.tileSet=new Set(this.tiles),this.edges=this.nodes.map(()=>[]),this.roadTiles=new Map,this.cells=new Map,this.rules=new Map;for(let[s,r,o,l]of this.restrictions){let c=r+"/"+o,h=this.rules.get(c)||[];h.push([s,l]),this.rules.set(c,h)}let i=(s,r,o)=>{s.has(r)?s.get(r).push(o):s.set(r,[o])};this.roads.forEach((s,r)=>{s.index=r,s.length=0,s.along=[0];for(let o=1;o<s.p.length;o++){let l=s.p[o-1],c=s.p[o],h=this.nodes[l],u=this.nodes[c],d=It(h,u);if(d<.01){s.along.push(s.length);continue}s.length+=d,s.along.push(s.length),s.d&&(this.edges[l].push([c,r,d]),s.o||this.edges[c].push([l,r,d]));let f=[r,o];for(let[p,m]of[[512,this.roadTiles],[48,this.cells]])for(let x=Math.floor((Math.min(h[0],u[0])-s.w)/p);x<=Math.floor((Math.max(h[0],u[0])+s.w)/p);x++)for(let y=Math.floor((Math.min(h[1],u[1])-s.w)/p);y<=Math.floor((Math.max(h[1],u[1])+s.w)/p);y++)i(m,x+"_"+y,f)}}),this.isJunction=this.edges.map(s=>new Set(s.map(r=>r[0])).size>2)}ground(e,t){let{bounds:n,step:i,width:s,height:r}=this.dem,o=Qi((e-n[0])/i,0,s-1.00001),l=Qi((t-n[1])/i,0,r-1.00001),c=Math.floor(o),h=Math.floor(l),u=o-c,d=l-h,f=c+h*s,p=this.heights;return(u+d<=1?p[f]+(p[f+1]-p[f])*u+(p[f+s]-p[f])*d:p[f+s+1]+(p[f+s]-p[f+s+1])*(1-u)+(p[f+1]-p[f+s+1])*(1-d))*.01}surface(e,t,n,i,s){if(Ac.has(e.id))return Cc;if(!e.bridge)return this.ground(i,s);let r=this.nodes[e.p[0]],o=this.nodes[e.p.at(-1)],l=(e.along[t-1]+n*(e.along[t]-e.along[t-1]))/e.length;return Math.max(this.ground(i,s),this.ground(...r)*(1-l)+this.ground(...o)*l+Math.sin(l*Math.PI)*Math.min(4,e.length*.04))}nearest(e,t=()=>!0,n=85){let i=null,s=n;for(let r=Math.floor((e[0]-n)/48);r<=Math.floor((e[0]+n)/48);r++)for(let o=Math.floor((e[1]-n)/48);o<=Math.floor((e[1]+n)/48);o++)for(let[l,c]of this.cells.get(r+"_"+o)||[]){let h=this.roads[l];if(!t(h))continue;let u=this.nodes[h.p[c-1]],d=this.nodes[h.p[c]],f=es(e,u,d),p=It(e,f);p<s&&(s=p,i={r:h,i:c,q:f,d:p,a:u,b:d,yaw:Math.atan2(d[0]-u[0],d[1]-u[1])})}return i}legal(e,t,n){return t<0?!0:(this.rules.get(this.roads[t].id+"/"+e)||[]).every(([s,r])=>s.startsWith("only_")?n.id===r:n.id!==r)}route(e,t){let n=this.nearest(e,d=>d.d,220),i=this.nearest(t,d=>d.d,220);if(!n||!i)return[];let s=i.q,r=[],o=new Map,l=new Map,c=d=>{r.push(d);let f=r.length-1;for(;f;){let p=f-1>>1;if(r[p].f<=d.f)break;r[f]=r[p],f=p}r[f]=d},h=()=>{let d=r[0],f=r.pop();if(r.length){let p=0;for(;p*2+1<r.length;){let m=p*2+1;if(m+1<r.length&&r[m+1].f<r[m].f&&m++,r[m].f>=f.f)break;r[p]=r[m],p=m}r[p]=f}return d},u=(d,f,p,m)=>{let x=d+"/"+f;p>=(o.get(x)??1/0)||(o.set(x,p),l.set(x,m),c({n:d,ri:f,g:p,f:p+It(this.nodes[d],s),key:x}))};if(n.r===i.r&&n.i===i.i&&(!n.r.o||i.q[2]>=n.q[2]))return[[...n.q.slice(0,2),n.r.index],[...i.q.slice(0,2),i.r.index]];for(u(n.r.p[n.i],n.r.index,It(n.q,n.b),null),n.r.o||u(n.r.p[n.i-1],n.r.index,It(n.q,n.a),null);r.length;){let d=h();if(d.g===o.get(d.key)){if((d.n===i.r.p[i.i-1]||!i.r.o&&d.n===i.r.p[i.i])&&this.legal(d.n,d.ri,i.r)){let f=[[...s.slice(0,2),i.r.index]],p=d.key;for(;p;){let[m,x]=p.split("/").map(Number);f.push([...this.nodes[m].slice(0,2),x]),p=l.get(p)}return f.push([...n.q.slice(0,2),n.r.index]),f.reverse().filter((m,x,y)=>x===0||It(m,y[x-1])>.12)}for(let[f,p,m]of this.edges[d.n]){let x=this.roads[p];this.legal(d.n,d.ri,x)&&u(f,p,d.g+m*(x.k==="service"?1.06:1),d.key)}}}return[]}};var nt=class{constructor(){this.pos=[],this.uv=[],this.colors=[],this.treeCenters=null}tri(e,t,n,i=[0,0],s=[1,0],r=[1,1]){if(this.pos.push(...e,...t,...n),this.uv.push(...i,...s,...r),this.treeCenter&&(this.treeCenters??=[],this.treeCenters.push(...this.treeCenter,...this.treeCenter,...this.treeCenter)),this.tint)for(let o=0;o<3;o++)this.colors.push(this.tint.r,this.tint.g,this.tint.b)}quad(e,t,n,i,s=1,r=1){this.tri(e,t,n,[0,0],[s,0],[s,r]),this.tri(e,n,i,[0,0],[s,r],[0,r])}mesh(e){let t=new Re,n=new Float32Array(this.pos),i=new Float32Array(n.length);for(let s=0;s<n.length;s+=9){let r=n[s+3]-n[s],o=n[s+4]-n[s+1],l=n[s+5]-n[s+2],c=n[s+6]-n[s],h=n[s+7]-n[s+1],u=n[s+8]-n[s+2],d=o*u-l*h,f=l*c-r*u,p=r*h-o*c,m=1/(Math.sqrt(d*d+f*f+p*p)||1);d*=m,f*=m,p*=m;for(let x=s;x<s+9;x+=3)i[x]=d,i[x+1]=f,i[x+2]=p}return t.setAttribute("position",new pe(n,3)),t.setAttribute("normal",new pe(i,3)),t.setAttribute("uv",new ye(this.uv,2)),this.treeCenters&&t.setAttribute("treeCenterXZ",new ye(this.treeCenters,2)),this.colors.length&&t.setAttribute("color",new ye(this.colors,3)),new je(t,e)}};function it(a,e,t){let n=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){let r=t[i],o=t[s];r[1]>e!=o[1]>e&&a<(o[0]-r[0])*(e-r[1])/(o[1]-r[1])+r[0]&&(n=!n)}return n}function Hn(a,e,t,n){let i=e.concat(...t),s=r=>r.map(o=>new te(...o));for(let[r,o,l]of ze.triangulateShape(s(e),t.map(s))){let c=[i[r],i[o],i[l]].map(([h,u])=>[h,n,u]);a.tri(c[2],c[1],c[0])}}var Ge=(a,e=.82)=>new Ve({color:a,roughness:e});function Rc(a,e){let t=[];for(let n=0;n<a.length;n++){let i=a[n],s=a[(n+1)%a.length],r=e(i),o=e(s);if(r>=-1e-7&&t.push(i),r>1e-7&&o<-1e-7||r<-1e-7&&o>1e-7){let l=r/(r-o);t.push([i[0]+l*(s[0]-i[0]),i[1]+l*(s[1]-i[1])])}}return t}function ut(a,e,t,n,i){let[s,r,o,l,c,h]=n,u=Math.cos(r),d=Math.sin(r),f=E=>u*E[0]+d*E[1],p=E=>u*E[1]-d*E[0],m=e.map(f),x=e.map(p),y=Math.min(...m),S=Math.max(...m),b=Math.min(...x),w=Math.max(...x),g=2*l/Math.max(.2,w-b),_=[];if(s==="flat"||l<.05)_=[()=>0];else if(s==="shed")_=[E=>(p(E)-b)*g*.5];else{let E=s==="gable"?n[6]??.5:.5;_=[A=>(p(A)-b)*g/(2*E),A=>(w-p(A))*g/(2*(1-E))],(s==="hip"||s==="mansard")&&_.push(A=>(f(A)-y)*g,A=>(S-f(A))*g),(s==="mansard"||s==="gambrel")&&(_=_.map(A=>R=>A(R)*2.7),_.push(()=>l))}let v=e.concat(...t),M=E=>E.map(A=>new te(...A)),T=a("surface-"+c);T.tint=new Q(h);for(let E of ze.triangulateShape(M(e),t.map(M))){let A=E.map(R=>v[R]);for(let R=0;R<_.length;R++){let I=A;for(let N=0;N<_.length&&I.length;N++)N!==R&&(I=Rc(I,L=>_[N](L)-_[R](L)));for(let N=1;N+1<I.length;N++){let L=[I[0],I[N+1],I[N]];T.tri(...L.map(D=>[D[0],o+_[R](D),D[1]]),...L.map(D=>[f(D)/3,p(D)/3]))}}}if(_.length>1||s==="shed"){let E=a(i);for(let A of[e,...t])for(let R=0;R<A.length;R++){let I=A[R],N=A[(R+1)%A.length],L=[0,1];for(let F=0;F<_.length;F++)for(let V=F+1;V<_.length;V++){let Y=_[F](I)-_[V](I),W=_[F](N)-_[V](N);Y*W<0&&L.push(Y/(Y-W))}L.sort((F,V)=>F-V);let D=F=>[I[0]+(N[0]-I[0])*F,I[1]+(N[1]-I[1])*F];for(let F=1;F<L.length;F++){let V=D(L[F-1]),Y=D(L[F]),W=Math.min(..._.map(P=>P(V))),ee=Math.min(..._.map(P=>P(Y)));Math.max(W,ee)<.035||E.quad([V[0],o,V[1]],[Y[0],o,Y[1]],[Y[0],o+ee,Y[1]],[V[0],o+W,V[1]],Math.hypot(Y[0]-V[0],Y[1]-V[1])/3,Math.max(W,ee)/3)}}}}var Wn=271770601,ts=272129191,cr=271952906;function ns(a,e,t,n,i,s){let r=e-n/2,o=e+n/2;if(a.box("reveal",r-.08,o+.08,t+.02,t+i+.08,.07),a.panel("service-cream",r,o,t+.05,t+i,.085),a.box("hardware",o-.17,o-.12,t+.94,t+1.08,.15,.082),s>0){a.box("service-flashing",r-.25,o+.25,t+i+.12,t+i+.22,s);for(let l of[r,o])a.box("service-steel",l-.03,l+.03,t+i,t+i+.12,s*.7)}}function Pc(a,e,t,n,i,s){let r=0,o=0;for(let l=0;l<e.length;l++){let c=e[l],h=e[(l+1)%e.length],u=Math.hypot(h[0]-c[0],h[1]-c[1]);u>o&&(o=u,r=Math.atan2(h[1]-c[1],h[0]-c[0]))}ut(a,e,t,["gable",r,n,i,"metal",13948105],s)}function hr(a,e,t,n){let[i,s,,,,r,,o]=t;if(r!==Wn&&r!==ts&&r!==cr)return!1;let l=r===Wn?146.05:r===ts?142.67:o.roof[2],c=Math.min(...i.map(d=>e.ground(...d)))-.18,h=r===cr,u=h?"wall-brick":"wall-service-green";for(let d=0;d<i.length;d++){let f=i[d],p=i[(d+1)%i.length],m=n(f,p),x=m.len/2,y=m.ground;m.panel(u,-x,x,c,l,0,[m.len/3,(l-c)/3]);let S=h?l-1.35:c;h&&m.panel("wall-service-buff",-x,x,S,l,.025,[m.len/3,.5]);let b=h?"wall-service-buff":"wall-service-green",w=h?.83:.48;for(let M=-x+w;M<x-.15;M+=w)m.box(b,M-.022,M+.022,S,l,.053,.012);m.box("service-flashing",-x,x,l-.09,l+.025,.14);let g=o.front?.edge;if(!(g&&Math.hypot(g[0][0]-f[0],g[0][1]-f[1])<.05&&Math.hypot(g[1][0]-p[0],g[1][1]-p[1])<.05))continue;let v=Math.min(2.55,l-y-.25);if(r===Wn)ns(m,-m.len*.09,y,1.65,v,.68);else if(r===ts){ns(m,m.len*.26,y,1.12,v,0);for(let M of[-m.len*.28,-m.len*.04])m.box("service-cream",M-.75,M+.75,y+1,y+2.17,.09),m.panel("glass-shop",M-.65,M+.65,y+1.1,y+2.07,.1)}else for(let M of[-x*.56,x*.32])m.box("service-steel",M-.06,M+.06,y,l,.14),ns(m,M+.9,y+.12,1.07,v-.14,0),m.box("ledge",M+.12,M+1.7,y+.02,y+.14,.85),m.box("service-cream",M+2.7,M+3.6,y+1.18,y+2.02,.08),m.panel("glass-shop",M+2.77,M+3.53,y+1.24,y+1.95,.09)}return h?ut(a,i,s,o.roof,u):Pc(a,i,s,l,r===Wn?.57:1.78,u),!0}var ur={schema:1,targets:[{id:"599911626",address:"100 COURTHOUSE SQ",district:"Oxford Courthouse Square",name:"City Hotel, Anderson Hotel, various other",source:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/100-104%20courthouse%20square.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/100-104%20courthouse%20square.pdf#page=2",photographer:"John Hopkins",photoFrame:"3551:32",frontageSegment:[[-13.47,-11.27],[-10.37,-10.66]],renderSegment:[[-21.48,-12.84],[-5.95,-9.8]],renderWidthM:15.82,spanBasis:"100\u2013104 Courthouse Square single surveyed building front",frontagePoint:[-11.92,-10.97],frontageWidthM:3.16,frontToward:[-.192,.981],footprintCentroid:[-12.1225,-19.27],sourceWall:"stucco",sourceRoof:"flat",sourceStories:3,sourceBays:5,facts:["Three-story, five-bay, brick masonry commercial block with Greek Revival and Italianate influence, built ca. 1869. Flat roof covered with built-up asphalt roofing, with flat and corbeled panel parapet. Exterior walls covered with stucco veneer. Windows are 1/1 and 6/6 double-hung sashes, some in segmental-arched reveals. Full-width, 1-plan hip roof porch canopy supported by replacement wood posts and turned balusters. Three storefronts have: (100) three-light transom, multi-light display windows, and a replacement single-light door; (102) single-light transom, single-light display windows and a replacement single-light door; and, (104) a single-light transom, multi-light display window, and a multi-light door topped with a single-light transom."],detail:{mainRoof:"flat",roofAccessory:null,wall:"stucco",stories:3,bays:5,windowPattern:"6/6",transomLights:3,storefrontCount:3,canopy:"canopy",flags:["main-roof-flat","wall-stucco","bay-count-5","window-6/6","segmental-arch","storefront-transom","corbel-cornice","parapet","canopy"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-stucco",label:"wall finish: stucco",kind:"wall"},{tag:"bay-count-5",label:"5-bay facade",kind:"bays"},{tag:"window-6/6",label:"window pattern: 6/6",kind:"windows"},{tag:"segmental-arch",label:"segmental-arched window reveals",kind:"arch"},{tag:"storefront-transom",label:"three-light transom",kind:"transom"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"canopy",label:"projecting canopy with supports",kind:"canopy"}],baseline04:{stories:3,bays:null,wall:"brick",roof:["shed",6.4789,166.7,.98,"shingle",15132389],flags:["arches","awning","porch","transom"],frontages:[{bays:5,clearance:0,edge:[[-20.18017358205964,-12.585558769443741],[-17.07903006777214,-11.978509427303756]],flags:["arches","porch","awning","transom"],stories:3,use:"shop",wall:"stucco"},{bays:5,clearance:0,edge:[[-16.30971228165732,-11.827915346827963],[-13.208568767369822,-11.220866004687975]],flags:["arches","porch","awning","transom"],stories:3,use:"shop",wall:"stucco"},{bays:5,clearance:0,edge:[[-13.470830328158733,-11.272203747430943],[-10.369686813871239,-10.665154405290957]],flags:["arches","porch","awning","transom"],stories:3,use:"shop",wall:"stucco"}]},correctedFeaturesVs04:["main roof corrected from 0.4 shed to surveyed flat","wall material corrected from 0.4 brick to surveyed stucco"],newVisibleFeaturesVs04:["main roof: flat","wall finish: stucco","5-bay facade","window pattern: 6/6","corbeled cornice or parapet","parapet profile"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"Three-story, five-bay, brick masonry commercial block with Greek Revival and Italianate influence, built ca. 1869. Flat roof covered with built-up asphalt roofing, with flat and corbeled panel parapet. Exterior walls covered with stucco veneer. Windows are 1/1 and 6/6 double-hung sashes, some in segmental-arched reveals. Full-width, 1-plan hip roof porch canopy supported by replacement wood posts and turned balusters. Three storefronts have: (100) three-light transom, multi-light display windows, and a replacement single-light door; (102) single-light transom, single-light display windows and a replacement single-light door; and, (104) a single-light transom, multi-light display window, and a multi-light door topped with a single-light transom."}},{id:"451755569",address:"103 COURTHOUSE SQ",district:"Oxford Courthouse Square",name:"Duval l's",source:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/103%20courthouse%20square.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/103%20courthouse%20square.pdf#page=2",photographer:"John Hopkins",photoFrame:"3551:34",frontageSegment:[[45.52,-.89],[36.04,-2.93]],renderSegment:[[36.04053771665127,-2.9302426678641424],[45.71946228334873,-.8497573321358571]],renderWidthM:9.9,spanBasis:"103 Courthouse Square individually surveyed unit",frontagePoint:[40.88,-1.89],frontageWidthM:9.9,frontToward:[-.21,.978],footprintCentroid:[27.925454545454546,-34.469090909090916],sourceWall:"brick",sourceRoof:"flat",sourceStories:2,sourceBays:3,facts:["Two-story, three-bay, brick masonry commercial building with Italianate influence, built ca. 1880. Flat roof covered with built-up asphalt roofing, with a flat parapet, corbeled cornice and attic panels. Windows are 2/2 double-hung sashes set in segmental-arched reveals. Full-width, cast iron balcony supported by wrought iron brackets. Storefront has added flared hip-roofed metal hoods, multi-light display windows, paneled bulkheads, and original polygonal cast iron pilasters. Entrance has a replacement oval-light double-door topped by a replacement stained glass transom."],detail:{mainRoof:"flat",roofAccessory:null,wall:"brick",stories:2,bays:3,windowPattern:"2/2",transomLights:null,storefrontCount:1,canopy:null,flags:["main-roof-flat","wall-brick","bay-count-3","window-2/2","segmental-arch","storefront-transom","corbel-cornice","parapet","balcony","cast-iron","pilasters","bulkhead","oval-light"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-brick",label:"wall finish: brick",kind:"wall"},{tag:"bay-count-3",label:"3-bay facade",kind:"bays"},{tag:"window-2/2",label:"window pattern: 2/2",kind:"windows"},{tag:"segmental-arch",label:"segmental-arched window reveals",kind:"arch"},{tag:"storefront-transom",label:"glass transom",kind:"transom"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"balcony",label:"balcony with railing",kind:"balcony"},{tag:"cast-iron",label:"cast-iron storefront elements",kind:"metalwork"},{tag:"pilasters",label:"storefront pilasters",kind:"pilasters"},{tag:"bulkhead",label:"paneled or masonry bulkhead",kind:"bulkhead"},{tag:"oval-light",label:"oval-light door or entrance",kind:"door"}],baseline04:{stories:2,bays:null,wall:"brick",roof:["flat",1.7825,164.96,0,"membrane",15132390],flags:["arches","brickpilaster","cornice","parapet","transom"],frontages:[{bays:13,clearance:1.45,edge:[[20.20086331893815,-6.332349737851393],[22.938336933761676,-5.743929642897938]],flags:["transom"],stories:2,use:"shop",wall:"brick"},{bays:3,clearance:1.45,edge:[[35.84107543330255,-2.9704853357282843],[45.52,-.89]],flags:["arches","cornice","parapet","transom","brickpilaster"],stories:2,use:"shop",wall:"brick"}]},correctedFeaturesVs04:[],newVisibleFeaturesVs04:["main roof: flat","wall finish: brick","3-bay facade","window pattern: 2/2","balcony with railing","cast-iron storefront elements","paneled or masonry bulkhead","oval-light door or entrance"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"Two-story, three-bay, brick masonry commercial building with Italianate influence, built ca. 1880. Flat roof covered with built-up asphalt roofing, with a flat parapet, corbeled cornice and attic panels. Windows are 2/2 double-hung sashes set in segmental-arched reveals. Full-width, cast iron balcony supported by wrought iron brackets. Storefront has added flared hip-roofed metal hoods, multi-light display windows, paneled bulkheads, and original polygonal cast iron pilasters. Entrance has a replacement oval-light double-door topped by a replacement stained glass transom."}},{id:"599911625",address:"106 COURTHOUSE SQ",district:"Oxford Courthouse Square",name:"South Bank",source:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/106%20courthouse%20square.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/106%20courthouse%20square.pdf#page=2",photographer:"John Hopkins",photoFrame:null,frontageSegment:[[-30.52,-14.72],[-27.78,-14.15]],renderSegment:[[-35.41,-15.73],[-21.48,-12.84]],renderWidthM:14.23,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[-29.15,-14.43],frontageWidthM:2.8,frontToward:[-.203,.979],footprintCentroid:[-25.261666666666667,-28.7],sourceWall:"stucco",sourceRoof:"flat",sourceStories:2,sourceBays:6,facts:["Two-story, six bay, brick masonry commercial block with Italianate influence, built ca. 1890. Flat roof covered with built-up asphalt roofing, with corbeled dentil cornice and added bracketed wood cornice. Exterior walls covered with stucco veneer. Windows are 1/1 double-hung sashes. Two-story, fu11-w1dth, shed-roofed replacement porch canopy supported by turned posts. Storefronts features banks of single light trnasoms, single-light display windows, and paneled bulkheads. display windows, ;aneled bulkheads, and has original polygonal cast iron pilasters. Entrance nas a replacement single oval-light door topped with a single-light transom."],detail:{mainRoof:"flat",roofAccessory:null,wall:"stucco",stories:2,bays:6,windowPattern:"1/1",transomLights:1,storefrontCount:1,canopy:"canopy",flags:["main-roof-flat","wall-stucco","bay-count-6","window-1/1","storefront-transom","corbel-cornice","dentil-course","bracketed-cornice","cast-iron","pilasters","canopy","bulkhead","oval-light"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-stucco",label:"wall finish: stucco",kind:"wall"},{tag:"bay-count-6",label:"6-bay facade",kind:"bays"},{tag:"window-1/1",label:"window pattern: 1/1",kind:"windows"},{tag:"storefront-transom",label:"single-light transom",kind:"transom"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"dentil-course",label:"dentil cornice",kind:"cornice"},{tag:"bracketed-cornice",label:"bracketed cornice",kind:"cornice"},{tag:"cast-iron",label:"cast-iron storefront elements",kind:"metalwork"},{tag:"pilasters",label:"storefront pilasters",kind:"pilasters"},{tag:"canopy",label:"projecting canopy with supports",kind:"canopy"},{tag:"bulkhead",label:"paneled or masonry bulkhead",kind:"bulkhead"},{tag:"oval-light",label:"oval-light door or entrance",kind:"door"}],baseline04:{stories:2,bays:null,wall:"brick",roof:["gable",-1.3778,162.62,1.69,"shingle",11648185],flags:["brickpilaster","cornice","transom"],frontages:[{bays:6,clearance:0,edge:[[-30.52055822698486,-14.715607557500809],[-27.77893915686964,-14.146815087103608]],flags:["cornice","transom","brickpilaster"],stories:2,use:"shop",wall:"stucco"}]},correctedFeaturesVs04:["main roof corrected from 0.4 gable to surveyed flat","wall material corrected from 0.4 brick to surveyed stucco"],newVisibleFeaturesVs04:["main roof: flat","wall finish: stucco","6-bay facade","window pattern: 1/1","dentil cornice","bracketed cornice","cast-iron storefront elements","projecting canopy with supports","paneled or masonry bulkhead","oval-light door or entrance"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"Two-story, six bay, brick masonry commercial block with Italianate influence, built ca. 1890. Flat roof covered with built-up asphalt roofing, with corbeled dentil cornice and added bracketed wood cornice. Exterior walls covered with stucco veneer. Windows are 1/1 double-hung sashes. Two-story, fu11-w1dth, shed-roofed replacement porch canopy supported by turned posts. Storefronts features banks of single light trnasoms, single-light display windows, and paneled bulkheads. display windows, ;aneled bulkheads, and has original polygonal cast iron pilasters. Entrance nas a replacement single oval-light door topped with a single-light transom."}},{id:"451755566",address:"107 COURTHOUSE SQ",district:"Oxford Courthouse Square",name:"Old Federal Building / Oxford City Hall",source:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/107%20courthouse%20square.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/107%20courthouse%20square.pdf#page=2",photographer:"John Hopkins",photoFrame:"3551:35",frontageSegment:[[54.54,30.03],[53.14,36.85]],renderSegment:[[51.75,43.57],[55.97,23.11]],renderWidthM:20.89,spanBasis:"HABS measured full photographed facade",frontagePoint:[53.84,33.44],frontageWidthM:6.96,frontToward:[-.979,-.202],footprintCentroid:[70.5375,36.75749999999999],sourceWall:"brick",sourceRoof:"gable",sourceStories:2.5,sourceBays:null,facts:['Two and one-half story, brick masonry courthouse building with Romanesque Revival influence, built 1885. Complex gable roof covered with asphalt shingles, with box cornice, corbeled modillion cornice, and gable dormer with two-light casement sash. Gable ends contain a fan light casement, and a two-light casement with louvered vent, each set semi-circular arched reveals in gable ends. Windows are 1/1 double-hung sashes with multi-light transoms, some in segmental-arched reveals, a "Palladian" frup of 2/2 and 1/1 double-hung sashes with a fan light transom set in a semi-circular arched reveal, and groups of 2/2 and 1/1 double-hung sashes with multi-light transoms. Entrance set in gable vestibule with semi-circular arched portal, with replacement single-light double-doors and multi-light transom.',"The current municipal address is 107 Courthouse Square. MDAH identifies this as the Old Federal Building, now City Hall; it is distinct from Lafayette County Courthouse at 1 Courthouse Square."],detail:{mainRoof:"gable",roofAccessory:"dormers",wall:"brick",stories:2.5,bays:null,windowPattern:"casement",transomLights:1,storefrontCount:1,canopy:null,flags:["main-roof-gable","wall-brick","window-casement","segmental-arch","storefront-transom","corbel-cornice","dormer","double-door"],visibleFeatures:[{tag:"main-roof-gable",label:"main roof: gable",kind:"roof"},{tag:"wall-brick",label:"wall finish: brick",kind:"wall"},{tag:"window-casement",label:"window pattern: casement",kind:"windows"},{tag:"segmental-arch",label:"segmental-arched window reveals",kind:"arch"},{tag:"storefront-transom",label:"multi-light transom",kind:"transom"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"dormer",label:"roof dormer",kind:"roof-detail"},{tag:"double-door",label:"paired entrance doors",kind:"door"}],baseline04:{stories:3,bays:null,wall:"brick",roof:["hip",-1.3685,167.7,2.1,"shingle",11777975],flags:["arches","cornice","dormer","gablefront","transom"],frontages:[{clearance:2.27,edge:[[54.54237409524429,30.03161753822316],[53.13642573977702,36.84813492041759]],flags:["arches","cornice","transom","dormer","gablefront"],stories:2,use:"shop",wall:"brick"}]},correctedFeaturesVs04:["main roof corrected from 0.4 hip to surveyed gable","stories corrected from 0.4 3 to surveyed 2.5"],newVisibleFeaturesVs04:["main roof: gable","wall finish: brick","window pattern: casement","roof dormer","paired entrance doors"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:'Two and one-half story, brick masonry courthouse building with Romanesque Revival influence, built 1885. Complex gable roof covered with asphalt shingles, with box cornice, corbeled modillion cornice, and gable dormer with two-light casement sash. Gable ends contain a fan light casement, and a two-light casement with louvered vent, each set semi-circular arched reveals in gable ends. Windows are 1/1 double-hung sashes with multi-light transoms, some in segmental-arched reveals, a "Palladian" frup of 2/2 and 1/1 double-hung sashes with a fan light transom set in a semi-circular arched reveal, and groups of 2/2 and 1/1 double-hung sashes with multi-light transoms. Entrance set in gable vestibule with semi-circular arched portal, with replacement single-light double-doors and multi-light transom. The current municipal address is 107 Courthouse Square. MDAH identifies this as the Old Federal Building, now City Hall; it is distinct from Lafayette County Courthouse at 1 Courthouse Square.'}},{id:"451755565",address:"119 COURTHOUSE SQ",district:"Oxford Courthouse Square",name:"Neilson's Department Store",source:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/119%20courthouse%20square.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/119%20courthouse%20square.pdf#page=2",photographer:"John Hopkins",photoFrame:"3552:8",frontageSegment:[[40.28,73.44],[39.56,77.23]],renderSegment:[[44.84,65.37],[39.49,91.48]],renderWidthM:26.65,spanBasis:"HABS measured full photographed facade",frontagePoint:[39.92,75.34],frontageWidthM:3.85,frontToward:[-.983,-.186],footprintCentroid:[40.8875,71.7475],sourceWall:"brick",sourceRoof:"flat",sourceStories:1,sourceBays:9,facts:["One-story, nine-bay, brick masonry commercial building with Italianate influence, built 1897, and side, one-story, three-bay building (former 121) joined with main structure in ca. 1970. Flat roof covered with built-up asphalt roofing, with varietal parapet with segmental-arched projecting panel, corbeled cornice and frieze decorated with garland motif. Storefront has a bank of ten individual single-light fixed display windows topped with pedimanted lintels, marble bulkheads, and original cast iron pilasters. Two entrances contain (119) single-light double-doors topped with single-light transoms with a pedimented lintel, and a side (121) replacement entrance with single-light, double-doors topped with single-light transoms with a pedimented lintel.","The MDAH inventory says the one-story, nine-bay brick store was built in 1897 and joined to a three-bay side building in about 1970. It records a segmental-arched projecting parapet panel, garland frieze, and ten single-light display windows with pedimented lintels and marble bulkheads."],detail:{mainRoof:"flat",roofAccessory:null,wall:"brick",stories:1,bays:9,windowPattern:"display",transomLights:1,storefrontCount:1,canopy:null,flags:["main-roof-flat","wall-brick","bay-count-9","window-display","segmental-arch","storefront-transom","corbel-cornice","parapet","cast-iron","pilasters","bulkhead","double-door"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-brick",label:"wall finish: brick",kind:"wall"},{tag:"bay-count-9",label:"9-bay facade",kind:"bays"},{tag:"window-display",label:"window pattern: display",kind:"windows"},{tag:"segmental-arch",label:"segmental-arched window reveals",kind:"arch"},{tag:"storefront-transom",label:"single-light transom",kind:"transom"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"cast-iron",label:"cast-iron storefront elements",kind:"metalwork"},{tag:"pilasters",label:"storefront pilasters",kind:"pilasters"},{tag:"bulkhead",label:"paneled or masonry bulkhead",kind:"bulkhead"},{tag:"double-door",label:"paired entrance doors",kind:"door"}],baseline04:{stories:1,bays:null,wall:"brick",roof:["flat",-2.9566,158.84,0,"membrane",15132390],flags:["arches","brickpilaster","cornice","parapet"],frontages:[{bays:4,clearance:.81,edge:[[46.92,55.17],[45.18349938625917,63.65411254159666]],flags:["arches","cornice","parapet"],stories:2,use:"shop",wall:"brick"},{bays:4,clearance:.81,edge:[[46.329695319244784,58.05408268084033],[44.593194705503954,66.538195222437]],flags:["arches","cornice","parapet"],stories:2,use:"shop",wall:"brick"},{bays:9,clearance:.81,edge:[[43.062205766366205,74.01822854739092],[42.29020491614655,77.79003377662269]],flags:["cornice","brickpilaster"],stories:1,use:"shop",wall:"brick"}]},correctedFeaturesVs04:[],newVisibleFeaturesVs04:["main roof: flat","wall finish: brick","9-bay facade","window pattern: display","single-light transom","cast-iron storefront elements","paneled or masonry bulkhead","paired entrance doors"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"One-story, nine-bay, brick masonry commercial building with Italianate influence, built 1897, and side, one-story, three-bay building (former 121) joined with main structure in ca. 1970. Flat roof covered with built-up asphalt roofing, with varietal parapet with segmental-arched projecting panel, corbeled cornice and frieze decorated with garland motif. Storefront has a bank of ten individual single-light fixed display windows topped with pedimanted lintels, marble bulkheads, and original cast iron pilasters. Two entrances contain (119) single-light double-doors topped with single-light transoms with a pedimented lintel, and a side (121) replacement entrance with single-light, double-doors topped with single-light transoms with a pedimented lintel. The MDAH inventory says the one-story, nine-bay brick store was built in 1897 and joined to a three-bay side building in about 1970. It records a segmental-arched projecting parapet panel, garland frieze, and ten single-light display windows with pedimented lintels and marble bulkheads."}},{id:"599922075",address:"114 COURTHOUSE SQ",district:"Oxford Courthouse Square",name:"Jennie's Hallmark",source:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/114%20courthouse%20square.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/114%20courthouse%20square.pdf#page=2",photographer:"John Hopkins",photoFrame:"3551:29",frontageSegment:[[-53.44,2.39],[-52.91,-.36]],renderSegment:[[-54.26,6.59],[-52.75,-1.17]],renderWidthM:7.91,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[-53.18,1.01],frontageWidthM:2.8,frontToward:[.982,.191],footprintCentroid:[-72.7125,-.9649999999999999],sourceWall:"stucco",sourceRoof:"flat",sourceStories:2,sourceBays:3,facts:["Two-story, three-bay brick masonry commercial building with Italianate influence, built ca. 1875. Flat roof covered with built-up asphalt roofing, with flat parapet and simple corbeled cornice. Exterior walls covered with stucco veneer. Windows are 6/6 double-hung sashes with segmental-arched corbeled lintels. Full-width porch canopy supported by cast iron posts. Storefornt has single-light display windows, paneled bulkheads, and original cast iron pilasters. Entrance has a replace- single-light door topped with a single-light transom."],detail:{mainRoof:"flat",roofAccessory:null,wall:"stucco",stories:2,bays:3,windowPattern:"6/6",transomLights:1,storefrontCount:1,canopy:"canopy",flags:["main-roof-flat","wall-stucco","bay-count-3","window-6/6","segmental-arch","storefront-transom","corbel-cornice","parapet","cast-iron","pilasters","canopy","bulkhead"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-stucco",label:"wall finish: stucco",kind:"wall"},{tag:"bay-count-3",label:"3-bay facade",kind:"bays"},{tag:"window-6/6",label:"window pattern: 6/6",kind:"windows"},{tag:"segmental-arch",label:"segmental-arched window reveals",kind:"arch"},{tag:"storefront-transom",label:"single-light transom",kind:"transom"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"cast-iron",label:"cast-iron storefront elements",kind:"metalwork"},{tag:"pilasters",label:"storefront pilasters",kind:"pilasters"},{tag:"canopy",label:"projecting canopy with supports",kind:"canopy"},{tag:"bulkhead",label:"paneled or masonry bulkhead",kind:"bulkhead"}],baseline04:{stories:2,bays:null,wall:"brick",roof:["shed",-1.3817,162.41,2.62,"shingle",15132390],flags:["awning","brickpilaster","cornice","parapet","transom"],frontages:[{bays:3,clearance:.08,edge:[[-53.44181971366357,2.3853119059796892],[-52.907005475103375,-.3631374259588256]],flags:["cornice","parapet","awning","transom","brickpilaster"],stories:2,use:"shop",wall:"stucco"}]},correctedFeaturesVs04:["main roof corrected from 0.4 shed to surveyed flat","wall material corrected from 0.4 brick to surveyed stucco"],newVisibleFeaturesVs04:["main roof: flat","wall finish: stucco","3-bay facade","window pattern: 6/6","segmental-arched window reveals","cast-iron storefront elements","projecting canopy with supports","paneled or masonry bulkhead"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"Two-story, three-bay brick masonry commercial building with Italianate influence, built ca. 1875. Flat roof covered with built-up asphalt roofing, with flat parapet and simple corbeled cornice. Exterior walls covered with stucco veneer. Windows are 6/6 double-hung sashes with segmental-arched corbeled lintels. Full-width porch canopy supported by cast iron posts. Storefornt has single-light display windows, paneled bulkheads, and original cast iron pilasters. Entrance has a replace- single-light door topped with a single-light transom."}},{id:"599922074",address:"116 COURTHOUSE SQ",district:"Oxford Courthouse Square",name:"The Kaleidoscope",source:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/116%20courthouse%20square.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/116%20courthouse%20square.pdf#page=2",photographer:"John Hopkins",photoFrame:"3551:28",frontageSegment:[[-54.88,9.78],[-54.35,7.03]],renderSegment:[[-55.76,14.27],[-54.26,6.59]],renderWidthM:7.83,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[-54.61,8.4],frontageWidthM:2.8,frontToward:[.981,.192],footprintCentroid:[-78.572,5.215999999999999],sourceWall:"brick",sourceRoof:"flat",sourceStories:1,sourceBays:3,facts:["One-story, three-bay, brick masonry commercial building with Minimalist Traditional influence, built ca. 1950. Flat roof covered with built-up asphalt roofing, with stepped parapet and corbeled sign panel. Storefront has obscured transoms and replacement single-light, fixed display windows. Entrance has a single-light replacement door topped with a single-light transom."],detail:{mainRoof:"flat",roofAccessory:null,wall:"brick",stories:1,bays:3,windowPattern:"display",transomLights:1,storefrontCount:1,canopy:null,flags:["main-roof-flat","wall-brick","bay-count-3","window-display","storefront-transom","corbel-cornice","parapet"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-brick",label:"wall finish: brick",kind:"wall"},{tag:"bay-count-3",label:"3-bay facade",kind:"bays"},{tag:"window-display",label:"window pattern: display",kind:"windows"},{tag:"storefront-transom",label:"obscured transom",kind:"transom"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"}],baseline04:{stories:1,bays:null,wall:"brick",roof:["shed",-1.3874,159.02,2.08,"shingle",15132390],flags:["parapet","transom"],frontages:[{bays:3,clearance:.08,edge:[[-54.88175315971916,9.773376177762112],[-54.3450197252241,7.025300993147408]],flags:["parapet","transom"],stories:1,use:"shop",wall:"brick"}]},correctedFeaturesVs04:["main roof corrected from 0.4 shed to surveyed flat"],newVisibleFeaturesVs04:["main roof: flat","wall finish: brick","3-bay facade","window pattern: display","corbeled cornice or parapet"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"One-story, three-bay, brick masonry commercial building with Minimalist Traditional influence, built ca. 1950. Flat roof covered with built-up asphalt roofing, with stepped parapet and corbeled sign panel. Storefront has obscured transoms and replacement single-light, fixed display windows. Entrance has a single-light replacement door topped with a single-light transom."}},{id:"599922073",address:"120 COURTHOUSE SQ",district:"Oxford Courthouse Square",name:"Classy Creations/Ajax Diner",source:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/118%20-%20122%20courthouse%20square.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/118%20-%20122%20courthouse%20square.pdf#page=2",photographer:"John Hopkins",photoFrame:"3551:27",frontageSegment:[[-57.22,21.77],[-56.64,18.76]],renderSegment:[[-58.7,29.33],[-55.76,14.27]],renderWidthM:15.34,spanBasis:"118\u2013122 Courthouse Square single surveyed building front",frontagePoint:[-56.93,20.27],frontageWidthM:3.07,frontToward:[.981,.192],footprintCentroid:[-77.2025,18.075],sourceWall:"stucco",sourceRoof:"flat",sourceStories:2,sourceBays:5,facts:["Two-story, five-bay, brick masonry commercial block with Italianate influence, built ca. 1875. Flat roof covered with built-up asphalt roofing, with stepped parapet and simple corbeled cornice. Exterior walls covered with stucco veneer. Windows are 6/6 double-hung replacement sashes, set in reduced reveals, and multi-light fixed and operable replacement doors. A cast iron balcony has been added over the storefront for #122. Storefront at #122 is altered with recessed single-light, fixed display windows, brick bulkheads, ands single-light door topped with a single-light transom and and single-light sidelights; the storefront for #118-20 is altered with single-light transom, single-light display windows, and two two-panel doors with a single-light transoms."],detail:{mainRoof:"flat",roofAccessory:null,wall:"stucco",stories:2,bays:5,windowPattern:"6/6",transomLights:1,storefrontCount:3,canopy:null,flags:["main-roof-flat","wall-stucco","bay-count-5","window-6/6","storefront-transom","corbel-cornice","parapet","balcony","cast-iron","bulkhead"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-stucco",label:"wall finish: stucco",kind:"wall"},{tag:"bay-count-5",label:"5-bay facade",kind:"bays"},{tag:"window-6/6",label:"window pattern: 6/6",kind:"windows"},{tag:"storefront-transom",label:"single-light transom",kind:"transom"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"balcony",label:"balcony with railing",kind:"balcony"},{tag:"cast-iron",label:"cast-iron storefront elements",kind:"metalwork"},{tag:"bulkhead",label:"paneled or masonry bulkhead",kind:"bulkhead"}],baseline04:{stories:2,bays:null,wall:"brick",roof:["flat",-2.9582,163.13,0,"membrane",15132390],flags:["cornice","parapet","transom"],frontages:[{bays:5,clearance:.08,edge:[[-58.33426293922905,27.456530566254916],[-57.746044085020976,24.443409496740095]],flags:["cornice","parapet","transom"],stories:2,use:"shop",wall:"stucco"},{bays:5,clearance:.08,edge:[[-56.34821885420807,17.28312106951482],[-55.76,14.27]],flags:["cornice","parapet","transom"],stories:2,use:"shop",wall:"stucco"},{bays:5,clearance:.08,edge:[[-57.22537590213538,21.776313294611846],[-56.63715704792731,18.763192225097026]],flags:["cornice","parapet","transom"],stories:2,use:"shop",wall:"stucco"}]},correctedFeaturesVs04:["wall material corrected from 0.4 brick to surveyed stucco"],newVisibleFeaturesVs04:["main roof: flat","wall finish: stucco","5-bay facade","window pattern: 6/6","balcony with railing","cast-iron storefront elements","paneled or masonry bulkhead"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"Two-story, five-bay, brick masonry commercial block with Italianate influence, built ca. 1875. Flat roof covered with built-up asphalt roofing, with stepped parapet and simple corbeled cornice. Exterior walls covered with stucco veneer. Windows are 6/6 double-hung replacement sashes, set in reduced reveals, and multi-light fixed and operable replacement doors. A cast iron balcony has been added over the storefront for #122. Storefront at #122 is altered with recessed single-light, fixed display windows, brick bulkheads, ands single-light door topped with a single-light transom and and single-light sidelights; the storefront for #118-20 is altered with single-light transom, single-light display windows, and two two-panel doors with a single-light transoms."}},{id:"479826748",address:"139 COURTHOUSE SQ",district:"Oxford Courthouse Square",name:"Mississippi Madness; Village Tailor",source:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/139%20-%20145%20courthouse%20square.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/139%20-%20145%20courthouse%20square.pdf#page=2",photographer:"John Hopkins",photoFrame:"3553:34",frontageSegment:[[7.97,102.43],[-.26,100.78]],renderSegment:[[7.977308567904803,102.43931909218207],[-.2573085679048037,100.78068090781792]],renderWidthM:8.4,spanBasis:"139\u2013145 Courthouse Square documented two-unit span",frontagePoint:[3.86,101.61],frontageWidthM:8.4,frontToward:[.197,-.98],footprintCentroid:[17.326000000000004,135.57000000000002],sourceWall:"brick",sourceRoof:"gable",sourceStories:2,sourceBays:7,facts:["Two-story, seven-bay, brick masonry, two-unit commercial block with Italianate influence, built ca. 1875. Gable roof covered with asphalt built-up roofing, with flat and segmental varietal parapet, recessed attic panels and corbeled cornice. Windows are 1/1 double-hung sashes. Partial-width, flat-roofed replacement canopy supported by cast iron posts. Two storefronts: to the east, with single-light transoms, single-light display windows, paneled bulkheads, cast iron pilasters an two doors, one a side, single-light door, and a center, single-light double door; to the west, with replacement single-light, metal frame display windows, plain bulkheads, and a replacement single-light door with a single-light transom."],detail:{mainRoof:"gable",roofAccessory:null,wall:"brick",stories:2,bays:7,windowPattern:"1/1",transomLights:1,storefrontCount:2,canopy:"canopy",flags:["main-roof-gable","wall-brick","bay-count-7","window-1/1","storefront-transom","corbel-cornice","parapet","cast-iron","pilasters","canopy","bulkhead"],visibleFeatures:[{tag:"main-roof-gable",label:"main roof: gable",kind:"roof"},{tag:"wall-brick",label:"wall finish: brick",kind:"wall"},{tag:"bay-count-7",label:"7-bay facade",kind:"bays"},{tag:"window-1/1",label:"window pattern: 1/1",kind:"windows"},{tag:"storefront-transom",label:"single-light transom",kind:"transom"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"cast-iron",label:"cast-iron storefront elements",kind:"metalwork"},{tag:"pilasters",label:"storefront pilasters",kind:"pilasters"},{tag:"canopy",label:"projecting canopy with supports",kind:"canopy"},{tag:"bulkhead",label:"paneled or masonry bulkhead",kind:"bulkhead"}],baseline04:{stories:null,bays:null,wall:null,roof:null,flags:[],frontages:[]},correctedFeaturesVs04:["main roof corrected from 0.4 unspecified to surveyed gable","wall material corrected from 0.4 unspecified to surveyed brick","stories corrected from 0.4 unspecified to surveyed 2"],newVisibleFeaturesVs04:["main roof: gable","wall finish: brick","7-bay facade","window pattern: 1/1","single-light transom","corbeled cornice or parapet","parapet profile","cast-iron storefront elements","storefront pilasters","projecting canopy with supports","paneled or masonry bulkhead"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"Two-story, seven-bay, brick masonry, two-unit commercial block with Italianate influence, built ca. 1875. Gable roof covered with asphalt built-up roofing, with flat and segmental varietal parapet, recessed attic panels and corbeled cornice. Windows are 1/1 double-hung sashes. Partial-width, flat-roofed replacement canopy supported by cast iron posts. Two storefronts: to the east, with single-light transoms, single-light display windows, paneled bulkheads, cast iron pilasters an two doors, one a side, single-light door, and a center, single-light double door; to the west, with replacement single-light, metal frame display windows, plain bulkheads, and a replacement single-light door with a single-light transom."}},{id:"599922071",address:"128 COURTHOUSE SQ",district:"Oxford Courthouse Square",name:"Occasions",source:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/128%20courthouse%20square.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/128%20courthouse%20square.pdf#page=2",photographer:"John Hopkins",photoFrame:"3551:25",frontageSegment:[[-60.63,39.22],[-60.16,36.79]],renderSegment:[[-61.68,44.57],[-60.16,36.79]],renderWidthM:7.93,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[-60.37,37.84],frontageWidthM:2.8,frontToward:[.981,.192],footprintCentroid:[-80.7675,36.7825],sourceWall:"stucco",sourceRoof:"flat",sourceStories:2,sourceBays:3,facts:["Two-story, three-bay, brick masonry commercial building with Italianate influence, built ca. 1880. Flat roof covered with built-up asphalt roofing, with flat parapet and corbeled cornice. Exterior walls covered with stucco veneer. Windows are 6/6 double-hung sashes in segmental reveals. Two-story, full-width, hip-roofed replacement porch canopy supported by paneled piers. Storefront altered with single-light fixed display windows and paneled bulkheads, and has original cast iron pilasters. Two entrances contain a replacement single-light double-door topped with a two-light transom, and a side, replacement single-light door in a paneled surround."],detail:{mainRoof:"flat",roofAccessory:null,wall:"stucco",stories:2,bays:3,windowPattern:"6/6",transomLights:2,storefrontCount:1,canopy:"canopy",flags:["main-roof-flat","wall-stucco","bay-count-3","window-6/6","storefront-transom","corbel-cornice","parapet","cast-iron","pilasters","canopy","bulkhead"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-stucco",label:"wall finish: stucco",kind:"wall"},{tag:"bay-count-3",label:"3-bay facade",kind:"bays"},{tag:"window-6/6",label:"window pattern: 6/6",kind:"windows"},{tag:"storefront-transom",label:"two-light transom",kind:"transom"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"cast-iron",label:"cast-iron storefront elements",kind:"metalwork"},{tag:"pilasters",label:"storefront pilasters",kind:"pilasters"},{tag:"canopy",label:"projecting canopy with supports",kind:"canopy"},{tag:"bulkhead",label:"paneled or masonry bulkhead",kind:"bulkhead"}],baseline04:{stories:2,bays:null,wall:"brick",roof:["flat",-2.9487,161.75,0,"membrane",13623008],flags:["arches","brickpilaster","cornice","parapet","transom"],frontages:[{bays:3,clearance:.08,edge:[[-60.69689292104646,39.538044030093076],[-60.16,36.79]],flags:["arches","cornice","parapet","transom","brickpilaster"],stories:2,use:"shop",wall:"stucco"}]},correctedFeaturesVs04:["wall material corrected from 0.4 brick to surveyed stucco"],newVisibleFeaturesVs04:["main roof: flat","wall finish: stucco","3-bay facade","window pattern: 6/6","cast-iron storefront elements","projecting canopy with supports","paneled or masonry bulkhead"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"Two-story, three-bay, brick masonry commercial building with Italianate influence, built ca. 1880. Flat roof covered with built-up asphalt roofing, with flat parapet and corbeled cornice. Exterior walls covered with stucco veneer. Windows are 6/6 double-hung sashes in segmental reveals. Two-story, full-width, hip-roofed replacement porch canopy supported by paneled piers. Storefront altered with single-light fixed display windows and paneled bulkheads, and has original cast iron pilasters. Two entrances contain a replacement single-light double-door topped with a two-light transom, and a side, replacement single-light door in a paneled surround."}},{id:"599922070",address:"130 COURTHOUSE SQ",district:"Oxford Courthouse Square",name:"Oxford Vision Clinic",source:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/130%20courthouse%20square.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/130%20courthouse%20square.pdf#page=2",photographer:"John Hopkins",photoFrame:null,frontageSegment:[[-61.98,46.11],[-61.68,44.57]],renderSegment:[[-62.97,51.19],[-61.68,44.57]],renderWidthM:6.74,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[-61.71,44.74],frontageWidthM:2.8,frontToward:[.982,.191],footprintCentroid:[-82.3075,44.11749999999999],sourceWall:"stucco",sourceRoof:"flat",sourceStories:2,sourceBays:3,facts:["Two-story, three-bay brick masonry commercial building, built ca. 1875 and altered in ca. 1990. Flat roof covered with built-up asphalt roofing, with flat parapet with cast stone cornice and stuccoed frieze. Exterior walls covered with stucco veneer. Windows are 1/1 double-hung sashes. Storefront altered with single-light display windows and stucco-veneered bulkheads. Entrance contains a single-light, single-panel door"],detail:{mainRoof:"flat",roofAccessory:null,wall:"stucco",stories:2,bays:3,windowPattern:"1/1",transomLights:null,storefrontCount:1,canopy:null,flags:["main-roof-flat","wall-stucco","bay-count-3","window-1/1","cornice","parapet","bulkhead"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-stucco",label:"wall finish: stucco",kind:"wall"},{tag:"bay-count-3",label:"3-bay facade",kind:"bays"},{tag:"window-1/1",label:"window pattern: 1/1",kind:"windows"},{tag:"cornice",label:"projecting cornice",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"bulkhead",label:"paneled or masonry bulkhead",kind:"bulkhead"}],baseline04:{stories:1,bays:null,wall:"brick",roof:["shed",-1.3829,157.56,5.9,"shingle",11384764],flags:["parapet"],frontages:[{bays:3,clearance:.08,edge:[[-62.215546189547,47.31830680217142],[-61.68,44.57]],flags:["parapet"],stories:2,use:"shop",wall:"stucco"}]},correctedFeaturesVs04:["main roof corrected from 0.4 shed to surveyed flat","wall material corrected from 0.4 brick to surveyed stucco","stories corrected from 0.4 1 to surveyed 2"],newVisibleFeaturesVs04:["main roof: flat","wall finish: stucco","3-bay facade","window pattern: 1/1","projecting cornice","paneled or masonry bulkhead"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"Two-story, three-bay brick masonry commercial building, built ca. 1875 and altered in ca. 1990. Flat roof covered with built-up asphalt roofing, with flat parapet with cast stone cornice and stuccoed frieze. Exterior walls covered with stucco veneer. Windows are 1/1 double-hung sashes. Storefront altered with single-light display windows and stucco-veneered bulkheads. Entrance contains a single-light, single-panel door"}},{id:"599922069",address:"132 COURTHOUSE SQ",district:"Oxford Courthouse Square",name:"Little Jewelers (north)",source:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/132%20courthouse%20square.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/132%20courthouse%20square.pdf#page=2",photographer:"John Hopkins",photoFrame:"3551:23",frontageSegment:[[-63.53,54.06],[-62.99,51.31]],renderSegment:[[-63.94,56.19],[-62.97,51.19]],renderWidthM:5.09,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[-63.26,52.69],frontageWidthM:2.8,frontToward:[.982,.19],footprintCentroid:[-83.44999999999999,49.887499999999996],sourceWall:"stucco",sourceRoof:"flat",sourceStories:2,sourceBays:3,facts:["Two-story, three-bay, brick masonry commercial building built ca. 1880 and altered with added Colonial Revival influence ca. 1985. Flat roof covered with built-up asphalt roofing, with flat parapet and projecting, added wood cornice. Exterior walls covered with stucco veneer. Windows are 6/6 Double-hung sashes. Storefrotn altered with single-light fixed display windows and paneled bulkheads. Entrance contains a single-light, metal-frame double door."],detail:{mainRoof:"flat",roofAccessory:null,wall:"stucco",stories:2,bays:3,windowPattern:"6/6",transomLights:null,storefrontCount:1,canopy:null,flags:["main-roof-flat","wall-stucco","bay-count-3","window-6/6","cornice","parapet","bulkhead"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-stucco",label:"wall finish: stucco",kind:"wall"},{tag:"bay-count-3",label:"3-bay facade",kind:"bays"},{tag:"window-6/6",label:"window pattern: 6/6",kind:"windows"},{tag:"cornice",label:"projecting cornice",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"bulkhead",label:"paneled or masonry bulkhead",kind:"bulkhead"}],baseline04:{stories:2,bays:null,wall:"brick",roof:["flat",.1915,160.15,0,"membrane",10135474],flags:["parapet"],frontages:[{bays:3,clearance:.08,edge:[[-63.52759264703065,54.064188902219854],[-62.99433481115314,51.31543717089248]],flags:["parapet"],stories:2,use:"shop",wall:"stucco"}]},correctedFeaturesVs04:["wall material corrected from 0.4 brick to surveyed stucco"],newVisibleFeaturesVs04:["main roof: flat","wall finish: stucco","3-bay facade","window pattern: 6/6","projecting cornice","paneled or masonry bulkhead"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"Two-story, three-bay, brick masonry commercial building built ca. 1880 and altered with added Colonial Revival influence ca. 1985. Flat roof covered with built-up asphalt roofing, with flat parapet and projecting, added wood cornice. Exterior walls covered with stucco veneer. Windows are 6/6 Double-hung sashes. Storefrotn altered with single-light fixed display windows and paneled bulkheads. Entrance contains a single-light, metal-frame double door."}},{id:"599922068",address:"134 COURTHOUSE SQ",district:"Oxford Courthouse Square",name:"Little Jewelers (south)",source:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/134%20courthouse%20square.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/134%20courthouse%20square.pdf#page=2",photographer:"John Hopkins",photoFrame:"3551:22",frontageSegment:[[-64.49,58.99],[-63.95,56.25]],renderSegment:[[-65.16,62.46],[-63.94,56.19]],renderWidthM:6.39,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[-64.22,57.62],frontageWidthM:2.8,frontToward:[.982,.191],footprintCentroid:[-85.59799999999998,55.718],sourceWall:"brick",sourceRoof:"flat",sourceStories:2,sourceBays:3,facts:["Two-story, three-bay, brick masonry commercial building, built ca. 1875 and altered with Minimalist Traditional influence in ca. 1940. Flat roof covered with built-up asphalt roofing, with stepped parapet and corbeled signboard. Windows are 6/6 double-hung sashes with flat brick arches. Storefront has replacement single-light display windows and paneled bulkheads. Entrance contains a single light, metal-frame double-door."],detail:{mainRoof:"flat",roofAccessory:null,wall:"brick",stories:2,bays:3,windowPattern:"6/6",transomLights:null,storefrontCount:1,canopy:null,flags:["main-roof-flat","wall-brick","bay-count-3","window-6/6","flat-brick-arch","corbel-cornice","parapet","bulkhead"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-brick",label:"wall finish: brick",kind:"wall"},{tag:"bay-count-3",label:"3-bay facade",kind:"bays"},{tag:"window-6/6",label:"window pattern: 6/6",kind:"windows"},{tag:"flat-brick-arch",label:"flat brick window arches",kind:"arch"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"bulkhead",label:"paneled or masonry bulkhead",kind:"bulkhead"}],baseline04:{stories:2,bays:null,wall:"brick",roof:["shed",.1922,161.27,2.41,"shingle",15132390],flags:["parapet"],frontages:[{bays:3,clearance:.08,edge:[[-64.48570312506554,58.99455622472207],[-63.95091610030228,56.246101597455166]],flags:["parapet"],stories:2,use:"shop",wall:"brick"}]},correctedFeaturesVs04:["main roof corrected from 0.4 shed to surveyed flat"],newVisibleFeaturesVs04:["main roof: flat","wall finish: brick","3-bay facade","window pattern: 6/6","flat brick window arches","corbeled cornice or parapet","paneled or masonry bulkhead"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"Two-story, three-bay, brick masonry commercial building, built ca. 1875 and altered with Minimalist Traditional influence in ca. 1940. Flat roof covered with built-up asphalt roofing, with stepped parapet and corbeled signboard. Windows are 6/6 double-hung sashes with flat brick arches. Storefront has replacement single-light display windows and paneled bulkheads. Entrance contains a single light, metal-frame double-door."}},{id:"599922066",address:"138 COURTHOUSE SQ",district:"Oxford Courthouse Square",name:"LeShea's, Buck's Records",source:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/138%20courthouse%20square.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/138%20courthouse%20square.pdf#page=2",photographer:"John Hopkins",photoFrame:null,frontageSegment:[[-67.02,71.94],[-66.48,69.19]],renderSegment:[[-67.41,73.94],[-65.16,62.46]],renderWidthM:11.7,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[-66.75,70.56],frontageWidthM:2.8,frontToward:[.981,.192],footprintCentroid:[-78.825,65.59],sourceWall:"brick",sourceRoof:"flat",sourceStories:2,sourceBays:6,facts:["Two-story, six-bay, brick masonry commercial building with Italianate influence, built ca. 1875. Flat roof covered with built-up asphalt roofing, with flat parpet and bracketed corbeled cornice. Windows are 1/1 double-hung sashes with corbeled segmental-arched lintels. Two-story, L-plan, hip roofed replacement porch canopy supported by chamfered posts. Two replacement storefronts each have singel-light transoms and single-light fixed display windows. Two entrances each have"],detail:{mainRoof:"flat",roofAccessory:null,wall:"brick",stories:2,bays:6,windowPattern:"1/1",transomLights:null,storefrontCount:1,canopy:"canopy",flags:["main-roof-flat","wall-brick","bay-count-6","window-1/1","segmental-arch","storefront-transom","corbel-cornice","bracketed-cornice","canopy"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-brick",label:"wall finish: brick",kind:"wall"},{tag:"bay-count-6",label:"6-bay facade",kind:"bays"},{tag:"window-1/1",label:"window pattern: 1/1",kind:"windows"},{tag:"segmental-arch",label:"segmental-arched window reveals",kind:"arch"},{tag:"storefront-transom",label:"singel-light transom",kind:"transom"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"bracketed-cornice",label:"bracketed cornice",kind:"cornice"},{tag:"canopy",label:"projecting canopy with supports",kind:"canopy"}],baseline04:{stories:2,bays:null,wall:"brick",roof:["shed",-1.3648,162.42,1.75,"shingle",15132390],flags:["arches","cornice"],frontages:[{bays:6,clearance:0,edge:[[-67.01690168371148,71.93432503511463],[-66.47836716334984,69.18660223789165]],flags:["arches","cornice"],stories:2,use:"shop",wall:"brick"}]},correctedFeaturesVs04:["main roof corrected from 0.4 shed to surveyed flat"],newVisibleFeaturesVs04:["main roof: flat","wall finish: brick","6-bay facade","window pattern: 1/1","singel-light transom","bracketed cornice","projecting canopy with supports"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"Two-story, six-bay, brick masonry commercial building with Italianate influence, built ca. 1875. Flat roof covered with built-up asphalt roofing, with flat parpet and bracketed corbeled cornice. Windows are 1/1 double-hung sashes with corbeled segmental-arched lintels. Two-story, L-plan, hip roofed replacement porch canopy supported by chamfered posts. Two replacement storefronts each have singel-light transoms and single-light fixed display windows. Two entrances each have"}},{id:"599810029",address:"158 COURTHOUSE SQ",district:"Oxford Courthouse Square",name:"Union Planter's National Bank",source:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/154%20-%20158%20courthouse%20square.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/courthouse%20square/154%20-%20158%20courthouse%20square.pdf#page=2",photographer:"John Hopkins",photoFrame:"3552:4",frontageSegment:[[-39.69,94.03],[-41.55,93.63]],renderSegment:[[-39.69,94.03],[-46.39,92.59]],renderWidthM:6.85,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[-40.18,93.92],frontageWidthM:2.8,frontToward:[.21,-.978],footprintCentroid:[-47.556,111.324],sourceWall:"stucco",sourceRoof:"flat",sourceStories:1.5,sourceBays:6,facts:['One and one-half story, six-bay, brick masonry, three-unit commercial building with Second Emprie influence, built 1877, with additional three-bay building (1120) combined in a "unified" facade ca. 1975. Flat roof covered with built-up asphalt roofing, with false Mansard roof with segmental and rectangular parapet proejctions, and corbeled and bracketed cornice with paneled frieze. Exterior walls covered with stucco veneer. Street level has recessed single-light, fixed, metal frame windows'],detail:{mainRoof:"flat",roofAccessory:"mansard",wall:"stucco",stories:1.5,bays:6,windowPattern:"display",transomLights:null,storefrontCount:1,canopy:null,flags:["main-roof-flat","wall-stucco","bay-count-6","window-display","corbel-cornice","bracketed-cornice","parapet","mansard"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-stucco",label:"wall finish: stucco",kind:"wall"},{tag:"bay-count-6",label:"6-bay facade",kind:"bays"},{tag:"window-display",label:"window pattern: display",kind:"windows"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"bracketed-cornice",label:"bracketed cornice",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"mansard",label:"added mansard roof feature",kind:"roof-detail"}],baseline04:{stories:2,bays:null,wall:"brick",roof:["flat",-1.3626,162.92,0,"membrane",8820135],flags:["cornice"],frontages:[{bays:6,clearance:1.47,edge:[[-39.69,94.03],[-42.427487494172226,93.44164447886448]],flags:["cornice"],stories:1,use:"shop",wall:"stucco"}]},correctedFeaturesVs04:["wall material corrected from 0.4 brick to surveyed stucco","stories corrected from 0.4 2 to surveyed 1.5"],newVisibleFeaturesVs04:["main roof: flat","wall finish: stucco","6-bay facade","window pattern: display","bracketed cornice","parapet profile","added mansard roof feature"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:'One and one-half story, six-bay, brick masonry, three-unit commercial building with Second Emprie influence, built 1877, with additional three-bay building (1120) combined in a "unified" facade ca. 1975. Flat roof covered with built-up asphalt roofing, with false Mansard roof with segmental and rectangular parapet proejctions, and corbeled and bracketed cornice with paneled frieze. Exterior walls covered with stucco veneer. Street level has recessed single-light, fixed, metal frame windows'}},{id:"599827683",address:"211 SOUTH LAMAR BOULEVARD",district:"South Lamar commercial corridor",name:"Proud Larry's",source:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/211%20south%20lamar.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/211%20south%20lamar.pdf#page=2",photographer:"John Hopkins",photoFrame:"3552:36",frontageSegment:[[-13.24,132.67],[-13.78,135.42]],renderSegment:[[-12.95,131.2],[-14.72,140.24]],renderWidthM:9.21,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[-13.51,134.05],frontageWidthM:2.8,frontToward:[-.981,-.192],footprintCentroid:[-4.845,137.47],sourceWall:"brick",sourceRoof:"flat",sourceStories:1,sourceBays:5,facts:["One-story, five-bay, brick masonry commercial building with Minimalist Traditional influence, built ca. 1930. Flat roof covered with built-up asphalt roofing, with a flat parapet and a corbeled cornice. Storefront has single-light fixed display windows, brick bulkheads, and a recessed entry with a pressed metal ceiling and flanking 6/6 double-hung sashes. Two entrances each have six-light, single-panel doors topped with two-light transoms."],detail:{mainRoof:"flat",roofAccessory:null,wall:"brick",stories:1,bays:5,windowPattern:"6/6",transomLights:2,storefrontCount:1,canopy:null,flags:["main-roof-flat","wall-brick","bay-count-5","window-6/6","storefront-transom","corbel-cornice","parapet","bulkhead","recessed-entry"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-brick",label:"wall finish: brick",kind:"wall"},{tag:"bay-count-5",label:"5-bay facade",kind:"bays"},{tag:"window-6/6",label:"window pattern: 6/6",kind:"windows"},{tag:"storefront-transom",label:"two-light transom",kind:"transom"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"bulkhead",label:"paneled or masonry bulkhead",kind:"bulkhead"},{tag:"recessed-entry",label:"recessed entry",kind:"door"}],baseline04:{stories:1,bays:null,wall:"brick",roof:["flat",.1923,158.87,0,"membrane",15132390],flags:["cornice","parapet"],frontages:[{bays:5,clearance:.56,edge:[[-13.239085843704943,132.67646103225576],[-13.777100192392146,135.4242857283757]],flags:["cornice","parapet"],stories:1,use:"shop",wall:"brick"}]},correctedFeaturesVs04:[],newVisibleFeaturesVs04:["main roof: flat","wall finish: brick","5-bay facade","window pattern: 6/6","two-light transom","paneled or masonry bulkhead","recessed entry"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"One-story, five-bay, brick masonry commercial building with Minimalist Traditional influence, built ca. 1930. Flat roof covered with built-up asphalt roofing, with a flat parapet and a corbeled cornice. Storefront has single-light fixed display windows, brick bulkheads, and a recessed entry with a pressed metal ceiling and flanking 6/6 double-hung sashes. Two entrances each have six-light, single-panel doors topped with two-light transoms."}},{id:"479826747",address:"307 SOUTH LAMAR BOULEVARD",district:"South Lamar commercial corridor",name:"079",source:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/307%20-%20309%20south%20lamar.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/307%20-%20309%20south%20lamar.pdf#page=2",photographer:"John Hopkins",photoFrame:"3553:31",frontageSegment:[[-20.4,169.4],[-21.74,175.89]],renderSegment:[[-20.397172777521753,169.39910451746863],[-21.742827222478248,175.88089548253134]],renderWidthM:6.62,spanBasis:"307\u2013309 South Lamar documented storefront span",frontagePoint:[-21.07,172.64],frontageWidthM:6.62,frontToward:[-.979,-.203],footprintCentroid:[1.3499999999999996,173.3175],sourceWall:"brick",sourceRoof:"flat",sourceStories:1,sourceBays:6,facts:["One-story, six-bay brick masonry commercial building with Minimalist Traditional influence, built ca. 1925 and alter in ca. 1980. Flat roof covered with built-up asphalt roofing, with flat parapet, tile coping, and added Mansard roof covered with asphalt shingles. Two storefronts each contain single-light replacement fixed display windows and brick bulkheads. Entrances each contain oval-light replacement doors topped with single-light transoms and flanked by single-light sidelights."],detail:{mainRoof:"flat",roofAccessory:"mansard",wall:"brick",stories:1,bays:6,windowPattern:"display",transomLights:1,storefrontCount:2,canopy:null,flags:["main-roof-flat","wall-brick","bay-count-6","window-display","storefront-transom","parapet","bulkhead","mansard","oval-light"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-brick",label:"wall finish: brick",kind:"wall"},{tag:"bay-count-6",label:"6-bay facade",kind:"bays"},{tag:"window-display",label:"window pattern: display",kind:"windows"},{tag:"storefront-transom",label:"single-light transom",kind:"transom"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"bulkhead",label:"paneled or masonry bulkhead",kind:"bulkhead"},{tag:"mansard",label:"added mansard roof feature",kind:"roof-detail"},{tag:"oval-light",label:"oval-light door or entrance",kind:"door"}],baseline04:{stories:1,bays:null,wall:"brick",roof:["flat",-1.3675,157.41,0,"membrane",15132390],flags:["parapet","transom"],frontages:[{bays:6,clearance:0,edge:[[-4.952489856623231,150.70091767709687],[-10.369061403393843,149.58662297697708]],flags:[],stories:1,use:"shop",wall:"brick"},{bays:6,clearance:0,edge:[[-17.690148333781647,156.36848677608685],[-19.035802778738145,162.85027774114957]],flags:[],stories:1,use:"shop",wall:"brick"},{bays:3,clearance:0,edge:[[-18.478195872532464,160.16437912858459],[-21.171537473087383,173.1377522837328]],flags:["parapet","transom"],stories:1,use:"shop",wall:"brick"},{bays:6,clearance:0,edge:[[-20.39544853134466,169.39946248018987],[-21.741102976301157,175.88125344525258]],flags:["parapet"],stories:1,use:"shop",wall:"brick"},{bays:5,clearance:0,edge:[[-16.005584917694094,189.01310090391908],[-9.473002019381756,190.36004584588116]],flags:["parapet","transom"],stories:1,use:"shop",wall:"stucco"}]},correctedFeaturesVs04:[],newVisibleFeaturesVs04:["main roof: flat","wall finish: brick","6-bay facade","window pattern: display","paneled or masonry bulkhead","added mansard roof feature","oval-light door or entrance"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"One-story, six-bay brick masonry commercial building with Minimalist Traditional influence, built ca. 1925 and alter in ca. 1980. Flat roof covered with built-up asphalt roofing, with flat parapet, tile coping, and added Mansard roof covered with asphalt shingles. Two storefronts each contain single-light replacement fixed display windows and brick bulkheads. Entrances each contain oval-light replacement doors topped with single-light transoms and flanked by single-light sidelights."}},{id:"321045855",address:"302 SOUTH LAMAR BOULEVARD",district:"South Lamar commercial corridor",name:"Landry's, Diango's, others",source:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/302%20-%20308%20south%20lamar.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/302%20-%20308%20south%20lamar.pdf#page=2",photographer:"John Hopkins",photoFrame:null,frontageSegment:[[-39.09,151.09],[-38.53,148.11]],renderSegment:[[-44.35,179.39],[-37.71,143.68]],renderWidthM:36.32,spanBasis:"302\u2013308 South Lamar four-storefront surveyed building front",frontagePoint:[-38.81,149.6],frontageWidthM:3.03,frontToward:[.983,.183],footprintCentroid:[-59.21,158.18],sourceWall:"brick",sourceRoof:"flat",sourceStories:1,sourceBays:12,facts:["One-story, twelve-bay, brick masonry commercial block with Minimalist Traditional influence, built ca. 1945. Flat roof covered with built-up asphalt roofing, with continuous corbeled cornice and coping. Four storefronts, each altered, contain (306, 308) single-light, fixed display windows and (302,304) multi-light display windows; (302, 304 and 306) single-light metal -frame replacement doors topped with single-light transoms, and (308) a single-light, metal-frame, double- door topped by a inued: multi-light transom 1nd flanked by four-light sidelights. All storefronts have brick bulkheads."],detail:{mainRoof:"flat",roofAccessory:null,wall:"brick",stories:1,bays:12,windowPattern:"multi-light",transomLights:1,storefrontCount:4,canopy:null,flags:["main-roof-flat","wall-brick","bay-count-12","window-multi-light","storefront-transom","corbel-cornice","bulkhead"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-brick",label:"wall finish: brick",kind:"wall"},{tag:"bay-count-12",label:"12-bay facade",kind:"bays"},{tag:"window-multi-light",label:"window pattern: multi-light",kind:"windows"},{tag:"storefront-transom",label:"single-light transom",kind:"transom"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"bulkhead",label:"paneled or masonry bulkhead",kind:"bulkhead"}],baseline04:{stories:null,bays:null,wall:null,roof:null,flags:[],frontages:[]},correctedFeaturesVs04:["main roof corrected from 0.4 unspecified to surveyed flat","wall material corrected from 0.4 unspecified to surveyed brick","stories corrected from 0.4 unspecified to surveyed 1"],newVisibleFeaturesVs04:["main roof: flat","wall finish: brick","12-bay facade","window pattern: multi-light","single-light transom","corbeled cornice or parapet","paneled or masonry bulkhead"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"One-story, twelve-bay, brick masonry commercial block with Minimalist Traditional influence, built ca. 1945. Flat roof covered with built-up asphalt roofing, with continuous corbeled cornice and coping. Four storefronts, each altered, contain (306, 308) single-light, fixed display windows and (302,304) multi-light display windows; (302, 304 and 306) single-light metal -frame replacement doors topped with single-light transoms, and (308) a single-light, metal-frame, double- door topped by a inued: multi-light transom 1nd flanked by four-light sidelights. All storefronts have brick bulkheads."}},{id:"269021192",address:"400 SOUTH LAMAR BOULEVARD",district:"South Lamar commercial corridor",name:"Johnson's Furniture",source:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/400%20south%20lamar.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/400%20south%20lamar.pdf#page=2",photographer:"John Hopkins",photoFrame:"3553:7",frontageSegment:[[-52.4,212.68],[-51.87,209.93]],renderSegment:[[-54.72,224.65],[-49.57,198.02]],renderWidthM:27.12,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[-52.14,211.3],frontageWidthM:2.8,frontToward:[.982,.19],footprintCentroid:[-78.30666666666666,204.51333333333335],sourceWall:"brick",sourceRoof:"flat",sourceStories:1,sourceBays:11,facts:["One-story, eleven-bay, brick masonry commercial building with Minimalist Traditional influence, built ca. 1955 and altered in ca. 1980. Flat roof covered with built-up asphalt roofing, with flat parpaet and cast stone coping, and added shed roof covered with wood shake shingles. Storefront has a bank of single-light, metal-frame display windows. Entrance has a single-light door with a single-light transom."],detail:{mainRoof:"flat",roofAccessory:null,wall:"brick",stories:1,bays:11,windowPattern:"display",transomLights:1,storefrontCount:1,canopy:null,flags:["main-roof-flat","wall-brick","bay-count-11","window-display","storefront-transom"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-brick",label:"wall finish: brick",kind:"wall"},{tag:"bay-count-11",label:"11-bay facade",kind:"bays"},{tag:"window-display",label:"window pattern: display",kind:"windows"},{tag:"storefront-transom",label:"single-light transom",kind:"transom"}],baseline04:{stories:1,bays:null,wall:"brick",roof:["flat",-2.952,156.93,0,"membrane",15132390],flags:["transom"],frontages:[{bays:11,clearance:1.68,edge:[[-52.40411711009388,212.67486187219416],[-51.87247305404556,209.92579755907443]],flags:["transom"],stories:1,use:"shop",wall:"brick"}]},correctedFeaturesVs04:[],newVisibleFeaturesVs04:["main roof: flat","wall finish: brick","11-bay facade","window pattern: display"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"One-story, eleven-bay, brick masonry commercial building with Minimalist Traditional influence, built ca. 1955 and altered in ca. 1980. Flat roof covered with built-up asphalt roofing, with flat parpaet and cast stone coping, and added shed roof covered with wood shake shingles. Storefront has a bank of single-light, metal-frame display windows. Entrance has a single-light door with a single-light transom."}},{id:"479826744",address:"403 SOUTH LAMAR BOULEVARD",district:"South Lamar commercial corridor",name:"Oxford Frame Gallery, Classic Formal Wear",source:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/401%20-%20403%20south%20lamar.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/401%20-%20403%20south%20lamar.pdf#page=2",photographer:"John Hopkins",photoFrame:"3553:29",frontageSegment:[[-27.62,206.81],[-28.97,213.57]],renderSegment:[[-25.63,196.83],[-31.02,223.86]],renderWidthM:27.56,spanBasis:"401\u2013403 South Lamar shared surveyed storefront frontage",frontagePoint:[-28.29,210.19],frontageWidthM:6.89,frontToward:[-.981,-.196],footprintCentroid:[-7.629999999999999,218.39624999999998],sourceWall:"brick",sourceRoof:"flat",sourceStories:1,sourceBays:4,facts:["One-story, four-bay, brick masonry commercial block with Minimalist Traditional influence, built ca. 1925. Flat roof covered with built-up asphalt shingles, with flat and peaked parapet and corner pilaster projections through parapet, corbeled cornice, and attic panels. Two storefronts, each have obscured transoms and replacement singe-light fixed display windows. Entrances contain a single-light metal-frame replacement doors."],detail:{mainRoof:"flat",roofAccessory:null,wall:"brick",stories:1,bays:4,windowPattern:"display",transomLights:null,storefrontCount:2,canopy:null,flags:["main-roof-flat","wall-brick","bay-count-4","window-display","storefront-transom","corbel-cornice","parapet","pilasters"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-brick",label:"wall finish: brick",kind:"wall"},{tag:"bay-count-4",label:"4-bay facade",kind:"bays"},{tag:"window-display",label:"window pattern: display",kind:"windows"},{tag:"storefront-transom",label:"obscured transom",kind:"transom"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"pilasters",label:"storefront pilasters",kind:"pilasters"}],baseline04:{stories:1,bays:null,wall:"brick",roof:["flat",-2.9463,154.88,0,"membrane",15132390],flags:["cornice"],frontages:[{bays:4,clearance:.05,edge:[[-27.62023821921486,206.8107308099031],[-28.967632319819696,213.56769974113664]],flags:["cornice"],stories:1,use:"shop",wall:"brick"},{bays:4,clearance:.05,edge:[[-9.884807145162561,199.94416639518803],[-19.596670276301847,198.02330343234618]],flags:["cornice"],stories:1,use:"shop",wall:"brick"}]},correctedFeaturesVs04:[],newVisibleFeaturesVs04:["main roof: flat","wall finish: brick","4-bay facade","window pattern: display","obscured transom","parapet profile","storefront pilasters"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"One-story, four-bay, brick masonry commercial block with Minimalist Traditional influence, built ca. 1925. Flat roof covered with built-up asphalt shingles, with flat and peaked parapet and corner pilaster projections through parapet, corbeled cornice, and attic panels. Two storefronts, each have obscured transoms and replacement singe-light fixed display windows. Entrances contain a single-light metal-frame replacement doors."}},{id:"479826746",address:"415 SOUTH LAMAR BOULEVARD",district:"South Lamar commercial corridor",name:"Landon and Davis Law Offices",source:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/415%20south%20lamar.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/415%20south%20lamar.pdf#page=2",photographer:"John Hopkins",photoFrame:"3553:26",frontageSegment:[[-26.28,234.86],[-26.55,236.23]],renderSegment:[[-25.22,229.56],[-26.55,236.23]],renderWidthM:6.8,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[-26.55,236.23],frontageWidthM:2.8,frontToward:[-.981,-.196],footprintCentroid:[-19.306250000000002,233.97375],sourceWall:"brick",sourceRoof:"gable",sourceStories:1,sourceBays:3,facts:["One-story, three-bay, brick veneered Cape with Colonial Revival influence, built ca. 1935. Side g le roof covered with asphalt shingles, with flush eaves and two, gable dormers containing nine-light casements. Windows are 6/1 double-hung sashes, some in pairs. One-bay, gable roof porch supported by box piers. Entrance contains a multi-light door flanked by multi-light sidelights."],detail:{mainRoof:"gable",roofAccessory:"dormers",wall:"brick",stories:1,bays:3,windowPattern:"casement",transomLights:null,storefrontCount:1,canopy:null,flags:["main-roof-gable","wall-brick","bay-count-3","window-casement","dormer"],visibleFeatures:[{tag:"main-roof-gable",label:"main roof: gable",kind:"roof"},{tag:"wall-brick",label:"wall finish: brick",kind:"wall"},{tag:"bay-count-3",label:"3-bay facade",kind:"bays"},{tag:"window-casement",label:"window pattern: casement",kind:"windows"},{tag:"dormer",label:"roof dormer",kind:"roof-detail"}],baseline04:{stories:1,bays:null,wall:"brick",roof:["hip",-2.9457,154.94,3.13,"shingle",8493723],flags:[],frontages:[{bays:3,clearance:12,edge:[[-26.002458318600347,233.484057883507],[-26.55,236.23]],flags:[],stories:1,use:"shop",wall:"brick"}]},correctedFeaturesVs04:["main roof corrected from 0.4 hip to surveyed gable"],newVisibleFeaturesVs04:["main roof: gable","wall finish: brick","3-bay facade","window pattern: casement","roof dormer"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"One-story, three-bay, brick veneered Cape with Colonial Revival influence, built ca. 1935. Side g le roof covered with asphalt shingles, with flush eaves and two, gable dormers containing nine-light casements. Windows are 6/1 double-hung sashes, some in pairs. One-bay, gable roof porch supported by box piers. Entrance contains a multi-light door flanked by multi-light sidelights."}},{id:"599497825",address:"425 SOUTH LAMAR BOULEVARD",district:"South Lamar commercial corridor",name:"Stooge's Exxon",source:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/425%20south%20lamar.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/425%20south%20lamar.pdf#page=2",photographer:"John Hopkins",photoFrame:"3553:12",frontageSegment:[[-36.88,274.66],[-37.55,278.39]],renderSegment:[[-33.65,256.9],[-37.71,279.26]],renderWidthM:22.73,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[-37.21,276.53],frontageWidthM:3.79,frontToward:[-.984,-.179],footprintCentroid:[-15.856666666666664,281.2033333333333],sourceWall:null,sourceRoof:null,sourceStories:1,sourceBays:6,facts:["One-story, six-bay, free-standing convenience store with service canopy, built ca. 1995. Flat roof covered with built-up asphalt roofing, with a plain parapet. Exterior walls covered with synthetic stucco veneer. Metal frame, single fixed-light display window system in banks of one, two and four lights, with stucco bulkheads below. Entrance has a single-light, metal-frame door. Front-projecting, three-bay, flat roofed service canopy supported by metal piers."],detail:{mainRoof:"flat",roofAccessory:null,wall:"stucco",stories:1,bays:6,windowPattern:"display",transomLights:null,storefrontCount:1,canopy:"canopy",flags:["main-roof-flat","wall-stucco","bay-count-6","window-display","parapet","canopy","bulkhead"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-stucco",label:"wall finish: stucco",kind:"wall"},{tag:"bay-count-6",label:"6-bay facade",kind:"bays"},{tag:"window-display",label:"window pattern: display",kind:"windows"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"canopy",label:"projecting canopy with supports",kind:"canopy"},{tag:"bulkhead",label:"paneled or masonry bulkhead",kind:"bulkhead"}],baseline04:{stories:4,bays:null,wall:"brick",roof:["flat",.1789,163.34,0,"membrane",15132390],flags:[],frontages:[{bays:6,clearance:.99,edge:[[-36.87561739129977,274.66473026341447],[-37.55271262582472,278.3937572200593]],flags:[],stories:1,use:"shop",wall:"brick"}]},correctedFeaturesVs04:["wall material corrected from 0.4 brick to surveyed stucco","stories corrected from 0.4 4 to surveyed 1"],newVisibleFeaturesVs04:["main roof: flat","wall finish: stucco","6-bay facade","window pattern: display","parapet profile","projecting canopy with supports","paneled or masonry bulkhead"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"One-story, six-bay, free-standing convenience store with service canopy, built ca. 1995. Flat roof covered with built-up asphalt roofing, with a plain parapet. Exterior walls covered with synthetic stucco veneer. Metal frame, single fixed-light display window system in banks of one, two and four lights, with stucco bulkheads below. Entrance has a single-light, metal-frame door. Front-projecting, three-bay, flat roofed service canopy supported by metal piers."}},{id:"269020978",address:"426 SOUTH LAMAR BOULEVARD",district:"South Lamar commercial corridor",name:"Uni Globe World Travel, others",source:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/426%20south%20lamar.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/426%20south%20lamar.pdf#page=2",photographer:"John Hopkins",photoFrame:"3553:8",frontageSegment:[[-74.41,253.59],[-72.98,253.85]],renderSegment:[[-84.4,251.74],[-72.98,253.85]],renderWidthM:11.61,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[-72.98,253.85],frontageWidthM:2.9,frontToward:[-.182,.983],footprintCentroid:[-93.7,240.849],sourceWall:"brick",sourceRoof:"gable",sourceStories:1,sourceBays:4,facts:["One-story, four-bay, brick masonry Pure Oil gas station built in ca. 1930, with one-stray, seven-bay, brick masonry associated rear automobile service facilities, altered in ca. 1970. Gas station has side gable roof covered with asphalt shingles, with flush eaves, multi-light and single-light fixed display windows and a nine-light replacement door. Rear service facilities have flat, and added shed and Mansard roofs. mutli-light fixed display windows, and multi-light doors."],detail:{mainRoof:"gable",roofAccessory:"mansard",wall:"brick",stories:1,bays:4,windowPattern:"multi-light",transomLights:null,storefrontCount:1,canopy:null,flags:["main-roof-gable","wall-brick","bay-count-4","window-multi-light","mansard"],visibleFeatures:[{tag:"main-roof-gable",label:"main roof: gable",kind:"roof"},{tag:"wall-brick",label:"wall finish: brick",kind:"wall"},{tag:"bay-count-4",label:"4-bay facade",kind:"bays"},{tag:"window-multi-light",label:"window pattern: multi-light",kind:"windows"},{tag:"mansard",label:"added mansard roof feature",kind:"roof-detail"}],baseline04:{stories:1,bays:null,wall:"brick",roof:["flat",-2.9597,155.87,0,"membrane",12829628],flags:[],frontages:[]},correctedFeaturesVs04:["main roof corrected from 0.4 flat to surveyed gable"],newVisibleFeaturesVs04:["main roof: gable","wall finish: brick","4-bay facade","window pattern: multi-light","added mansard roof feature"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"One-story, four-bay, brick masonry Pure Oil gas station built in ca. 1930, with one-stray, seven-bay, brick masonry associated rear automobile service facilities, altered in ca. 1970. Gas station has side gable roof covered with asphalt shingles, with flush eaves, multi-light and single-light fixed display windows and a nine-light replacement door. Rear service facilities have flat, and added shed and Mansard roofs. mutli-light fixed display windows, and multi-light doors."}},{id:"269020722",address:"430 SOUTH LAMAR BOULEVARD",district:"South Lamar commercial corridor",name:"Abner's",source:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/430%20south%20lamar.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/south%20lamar/430%20south%20lamar.pdf#page=2",photographer:"John Hopkins",photoFrame:"3553:11",frontageSegment:[[-75.77,269.93],[-75.27,267.17]],renderSegment:[[-76.37,273.21],[-74.24,261.47]],renderWidthM:11.93,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[-75.52,268.55],frontageWidthM:2.8,frontToward:[.984,.179],footprintCentroid:[-83.36800000000001,268.656],sourceWall:null,sourceRoof:null,sourceStories:1,sourceBays:5,facts:["One-story, five-bay, frame convenience store built ca. 1960 and a 1 tered ca. 1990 with Second Empire Revival influence. Fl at roof covered with buildt-up asphalt roofing, with flat parapet, metal band cornice and added Mansard roof covered with asphalt shingles. Exterior walls covered with Masonite siding. Storefronts wrap the canted dcorner of the building and contain single-light transoms and single-light, fixed display windows. Two entrances each contain single-light, metal frame doors."],detail:{mainRoof:null,roofAccessory:"mansard",wall:"board",stories:1,bays:5,windowPattern:"display",transomLights:1,storefrontCount:1,canopy:null,flags:["wall-board","bay-count-5","window-display","storefront-transom","cornice","parapet","mansard"],visibleFeatures:[{tag:"wall-board",label:"wall finish: board",kind:"wall"},{tag:"bay-count-5",label:"5-bay facade",kind:"bays"},{tag:"window-display",label:"window pattern: display",kind:"windows"},{tag:"storefront-transom",label:"single-light transom",kind:"transom"},{tag:"cornice",label:"projecting cornice",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"mansard",label:"added mansard roof feature",kind:"roof-detail"}],baseline04:{stories:1,bays:null,wall:"brick",roof:["flat",.1781,156.92,0,"membrane",15132390],flags:["parapet"],frontages:[{bays:5,clearance:12,edge:[[-75.77431042729015,269.92671568844423],[-75.27446378257257,267.1716923978413]],flags:["parapet"],stories:1,use:"shop",wall:"brick"},{bays:3,clearance:12,edge:[[-86.6066771351438,275.24916478268176],[-82.51245125757858,275.9859920782371]],flags:[],stories:1,use:"shop",wall:"brick"}]},correctedFeaturesVs04:["wall material corrected from 0.4 brick to surveyed board"],newVisibleFeaturesVs04:["wall finish: board","5-bay facade","window pattern: display","single-light transom","projecting cornice","added mansard roof feature"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"One-story, five-bay, frame convenience store built ca. 1960 and a 1 tered ca. 1990 with Second Empire Revival influence. Fl at roof covered with buildt-up asphalt roofing, with flat parapet, metal band cornice and added Mansard roof covered with asphalt shingles. Exterior walls covered with Masonite siding. Storefronts wrap the canted dcorner of the building and contain single-light transoms and single-light, fixed display windows. Two entrances each contain single-light, metal frame doors."}},{id:"269020755",address:"1013 UNIVERSITY AVENUE",district:"University Avenue commercial corridor",name:"Flamingo Arms Apartments",source:"https://www.oxfordms.net/documents/departments/planning/surveys/university%20avenue/1013%20university%20avenue.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/university%20avenue/1013%20university%20avenue.pdf#page=2",photographer:"John Hopkins",photoFrame:"3553:9",frontageSegment:[[-111.63,282.87],[-108.88,283.4]],renderSegment:[[-111.81,282.84],[-97.48,285.56]],renderWidthM:14.59,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[-110.26,283.13],frontageWidthM:2.8,frontToward:[-.186,.982],footprintCentroid:[-102.66750000000002,273.845],sourceWall:"stucco",sourceRoof:"hip",sourceStories:2,sourceBays:9,facts:["Two-story, nine-bay, concrete frame masonry apartment building with Art Moderne influence, built ca. 1935. Hip roof covered with asphalt shingles, with box cornice and frieze. Exterior walls covered with stucco veneer. Windows are multi-light, steel-frame fixed and casement sashes topped with two-light transoms. Entrance set in recessed vestibule covered with cantilevered canopy, and contains a solid door topped with a single-light roundel."],detail:{mainRoof:"hip",roofAccessory:null,wall:"stucco",stories:2,bays:9,windowPattern:"steel-casement",transomLights:2,storefrontCount:1,canopy:"canopy",flags:["main-roof-hip","wall-stucco","bay-count-9","window-steel-casement","storefront-transom","cornice","canopy","recessed-entry"],visibleFeatures:[{tag:"main-roof-hip",label:"main roof: hip",kind:"roof"},{tag:"wall-stucco",label:"wall finish: stucco",kind:"wall"},{tag:"bay-count-9",label:"9-bay facade",kind:"bays"},{tag:"window-steel-casement",label:"window pattern: steel-casement",kind:"windows"},{tag:"storefront-transom",label:"two-light transom",kind:"transom"},{tag:"cornice",label:"projecting cornice",kind:"cornice"},{tag:"canopy",label:"projecting canopy with supports",kind:"canopy"},{tag:"recessed-entry",label:"recessed entry",kind:"door"}],baseline04:{stories:1,bays:null,wall:"brick",roof:["hip",1.7593,155.44,2.63,"shingle",12368819],flags:[],frontages:[{bays:9,clearance:.38,edge:[[-111.63621267630135,282.8729868472059],[-108.88532920930659,283.3951363957213]],flags:[],stories:2,use:"shop",wall:"stucco"}]},correctedFeaturesVs04:["wall material corrected from 0.4 brick to surveyed stucco","stories corrected from 0.4 1 to surveyed 2"],newVisibleFeaturesVs04:["main roof: hip","wall finish: stucco","9-bay facade","window pattern: steel-casement","two-light transom","projecting cornice","projecting canopy with supports","recessed entry"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"Two-story, nine-bay, concrete frame masonry apartment building with Art Moderne influence, built ca. 1935. Hip roof covered with asphalt shingles, with box cornice and frieze. Exterior walls covered with stucco veneer. Windows are multi-light, steel-frame fixed and casement sashes topped with two-light transoms. Entrance set in recessed vestibule covered with cantilevered canopy, and contains a solid door topped with a single-light roundel."}},{id:"790036967",address:"1207 UNIVERSITY AVENUE",district:"University Avenue commercial corridor",name:"Sonic Drive-In",source:"https://www.oxfordms.net/documents/departments/planning/surveys/university%20avenue/1207%20university%20avenue.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/university%20avenue/1207%20university%20avenue.pdf#page=2",photographer:"John Hopkins",photoFrame:"3553:13",frontageSegment:[[20.16,278.43],[19.42,282.3]],renderSegment:[[22.47,266.21],[18.07,289.46]],renderWidthM:23.66,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[19.79,280.37],frontageWidthM:3.94,frontToward:[-.983,-.186],footprintCentroid:[23.8375,278.505],sourceWall:null,sourceRoof:"flat",sourceStories:1,sourceBays:6,facts:["One-story, six-bay, wood-frame drive-in restaurant with two attached parking canopies, built ca. 1995. Flat roof covered with built-up asphalt roofing, with a band cornice and peaked parapet. Exterior walls covered with vinyl siding. Windows are multi-light, fixed sashes, some in pairs. Front-projecting, U-shaped, three-bay flat-roofed metal canopy supported by metal piers. Entrance has a multi-light, metal-frame double door."],detail:{mainRoof:"flat",roofAccessory:null,wall:"board",stories:1,bays:6,windowPattern:"multi-light",transomLights:null,storefrontCount:1,canopy:"canopy",flags:["main-roof-flat","wall-board","bay-count-6","window-multi-light","cornice","parapet","canopy"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-board",label:"wall finish: board",kind:"wall"},{tag:"bay-count-6",label:"6-bay facade",kind:"bays"},{tag:"window-multi-light",label:"window pattern: multi-light",kind:"windows"},{tag:"cornice",label:"projecting cornice",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"canopy",label:"projecting canopy with supports",kind:"canopy"}],baseline04:{stories:1,bays:null,wall:"brick",roof:["gable",1.7574,150.79,1.53,"membrane",15132390],flags:[],frontages:[{bays:6,clearance:12,edge:[[20.15656434420241,278.4344043175668],[19.423933939042136,282.30568998119776]],flags:[],stories:1,use:"shop",wall:"brick"}]},correctedFeaturesVs04:["main roof corrected from 0.4 gable to surveyed flat","wall material corrected from 0.4 brick to surveyed board"],newVisibleFeaturesVs04:["main roof: flat","wall finish: board","6-bay facade","window pattern: multi-light","projecting cornice","parapet profile","projecting canopy with supports"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"One-story, six-bay, wood-frame drive-in restaurant with two attached parking canopies, built ca. 1995. Flat roof covered with built-up asphalt roofing, with a band cornice and peaked parapet. Exterior walls covered with vinyl siding. Windows are multi-light, fixed sashes, some in pairs. Front-projecting, U-shaped, three-bay flat-roofed metal canopy supported by metal piers. Entrance has a multi-light, metal-frame double door."}},{id:"599498949",address:"1312 UNIVERSITY AVENUE",district:"University Avenue commercial corridor",name:"1. b.",source:"https://www.oxfordms.net/documents/departments/planning/surveys/university%20avenue/1310%20-%201312%20university%20avenue.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/university%20avenue/1310%20-%201312%20university%20avenue.pdf#page=2",photographer:"John Hopkins",photoFrame:"3575:8",frontageSegment:[[56.03,363.22],[57.63,354.98]],renderSegment:[[56.033272714605246,363.218646699185],[57.62672728539475,354.98135330081504]],renderWidthM:8.39,spanBasis:"1312 University Avenue unit from 1310\u20131312 survey",frontagePoint:[56.83,359.1],frontageWidthM:8.39,frontToward:[.982,.19],footprintCentroid:[39.059999999999995,356.4066666666666],sourceWall:"brick",sourceRoof:"flat",sourceStories:null,sourceBays:3,facts:["Two, three-bay, brick masonry commercial buildings with Minimalist Traditional influence, built 1950, and (1312) altered in 1999. Flat roofs covered with built-up asphalt roofing behind stepped parapets. Exterior walls of 1312 altered with added stucco and brick veneer. Storefronts have (1310) single-light, fixed display windows above brick bulkheads, and (1312) single-light fixed display windows beneath a metal hip roof porch canopy supported by paired metal poles. Entrances contain (1310) inued: a single-light metal frame door topped with a single-light transom, and (1312) a single-light metal frame door (though primary entrance has been relocated to side facade)."],detail:{mainRoof:"flat",roofAccessory:null,wall:"brick",stories:null,bays:3,windowPattern:"display",transomLights:1,storefrontCount:1,canopy:"canopy",flags:["main-roof-flat","wall-brick","bay-count-3","window-display","storefront-transom","parapet","canopy","bulkhead"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-brick",label:"wall finish: brick",kind:"wall"},{tag:"bay-count-3",label:"3-bay facade",kind:"bays"},{tag:"window-display",label:"window pattern: display",kind:"windows"},{tag:"storefront-transom",label:"single-light transom",kind:"transom"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"canopy",label:"projecting canopy with supports",kind:"canopy"},{tag:"bulkhead",label:"paneled or masonry bulkhead",kind:"bulkhead"}],baseline04:{stories:1,bays:null,wall:"brick",roof:["shed",1.7606,148.35,1.92,"membrane",15132390],flags:["awning","porch","transom"],frontages:[{bays:3,clearance:3.26,edge:[[56.03214923578153,363.21842936900384],[57.62560380657104,354.98113597063383]],flags:["porch","awning","transom"],stories:1,use:"shop",wall:"brick"}]},correctedFeaturesVs04:["main roof corrected from 0.4 shed to surveyed flat"],newVisibleFeaturesVs04:["main roof: flat","wall finish: brick","3-bay facade","window pattern: display","parapet profile","paneled or masonry bulkhead"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"Two, three-bay, brick masonry commercial buildings with Minimalist Traditional influence, built 1950, and (1312) altered in 1999. Flat roofs covered with built-up asphalt roofing behind stepped parapets. Exterior walls of 1312 altered with added stucco and brick veneer. Storefronts have (1310) single-light, fixed display windows above brick bulkheads, and (1312) single-light fixed display windows beneath a metal hip roof porch canopy supported by paired metal poles. Entrances contain (1310) inued: a single-light metal frame door topped with a single-light transom, and (1312) a single-light metal frame door (though primary entrance has been relocated to side facade)."}},{id:"599497824",address:"1415 UNIVERSITY AVENUE",district:"University Avenue commercial corridor",name:"Bird in the Bush",source:"https://www.oxfordms.net/documents/departments/planning/surveys/university%20avenue/1415%20university%20avenue.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/university%20avenue/1415%20university%20avenue.pdf#page=2",photographer:"John Hopkins",photoFrame:"3553:16",frontageSegment:[[124.08,328.3],[125.46,328.56]],renderSegment:[[124.08,328.3],[134.72,330.3]],renderWidthM:10.83,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[124.08,328.3],frontageWidthM:2.8,frontToward:[-.185,.983],footprintCentroid:[128.84166666666667,276.5366666666667],sourceWall:"stucco",sourceRoof:"hip",sourceStories:1,sourceBays:9,facts:["One-story, nine-bay, brick masonry three-unit commercial building with no achitectural influence, built ca. 1945 and altered in ca. 1985. Hip roof covered with asphalt shingles, with a box cornice. Exterior walls covered with stucco veneer. Storefronts have multi-light steel frame casements, multi-light fixed metal frame display windows, and single-light metal frame fixed display windows. Entrance contains a single-light, metal frame replacement door."],detail:{mainRoof:"hip",roofAccessory:null,wall:"stucco",stories:1,bays:9,windowPattern:"steel-casement",transomLights:null,storefrontCount:1,canopy:null,flags:["main-roof-hip","wall-stucco","bay-count-9","window-steel-casement","cornice"],visibleFeatures:[{tag:"main-roof-hip",label:"main roof: hip",kind:"roof"},{tag:"wall-stucco",label:"wall finish: stucco",kind:"wall"},{tag:"bay-count-9",label:"9-bay facade",kind:"bays"},{tag:"window-steel-casement",label:"window pattern: steel-casement",kind:"windows"},{tag:"cornice",label:"projecting cornice",kind:"cornice"}],baseline04:{stories:1,bays:null,wall:"brick",roof:["shed",1.7587,149.36,2.86,"shingle",15132388],flags:[],frontages:[]},correctedFeaturesVs04:["main roof corrected from 0.4 shed to surveyed hip","wall material corrected from 0.4 brick to surveyed stucco"],newVisibleFeaturesVs04:["main roof: hip","wall finish: stucco","9-bay facade","window pattern: steel-casement","projecting cornice"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"One-story, nine-bay, brick masonry three-unit commercial building with no achitectural influence, built ca. 1945 and altered in ca. 1985. Hip roof covered with asphalt shingles, with a box cornice. Exterior walls covered with stucco veneer. Storefronts have multi-light steel frame casements, multi-light fixed metal frame display windows, and single-light metal frame fixed display windows. Entrance contains a single-light, metal frame replacement door."}},{id:"599497823",address:"1417 UNIVERSITY AVENUE",district:"University Avenue commercial corridor",name:"098",source:"https://www.oxfordms.net/documents/departments/planning/surveys/university%20avenue/1417%20university%20avenue.pdf",date:"January 2000",referencePhoto:"https://www.oxfordms.net/documents/departments/planning/surveys/university%20avenue/1417%20university%20avenue.pdf#page=2",photographer:"John Hopkins",photoFrame:"3553:17",frontageSegment:[[157.3,334.97],[149.58,333.55]],renderSegment:[[136.89,331.21],[160.05,335.48]],renderWidthM:23.55,spanBasis:"full exterior edge matched to address survey segment",frontagePoint:[153.44,334.26],frontageWidthM:7.85,frontToward:[-.181,.983],footprintCentroid:[152.44624999999996,311.5025],sourceWall:"brick",sourceRoof:"flat",sourceStories:1,sourceBays:3,facts:["One-story, three-bay, brick masonry commercial building with no architectural influence, built ca. 1950 and altered in ca. 1980 with Second Empire Revival influence. Flat roof covered with built-up asphalt roofing, with a corbeled parapet and added finials, and an added Mansard roof covered with asphalt shingles. Exterior walls covered with added brick veneer. A one-bay loading dock and receiving area with an overhead door is located to one side. Storefront contains replacement multi- inued: light fixed display windows. Entrance contains a replacement three-panel double-door flanked by brick pilasters."],detail:{mainRoof:"flat",roofAccessory:"mansard",wall:"brick",stories:1,bays:3,windowPattern:"display",transomLights:null,storefrontCount:1,canopy:null,flags:["main-roof-flat","wall-brick","bay-count-3","window-display","corbel-cornice","parapet","pilasters","mansard","loading-dock"],visibleFeatures:[{tag:"main-roof-flat",label:"main roof: flat",kind:"roof"},{tag:"wall-brick",label:"wall finish: brick",kind:"wall"},{tag:"bay-count-3",label:"3-bay facade",kind:"bays"},{tag:"window-display",label:"window pattern: display",kind:"windows"},{tag:"corbel-cornice",label:"corbeled cornice or parapet",kind:"cornice"},{tag:"parapet",label:"parapet profile",kind:"parapet"},{tag:"pilasters",label:"storefront pilasters",kind:"pilasters"},{tag:"mansard",label:"added mansard roof feature",kind:"roof-detail"},{tag:"loading-dock",label:"side loading/receiving bay",kind:"loading"}],baseline04:{stories:1,bays:null,wall:"block",roof:["flat",1.7542,147.76,0,"membrane",9542565],flags:[],frontages:[{bays:3,clearance:.54,edge:[[149.57982085924417,333.5496172309574],[157.29970950261716,334.97293003351365]],flags:[],stories:1,use:"shop",wall:"brick"}]},correctedFeaturesVs04:["wall material corrected from 0.4 block to surveyed brick"],newVisibleFeaturesVs04:["main roof: flat","wall finish: brick","3-bay facade","window pattern: display","corbeled cornice or parapet","parapet profile","storefront pilasters","added mansard roof feature","side loading/receiving bay"],featureSource:"survey fact text and page-2 photo cited per target",rawFact:"One-story, three-bay, brick masonry commercial building with no architectural influence, built ca. 1950 and altered in ca. 1980 with Second Empire Revival influence. Flat roof covered with built-up asphalt roofing, with a corbeled parapet and added finials, and an added Mansard roof covered with asphalt shingles. Exterior walls covered with added brick veneer. A one-bay loading dock and receiving area with an overhead door is located to one side. Storefront contains replacement multi- inued: light fixed display windows. Entrance contains a replacement three-panel double-door flanked by brick pilasters."}}]};var Xn=new Map(ur.targets.map(a=>[String(a.id),a])),bg=new Set(Xn.keys()),Lc={599911626:{storefrontCount:3,porchRoof:"hip",porchRail:!0},451755569:{doubleDoor:!0,ovalLight:!0},599911625:{porchRoof:"shed",porchLevels:2},451755565:{displayWindows:10,doorCount:2,doorFractions:[.12,.88],displayRange:[.2,.8]},599922075:{porchRoof:"flat",postType:"cast-iron"},599922074:{storefrontCount:1},599922073:{storefrontCount:3,balconyStore:1},479826748:{storefrontCount:2,doorCount:2,porchRoof:"flat",porchWidth:.56,porchAnchor:.4,postType:"cast-iron"},599922071:{doorCount:2,porchRoof:"hip",porchLevels:2,postType:"paneled-pier"},599922068:{doubleDoor:!0},599922066:{storefrontCount:2,doorCount:2,porchRoof:"hip",porchLevels:2,postType:"chamfered-post"},599810034:{porchRoof:"shed",porchLevels:2,postType:"box-pier"},599810029:{storefrontCount:3,doorCount:3},599827683:{storefrontCount:1,doorCount:2,recessedEntry:!0,doorFractions:[.35,.65]},479826747:{storefrontCount:2,doorCount:2},321045855:{storefrontCount:4,doorCount:4},269021192:{displayWindows:11,doorFractions:[.91],displayRange:[.02,.8]},479826744:{storefrontCount:2,doorCount:2},479826746:{porchRoof:"gable",postType:"box-pier",porchWidth:.34,porchAnchor:.33},599497825:{porchRoof:"flat",porchWidth:.5,porchAnchor:.25,postType:"cast-iron"},269020978:{storefrontCount:1,doorCount:1,ignoreMansard:!0}};function dr(a,e,t){let n=t[0]-e[0],i=t[1]-e[1],s=n*n+i*i||1,r=Math.max(0,Math.min(1,((a[0]-e[0])*n+(a[1]-e[1])*i)/s));return Math.hypot(a[0]-e[0]-r*n,a[1]-e[1]-r*i)}function Dc(a,e){if(!a||!e)return!1;for(let t=0;t<a.length;t++){let n=a[t],i=a[(t+1)%a.length];if(dr(e[0],n,i)<.36&&dr(e[1],n,i)<.36)return!0}return!1}function Nc(a,e){if(!a||!e)return 0;let[t,n]=a,i=n[0]-t[0],s=n[1]-t[1],r=Math.hypot(i,s)||1,o=i/r,l=s/r,[c,h]=e,u=h[0]-c[0],d=h[1]-c[1],f=Math.hypot(u,d)||1;if(Math.abs(u/f*o+d/f*l)<.96)return 0;let p=S=>Math.abs((S[0]-t[0])*l-(S[1]-t[1])*o);if(p(c)>.48||p(h)>.48)return 0;let m=S=>(S[0]-t[0])*o+(S[1]-t[1])*l,x=Math.max(0,Math.min(m(c),m(h))),y=Math.min(r,Math.max(m(c),m(h)));return y>x?Math.min(1,(y-x)/f):0}function H(a,e,t,n,i,s,r,o=.2){i-n<.035||r-s<.035||a(e).quad(t(n,s,o),t(i,s,o),t(i,r,o),t(n,r,o),(i-n)/2,(r-s)/2)}function Ie(a,e,t,n,i,s,r,o=.2,l=.08){H(a,e,t,n,i,s,r,o),H(a,e,t,n,i,r,r+l,o+.005),H(a,e,t,n,i,s-l,s,o+.005)}function Fc(a,e,t,n,i,s,r,o=.27){let c=[],h=[];for(let u=0;u<=8;u++){let d=Math.PI*u/8;c.push([n+Math.cos(d)*s*.5,i+Math.sin(d)*r]),h.push([n+Math.cos(d)*Math.max(.04,s*.5-.105),i+Math.sin(d)*Math.max(.06,r-.1)])}for(let u=0;u<8;u++)a(e).quad(t(c[u][0],c[u][1],o),t(c[u+1][0],c[u+1][1],o),t(h[u+1][0],h[u+1][1],o+.006),t(h[u][0],h[u][1],o+.006))}function Uc(a,e,t,n,i,s,r,o=!1){let l=t-i/2,c=t+i/2,h=n+s;H(a,"reveal",e,l-.1,c+.1,n-.09,h+.1,.12),H(a,"glass-sash",e,l,c,n,h,.16),Ie(a,"frame",e,l-.09,c+.09,n-.08,n+.01,.2,.035),Ie(a,"frame",e,l-.09,c+.09,h-.01,h+.08,.2,.035),Ie(a,"frame",e,l-.08,l+.01,n,h,.2,.035),Ie(a,"frame",e,c-.01,c+.08,n,h,.2,.035);let u=r==="6/6"?3:r==="2/2"||r==="multi-light"||r==="steel-casement"?2:1;for(let f=1;f<u;f++)H(a,"frame",e,l+(c-l)*f/u-.025,l+(c-l)*f/u+.025,n+.025,h-.025,.215);let d=r==="6/6"?4:r==="2/2"?2:r==="multi-light"?3:1;for(let f=1;f<d;f++){let p=n+(h-n)*f/d-(f===d/2?.035:.018);H(a,"frame",e,l+.02,c-.02,p,p+(f===d/2?.07:.036),.218)}o&&Fc(a,"ledge",e,t,h,i,Math.min(.4,i*.24),.23)}function Oc(a,e,t,n){let i=n.renderSegment||n.frontageSegment,s=i[1][0]-i[0][0],r=i[1][1]-i[0][1],o=Math.hypot(s,r);if(o<1.3)return;let l=s/o,c=r/o,h=n.frontToward,u=h[0],d=h[1],f=(i[0][0]+i[1][0])*.5,p=(i[0][1]+i[1][1])*.5,m=e.ground(f,p)+.045,x=t[7]||{},y=x.roof?.[2]||m+(Number(t[2])||5),S=Math.max(2.6,Math.min(12.5,y-m)),b=Math.max(1,Math.min(4,Math.ceil(n.detail.stories||1))),w=S/b,g=(P,U,k=.2)=>[f+l*P+u*k,m+U,p+c*P+d*k],_=n.detail,v=Lc[String(n.id)]||{},M=(_.visibleFeatures||[]).map(P=>P.tag),T=(n.facts||[]).join(" ").toLowerCase(),E=(...P)=>P.some(U=>M.includes(U)),A=Math.max(1,Math.min(16,_.bays||Math.floor((o+.45)/2.85))),R=o/A,I=Math.max(1,Math.min(A,v.storefrontCount||_.storefrontCount||1)),N=o/I,L=Math.min(1.24,N*.25),D=Math.min(w*.83,2.48),F=.42,V=Math.min(1.75,D-.6),Y=Math.max(1,v.doorCount||I),W=[];if(v.doorFractions)for(let P of v.doorFractions)W.push(-o/2+o*P);else if(Y>I)for(let P=0;P<Y;P++)W.push(-o/2+o*(P+.5)/Y);else for(let P=0;P<Y;P++)W.push(-o/2+N*(P+.5));for(let P=0;P<I;P++){let U=-o/2+N*P,k=U+N,B=v.doorCount?W[Math.min(P,W.length-1)]:W[P]??(U+k)*.5,X=B-L/2,Z=B+L/2;if(H(a,"frame",g,X-.09,Z+.09,.11,D+.16,.24),H(a,"door",g,X,Z,.16,D-.12,.27),(E("double-door")||v.doubleDoor||/double[- ]door/.test(T))&&H(a,"frame",g,B-.025,B+.025,.19,D-.15,.295),v.ovalLight){let G=D-.35,J=B,z=.25,K=.12;for(let ie=0;ie<12;ie++){let ce=ie*Math.PI*2/12,Se=(ie+1)*Math.PI*2/12;a("glass-sash").tri(g(J,G,.3),g(J+Math.cos(ce)*z,G+Math.sin(ce)*K,.3),g(J+Math.cos(Se)*z,G+Math.sin(Se)*K,.3))}}if(E("storefront-transom")){let G=D-.55,J=_.transomLights||2;H(a,"glass-shop",g,X+.025,Z-.025,G,D-.17,.245);for(let z=1;z<Math.min(J,5);z++)H(a,"frame",g,X+(Z-X)*z/J-.018,X+(Z-X)*z/J+.018,G,D-.17,.28)}for(let G of[-1,1]){let J=G<0?U+.1:Z+.12,z=G<0?X-.12:k-.1;if(v.displayWindows){if(P!==0||G>-1)continue;let ce=v.displayRange||[.08,.92];J=-o/2+o*ce[0],z=-o/2+o*ce[1]}if(z-J<.44||V<.55)continue;H(a,"reveal",g,J-.08,z+.08,F-.06,F+V+.06,.15),H(a,"glass-shop",g,J,z,F,F+V,.19);let K=v.displayWindows||Math.max(1,Math.min(3,Math.floor((z-J)/1.45))),ie=v.displayWindows?K:Math.max(1,Math.min(3,Math.floor((z-J)/1.45)));if(v.displayWindows){let ce=Math.min(.72,(z-J)/(K+1)*.66);for(let Se=0;Se<K;Se++){let oe=J+(z-J)*(Se+.5)/K;H(a,"reveal",g,oe-ce*.5-.055,oe+ce*.5+.055,F-.05,F+V+.05,.15),H(a,"glass-shop",g,oe-ce*.5,oe+ce*.5,F,F+V,.19),H(a,"ledge",g,oe-ce*.5-.1,oe+ce*.5+.1,F-.15,F-.05,.25)}}else for(let ce=1;ce<ie;ce++){let Se=J+(z-J)*ce/ie;H(a,"frame",g,Se-.026,Se+.026,F,F+V,.225)}H(a,"ledge",g,J-.16,z+.16,F-.15,F-.05,.25)}}if(Y>I)for(let P=I;P<Y;P++){let U=W[P],k=U-L*.5,B=U+L*.5;H(a,"frame",g,k-.09,B+.09,.11,D+.16,.24),H(a,v.doubleDoor||/double[- ]door/.test(T)?"door":"glass-shop",g,k,B,.16,D-.12,.27),(v.doubleDoor||/double[- ]door/.test(T))&&H(a,"frame",g,U-.025,U+.025,.19,D-.15,.295)}if(E("bulkhead")){Ie(a,"ledge",g,-o*.49,o*.49,.08,.36,.31,.045);for(let P=0;P<A;P++){let U=-o/2+R*(P+.5);H(a,"reveal",g,U-.18,U+.18,.12,.31,.36)}}if(E("pilasters","cast-iron")){let P=o/A;for(let U=0;U<=A;U++){let k=-o/2+U*P,B=.075;H(a,"hardware",g,k-B,k+B,.1,D+.12,.34),Ie(a,"frame",g,k-B-.04,k+B+.04,D+.12,D+.2,.35,.035)}}let ee=E("segmental-arch","semicircular-arch","flat-brick-arch");for(let P=1;P<b;P++){let U=w*P+.45,k=Math.min(1.35,w*.52),B=Math.max(1,Math.min(16,_.bays||Math.floor((o+.6)/2.8))),X=o/B;for(let Z=0;Z<B;Z++){let G=-o/2+X*(Z+.5),J=Math.min(X*.63,1.35);Uc(a,g,G,U,J,k,_.windowPattern,ee)}}if(E("cornice","corbel-cornice","dentil-course","bracketed-cornice","parapet")){let P=Math.max(w*.82,S-.53);Ie(a,"ledge",g,-o*.52,o*.52,P,P+.14,.4,.12),Ie(a,"frame",g,-o*.5,o*.5,P+.14,P+.22,.49,.055);let U=Math.max(3,Math.min(16,Math.floor(o/.52)));for(let k=0;k<U;k++){let B=-o*.46+o*.92*(k+.5)/U,X=Math.min(.1,o/U*.25);H(a,E("cast-iron")?"hardware":"ledge",g,B-X,B+X,P-.19,P-.015,.42)}}if(E("canopy","awning")||/porch (?:canopy|supported)/.test(T)){let U=((n.facts||[]).join(" ").split(/[.]/).find(oe=>/porch canopy/i.test(oe))||"").toLowerCase(),k=v.porchLevels||(/two-story/.test(U)?2:1),B=v.porchRoof||(/hip[- ]roof/.test(U)?"hip":/shed[- ]roof/.test(U)?"shed":/gable[- ]roof/.test(U)?"gable":"flat"),X=v.porchWidth||1,Z=Math.min(o*.96,E("canopy")?o*X:Math.max(2.4,o*.78)),G=v.porchAnchor===void 0?-Z/2:-o/2+o*v.porchAnchor,J=G+Z,z=E("canopy")?1.18:.82,K=k>1?Math.max(w*1.75,S-.4):Math.min(D+.42,2.85);if(k>1){let oe=w;H(a,"ledge",g,G,J,oe,oe+.12,z*.82),H(a,"rail",g,G,J,oe+.92,oe+1,z);let ve=Math.max(8,Math.floor(Z/.3));for(let Pe=0;Pe<=ve;Pe++){let be=G+Z*Pe/ve;H(a,"rail",g,be-.018,be+.018,oe+.12,oe+.94,z)}}let ie=B==="flat"?0:.24;a(E("awning")?"awning":"ledge").quad(g(G,K+.12,.04),g(J,K+.12,.04),g(J,K-ie,z),g(G,K-ie,z)),H(a,"porch",g,G,J,K-ie-.045,K-ie-.005,z),H(a,"ledge",g,G,J,K-ie-.015,K-ie+.17,z+.035),(B==="hip"||B==="gable")&&(a("ledge").tri(g(G,K+.12,.04),g(G,K-ie,z),g(G+.35,K+.02,z*.52)),a("ledge").tri(g(J,K+.12,.04),g(J,K-ie,z),g(J-.35,K+.02,z*.52)));let ce=Z>8?5:Z>4?3:2,Se=v.postType==="cast-iron"||E("cast-iron")?"hardware":"frame";for(let oe=0;oe<ce;oe++){let ve=G+.12+(Z-.24)*oe/Math.max(1,ce-1),Pe=v.postType==="paneled-pier"||v.postType==="box-pier",be=Pe?.17:.065;H(a,Se,g,ve-be,ve+be,.14,K-ie-.1,z+.04),H(a,"ledge",g,ve-be-.07,ve+be+.07,.09,.2,z+.07),Pe||H(a,"ledge",g,ve-be-.035,ve+be+.035,K-ie-.24,K-ie-.15,z+.05)}if(v.porchRail){H(a,"rail",g,G,J,.94,.94+.08,z);let ve=Math.max(10,Math.floor(Z/.25));for(let Pe=0;Pe<=ve;Pe++){let be=G+Z*Pe/ve;H(a,"rail",g,be-.018,be+.018,.2,.94,z)}}}if(E("balcony")){let P=Math.max(w*.86,2.65),U=.93,k=v.balconyStore!==void 0?N*.9:o*.98,B=v.balconyStore!==void 0?-o/2+N*(v.balconyStore+.5):0,X=B-k/2,Z=B+k/2;H(a,"ledge",g,X,Z,P,P+.09,.85),H(a,"rail",g,X,Z,P+.83,P+.91,U),H(a,"rail",g,X,Z,P+.54,P+.6,U);let G=Math.max(8,Math.min(42,Math.floor(k/.26)));for(let z=0;z<=G;z++){let K=X+k*z/G;H(a,"rail",g,K-.016,K+.016,P+.07,P+.84,U)}let J=Math.max(2,Math.min(8,Math.floor(k/2.4)));for(let z=0;z<J;z++){let K=X+k*(z+.5)/J;a("hardware").tri(g(K-.09,P-.13,.52),g(K+.09,P-.13,.52),g(K,P+.06,.86))}}if(E("mansard")&&!v.ignoreMansard){let P=S-1.32,U=1.18,k=o*.53,B=k*.73,X=.56;a("historic-roof").quad(g(-k,P,.43),g(k,P,.43),g(B,P+U,.43+X),g(-B,P+U,.43+X)),Ie(a,"ledge",g,-k,k,P-.1,P+.02,.45,.07),Ie(a,"frame",g,-B,B,P+U,P+U+.1,.43+X,.055)}if(E("dormer")){let P=Math.min(1.35,o*.28),U=0,k=Math.max(w*1.4,S-2.3),B=.94;H(a,"glass-sash",g,U-P*.37,U+P*.37,k,k+B,.57),a("frame").tri(g(U-P*.55,k+B,.6),g(U+P*.55,k+B,.6),g(U,k+B+.52,.6)),H(a,"frame",g,U-P*.55,U+P*.55,k+B,k+B+.055,.62)}if(E("loading-dock")){let P=o*.3,U=Math.min(1.35,o*.32),k=.18,B=Math.min(2.35,w*.78);H(a,"frame",g,P-U/2-.08,P+U/2+.08,k,k+B,.4),H(a,"garage",g,P-U/2,P+U/2,k+.08,k+B-.1,.43);for(let X=1;X<5;X++)H(a,"frame",g,P-U/2+.03,P+U/2-.03,k+.12+B*X/5,k+.16+B*X/5,.46)}}function fr(a,e,t){let n=Xn.get(String(t?.[5])),i=n?.renderSegment||n?.frontageSegment;return!n||!i||!n.frontToward||!Dc(t?.[0],i)?!1:(String(n.id)==="451755566"||Oc(a,e,t,n),!0)}function is(a){return Xn.get(String(a))?.renderSegment||Xn.get(String(a))?.frontageSegment||null}function pr(a,e){return Nc(is(a),e)}function mr(a,e){let t=[[[-740.82,179.19],[-734.61,179.55]],[[-734.79,182.38],[-721.6,183.15]],[[-721.43,180.33],[-716.85,180.59]]],n=e.ground(-728.3,180);for(let[i,[s,r]]of t.entries()){let o=r[0]-s[0],l=r[1]-s[1],c=Math.hypot(o,l),h=l/c,u=-o/c,d=(S,b,w)=>[s[0]+o*S+h*w,n+b,s[1]+l*S+u*w],f=i===1?34.65:31.7,p=i===1?[9.5,12.7,9.5]:i===0?[4.45,6.97]:[6.97,4.45],m=["left","center","right"][i],x=i===1?"wall-stone":"wall-brick",y=Math.max(...p);a("stjohn-"+m).quad(d(0,.08,-.08),d(1,.08,-.08),d(1,y,-.08),d(0,y,-.08));for(let S=0;S<p.length-1;S++){let b=S/(p.length-1),w=(S+1)/(p.length-1),g=p[S],_=p[S+1];a("historic-roof").quad(d(b,g,0),d(w,_,0),d(w,_,f),d(b,g,f)),a(x).quad(d(b,-.15,f),d(w,-.15,f),d(w,_,f),d(b,g,f),c/3,y/3)}for(let S of[0,1]){let b=p[S===0?0:p.length-1];if(a(x).quad(d(S,-.2,0),d(S,-.2,f),d(S,b,f),d(S,b,0),f/3,b/3),i!==1)for(let w=1;w<6;w++){let g=w*f/6;a("glass-sash").quad(d(S===0?-.01:1.01,1,g-.65),d(S===0?-.01:1.01,1,g+.65),d(S===0?-.01:1.01,3.3,g+.65),d(S===0?-.01:1.01,3.3,g-.65))}}i===1&&(a("frame").quad(d(.494,12.65,0),d(.51,12.65,0),d(.51,14.48,0),d(.494,14.48,0)),a("frame").quad(d(.456,13.91,0),d(.548,13.91,0),d(.548,14.06,0),d(.456,14.06,0)))}}function gr(a,e,t,n,i){let s=t.roof[2];function r(o,l){let c=null,h=1/0;for(let u=0;u<e.length;u++){let d=e[u],f=e[(u+1)%e.length],p=n(d,f);if(p.len<3)continue;let m=Math.hypot(o-p.mid[0],l-p.mid[1]);m<h&&(c=p,h=m)}return c}if(a===188827132){let o=r(-933,165);if(!o)return;let l=o.ground,c=Math.min(18,o.len*.96),h=l+Math.min(12,Math.max(8,s-l-.35)),u=2.05;o.panel("glass-shop",-c*.46,c*.46,l+.5,h-.38,.16,[4,1]);for(let d=0;d<4;d++){let f=o.post((-.42+d*.28)*c,u-.25,.24);f!==null&&o.box("frame",f-.24,f+.24,l+.42,h-.28,u,u-.5)}o.box("ledge",-c*.54,c*.54,h-.35,h,u+.12,-.28),i("frame").tri(o.pt(-c*.56,h,u+.12),o.pt(c*.56,h,u+.12),o.pt(0,h+c*.24,u+.12)),i("historic-roof").quad(o.pt(-c*.56,h,u+.12),o.pt(0,h+c*.24,u+.12),o.pt(0,h+c*.24,-2.5),o.pt(-c*.56,h,-2.5)),i("historic-roof").quad(o.pt(0,h+c*.24,u+.12),o.pt(c*.56,h,u+.12),o.pt(c*.56,h,-2.5),o.pt(0,h+c*.24,-2.5));for(let d=0;d<4;d++)o.box("ledge",-c*.54,c*.54,l+d*.11,l+(d+1)*.11,u+1.35-d*.33)}else if(a===318264954){let o=r(-617,242);if(!o)return;o.panel("wall-brick",-o.len*.499,o.len*.499,o.ground-.05,s,.41,[o.len/3,(s-o.ground)/3]),o.box("ledge",-o.len*.5,o.len*.5,s-.14,s+.055,.51);let l=Math.min(s-.6,o.ground+3.85),c=Math.min(10,o.len*.68);o.panel("inscription-museum",-c/2,c/2,l-.49,l+.48,.445)}else if(a===318275096||a===318274786)for(let o=0;o<e.length;o++){let l=n(e[o],e[(o+1)%e.length]);if(l.len<18||a===318275096&&l.mid[0]<-1157)continue;l.panel("wall-brick",-l.len/2,l.len/2,l.ground-.18,s,.21,[l.len/3,(s-l.ground)/3]);let c=Math.round(l.len/3.65),h=s-l.ground;for(let u=0;u<c;u++){let d=((u+.5)/c-.5)*l.len;l.panel("reveal",d-.57,d+.57,l.ground+.72,s-.34,.24);for(let f=0;f<4;f++){let p=l.ground+.82+f*(h-.95)/4;l.panel("glass-shop",d-.46,d+.46,p,p+(h-.95)*.204,.26)}}l.box("ledge",-l.len/2,l.len/2,s-.14,s+.08,.37)}else if(a===264946753){let o=r(-190,-66);if(!o)return;let l=o.len,c=o.ground,h=10,u=l/h;o.panel("glass-shop",-l*.496,l*.496,c+.14,c+3.54,.17,[h,1]);for(let d=0;d<=h;d++){let f=-l*.5+d*u;o.box("ledge",f-.25,f+.25,c+.12,c+3.5,.85,-.03)}for(let d=0;d<h;d++){let f=-l*.5+(d+.5)*u;for(let p=0;p<10;p++){let m=Math.PI*p/10,x=Math.PI*(p+1)/10,y=(S,b,w)=>o.pt(f+Math.cos(S)*b,c+3.08+Math.sin(S)*w,.86);i("ledge").quad(y(m,u*.46,.53),y(x,u*.46,.53),y(x,u*.49,.83),y(m,u*.49,.83))}}}else if(a===590970626){let o=r(295,3571);if(!o)return;let l=o.ground,c=o.len;o.box("awning",-c*.56,c*.56,l+2.85,l+3.12,1.6),o.panel("inscription-fire",-c*.48,c*.48,l+2.85,l+3.13,1.615)}}var xr=[{id:451755565,name:"Neilson\u2019s Department Store",photo:"0258",edge:[[44.84,65.37],[39.49,91.48]],side:"west",aspect:2.967741935483871,form:"shopfront",wall:"brick",widthM:26.65,source:"https://www.loc.gov/pictures/collection/hh/item/ms0258.photos.093438p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0258/photos/093438pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."},{id:451755566,name:"Oxford City Hall",photo:"0267",edge:[[51.75,43.57],[55.97,23.11]],side:"west",aspect:1.1071428571428572,form:"double gable",wall:"brick",widthM:20.89,source:"https://www.loc.gov/pictures/collection/hh/item/ms0267.photos.093412p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0267/photos/093412pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."},{id:421471601,name:"St. Peter\u2019s Episcopal Church",photo:"0261",edge:[[-242.91,-24.8],[-246.02,-9.5]],side:"west",aspect:.5257214554579673,form:"spire",wall:"brick",widthM:15.61,source:"https://www.loc.gov/pictures/collection/hh/item/ms0261.photos.093377p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0261/photos/093377pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."},{id:627882381,name:"Howry\u2013Hull House (Fiddler\u2019s Folly)",photo:"0263",edge:[[114.69,-419.09],[117.3,-432.47]],side:"west",aspect:1.3744493392070485,form:"gallery",wall:"lap",widthM:13.63,source:"https://www.loc.gov/pictures/collection/hh/item/ms0263.photos.093418p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0263/photos/093418pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."},{id:625160900,name:"Isom Place",photo:"0265",edge:[[-108.64,-259.93],[-87.79,-255.94]],side:"south",aspect:2.2,form:"portico",wall:"lap",widthM:21.23,source:"https://www.loc.gov/pictures/collection/hh/item/ms0265.photos.093428p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0265/photos/093428pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."},{id:451773164,name:"Sullivan Law Office",photo:"0266",edge:[[-95.71,-45.5],[-85.14,-43.77]],side:"south",aspect:1.083916083916084,form:"turret",wall:"lap",widthM:10.71,source:"https://www.loc.gov/pictures/collection/hh/item/ms0266.photos.093425p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0266/photos/093425pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."}];var yr=new Map(xr.map(a=>[a.id,a]));function _r(a,e,t){let n=t.side==="west"?[-1,0]:[0,1],i=t.edge.slice().sort((g,_)=>(g[0]-_[0])*n[1]-(g[1]-_[1])*n[0]),[s,r]=i,o=r[0]-s[0],l=r[1]-s[1],c=Math.hypot(o,l),h=c/t.aspect,u=-l/c,d=o/c,f=u*n[0]+d*n[1]>0?1:-1,p=u*f,m=d*f,x=e.ground((r[0]+s[0])/2,(r[1]+s[1])/2)+.09,y=(g,_,v)=>[s[0]+o*g+p*v,x+_,s[1]+l*g+m*v],S=a("habs-"+t.photo),b=t.photo==="0261"?.72:.37;S.quad(y(0,0,b),y(1,0,b),y(1,h,b),y(0,h,b));let w=(g,_,v,M,T)=>{let E=(g+_)/2,A=y(g,v,.21),R=y(_,v,.21),I=y(E,M,.21);a("wall-"+t.wall).tri(A,R,I),a("historic-roof").quad(A,I,y(E,M,-T),y(g,v,-T)),a("historic-roof").quad(I,R,y(_,v,-T),y(E,M,-T))};if(t.form==="double gable"&&(w(.56,.98,h*.78,h*.995,6.5),w(.025,.295,h*.58,h*.749,4.2)),t.form==="spire"||t.form==="turret"){let g=t.form==="spire",_=g?.22:.25,v=c*(g?.124:.225),M=h*(g?.46:.62),T=y(_,0,-v+.1),E=a("wall-"+t.wall),A=a("historic-roof"),R=g?4:8,I=Math.atan2(l,o),N=(L,D,F=1)=>[T[0]+v*F*Math.cos(I+(L+.5)*Math.PI*2/R),x+D,T[2]+v*F*Math.sin(I+(L+.5)*Math.PI*2/R)];for(let L=0;L<R;L++)E.quad(N(L,0),N(L+1,0),N(L+1,M),N(L,M),2,M/3),A.tri(N(L,M,1.08),N(L+1,M,1.08),[T[0],x+h,T[2]])}if(t.form==="gallery"||t.form==="portico"){let g=h*(t.form==="gallery"?.5:.78);a("ledge").quad(y(.02,g,.24),y(.98,g,.24),y(.98,g,-1.65),y(.02,g,-1.65))}}function vr(a,e,t,n){let i=t.width,s=t.depth,r=e.ground,o=(f,p,m)=>e.pt(f,r+p,m),l=(f,p,m,x,y,S,b)=>e.box(f,p,m,r+x,r+y,b,S),c=(f,p)=>a(f).quad(...p);function h(f,p,m){let x=o(f,0,-.53);n&&n.push([x[0],x[2],m+.06]);let y=[[.04,m*1.3],[.22,m*1.3],[.24,m*1.13],[.31,m*1.12],[.38,m],[p*.46,m*.98],[p-.34,m*.84],[p-.27,m*.97],[p-.18,m*1.15],[p-.1,m*1.19],[p,m*1.33]];for(let S=0;S<y.length-1;S++)for(let b=0;b<16;b++){let w=(g,_)=>{let[v,M]=y[_],T=g*Math.PI/8;return o(f+Math.cos(T)*M,v,-.53+Math.sin(T)*M)};c("frame",[w(b,S),w(b+1,S),w(b+1,S+1),w(b,S+1)])}}function u(f,p,m,x,y){l("reveal",f-.08,p+.08,m-.08,x+.08,-s+.02,-s+.065),l("glass-shop",f,p,m,x,-s+.07,-s+.1);for(let S=0;S<=y;S++){let b=f+(p-f)*S/y;l("service-flashing",b-.033,b+.033,m,x,-s+.1,-s+.145)}l("service-flashing",f,p,m+(x-m)*.68,m+(x-m)*.68+.055,-s+.1,-s+.145)}function d(f,p){let m=i*(p?.195:.515),x=p?m*.4:i*.22,y=p?22:2;l("frame",-m-.09,m+.09,f-.17,f+.24,-s,.13);for(let S=0;S<y;S++){let b=S/y,w=(S+1)/y,g=E=>p?4*E*(1-E):1-Math.abs(2*E-1),_=(2*b-1)*m,v=(2*w-1)*m,M=f+.24+x*g(b),T=f+.24+x*g(w);c("service-cream",[o(_,f+.19,.05),o(v,f+.19,.05),o(v,T,.05),o(_,M,.05)]),c("frame",[o(_,M-.1,.16),o(v,T-.1,.16),o(v,T+.06,.16),o(_,M+.06,.16)]),c("service-flashing",[o(_,M+.06,.16),o(v,T+.06,.16),o(v,T+.06,-s),o(_,M+.06,-s)])}}if(t.kind==="law"||t.kind==="chi"){let f=t.kind==="law",p=f?9.7:6.05;for(let m of t.columns)h(i*m,p,f?.41:.31);if(l("ledge",-i*.51,i*.51,p-.06,p+.39,-s,.06),d(p+.39,!f),f)u(-i*.41,i*.41,.15,p-.54,5),l("ledge",-i*.41,i*.41,3.28,3.44,-s+.1,-s+.21);else{l("frame",-.95,.95,.12,2.95,-s+.05,-s+.13),l("door",-.7,.7,.13,2.36,-s+.13,-s+.15);for(let m=0;m<14;m++){let x=y=>o(Math.cos(y*Math.PI/14)*.67,2.44+Math.sin(y*Math.PI/14)*.43,-s+.17);a("glass-sash").tri(o(0,2.44,-s+.17),x(m),x(m+1))}u(-.78,.78,4.1,5.36,3);for(let m of[-.35,.35]){let x=i*m;for(let y of[.85,4.05]){u(x-.78,x+.78,y,y+1.32,3);for(let S of[-1,1])l("shutter",x+S*1.03-.19,x+S*1.03+.19,y,y+1.32,-s+.06,-s+.12)}l("frame",x-2.5,x+2.5,.81,.92,-.5,-.4);for(let y=x-2.4;y<=x+2.4;y+=.21)l("frame",y-.02,y+.02,.12,.81,-.5,-.435)}}}else if(t.kind==="gallery"){for(let f of t.columns)h(f*i,4.05,.12);l("ledge",-i/2,i/2,3.85,4.13,-s,.13);for(let f of[.73,4.76]){l("frame",-i/2,i/2,f+.19,f+.27,-.24,-.11);let p=Math.ceil(i/.29);for(let m=0;m<=p;m++){let x=(m/p-.5)*(i-.16);f<1&&Math.abs(x)<1.65||l("frame",x-.025,x+.025,f-.57,f+.19,-.23,-.17)}}for(let f=0;f<4;f++)l("ledge",-1.5,1.5,0,.14*(f+1),-.18*f-.08,.94-.24*f);for(let f=-2;f<=2;f++)u(f*i*.18-.65,f*i*.18+.65,4.5,5.98,2)}else if(t.kind==="anderson")l("service-cream",-i/2,i/2,2.68,3.5,-s,.58),u(-1.18,1.18,.06,2.65,2);else if(t.kind==="museum")for(let f of[-1,0,1]){let p=i*.305*f,m=i*.138;u(p-m,p+m,.08,2.65,2),l("university-crimson",p-m,p+m,2.68,3.92,-.07,.07)}}function qn(a,e,t,n){let i=n.roof[2],s=i-.62,r=(l,c,h,u)=>{for(let[d,f]of c.entries()){let p=c[(d+1)%c.length];a(l).quad([f[0],h,f[1]],[p[0],h,p[1]],[p[0],u,p[1]],[f[0],u,f[1]])}};Hn(a("service-flashing"),t,[],i),a("service-cream").quad(...t.map(([l,c])=>[l,s,c])),r("service-flashing",t,s,i);for(let l of n.canopySupports)r("service-steel",l,Math.min(...l.map(c=>e.ground(...c)))-.02,s)}function He(a,e,t,n,i,s,r,o,l=!0){let{panel:c,box:h,pt:u}=a,d=t-i/2,f=t+i/2,p=(Math.imul(Math.round(a.mid[0]*10)|0,73856093)^Math.imul(Math.round(a.mid[1]*10)|0,19349663))>>>0,m=r==="display"?"glass-display-"+p%3:r==="picture"?"glass-shop":r==="stained"?"stained":"glass-sash",x=r==="arched"||r==="stained",y=Math.max(.055,Math.min(.105,Math.min(i,s)*.055)),S=.085;if(c("reveal",d-.075,f+.075,n-.055,n+s+.075,.018,[i/2,s/2]),c(m,d+.025,f-.025,n+.025,n+s-.025,.043,[i/1.55,s/1.55]),h("frame",d-.105,d-.035,n-.08,n+s+.08,S,.035),h("frame",f+.035,f+.105,n-.08,n+s+.08,S,.035),h("frame",d-.035,f+.035,n+s+.035,n+s+.105,S,.035),h("frame",d-.035,f+.035,n-.105,n-.035,S,.035),r!=="display"&&r!=="picture"&&(h("frame",t-y/2,t+y/2,n+.015,n+s-.015,.071,.043),h("frame",d+.02,f-.02,n+s*.49-y/2,n+s*.49+y/2,.071,.043)),r==="display"&&i>2&&h("frame",t-.035,t+.035,n,n+s,.078,.043),h("ledge",d-.17,f+.17,n-.19,n-.105,.17,.025),x){let b=u(t,n+s,.074),w=[],g=[];for(let _=0;_<=12;_++){let v=Math.PI*_/12;w.push(u(t+Math.cos(v)*(i*.5+.06),n+s+Math.sin(v)*i*.34,.075)),g.push(u(t+Math.cos(v)*(i*.5-.035),n+s+Math.sin(v)*i*.28,.079))}for(let _=0;_<12;_++)e("frame").quad(g[_],g[_+1],w[_+1],w[_]),e("glass-shop").tri(b,u(t+Math.cos(Math.PI*_/12)*i*.46,n+s+Math.sin(Math.PI*_/12)*i*.27,.081),u(t+Math.cos(Math.PI*(_+1)/12)*i*.46,n+s+Math.sin(Math.PI*(_+1)/12)*i*.27,.081))}if(o)for(let b of[-1,1]){let w=b<0?d-i*.29:f+.1,g=b<0?d-.1:f+i*.29;c("shutter",w,g,n,n+s,.064,[.8,s/1.7]);let _=Math.min(6,Math.max(1,Math.floor(s/.32)));for(let v=0;v<_;v++){let M=n+.12+(v+.5)*(s-.24)/_;e("frame").quad(u(w,M,.071),u(g,M,.071),u(g,M+.018,.071),u(w,M+.018,.071))}}if(l){let w=d-.115,g=f+.115,_=n-.115,v=n+s+.115,M=.118,T=e("ink");T.quad(u(w,_,M),u(g,_,M),u(g,_+.026,M),u(w,_+.026,M)),T.quad(u(w,v-.026,M),u(g,v-.026,M),u(g,v,M),u(w,v,M)),T.quad(u(w,_+.026,M),u(w+.026,_+.026,M),u(w+.026,v-.026,M),u(w,v-.026,M)),T.quad(u(g-.026,_+.026,M),u(g,_+.026,M),u(g,v-.026,M),u(g-.026,v-.026,M))}}function br(a,e,t,n,i,s,r,o,l,c,h){let u=Math.cos(t)*a[0]+Math.sin(t)*a[1],d=Math.cos(t)*a[1]-Math.sin(t)*a[0];if(e==="shed")return n+(d-s)*c*.5;let f=Math.min((d-s)*c/(2*h),(r-d)*c/(2*(1-h)));return e==="hip"&&(f=Math.min(f,(u-o)*c,(l-u)*c)),(e==="gambrel"||e==="mansard")&&(f=Math.min(i,Math.max(0,f*2.7))),n+Math.max(0,Math.min(i,f))}function wr(a,e,t){let[n,i,s,r]=t.roof,o=n==="gable"?t.roof[6]??.5:.5;if(!["gable","hip","shed","gambrel","mansard"].includes(n)||r<.22)return;let l=Math.cos(i),c=Math.sin(i),h=e.map(g=>l*g[0]+c*g[1]),u=e.map(g=>l*g[1]-c*g[0]),d=Math.min(...h),f=Math.max(...h),p=Math.min(...u),m=Math.max(...u),x=2*r/Math.max(.2,m-p),y=a("ledge"),S=a("porch"),b=a("surface-"+t.roof[4]),w=a("ink");for(let g=0;g<e.length;g++){let _=e[g],v=e[(g+1)%e.length],M=v[0]-_[0],T=v[1]-_[1],E=Math.hypot(M,T)||1,A=M/E,R=T/E,I=[(_[0]+v[0])/2,(_[1]+v[1])/2],L=it(I[0]-R*.04,I[1]+A*.04,e)?-1:1,D=-R*L,F=A*L,V=Math.abs(A*l+R*c);if(n==="gable"&&V<.66||n==="shed"&&V<.66)continue;let Y=br(_,n,i,s,r,p,m,d,f,x,o),W=br(v,n,i,s,r,p,m,d,f,x,o),ee=.24,P=.115,U=(k,B,X)=>[k[0]+D*X,B,k[1]+F*X];b.quad(U(_,Y,0),U(v,W,0),U(v,W,ee),U(_,Y,ee),E/3,ee/3),S.quad(U(_,Y-.035,0),U(v,W-.035,0),U(v,W-.035,ee),U(_,Y-.035,ee),E/2,ee/.3),y.quad(U(_,Y,ee),U(v,W,ee),U(v,W-P,ee),U(_,Y-P,ee),E/2,P/.15),w.quad(U(_,Y-P*.22,ee+.006),U(v,W-P*.22,ee+.006),U(v,W-P*.22+.024,ee+.006),U(_,Y-P*.22+.024,ee+.006))}}function Mr(a,e,t,n,i){let s=Math.min(1.02,i*.32);a.box("frame",t-s*.55,t+s*.55,n+.1,n+2.28,.11),a.panel("door",t-s*.48,t+s*.48,n+.13,n+2.2,.14),a.panel("glass-sash",t-s*.34,t+s*.34,n+1.22,n+2.03,.15),a.box("hardware",t+s*.3,t+s*.37,n+1.02,n+1.1,.22,.14);let r=Math.min(2.35,i*.76);a.box("ledge",t-r/2,t+r/2,n+.035,n+.16,1.14),a.box("frame",t-r/2,t+r/2,n+2.53,n+2.64,1.22),e("surface-shingle").quad(a.pt(t-r/2,n+2.65,1.24),a.pt(t+r/2,n+2.65,1.24),a.pt(t+r/2,n+2.99,.02),a.pt(t-r/2,n+2.99,.02));for(let o of[-1,1]){let l=a.post(t+o*(r/2-.08),1.04,.07);l!==null&&a.box("frame",l-.072,l+.072,n+.16,n+2.55,1.11,.97)}}function Sr(a,e,t,n,i,s){let{pt:r}=a,o=n/2,l=i+s,c=r(t-o,i,.38),h=r(t+o,i,.38),u=r(t,l,.38);e("wall-painted").tri(c,h,u,[0,0],[n/3,0],[n/6,s/3]);for(let m=-o+.24;m<o-.18;m+=.3){let x=s*(1-(Math.abs(m)+.02)/o);x>.08&&a.box("frame",t+m-.016,t+m+.016,i+.01,i+x-.012,.402,.38)}let f=e("surface-shingle"),p=-Math.min(4.1,s*1.6);for(let m of[-1,1]){let x=t+m*(o+.11),y=r(x,i-.04,.48),S=r(t,l+.065,.48);f.quad(y,S,r(t,l+.065,p),r(x,i-.04,p)),e("frame").quad(y,S,r(t,l-.06,.48),r(x,i-.16,.48))}}function Tr(a,e,t,n){let{housing:i,roof:s}=t,r=i.family==="south-grove-attached",o=a.len,l=Math.min(a.ground,s[2]-2.8);if(!(o<3.2))if(r){let c=Math.max(1,Math.round(o/8.4)),h=o/c;for(let u=0;u<c;u++){let d=-o/2+(u+.5)*h,f=d-h*.21,p=d+h*.2;Mr(a,e,f,l,h*.5);let m=Math.min(1.28,h*.22);He(a,e,p,l+.73,m,1.43,"sash",!0);for(let x of[f,p])He(a,e,x,l+3.42,m,1.42,"sash",!0);Sr(a,e,p,Math.min(h*.68,5.3),s[2]-.1,Math.min(2.25,h*.26))}}else if(n===i.main){let c=o>=6.7?Math.min(5.05,o*.52):0;if(c){let h=-o*.45+c/2;a.box("frame",h-c/2-.085,h+c/2+.085,l+.04,l+2.43,.09),a.panel("garage",h-c/2,h+c/2,l+.065,l+2.34,.12);for(let u=0;u<4;u++){let d=h+c*((u+.5)/4-.5);a.panel("glass-sash",d-c*.081,d+c*.081,l+1.87,l+2.15,.14)}Sr(a,e,h,Math.min(o*.65,c+.75),s[2]-.06,Math.min(2.35,c*.43))}Mr(a,e,c?o*.29:0,l,o*(c?.4:.8))}else{let c=Math.min(o*.23,.81);for(let h of[-c,c])He(a,e,h,l+.72,Math.min(1.1,o*.24),1.53,"sash",!1)}}function Er(a,e){let t=String(a?.[5]??""),n=a?.[0];if(!t||!Array.isArray(n)||!n.length)return null;let i=n[0];return(e instanceof Map?e.get(t):e?.filter(r=>String(r.id)===t))?.find(r=>Math.abs(r.anchor?.[0]-i[0])<.005&&Math.abs(r.anchor?.[1]-i[1])<.005)||null}function Bc(a,e,t){let n=e[0],i=t?.[0],s=t?.[1];if(!i||!s)return null;let r=s[0]-i[0],o=s[1]-i[1],l=Math.hypot(r,o);if(l<1.3)return null;let c=r/l,h=o/l,u=[(i[0]+s[0])/2,(i[1]+s[1])/2],d=it(u[0]-h*.04,u[1]+c*.04,n),f=d?-1:1,p=-h*f,m=c*f;return{len:l,mid:u,ground:a.ground(...u),pt:(x,y,S=0)=>[u[0]+c*x+p*S,y,u[1]+h*x+m*S]}}function ss(a,e,t,n,i=e?.ground){if(!e||t-e.ground<.3)return 0;let{len:s,ground:r,pt:o}=e,l=a("ink"),c=0;if(n==="horizontal-lap"||n==="board-course"){let h=n==="horizontal-lap"?.23:.31,u=.018,d=.013,f=a(n==="horizontal-lap"?"wall-lap":"wall-board");for(let p=i+.24;p<t-.08&&c<24;p+=h)f.quad(o(-s/2,p,u),o(s/2,p,u),o(s/2,p+d,u),o(-s/2,p+d,u),s/3,d/.06),f.quad(o(-s/2,p,u-.012),o(s/2,p,u-.012),o(s/2,p,u),o(-s/2,p,u),s/3,.012),c++}else if(n==="brick-running-bond"||n==="wood-shingle"||n==="stone-joint"||n==="block-joint"){let h=n==="brick-running-bond"?.075:n==="wood-shingle"?.19:n==="stone-joint"?.31:.39,u=n==="brick-running-bond"?.62:n==="wood-shingle"?.48:n==="stone-joint"?.85:1,d=.014,f=.022,p=0;for(let m=i+.12;m<t-.05&&p<48;m+=h,p++){l.quad(o(-s/2,m,f),o(s/2,m,f),o(s/2,m+d,f),o(-s/2,m+d,f),s/3,d/.08),c++;let x=p%2?u*.5:0;for(let y=-s/2+x+u;y<s/2;y+=u)l.quad(o(y-d/2,m+d,f),o(y+d/2,m+d,f),o(y+d/2,m+h-d,f),o(y-d/2,m+h-d,f),d/.08,(h-d)/.2),c++}}return c}function zc(a,e,t){if(!e||!Number.isFinite(t.eaveHeight)||!Number.isFinite(t.roofRise)||t.roofRise<.25)return 0;let{len:n,pt:i}=e,s=t.eaveHeight,r=t.roofRise,o=t.wall||"board",l=a(`wall-${o}`),c=a("ink");l.tri(i(-n/2,s,.035),i(n/2,s,.035),i(0,s+r,.035),[0,0],[n/3,0],[n/6,r/3]);let h=.035;function u(d,f,p,m){let x=p-d,y=m-f,S=Math.hypot(x,y)||1,b=-y/S*h,w=x/S*h;c.quad(i(d-b,f-w,.052),i(p-b,m-w,.052),i(p+b,m+w,.052),i(d+b,f+w,.052))}return u(-n/2,s,0,s+r),u(0,s+r,n/2,s),u(-n/2,s,n/2,s),4}function Ar(a,e,t,n){if(!n||!t||String(t[5])!==String(n.id))return{courses:0,gable:0};let i=t[7]||{},s=n.frontEdge||i.front?.edge,r=Bc(e,t,s);if(!r)return{courses:0,gable:0};let o=Number.isFinite(n.eaveHeight)?n.eaveHeight:i.roof?.[2]??r.ground+3.2,l=0;if(n.wallPattern==="mixed-brick-board"||n.wallPattern==="mixed-brick-shingle"||n.wallPattern==="mixed-brick-masonry"){let h=r.ground+(o-r.ground)*.42;l+=ss(a,r,h,"brick-running-bond");let u=n.wallPattern==="mixed-brick-shingle"?"wood-shingle":n.wallPattern==="mixed-brick-masonry"?"stone-joint":"horizontal-lap";l+=ss(a,r,o,u,h)}else n.wallPattern&&(l=ss(a,r,o,n.wallPattern));let c=n.gableFront?zc(a,r,n):0;return{courses:l,gable:c}}var Cr={format:"oxford-arrival-facade-overrides-v1",method:"Narrow renderer and arrival-QA corrections for two reviewed arrivals. Farley Hall's OSM entrance node lies at the corner endpoint of a mapped facade segment; its door station is inset so the rendered 1.55 m leaf stays on the wall. This is a face assignment from mapped geometry, not a photo-verified principal entrance. 1405 Jackson's material, stories, porch, and replacement door are taken from its January 2000 MDAH inventory card. The surveyed image documents the entrance but does not precisely georeference its point on the modern footprint.",buildings:{"318282634":{name:"Farley Hall",frontEdge:[[-1270.72,-39.59],[-1266.87,-39.08]],doorFraction:.72,profile:{use:"campus",wall:"brick",stories:3},evidence:"OSM entrance node 11155506883 at [-1266.87, -39.08] on the endpoint of this footprint face; contextual campus view https://map.olemiss.edu/ (media URL http://web6.olemiss.edu/images/?f=lib/FARLEY.JPG; undated, not georeferenced)",facadeConfidence:"OSM entrance at a footprint corner; adjacent face assignment is inferred",doorConfidence:"mapped node is about 1.09 m from corrected center; inset from profile fraction 0.90 to 0.72 so the 1.55 m door stays inside the 3.88 m face"},"629641758":{name:"1405 Jackson Avenue",frontEdge:[[206.39,22.23],[220.09,24.25]],doorFraction:.5,profile:{use:"home",wall:"brick",stories:1.5,flags:["porch","sidegable"],clearance:2.8},evidence:"https://www.oxfordms.net/documents/departments/planning/surveys/jackson%20avenue/1405%20jackson%20avenue.pdf (MDAH card, photo dated January 2000)",facadeConfidence:"survey matched to footprint; orientation inferred",doorConfidence:"survey documents six-panel replacement door; station inferred from center-hall description"}}};var Gc=Cr.buildings;function Rr(a,e){let t=Gc[String(a?.[5])];return t?{...e,...t.profile,front:{...e.front,edge:t.frontEdge},door:t.doorFraction}:e}function dt(a,e,t,n,i,s,r=0,o=null){let l=n[0]-t[0],c=n[1]-t[1],h=Math.hypot(l,c)||1,u=l/h,d=c/h,f=[(t[0]+n[0])/2,(t[1]+n[1])/2],p=it(f[0]-d*.06,f[1]+u*.06,i)?-s:s,m=-d*p,x=u*p,y=(g,_,v=0)=>[f[0]+u*g+m*(v+r),_,f[1]+d*g+x*(v+r)],S=(g,_,v,M,T,E=0,A=[1,1])=>a(g).quad(y(_,M,E),y(v,M,E),y(v,T,E),y(_,T,E),...A);return{len:h,mid:f,pt:y,panel:S,box:(g,_,v,M,T,E,A=0)=>{S(g,_,v,M,T,E);let R=a(g);R.quad(y(_,T,A),y(_,T,E),y(v,T,E),y(v,T,A)),R.quad(y(_,M,A),y(_,M,E),y(_,T,E),y(_,T,A)),R.quad(y(v,M,E),y(v,M,A),y(v,T,A),y(v,T,E)),R.quad(y(_,M,E),y(_,M,A),y(v,M,A),y(v,M,E))},post:(g,_,v)=>{for(let M of[0,.45,-.45,.85,-.85,1.35,-1.35]){let T=g+M;if(Math.abs(T)+v>h*.5)continue;let[E,,A]=y(T,0,_);if(!(e.cells.get(Math.floor(E/48)+"_"+Math.floor(A/48))||[]).some(([N,L])=>{let D=e.roads[N],F=es([E,A],e.nodes[D.p[L-1]],e.nodes[D.p[L]]);return Math.hypot(E-F[0],A-F[1])<v+.54}))return o&&o.push([E,A,v]),T}return null},ground:e.ground(...f)}}function Yn(a,e,t,n,i,s,r){let{len:o,box:l,panel:c,pt:h}=a,u=t.flags||[],d=t.use==="shop",f=t.use==="campus"||t.use==="civic",p=t.stories,m=i-r;if(m<1.9||o<1.65)return;let x=s?(t.door??.5)*o-o/2:null,y=Math.max(1,Math.min(28,s&&t.bays?t.bays:Math.round(o/(d?4.3:f?3.9:4.8)))),S=o/y,b=Math.max(1,Math.min(p,Math.floor(m/2.05))),w=Math.min(f?2.3:1.65,m/b*.57);for(let T=0;T<b;T++){let E=r+.15+(T+.28)*m/b;for(let A=0;A<y;A++){let R=-o/2+(A+.5)*S;if(T===0&&x!==null&&Math.abs(R-x)<(d?1.65:1.4))continue;let I=s&&d&&T===0,N=s&&u.includes("picture")&&T===0,L=Math.min(S*.68,I?3.7:N?2.7:f?1.52:1.24);L<.55||He(a,e,R,I?r+.5:E,L,I?Math.min(m/b*.8,3.05):w,I?"display":N?"picture":u.includes("stained")?"stained":u.includes("arches")?"arched":"sash",s&&u.includes("shutters"))}}if(u.includes("wainscot")&&c("wall-brick",-o/2,o/2,r+.035,r+Math.min(1.05,m*.25),.035,[o/3,.35]),!s)return;if(u.includes("glassentry")&&c("glass-shop",-Math.min(3.6,o*.26),Math.min(3.6,o*.26),r+.15,Math.min(i-.35,r+m*.81),.09),u.includes("brickpilaster")||u.includes("buttress")){let T=Math.max(2,Math.min(10,y+1));for(let E=0;E<T;E++){let A=-o*.485+E*o*.97/(T-1),R=u.includes("buttress")?.31:.19;l("wall-brick",A-R,A+R,r+.03,i-.26,u.includes("buttress")?.46:.18),l("ledge",A-R-.03,A+R+.03,i-.43,i-.26,.38)}}if(u.includes("dormer")&&o>4){let E=i+.02,A=Math.min(2.6,o*.25);l("wall-"+t.wall,0-A/2,0+A/2,E,E+1.45,.02,-1.6),c("glass-sash",0-A*.25,0+A*.25,E+.18,E+1.28,.06),e("frame").tri(h(0-A*.52,E+1.42,.08),h(0+A*.52,E+1.42,.08),h(0,E+2.25,.08)),e("historic-roof").quad(h(0-A*.57,E+1.45,.12),h(0,E+2.26,.12),h(0,E+2.26,-1.7),h(0-A*.57,E+1.45,-1.7)),e("historic-roof").quad(h(0,E+2.26,.12),h(0+A*.57,E+1.45,.12),h(0+A*.57,E+1.45,-1.7),h(0,E+2.26,-1.7))}let g=d||f?1.55:1.04,_=r+Math.min(m-.16,f?2.9:2.29);l("frame",x-g*.5-.09,x+g*.5+.09,r+.08,_+.12,.105),c(d?"glass-shop":"door",x-g*.5,x+g*.5,r+.1,_,.12),l("hardware",x+g*.3-.025,x+g*.3+.025,r+1.03,r+1.09,.175,.115),l("hardware",x+g*.3-.018,x+g*.3+.018,r+1.19,r+1.226,.164,.12),u.includes("transom")&&c("glass-shop",x-g*.5,x+g*.5,_+.15,Math.min(i-.12,_+.65),.13);let v=t.clearance??0;if(v>.55&&l("ledge",x-g*.72,x+g*.72,r+.04,r+.145,Math.min(.52,v*.55)),(u.includes("cornice")||u.includes("parapet"))&&(l("ledge",-o*.5,o*.5,i-.3,i-.07,.18),l("frame",-o*.5,o*.5,i-.07,i+.12,.27)),u.some(T=>["porch","columns","balcony","awning","pediment"].includes(T))&&v>.8&&!t.planPorch){let T=t.columns??(u.includes("awning")?0:2),E=u.includes("fullwidth")||u.includes("balcony"),A=Math.min(o*.93,E?o:Math.max(4,T*1.55)),R=Math.min(v*.7,f?3.5:2.05),I=Math.max(-o*.5+A*.5,Math.min(o*.5-A*.5,x)),N=Math.min(i-.38,r+(f?Math.min(8,m*.82):2.82));l(u.includes("awning")?"awning":"ledge",I-A/2,I+A/2,N-.16,N,R),e("porch").quad(h(I-A/2,N-.055,.015),h(I+A/2,N-.055,.015),h(I+A/2,N-.055,R),h(I-A/2,N-.055,R),A/3,R/3);for(let L=0;L<T;L++){let D=f?.22:.086,F=a.post(I-A*.44+L*A*.88/Math.max(1,T-1),R-D,D);F!==null&&(a.box("ledge",F-D*1.65,F+D*1.65,r+.08,r+.22,R-D*1.25,R-2*D),l("frame",F-D,F+D,r+.16,N-.15,R,R-2*D),a.box("ledge",F-D*1.55,F+D*1.55,N-.24,N-.12,R-D*1.25,R-2*D),f&&l("ledge",F-D*1.4,F+D*1.4,N-.3,N-.13,R+.05,R-2*D-.05))}if(u.includes("pediment")&&e("frame").tri(h(I-A*.5,N,R),h(I+A*.5,N,R),h(I,N+Math.min(1.8,A*.19),R)),u.includes("balcony")){l("frame",I-A*.5,I+A*.5,N+.94,N+1.03,R,R-.09);for(let L=I-A*.46;L<I+A*.49;L+=.42)c("rail",L-.025,L+.025,N+.02,N+.96,R)}}}function Hc(a,e,t,n){if(!n||a.len<.1)return null;let i=t[0]-e[0],s=t[1]-e[1],r=Math.hypot(i,s)||1,o=i/r,l=s/r,[c,h]=n,u=Math.abs(((h[0]-c[0])*o+(h[1]-c[1])*l)/(Math.hypot(h[0]-c[0],h[1]-c[1])||1)),d=m=>Math.abs((m[0]-e[0])*l-(m[1]-e[1])*o);if(u<.96||d(c)>.5||d(h)>.5)return null;let f=Math.max(-r/2,Math.min((c[0]-(e[0]+t[0])/2)*o+(c[1]-(e[1]+t[1])/2)*l,(h[0]-(e[0]+t[0])/2)*o+(h[1]-(e[1]+t[1])/2)*l)),p=Math.min(r/2,Math.max((c[0]-(e[0]+t[0])/2)*o+(c[1]-(e[1]+t[1])/2)*l,(h[0]-(e[0]+t[0])/2)*o+(h[1]-(e[1]+t[1])/2)*l));return p>f?[f,p]:null}function Wc(a,e,t){let n=(e+t)/2,i={...a,len:t-e};return i.pt=(s,r,o=0)=>a.pt(s+n,r,o),i.panel=(s,r,o,l,c,h=0,u)=>a.panel(s,r+n,o+n,l,c,h,u),i.box=(s,r,o,l,c,h,u=0)=>a.box(s,r+n,o+n,l,c,h,u),i.post=(s,r,o)=>{let l=a.post(s+n,r,o);return l===null?null:l-n},i}function Xc(a,e,t,n,i,s,r){if(!r){Yn(a,e,t,n,i,!0,s);return}let[o,l]=r;for(let[c,h]of[[-a.len/2,o],[l,a.len/2]])h-c>1.55&&Yn(Wc(a,c,h),e,t,n,i,!0,s)}function Pr(a,e,t,n,i){if(t[7]?.canopySupports){qn(a,e,t[0],t[7]);return}if(t[5]===318265043){mr(a,e);return}let[s,r,,,,,,o]=t,l=Rr(t,o);if(hr(a,e,t,(b,w)=>dt(a,e,b,w,s,1,0,n)))return;let{roof:c,wall:h,front:u}=l,d=c[2],f=Math.min(...s.map(b=>e.ground(...b)))-.16,p="wall-"+h,m=l.photoEvidence?is(t[5]):null;if(l.campusEntry){let{edge:b}=l.campusEntry;vr(a,dt(a,e,...b,s,1,0,n),l.campusEntry,n)}let x=l.shells||[[s,...r]];for(let b of x)for(let[w,g]of b.entries())for(let _=0;_<g.length;_++){let v=g[_],M=g[(_+1)%g.length],T=dt(a,e,v,M,g,w===0?1:-1,0,n);T.panel(p,-T.len/2,T.len/2,f,d,0,[T.len/3,(d-f)/3]);let E=u?.edge,A=w===0&&E&&rs(v,M,E,.85);if(!l.party?.some(R=>rs(v,M,R,1))&&!(l.plan||[]).some(R=>R.kind==="garage"&&rs(v,M,R.edge,1))&&!(l.homeModel&&A)){if(w===0&&l.housing?.frontage.includes(_)){Tr(T,a,l,_);continue}A&&m?Xc(T,a,l,f,d,Math.min(T.ground,d-2.1),Hc(T,v,M,m)):Yn(T,a,l,f,d,A,Math.min(T.ground,d-2.1))}}for(let b of l.plan||[]){let[w,g]=b.edge,_=dt(a,e,w,g,s,1,0,n),v=_.ground,M=_.len;if(b.kind==="garage"){let T=Math.min(M*.84,5.9);_.panel("frame",-T/2-.09,T/2+.09,v+.07,v+2.35,.08),_.panel("garage",-T/2,T/2,v+.08,v+2.24,.12);continue}for(let T of[-M*.44,M*.44]){let E=_.post(T,0,.09);E!==null&&_.box("frame",E-.09,E+.09,v+.1,Math.min(d,v+2.7),.1,-.1)}b.kind==="screen porch"&&_.panel("screen",-M*.48,M*.48,v+.76,Math.min(d-.15,v+2.48),.01),_.box("ledge",-M/2,M/2,v+.045,v+.19,.08,-.12)}if(l.homeModel){let[b,w]=l.front.edge,g=dt(a,e,b,w,s,1,.12,n),_=b[1]<w[1]?1:-1,v=T=>(T-.5)*g.len*_,M=g.ground;if(l.homeModel==="628157057"){for(let E of[.16,.41,.64])He(g,a,v(E),M+.82,1.23,1.39,"sash",!0);let T=v(.83);g.box("frame",T-.55,T+.55,M+.1,M+2.34,.06),g.panel("door",T-.49,T+.49,M+.12,M+2.26,.075),g.box("ledge",T-1.1,T+1.1,M+.04,M+.2,.86),g.box("frame",T-1.21,T+1.21,M+2.61,M+2.72,.94);for(let E of[-1,1]){let A=g.post(T+E*1.04,.835,.06);A!==null&&g.box("frame",A-.06,A+.06,M+.15,M+2.61,.9,.77)}}else{let[T,E]=[v(.008),v(.815)].sort((D,F)=>D-F);g.panel("wall-brick",T,E,M+.02,M+1,.16,[g.len*.8/3,.34]);for(let[D,F,V]of[[.15,2,.54],[.36,3,.54]])for(let Y=0;Y<F;Y++){let W=v(D)+(Y-(F-1)/2)*(V+.12);He(g,a,W,M+1.03,V,1.27,"picture",!1),g.box("frame",W-V*.5,W+V*.5,M+1.62,M+1.665,.18,.1)}let A=v(.645),R=2.92;He(g,a,A,M+1.05,R,1.26,"picture",!1);for(let D of[-1,1])g.box("frame",A+D*R/6-.035,A+D*R/6+.035,M+1.07,M+2.29,.19,.1);let I=v(.475);g.box("frame",I-.56,I+.56,M+.18,M+2.42,.19),g.panel("door",I-.48,I+.48,M+.2,M+2.34,.21);let N=M+1.99,L=.28;for(let D=0;D<8;D++){let F=D*Math.PI/8,V=(D+1)*Math.PI/8;a("glass-sash").tri(g.pt(I,N,.245),g.pt(I+Math.cos(F)*L,N+Math.sin(F)*L,.245),g.pt(I+Math.cos(V)*L,N+Math.sin(V)*L,.245)),D%2===0&&a("frame").tri(g.pt(I,N,.25),g.pt(I+Math.cos(F)*L,N+Math.sin(F)*L,.25),g.pt(I+Math.cos(F+.055)*L,N+Math.sin(F+.055)*L,.25))}g.box("hardware",I+.32,I+.37,M+1.13,M+1.19,.28,.22);for(let D=0;D<4;D++)g.box("wall-brick",I-.94,I+.94,M+.065*D,M+.065*(D+1),1.12-D*.19);for(let[D,F,V]of[[.408,.48,1.18],[.614,1.15,1.03],[.706,1.03,.94]]){let Y=v(D);for(let W=0;W<4;W++){let ee=Y+(W/3-.5)*F,P=.6+W%2*.09,U=V*(.83+W%3*.07),k=g.pt(ee,M+U,P),B=[],X=[];for(let Z=0;Z<7;Z++){let G=Z*Math.PI*2/7+.2*W;B.push(g.pt(ee+Math.cos(G)*F*.4,M+.12,P+Math.sin(G)*.32)),X.push(g.pt(ee+Math.cos(G)*F*.49,M+U*(.62+.06*(Z%2)),P+Math.sin(G)*.4))}for(let Z=0;Z<7;Z++){let G=(Z+1)%7;a("foundation-hedge").quad(B[Z],B[G],X[G],X[Z]),a("hedge-sun").tri(X[Z],X[G],k)}}}g.box("frame",-g.len*.5,g.len*.5,d-.11,d+.04,.46,.09)}}for(let b of l.frontages||[]){if(l.photoEvidence&&pr(t[5],b.edge)>=.55)continue;let[w,g]=b.edge,_=dt(a,e,w,g,s,1,.22,n);_.panel("wall-"+b.wall,-_.len*.5,_.len*.5,f,d,0,[_.len/3,(d-f)/3]),Yn(_,a,b,f,d,!0,Math.min(_.ground,d-2.1))}gr(t[5],s,l,(b,w)=>dt(a,e,b,w,s,1,0,n),a);let y=yr.get(t[5]);l.surveyRoof||ut(a,s,r,c,p),!y&&!l.surveyRoof&&wr(a,s,l),y&&(t[5]!==451755565||s.some(([b])=>b>80))&&_r(a,e,y),l.photoEvidence&&fr(a,e,t);let S=Er(t,i);S&&Ar(a,e,t,S)}function rs(a,e,t,n){if(!t)return!1;let[i,s]=t,r=s[0]-i[0],o=s[1]-i[1],l=Math.hypot(r,o)||1,c=(a[0]+e[0])/2-i[0],h=(a[1]+e[1])/2-i[1],u=(c*r+h*o)/l;return Math.abs(c*o-h*r)/l<n&&u>-.2&&u<l+.2&&Math.abs((a[0]-e[0])*o-(a[1]-e[1])*r)/l<n}var Ir=[{id:"188828391",name:"Lafayette County Courthouse",file:"courthouse.glb",source:"sources/blender/models/Courthouse.blend",x:-9.64,z:45.69,yaw:-.168},{id:"599810022",name:"Square Books",file:"square-books.glb",source:"sources/blender/models/Square Books.blend",x:-32.15,z:111.74,yaw:2.9465926535897933},{id:"187869639",name:"The Lyceum",file:"lyceum.glb",source:"sources/blender/models/Lyceum.blend",x:-1605,z:109,yaw:1.4212398378823943},{id:"3273781",name:"Vaught-Hemingway Stadium",file:"stadium.glb",source:"sources/blender/models/Vaught-Hemingway Stadium.blend",x:-1441.47,z:508.22,yaw:-.60003},{id:"318274467",name:"Ventress Hall",file:"ventress.glb",source:"sources/blender/models/Ventress.blend",x:-1385.86,z:115.96,yaw:-.148},{id:"16256538",name:"Barnard Observatory",file:"barnard.glb",source:"sources/blender/models/Barnard.blend",x:-1354.865,z:-73.11,yaw:0},{id:"313153529",name:"Grove Pavilion",file:"grove-pavilion.glb",source:"sources/blender/models/Grove Pavilion.blend",x:-1340.0263,z:96.5502,yaw:-1.0484},{id:"451755565",name:"Neilson\u2019s Department Store",file:"neilsons.glb",source:"sources/blender/models/Neilsons.blend",x:65.85,z:79.46,yaw:0,bakedCoarse:!0,coarseStepM:.65,reviewView:{centerXZ:[42.2,79.1],frontYaw:-1.758,distances:[39,24,12]}},{id:"188498471",name:"Paris-Yates Chapel",file:"paris-yates.glb",source:"sources/blender/models/Paris-Yates Chapel.blend",x:-1919.875,z:67.14,yaw:0,bakedCoarse:!0,coarseStepM:.8,reviewView:{centerXZ:[-1923,76],frontYaw:-.09,distances:[57,33,19]},groundCollision:{tile:"-4_0",replaceAnchors:[[-1938.64,66.44],[-1941.52,59.12]],supports:[[[-1939.681320140676,64.86344215907266],[-1938.9634421590724,64.91867985932396],[-1939.0186798593238,65.63655784092734],[-1939.7365578409274,65.58132014067604]],[[-1934.7813201406761,65.16344215907266],[-1934.0634421590726,65.21867985932396],[-1934.118679859324,65.93655784092734],[-1934.8365578409275,65.88132014067604]],[[-1934.831320140676,60.26344215907265],[-1934.1134421590725,60.318679859323964],[-1934.168679859324,61.036557840927344],[-1934.8865578409275,60.98132014067603]],[[-1939.681320140676,59.91344215907265],[-1938.9634421590724,59.96867985932396],[-1939.0186798593238,60.68655784092734],[-1939.7365578409274,60.63132014067603]]]}}];var f0=Ge(15262671),p0=Ge(15985882),m0=Ge(9789001),g0=Ge(4347991,.36),x0=Ge(3491134),y0=Ge(6850684),_0=Ge(8947068),v0=Ge(9519936);var Jn=new Set(Ir.map(a=>Number(a.id)));var Yc={brick:10845031,lap:12499364,board:10986132,metal:10132631,stucco:13023647,block:10789017,stone:11512218,painted:12696490},Jc={house:12893609,store:10454128,commercial:11971489,campus:11633778},Zc=new qt({vertexColors:!0,side:ht});function Lr(a,e){let t=new nt,n=new nt,i=new lt,s=new Q;for(let[r,o,l,c,,h,,u]of a){if(Jn.has(h)||u?.fragment)continue;let d=e.ground(...r[0]),f=u?.roof?.[2]??d+l;if(t.tint=s.setHex(Yc[u?.wall]??Jc[c]??11248792),u?.canopySupports){qn(()=>t,e,r,u);continue}for(let p of[r,...o])for(let m=0;m<p.length;m++){let x=p[m],y=p[(m+1)%p.length];t.quad([x[0],d-2,x[1]],[y[0],d-2,y[1]],[y[0],f,y[1]],[x[0],f,x[1]])}u?.roof?ut(p=>p==="wall"?t:n,r,o,u.roof,"wall"):(n.tint=new Q(7828587),Hn(n,r,o,f))}for(let r of[t,n])r.pos.length&&i.add(r.mesh(Zc));return i}var Dr=a=>()=>(a=Math.imul(a,1664525)+1013904223>>>0)/4294967296,Zn=class{constructor(){this.waterMaterial=new Xt({roughness:.62,metalness:.015,clearcoat:.12,clearcoatRoughness:.5,emissive:462868,emissiveIntensity:.08,transparent:!0,depthWrite:!1,side:ht}),this.waterClock={value:0},this.waterSky={value:null},this.skyReady={value:0},this.waterMaterial.onBeforeCompile=e=>{e.uniforms.waterTime=this.waterClock,e.uniforms.waterSky=this.waterSky,e.uniforms.skyReady=this.skyReady,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float shoreDistance; varying float vShoreDistance; varying vec2 vWaterWorld;`),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vWaterWorld=position.xz; vShoreDistance=shoreDistance;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float waterTime; uniform sampler2D waterSky; uniform float skyReady; varying float vShoreDistance; varying vec2 vWaterWorld;`),e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    float shoreFade=smoothstep(0.0,3.2,vShoreDistance);
    float deepFade=smoothstep(3.0,20.0,vShoreDistance);
    vec3 shoreColor=vec3(0.48,0.59,0.53);
    vec3 middleColor=vec3(0.25,0.40,0.38);
    vec3 deepColor=vec3(0.09,0.22,0.25);
    diffuseColor.rgb=mix(shoreColor,middleColor,shoreFade);
    diffuseColor.rgb=mix(diffuseColor.rgb,deepColor,deepFade);
    diffuseColor.a*=mix(0.16,0.91,smoothstep(0.0,2.6,vShoreDistance));
    float waveFade=(1.0-smoothstep(72.0,148.0,distance(cameraPosition.xz,vWaterWorld)))*smoothstep(0.5,4.0,vShoreDistance);
    float phaseA=dot(vWaterWorld,vec2(0.155,0.096))+waterTime*0.62;
    float phaseB=dot(vWaterWorld,vec2(-0.071,0.188))-waterTime*0.43;
    float phaseC=dot(vWaterWorld,vec2(0.24,-0.14))+waterTime*0.31;
    float shimmer=pow(max(0.0,0.5+0.5*sin(phaseA+phaseB*0.72+phaseC*0.38)),10.0)*waveFade;
    float brushA=sin(dot(vWaterWorld,vec2(.039,.018))+1.35*sin(dot(vWaterWorld,vec2(-.012,.047))));
    float brushB=sin(dot(vWaterWorld,vec2(-.026,.033))+waterTime*.025);
    float paintedWash=smoothstep(-.12,.38,brushA*.72+brushB*.28);
    diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(.86,.99,.94)+vec3(.025,.045,.035),.115*paintedWash);
    diffuseColor.rgb+=vec3(0.055,0.072,0.066)*shimmer;`),e.fragmentShader=e.fragmentShader.replace("#include <opaque_fragment>",`
    vec3 reflectedWater=inverseTransformDirection(reflect(-normalize(vViewPosition),normal),viewMatrix);
    float ripple=sin(vWaterWorld.y*.91+sin(vWaterWorld.x*.34)+waterTime*.7);
    float longWave=sin(dot(vWaterWorld,vec2(.12,-.21))-waterTime*.32);
    reflectedWater.y+=.045*ripple+.018*longWave;
    float fresnel=pow(1.0-clamp(dot(normal,normalize(vViewPosition)),0.0,1.0),2.3);
    vec3 waterHorizon=texture2D(waterSky,equirectUv(normalize(reflectedWater)),1.3).rgb;
    float faceLight=smoothstep(.29,.87,ripple*.71+longWave*.29);
    outgoingLight=mix(outgoingLight,waterHorizon,(.15+.34*fresnel)*skyReady*smoothstep(.22,3.5,vShoreDistance));
    outgoingLight+=(vec3(.036,.043,.038)*faceLight)*waveFade;
    #include <opaque_fragment>`),e.fragmentShader=e.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
    float phaseN1=dot(vWaterWorld,vec2(0.155,0.096))+waterTime*0.62;
    float phaseN2=dot(vWaterWorld,vec2(-0.071,0.188))-waterTime*0.43;
    float phaseN3=dot(vWaterWorld,vec2(0.24,-0.14))+waterTime*0.31;
    vec2 slope=vec2(0.013*cos(phaseN1)*0.155-0.009*cos(phaseN2)*0.071+0.005*cos(phaseN3)*0.24,
                    0.013*cos(phaseN1)*0.096+0.009*cos(phaseN2)*0.188-0.005*cos(phaseN3)*0.14);
    vec3 waveNormal=normalize(mat3(viewMatrix)*normalize(vec3(-slope.x,1.0,-slope.y)));
    float normalFade=(1.0-smoothstep(72.0,148.0,distance(cameraPosition.xz,vWaterWorld)))*smoothstep(0.5,4.0,vShoreDistance);
    normal=normalize(mix(normal,waveNormal,0.36*normalFade));`)},this.waterMaterial.customProgramCacheKey=()=>"oxford-water-painterly-v3",this.litterMaterial=new Ve({map:this.leafLitterTexture(),transparent:!0,alphaTest:.025,depthWrite:!1,roughness:1,side:ht}),this.shrubMaterial=new Ve({map:this.shrubTexture(),transparent:!0,alphaTest:.32,depthWrite:!1,roughness:1,side:ht})}setSky(e){this.waterSky.value=e||null,this.skyReady.value=e?1:0}tick(e){this.waterClock.value=e}leafLitterTexture(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=Dr(1279607110);for(let s=0;s<460;s++){let r=n()*Math.PI*2,o=Math.sqrt(n())*59,l=64+Math.cos(r)*o,c=64+Math.sin(r)*o,h=Math.max(0,1-o/67),u=["#514938","#665b42","#726744","#4e5638","#858052"];t.save(),t.translate(l,c),t.rotate(n()*Math.PI),t.globalAlpha=(.24+n()*.44)*h,t.fillStyle=u[Math.floor(n()*u.length)],t.beginPath(),t.ellipse(0,0,1.2+n()*3.4,.5+n()*1.1,0,0,Math.PI*2),t.fill(),t.restore()}let i=new Ct(e);return i.colorSpace=fe,i.anisotropy=4,i}shrubTexture(){let e=document.createElement("canvas");e.width=128,e.height=96;let t=e.getContext("2d"),n=Dr(1397248597),i=["#455b36","#526940","#65754a","#788252","#394d33"];for(let r=0;r<270;r++){let o=8+n()*112,l=19+n()*67,c=Math.abs(o-64)/64;l<24+c*25&&n()<.76||(t.save(),t.translate(o,l),t.rotate(n()*Math.PI),t.globalAlpha=.62+n()*.36,t.fillStyle=i[Math.floor(n()*i.length)],t.beginPath(),t.ellipse(0,0,2+n()*4,.8+n()*2,0,0,Math.PI*2),t.fill(),t.restore())}let s=new Ct(e);return s.colorSpace=fe,s.anisotropy=4,s}crownRadius(e,t,n){let i=e?.ecology?.treeRadiusDm?.[t];return Number.isFinite(i)&&i>0?i*.1:Vn.clamp(n*.28,1.45,8.5)}understory(e,t){if(!t?.length)return null;let n=[],i=[],s=[],r=[],o=(h,u,d,f,p,m)=>{h.push(...d,...f,...p,...m),u.push(0,0,1,0,1,1,0,1)};for(let[h,u,d,f]of t){let p=d*.1,m=f*.001,x=Math.cos(m),y=Math.sin(m),S=[[-p,-p],[p,-p],[p,p],[-p,p]].map(([g,_])=>{let v=h+g*x-_*y,M=u+g*y+_*x;return[v,e.ground(v,M)+.028,M]});o(n,i,...S);let b=p*.86,w=.36+p*.3;for(let g of[m,m+Math.PI/2]){let _=Math.cos(g)*b,v=Math.sin(g)*b,M=e.ground(h-_,u-v)+.02,T=e.ground(h+_,u+v)+.02;o(s,r,[h-_,M,u-v],[h+_,T,u+v],[h+_,T+w,u+v],[h-_,M+w,u-v])}}let l=(h,u,d)=>{let f=new Re,p=[];for(let x=0;x<h.length/3;x+=4)p.push(x,x+1,x+2,x,x+2,x+3);f.setAttribute("position",new ye(h,3)),f.setAttribute("uv",new ye(u,2)),f.setIndex(p),f.computeVertexNormals();let m=new je(f,d);return m.castShadow=!1,m.receiveShadow=!1,m},c=new lt;return c.add(l(n,i,this.litterMaterial)),c.add(l(s,r,this.shrubMaterial)),c}waterSurface(e,t,n=[]){if(t.length<3)return null;let i=[t,...n],s=[];for(let b of i)for(let w=0;w<b.length;w++){let g=b[w],_=b[(w+1)%b.length];for(let v=0;v<4;v++){let M=v/4;s.push(e.ground(g[0]+(_[0]-g[0])*M,g[1]+(_[1]-g[1])*M))}}s.sort((b,w)=>b-w);let r=s[0],o=s[Math.floor((s.length-1)*.05)],l=Math.min(o-.05,r+.18)+.04,c=i.map(b=>b.map(([w,g])=>new te(w,g))),h=ze.triangulateShape(c[0],c.slice(1)),u=c.flat(),d=[],f=[],p=(b,w)=>{let g=1/0;for(let _ of i)for(let v=0;v<_.length;v++){let M=_[v],T=_[(v+1)%_.length],E=T[0]-M[0],A=T[1]-M[1],R=Vn.clamp(((b-M[0])*E+(w-M[1])*A)/(E*E+A*A||1),0,1);g=Math.min(g,Math.hypot(b-M[0]-E*R,w-M[1]-A*R))}return g},m=b=>{d.push(b.x,l,b.y),f.push(p(b.x,b.y))},x=(b,w,g,_=0)=>{let v=b.distanceTo(w),M=w.distanceTo(g),T=g.distanceTo(b);if(Math.max(v,M,T)<=10||_>=14){m(b),m(w),m(g);return}if(v>=M&&v>=T){let A=b.clone().add(w).multiplyScalar(.5);x(b,A,g,_+1),x(A,w,g,_+1)}else if(M>=T){let A=w.clone().add(g).multiplyScalar(.5);x(b,w,A,_+1),x(b,A,g,_+1)}else{let A=g.clone().add(b).multiplyScalar(.5);x(b,w,A,_+1),x(A,w,g,_+1)}};for(let b of h)x(u[b[0]],u[b[1]],u[b[2]]);let y=new Re;y.setAttribute("position",new ye(d,3)),y.setAttribute("shoreDistance",new ye(f,1)),y.computeVertexNormals();let S=new je(y,this.waterMaterial);return S.receiveShadow=!0,S.userData.waterLevel=l,S}};var Zt=Object.create(Gn.prototype),Nr=new Uint16Array(4096*6);for(let a=0,e=0;a<64;a++)for(let t=0;t<64;t++){let n=a*65+t;Nr.set([n,n+65,n+1,n+1,n+65,n+66],e),e+=6}function Fr(a){return Object.fromEntries(Object.entries(a.attributes).map(([e,t])=>[e,{array:t.array,size:t.itemSize}]))}function as(a,e){e.computeBoundingSphere();let{center:t,radius:n}=e.boundingSphere;return{material:a,attrs:Fr(e),bounds:[t.x,t.y,t.z,n]}}self.onmessage=({data:a})=>{if(a.dem){Object.assign(Zt,{dem:a.dem,heights:a.heights,nodes:a.nodes,roads:a.roads,cells:a.cells});return}if(a.kind==="facades"){try{let o=[new Map,new Map],l=[];for(let[u,d]of a.buildings.entries()){if(!d[7]?.roof||Jn.has(d[5])||d[7].fragment)continue;let f=o[a.registered?.has(u)?1:0];Pr(m=>(f.has(m)||f.set(m,new nt),f.get(m)),Zt,d,l,a.records)}let c=[];for(let[u,d]of o.entries())for(let[f,p]of d)p.pos.length&&c.push({...as(f,p.mesh(null).geometry),group:u});let h=c.flatMap(u=>Object.values(u.attrs).map(d=>d.array.buffer));self.postMessage({id:a.id,meshes:c,posts:l},h)}catch(o){self.postMessage({id:a.id,error:o.message})}return}let{id:e,xx:t,zz:n,buildings:i,trees:s,ecology:r}=a;try{let o=new Float32Array(12675);for(let f=0;f<65;f++)for(let p=0;p<65;p++){let m=t*512+p*8,x=n*512+f*8,y=(f*65+p)*3;o[y]=m,o[y+1]=Zt.ground(m,x),o[y+2]=x}let l=new Re;l.setAttribute("position",new pe(o,3)),l.setIndex(new pe(Nr,1)),l.computeVertexNormals();let c=Lr(i,Zt).children.map(f=>as("building",f.geometry)),h=Array.from({length:4},()=>new nt);for(let f=0;f<s.length;f+=3){let[p,m,x,y]=s[f],S=Zt.ground(p,m),b=Zn.prototype.crownRadius({ecology:r},f,x),w=h[y]||h[1];w.treeCenter=[p,m];for(let g of[0,Math.PI/2]){let _=Math.cos(g)*b,v=Math.sin(g)*b;w.quad([p-_,S,m-v],[p+_,S,m+v],[p+_,S+x,m+v],[p-_,S+x,m-v])}}for(let f=0;f<h.length;f++)h[f].pos.length&&c.push(as("tree"+f,h[f].mesh(null).geometry));let u=Fr(l),d=[u,...c.map(f=>f.attrs)].flatMap(f=>Object.values(f).map(p=>p.array.buffer));self.postMessage({id:e,ground:u,meshes:c},d)}catch(o){self.postMessage({id:e,error:o.message})}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

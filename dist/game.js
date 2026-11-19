(()=>{var $h=0,ec=1,qh=2;var ns=1,Yh=2,Fs=3,zi=0,un=1,Mt=2,is=0,Os=1,Nr=2,tc=3,nc=4,Zh=5;var ss=100,Jh=101,Kh=102,jh=103,Qh=104,eu=200,tu=201,nu=202,iu=203,ic=204,sc=205,su=206,ru=207,au=208,ou=209,lu=210,cu=211,hu=212,uu=213,du=214,Fa=0,Oa=1,ka=2,Cs=3,Ba=4,za=5,Ha=6,Va=7,Ur=0,fu=1,pu=2,ni=0,rc=1,ac=2,oc=3,Fr=4,lc=5,cc=6,hc=7;var uc=300,rs=301,ks=302,go=303,xo=304,Li=1e3,Jn=1001,Ga=1002,Xt=1003,mu=1004;var Or=1005;var cn=1006,_o=1007;var xi=1008;var pn=1009,dc=1010,fc=1011,Bs=1012,yo=1013,Bn=1014,An=1015,zn=1016,vo=1017,Mo=1018,as=1020,pc=35902,mc=35899,gc=1021,xc=1022,Hn=1023,fi=1026,_i=1027,bo=1028,So=1029,Hi=1030,wo=1031;var Eo=1033,kr=33776,Br=33777,zr=33778,Hr=33779,To=35840,Ao=35841,Ro=35842,Co=35843,Po=36196,Io=37492,Lo=37496,Do=37488,No=37489,Vr=37490,Uo=37491,Fo=37808,Oo=37809,ko=37810,Bo=37811,zo=37812,Ho=37813,Vo=37814,Go=37815,Wo=37816,Xo=37817,$o=37818,qo=37819,Yo=37820,Zo=37821,Jo=36492,Ko=36494,jo=36495,Qo=36283,el=36284,Gr=36285,tl=36286;var cr=2300,Wa=2301,Na=2302,$l=2303,ql=2400,Yl=2401,Zl=2402;var gu=3200;var Wr=0,xu=1,yi="",qt="srgb",hr="srgb-linear",ur="linear",ut="srgb";var Ua=7680;var _u=519,yu=512,vu=513,Mu=514,_c=515,bu=516,Su=517,yc=518,vc=519,wu=35044;var Mc="300 es",En=2e3,Ps=2001;function Bf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function dr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Eu(){let n=dr("canvas");return n.style.display="block",n}var xh={},Is=null;function bc(...n){let e="THREE."+n.shift();Is?Is("log",e,...n):console.log(e,...n)}function Tu(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=Tu(n);let e="THREE."+n.shift();if(Is)Is("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function We(...n){n=Tu(n);let e="THREE."+n.shift();if(Is)Is("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function lr(...n){let e=n.join(" ");e in xh||(xh[e]=!0,He(...n))}function Au(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Ru={[Fa]:Fa,[ka]:Ha,[Ba]:Ba,[Cs]:za,[Oa]:Oa,[Ha]:ka,[Va]:Va,[za]:Cs},Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sl=Math.PI/180,Xa=180/Math.PI;function Xr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function Hf(n,e){return(n%e+e)%e}function wl(n,e,t){return(1-t)*n+t*e}function Cu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Sc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Vf(n,e){if(e.constructor===Float32Array)return n;let t=Sc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Gf(n,e){if(e.constructor===Float32Array)return n;let t=Sc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Rc=class Rc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rc.prototype.isVector2=!0;var Ye=Rc,Tn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(h!==v||l!==d||c!==f||u!==g){let p=l*d+c*f+u*g+h*v;p<0&&(d=-d,f=-f,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){let _=Math.acos(p),T=Math.sin(_);m=Math.sin(m*_)/T,o=Math.sin(o*_)/T,l=l*m+d*o,c=c*m+f*o,u=u*m+g*o,h=h*m+v*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+g*o,h=h*m+v*o;let _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Cc=class Cc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_h.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return El.copy(this).projectOnVector(e),this.sub(El)}reflect(e){return this.sub(El.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cc.prototype.isVector3=!0;var B=Cc,El=new B,_h=new Tn,Pc=class Pc{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],v=s[0],p=s[3],m=s[6],_=s[1],T=s[4],y=s[7],M=s[2],E=s[5],x=s[8];return r[0]=a*v+o*_+l*M,r[3]=a*p+o*T+l*E,r[6]=a*m+o*y+l*x,r[1]=c*v+u*_+h*M,r[4]=c*p+u*T+h*E,r[7]=c*m+u*y+h*x,r[2]=d*v+f*_+g*M,r[5]=d*p+f*T+g*E,r[8]=d*m+f*y+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=t*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pc.prototype.isMatrix3=!0;var Xe=Pc,Tl=new Xe,yh=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vh=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wf(){let n={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[hr]:{primaries:e,whitePoint:i,transfer:ur,toXYZ:yh,fromXYZ:vh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:yh,fromXYZ:vh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),n}var st=Wf();function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ps,$a=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ps===void 0&&(ps=dr("canvas")),ps.width=e.width,ps.height=e.height;let s=ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ps}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=dr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(di(t[i]/255)*255):t[i]=di(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xf=0,Ls=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Xr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Al(s[a].image)):r.push(Al(s[a]))}else r=Al(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$a.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var $f=0,Rl=new B,hn=class n extends Kn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Jn,s=Jn,r=cn,a=xi,o=Hn,l=pn,c=n.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Xr(),this.name="",this.source=new Ls(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=uc;hn.DEFAULT_ANISOTROPY=1;var Ic=class Ic{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(f+1)/2,M=(m+1)/2,E=(u+d)/4,x=(h+v)/4,S=(g+p)/4;return T>y&&T>M?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=E/i,r=x/i):y>M?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=S/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=x/r,s=S/r),this.set(i,s,r,t),this}let _=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(h-v)/_,this.z=(d-u)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ic.prototype.isVector4=!0;var At=Ic,qa=class extends Kn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new hn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ls(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends qa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},fr=class extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ya=class extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var mo=class mo{constructor(e,t,i,s,r,a,o,l,c,u,h,d,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,d,f,g,v,p)}set(e,t,i,s,r,a,o,l,c,u,h,d,f,g,v,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),a=1/ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qf,e,Yf)}lookAt(e,t,i){let s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ti.crossVectors(i,gn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ti.crossVectors(i,gn)),Ti.normalize(),ua.crossVectors(gn,Ti),s[0]=Ti.x,s[4]=ua.x,s[8]=gn.x,s[1]=Ti.y,s[5]=ua.y,s[9]=gn.y,s[2]=Ti.z,s[6]=ua.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],v=i[6],p=i[10],m=i[14],_=i[3],T=i[7],y=i[11],M=i[15],E=s[0],x=s[4],S=s[8],P=s[12],A=s[1],D=s[5],F=s[9],W=s[13],L=s[2],Z=s[6],Q=s[10],Y=s[14],se=s[3],K=s[7],ne=s[11],ee=s[15];return r[0]=a*E+o*A+l*L+c*se,r[4]=a*x+o*D+l*Z+c*K,r[8]=a*S+o*F+l*Q+c*ne,r[12]=a*P+o*W+l*Y+c*ee,r[1]=u*E+h*A+d*L+f*se,r[5]=u*x+h*D+d*Z+f*K,r[9]=u*S+h*F+d*Q+f*ne,r[13]=u*P+h*W+d*Y+f*ee,r[2]=g*E+v*A+p*L+m*se,r[6]=g*x+v*D+p*Z+m*K,r[10]=g*S+v*F+p*Q+m*ne,r[14]=g*P+v*W+p*Y+m*ee,r[3]=_*E+T*A+y*L+M*se,r[7]=_*x+T*D+y*Z+M*K,r[11]=_*S+T*F+y*Q+M*ne,r[15]=_*P+T*W+y*Y+M*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15],_=l*f-c*d,T=o*f-c*h,y=o*d-l*h,M=a*f-c*u,E=a*d-l*u,x=a*h-o*u;return t*(v*_-p*T+m*y)-i*(g*_-p*M+m*E)+s*(g*T-v*M+m*x)-r*(g*y-v*E+p*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],_=t*o-i*a,T=t*l-s*a,y=t*c-r*a,M=i*l-s*o,E=i*c-r*o,x=s*c-r*l,S=u*v-h*g,P=u*p-d*g,A=u*m-f*g,D=h*p-d*v,F=h*m-f*v,W=d*m-f*p,L=_*W-T*F+y*D+M*A-E*P+x*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/L;return e[0]=(o*W-l*F+c*D)*Z,e[1]=(s*F-i*W-r*D)*Z,e[2]=(v*x-p*E+m*M)*Z,e[3]=(d*E-h*x-f*M)*Z,e[4]=(l*A-a*W-c*P)*Z,e[5]=(t*W-s*A+r*P)*Z,e[6]=(p*y-g*x-m*T)*Z,e[7]=(u*x-d*y+f*T)*Z,e[8]=(a*F-o*A+c*S)*Z,e[9]=(i*A-t*F-r*S)*Z,e[10]=(g*E-v*y+m*_)*Z,e[11]=(h*y-u*E-f*_)*Z,e[12]=(o*P-a*D-l*S)*Z,e[13]=(t*D-i*P+s*S)*Z,e[14]=(v*T-g*M-p*_)*Z,e[15]=(u*M-h*T+d*_)*Z,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,v=a*u,p=a*h,m=o*h,_=l*c,T=l*u,y=l*h,M=i.x,E=i.y,x=i.z;return s[0]=(1-(v+m))*M,s[1]=(f+y)*M,s[2]=(g-T)*M,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+m))*E,s[6]=(p+_)*E,s[7]=0,s[8]=(g+T)*x,s[9]=(p-_)*x,s[10]=(1-(d+v))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ms.set(s[0],s[1],s[2]).length(),o=ms.set(s[4],s[5],s[6]).length(),l=ms.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Nn.copy(this);let c=1/a,u=1/o,h=1/l;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,t.setFromRotationMatrix(Nn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=En,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===En)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ps)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=En,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===En)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ps)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};mo.prototype.isMatrix4=!0;var dt=mo,ms=new B,Nn=new dt,qf=new B(0,0,0),Yf=new B(1,1,1),Ti=new B,ua=new B,gn=new B,Mh=new dt,bh=new Tn,jn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bh.setFromEuler(this),this.setFromQuaternion(bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jn.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zf=0,Sh=new B,gs=new Tn,oi=new dt,da=new B,tr=new B,Jf=new B,Kf=new Tn,wh=new B(1,0,0),Eh=new B(0,1,0),Th=new B(0,0,1),Ah={type:"added"},jf={type:"removed"},xs={type:"childadded",child:null},Cl={type:"childremoved",child:null},Yt=class n extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new B,t=new jn,i=new Tn,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Xe}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Eh,e)}rotateZ(e){return this.rotateOnAxis(Th,e)}translateOnAxis(e,t){return Sh.copy(e).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Eh,e)}translateZ(e){return this.translateOnAxis(Th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?da.copy(e):da.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(tr,da,this.up):oi.lookAt(da,tr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(oi),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ah),xs.child=e,this.dispatchEvent(xs),xs.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jf),Cl.child=e,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ah),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,Jf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yt.DEFAULT_UP=new B(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vt=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qf={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,i),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Pl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=Hf(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Pl(a,r,e+1/3),this.g=Pl(a,r,e),this.b=Pl(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let i=Pu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return st.workingToColorSpace(tn.copy(this),e),Math.round(at(tn.r*255,0,255))*65536+Math.round(at(tn.g*255,0,255))*256+Math.round(at(tn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(tn.copy(this),t);let i=tn.r,s=tn.g,r=tn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=qt){st.workingToColorSpace(tn.copy(this),e);let t=tn.r,i=tn.g,s=tn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(fa);let i=wl(Ai.h,fa.h,t),s=wl(Ai.s,fa.s,t),r=wl(Ai.l,fa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new ke;ke.NAMES=Pu;var mr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gr=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Un=new B,li=new B,Il=new B,ci=new B,_s=new B,ys=new B,Rh=new B,Ll=new B,Dl=new B,Nl=new B,Ul=new At,Fl=new At,Ol=new At,Ii=class n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Un.subVectors(e,t),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Un.subVectors(s,t),li.subVectors(i,t),Il.subVectors(e,t);let a=Un.dot(Un),o=Un.dot(li),l=Un.dot(Il),c=li.dot(li),u=li.dot(Il),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ul.setScalar(0),Fl.setScalar(0),Ol.setScalar(0),Ul.fromBufferAttribute(e,t),Fl.fromBufferAttribute(e,i),Ol.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ul,r.x),a.addScaledVector(Fl,r.y),a.addScaledVector(Ol,r.z),a}static isFrontFacing(e,t,i,s){return Un.subVectors(i,t),li.subVectors(e,t),Un.cross(li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Un.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;_s.subVectors(s,i),ys.subVectors(r,i),Ll.subVectors(e,i);let l=_s.dot(Ll),c=ys.dot(Ll);if(l<=0&&c<=0)return t.copy(i);Dl.subVectors(e,s);let u=_s.dot(Dl),h=ys.dot(Dl);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(i).addScaledVector(_s,a);Nl.subVectors(e,r);let f=_s.dot(Nl),g=ys.dot(Nl);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ys,o);let p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Rh.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Rh,o);let m=1/(p+v+d);return a=v*m,o=d*m,t.copy(i).addScaledVector(_s,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pa.copy(i.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),ma.subVectors(this.max,nr),vs.subVectors(e.a,nr),Ms.subVectors(e.b,nr),bs.subVectors(e.c,nr),Ri.subVectors(Ms,vs),Ci.subVectors(bs,Ms),Yi.subVectors(vs,bs);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Yi.z,Yi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Yi.z,0,-Yi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Yi.y,Yi.x,0];return!kl(t,vs,Ms,bs,ma)||(t=[1,0,0,0,1,0,0,0,1],!kl(t,vs,Ms,bs,ma))?!1:(ga.crossVectors(Ri,Ci),t=[ga.x,ga.y,ga.z],kl(t,vs,Ms,bs,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hi=[new B,new B,new B,new B,new B,new B,new B,new B],Fn=new B,pa=new Qn,vs=new B,Ms=new B,bs=new B,Ri=new B,Ci=new B,Yi=new B,nr=new B,ma=new B,ga=new B,Zi=new B;function kl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Zi.fromArray(n,r);let o=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),u=i.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var kt=new B,xa=new Ye,ep=0,_n=class extends Kn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ep++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wu,this.updateRanges=[],this.gpuType=An,this.version=0,this._normalizationScale=e!==void 0?Sc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Vf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Gf(e,this.array)}};var xr=class extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var _r=class extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var rt=class extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}},tp=new Qn,ir=new B,Bl=new B,pi=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):tp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);let t=ir.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ir,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Bl)),this.expandByPoint(ir.copy(e.center).sub(Bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},np=0,wn=new dt,zl=new Yt,Ss=new B,xn=new Qn,sr=new Qn,Wt=new B,Bt=class n extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bf(e)?_r:xr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return zl.lookAt(e),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(xn.min,sr.min),xn.expandByPoint(Wt),Wt.addVectors(xn.max,sr.max),xn.expandByPoint(Wt)):(xn.expandByPoint(sr.min),xn.expandByPoint(sr.max))}xn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Wt.fromBufferAttribute(o,c),l&&(Ss.fromBufferAttribute(e,c),Wt.add(Ss)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new _n(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new B,l[P]=new B;let u=new B,h=new B,d=new B,f=new Ye,g=new Ye,v=new Ye,p=new B,m=new B;function _(P,A,D){c[P]=c[A]=c[D]=1,u.fromBufferAttribute(i,P),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,D),f.fromBufferAttribute(r,P),g.fromBufferAttribute(r,A),v.fromBufferAttribute(r,D),h.sub(u),d.sub(u),g.sub(f),v.sub(f);let F=1/(g.x*v.y-v.x*g.y);isFinite(F)&&(p.copy(h).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(F),m.copy(d).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(F),o[P].add(p),o[A].add(p),o[D].add(p),l[P].add(m),l[A].add(m),l[D].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,A=T.length;P<A;++P){let D=T[P],F=D.start,W=D.count;for(let L=F,Z=F+W;L<Z;L+=3)_(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let y=new B,M=new B,E=new B,x=new B;function S(P){E.fromBufferAttribute(s,P),x.copy(E);let A=o[P];y.copy(A),y.sub(E.multiplyScalar(E.dot(A))).normalize(),M.crossVectors(x,A);let F=M.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,F)}for(let P=0,A=i.count;P<A;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new _n(d,u,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Hl=new B,ip=new B,sp=new Xe,On=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Hl.subVectors(i,t).cross(ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Hl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||sp.getNormalMatrix(e),s=this.coplanarPoint(Hl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rp=0,ei=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=Os,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ua,this.stencilZFail=Ua,this.stencilZPass=Ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new On().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ui=new B,Vl=new B,_a=new B,ya=new B,yr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Vl.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),ya.copy(this.origin).sub(Vl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(_a),o=ya.dot(this.direction),l=-ya.dot(_a),c=ya.lengthSq(),u=Math.abs(1-a*a),h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Vl).addScaledVector(_a,d),f}intersectSphere(e,t){if(e.radius<0)return null;ui.subVectors(e.center,this.origin);let i=ui.dot(this.direction),s=ui.dot(ui)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,p=t.z-a.z,m=i.x-a.x,_=i.y-a.y,T=i.z-a.z,y=Math.abs(l),M=Math.abs(c),E=Math.abs(u),x,S,P,A,D,F,W,L,Z,Q,Y,se;if(y>=M&&y>=E?(P=l,F=h,Z=g,se=m,l>=0?(x=c,S=u,A=d,D=f,W=v,L=p,Q=_,Y=T):(x=u,S=c,A=f,D=d,W=p,L=v,Q=T,Y=_)):M>=E?(P=c,F=d,Z=v,se=_,c>=0?(x=u,S=l,A=f,D=h,W=p,L=g,Q=T,Y=m):(x=l,S=u,A=h,D=f,W=g,L=p,Q=m,Y=T)):(P=u,F=f,Z=p,se=T,u>=0?(x=l,S=c,A=h,D=d,W=g,L=v,Q=m,Y=_):(x=c,S=l,A=d,D=h,W=v,L=g,Q=_,Y=m)),P===0)return null;let K=x/P,ne=S/P,ee=1/P,ge=A-K*F,Ue=D-ne*F,te=W-K*Z,_e=L-ne*Z,we=Q-K*se,j=Y-ne*se,k=we*_e-j*te,oe=ge*j-Ue*we,ze=te*Ue-_e*ge;if(s){if(k<0||oe<0||ze<0)return null}else if((k<0||oe<0||ze<0)&&(k>0||oe>0||ze>0))return null;let me=k+oe+ze;if(me===0)return null;let Se=ee*(k*F+oe*Z+ze*se);return(me>0?Se<0:Se>0)?null:this.at(Se/me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Et=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ch=new dt,Ji=new yr,va=new pi,Ph=new B,Ma=new B,ba=new B,Sa=new B,Gl=new B,wa=new B,Ih=new B,Ea=new B,fe=class extends Yt{constructor(e=new Bt,t=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(Gl.fromBufferAttribute(h,e),a?wa.addScaledVector(Gl,u):wa.addScaledVector(Gl.sub(t),u))}t.add(wa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(va.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(va,Ph)===null||Ji.origin.distanceToSquared(Ph)>(e.far-e.near)**2))&&(Ch.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(Ch),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),T=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,M=T;y<M;y+=3){let E=o.getX(y),x=o.getX(y+1),S=o.getX(y+2);s=Ta(this,m,e,i,c,u,h,E,x,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let _=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);s=Ta(this,a,e,i,c,u,h,_,T,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,M=T;y<M;y+=3){let E=y,x=y+1,S=y+2;s=Ta(this,m,e,i,c,u,h,E,x,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let _=p,T=p+1,y=p+2;s=Ta(this,a,e,i,c,u,h,_,T,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function ap(n,e,t,i,s,r,a,o){let l;if(e.side===un?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===zi,o),l===null)return null;Ea.copy(o),Ea.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ea);return c<t.near||c>t.far?null:{distance:c,point:Ea.clone(),object:n}}function Ta(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ma),n.getVertexPosition(l,ba),n.getVertexPosition(c,Sa);let u=ap(n,e,t,i,Ma,ba,Sa,Ih);if(u){let h=new B;Ii.getBarycoord(Ih,Ma,ba,Sa,h),s&&(u.uv=Ii.getInterpolatedAttribute(s,o,l,c,h,new Ye)),r&&(u.uv1=Ii.getInterpolatedAttribute(r,o,l,c,h,new Ye)),a&&(u.normal=Ii.getInterpolatedAttribute(a,o,l,c,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new B,materialIndex:0};Ii.getNormal(Ma,ba,Sa,d.normal),u.face=d,u.barycoord=h}return u}var vr=class extends hn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Xt,u=Xt,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mr=class extends _n{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ws=new dt,Lh=new dt,Aa=[],Dh=new Qn,op=new dt,rr=new fe,ar=new pi,ji=class extends fe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,op)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ws),Dh.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(Dh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ws),ar.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(i),e.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),Lh.multiplyMatrices(i,ws),rr.matrixWorld=Lh,rr.raycast(e,Aa);for(let a=0,o=Aa.length;a<o;a++){let l=Aa[a];l.instanceId=r,l.object=this,t.push(l)}Aa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Mr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new vr(new Float32Array(s*this.count),s,this.count,bo,An));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ki=new pi,lp=new Ye(.5,.5),Ra=new B,Di=class{constructor(e=new On,t=new On,i=new On,s=new On,r=new On,a=new On){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=En,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],_=r[12],T=r[13],y=r[14],M=r[15];if(s[0].setComponents(c-a,f-u,m-g,M-_).normalize(),s[1].setComponents(c+a,f+u,m+g,M+_).normalize(),s[2].setComponents(c+o,f+h,m+v,M+T).normalize(),s[3].setComponents(c-o,f-h,m-v,M-T).normalize(),i)s[4].setComponents(l,d,p,y).normalize(),s[5].setComponents(c-l,f-d,m-p,M-y).normalize();else if(s[4].setComponents(c-l,f-d,m-p,M-y).normalize(),t===En)s[5].setComponents(c+l,f+d,m+p,M+y).normalize();else if(t===Ps)s[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){Ki.center.set(0,0,0);let t=lp.distanceTo(e.center);return Ki.radius=.7071067811865476+t,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ra.x=s.normal.x>0?e.max.x:e.min.x,Ra.y=s.normal.y>0?e.max.y:e.min.y,Ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Nh=new dt,Za=class n{constructor(){this.coordinateSystem=En,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Nh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Di),i[s].setFromProjectionMatrix(Nh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Di),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Ni=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ja=new B,Ka=new B,Uh=new dt,or=new yr,Ca=new pi,Wl=new B,Fh=new B,ja=class extends Yt{constructor(e=new Bt,t=new Ni){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ja.fromBufferAttribute(t,s-1),Ka.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ja.distanceTo(Ka);e.setAttribute("lineDistance",new rt(i,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,e.ray.intersectsSphere(Ca)===!1)return;Uh.copy(s).invert(),or.copy(e.ray).applyMatrix4(Uh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=c){let m=u.getX(v),_=u.getX(v+1),T=Pa(this,e,or,l,m,_,v);T&&t.push(T)}if(this.isLineLoop){let v=u.getX(g-1),p=u.getX(f),m=Pa(this,e,or,l,v,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=c){let m=Pa(this,e,or,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=Pa(this,e,or,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Pa(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(Ja.fromBufferAttribute(o,s),Ka.fromBufferAttribute(o,r),t.distanceSqToSegment(Ja,Ka,Wl,Fh)>i)return;Wl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Wl);if(!(c<e.near||c>e.far))return{distance:c,point:Fh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Oh=new B,kh=new B,Qi=class extends ja{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Oh.fromBufferAttribute(t,s),kh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Oh.distanceTo(kh);e.setAttribute("lineDistance",new rt(i,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var br=class extends hn{constructor(e=[],t=rs,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ui=class extends hn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var mi=class extends hn{constructor(e,t,i=Bn,s,r,a,o=Xt,l=Xt,c,u=fi,h=1){if(u!==fi&&u!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ls(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Sr=class extends mi{constructor(e,t=Bn,i=rs,s,r,a=Xt,o=Xt,l,c=fi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},wr=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},je=class n extends Bt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(h,2));function g(v,p,m,_,T,y,M,E,x,S,P){let A=y/x,D=M/S,F=y/2,W=M/2,L=E/2,Z=x+1,Q=S+1,Y=0,se=0,K=new B;for(let ne=0;ne<Q;ne++){let ee=ne*D-W;for(let ge=0;ge<Z;ge++){let Ue=ge*A-F;K[v]=Ue*_,K[p]=ee*T,K[m]=L,c.push(K.x,K.y,K.z),K[v]=0,K[p]=0,K[m]=E>0?1:-1,u.push(K.x,K.y,K.z),h.push(ge/x),h.push(1-ne/S),Y+=1}}for(let ne=0;ne<S;ne++)for(let ee=0;ee<x;ee++){let ge=d+ee+Z*ne,Ue=d+ee+Z*(ne+1),te=d+(ee+1)+Z*(ne+1),_e=d+(ee+1)+Z*ne;l.push(ge,Ue,_e),l.push(Ue,te,_e),se+=6}o.addGroup(f,se,P),f+=se,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Er=class n extends Bt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=i*2+r,v=s+1,p=new B,m=new B;for(let _=0;_<=g;_++){let T=0,y=0,M=0,E=0;if(_<=i){let P=_/i,A=P*Math.PI/2;y=-u-e*Math.cos(A),M=e*Math.sin(A),E=-e*Math.cos(A),T=P*h}else if(_<=i+r){let P=(_-i)/r;y=-u+P*t,M=e,E=0,T=h+P*d}else{let P=(_-i-r)/i,A=P*Math.PI/2;y=u+e*Math.sin(A),M=e*Math.cos(A),E=e*Math.sin(A),T=h+d+P*h}let x=Math.max(0,Math.min(1,T/f)),S=0;_===0?S=.5/s:_===g&&(S=-.5/s);for(let P=0;P<=s;P++){let A=P/s,D=A*Math.PI*2,F=Math.sin(D),W=Math.cos(D);m.x=-M*W,m.y=y,m.z=M*F,o.push(m.x,m.y,m.z),p.set(-M*W,E,M*F),p.normalize(),l.push(p.x,p.y,p.z),c.push(A+S,x)}if(_>0){let P=(_-1)*v;for(let A=0;A<s;A++){let D=P+A,F=P+A+1,W=_*v+A,L=_*v+A+1;a.push(D,F,W),a.push(F,L,W)}}}this.setIndex(a),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},kn=class n extends Bt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new B,u=new Ye;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=i+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},mt=class n extends Bt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,v=[],p=i/2,m=0;_(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new rt(h,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(f,2));function _(){let y=new B,M=new B,E=0,x=(t-e)/i;for(let S=0;S<=r;S++){let P=[],A=S/r,D=A*(t-e)+e;for(let F=0;F<=s;F++){let W=F/s,L=W*l+o,Z=Math.sin(L),Q=Math.cos(L);M.x=D*Z,M.y=-A*i+p,M.z=D*Q,h.push(M.x,M.y,M.z),y.set(Z,x,Q).normalize(),d.push(y.x,y.y,y.z),f.push(W,1-A),P.push(g++)}v.push(P)}for(let S=0;S<s;S++)for(let P=0;P<r;P++){let A=v[P][S],D=v[P+1][S],F=v[P+1][S+1],W=v[P][S+1];(e>0||P!==0)&&(u.push(A,D,W),E+=3),(t>0||P!==r-1)&&(u.push(D,F,W),E+=3)}c.addGroup(m,E,0),m+=E}function T(y){let M=g,E=new Ye,x=new B,S=0,P=y===!0?e:t,A=y===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,p*A,0),d.push(0,A,0),f.push(.5,.5),g++;let D=g;for(let F=0;F<=s;F++){let L=F/s*l+o,Z=Math.cos(L),Q=Math.sin(L);x.x=P*Q,x.y=p*A,x.z=P*Z,h.push(x.x,x.y,x.z),d.push(0,A,0),E.x=Z*.5+.5,E.y=Q*.5*A+.5,f.push(E.x,E.y),g++}for(let F=0;F<s;F++){let W=M+F,L=D+F;y===!0?u.push(L,L+1,W):u.push(L+1,L,W),S+=3}c.addGroup(m,S,y===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},es=class n extends mt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qa=class n extends Bt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let T=new B,y=new B,M=new B;for(let E=0;E<t.length;E+=3)f(t[E+0],T),f(t[E+1],y),f(t[E+2],M),l(T,y,M,_)}function l(_,T,y,M){let E=M+1,x=[];for(let S=0;S<=E;S++){x[S]=[];let P=_.clone().lerp(y,S/E),A=T.clone().lerp(y,S/E),D=E-S;for(let F=0;F<=D;F++)F===0&&S===E?x[S][F]=P:x[S][F]=P.clone().lerp(A,F/D)}for(let S=0;S<E;S++)for(let P=0;P<2*(E-S)-1;P++){let A=Math.floor(P/2);P%2===0?(d(x[S][A+1]),d(x[S+1][A]),d(x[S][A])):(d(x[S][A+1]),d(x[S+1][A+1]),d(x[S+1][A]))}}function c(_){let T=new B;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(_),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function u(){let _=new B;for(let T=0;T<r.length;T+=3){_.x=r[T+0],_.y=r[T+1],_.z=r[T+2];let y=p(_)/2/Math.PI+.5,M=m(_)/Math.PI+.5;a.push(y,1-M)}g(),h()}function h(){for(let _=0;_<a.length;_+=6){let T=a[_+0],y=a[_+2],M=a[_+4],E=Math.max(T,y,M),x=Math.min(T,y,M);E>.9&&x<.1&&(T<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),M<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,T){let y=_*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function g(){let _=new B,T=new B,y=new B,M=new B,E=new Ye,x=new Ye,S=new Ye;for(let P=0,A=0;P<r.length;P+=9,A+=6){_.set(r[P+0],r[P+1],r[P+2]),T.set(r[P+3],r[P+4],r[P+5]),y.set(r[P+6],r[P+7],r[P+8]),E.set(a[A+0],a[A+1]),x.set(a[A+2],a[A+3]),S.set(a[A+4],a[A+5]),M.copy(_).add(T).add(y).divideScalar(3);let D=p(M);v(E,A+0,_,D),v(x,A+2,T,D),v(S,A+4,y,D)}}function v(_,T,y,M){M<0&&_.x===1&&(a[T]=_.x-1),y.x===0&&y.z===0&&(a[T]=M/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Fi=class n extends Qa{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var gt=class n extends Bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],v=[],p=[];for(let m=0;m<u;m++){let _=m*d-a;for(let T=0;T<c;T++){let y=T*h-r;g.push(y,-_,0),v.push(0,0,1),p.push(T/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let T=_+c*m,y=_+c*(m+1),M=_+1+c*(m+1),E=_+1+c*m;f.push(T,y,E),f.push(y,M,E)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(v,3)),this.setAttribute("uv",new rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},gi=class n extends Bt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new B,g=new Ye;for(let v=0;v<=s;v++){for(let p=0;p<=i;p++){let m=r+p/i*a;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<s;v++){let p=v*(i+1);for(let m=0;m<i;m++){let _=m+p,T=_,y=_+i+1,M=_+i+2,E=_+1;o.push(T,y,E),o.push(y,M,E)}}this.setIndex(o),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ts=class n extends Bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new B,d=new B,f=[],g=[],v=[],p=[];for(let m=0;m<=i;m++){let _=[],T=m/i,y=a+T*o,M=e*Math.cos(y),E=Math.sqrt(e*e-M*M),x=0;m===0&&a===0?x=.5/t:m===i&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let P=S/t,A=s+P*r;h.x=-E*Math.cos(A),h.y=M,h.z=E*Math.sin(A),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),p.push(P+x,1-T),_.push(c++)}u.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let T=u[m][_+1],y=u[m][_],M=u[m+1][_],E=u[m+1][_+1];(m!==0||a>0)&&f.push(T,y,E),(m!==i-1||l<Math.PI)&&f.push(y,M,E)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(v,3)),this.setAttribute("uv",new rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function os(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Bh(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Bh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function sn(n){let e={};for(let t=0;t<n.length;t++){let i=os(n[t]);for(let s in i)e[s]=i[s]}return e}function Bh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function cp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var Iu={clone:os,merge:sn},hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=cp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"v3":this.uniforms[i].value=new B().fromArray(s.value);break;case"v4":this.uniforms[i].value=new At().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new dt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},eo=class extends ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Tr=class extends ei{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ke(16777215),this.specular=new ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wr,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Ur,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ze=class extends ei{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wr,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Ur,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},to=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},no=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Es(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ia(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Oi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},io=class extends Oi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ql,endingEnd:ql}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yl:r=e,o=2*t-i;break;case Zl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yl:a=e,l=2*i-t;break;case Zl:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,_=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,T=(-1-f)*p+(1.5+f)*v+.5*g,y=f*p-f*v;for(let M=0;M!==o;++M)r[M]=m*a[u+M]+_*a[c+M]+T*a[l+M]+y*a[h+M];return r}},so=class extends Oi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},ro=class extends Oi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ao=class extends Oi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(i-t)/(s-t),v=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*v+a[l+p]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[c+g],p=a[l+g],m=f*d+g*2,_=h[m],T=h[m+1],y=e*d+g*2,M=u[y],E=u[y+1],x=fp(i,t,_,M,s);r[g]=Lu(x,v,T,E,p)}return r}};function Lu(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function dp(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function fp(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Lu(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=dp(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var vn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Es(t,this.TimeBufferType),this.values=Es(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Es(e.times,Array),values:Es(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Ia(e.settings)&&(i.settings={inTangents:Es(e.settings.inTangents,Array),outTangents:Es(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new so(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ao(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case cr:t=this.InterpolantFactoryMethodDiscrete;break;case Wa:t=this.InterpolantFactoryMethodLinear;break;case Na:t=this.InterpolantFactoryMethodSmooth;break;case $l:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return He("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return Na;case this.InterpolantFactoryMethodBezier:return $l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Ia(this.settings)&&(zh(this.settings.inTangents,e),zh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Ia(this.settings)&&(Hh(this.settings.inTangents,e),Hh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){We("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&zf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Na,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*i,d=h-i,f=h+i;for(let g=0;g!==i;++g){let v=t[h+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ia(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function zh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Hh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Wa;var ki=class extends vn{constructor(e,t,i){super(e,t,i)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=cr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}};oo.prototype.ValueTypeName="color";var lo=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}};lo.prototype.ValueTypeName="number";var co=class extends Oi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Tn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ar=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new co(this.times,this.values,this.getValueSize(),e)}};Ar.prototype.ValueTypeName="quaternion";Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends vn{constructor(e,t,i){super(e,t,i)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=cr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ho=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}};ho.prototype.ValueTypeName="vector";var uo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Du=new uo,fo=class{constructor(e){this.manager=e!==void 0?e:Du,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ns=class extends Yt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Rr=class extends Ns{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Xl=new dt,Vh=new B,Gh=new B,Cr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Di,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vh),Gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Xl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Xl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ps||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},La=new B,Da=new Tn,Zn=new B,Pr=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(La,Da,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Da,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(La,Da,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Da,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Pi=new B,Wh=new Ye,Xh=new Ye,nn=class extends Pr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xa*2*Math.atan(Math.tan(Sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,Wh,Xh),t.subVectors(Xh,Wh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Jl=class extends Cr{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}},Ir=class extends Ns{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Jl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Lr=class extends Pr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kl=class extends Cr{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Dr=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Kl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ts=-90,As=1,Us=class extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(Ts,As,e,t);s.layers=this.layers,this.add(s);let r=new nn(Ts,As,e,t);r.layers=this.layers,this.add(r);let a=new nn(Ts,As,e,t);a.layers=this.layers,this.add(a);let o=new nn(Ts,As,e,t);o.layers=this.layers,this.add(o);let l=new nn(Ts,As,e,t);l.layers=this.layers,this.add(l);let c=new nn(Ts,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===En)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},po=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ec="\\[\\]\\.:\\/",pp=new RegExp("["+Ec+"]","g"),Tc="[^"+Ec+"]",mp="[^"+Ec.replace("\\.","")+"]",gp=/((?:WC+[\/:])*)/.source.replace("WC",Tc),xp=/(WCOD+)?/.source.replace("WCOD",mp),_p=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc),yp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc),vp=new RegExp("^"+gp+xp+_p+yp+"$"),Mp=["material","materials","bones","map"],jl=class{constructor(e,t,i){let s=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pp,"")}static parseTrackName(e){let t=vp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Mp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=jl;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vv=new Float32Array(1);var Lc=class Lc{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Lc.prototype.isMatrix2=!0;var Ql=Lc;function Ac(n,e,t,i){let s=bp(i);switch(t){case gc:return n*e;case bo:return n*e/s.components*s.byteLength;case So:return n*e/s.components*s.byteLength;case Hi:return n*e*2/s.components*s.byteLength;case wo:return n*e*2/s.components*s.byteLength;case xc:return n*e*3/s.components*s.byteLength;case Hn:return n*e*4/s.components*s.byteLength;case Eo:return n*e*4/s.components*s.byteLength;case kr:case Br:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zr:case Hr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ao:case Co:return Math.max(n,16)*Math.max(e,8)/4;case To:case Ro:return Math.max(n,8)*Math.max(e,8)/2;case Po:case Io:case Do:case No:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Vr:case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ko:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Go:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $o:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jo:case Ko:case jo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qo:case el:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Gr:case tl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bp(n){switch(n){case pn:case dc:return{byteLength:1,components:1};case Bs:case fc:case zn:return{byteLength:2,components:1};case vo:case Mo:return{byteLength:2,components:4};case Bn:case yo:case An:return{byteLength:4,components:1};case pc:case mc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function td(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function wp(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let v=h[f];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
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
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dp=`#ifdef USE_BATCHING
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
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Bp=`#ifdef USE_BUMPMAP
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yp=`#define PI 3.141592653589793
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
} // validated`,Zp=`vec3 transformedNormal = objectNormal;
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
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,um=`#ifdef USE_GRADIENTMAP
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
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gm=`#ifdef USE_ENVMAP
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
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
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
#endif`,bm=`uniform sampler2D dfgLUT;
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
}`,Sm=`
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nm=`#if defined( USE_POINTS_UV )
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
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,km=`#if defined( USE_MORPHCOLORS )
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
#endif`,Bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`#ifdef USE_MORPHTARGETS
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
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qm=`#ifdef USE_NORMALMAP
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
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c0=`float getShadowMask() {
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
}`,h0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,p0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E0=`uniform sampler2D t2D;
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`uniform float backgroundBlurriness;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`#include <common>
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
}`,I0=`#if DEPTH_PACKING == 3200
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
}`,L0=`#define DISTANCE
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
}`,D0=`#define DISTANCE
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`uniform float scale;
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
}`,O0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#define LAMBERT
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
}`,H0=`#define LAMBERT
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
}`,V0=`#define MATCAP
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
}`,G0=`#define MATCAP
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
}`,W0=`#define NORMAL
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
}`,X0=`#define NORMAL
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
}`,$0=`#define PHONG
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
}`,q0=`#define PHONG
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
}`,Y0=`#define STANDARD
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
}`,Z0=`#define STANDARD
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
}`,J0=`#define TOON
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
}`,K0=`#define TOON
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
}`,j0=`uniform float size;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,tg=`uniform vec3 color;
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
}`,ng=`uniform float rotation;
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
}`,ig=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Ep,alphahash_pars_fragment:Tp,alphamap_fragment:Ap,alphamap_pars_fragment:Rp,alphatest_fragment:Cp,alphatest_pars_fragment:Pp,aomap_fragment:Ip,aomap_pars_fragment:Lp,batching_pars_vertex:Dp,batching_vertex:Np,begin_vertex:Up,beginnormal_vertex:Fp,bsdfs:Op,iridescence_fragment:kp,bumpmap_pars_fragment:Bp,clipping_planes_fragment:zp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Gp,color_fragment:Wp,color_pars_fragment:Xp,color_pars_vertex:$p,color_vertex:qp,common:Yp,defaultnormal_vertex:Zp,displacementmap_pars_vertex:Jp,displacementmap_vertex:Kp,emissivemap_fragment:jp,emissivemap_pars_fragment:Qp,colorspace_fragment:em,colorspace_pars_fragment:tm,envmap_fragment:nm,envmap_common_pars_fragment:im,envmap_pars_fragment:sm,envmap_pars_vertex:rm,envmap_physical_pars_fragment:gm,envmap_vertex:am,fog_vertex:om,fog_pars_vertex:lm,fog_fragment:cm,fog_pars_fragment:hm,gradientmap_pars_fragment:um,lightmap_pars_fragment:dm,lights_lambert_fragment:fm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:xm,lights_toon_pars_fragment:_m,lights_phong_fragment:ym,lights_phong_pars_fragment:vm,lights_physical_fragment:Mm,lights_physical_pars_fragment:bm,lights_fragment_begin:Sm,lights_fragment_maps:wm,lights_fragment_end:Em,lightprobes_pars_fragment:Tm,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Cm,logdepthbuf_vertex:Pm,map_fragment:Im,map_pars_fragment:Lm,map_particle_fragment:Dm,map_particle_pars_fragment:Nm,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Fm,morphinstance_vertex:Om,morphcolor_vertex:km,morphnormal_vertex:Bm,morphtarget_pars_vertex:zm,morphtarget_vertex:Hm,normal_fragment_begin:Vm,normal_fragment_maps:Gm,normal_pars_fragment:Wm,normal_pars_vertex:Xm,normal_vertex:$m,normalmap_pars_fragment:qm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:Zm,clearcoat_pars_fragment:Jm,iridescence_pars_fragment:Km,opaque_fragment:jm,packing:Qm,premultiplied_alpha_fragment:e0,project_vertex:t0,dithering_fragment:n0,dithering_pars_fragment:i0,roughnessmap_fragment:s0,roughnessmap_pars_fragment:r0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:o0,shadowmap_vertex:l0,shadowmask_pars_fragment:c0,skinbase_vertex:h0,skinning_pars_vertex:u0,skinning_vertex:d0,skinnormal_vertex:f0,specularmap_fragment:p0,specularmap_pars_fragment:m0,tonemapping_fragment:g0,tonemapping_pars_fragment:x0,transmission_fragment:_0,transmission_pars_fragment:y0,uv_pars_fragment:v0,uv_pars_vertex:M0,uv_vertex:b0,worldpos_vertex:S0,background_vert:w0,background_frag:E0,backgroundCube_vert:T0,backgroundCube_frag:A0,cube_vert:R0,cube_frag:C0,depth_vert:P0,depth_frag:I0,distance_vert:L0,distance_frag:D0,equirect_vert:N0,equirect_frag:U0,linedashed_vert:F0,linedashed_frag:O0,meshbasic_vert:k0,meshbasic_frag:B0,meshlambert_vert:z0,meshlambert_frag:H0,meshmatcap_vert:V0,meshmatcap_frag:G0,meshnormal_vert:W0,meshnormal_frag:X0,meshphong_vert:$0,meshphong_frag:q0,meshphysical_vert:Y0,meshphysical_frag:Z0,meshtoon_vert:J0,meshtoon_frag:K0,points_vert:j0,points_frag:Q0,shadow_vert:eg,shadow_frag:tg,sprite_vert:ng,sprite_frag:ig},Ee={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},si={basic:{uniforms:sn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:sn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:sn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:sn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:sn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:sn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:sn([Ee.points,Ee.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:sn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:sn([Ee.common,Ee.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:sn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:sn([Ee.sprite,Ee.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:sn([Ee.common,Ee.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:sn([Ee.lights,Ee.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};si.physical={uniforms:sn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var nl={r:0,b:0,g:0},sg=new dt,nd=new Xe;nd.set(-1,0,0,0,1,0,0,0,1);function rg(n,e,t,i,s,r){let a=new ke(0),o=s===!0?0:1,l,c,u=null,h=0,d=null;function f(_){let T=_.isScene===!0?_.background:null;if(T&&T.isTexture){let y=_.backgroundBlurriness>0;T=e.get(T,y)}return T}function g(_){let T=!1,y=f(_);y===null?p(a,o):y&&y.isColor&&(p(y,1),T=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(_,T){let y=f(T);y&&y.isCubeTexture?(c===void 0&&(c=new fe(new je(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:os(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(nd),c.material.toneMapped=st.getTransfer(y.colorSpace)!==ut,(u!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new fe(new gt(2,2),new ti({name:"BackgroundMaterial",uniforms:os(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=st.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,T){_.getRGB(nl,wc(n)),t.buffers.color.setClear(nl.r,nl.g,nl.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,T=1){a.set(_),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(a,o)},render:g,addToRenderList:v,dispose:m}}function ag(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(D,F,W,L,Z){let Q=!1,Y=h(D,L,W,F);r!==Y&&(r=Y,c(r.object)),Q=f(D,L,W,Z),Q&&g(D,L,W,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,y(D,F,W,L),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function h(D,F,W,L){let Z=L.wireframe===!0,Q=i[F.id];Q===void 0&&(Q={},i[F.id]=Q);let Y=D.isInstancedMesh===!0?D.id:0,se=Q[Y];se===void 0&&(se={},Q[Y]=se);let K=se[W.id];K===void 0&&(K={},se[W.id]=K);let ne=K[Z];return ne===void 0&&(ne=d(l()),K[Z]=ne),ne}function d(D){let F=[],W=[],L=[];for(let Z=0;Z<t;Z++)F[Z]=0,W[Z]=0,L[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,F,W,L){let Z=r.attributes,Q=F.attributes,Y=0,se=W.getAttributes();for(let K in se)if(se[K].location>=0){let ee=Z[K],ge=Q[K];if(ge===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(ge=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(ge=D.instanceColor)),ee===void 0||ee.attribute!==ge||ge&&ee.data!==ge.data)return!0;Y++}return r.attributesNum!==Y||r.index!==L}function g(D,F,W,L){let Z={},Q=F.attributes,Y=0,se=W.getAttributes();for(let K in se)if(se[K].location>=0){let ee=Q[K];ee===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));let ge={};ge.attribute=ee,ee&&ee.data&&(ge.data=ee.data),Z[K]=ge,Y++}r.attributes=Z,r.attributesNum=Y,r.index=L}function v(){let D=r.newAttributes;for(let F=0,W=D.length;F<W;F++)D[F]=0}function p(D){m(D,0)}function m(D,F){let W=r.newAttributes,L=r.enabledAttributes,Z=r.attributeDivisors;W[D]=1,L[D]===0&&(n.enableVertexAttribArray(D),L[D]=1),Z[D]!==F&&(n.vertexAttribDivisor(D,F),Z[D]=F)}function _(){let D=r.newAttributes,F=r.enabledAttributes;for(let W=0,L=F.length;W<L;W++)F[W]!==D[W]&&(n.disableVertexAttribArray(W),F[W]=0)}function T(D,F,W,L,Z,Q,Y){Y===!0?n.vertexAttribIPointer(D,F,W,Z,Q):n.vertexAttribPointer(D,F,W,L,Z,Q)}function y(D,F,W,L){v();let Z=L.attributes,Q=W.getAttributes(),Y=F.defaultAttributeValues;for(let se in Q){let K=Q[se];if(K.location>=0){let ne=Z[se];if(ne===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),ne!==void 0){let ee=ne.normalized,ge=ne.itemSize,Ue=e.get(ne);if(Ue===void 0)continue;let te=Ue.buffer,_e=Ue.type,we=Ue.bytesPerElement,j=_e===n.INT||_e===n.UNSIGNED_INT||ne.gpuType===yo;if(ne.isInterleavedBufferAttribute){let k=ne.data,oe=k.isInterleavedBuffer===!0?k.stride:k.itemSize,ze=ne.offset;if(k.isInstancedInterleavedBuffer||k.isInstancedBufferAttribute){for(let me=0;me<K.locationSize;me++)m(K.location+me,k.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let me=0;me<K.locationSize;me++)p(K.location+me);n.bindBuffer(n.ARRAY_BUFFER,te);for(let me=0;me<K.locationSize;me++)T(K.location+me,ge/K.locationSize,_e,ee,oe*we,(ze+ge/K.locationSize*me)*we,j)}else{if(ne.isInstancedBufferAttribute){for(let k=0;k<K.locationSize;k++)m(K.location+k,ne.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let k=0;k<K.locationSize;k++)p(K.location+k);n.bindBuffer(n.ARRAY_BUFFER,te);for(let k=0;k<K.locationSize;k++)T(K.location+k,ge/K.locationSize,_e,ee,ge*we,ge/K.locationSize*k*we,j)}}else if(Y!==void 0){let ee=Y[se];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(K.location,ee);break;case 3:n.vertexAttrib3fv(K.location,ee);break;case 4:n.vertexAttrib4fv(K.location,ee);break;default:n.vertexAttrib1fv(K.location,ee)}}}}_()}function M(){P();for(let D in i){let F=i[D];for(let W in F){let L=F[W];for(let Z in L){let Q=L[Z];for(let Y in Q)u(Q[Y].object),delete Q[Y];delete L[Z]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let F=i[D.id];for(let W in F){let L=F[W];for(let Z in L){let Q=L[Z];for(let Y in Q)u(Q[Y].object),delete Q[Y];delete L[Z]}}delete i[D.id]}function x(D){for(let F in i){let W=i[F];for(let L in W){let Z=W[L];if(Z[D.id]===void 0)continue;let Q=Z[D.id];for(let Y in Q)u(Q[Y].object),delete Q[Y];delete Z[D.id]}}}function S(D){for(let F in i){let W=i[F],L=D.isInstancedMesh===!0?D.id:0,Z=W[L];if(Z!==void 0){for(let Q in Z){let Y=Z[Q];for(let se in Y)u(Y[se].object),delete Y[se];delete Z[Q]}delete W[L],Object.keys(W).length===0&&delete i[F]}}}function P(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function og(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function lg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Hn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let S=x===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==pn&&x!==An&&!S&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:T,maxFragmentUniforms:y,maxSamples:M,samples:E}}function cg(n){let e=this,t=null,i=0,s=!1,r=!1,a=new On,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,m=n.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let _=r?0:i,T=_*4,y=m.clippingState||null;l.value=y,y=u(g,d,T,f);for(let M=0;M!==T;++M)y[M]=t[M];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){let v=h!==null?h.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let m=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,y=f;T!==v;++T,y+=4)a.copy(h[T]).applyMatrix4(_,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var Yr=class extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new br(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new je(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:is});r.uniforms.tEquirect.value=t;let a=new fe(s,r),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=cn),new Us(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Nu=256,hg=3,ug=20,id=256,sd=16,dg=3,fg=new B,pg=new ke,sl=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Us(1,10,null),this._boxMesh=new fe(new je(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=fg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(pg));let p=new Us(i,s,u);return p.position.copy(o),p.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=v,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Nu,Cu(e))}_fromTexture(e,t){e.mapping===rs||e.mapping===ks?this._setSize(e.image.length===0?Nu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Uu(e,!1,!1),i=Math.log2(e)-hg;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Uu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===rs||e.mapping===ks?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Fu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=mg(),this._integrationMaterial=gg());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/sd);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-dg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(id*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=xg());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Uu(n,e,t){return new Yr(n,{minFilter:xi,generateMipmaps:e,type:zn,colorSpace:hr,depthBuffer:t})}function Zr(n,e,t){return new ti({name:n,uniforms:e,vertexShader:Qe.cube_vert,fragmentShader:t,side:un,blending:is,depthTest:!1,depthWrite:!1})}function mg(){return Zr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${id}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function gg(){return Zr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:sd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xg(){return Zr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ug}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Fu(){return Zr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ou(){return Zr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _g(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===go||f===xo)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new Yr(g.height);return v.fromEquirectangularTexture(n,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===go||f===xo,v=f===rs||f===ks;if(g||v){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new sl(n)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let _=d.image;return g&&_&&_.height>0||v&&_&&l(_)?(i===null&&(i=new sl(n)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,f){return f===go?d.mapping=rs:f===xo&&(d.mapping=ks),d}function l(d){let f=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function yg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&lr("WebGLRenderer: "+i+" extension not supported."),s}}}function vg(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(e.remove(v),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function u(g){let v=g.attributes;for(let p in v)e.update(v[p],n.ARRAY_BUFFER)}function h(g){let v=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let _=v!==null?v.array.length:p.array.length/3-1,T=p.count>=65535?_r:xr,y=new T(Math.ceil(_/3)*6,1),M=y.array;if(v!==null){let x=v.array;m=v.version;for(let S=0,P=0;S<_;S+=3){let A=x[S+0],D=x[S+1],F=x[S+2];M[P++]=A,M[P++]=D,M[P++]=D,M[P++]=F,M[P++]=F,M[P++]=A}}else{m=p.version;for(let x=0,S=0;x<_;x+=3){let P=x+0,A=x+1,D=x+2;M[S++]=P,M[S++]=A,M[S++]=A,M[S++]=D,M[S++]=D,M[S++]=P}}y.version=m;let E=r.get(g);E&&e.remove(E),r.set(g,y)}function d(g){let v=r.get(g);if(v){let p=g.index;p!==null&&v.version<p.version&&h(g)}else h(g);return r.get(g)}function f(){for(let g in s){let v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function Mg(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*a),t.update(d,i,1)}function c(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,h*a,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,f);let v=0;for(let p=0;p<f;p++)v+=d[p];t.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function bg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Sg(n,e,t){let i=new WeakMap,s=new At;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==h){let P=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),v===!0&&(T=3);let y=o.attributes.position.count*T,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*M*4*h),x=new fr(E,y,M,h);x.type=An,x.needsUpdate=!0;let S=T*4;for(let A=0;A<h;A++){let D=p[A],F=m[A],W=_[A],L=y*M*4*A;for(let Z=0;Z<D.count;Z++){let Q=Z*S;f===!0&&(s.fromBufferAttribute(D,Z),E[L+Q+0]=s.x,E[L+Q+1]=s.y,E[L+Q+2]=s.z,E[L+Q+3]=0),g===!0&&(s.fromBufferAttribute(F,Z),E[L+Q+4]=s.x,E[L+Q+5]=s.y,E[L+Q+6]=s.z,E[L+Q+7]=0),v===!0&&(s.fromBufferAttribute(W,Z),E[L+Q+8]=s.x,E[L+Q+9]=s.y,E[L+Q+10]=s.z,E[L+Q+11]=W.itemSize===4?s.w:1)}}d={count:h,texture:x,size:new Ye(y,M)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function wg(n,e,t,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Eg={[rc]:"LINEAR_TONE_MAPPING",[ac]:"REINHARD_TONE_MAPPING",[oc]:"CINEON_TONE_MAPPING",[Fr]:"ACES_FILMIC_TONE_MAPPING",[cc]:"AGX_TONE_MAPPING",[hc]:"NEUTRAL_TONE_MAPPING",[lc]:"CUSTOM_TONE_MAPPING"};function Tg(n,e,t,i,s,r){let a=new yn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Bt;u.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new rt([0,2,0,0,2,0],2));let h=new eo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new fe(u,h),f=new Lr(-1,1,1,-1,0,1),g=null,v=null,p=!1,m,_=null,T=[],y=!1;this.setSize=function(M,E){a.setSize(M,E),o!==null&&o.setSize(M,E),l!==null&&l.setSize(M,E);for(let x=0;x<T.length;x++){let S=T[x];S.setSize&&S.setSize(M,E)}},this.setEffects=function(M){T=M,y=T.length>0&&T[0].isRenderPass===!0;let E=a.width,x=a.height;T.length>0&&o===null&&(o=new yn(E,x,{type:zn,depthBuffer:!1,stencilBuffer:!1}),l=new yn(E,x,{type:zn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&T.some(P=>P.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new mi(E,x),r===!0&&(c.format=_i,c.type=as)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let P=0;P<T.length;P++){let A=T[P];A.setSize&&A.setSize(E,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(M,E){if(p||M.toneMapping===ni&&T.length===0)return!1;if(_=E,E!==null){let x=E.width,S=E.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return y===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=ni,!0},this.hasRenderPass=function(){return y},this.end=function(M,E){M.toneMapping=m,p=!0;let x=a,S=o;for(let P=0;P<T.length;P++){let A=T[P];A.enabled!==!1&&(A.render(M,S,x,E),A.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(g!==M.outputColorSpace||v!==M.toneMapping){g=M.outputColorSpace,v=M.toneMapping,h.defines={},st.getTransfer(g)===ut&&(h.defines.SRGB_TRANSFER="");let P=Eg[v];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,M.setRenderTarget(_),M.render(d,f),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var rd=new hn,ad=new mi(1,1),od=new Sr(1),ld=new fr,cd=new Ya,hd=new br,ku=[],Bu=[],zu=new Float32Array(16),Hu=new Float32Array(9),Vu=new Float32Array(4);function Hs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ku[s];if(r===void 0&&(r=new Float32Array(s),ku[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function al(n,e){let t=Bu[e];t===void 0&&(t=new Int32Array(e),Bu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ag(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Rg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function Cg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function Pg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function Ig(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;Vu.set(i),n.uniformMatrix2fv(this.addr,!1,Vu),Ht(t,i)}}function Lg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;Hu.set(i),n.uniformMatrix3fv(this.addr,!1,Hu),Ht(t,i)}}function Dg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;zu.set(i),n.uniformMatrix4fv(this.addr,!1,zu),Ht(t,i)}}function Ng(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ug(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function Fg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function Og(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function kg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Bg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function zg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function Hg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function ol(n){return n.version===0&&(n.compareFunction=vc,n.needsUpdate=!0),n}function Vg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=ol(ad):r=rd,t.setTexture2D(e||r,s)}function Gg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||cd,s)}function Wg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=ol(od):r=hd,t.setTextureCube(e||r,s)}function Xg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ld,s)}function $g(n){switch(n){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Pg;case 35674:return Ig;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ng;case 35667:case 35671:return Ug;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return kg;case 36294:return Bg;case 36295:return zg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}function qg(n,e){n.uniform1fv(this.addr,e)}function Yg(n,e){let t=Hs(e,this.size,2);n.uniform2fv(this.addr,t)}function Zg(n,e){let t=Hs(e,this.size,3);n.uniform3fv(this.addr,t)}function Jg(n,e){let t=Hs(e,this.size,4);n.uniform4fv(this.addr,t)}function Kg(n,e){let t=Hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jg(n,e){let t=Hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qg(n,e){let t=Hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ex(n,e){n.uniform1iv(this.addr,e)}function tx(n,e){n.uniform2iv(this.addr,e)}function nx(n,e){n.uniform3iv(this.addr,e)}function ix(n,e){n.uniform4iv(this.addr,e)}function sx(n,e){n.uniform1uiv(this.addr,e)}function rx(n,e){n.uniform2uiv(this.addr,e)}function ax(n,e){n.uniform3uiv(this.addr,e)}function ox(n,e){n.uniform4uiv(this.addr,e)}function lx(n,e,t){let i=this.cache,s=e.length,r=al(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ol(ad):a=rd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function cx(n,e,t){let i=this.cache,s=e.length,r=al(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||cd,r[a])}function hx(n,e,t){let i=this.cache,s=e.length,r=al(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=ol(od):a=hd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function ux(n,e,t){let i=this.cache,s=e.length,r=al(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ld,r[a])}function dx(n){switch(n){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return Jg;case 35674:return Kg;case 35675:return jg;case 35676:return Qg;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ax;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return ux}}var Uc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$g(t.type)}},Fc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dx(t.type)}},Oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Dc=/(\w+)(\])?(\[|\.)?/g;function Gu(n,e){n.seq.push(e),n.map[e.id]=e}function fx(n,e,t){let i=n.name,s=i.length;for(Dc.lastIndex=0;;){let r=Dc.exec(i),a=Dc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gu(t,c===void 0?new Uc(o,n,e):new Fc(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Oc(o),Gu(t,h)),t=h}}}var zs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);fx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Wu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var px=37297,mx=0;function gx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Xu=new Xe;function xx(n){st._getMatrix(Xu,st.workingColorSpace,n);let e=`mat3( ${Xu.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case ur:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $u(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+gx(n.getShaderSource(e),o)}else return r}function _x(n,e){let t=xx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var yx={[rc]:"Linear",[ac]:"Reinhard",[oc]:"Cineon",[Fr]:"ACESFilmic",[cc]:"AgX",[hc]:"Neutral",[lc]:"Custom"};function vx(n,e){let t=yx[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var il=new B;function Mx(){st.getLuminanceCoefficients(il);let n=il.x.toFixed(4),e=il.y.toFixed(4),t=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function Sx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function qr(n){return n!==""}function qu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Yu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(n){return n.replace(Ex,Tx)}function Tx(n,e){let t=Qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return kc(t)}var Ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(n){return n.replace(Ax,Rx)}function Rx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ju(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Cx={[ns]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function Px(n){return Cx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ix={[ks]:"ENVMAP_MODE_REFRACTION"};function Lx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ix[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Dx={[Ur]:"ENVMAP_BLENDING_MULTIPLY",[fu]:"ENVMAP_BLENDING_MIX",[pu]:"ENVMAP_BLENDING_ADD"};function Nx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Dx[n.combine]||"ENVMAP_BLENDING_NONE"}function Ux(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Px(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Lx(t),h=Nx(t),d=bx(t),f=Sx(r),g=s.createProgram(),v,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(qr).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(qr).join(`
`),p.length>0&&(p+=`
`)):(v=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),p=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ni?vx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,_x("linearToOutputTexel",t.outputColorSpace),Mx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),a=kc(a),a=qu(a,t),a=Yu(a,t),o=kc(o),o=qu(o,t),o=Yu(o,t),a=Zu(a),o=Zu(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=m+v+a,T=m+p+o,y=Wu(s,s.VERTEX_SHADER,_),M=Wu(s,s.FRAGMENT_SHADER,T);s.attachShader(g,y),s.attachShader(g,M),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(A){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(y)||"",W=s.getShaderInfoLog(M)||"",L=D.trim(),Z=F.trim(),Q=W.trim(),Y=!0,se=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,y,M);else{let K=$u(s,y,"vertex"),ne=$u(s,M,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+K+`
`+ne)}else L!==""?He("WebGLProgram: Program Info Log:",L):(Z===""||Q==="")&&(se=!1);se&&(A.diagnostics={runnable:Y,programLog:L,vertexShader:{log:Z,prefix:v},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(y),s.deleteShader(M),x=new zs(s,g),S=wx(s,g)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(g,px)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=M,this}var Fx=0,Bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new zc(e),t.set(e,i)),i}},zc=class{constructor(e){this.id=Fx++,this.code=e,this.usedTimes=0}};function Ox(n){return n===Hi||n===Vr||n===Gr}function kx(n,e,t,i,s,r){let a=new pr,o=new Bc,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,S,P,A,D,F){let W=A.fog,L=D.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||Z,Q),se=d[x.type],K=i.precision;x.precision!==null&&(K=i.getMaxPrecision(x.precision),K!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",K,"instead."));let ne=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=ne!==void 0?ne.length:0,ge=0;L.morphAttributes.position!==void 0&&(ge=1),L.morphAttributes.normal!==void 0&&(ge=2),L.morphAttributes.color!==void 0&&(ge=3);let Ue,te,_e,we;if(se){let be=si[se];Ue=be.vertexShader,te=be.fragmentShader}else{Ue=x.vertexShader,te=x.fragmentShader;let be=o.getVertexShaderStage(x),tt=o.getFragmentShaderStage(x);o.update(x,be,tt),_e=be.id,we=tt.id}let j=n.getRenderTarget(),k=n.state.buffers.depth.getReversed(),oe=D.isInstancedMesh===!0,ze=D.isBatchedMesh===!0,me=!!x.map,Se=!!x.matcap,et=!!Y,$e=et&&Y.isPMREMTexture===!0,Ke=!!x.aoMap,ct=!!x.lightMap,It=!!x.bumpMap&&x.wireframe===!1,St=!!x.normalMap,bn=!!x.displacementMap,Ft=!!x.emissiveMap,fn=!!x.metalnessMap,an=!!x.roughnessMap,on=x.anisotropy>0,O=x.clearcoat>0,Jt=x.diffuseRoughness>0,xt=x.dispersion>0,_t=x.retroreflectivity>0,ve=x.iridescence>0,Lt=x.sheen>0,Be=x.transmission>0,Ve=on&&!!x.anisotropyMap,R=O&&!!x.clearcoatMap,b=O&&!!x.clearcoatNormalMap,H=O&&!!x.clearcoatRoughnessMap,ue=Jt&&!!x.diffuseRoughnessMap,ie=ve&&!!x.iridescenceMap,pe=ve&&!!x.iridescenceThicknessMap,xe=Lt&&!!x.sheenColorMap,I=Lt&&!!x.sheenRoughnessMap,N=!!x.specularMap,$=!!x.specularColorMap,C=!!x.specularIntensityMap,q=Be&&!!x.transmissionMap,V=Be&&!!x.thicknessMap,ce=!!x.gradientMap,re=!!x.alphaMap,he=x.alphaTest>0,Re=!!x.alphaHash,Fe=!!x.extensions,ae=ni;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ae=n.toneMapping);let Ce=$e?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,Oe={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:Ue,fragmentShader:te,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:we,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:K,batching:ze,batchingColor:ze&&D._colorsTexture!==null,instancing:oe,instancingColor:oe&&D.instanceColor!==null,instancingMorph:oe&&D.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:me,matcap:Se,envMap:et,envMapMode:et&&Y.mapping,envMapPMREM:$e,envMapMaxLod:$e?Ce.length-1:null,envMapSize:$e?Ce[0].width:null,aoMap:Ke,lightMap:ct,bumpMap:It,normalMap:St,displacementMap:bn,emissiveMap:Ft,normalMapObjectSpace:St&&x.normalMapType===xu,normalMapTangentSpace:St&&x.normalMapType===Wr,packedNormalMap:St&&x.normalMapType===Wr&&Ox(x.normalMap.format),metalnessMap:fn,roughnessMap:an,anisotropy:on,anisotropyMap:Ve,clearcoat:O,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:H,diffuseRoughness:Jt,diffuseRoughnessMap:ue,dispersion:xt,retroreflection:_t,iridescence:ve,iridescenceMap:ie,iridescenceThicknessMap:pe,sheen:Lt,sheenColorMap:xe,sheenRoughnessMap:I,specularMap:N,specularColorMap:$,specularIntensityMap:C,transmission:Be,transmissionMap:q,thicknessMap:V,gradientMap:ce,opaque:x.transparent===!1&&x.blending===Os&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:he,alphaHash:Re,combine:x.combine,mapUv:me&&f(x.map.channel),aoMapUv:Ke&&f(x.aoMap.channel),lightMapUv:ct&&f(x.lightMap.channel),bumpMapUv:It&&f(x.bumpMap.channel),normalMapUv:St&&f(x.normalMap.channel),displacementMapUv:bn&&f(x.displacementMap.channel),emissiveMapUv:Ft&&f(x.emissiveMap.channel),metalnessMapUv:fn&&f(x.metalnessMap.channel),roughnessMapUv:an&&f(x.roughnessMap.channel),anisotropyMapUv:Ve&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:I&&f(x.sheenRoughnessMap.channel),specularMapUv:N&&f(x.specularMap.channel),specularColorMapUv:$&&f(x.specularColorMap.channel),specularIntensityMapUv:C&&f(x.specularIntensityMap.channel),transmissionMapUv:q&&f(x.transmissionMap.channel),thicknessMapUv:V&&f(x.thicknessMap.channel),alphaMapUv:re&&f(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(St||on),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(me||re),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&St===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:k,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ge,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:me&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===ut,decodeVideoTextureEmissive:Ft&&x.emissiveMap.isVideoTexture===!0&&st.getTransfer(x.emissiveMap.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mt,flipSided:x.side===un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Fe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&x.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function v(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(S,x),m(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function m(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let S=d[x.type],P;if(S){let A=si[S];P=Iu.clone(A.uniforms)}else P=x.uniforms;return P}function T(x,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new Ux(n,S,x,s),c.push(P),u.set(S,P)),P}function y(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){o.remove(x)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:_,acquireProgram:T,releaseProgram:y,releaseShaderCache:M,programs:c,dispose:E}}function Bx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function zx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ku(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ju(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,p,m){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:m},n[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=a(d),_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=p,_.group=m),e++,_}function l(d,f,g,v,p,m,_){_.reversedDepth===!0&&(p=-p);let T=o(d,f,g,v,p,m);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(d,f,g,v,p,m){let _=o(d,f,g,v,p,m);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function u(d,f){t.length>1&&t.sort(d||zx),i.length>1&&i.sort(f||Ku),s.length>1&&s.sort(f||Ku)}function h(){for(let d=e,f=n.length;d<f;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function Hx(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new ju,n.set(i,[a])):s>=r.length?(a=new ju,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Vx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new ke};break;case"SpotLight":t={position:new B,direction:new B,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Gx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Wx=0;function Xx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $x(n){let e=new Vx,t=Gx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let s=new B,r=new dt,a=new dt;function o(c){let u=0,h=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,_=0,T=0,y=0,M=0,E=0,x=0,S=0,P=0,A=0;c.sort(Xx);for(let F=0,W=c.length;F<W;F++){let L=c[F],Z=L.color,Q=L.intensity,Y=L.distance,se=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Hi?se=L.shadow.map.texture:se=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=Z.r*Q,h+=Z.g*Q,d+=Z.b*Q;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],Q);A++}else if(L.isSunLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,ee=t.get(L);ee.shadowIntensity=ne.intensity,ee.shadowBias=ne.bias,ee.shadowNormalBias=ne.normalBias,ee.shadowRadius=ne.radius,ee.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[g]=ee,i.sunShadowMap[g]=se;let ge=ne.getViewportCount();for(let Ue=0;Ue<ge;Ue++)i.sunShadowMatrix[v+Ue]=ne.getMatrix(Ue),i.sunShadowCascade[v+Ue]=ne._cascadeData[Ue];v+=ge,g++}i.sun[f]=K,f++}else if(L.isDirectionalLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,ee=t.get(L);ee.shadowIntensity=ne.intensity,ee.shadowBias=ne.bias,ee.shadowNormalBias=ne.normalBias,ee.shadowRadius=ne.radius,ee.shadowMapSize=ne.mapSize,i.directionalShadow[p]=ee,i.directionalShadowMap[p]=se,i.directionalShadowMatrix[p]=L.shadow.matrix,M++}i.directional[p]=K,p++}else if(L.isSpotLight){let K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(Z).multiplyScalar(Q),K.distance=Y,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[_]=K;let ne=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,ne.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[_]=ne.matrix,L.castShadow){let ee=t.get(L);ee.shadowIntensity=ne.intensity,ee.shadowBias=ne.bias,ee.shadowNormalBias=ne.normalBias,ee.shadowRadius=ne.radius,ee.shadowMapSize=ne.mapSize,i.spotShadow[_]=ee,i.spotShadowMap[_]=se,x++}_++}else if(L.isRectAreaLight){let K=e.get(L);K.color.copy(Z).multiplyScalar(Q),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[T]=K,T++}else if(L.isPointLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){let ne=L.shadow,ee=t.get(L);ee.shadowIntensity=ne.intensity,ee.shadowBias=ne.bias,ee.shadowNormalBias=ne.normalBias,ee.shadowRadius=ne.radius,ee.shadowMapSize=ne.mapSize,ee.shadowCameraNear=ne.camera.near,ee.shadowCameraFar=ne.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=se,i.pointShadowMatrix[m]=L.shadow.matrix,E++}i.point[m]=K,m++}else if(L.isHemisphereLight){let K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(Q),K.groundColor.copy(L.groundColor).multiplyScalar(Q),i.hemi[y]=K,y++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let D=i.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==T||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==M||D.numPointShadows!==E||D.numSpotShadows!==x||D.numSpotMaps!==S||D.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=p,i.spot.length=_,i.rectArea.length=T,i.point.length=m,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+S-P,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,D.sunLength=f,D.directionalLength=p,D.pointLength=m,D.spotLength=_,D.rectAreaLength=T,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=M,D.numPointShadows=E,D.numSpotShadows=x,D.numSpotMaps=S,D.numLightProbes=A,i.version=Wx++)}function l(c,u){let h=0,d=0,f=0,g=0,v=0,p=0,m=u.matrixWorldInverse;for(let _=0,T=c.length;_<T;_++){let y=c[_];if(y.isSunLight){let M=i.sun[h];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),h++}else if(y.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(y.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let M=i.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function Qu(n){let e=new $x(n),t=[],i=[],s=[];function r(h){u.camera=h,t.length=0,i.length=0,s.length=0}function a(h){h.isLightProbeGrid?s.push(h):t.push(h)}function o(h){i.push(h)}function l(){e.setup(t),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function qx(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Qu(n),e.set(s,[o])):r>=a.length?(o=new Qu(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Jx=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Kx=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],ed=new dt,$r=new B,Nc=new B;function jx(n,e,t){let i=new Di,s=new Ye,r=new Ye,a=new At,o=new to,l=new no,c={},u=t.maxTextureSize,h={[zi]:un,[un]:zi,[Mt]:Mt},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Yx,fragmentShader:Zx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Bt;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new fe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ns;let m=this.type;this.render=function(E,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Yh&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ns);let P=n.getRenderTarget(),A=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(is),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let W=m!==this.type;W&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(Z=>Z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,Z=E.length;L<Z;L++){let Q=E[L],Y=Q.shadow;if(Y===void 0){He("WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let se=Y.getFrameExtents();s.multiply(se),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,Y.mapSize.y=r.y));let K=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=K,Y.map===null||W===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Fs){if(Q.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new yn(s.x,s.y,{format:Hi,type:zn,minFilter:cn,magFilter:cn,generateMipmaps:!1}),Y.map.texture.name=Q.name+".shadowMap",Y.map.depthTexture=new mi(s.x,s.y,An),Y.map.depthTexture.name=Q.name+".shadowMapDepth",Y.map.depthTexture.format=fi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Xt,Y.map.depthTexture.magFilter=Xt}else Q.isPointLight?(Y.map=new Yr(s.x),Y.map.depthTexture=new Sr(s.x,Bn)):(Y.map=new yn(s.x,s.y),Y.map.depthTexture=new mi(s.x,s.y,Bn)),Y.map.depthTexture.name=Q.name+".shadowMap",Y.map.depthTexture.format=fi,this.type===ns?(Y.map.depthTexture.compareFunction=K?yc:_c,Y.map.depthTexture.minFilter=cn,Y.map.depthTexture.magFilter=cn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Xt,Y.map.depthTexture.magFilter=Xt);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let ne=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Q.isPointLight!==!0&&Y.updateMatrices(Q,S);let ee=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:S.layers;for(let ge=0;ge<ne;ge++){let Ue=Y.getCamera(ge);if(Q.isPointLight){let te=Y.camera,_e=Y.matrix,we=Q.distance||te.far;we!==te.far&&(te.far=we,te.updateProjectionMatrix()),$r.setFromMatrixPosition(Q.matrixWorld),te.position.copy($r),Nc.copy(te.position),Nc.add(Jx[ge]),te.up.copy(Kx[ge]),te.lookAt(Nc),te.updateMatrixWorld(),_e.makeTranslation(-$r.x,-$r.y,-$r.z),ed.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(ed,te.coordinateSystem,te.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(Y.map),n.clear());let te=Y.getViewport(ge);a.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),F.viewport(a)}i=Y.getFrustum(ge),y(x,S,Ue,Q,ee,this.type)}Y.isPointLightShadow!==!0&&this.type===Fs&&_(Y,S),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(P,A,D)};function _(E,x){let S=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new yn(s.x,s.y,{format:Hi,type:zn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(x,null,S,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(x,null,S,f,v,null)}function T(E,x,S,P){let A=null,D=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)A=D;else if(A=S.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let F=A.uuid,W=x.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let Z=L[W];Z===void 0&&(Z=A.clone(),L[W]=Z,x.addEventListener("dispose",M)),A=Z}if(A.visible=x.visible,A.wireframe=x.wireframe,P===Fs?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:h[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let F=n.properties.get(A);F.light=S}return A}function y(E,x,S,P,A,D){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Fs)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let L=e.update(E),Z=E.material;if(Array.isArray(Z)){let Q=L.groups;for(let Y=0,se=Q.length;Y<se;Y++){let K=Q[Y],ne=Z[K.materialIndex];if(ne&&ne.visible){let ee=T(E,ne,P,D);E.onBeforeShadow(n,E,x,S,L,ee,K),n.renderBufferDirect(S,null,L,ee,E,K),E.onAfterShadow(n,E,x,S,L,ee,K)}}}else if(Z.visible){let Q=T(E,Z,P,D);E.onBeforeShadow(n,E,x,S,L,Q,null),n.renderBufferDirect(S,null,L,Q,E,null),E.onAfterShadow(n,E,x,S,L,Q,null)}}let W=E.children;for(let L=0,Z=W.length;L<Z;L++)y(W[L],x,S,P,A,D)}function M(E){E.target.removeEventListener("dispose",M);for(let S in c){let P=c[S],A=E.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function Qx(n,e){function t(){let C=!1,q=new At,V=null,ce=new At(0,0,0,0);return{setMask:function(re){V!==re&&!C&&(n.colorMask(re,re,re,re),V=re)},setLocked:function(re){C=re},setClear:function(re,he,Re,Fe,ae){ae===!0&&(re*=Fe,he*=Fe,Re*=Fe),q.set(re,he,Re,Fe),ce.equals(q)===!1&&(n.clearColor(re,he,Re,Fe),ce.copy(q))},reset:function(){C=!1,V=null,ce.set(-1,0,0,0)}}}function i(){let C=!1,q=!1,V=null,ce=null,re=null;return{setReversed:function(he){if(q!==he){let Re=e.get("EXT_clip_control");he?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),q=he;let Fe=re;re=null,this.setClear(Fe)}},getReversed:function(){return q},setTest:function(he){he?k(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(he){V!==he&&!C&&(n.depthMask(he),V=he)},setFunc:function(he){if(q&&(he=Ru[he]),ce!==he){switch(he){case Fa:n.depthFunc(n.NEVER);break;case Oa:n.depthFunc(n.ALWAYS);break;case ka:n.depthFunc(n.LESS);break;case Cs:n.depthFunc(n.LEQUAL);break;case Ba:n.depthFunc(n.EQUAL);break;case za:n.depthFunc(n.GEQUAL);break;case Ha:n.depthFunc(n.GREATER);break;case Va:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=he}},setLocked:function(he){C=he},setClear:function(he){re!==he&&(re=he,q&&(he=1-he),n.clearDepth(he))},reset:function(){C=!1,V=null,ce=null,re=null,q=!1}}}function s(){let C=!1,q=null,V=null,ce=null,re=null,he=null,Re=null,Fe=null,ae=null;return{setTest:function(Ce){C||(Ce?k(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(Ce){q!==Ce&&!C&&(n.stencilMask(Ce),q=Ce)},setFunc:function(Ce,Oe,be){(V!==Ce||ce!==Oe||re!==be)&&(n.stencilFunc(Ce,Oe,be),V=Ce,ce=Oe,re=be)},setOp:function(Ce,Oe,be){(he!==Ce||Re!==Oe||Fe!==be)&&(n.stencilOp(Ce,Oe,be),he=Ce,Re=Oe,Fe=be)},setLocked:function(Ce){C=Ce},setClear:function(Ce){ae!==Ce&&(n.clearStencil(Ce),ae=Ce)},reset:function(){C=!1,q=null,V=null,ce=null,re=null,he=null,Re=null,Fe=null,ae=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,u={},h={},d={},f=new WeakMap,g=[],v=null,p=!1,m=null,_=null,T=null,y=null,M=null,E=null,x=null,S=new ke(0,0,0),P=0,A=!1,D=null,F=null,W=null,L=null,Z=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,se=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=se>=1):K.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=se>=2);let ne=null,ee={},ge=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),te=new At().fromArray(ge),_e=new At().fromArray(Ue);function we(C,q,V,ce){let re=new Uint8Array(4),he=n.createTexture();n.bindTexture(C,he),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<V;Re++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(q,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(q+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return he}let j={};j[n.TEXTURE_2D]=we(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=we(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=we(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=we(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),k(n.DEPTH_TEST),a.setFunc(Cs),It(!1),St(ec),k(n.CULL_FACE),Ke(is);function k(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function oe(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function ze(C,q){return d[C]!==q?(n.bindFramebuffer(C,q),d[C]=q,C===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=q),C===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=q),!0):!1}function me(C,q){let V=g,ce=!1;if(C){V=f.get(q),V===void 0&&(V=[],f.set(q,V));let re=C.textures;if(V.length!==re.length||V[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Re=re.length;he<Re;he++)V[he]=n.COLOR_ATTACHMENT0+he;V.length=re.length,ce=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,ce=!0);ce&&n.drawBuffers(V)}function Se(C){return v!==C?(n.useProgram(C),v=C,!0):!1}let et={[ss]:n.FUNC_ADD,[Jh]:n.FUNC_SUBTRACT,[Kh]:n.FUNC_REVERSE_SUBTRACT};et[jh]=n.MIN,et[Qh]=n.MAX;let $e={[eu]:n.ZERO,[tu]:n.ONE,[nu]:n.SRC_COLOR,[ic]:n.SRC_ALPHA,[lu]:n.SRC_ALPHA_SATURATE,[au]:n.DST_COLOR,[su]:n.DST_ALPHA,[iu]:n.ONE_MINUS_SRC_COLOR,[sc]:n.ONE_MINUS_SRC_ALPHA,[ou]:n.ONE_MINUS_DST_COLOR,[ru]:n.ONE_MINUS_DST_ALPHA,[cu]:n.CONSTANT_COLOR,[hu]:n.ONE_MINUS_CONSTANT_COLOR,[uu]:n.CONSTANT_ALPHA,[du]:n.ONE_MINUS_CONSTANT_ALPHA};function Ke(C,q,V,ce,re,he,Re,Fe,ae,Ce){if(C===is){p===!0&&(oe(n.BLEND),p=!1);return}if(p===!1&&(k(n.BLEND),p=!0),C!==Zh){if(C!==m||Ce!==A){if((_!==ss||M!==ss)&&(n.blendEquation(n.FUNC_ADD),_=ss,M=ss),Ce)switch(C){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nr:n.blendFunc(n.ONE,n.ONE);break;case tc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:We("WebGLState: Invalid blending: ",C);break}else switch(C){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case tc:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nc:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",C);break}T=null,y=null,E=null,x=null,S.set(0,0,0),P=0,m=C,A=Ce}return}re=re||q,he=he||V,Re=Re||ce,(q!==_||re!==M)&&(n.blendEquationSeparate(et[q],et[re]),_=q,M=re),(V!==T||ce!==y||he!==E||Re!==x)&&(n.blendFuncSeparate($e[V],$e[ce],$e[he],$e[Re]),T=V,y=ce,E=he,x=Re),(Fe.equals(S)===!1||ae!==P)&&(n.blendColor(Fe.r,Fe.g,Fe.b,ae),S.copy(Fe),P=ae),m=C,A=!1}function ct(C,q){C.side===Mt?oe(n.CULL_FACE):k(n.CULL_FACE);let V=C.side===un;q&&(V=!V),It(V),C.blending===Os&&C.transparent===!1?Ke(is):Ke(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let ce=C.stencilWrite;o.setTest(ce),ce&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ft(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?k(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function It(C){D!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),D=C)}function St(C){C!==$h?(k(n.CULL_FACE),C!==F&&(C===ec?n.cullFace(n.BACK):C===qh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),F=C}function bn(C){C!==W&&(Y&&n.lineWidth(C),W=C)}function Ft(C,q,V){C?(k(n.POLYGON_OFFSET_FILL),(L!==q||Z!==V)&&(L=q,Z=V,a.getReversed()&&(q=-q,V=-V),n.polygonOffset(q,V))):oe(n.POLYGON_OFFSET_FILL)}function fn(C){C?k(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function an(C){C===void 0&&(C=n.TEXTURE0+Q-1),ne!==C&&(n.activeTexture(C),ne=C)}function on(C,q,V){V===void 0&&(ne===null?V=n.TEXTURE0+Q-1:V=ne);let ce=ee[V];ce===void 0&&(ce={type:void 0,texture:void 0},ee[V]=ce),(ce.type!==C||ce.texture!==q)&&(ne!==V&&(n.activeTexture(V),ne=V),n.bindTexture(C,q||j[C]),ce.type=C,ce.texture=q)}function O(){let C=ee[ne];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Jt(){try{n.compressedTexImage2D(...arguments)}catch(C){We("WebGLState:",C)}}function xt(){try{n.compressedTexImage3D(...arguments)}catch(C){We("WebGLState:",C)}}function _t(){try{n.texSubImage2D(...arguments)}catch(C){We("WebGLState:",C)}}function ve(){try{n.texSubImage3D(...arguments)}catch(C){We("WebGLState:",C)}}function Lt(){try{n.compressedTexSubImage2D(...arguments)}catch(C){We("WebGLState:",C)}}function Be(){try{n.compressedTexSubImage3D(...arguments)}catch(C){We("WebGLState:",C)}}function Ve(){try{n.texStorage2D(...arguments)}catch(C){We("WebGLState:",C)}}function R(){try{n.texStorage3D(...arguments)}catch(C){We("WebGLState:",C)}}function b(){try{n.texImage2D(...arguments)}catch(C){We("WebGLState:",C)}}function H(){try{n.texImage3D(...arguments)}catch(C){We("WebGLState:",C)}}function ue(C){return h[C]!==void 0?h[C]:n.getParameter(C)}function ie(C,q){h[C]!==q&&(n.pixelStorei(C,q),h[C]=q)}function pe(C){te.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),te.copy(C))}function xe(C){_e.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),_e.copy(C))}function I(C,q){let V=c.get(q);V===void 0&&(V=new WeakMap,c.set(q,V));let ce=V.get(C);ce===void 0&&(ce=n.getUniformBlockIndex(q,C.name),n.uniformBlockBinding(q,ce,ce),V.set(C,ce))}function N(C,q,V){let re=c.get(q).get(C);l[re]!==V&&(n.bindBufferBase(n.UNIFORM_BUFFER,re,V),l[re]=V)}function $(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},ne=null,ee={},d={},l={},f=new WeakMap,g=[],v=null,p=!1,m=null,_=null,T=null,y=null,M=null,E=null,x=null,S=new ke(0,0,0),P=0,A=!1,D=null,F=null,W=null,L=null,Z=null,te.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:k,disable:oe,bindFramebuffer:ze,drawBuffers:me,useProgram:Se,setBlending:Ke,setMaterial:ct,setFlipSided:It,setCullFace:St,setLineWidth:bn,setPolygonOffset:Ft,setScissorTest:fn,activeTexture:an,bindTexture:on,unbindTexture:O,compressedTexImage2D:Jt,compressedTexImage3D:xt,texImage2D:b,texImage3D:H,pixelStorei:ie,getParameter:ue,updateUBOMapping:I,uniformBlockBinding:N,texStorage2D:Ve,texStorage3D:R,texSubImage2D:_t,texSubImage3D:ve,compressedTexSubImage2D:Lt,compressedTexSubImage3D:Be,scissor:pe,viewport:xe,reset:$}}function e_(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap,h=new Set,d,f=new WeakMap,g=new Set,v=new FinalizationRegistry(R=>g.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return p?new OffscreenCanvas(R,b):dr("canvas")}function _(R,b,H){let ue=1,ie=Ve(R);if((ie.width>H||ie.height>H)&&(ue=H/Math.max(ie.width,ie.height)),ue<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let pe=Math.floor(ue*ie.width),xe=Math.floor(ue*ie.height);d===void 0&&(d=m(pe,xe));let I=b?m(pe,xe):d;return I.width=pe,I.height=xe,I.getContext("2d").drawImage(R,0,0,pe,xe),He("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+pe+"x"+xe+")."),I}else return"data"in R&&He("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function T(R){return R.generateMipmaps}function y(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(R,b,H,ue,ie,pe=!1){if(R!==null){if(n[R]!==void 0)return n[R];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let xe;ue&&(xe=e.get("EXT_texture_norm16"),xe||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let I=b;if(b===n.RED&&(H===n.FLOAT&&(I=n.R32F),H===n.HALF_FLOAT&&(I=n.R16F),H===n.UNSIGNED_BYTE&&(I=n.R8),H===n.UNSIGNED_SHORT&&xe&&(I=xe.R16_EXT),H===n.SHORT&&xe&&(I=xe.R16_SNORM_EXT)),b===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(I=n.R8UI),H===n.UNSIGNED_SHORT&&(I=n.R16UI),H===n.UNSIGNED_INT&&(I=n.R32UI),H===n.BYTE&&(I=n.R8I),H===n.SHORT&&(I=n.R16I),H===n.INT&&(I=n.R32I)),b===n.RG&&(H===n.FLOAT&&(I=n.RG32F),H===n.HALF_FLOAT&&(I=n.RG16F),H===n.UNSIGNED_BYTE&&(I=n.RG8),H===n.UNSIGNED_SHORT&&xe&&(I=xe.RG16_EXT),H===n.SHORT&&xe&&(I=xe.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(I=n.RG8UI),H===n.UNSIGNED_SHORT&&(I=n.RG16UI),H===n.UNSIGNED_INT&&(I=n.RG32UI),H===n.BYTE&&(I=n.RG8I),H===n.SHORT&&(I=n.RG16I),H===n.INT&&(I=n.RG32I)),b===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(I=n.RGB8UI),H===n.UNSIGNED_SHORT&&(I=n.RGB16UI),H===n.UNSIGNED_INT&&(I=n.RGB32UI),H===n.BYTE&&(I=n.RGB8I),H===n.SHORT&&(I=n.RGB16I),H===n.INT&&(I=n.RGB32I)),b===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(I=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(I=n.RGBA16UI),H===n.UNSIGNED_INT&&(I=n.RGBA32UI),H===n.BYTE&&(I=n.RGBA8I),H===n.SHORT&&(I=n.RGBA16I),H===n.INT&&(I=n.RGBA32I)),b===n.RGB&&(H===n.UNSIGNED_SHORT&&xe&&(I=xe.RGB16_EXT),H===n.SHORT&&xe&&(I=xe.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(I=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(I=n.R11F_G11F_B10F)),b===n.RGBA){let N=pe?ur:st.getTransfer(ie);H===n.FLOAT&&(I=n.RGBA32F),H===n.HALF_FLOAT&&(I=n.RGBA16F),H===n.UNSIGNED_BYTE&&(I=N===ut?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&xe&&(I=xe.RGBA16_EXT),H===n.SHORT&&xe&&(I=xe.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(I=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(I=n.RGB5_A1)}return(I===n.R16F||I===n.R32F||I===n.RG16F||I===n.RG32F||I===n.RGBA16F||I===n.RGBA32F)&&e.get("EXT_color_buffer_float"),I}function x(R,b){let H;return R?b===null||b===Bn||b===as?H=n.DEPTH24_STENCIL8:b===An?H=n.DEPTH32F_STENCIL8:b===Bs&&(H=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Bn||b===as?H=n.DEPTH_COMPONENT24:b===An?H=n.DEPTH_COMPONENT32F:b===Bs&&(H=n.DEPTH_COMPONENT16),H}function S(R,b){return T(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xt&&R.minFilter!==cn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function P(R){let b=new WeakRef(R);i.get(R).__ref=b,g.add(b),v.register(R,b,b)}function A(R){let b=i.get(R).__ref;b!==void 0&&(g.delete(b),v.unregister(b))}function D(R){W(R.target)}function F(R){L(R.target)}function W(R){R.removeEventListener("dispose",D),A(R),Q(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&h.delete(R)}function L(R){R.removeEventListener("dispose",F),A(R),se(R)}function Z(){for(let R of g){let b=R.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):W(b))}g.clear(),h.clear()}function Q(R){let b=i.get(R);if(b.__webglInit===void 0)return;let H=R.source,ue=f.get(H);if(ue){let ie=ue[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&Y(R),Object.keys(ue).length===0&&f.delete(H)}i.remove(R)}function Y(R){let b=i.get(R);n.deleteTexture(b.__webglTexture);let H=R.source,ue=f.get(H);delete ue[b.__cacheKey],a.memory.textures--}function se(R){let b=i.get(R);b.__depthDisposeCallback&&b.__depthDisposeCallback();let H=R.depthTexture;if(H&&H.renderTarget===R&&W(H),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let pe=0;pe<b.__webglFramebuffer[ie].length;pe++)n.deleteFramebuffer(b.__webglFramebuffer[ie][pe]);else n.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)n.deleteFramebuffer(b.__webglFramebuffer[ie]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ue=R.textures;for(let ie=0,pe=ue.length;ie<pe;ie++){let xe=i.get(ue[ie]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(ue[ie])}i.remove(R)}let K=0;function ne(){K=0}function ee(){return K}function ge(R){K=R}function Ue(){let R=K;return R>=s.maxTextures&&He("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),K+=1,R}function te(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function _e(R,b){let H=i.get(R);if(R.isVideoTexture&&Lt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let ue=R.image;if(ue===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(H,R,b);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+b)}function we(R,b){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ct(H,R,b);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+b)}function j(R,b){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ct(H,R,b);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+b)}function k(R,b){let H=i.get(R);if(R.version>0&&H.__version!==R.version){It(H,R,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+b)}let oe={[Li]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[Ga]:n.MIRRORED_REPEAT},ze={[Xt]:n.NEAREST,[mu]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[_o]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},me={[yu]:n.NEVER,[vc]:n.ALWAYS,[vu]:n.LESS,[_c]:n.LEQUAL,[Mu]:n.EQUAL,[yc]:n.GEQUAL,[bu]:n.GREATER,[Su]:n.NOTEQUAL};function Se(R,b){if(b.type===An&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===cn||b.magFilter===_o||b.magFilter===Or||b.magFilter===xi||b.minFilter===cn||b.minFilter===_o||b.minFilter===Or||b.minFilter===xi)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,oe[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,oe[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,oe[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ze[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ze[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xt||b.minFilter!==Or&&b.minFilter!==xi||b.type===An&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function et(R,b){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",D),P(b));let ue=b.source,ie=f.get(ue);ie===void 0&&(ie={},f.set(ue,ie));let pe=te(b);if(pe!==R.__cacheKey){ie[pe]===void 0&&(ie[pe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ie[pe].usedTimes++;let xe=ie[R.__cacheKey];xe!==void 0&&(ie[R.__cacheKey].usedTimes--,xe.usedTimes===0&&Y(b)),R.__cacheKey=pe,R.__webglTexture=ie[pe].texture}return H}function $e(R,b,H){return Math.floor(Math.floor(R/H)/b)}function Ke(R,b,H,ue){let pe=R.updateRanges;if(pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,H,ue,b.data);else{pe.sort((C,q)=>C.start-q.start);let xe=0;for(let C=1;C<pe.length;C++){let q=pe[xe],V=pe[C],ce=q.start+q.count,re=$e(V.start,b.width,4),he=$e(q.start,b.width,4);V.start<=ce+1&&re===he&&$e(V.start+V.count-1,b.width,4)===re?q.count=Math.max(q.count,V.start+V.count-q.start):(++xe,pe[xe]=V)}pe.length=xe+1;let I=t.getParameter(n.UNPACK_ROW_LENGTH),N=t.getParameter(n.UNPACK_SKIP_PIXELS),$=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let C=0,q=pe.length;C<q;C++){let V=pe[C],ce=Math.floor(V.start/4),re=Math.ceil(V.count/4),he=ce%b.width,Re=Math.floor(ce/b.width),Fe=re,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re),t.texSubImage2D(n.TEXTURE_2D,0,he,Re,Fe,ae,H,ue,b.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,I),t.pixelStorei(n.UNPACK_SKIP_PIXELS,N),t.pixelStorei(n.UNPACK_SKIP_ROWS,$)}}function ct(R,b,H){let ue=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ue=n.TEXTURE_3D);let ie=et(R,b),pe=b.source;t.bindTexture(ue,R.__webglTexture,n.TEXTURE0+H);let xe=i.get(pe);if(pe.version!==xe.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ae=st.getPrimaries(st.workingColorSpace),Ce=b.colorSpace===yi?null:st.getPrimaries(b.colorSpace),Oe=b.colorSpace===yi||ae===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let N=_(b.image,!1,s.maxTextureSize);N=Be(b,N);let $=r.convert(b.format,b.colorSpace),C=r.convert(b.type),q=E(b.internalFormat,$,C,b.normalized,b.colorSpace,b.isVideoTexture);Se(ue,b);let V,ce=b.mipmaps,re=b.isVideoTexture!==!0,he=xe.__version===void 0||ie===!0,Re=pe.dataReady,Fe=S(b,N);if(b.isDepthTexture)q=x(b.format===_i,b.type),he&&(re?t.texStorage2D(n.TEXTURE_2D,1,q,N.width,N.height):t.texImage2D(n.TEXTURE_2D,0,q,N.width,N.height,0,$,C,null));else if(b.isDataTexture)if(ce.length>0){re&&he&&t.texStorage2D(n.TEXTURE_2D,Fe,q,ce[0].width,ce[0].height);for(let ae=0,Ce=ce.length;ae<Ce;ae++)V=ce[ae],re?Re&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,V.width,V.height,$,C,V.data):t.texImage2D(n.TEXTURE_2D,ae,q,V.width,V.height,0,$,C,V.data);b.generateMipmaps=!1}else re?(he&&t.texStorage2D(n.TEXTURE_2D,Fe,q,N.width,N.height),Re&&Ke(b,N,$,C)):t.texImage2D(n.TEXTURE_2D,0,q,N.width,N.height,0,$,C,N.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){re&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,q,ce[0].width,ce[0].height,N.depth);for(let ae=0,Ce=ce.length;ae<Ce;ae++)if(V=ce[ae],b.format!==Hn)if($!==null)if(re){if(Re)if(b.layerUpdates.size>0){let Oe=Ac(V.width,V.height,b.format,b.type);for(let be of b.layerUpdates){let tt=V.data.subarray(be*Oe/V.data.BYTES_PER_ELEMENT,(be+1)*Oe/V.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,be,V.width,V.height,1,$,tt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,V.width,V.height,N.depth,$,V.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,q,V.width,V.height,N.depth,0,V.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,V.width,V.height,N.depth,$,C,V.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,q,V.width,V.height,N.depth,0,$,C,V.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{re&&he&&t.texStorage2D(n.TEXTURE_2D,Fe,q,ce[0].width,ce[0].height);for(let ae=0,Ce=ce.length;ae<Ce;ae++)V=ce[ae],b.format!==Hn?$!==null?re?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,V.width,V.height,$,V.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,q,V.width,V.height,0,V.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Re&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,V.width,V.height,$,C,V.data):t.texImage2D(n.TEXTURE_2D,ae,q,V.width,V.height,0,$,C,V.data)}else if(b.isDataArrayTexture)if(re){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,q,N.width,N.height,N.depth),Re)if(b.layerUpdates.size>0){let ae=Ac(N.width,N.height,b.format,b.type);for(let Ce of b.layerUpdates){let Oe=N.data.subarray(Ce*ae/N.data.BYTES_PER_ELEMENT,(Ce+1)*ae/N.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ce,N.width,N.height,1,$,C,Oe)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,$,C,N.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,q,N.width,N.height,N.depth,0,$,C,N.data);else if(b.isData3DTexture)re?(he&&t.texStorage3D(n.TEXTURE_3D,Fe,q,N.width,N.height,N.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,$,C,N.data)):t.texImage3D(n.TEXTURE_3D,0,q,N.width,N.height,N.depth,0,$,C,N.data);else if(b.isFramebufferTexture){if(he)if(re)t.texStorage2D(n.TEXTURE_2D,Fe,q,N.width,N.height);else{let ae=N.width,Ce=N.height;for(let Oe=0;Oe<Fe;Oe++)t.texImage2D(n.TEXTURE_2D,Oe,q,ae,Ce,0,$,C,null),ae>>=1,Ce>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),N.parentNode!==ae){ae.appendChild(N),h.add(b),ae.onpaint=Ce=>{let Oe=Ce.changedElements;for(let be of h)Oe.includes(be.image)&&(be.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,N);else{let Oe=n.RGBA,be=n.RGBA,tt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Oe,be,tt,N)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ce.length>0){if(re&&he){let ae=Ve(ce[0]);t.texStorage2D(n.TEXTURE_2D,Fe,q,ae.width,ae.height)}for(let ae=0,Ce=ce.length;ae<Ce;ae++)V=ce[ae],re?Re&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,$,C,V):t.texImage2D(n.TEXTURE_2D,ae,q,$,C,V);b.generateMipmaps=!1}else if(re){if(he){let ae=Ve(N);t.texStorage2D(n.TEXTURE_2D,Fe,q,ae.width,ae.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,$,C,N)}else t.texImage2D(n.TEXTURE_2D,0,q,$,C,N);T(b)&&b.mipmapsAutoUpdate===!0&&y(ue),xe.__version=pe.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function It(R,b,H){if(b.image.length!==6)return;let ue=et(R,b),ie=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);let pe=i.get(ie);if(ie.version!==pe.__version||ue===!0){t.activeTexture(n.TEXTURE0+H);let xe=st.getPrimaries(st.workingColorSpace),I=b.colorSpace===yi?null:st.getPrimaries(b.colorSpace),N=b.colorSpace===yi||xe===I?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);let $=b.isCompressedTexture||b.image[0].isCompressedTexture,C=b.image[0]&&b.image[0].isDataTexture,q=[];for(let be=0;be<6;be++)!$&&!C?q[be]=_(b.image[be],!0,s.maxCubemapSize):q[be]=C?b.image[be].image:b.image[be],q[be]=Be(b,q[be]);let V=q[0],ce=r.convert(b.format,b.colorSpace),re=r.convert(b.type),he=E(b.internalFormat,ce,re,b.normalized,b.colorSpace),Re=b.isVideoTexture!==!0,Fe=pe.__version===void 0||ue===!0,ae=ie.dataReady,Ce=S(b,V);Se(n.TEXTURE_CUBE_MAP,b);let Oe;if(b.isDepthTexture){if(he=x(b.format===_i,b.type),Fe)if(Re)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,he,V.width,V.height);else for(let be=0;be<6;be++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,he,V.width,V.height,0,ce,re,null)}else if($){Re&&Fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,he,V.width,V.height);for(let be=0;be<6;be++){Oe=q[be].mipmaps;for(let tt=0;tt<Oe.length;tt++){let Ct=Oe[tt];b.format!==Hn?ce!==null?Re?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,tt,0,0,Ct.width,Ct.height,ce,Ct.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,tt,he,Ct.width,Ct.height,0,Ct.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,tt,0,0,Ct.width,Ct.height,ce,re,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,tt,he,Ct.width,Ct.height,0,ce,re,Ct.data)}}}else{if(Oe=b.mipmaps,Re&&Fe){Oe.length>0&&Ce++;let be=Ve(q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,he,be.width,be.height)}for(let be=0;be<6;be++)if(C){Re?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,q[be].width,q[be].height,ce,re,q[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,he,q[be].width,q[be].height,0,ce,re,q[be].data);for(let tt=0;tt<Oe.length;tt++){let Kt=Oe[tt].image[be].image;Re?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,tt+1,0,0,Kt.width,Kt.height,ce,re,Kt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,tt+1,he,Kt.width,Kt.height,0,ce,re,Kt.data)}}else{Re?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ce,re,q[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,he,ce,re,q[be]);for(let tt=0;tt<Oe.length;tt++){let Ct=Oe[tt];Re?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,tt+1,0,0,ce,re,Ct.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,tt+1,he,ce,re,Ct.image[be])}}}T(b)&&b.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),pe.__version=ie.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function St(R,b,H,ue,ie,pe){let xe=r.convert(H.format,H.colorSpace),I=r.convert(H.type),N=E(H.internalFormat,xe,I,H.normalized,H.colorSpace),$=i.get(b),C=i.get(H);if(C.__renderTarget=b,!$.__hasExternalTextures){let q=Math.max(1,b.width>>pe),V=Math.max(1,b.height>>pe);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,pe,N,q,V,b.depth,0,xe,I,null):t.texImage2D(ie,pe,N,q,V,0,xe,I,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ve(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,ie,C.__webglTexture,0,_t(b)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,ie,C.__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function bn(R,b,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){let ue=b.depthTexture,ie=ue&&ue.isDepthTexture?ue.type:null,pe=x(b.stencilBuffer,ie),xe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ve(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(b),pe,b.width,b.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(b),pe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,pe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,R)}else{let ue=b.textures;for(let ie=0;ie<ue.length;ie++){let pe=ue[ie],xe=r.convert(pe.format,pe.colorSpace),I=r.convert(pe.type),N=E(pe.internalFormat,xe,I,pe.normalized,pe.colorSpace);ve(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(b),N,b.width,b.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(b),N,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,N,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(R,b,H){let ue=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=i.get(b.depthTexture);ie.__renderTarget=b;let pe=ue?b.depthTexture.image[0]:b.depthTexture.image;(!ie.__webglTexture||pe.width!==b.width||pe.height!==b.height)&&(pe.width=b.width,pe.height=b.height,b.depthTexture.needsUpdate=!0),ue?k(b.depthTexture,0):_e(b.depthTexture,0);let xe=ie.__webglTexture,I=_t(b),N=ue?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,$=b.depthTexture.format===_i?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===fi)ve(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,N,xe,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,$,N,xe,0);else if(b.depthTexture.format===_i)ve(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,N,xe,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,$,N,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fn(R){let b=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let ue=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ue){let ie=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ue.removeEventListener("dispose",ie)};ue.addEventListener("dispose",ie),b.__depthDisposeCallback=ie}b.__boundDepthTexture=ue}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let ue=0;ue<6;ue++)Ft(b.__webglFramebuffer[ue],R,ue);else R.texture.mipmaps.length>0?Ft(b.__webglFramebuffer[0],R,0):Ft(b.__webglFramebuffer,R,0);else if(H){b.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ue]),b.__webglDepthbuffer[ue]===void 0)b.__webglDepthbuffer[ue]=n.createRenderbuffer(),bn(b.__webglDepthbuffer[ue],R,!1);else{let ie=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer[ue];n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,pe)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),bn(b.__webglDepthbuffer,R,!1);else{let ie=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,pe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function an(R,b,H){let ue=i.get(R);b!==void 0&&St(ue.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&fn(R)}function on(R){let b=R.texture,H=i.get(R),ue=i.get(b);R.addEventListener("dispose",F),P(R);let ie=R.textures,pe=R.isWebGLCubeRenderTarget===!0,xe=ie.length>1;if(xe||(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=b.version,a.memory.textures++),pe){H.__webglFramebuffer=[];for(let I=0;I<6;I++)if(b.mipmaps.length>0){H.__webglFramebuffer[I]=[];for(let N=0;N<b.mipmaps.length;N++)H.__webglFramebuffer[I][N]=n.createFramebuffer()}else H.__webglFramebuffer[I]=n.createFramebuffer()}else{if(b.mipmaps.length>0){H.__webglFramebuffer=[];for(let I=0;I<b.mipmaps.length;I++)H.__webglFramebuffer[I]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(xe)for(let I=0,N=ie.length;I<N;I++){let $=i.get(ie[I]);$.__webglTexture===void 0&&($.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&ve(R)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let I=0;I<ie.length;I++){let N=ie[I];H.__webglColorRenderbuffer[I]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[I]);let $=r.convert(N.format,N.colorSpace),C=r.convert(N.type),q=E(N.internalFormat,$,C,N.normalized,N.colorSpace,R.isXRRenderTarget===!0),V=_t(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,V,q,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.RENDERBUFFER,H.__webglColorRenderbuffer[I])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),bn(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),Se(n.TEXTURE_CUBE_MAP,b);for(let I=0;I<6;I++)if(b.mipmaps.length>0)for(let N=0;N<b.mipmaps.length;N++)St(H.__webglFramebuffer[I][N],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+I,N);else St(H.__webglFramebuffer[I],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);T(b)?y(n.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let I=0,N=ie.length;I<N;I++){let $=ie[I],C=i.get($),q=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(q=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,C.__webglTexture),Se(q,$),St(H.__webglFramebuffer,R,$,n.COLOR_ATTACHMENT0+I,q,0),T($)&&y(q)}t.unbindTexture()}else{let I=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(I=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(I,ue.__webglTexture),Se(I,b),b.mipmaps.length>0)for(let N=0;N<b.mipmaps.length;N++)St(H.__webglFramebuffer[N],R,b,n.COLOR_ATTACHMENT0,I,N);else St(H.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,I,0);T(b)?y(I):b.mipmaps.length>0&&n.texParameteri(I,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&fn(R)}function O(R){let b=R.textures;for(let H=0,ue=b.length;H<ue;H++){let ie=b[H];if(T(ie)&&ie.mipmapsAutoUpdate===!0){let pe=M(R),xe=i.get(ie).__webglTexture;t.bindTexture(pe,xe),y(pe),t.unbindTexture()}}}let Jt=[];function xt(R){if(R.samples>0){if(ve(R)===!1){let b=R.textures,H=R.width,ue=R.height,ie=n.COLOR_BUFFER_BIT,pe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(R),I=b.length>1;if(I)for(let $=0;$<b.length;$++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let $=0;$<b.length;$++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),I){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[$]);let C=i.get(b[$]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,C,0)}n.blitFramebuffer(0,0,H,ue,0,0,H,ue,ie,n.NEAREST),l===!0&&(Jt.length=0,Jt.push(n.COLOR_ATTACHMENT0+$),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Jt.push(pe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Jt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),I)for(let $=0;$<b.length;$++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,xe.__webglColorRenderbuffer[$]);let C=i.get(b[$]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,C,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function _t(R){return Math.min(s.maxSamples,R.samples)}function ve(R){let b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Lt(R){let b=a.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function Be(R,b){let H=R.colorSpace,ue=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==hr&&H!==yi&&(st.getTransfer(H)===ut?(ue!==Hn||ie!==pn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",H)),b}function Ve(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ue,this.resetTextureUnits=ne,this.getTextureUnits=ee,this.setTextureUnits=ge,this.setTexture2D=_e,this.setTexture2DArray=we,this.setTexture3D=j,this.setTextureCube=k,this.rebindTextures=an,this.setupRenderTarget=on,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=fn,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ve,this.dispose=Z}function t_(n,e){function t(i,s=yi){let r,a=st.getTransfer(s);if(i===pn)return n.UNSIGNED_BYTE;if(i===vo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===dc)return n.BYTE;if(i===fc)return n.SHORT;if(i===Bs)return n.UNSIGNED_SHORT;if(i===yo)return n.INT;if(i===Bn)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===zn)return n.HALF_FLOAT;if(i===gc)return n.ALPHA;if(i===xc)return n.RGB;if(i===Hn)return n.RGBA;if(i===fi)return n.DEPTH_COMPONENT;if(i===_i)return n.DEPTH_STENCIL;if(i===bo)return n.RED;if(i===So)return n.RED_INTEGER;if(i===Hi)return n.RG;if(i===wo)return n.RG_INTEGER;if(i===Eo)return n.RGBA_INTEGER;if(i===kr||i===Br||i===zr||i===Hr)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===To||i===Ao||i===Ro||i===Co)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===To)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Po||i===Io||i===Lo||i===Do||i===No||i===Vr||i===Uo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Po||i===Io)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Lo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Do)return r.COMPRESSED_R11_EAC;if(i===No)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Vr)return r.COMPRESSED_RG11_EAC;if(i===Uo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fo||i===Oo||i===ko||i===Bo||i===zo||i===Ho||i===Vo||i===Go||i===Wo||i===Xo||i===$o||i===qo||i===Yo||i===Zo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ko)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ho)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Go)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$o)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jo||i===Ko||i===jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Jo)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qo||i===el||i===Gr||i===tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===as?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new wr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ti({vertexShader:n_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fe(new gt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vc=class extends Kn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,v=typeof XRWebGLBinding<"u",p=new Hc,m={},_=t.getContextAttributes(),T=null,y=null,M=[],E=[],x=new Ye,S=null,P=null,A=new nn;A.viewport=new At;let D=new nn;D.viewport=new At;let F=[A,D],W=new po,L=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let _e=M[te];return _e===void 0&&(_e=new Ds,M[te]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(te){let _e=M[te];return _e===void 0&&(_e=new Ds,M[te]=_e),_e.getGripSpace()},this.getHand=function(te){let _e=M[te];return _e===void 0&&(_e=new Ds,M[te]=_e),_e.getHandSpace()};function Q(te){let _e=E.indexOf(te.inputSource);if(_e===-1)return;let we=M[_e];we!==void 0&&(we.update(te.inputSource,te.frame,c||a),we.dispatchEvent({type:te.type,data:te.inputSource}))}function Y(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",se);for(let te=0;te<M.length;te++){let _e=E[te];_e!==null&&(E[te]=null,M[te].disconnect(_e))}L=null,Z=null,p.reset();for(let te in m)delete m[te];if(e.setRenderTarget(T),f=null,d=null,h=null,s=null,y=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),P!==null){let te=P.camera;te.fov=P.fov,te.zoom=P.zoom,te.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",se),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,j=null,k=null;_.depth&&(k=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=_.stencil?_i:fi,j=_.stencil?as:Bn);let oe={colorFormat:t.RGBA8,depthFormat:k,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new yn(d.textureWidth,d.textureHeight,{format:Hn,type:pn,depthTexture:new mi(d.textureWidth,d.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let we={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new yn(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function se(te){for(let _e=0;_e<te.removed.length;_e++){let we=te.removed[_e],j=E.indexOf(we);j>=0&&(E[j]=null,M[j].disconnect(we))}for(let _e=0;_e<te.added.length;_e++){let we=te.added[_e],j=E.indexOf(we);if(j===-1){for(let oe=0;oe<M.length;oe++)if(oe>=E.length){E.push(we),j=oe;break}else if(E[oe]===null){E[oe]=we,j=oe;break}if(j===-1)break}let k=M[j];k&&k.connect(we)}}function K(te,_e){_e===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(_e.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let _e=te.near,we=te.far;p.texture!==null&&(p.depthNear>0&&(_e=p.depthNear),p.depthFar>0&&(we=p.depthFar)),W.near=D.near=A.near=_e,W.far=D.far=A.far=we,(L!==W.near||Z!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),L=W.near,Z=W.far),W.layers.mask=te.layers.mask|6,A.layers.mask=W.layers.mask&-5,D.layers.mask=W.layers.mask&-3;let j=te.parent,k=W.cameras;K(W,j);for(let oe=0;oe<k.length;oe++)K(k[oe],j);W.projectionMatrix.copy(A.projectionMatrix),W.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&te.isPerspectiveCamera&&(P={camera:te,fov:te.fov,zoom:te.zoom}),ne(te,W,j)};function ne(te,_e,we){we===null?te.matrix.copy(_e.matrixWorld):(te.matrix.copy(we.matrixWorld),te.matrix.invert(),te.matrix.multiply(_e.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(_e.projectionMatrix),te.projectionMatrixInverse.copy(_e.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Xa*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function(te){return m[te]};let ee=null;function ge(te,_e){if(u=_e.getViewerPose(c||a),g=_e,u!==null){let we=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let j=!1;we.length!==W.cameras.length&&(W.cameras.length=0,j=!0);for(let me=0;me<we.length;me++){let Se=we[me],et=null;if(f!==null)et=f.getViewport(Se);else{let Ke=h.getViewSubImage(d,Se);et=Ke.viewport,me===0&&(e.setRenderTargetTextures(y,Ke.colorTexture,Ke.depthStencilTexture),e.setRenderTarget(y))}let $e=F[me];$e===void 0&&($e=new nn,$e.layers.enable(me),$e.viewport=new At,F[me]=$e),$e.matrix.fromArray(Se.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Se.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(et.x,et.y,et.width,et.height),me===0&&(W.matrix.copy($e.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),j===!0&&W.cameras.push($e)}let k=s.enabledFeatures;if(k&&k.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();let me=h.getDepthInformation(we[0]);me&&me.isValid&&me.texture&&p.init(me,s.renderState)}if(k&&k.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let me=0;me<we.length;me++){let Se=we[me].camera;if(Se){let et=m[Se];et||(et=new wr,m[Se]=et);let $e=h.getCameraImage(Se);et.sourceTexture=$e}}}}for(let we=0;we<M.length;we++){let j=E[we],k=M[we];j!==null&&k!==void 0&&k.update(j,_e,c||a)}ee&&ee(te,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),g=null}let Ue=new td;Ue.setAnimationLoop(ge),this.setAnimationLoop=function(te){ee=te},this.dispose=function(){}}},s_=new dt,ud=new Xe;ud.set(-1,0,0,0,1,0,0,0,1);function r_(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,wc(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,T,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===un&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===un&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=e.get(m),T=_.envMap,y=_.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ud),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function a_(n,e,t,i){let s={},r={};function a(_,T){let y=T.program;i.uniformBlockBinding(_,y,s[_.id])}function o(_,T){let y=s[_.id];y===void 0&&(g(_),y=l(_),s[_.id]=y,_.addEventListener("dispose",p));let M=T.program;i.updateUBOMapping(_,M);let E=e.render.frame;r[_.id]!==E&&(c(_),r[_.id]=E)}function l(_){let T=n.createBuffer(),y=_.__size,M=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,y,M),n.bindBuffer(n.UNIFORM_BUFFER,null),T}function c(_){let T=s[_.id],y=_.uniforms,M=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let E=0,x=y.length;E<x;E++){let S=y[E];if(Array.isArray(S))for(let P=0,A=S.length;P<A;P++)u(S[P],E,P,M);else u(S,E,0,M)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,T,y,M){if(d(_,T,y,M)===!0){let E=_.__offset,x=_.value;if(Array.isArray(x)){let S=0;for(let P=0;P<x.length;P++){let A=x[P],D=v(A,!0);h(A,_.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,_.__data)}}function h(_,T,y){typeof _=="number"||typeof _=="boolean"?T[y]=_:_.isMatrix3?(T[y]=_.elements[0],T[y+1]=_.elements[1],T[y+2]=_.elements[2],T[y+3]=0,T[y+4]=_.elements[3],T[y+5]=_.elements[4],T[y+6]=_.elements[5],T[y+7]=0,T[y+8]=_.elements[6],T[y+9]=_.elements[7],T[y+10]=_.elements[8],T[y+11]=0):ArrayBuffer.isView(_)?T.set(_.subarray(0,T.length-y),y):_.toArray(T,y)}function d(_,T,y,M){let E=_.value,x=T+"_"+y;if(Array.isArray(E)){M[x]===void 0&&(M[x]=[]);let S=M[x],P=!1;for(let A=0;A<E.length;A++)f(E[A],S,A)===!0&&(P=!0);return P}return f(E,M,x)}function f(_,T,y){if(T[y]===void 0)return typeof _=="number"||typeof _=="boolean"?T[y]=_:ArrayBuffer.isView(_)?T[y]=_.slice():T[y]=_.clone(),!0;{let M=T[y];if(typeof _=="number"||typeof _=="boolean"){if(M!==_)return T[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(M.equals(_)===!1)return M.copy(_),!0}}return!1}function g(_){let T=_.uniforms,y=0,M=16;for(let x=0,S=T.length;x<S;x++){let P=Array.isArray(T[x])?T[x]:[T[x]];for(let A=0,D=P.length;A<D;A++){let F=P[A],W=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(T[x])||Array.isArray(F.value),Z=y;for(let Y=0,se=W.length;Y<se;Y++){let K=W[Y],ne=v(K,L),ee=y%M,ge=ee%ne.boundary,Ue=ee+ge;y+=ge,Ue!==0&&M-Ue<ne.storage&&(y+=M-Ue),Y===0&&(Z=y),y+=ne.storage}let Q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Q((y-Z)/Float32Array.BYTES_PER_ELEMENT),F.__offset=Z}}let E=y%M;return E>0&&(y+=M-E),_.__size=y,_.__cache={},this}function v(_,T){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):He("WebGLRenderer: Unsupported uniform value type.",_),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(_){let T=_.target;T.removeEventListener("dispose",p),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:m}}var o_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function l_(){return ii===null&&(ii=new vr(o_,16,16,Hi,zn),ii.name="DFG_LUT",ii.minFilter=cn,ii.magFilter=cn,ii.wrapS=Jn,ii.wrapT=Jn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var rl=class{constructor(e={}){let{canvas:t=Eu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=pn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=f,p=new Set([Eo,wo,So]),m=new Set([pn,Bn,Bs,as,vo,Mo]),_=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},M=null,E=null,x=[],S=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,F=null,W=null,L=null,Z=null;this._outputColorSpace=qt;let Q=0,Y=0,se=null,K=-1,ne=null,ee=new At,ge=new At,Ue=null,te=new ke(0),_e=0,we=t.width,j=t.height,k=1,oe=null,ze=null,me=new At(0,0,we,j),Se=new At(0,0,we,j),et=!1,$e=new Di,Ke=new Za,ct=!1,It=!1,St=new dt,bn=new B,Ft=new At,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},an=!1;function on(){return se===null?k:1}let O=i;function Jt(w,U){return t.getContext(w,U)}let xt,_t,ve,Lt,Be,Ve,R,b,H,ue,ie,pe,xe,I,N,$,C,q,V,ce,re,he,Re;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",be,!1),O===null){let U="webgl2";if(O=Jt(U,w),O===null)throw Jt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(w){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),We("WebGLRenderer: "+w.message),w}function Fe(){xt=new yg(O),xt.init(),re=new t_(O,xt),_t=new lg(O,xt,e,re),ve=new Qx(O,xt),_t.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),W=O.createFramebuffer(),L=O.createFramebuffer(),Z=O.createFramebuffer(),Lt=new bg(O),Be=new Bx,Ve=new e_(O,xt,ve,Be,_t,re,Lt),R=new _g(A),b=new wp(O),he=new ag(O,b),H=new vg(O,b,Lt,he),ue=new wg(O,H,b,he,Lt),q=new Sg(O,_t,Ve),N=new cg(Be),ie=new kx(A,R,xt,_t,he,N),pe=new r_(A,Be),xe=new Hx,I=new qx(xt),C=new rg(A,R,ve,ue,g,l),$=new jx(A,ue,_t),Re=new a_(O,Lt,_t,ve),V=new og(O,xt,Lt),ce=new Mg(O,xt,Lt),Lt.programs=ie.programs,A.capabilities=_t,A.extensions=xt,A.properties=Be,A.renderLists=xe,A.shadowMap=$,A.state=ve,A.info=Lt}v!==pn&&(P=new Tg(v,t.width,t.height,o,s,r));let ae=new Vc(A,O);this.xr=ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=xt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=xt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(we,j,!1))},this.getSize=function(w){return w.set(we,j)},this.setSize=function(w,U,J=!0){if(ae.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}we=w,j=U,t.width=Math.floor(w*k),t.height=Math.floor(U*k),J===!0&&(t.style.width=w+"px",t.style.height=U+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(we*k,j*k).floor()},this.setDrawingBufferSize=function(w,U,J){we=w,j=U,k=J,t.width=Math.floor(w*J),t.height=Math.floor(U*J),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(v===pn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ee)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,U,J,G){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,U,J,G),ve.viewport(ee.copy(me).multiplyScalar(on()).round())},this.getScissor=function(w){return w.copy(Se)},this.setScissor=function(w,U,J,G){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,U,J,G),ve.scissor(ge.copy(Se).multiplyScalar(on()).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(w){ve.setScissorTest(et=w)},this.setOpaqueSort=function(w){oe=w},this.setTransparentSort=function(w){ze=w},this.getClearColor=function(w){return w.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,J=!0){let G=0;if(w){let X=!1;if(se!==null){let Me=se.texture.format;X=p.has(Me)}if(X){let Me=se.texture.type,Pe=m.has(Me),ye=C.getClearColor(),Ae=C.getClearAlpha(),Ne=ye.r,qe=ye.g,nt=ye.b;Pe?(_[0]=Ne,_[1]=qe,_[2]=nt,_[3]=Ae,O.clearBufferuiv(O.COLOR,0,_)):(T[0]=Ne,T[1]=qe,T[2]=nt,T[3]=Ae,O.clearBufferiv(O.COLOR,0,T))}else G|=O.COLOR_BUFFER_BIT}U&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),F=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),C.dispose(),xe.dispose(),I.dispose(),Ve.dispose(),Be.dispose(),R.dispose(),ue.dispose(),H.dispose(),he.dispose(),Re.dispose(),ie.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",la),ae.removeEventListener("sessionend",ca),qn.stop()};function Ce(w){w.preventDefault(),bc("WebGLRenderer: Context Lost."),D=!0}function Oe(){bc("WebGLRenderer: Context Restored."),D=!1;let w=Lt.autoReset,U=$.enabled,J=$.autoUpdate,G=$.needsUpdate,X=$.type;Fe(),Lt.autoReset=w,$.enabled=U,$.autoUpdate=J,$.needsUpdate=G,$.type=X}function be(w){We("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function tt(w){let U=w.target;U.removeEventListener("dispose",tt),Ct(U)}function Ct(w){Kt(w),Be.remove(w)}function Kt(w){let U=Be.get(w).programs;U!==void 0&&(U.forEach(function(J){ie.releaseProgram(J)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,J,G,X,Me){U===null&&(U=fn);let Pe=X.isMesh&&X.matrixWorld.determinantAffine()<0,ye=Ff(w,U,J,G,X);ve.setMaterial(G,Pe);let Ae=J.index,Ne=1;if(G.wireframe===!0){if(Ae=H.getWireframeAttribute(J),Ae===void 0)return;Ne=2}let qe=J.drawRange,nt=J.attributes.position,Le=qe.start*Ne,it=(qe.start+qe.count)*Ne;Me!==null&&(Le=Math.max(Le,Me.start*Ne),it=Math.min(it,(Me.start+Me.count)*Ne)),Ae!==null?(Le=Math.max(Le,0),it=Math.min(it,Ae.count)):nt!=null&&(Le=Math.max(Le,0),it=Math.min(it,nt.count));let Ot=it-Le;if(Ot<0||Ot===1/0)return;he.setup(X,G,ye,J,Ae);let wt,yt=V;if(Ae!==null&&(wt=b.get(Ae),yt=ce,yt.setIndex(wt)),X.isMesh)G.wireframe===!0?(ve.setLineWidth(G.wireframeLinewidth*on()),yt.setMode(O.LINES)):yt.setMode(O.TRIANGLES);else if(X.isLine){let jt=G.linewidth;jt===void 0&&(jt=1),ve.setLineWidth(jt*on()),X.isLineSegments?yt.setMode(O.LINES):X.isLineLoop?yt.setMode(O.LINE_LOOP):yt.setMode(O.LINE_STRIP)}else X.isPoints?yt.setMode(O.POINTS):X.isSprite&&yt.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))yt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let jt=X._multiDrawStarts,De=X._multiDrawCounts,ln=X._multiDrawCount,ht=Ae?b.get(Ae).bytesPerElement:1,$i=Be.get(G).currentProgram.getUniforms();for(let Qt=0;Qt<ln;Qt++)$i.setValue(O,"_gl_DrawID",Qt),yt.render(jt[Qt]/ht,De[Qt])}else if(X.isInstancedMesh)yt.renderInstances(Le,Ot,X.count);else if(J.isInstancedBufferGeometry){let jt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,De=Math.min(J.instanceCount,jt);yt.renderInstances(Le,Ot,De)}else yt.render(Le,Ot)};function mn(w,U,J,G){F!==null&&w.isNodeMaterial&&F.setObject(G,w),ct===!0&&N.setState(w,J,!1),w.transparent===!0&&w.side===Mt&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,er(w,U,G),w.side=zi,w.needsUpdate=!0,er(w,U,G),w.side=Mt):er(w,U,G)}this.compile=function(w,U,J=null){J===null&&(J=w),F!==null&&F.renderStart(w,U,J),E=I.get(J),E.init(U),S.push(E),J.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),w!==J&&w.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),It=this.localClippingEnabled,ct=N.init(this.clippingPlanes,It),ct===!0&&N.setGlobalState(this.clippingPlanes,U),F!==null&&$.render(E.state.shadowsArray,J,U);let G=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Me=X.material;if(Me)if(Array.isArray(Me))for(let Pe=0;Pe<Me.length;Pe++){let ye=Me[Pe];mn(ye,J,U,X),G.add(ye)}else mn(Me,J,U,X),G.add(Me)}),E=S.pop(),F!==null&&F.renderEnd(),G},this.compileAsync=function(w,U,J=null){let G=this.compile(w,U,J);return new Promise(X=>{function Me(){if(G.forEach(function(Pe){let Ae=Be.get(Pe).currentProgram;(Ae===void 0||Ae.isReady())&&G.delete(Pe)}),G.size===0){X(w);return}setTimeout(Me,10)}xt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Sn=null;function Ks(w){Sn&&Sn(w)}function la(){qn.stop()}function ca(){qn.start()}let qn=new td;qn.setAnimationLoop(Ks),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(w){Sn=w,ae.setAnimationLoop(w),w===null?qn.stop():qn.start()},ae.addEventListener("sessionstart",la),ae.addEventListener("sessionend",ca),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(w,U);let J=ae.enabled===!0&&ae.isPresenting===!0,G=P!==null&&(se===null||J)&&P.begin(A,se);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,U,se),E=I.get(w,S.length),E.init(U),E.state.textureUnits=Ve.getTextureUnits(),S.push(E),St.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Ke.setFromArrayCamera(U):$e.setFromProjectionMatrix(St,En,U.reversedDepth),It=this.localClippingEnabled,ct=N.init(this.clippingPlanes,It),M=xe.get(w,x.length),M.init(),x.push(M),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let Pe=A.xr.getDepthSensingMesh();Pe!==null&&ds(Pe,U,-1/0,A.sortObjects)}ds(w,U,0,A.sortObjects),M.finish(),F!==null&&F.updateLights(E.state.lightsArray),A.sortObjects===!0&&M.sort(oe,ze),an=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,an&&C.addToRenderList(M,w),this.info.autoReset===!0&&this.info.reset(),ct===!0&&N.beginShadows();let X=E.state.shadowsArray;if($.render(X,w,U),ct===!0&&N.endShadows(),(G&&P.hasRenderPass())===!1){let Pe=M.opaque,ye=M.transmissive;if(E.setupLights(),U.isArrayCamera){let Ae=U.cameras;if(ye.length>0)for(let Ne=0,qe=Ae.length;Ne<qe;Ne++){let nt=Ae[Ne];fs(Pe,ye,w,nt)}an&&C.render(w);for(let Ne=0,qe=Ae.length;Ne<qe;Ne++){let nt=Ae[Ne];js(M,w,nt,nt.viewport)}}else ye.length>0&&fs(Pe,ye,w,U),an&&C.render(w),js(M,w,U)}se!==null&&Y===0&&(Ve.updateMultisampleRenderTarget(se),Ve.updateRenderTargetMipmap(se)),G&&P.end(A),w.isScene===!0&&w.onAfterRender(A,w,U),he.resetDefaultState(),K=-1,ne=null,S.pop(),S.length>0?(E=S[S.length-1],Ve.setTextureUnits(E.state.textureUnits),ct===!0&&N.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?M=x[x.length-1]:M=null,F!==null&&F.renderEnd()};function ds(w,U,J,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let Pe=U.isArrayCamera?Ke:$e;if(!w.frustumCulled||w.intersectsFrustum(Pe)){G&&Ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(St);let ye=ue.update(w),Ae=w.material;Ae.visible&&M.push(w,ye,Ae,J,Ft.z,null,U)}}else if(w.isMesh||w.isLine||w.isPoints){let Pe=U.isArrayCamera?Ke:$e;if(!w.frustumCulled||w.intersectsFrustum(Pe)){let ye=ue.update(w),Ae=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ft.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ft.copy(ye.boundingSphere.center)),Ft.applyMatrix4(w.matrixWorld).applyMatrix4(St)),Array.isArray(Ae)){let Ne=ye.groups;for(let qe=0,nt=Ne.length;qe<nt;qe++){let Le=Ne[qe],it=Ae[Le.materialIndex];it&&it.visible&&M.push(w,ye,it,J,Ft.z,Le,U)}}else Ae.visible&&M.push(w,ye,Ae,J,Ft.z,null,U)}}}let Me=w.children;for(let Pe=0,ye=Me.length;Pe<ye;Pe++)ds(Me[Pe],U,J,G)}function js(w,U,J,G){let{opaque:X,transmissive:Me,transparent:Pe}=w;E.setupLightsView(J),ct===!0&&N.setGlobalState(A.clippingPlanes,J),G&&ve.viewport(ee.copy(G)),X.length>0&&Yn(X,U,J),Me.length>0&&Yn(Me,U,J),Pe.length>0&&Yn(Pe,U,J),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function fs(w,U,J,G){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){let Le=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new yn(1,1,{generateMipmaps:!0,type:Le?zn:pn,minFilter:xi,samples:Math.max(4,_t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let Me=E.state.transmissionRenderTarget[G.id],Pe=G.viewport||ee;Me.setSize(Pe.z*A.transmissionResolutionScale,Pe.w*A.transmissionResolutionScale);let ye=A.getRenderTarget(),Ae=A.getActiveCubeFace(),Ne=A.getActiveMipmapLevel();A.setRenderTarget(Me),A.getClearColor(te),_e=A.getClearAlpha(),_e<1&&A.setClearColor(16777215,.5),A.clear(),an&&C.render(J);let qe=A.toneMapping;A.toneMapping=ni;let nt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),ct===!0&&N.setGlobalState(A.clippingPlanes,G),Yn(w,J,G),Ve.updateMultisampleRenderTarget(Me),Ve.updateRenderTargetMipmap(Me),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let it=0,Ot=U.length;it<Ot;it++){let wt=U[it],{object:yt,geometry:jt,material:De,group:ln}=wt;if(De.side===Mt&&yt.layers.test(G.layers)){let ht=De.side;De.side=un,De.needsUpdate=!0,Ln(yt,J,G,jt,De,ln),De.side=ht,De.needsUpdate=!0,Le=!0}}Le===!0&&(Ve.updateMultisampleRenderTarget(Me),Ve.updateRenderTargetMipmap(Me))}A.setRenderTarget(ye,Ae,Ne),A.setClearColor(te,_e),nt!==void 0&&(G.viewport=nt),A.toneMapping=qe}function Yn(w,U,J){let G=U.isScene===!0?U.overrideMaterial:null;for(let X=0,Me=w.length;X<Me;X++){let Pe=w[X],{object:ye,geometry:Ae,group:Ne}=Pe,qe=Pe.material;qe.allowOverride===!0&&G!==null&&(qe=G),ye.layers.test(J.layers)&&Ln(ye,U,J,Ae,qe,Ne)}}function Ln(w,U,J,G,X,Me){F!==null&&X.isNodeMaterial&&F.setObject(w,X),w.onBeforeRender(A,U,J,G,X,Me),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(A,U,J,G,w,Me),X.transparent===!0&&X.side===Mt&&X.forceSinglePass===!1?(X.side=un,X.needsUpdate=!0,A.renderBufferDirect(J,U,G,X,w,Me),X.side=zi,X.needsUpdate=!0,A.renderBufferDirect(J,U,G,X,w,Me),X.side=Mt):A.renderBufferDirect(J,U,G,X,w,Me),w.onAfterRender(A,U,J,G,X,Me)}function Qs(w){let U=0;for(let J of w)J.texture!==null&&U++;return U}function er(w,U,J){U.isScene!==!0&&(U=fn);let G=Be.get(w),X=E.state.lights,Me=E.state.shadowsArray,Pe=X.state.version,ye=ie.getParameters(w,X.state,Me,U,J,E.state.lightProbeGridArray),Ae=ie.getProgramCacheKey(ye),Ne=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=R.get(w.envMap||G.environment,qe),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",tt),Ne=new Map,G.programs=Ne,G.programVariants=new Map);let nt=Ne.get(Ae);if(nt!==void 0){if(G.currentProgram===nt&&G.lightsStateVersion===Pe)return ph(w,ye),nt}else ye.uniforms=ie.getUniforms(w),F!==null&&w.isNodeMaterial&&F.build(w,J,ye),w.onBeforeCompile(ye,A),nt=ie.acquireProgram(ye,Ae),Ne.set(Ae,nt),G.uniforms=ye.uniforms;let Le=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=N.uniform),ph(w,ye),G.needsLights=kf(w),G.lightsStateVersion=Pe,G.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.sunLights.value=X.state.sun,Le.sunLightShadows.value=X.state.sunShadow,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.sunShadowMatrix.value=X.state.sunShadowMatrix,Le.sunShadowCascade.value=X.state.sunShadowCascade,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),G.numLightProbeGrids=Qs(E.state.lightProbeGridArray),G.currentProgram=nt,G.uniformsList=null,nt}function Uf(w,U,J,G,X){let Me=Be.get(w),Pe=Me.currentProgram.id+","+G+","+X,ye=Me.programVariants.get(Pe);return ye===void 0?(ye=er(w,U,J),Me.programVariants.set(Pe,ye)):(Me.currentProgram=ye,Me.uniformsList=null,Me.outputColorSpace=G,Me.toneMapping=X),ye}function fh(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=zs.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function ph(w,U){let J=Be.get(w);J.outputColorSpace=U.outputColorSpace,J.batching=U.batching,J.batchingColor=U.batchingColor,J.instancing=U.instancing,J.instancingColor=U.instancingColor,J.instancingMorph=U.instancingMorph,J.skinning=U.skinning,J.morphTargets=U.morphTargets,J.morphNormals=U.morphNormals,J.morphColors=U.morphColors,J.morphTargetsCount=U.morphTargetsCount,J.numClippingPlanes=U.numClippingPlanes,J.numIntersection=U.numClipIntersection,J.vertexAlphas=U.vertexAlphas,J.vertexTangents=U.vertexTangents,J.toneMapping=U.toneMapping}function Ff(w,U,J,G,X){U.isScene!==!0&&(U=fn),Ve.resetTextureUnits();let Me=U.fog,Pe=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,ye=se===null?A.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:st.workingColorSpace,Ae=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ne=R.get(G.envMap||Pe,Ae),qe=G.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,nt=!!J.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!J.morphAttributes.position,it=!!J.morphAttributes.normal,Ot=!!J.morphAttributes.color,wt=ni;G.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(wt=A.toneMapping);let yt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,jt=yt!==void 0?yt.length:0,De=Be.get(G),ln=E.state.lights;if(ct===!0&&(It===!0||w!==ne)){let Pt=w===ne&&G.id===K;N.setState(G,w,Pt)}let ht=!1,$i=!1;G.version===De.__version?De.needsLights&&De.lightsStateVersion!==ln.state.version||X.isBatchedMesh&&De.batching===!1||!X.isBatchedMesh&&De.batching===!0||X.isBatchedMesh&&De.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&De.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&De.instancing===!1||!X.isInstancedMesh&&De.instancing===!0||X.isSkinnedMesh&&De.skinning===!1||!X.isSkinnedMesh&&De.skinning===!0||X.isInstancedMesh&&De.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&De.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&De.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&De.instancingMorph===!1&&X.morphTexture!==null||De.envMap!==Ne||G.fog===!0&&De.fog!==Me||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==N.numPlanes||De.numIntersection!==N.numIntersection)||De.vertexAlphas!==qe||De.vertexTangents!==nt||De.morphTargets!==Le||De.morphNormals!==it||De.morphColors!==Ot||De.morphTargetsCount!==jt||De.numLightProbeGrids!==Qs(E.state.lightProbeGridArray)?ht=!0:(De.outputColorSpace!==ye||De.toneMapping!==wt)&&($i=!0):(ht=!0,De.__version=G.version);let Qt=De.currentProgram;(ht===!0||$i===!0)&&(Qt=$i===!0?Uf(G,U,X,ye,wt):er(G,U,X),F&&G.isNodeMaterial&&F.onUpdateProgram(G,Qt,De));let ha=!1,Ei=!1,qi=!1,ot=Qt.getUniforms(),$t=De.uniforms;if(ve.useProgram(Qt.program)&&(ha=!0,Ei=!0,qi=!0),G.id!==K&&(K=G.id,Ei=!0),ha||ne!==w){ve.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ot.setValue(O,"projectionMatrix",w.projectionMatrix),ot.setValue(O,"viewMatrix",w.matrixWorldInverse);let Gt=ot.map.cameraPosition;Gt!==void 0&&Gt.setValue(O,bn.setFromMatrixPosition(w.matrixWorld)),_t.logarithmicDepthBuffer&&ot.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ot.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),ne!==w&&(ne=w,Ei=!0,qi=!0)}if(De.needsLights&&(ln.state.sunShadowMap.length>0&&ot.setValue(O,"sunShadowMap",ln.state.sunShadowMap,Ve),ln.state.directionalShadowMap.length>0&&ot.setValue(O,"directionalShadowMap",ln.state.directionalShadowMap,Ve),ln.state.spotShadowMap.length>0&&ot.setValue(O,"spotShadowMap",ln.state.spotShadowMap,Ve),ln.state.pointShadowMap.length>0&&ot.setValue(O,"pointShadowMap",ln.state.pointShadowMap,Ve)),X.isSkinnedMesh){ot.setOptional(O,X,"bindMatrix"),ot.setOptional(O,X,"bindMatrixInverse");let Pt=X.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ot.setValue(O,"boneTexture",Pt.boneTexture,Ve))}X.isBatchedMesh&&(ot.setOptional(O,X,"batchingTexture"),ot.setValue(O,"batchingTexture",X._matricesTexture,Ve),ot.setOptional(O,X,"batchingIdTexture"),ot.setValue(O,"batchingIdTexture",X._indirectTexture,Ve),ot.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&ot.setValue(O,"batchingColorTexture",X._colorsTexture,Ve));let Dn=J.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&q.update(X,J,Qt),(Ei||De.receiveShadow!==X.receiveShadow)&&(De.receiveShadow=X.receiveShadow,ot.setValue(O,"receiveShadow",X.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&($t.envMapIntensity.value=U.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=l_()),Ei){if(ot.setValue(O,"toneMappingExposure",A.toneMappingExposure),De.needsLights&&Of($t,qi),Me&&G.fog===!0&&pe.refreshFogUniforms($t,Me),pe.refreshMaterialUniforms($t,G,k,j,E.state.transmissionRenderTarget[w.id]),De.needsLights&&De.numLightProbeGrids>0){let Pt=y,Gt=0;for(let ai of E.state.lightProbeGridArray)ai.texture!==null&&(Pt.textures[Gt]=ai.texture,Pt.min[Gt]=ai.boundingBox.min,Pt.max[Gt]=ai.boundingBox.max,Pt.resolution[Gt]=ai.resolution,Gt++);for(let ai in Pt)Pt[ai].length=Gt;$t.probesSH.value=Pt.textures,$t.probesMin.value=Pt.min,$t.probesMax.value=Pt.max,$t.probesResolution.value=Pt.resolution}zs.upload(O,fh(De),$t,Ve)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(zs.upload(O,fh(De),$t,Ve),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ot.setValue(O,"center",X.center),ot.setValue(O,"modelViewMatrix",X.modelViewMatrix),ot.setValue(O,"normalMatrix",X.normalMatrix),ot.setValue(O,"modelMatrix",X.matrixWorld),G.uniformsGroups!==void 0){let Pt=G.uniformsGroups;for(let Gt=0,ai=Pt.length;Gt<ai;Gt++){let gh=Pt[Gt];Re.update(gh,Qt),Re.bind(gh,Qt)}}return Qt}function Of(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function kf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(w,U,J){let G=Be.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Be.get(w.texture).__webglTexture=U,Be.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:J,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let J=Be.get(w);J.__webglFramebuffer=U,J.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,J=0){se=w,Q=U,Y=J;let G=null,X=!1,Me=!1;if(w){let ye=Be.get(w);if(ye.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(O.FRAMEBUFFER,ye.__webglFramebuffer),ee.copy(w.viewport),ge.copy(w.scissor),Ue=w.scissorTest,ve.viewport(ee),ve.scissor(ge),ve.setScissorTest(Ue),K=-1;return}else if(ye.__webglFramebuffer===void 0)Ve.setupRenderTarget(w);else if(ye.__hasExternalTextures)Ve.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let qe=w.depthTexture;if(ye.__boundDepthTexture!==qe){if(qe!==null&&Be.has(qe)&&(w.width!==qe.image.width||w.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(w)}}let Ae=w.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Me=!0);let Ne=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?G=Ne[U][J]:G=Ne[U],X=!0):w.samples>0&&Ve.useMultisampledRTT(w)===!1?G=Be.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[J]:G=Ne,ee.copy(w.viewport),ge.copy(w.scissor),Ue=w.scissorTest}else ee.copy(me).multiplyScalar(k).floor(),ge.copy(Se).multiplyScalar(k).floor(),Ue=et;if(J!==0&&(G=W),ve.bindFramebuffer(O.FRAMEBUFFER,G)&&ve.drawBuffers(w,G),ve.viewport(ee),ve.scissor(ge),ve.setScissorTest(Ue),X){let ye=Be.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,J)}else if(Me){let ye=U;for(let Ae=0;Ae<w.textures.length;Ae++){let Ne=Be.get(w.textures[Ae]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ae,Ne.__webglTexture,J,ye)}}else if(w!==null&&J!==0){let ye=Be.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ye.__webglTexture,J)}K=-1};function mh(w){let U=Be.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=_t.textureFormatReadable(w.format),U.__typeReadable=_t.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,J,G,X,Me,Pe,ye=0){if(!(w&&w.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ae=Ae[Pe],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){ve.bindFramebuffer(O.FRAMEBUFFER,Ae);try{let Ne=w.textures[ye],qe=Ne.format,nt=Ne.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ye);let Le=mh(Ne);if(Le.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&J>=0&&J<=w.height-X&&O.readPixels(U,J,G,X,re.convert(qe),re.convert(nt),Me)}finally{let Ne=se!==null?Be.get(se).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(w,U,J,G,X,Me,Pe,ye=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ae=Ae[Pe],Array.isArray(Ae)&&(Ae=Ae[0])),Ae)if(U>=0&&U<=w.width-G&&J>=0&&J<=w.height-X){ve.bindFramebuffer(O.FRAMEBUFFER,Ae);let Ne=w.textures[ye],qe=Ne.format,nt=Ne.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ye);let Le=mh(Ne);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,it),O.bufferData(O.PIXEL_PACK_BUFFER,Me.byteLength,O.STREAM_READ),O.readPixels(U,J,G,X,re.convert(qe),re.convert(nt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ot=se!==null?Be.get(se).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,Ot);let wt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Au(O,wt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,it),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Me),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(it),O.deleteSync(wt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,J=0){let G=Math.pow(2,-J),X=Math.floor(w.image.width*G),Me=Math.floor(w.image.height*G),Pe=U!==null?U.x:0,ye=U!==null?U.y:0;Ve.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Pe,ye,X,Me),ve.unbindTexture()},this.copyTextureToTexture=function(w,U,J=null,G=null,X=0,Me=0){let Pe,ye,Ae,Ne,qe,nt,Le,it,Ot,wt=w.isCompressedTexture?w.mipmaps[Me]:w.image;if(J!==null)Pe=J.max.x-J.min.x,ye=J.max.y-J.min.y,Ae=J.isBox3?J.max.z-J.min.z:1,Ne=J.min.x,qe=J.min.y,nt=J.isBox3?J.min.z:0;else{let ot=Math.pow(2,-X);Pe=Math.floor(wt.width*ot),ye=Math.floor(wt.height*ot),w.isDataArrayTexture?Ae=wt.depth:w.isData3DTexture?Ae=Math.floor(wt.depth*ot):Ae=1,Ne=0,qe=0,nt=0}G!==null?(Le=G.x,it=G.y,Ot=G.z):(Le=0,it=0,Ot=0);let yt=re.convert(U.format),jt=re.convert(U.type),De;U.isData3DTexture?(Ve.setTexture3D(U,0),De=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ve.setTexture2DArray(U,0),De=O.TEXTURE_2D_ARRAY):(Ve.setTexture2D(U,0),De=O.TEXTURE_2D),ve.activeTexture(O.TEXTURE0),ve.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),ve.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ve.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let ln=ve.getParameter(O.UNPACK_ROW_LENGTH),ht=ve.getParameter(O.UNPACK_IMAGE_HEIGHT),$i=ve.getParameter(O.UNPACK_SKIP_PIXELS),Qt=ve.getParameter(O.UNPACK_SKIP_ROWS),ha=ve.getParameter(O.UNPACK_SKIP_IMAGES);ve.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),ve.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),ve.pixelStorei(O.UNPACK_SKIP_PIXELS,Ne),ve.pixelStorei(O.UNPACK_SKIP_ROWS,qe),ve.pixelStorei(O.UNPACK_SKIP_IMAGES,nt);let Ei=w.isDataArrayTexture||w.isData3DTexture,qi=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let ot=Be.get(w),$t=Be.get(U),Dn=Be.get(ot.__renderTarget),Pt=Be.get($t.__renderTarget);ve.bindFramebuffer(O.READ_FRAMEBUFFER,Dn.__webglFramebuffer),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Gt=0;Gt<Ae;Gt++)Ei&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Be.get(w).__webglTexture,X,nt+Gt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Be.get(U).__webglTexture,Me,Ot+Gt)),O.blitFramebuffer(Ne,qe,Ne+Pe,qe+ye,Le,it,Le+Pe,it+ye,O.DEPTH_BUFFER_BIT,O.NEAREST);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||Be.has(w)){let ot=Be.get(w),$t=Be.get(U);ve.bindFramebuffer(O.READ_FRAMEBUFFER,L),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,Z);for(let Dn=0;Dn<Ae;Dn++)Ei?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ot.__webglTexture,X,nt+Dn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ot.__webglTexture,X),qi?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$t.__webglTexture,Me,Ot+Dn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,$t.__webglTexture,Me),X!==0?O.blitFramebuffer(Ne,qe,Ne+Pe,qe+ye,Le,it,Le+Pe,it+ye,O.COLOR_BUFFER_BIT,O.NEAREST):qi?O.copyTexSubImage3D(De,Me,Le,it,Ot+Dn,Ne,qe,Pe,ye):O.copyTexSubImage2D(De,Me,Le,it,Ne,qe,Pe,ye);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else qi?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(De,Me,Le,it,Ot,Pe,ye,Ae,yt,jt,wt.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(De,Me,Le,it,Ot,Pe,ye,Ae,yt,wt.data):O.texSubImage3D(De,Me,Le,it,Ot,Pe,ye,Ae,yt,jt,wt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Me,Le,it,Pe,ye,yt,jt,wt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Me,Le,it,wt.width,wt.height,yt,wt.data):O.texSubImage2D(O.TEXTURE_2D,Me,Le,it,Pe,ye,yt,jt,wt);ve.pixelStorei(O.UNPACK_ROW_LENGTH,ln),ve.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht),ve.pixelStorei(O.UNPACK_SKIP_PIXELS,$i),ve.pixelStorei(O.UNPACK_SKIP_ROWS,Qt),ve.pixelStorei(O.UNPACK_SKIP_IMAGES,ha),Me===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(De),ve.unbindTexture()},this.initRenderTarget=function(w){Be.get(w).__webglFramebuffer===void 0&&Ve.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ve.setTextureCube(w,0):w.isData3DTexture?Ve.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ve.setTexture2DArray(w,0):Ve.setTexture2D(w,0),ve.unbindTexture()},this.resetState=function(){Q=0,Y=0,se=null,ve.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};function dd(n,e){if(n.match(/^[a-z]+:\/\//i))return n;if(n.match(/^\/\//))return window.location.protocol+n;if(n.match(/^[a-z]+:/i))return n;let t=document.implementation.createHTMLDocument(),i=t.createElement("base"),s=t.createElement("a");return t.head.appendChild(i),t.body.appendChild(s),e&&(i.href=e),s.href=n,s.href}var fd=(()=>{let n=0,e=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(n+=1,`u${e()}${n}`)})();function Vn(n){let e=[];for(let t=0,i=n.length;t<i;t++)e.push(n[t]);return e}var Vs=null;function cl(n={}){return Vs||(n.includeStyleProperties?(Vs=n.includeStyleProperties,Vs):(Vs=Vn(window.getComputedStyle(document.documentElement)),Vs))}function ll(n,e){let i=(n.ownerDocument.defaultView||window).getComputedStyle(n).getPropertyValue(e);return i?parseFloat(i.replace("px","")):0}function c_(n){let e=ll(n,"border-left-width"),t=ll(n,"border-right-width");return n.clientWidth+e+t}function h_(n){let e=ll(n,"border-top-width"),t=ll(n,"border-bottom-width");return n.clientHeight+e+t}function Gc(n,e={}){let t=e.width||c_(n),i=e.height||h_(n);return{width:t,height:i}}function pd(){let n,e;try{e=process}catch{}let t=e&&e.env?e.env.devicePixelRatio:null;return t&&(n=parseInt(t,10),Number.isNaN(n)&&(n=1)),n||window.devicePixelRatio||1}var Mn=16384;function md(n){(n.width>Mn||n.height>Mn)&&(n.width>Mn&&n.height>Mn?n.width>n.height?(n.height*=Mn/n.width,n.width=Mn):(n.width*=Mn/n.height,n.height=Mn):n.width>Mn?(n.height*=Mn/n.width,n.width=Mn):(n.width*=Mn/n.height,n.height=Mn))}function Gs(n){return new Promise((e,t)=>{let i=new Image;i.onload=()=>{i.decode().then(()=>{requestAnimationFrame(()=>e(i))})},i.onerror=t,i.crossOrigin="anonymous",i.decoding="async",i.src=n})}async function u_(n){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(n)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function gd(n,e,t){let i="http://www.w3.org/2000/svg",s=document.createElementNS(i,"svg"),r=document.createElementNS(i,"foreignObject");return s.setAttribute("width",`${e}`),s.setAttribute("height",`${t}`),s.setAttribute("viewBox",`0 0 ${e} ${t}`),r.setAttribute("width","100%"),r.setAttribute("height","100%"),r.setAttribute("x","0"),r.setAttribute("y","0"),r.setAttribute("externalResourcesRequired","true"),s.appendChild(r),r.appendChild(n),u_(s)}var rn=(n,e)=>{if(n instanceof e)return!0;let t=Object.getPrototypeOf(n);return t===null?!1:t.constructor.name===e.name||rn(t,e)};function d_(n){let e=n.getPropertyValue("content");return`${n.cssText} content: '${e.replace(/'|"/g,"")}';`}function f_(n,e){return cl(e).map(t=>{let i=n.getPropertyValue(t),s=n.getPropertyPriority(t);return`${t}: ${i}${s?" !important":""};`}).join(" ")}function p_(n,e,t,i){let s=`.${n}:${e}`,r=t.cssText?d_(t):f_(t,i);return document.createTextNode(`${s}{${r}}`)}function xd(n,e,t,i){let s=window.getComputedStyle(n,t),r=s.getPropertyValue("content");if(r===""||r==="none")return;let a=fd();try{e.className=`${e.className} ${a}`}catch{return}let o=document.createElement("style");o.appendChild(p_(a,t,s,i)),e.appendChild(o)}function _d(n,e,t){xd(n,e,":before",t),xd(n,e,":after",t)}var yd="application/font-woff",vd="image/jpeg",m_={woff:yd,woff2:yd,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:vd,jpeg:vd,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function g_(n){let e=/\.([^./]*?)$/g.exec(n);return e?e[1]:""}function Ws(n){let e=g_(n).toLowerCase();return m_[e]||""}function x_(n){return n.split(/,/)[1]}function Jr(n){return n.search(/^(data:)/)!==-1}function Xc(n,e){return`data:${e};base64,${n}`}async function $c(n,e,t){let i=await fetch(n,e);if(i.status===404)throw new Error(`Resource "${i.url}" not found`);let s=await i.blob();return new Promise((r,a)=>{let o=new FileReader;o.onerror=a,o.onloadend=()=>{try{r(t({res:i,result:o.result}))}catch(l){a(l)}},o.readAsDataURL(s)})}var Wc={};function __(n,e,t){let i=n.replace(/\?.*/,"");return t&&(i=n),/ttf|otf|eot|woff2?/i.test(i)&&(i=i.replace(/.*\//,"")),e?`[${e}]${i}`:i}async function Xs(n,e,t){let i=__(n,e,t.includeQueryParams);if(Wc[i]!=null)return Wc[i];t.cacheBust&&(n+=(/\?/.test(n)?"&":"?")+new Date().getTime());let s;try{let r=await $c(n,t.fetchRequestInit,({res:a,result:o})=>(e||(e=a.headers.get("Content-Type")||""),x_(o)));s=Xc(r,e)}catch(r){s=t.imagePlaceholder||"";let a=`Failed to fetch resource: ${n}`;r&&(a=typeof r=="string"?r:r.message),a&&console.warn(a)}return Wc[i]=s,s}async function y_(n){let e=n.toDataURL();return e==="data:,"?n.cloneNode(!1):Gs(e)}async function v_(n,e){if(n.currentSrc){let r=document.createElement("canvas"),a=r.getContext("2d");r.width=n.clientWidth,r.height=n.clientHeight,a?.drawImage(n,0,0,r.width,r.height);let o=r.toDataURL();return Gs(o)}let t=n.poster,i=Ws(t),s=await Xs(t,i,e);return Gs(s)}async function M_(n,e){var t;try{if(!((t=n?.contentDocument)===null||t===void 0)&&t.body)return await Kr(n.contentDocument.body,e,!0)}catch{}return n.cloneNode(!1)}async function b_(n,e){return rn(n,HTMLCanvasElement)?y_(n):rn(n,HTMLVideoElement)?v_(n,e):rn(n,HTMLIFrameElement)?M_(n,e):n.cloneNode(Md(n))}var S_=n=>n.tagName!=null&&n.tagName.toUpperCase()==="SLOT",Md=n=>n.tagName!=null&&n.tagName.toUpperCase()==="SVG";async function w_(n,e,t){var i,s;if(Md(e))return e;let r=[];return S_(n)&&n.assignedNodes?r=Vn(n.assignedNodes()):rn(n,HTMLIFrameElement)&&(!((i=n.contentDocument)===null||i===void 0)&&i.body)?r=Vn(n.contentDocument.body.childNodes):r=Vn(((s=n.shadowRoot)!==null&&s!==void 0?s:n).childNodes),r.length===0||rn(n,HTMLVideoElement)||await r.reduce((a,o)=>a.then(()=>Kr(o,t)).then(l=>{l&&e.appendChild(l)}),Promise.resolve()),e}function E_(n,e,t){let i=e.style;if(!i)return;let s=window.getComputedStyle(n);s.cssText?(i.cssText=s.cssText,i.transformOrigin=s.transformOrigin):cl(t).forEach(r=>{let a=s.getPropertyValue(r);r==="font-size"&&a.endsWith("px")&&(a=`${Math.floor(parseFloat(a.substring(0,a.length-2)))-.1}px`),rn(n,HTMLIFrameElement)&&r==="display"&&a==="inline"&&(a="block"),r==="d"&&e.getAttribute("d")&&(a=`path(${e.getAttribute("d")})`),i.setProperty(r,a,s.getPropertyPriority(r))})}function T_(n,e){rn(n,HTMLTextAreaElement)&&(e.innerHTML=n.value),rn(n,HTMLInputElement)&&e.setAttribute("value",n.value)}function A_(n,e){if(rn(n,HTMLSelectElement)){let i=Array.from(e.children).find(s=>n.value===s.getAttribute("value"));i&&i.setAttribute("selected","")}}function R_(n,e,t){return rn(e,Element)&&(E_(n,e,t),_d(n,e,t),T_(n,e),A_(n,e)),e}async function C_(n,e){let t=n.querySelectorAll?n.querySelectorAll("use"):[];if(t.length===0)return n;let i={};for(let r=0;r<t.length;r++){let o=t[r].getAttribute("xlink:href");if(o){let l=n.querySelector(o),c=document.querySelector(o);!l&&c&&!i[o]&&(i[o]=await Kr(c,e,!0))}}let s=Object.values(i);if(s.length){let r="http://www.w3.org/1999/xhtml",a=document.createElementNS(r,"svg");a.setAttribute("xmlns",r),a.style.position="absolute",a.style.width="0",a.style.height="0",a.style.overflow="hidden",a.style.display="none";let o=document.createElementNS(r,"defs");a.appendChild(o);for(let l=0;l<s.length;l++)o.appendChild(s[l]);n.appendChild(a)}return n}async function Kr(n,e,t){return!t&&e.filter&&!e.filter(n)?null:Promise.resolve(n).then(i=>b_(i,e)).then(i=>w_(n,i,e)).then(i=>R_(n,i,e)).then(i=>C_(i,e))}var bd=/url\((['"]?)([^'"]+?)\1\)/g,P_=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,I_=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function L_(n){let e=n.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function D_(n){let e=[];return n.replace(bd,(t,i,s)=>(e.push(s),t)),e.filter(t=>!Jr(t))}async function N_(n,e,t,i,s){try{let r=t?dd(e,t):e,a=Ws(e),o;if(s){let l=await s(r);o=Xc(l,a)}else o=await Xs(r,a,i);return n.replace(L_(e),`$1${o}$3`)}catch{}return n}function U_(n,{preferredFontFormat:e}){return e?n.replace(I_,t=>{for(;;){let[i,,s]=P_.exec(t)||[];if(!s)return"";if(s===e)return`src: ${i};`}}):n}function qc(n){return n.search(bd)!==-1}async function hl(n,e,t){if(!qc(n))return n;let i=U_(n,t);return D_(i).reduce((r,a)=>r.then(o=>N_(o,a,e,t)),Promise.resolve(i))}async function $s(n,e,t){var i;let s=(i=e.style)===null||i===void 0?void 0:i.getPropertyValue(n);if(s){let r=await hl(s,null,t);return e.style.setProperty(n,r,e.style.getPropertyPriority(n)),!0}return!1}async function F_(n,e){await $s("background",n,e)||await $s("background-image",n,e),await $s("mask",n,e)||await $s("-webkit-mask",n,e)||await $s("mask-image",n,e)||await $s("-webkit-mask-image",n,e)}async function O_(n,e){let t=rn(n,HTMLImageElement);if(!(t&&!Jr(n.src))&&!(rn(n,SVGImageElement)&&!Jr(n.href.baseVal)))return;let i=t?n.src:n.href.baseVal,s=await Xs(i,Ws(i),e);await new Promise((r,a)=>{n.onload=r,n.onerror=e.onImageErrorHandler?(...l)=>{try{r(e.onImageErrorHandler(...l))}catch(c){a(c)}}:a;let o=n;o.decode&&(o.decode=r),o.loading==="lazy"&&(o.loading="eager"),t?(n.srcset="",n.src=s):n.href.baseVal=s})}async function k_(n,e){let i=Vn(n.childNodes).map(s=>Yc(s,e));await Promise.all(i).then(()=>n)}async function Yc(n,e){rn(n,Element)&&(await F_(n,e),await O_(n,e),await k_(n,e))}function Sd(n,e){let{style:t}=n;e.backgroundColor&&(t.backgroundColor=e.backgroundColor),e.width&&(t.width=`${e.width}px`),e.height&&(t.height=`${e.height}px`);let i=e.style;return i!=null&&Object.keys(i).forEach(s=>{t[s]=i[s]}),n}var wd={};async function Ed(n){let e=wd[n];if(e!=null)return e;let i=await(await fetch(n)).text();return e={url:n,cssText:i},wd[n]=e,e}async function Td(n,e){let t=n.cssText,i=/url\(["']?([^"')]+)["']?\)/g,r=(t.match(/url\([^)]+\)/g)||[]).map(async a=>{let o=a.replace(i,"$1");return o.startsWith("https://")||(o=new URL(o,n.url).href),$c(o,e.fetchRequestInit,({result:l})=>(t=t.replace(a,`url(${l})`),[a,l]))});return Promise.all(r).then(()=>t)}function Ad(n){if(n==null)return[];let e=[],t=/(\/\*[\s\S]*?\*\/)/gi,i=n.replace(t,""),s=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let l=s.exec(i);if(l===null)break;e.push(l[0])}i=i.replace(s,"");let r=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,a="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",o=new RegExp(a,"gi");for(;;){let l=r.exec(i);if(l===null){if(l=o.exec(i),l===null)break;r.lastIndex=o.lastIndex}else o.lastIndex=r.lastIndex;e.push(l[0])}return e}async function B_(n,e){let t=[],i=[];return n.forEach(s=>{if("cssRules"in s)try{Vn(s.cssRules||[]).forEach((r,a)=>{if(r.type===CSSRule.IMPORT_RULE){let o=a+1,l=r.href,c=Ed(l).then(u=>Td(u,e)).then(u=>Ad(u).forEach(h=>{try{s.insertRule(h,h.startsWith("@import")?o+=1:s.cssRules.length)}catch(d){console.error("Error inserting rule from remote css",{rule:h,error:d})}})).catch(u=>{console.error("Error loading remote css",u.toString())});i.push(c)}})}catch(r){let a=n.find(o=>o.href==null)||document.styleSheets[0];s.href!=null&&i.push(Ed(s.href).then(o=>Td(o,e)).then(o=>Ad(o).forEach(l=>{a.insertRule(l,a.cssRules.length)})).catch(o=>{console.error("Error loading remote stylesheet",o)})),console.error("Error inlining remote css file",r)}}),Promise.all(i).then(()=>(n.forEach(s=>{if("cssRules"in s)try{Vn(s.cssRules||[]).forEach(r=>{t.push(r)})}catch(r){console.error(`Error while reading CSS rules from ${s.href}`,r)}}),t))}function z_(n){return n.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>qc(e.style.getPropertyValue("src")))}async function H_(n,e){if(n.ownerDocument==null)throw new Error("Provided element is not within a Document");let t=Vn(n.ownerDocument.styleSheets),i=await B_(t,e);return z_(i)}function Rd(n){return n.trim().replace(/["']/g,"")}function V_(n){let e=new Set;function t(i){(i.style.fontFamily||getComputedStyle(i).fontFamily).split(",").forEach(r=>{e.add(Rd(r))}),Array.from(i.children).forEach(r=>{r instanceof HTMLElement&&t(r)})}return t(n),e}async function Cd(n,e){let t=await H_(n,e),i=V_(n);return(await Promise.all(t.filter(r=>i.has(Rd(r.style.fontFamily))).map(r=>{let a=r.parentStyleSheet?r.parentStyleSheet.href:null;return hl(r.cssText,a,e)}))).join(`
`)}async function Pd(n,e){let t=e.fontEmbedCSS!=null?e.fontEmbedCSS:e.skipFonts?null:await Cd(n,e);if(t){let i=document.createElement("style"),s=document.createTextNode(t);i.appendChild(s),n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i)}}async function G_(n,e={}){let{width:t,height:i}=Gc(n,e),s=await Kr(n,e,!0);return await Pd(s,e),await Yc(s,e),Sd(s,e),await gd(s,t,i)}async function W_(n,e={}){let{width:t,height:i}=Gc(n,e),s=await G_(n,e),r=await Gs(s),a=document.createElement("canvas"),o=a.getContext("2d"),l=e.pixelRatio||pd(),c=e.canvasWidth||t,u=e.canvasHeight||i;return a.width=c*l,a.height=u*l,e.skipAutoScale||md(a),a.style.width=`${c}`,a.style.height=`${u}`,e.backgroundColor&&(o.fillStyle=e.backgroundColor,o.fillRect(0,0,a.width,a.height)),o.drawImage(r,0,0,a.width,a.height),a}async function Id(n,e={}){return(await W_(n,e)).toDataURL()}var Ie={len:620,startZ:14,roadHalf:12,medianHalf:1.1,walkHalf:18.3,curbY:.18},Zc=[{x:-8.6,dir:-1},{x:-4.4,dir:-1},{x:4.4,dir:1},{x:8.6,dir:1}],Ld=34,Dd=1.05,Mi={hp:100,speed:5.6,radius:.42,dodgeSpeed:11.5,sandals:3,maxSandals:6},Nd={punch1:{dur:.26,from:.08,to:.15,range:1.75,dmg:7,arm:"R",knock:!1,word:"\u09A2\u09BF\u09B6!"},punch2:{dur:.26,from:.08,to:.15,range:1.75,dmg:8,arm:"L",knock:!1,word:"\u09A0\u09BE\u09B8!"},punch3:{dur:.42,from:.12,to:.22,range:1.95,dmg:14,arm:"R",knock:!0,word:"\u09A2\u09BF\u09B6\u09C1\u09AE!"},kick:{dur:.5,from:.17,to:.27,range:2.1,dmg:16,knock:!0,word:"\u09A7\u09AA\u09BE\u09B8!"}},Gn={chanda:{name:"\u099A\u09BE\u0981\u09A6\u09BE\u09AC\u09BE\u099C",hp:48,speed:3.7,dmg:8,range:1.5,windup:.42,cooldown:1.2,loot:25e3,look:{shirt:"#c92a2a",pants:"#2b2b2b",lungi:"#3b5bdb",skin:"#9c6644",hair:"#1a1a1a",bandana:"#f03e3e",vest:"#343a40"},lines:["\u099A\u09BE\u0981\u09A6\u09BE \u09A6\u09C7!","\u098F\u09B2\u09BE\u0995\u09BE \u0986\u09AE\u09BE\u09B0!","\u09AC\u09A1\u09BC \u09AD\u09BE\u0987 \u09AA\u09BE\u09A0\u09BE\u0987\u099B\u09C7","\u09AE\u09BE\u09B8\u09C7\u09B0 \u099F\u09BE\u0995\u09BE \u0995\u0987?"]},ghush:{name:"\u0998\u09C1\u09B7\u0996\u09CB\u09B0 \u0985\u09AB\u09BF\u09B8\u09BE\u09B0",hp:60,speed:2.7,dmg:7,range:1.45,windup:.5,cooldown:1.5,loot:15e4,flees:!0,look:{shirt:"#c2a878",pants:"#5c4a2e",skin:"#b07a52",hair:"#222",cap:"#5c4a2e",belly:1.35,mustache:!0,glasses:!0},lines:["\u09AB\u09BE\u0987\u09B2 \u0986\u099F\u0995\u09C7 \u0986\u099B\u09C7...","\u099A\u09BE-\u09AA\u09BE\u09A8\u09BF\u09B0 \u0996\u09B0\u099A \u09A6\u09C7\u09A8","\u0989\u09AA\u09B0\u09C7 \u09A6\u09BF\u09A4\u09C7 \u09B9\u09AF\u09BC","\u0995\u09BE\u09B2 \u0986\u09B8\u09C7\u09A8"]},mastan:{name:"\u09AE\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8",hp:40,speed:4.3,dmg:10,range:1.85,windup:.4,cooldown:1.1,loot:5e3,stick:!0,look:{shirt:"#212529",pants:"#495057",skin:"#8d5a3b",hair:"#111",shades:!0},lines:["\u0993\u0987! \u09A6\u09BE\u0981\u09A1\u09BC\u09BE!","\u09AD\u09BE\u0987 \u09A1\u09BE\u0995\u099B\u09C7","\u09B2\u09BE\u09A0\u09BF \u09A6\u09C7\u0996\u099B\u09B8?","\u099A\u09BF\u09A8\u09B8 \u0986\u09AE\u09BE\u09B0\u09C7?"]},syndicate:{name:"\u09B8\u09BF\u09A8\u09CD\u09A1\u09BF\u0995\u09C7\u099F \u09AC\u09CD\u09AF\u09AC\u09B8\u09BE\u09AF\u09BC\u09C0",hp:66,speed:2.5,dmg:6,range:1.4,windup:.5,cooldown:2.2,loot:5e5,ranged:!0,look:{shirt:"#e8d9b5",pants:"#6b4f2a",lungi:"#6b4f2a",skin:"#a8744f",hair:"#333",belly:1.5,topi:"#f8f9fa",beard:!0},lines:["\u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C \u09E9\u09E6\u09E6 \u099F\u09BE\u0995\u09BE!","\u09B8\u09BE\u09AA\u09CD\u09B2\u09BE\u0987 \u09A8\u09BE\u0987","\u09A6\u09BE\u09AE \u0986\u09B0\u09CB \u09AC\u09BE\u09A1\u09BC\u09AC\u09C7","\u0997\u09C1\u09A6\u09BE\u09AE \u0996\u09BE\u09B2\u09BF!"]},neta:{name:"\u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C \u09A8\u09C7\u09A4\u09BE",hp:230,speed:2.9,dmg:15,range:1.7,windup:.75,cooldown:1.6,loot:1e8,boss:!0,look:{shirt:"#f8f9fa",pants:"#f1f3f5",skin:"#b5835a",hair:"#111",vest:"#1c1c1c",panjabi:!0,belly:1.45,mustache:!0,glasses:!0,scale:1.12},lines:["\u0986\u09AE\u09BF \u0995\u09C7 \u099C\u09BE\u09A8\u09BF\u09B8?","\u0989\u09A8\u09CD\u09A8\u09AF\u09BC\u09A8 \u09B9\u099A\u09CD\u099B\u09C7!","\u09AD\u09CB\u099F \u09B2\u09BE\u0997\u09AC\u09C7 \u09A8\u09BE","\u098F\u0987, \u09A4\u09CB\u09B0\u09BE \u0995\u0987!"]},bhumi:{name:"\u09AD\u09C2\u09AE\u09BF\u09A6\u09B8\u09CD\u09AF\u09C1",hp:260,speed:2.5,dmg:17,range:1.75,windup:.8,cooldown:1.8,loot:25e7,boss:!0,look:{shirt:"#8d7b5a",pants:"#8d7b5a",skin:"#a8744f",hair:"#111",belly:1.5,shades:!0,chain:!0,scale:1.14},lines:["\u098F\u0987 \u099C\u09AE\u09BF \u0986\u09AE\u09BE\u09B0!","\u09AC\u09C1\u09B2\u09A1\u09CB\u099C\u09BE\u09B0 \u0986\u09A8!","\u09A8\u09A6\u09C0\u0993 \u0986\u09AE\u09BE\u09B0","\u0995\u09BE\u0997\u099C \u0986\u099B\u09C7, \u0986\u09B8\u09B2 \u09A8\u09BE"]},vejal:{name:"\u09AD\u09C7\u099C\u09BE\u09B2 \u0993\u09B7\u09C1\u09A7 \u09AC\u09BF\u0995\u09CD\u09B0\u09C7\u09A4\u09BE",hp:200,speed:3,dmg:10,range:1.5,windup:.6,cooldown:1.5,loot:8e7,boss:!0,ranged:!0,look:{shirt:"#f1f3f5",pants:"#495057",lungi:"#495057",skin:"#b07a52",hair:"#222",coat:!0,cap:"#2b8a3e",mustache:!0,scale:1.08},lines:["\u098F\u0995 \u09AB\u09BE\u0987\u09B2 \u0996\u09BE\u09A8, \u09B8\u09AC \u09B0\u09CB\u0997 \u09B6\u09C7\u09B7!","\u09AE\u09C7\u09AF\u09BC\u09BE\u09A6? \u0993\u099F\u09BE \u0995\u09C0?","\u099A\u0995\u09C7\u09B0 \u0997\u09C1\u0981\u09A1\u09BC\u09BE\u0987 \u0986\u09B8\u09B2 \u0993\u09B7\u09C1\u09A7","\u099F\u09A8\u09BF\u0995 \u0996\u09BE\u0987, \u09B6\u0995\u09CD\u09A4\u09BF \u09AA\u09BE\u0987!"]},prosno:{name:"\u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09AB\u09BE\u0981\u09B8\u0995\u09BE\u09B0\u09C0",hp:180,speed:3.6,dmg:11,range:1.5,windup:.5,cooldown:1.3,loot:6e7,boss:!0,ranged:!0,look:{shirt:"#a5d8ff",pants:"#343a40",skin:"#9c6644",hair:"#111",glasses:!0,papers:!0,scale:1.06},lines:["\u09E7\u09E6\u09E6% \u0995\u09AE\u09A8 \u09B8\u09BE\u099C\u09C7\u09B6\u09A8!","\u09AB\u099F\u09CB\u0995\u09AA\u09BF \u0995\u09B0, \u099C\u09B2\u09A6\u09BF!","\u09AA\u09CD\u09B0\u09B6\u09CD\u09A8 \u09B0\u09BE\u09A4\u09C7\u0987 \u09AA\u09BE\u09AC\u09BF","\u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u09A4\u09CB \u09AB\u09B0\u09CD\u09AE\u09BE\u09B2\u09BF\u099F\u09BF"]},copy:{name:"\u09AB\u099F\u09CB\u0995\u09AA\u09BF",hp:1,speed:3.6,dmg:4,range:1.4,windup:.6,cooldown:1.6,loot:0,look:{shirt:"#a5d8ff",pants:"#343a40",skin:"#9c6644",hair:"#111",glasses:!0,papers:!0,scale:1.06},lines:["\u0986\u09AE\u09BF\u0987 \u0986\u09B8\u09B2!","\u09A8\u09BE, \u0986\u09AE\u09BF \u0986\u09B8\u09B2!","\u09AB\u099F\u09CB\u0995\u09AA\u09BF \u09A8\u09BE, \u0985\u09B0\u09BF\u099C\u09BF\u09A8\u09BE\u09B2"]},pocket:{name:"\u09AA\u0995\u09C7\u099F\u09AE\u09BE\u09B0",hp:26,speed:6.4,dmg:4,range:1.3,windup:.5,cooldown:1.6,loot:35e3,look:{shirt:"#495057",pants:"#212529",skin:"#8d5a3b",hair:"#111",cap:"#212529"},lines:["\u09A7\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09BF \u09A8\u09BE!","\u09AE\u09CB\u09AC\u09BE\u0987\u09B2\u099F\u09BE \u09AD\u09BE\u09B2\u09CB \u099B\u09BF\u09B2","\u09B9\u09BF \u09B9\u09BF \u09B9\u09BF"]},thikadar:{name:"\u09A0\u09BF\u0995\u09BE\u09A6\u09BE\u09B0",hp:55,speed:3,dmg:8,range:1.5,windup:.5,cooldown:1.4,loot:4e5,look:{shirt:"#f8f9fa",pants:"#343a40",skin:"#b5835a",hair:"#222",vest:"#343a40",belly:1.3,glasses:!0,briefcase:!0},lines:["\u099F\u09C7\u09A8\u09CD\u09A1\u09BE\u09B0 \u0986\u09AE\u09BE\u09B0!","\u09AC\u09CD\u09B0\u09BF\u09AB\u0995\u09C7\u09B8 \u09AD\u09B0\u09BE \u0986\u099B\u09C7","\u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u0986\u09AC\u09BE\u09B0 \u0996\u09C1\u0981\u09A1\u09BC\u09AC"]}},Jc=["neta","bhumi","vejal","prosno"],Ud={chanda:["\u099A\u09BE\u0995\u09CD\u0995\u09C1 \u09B8\u09C7\u09B2\u09BF\u09AE","\u09AC\u09BF\u099A\u09CD\u099B\u09C1 \u09AC\u09BE\u09AC\u09B2\u09C1","\u09A1\u09BE\u09AC\u09B2 \u09AE\u099C\u09A8\u09C1","\u0997\u09C7\u099E\u09CD\u099C\u09BF \u0997\u09AB\u09C1\u09B0","\u09B0\u09B8\u09BF\u09A6\u09B9\u09C0\u09A8 \u09B0\u09A4\u09A8","\u09AE\u09BE\u09B8\u09BF\u0995 \u09AE\u09BE\u09AE\u09C1\u09A8","\u09B2\u09BE\u0987\u09A8\u09AE\u09CD\u09AF\u09BE\u09A8 \u09B2\u09BE\u09B2\u09C1"],ghush:["\u09AB\u09BE\u0987\u09B2\u099A\u09BE\u09AA\u09BE \u09AB\u099C\u09B2\u09C1","\u099F\u09C7\u09AC\u09BF\u09B2-\u09A4\u09B2\u09BE \u09A4\u09CB\u09AB\u09BE\u099C\u09CD\u099C\u09B2","\u099A\u09BE-\u09AA\u09BE\u09A8\u09BF \u099A\u09BE\u09A8 \u09AE\u09BF\u09AF\u09BC\u09BE","\u0989\u09AA\u09B0\u09BF \u0989\u099C\u09CD\u099C\u09CD\u09AC\u09B2","\u0995\u09BE\u09B2-\u0986\u09B8\u09C7\u09A8 \u0995\u09BE\u09B6\u09C7\u09AE","\u09B8\u09BF\u09B2-\u09AE\u09CB\u09B9\u09B0 \u09B8\u09CB\u09AC\u09B9\u09BE\u09A8"],mastan:["\u09B2\u09BE\u09A0\u09BF \u09B2\u09BF\u099F\u09A8","\u0997\u09C1\u09A3\u09CD\u09A1\u09BE \u0997\u09A8\u09BF","\u09AA\u099F\u0995\u09BE \u09AA\u09B2\u09BE\u09B6","\u09AD\u09BE\u0987\u09AF\u09BC\u09C7\u09B0 \u09B2\u09CB\u0995 \u09AD\u09C1\u099F\u09CD\u099F\u09CB","\u09B9\u09C1\u09A1\u09BF \u09B9\u09BE\u09B8\u09BE\u09A8","\u09AC\u09BE\u0987\u0995 \u09AC\u09BE\u09AC\u09C1","\u09B8\u09BE\u0987\u09A1-\u0995\u09BF\u0995 \u09B8\u09CB\u09B9\u09BE\u0997"],syndicate:["\u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C \u09AA\u09B2\u09CD\u099F\u09C1","\u0997\u09C1\u09A6\u09BE\u09AE \u0997\u09BF\u09AF\u09BC\u09BE\u09B8","\u09A6\u09BE\u09AE-\u09AC\u09BE\u09A1\u09BC\u09BE \u09A6\u09C1\u09B2\u09BE\u09B2","\u09AE\u099C\u09C1\u09A4\u09A6\u09BE\u09B0 \u09AE\u09A8\u09CD\u099F\u09C1","\u09B8\u09BE\u09AA\u09CD\u09B2\u09BE\u0987-\u09A8\u09BE\u0987 \u09B8\u09BE\u09A4\u09CD\u09A4\u09BE\u09B0"],neta:["\u09AD\u09BE\u09B7\u09A3\u09AC\u09BE\u099C \u09AD\u09CB\u09B2\u09BE","\u09AB\u09BF\u09A4\u09BE-\u0995\u09BE\u099F\u09BE \u09AB\u09B0\u09BF\u09A6","\u0989\u09A8\u09CD\u09A8\u09AF\u09BC\u09A8 \u0989\u099C\u09BF\u09B0 \u0986\u09B2\u09C0","\u09AA\u09CD\u09B0\u09A4\u09BF\u09B6\u09CD\u09B0\u09C1\u09A4\u09BF \u09AA\u09BF\u09A8\u09CD\u099F\u09C1"],bhumi:["\u09A6\u0996\u09B2\u09A6\u09BE\u09B0 \u09A6\u09AC\u09BF\u09B0","\u09AA\u09CD\u09B2\u099F \u09AA\u09BE\u09B0\u09AD\u09C7\u099C","\u09A8\u09A6\u09C0\u0996\u09C7\u0995\u09CB \u09A8\u09B8\u09C1","\u0996\u09BE\u09B8\u099C\u09AE\u09BF \u0996\u09B2\u09BF\u09B2"],vejal:["\u099F\u09A8\u09BF\u0995 \u09A4\u09CB\u09A4\u09BE \u09AE\u09BF\u09AF\u09BC\u09BE","\u09AD\u09C7\u099C\u09BE\u09B2 \u09AD\u099C\u09A8","\u09AE\u09C7\u09AF\u09BC\u09BE\u09A6\u09CB\u09A4\u09CD\u09A4\u09C0\u09B0\u09CD\u09A3 \u09AE\u09CB\u09A4\u09BE\u09B2\u09C7\u09AC","\u099A\u0995-\u0997\u09C1\u0981\u09A1\u09BC\u09BE \u099A\u099E\u09CD\u099A\u09B2"],prosno:["\u09AB\u099F\u09CB\u0995\u09AA\u09BF \u09AB\u09B0\u09B9\u09BE\u09A6","\u09B8\u09BE\u099C\u09C7\u09B6\u09A8 \u09B8\u09BE\u099C\u09CD\u099C\u09BE\u09A6","\u0995\u09AE\u09A8-\u09AA\u09CD\u09B0\u09B6\u09CD\u09A8 \u0995\u09BE\u09AE\u09B0\u09C1\u09B2","\u09AB\u09BE\u0981\u09B8 \u09AB\u09AF\u09BC\u09B8\u09BE\u09B2"],copy:["\u09AB\u099F\u09CB\u0995\u09AA\u09BF"],pocket:["\u099A\u09BF\u0995\u09A8 \u099A\u09CB\u09B0\u09BE \u099A\u09BE\u09A8\u09CD\u09A6\u09C1","\u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09AE\u09BF\u09A0\u09C1","\u09AB\u09C1\u09A1\u09BC\u09C1\u09CE \u09AB\u09BE\u09B0\u09B9\u09BE\u09A8"],thikadar:["\u099F\u09C7\u09A8\u09CD\u09A1\u09BE\u09B0 \u09A4\u09BE\u09B0\u09C7\u0995","\u0996\u09CB\u0981\u09A1\u09BC\u09BE\u0996\u09C1\u0981\u09A1\u09BC\u09BF \u0996\u09CB\u0995\u09A8","\u0995\u09AE\u09BF\u09B6\u09A8 \u0995\u09AC\u09BF\u09B0"]},ul=["\u09B0\u09BF\u09A8\u09BE \u0986\u09AA\u09BE","\u09AE\u09CB\u0995\u09B2\u09C7\u09B8 \u099A\u09BE\u099A\u09BE","\u09AC\u09BE\u09AC\u09B2\u09C1 \u09AD\u09BE\u0987","\u09B6\u09BE\u09B9\u09BE\u09A8\u09BE \u0996\u09BE\u09B2\u09BE","\u099F\u09C1\u099F\u09C1\u09B2","\u099C\u09B0\u09BF\u09A8\u09BE \u09AC\u09C7\u0997\u09AE","\u09B9\u09BE\u09AC\u09BF\u09AC \u09AE\u09BE\u09AE\u09BE","\u09B8\u09C1\u09AE\u09BE\u0987\u09AF\u09BC\u09BE","\u0995\u09C1\u09A6\u09CD\u09A6\u09C1\u09B8 \u09A6\u09CB\u0995\u09BE\u09A8\u09A6\u09BE\u09B0","\u09AA\u09BF\u09A8\u09CD\u099F\u09C1","\u09A8\u09BE\u09B8\u09B0\u09BF\u09A8 \u09AD\u09BE\u09AC\u09BF","\u09B0\u09AB\u09BF\u0995 \u09AE\u09BF\u09B8\u09CD\u09A4\u09CD\u09B0\u09BF","\u099B\u09CB\u099F\u09A8","\u0986\u09B2\u09C7\u09AF\u09BC\u09BE \u09A8\u09BE\u09A8\u09BF","\u09AE\u09BF\u09A0\u09C1","\u09AC\u09C7\u09B2\u09BE\u09B2 \u09A1\u09CD\u09B0\u09BE\u0987\u09AD\u09BE\u09B0"],Kc=["\u09B8\u09CD\u09AF\u09BE\u09B0, \u0986\u09B0 \u0995\u09B0\u09AC \u09A8\u09BE!","\u09B8\u09CD\u09AF\u09BE\u09B0, \u09AE\u09BE\u09AB \u0995\u09B0\u09C7\u09A8!","\u0995\u09BE\u09A8 \u099B\u09BF\u0981\u09A1\u09BC\u09C7 \u09AF\u09BE\u099A\u09CD\u099B\u09C7 \u09B8\u09CD\u09AF\u09BE\u09B0!","\u0995\u09CD\u09B2\u09BE\u09B8 \u098F\u0987\u099F\u09C7 \u0986\u09AA\u09A8\u09BF\u0987 \u09AE\u09BE\u09B0\u099B\u09BF\u09B2\u09C7\u09A8!","\u09B8\u09CD\u09AF\u09BE\u09B0, \u09B9\u09CB\u09AE\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u0995 \u0995\u09BE\u09B2\u0995\u09C7 \u09A6\u09BF\u09AC!"],Vi=[{id:"student",name:"\u099B\u09BE\u09A4\u09CD\u09B0",tag:"\u09B8\u09CD\u09B2\u09CB\u0997\u09BE\u09A8\u09C7 \u0995\u09BE\u0981\u09AA\u09C7 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE",hp:100,speed:5.8,dmg:1,range:1,charge:1,look:{shirt:"#2f9e44",pants:"#1c3d6e",skin:"#a0704c",hair:"#141414",gamchha:"#e03131",backpack:"#1864ab"},special:{id:"rally",name:"\u09B8\u09CD\u09B2\u09CB\u0997\u09BE\u09A8 \u09AE\u09BF\u099B\u09BF\u09B2",desc:"\u0986\u09B6\u09C7\u09AA\u09BE\u09B6\u09C7\u09B0 \u099C\u09A8\u09A4\u09BE \u099C\u09C7\u0997\u09C7 \u0993\u09A0\u09C7, \u099A\u09BE\u09B0\u09AA\u09BE\u09B6\u09C7\u09B0 \u09B8\u09AC \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C \u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0"},stats:[3,3,3,3]},{id:"rickshaw",name:"\u09B0\u09BF\u0995\u09B6\u09BE\u099A\u09BE\u09B2\u0995",tag:"\u09B6\u0995\u09CD\u09A4 \u09B9\u09BE\u09A4, \u09B6\u0995\u09CD\u09A4 \u09AE\u09A8",hp:135,speed:5.2,dmg:1.3,range:1,charge:.9,look:{shirt:"#ffd43b",pants:"#2b8a3e",lungi:"#2b8a3e",skin:"#7a4a2d",hair:"#111",gamchha:"#e8590c"},special:{id:"bell",name:"\u0995\u09CD\u09B0\u09BF\u0982-\u0995\u09CD\u09B0\u09BF\u0982 \u09A4\u09C1\u09AB\u09BE\u09A8",desc:"\u0998\u09A3\u09CD\u099F\u09BF \u09AC\u09BE\u099C\u09BF\u09AF\u09BC\u09C7 \u09B8\u09BE\u09AE\u09A8\u09C7 \u099D\u09A1\u09BC\u09C7\u09B0 \u09AC\u09C7\u0997\u09C7 \u099B\u09C1\u099F, \u09AA\u09A5\u09C7 \u09AF\u09C7 \u09AA\u09A1\u09BC\u09AC\u09C7 \u09B8\u09C7 \u099B\u09BF\u099F\u0995\u09C7 \u09AF\u09BE\u09AC\u09C7"},stats:[5,2,4,2]},{id:"aunty",name:"\u0996\u09BE\u09B2\u09BE\u09AE\u09CD\u09AE\u09BE",tag:"\u099B\u09BE\u09A4\u09BE\u0987 \u09AF\u09A5\u09C7\u09B7\u09CD\u099F",hp:90,speed:5.5,dmg:1.05,range:1.35,charge:1.1,look:{shirt:"#e64980",pants:"#e64980",saree:!0,skin:"#a8744f",hair:"#1a1a1a",umbrella:!0},special:{id:"spin",name:"\u099B\u09BE\u09A4\u09BE \u0998\u09C2\u09B0\u09CD\u09A3\u09BF",desc:"\u09A4\u09BF\u09A8 \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1 \u099B\u09BE\u09A4\u09BE \u0998\u09C1\u09B0\u09BF\u09AF\u09BC\u09C7 \u099A\u09BE\u09B0\u09AA\u09BE\u09B6\u09C7\u09B0 \u09B8\u09AC\u09BE\u0987\u0995\u09C7 \u09AA\u09C7\u099F\u09BE\u09A8"},stats:[2,3,3,4]},{id:"teacher",name:"\u0985\u09AC\u09B8\u09B0\u09AA\u09CD\u09B0\u09BE\u09AA\u09CD\u09A4 \u09B6\u09BF\u0995\u09CD\u09B7\u0995",tag:"\u09AC\u09C7\u09A4 \u098F\u0996\u09A8\u09CB \u099A\u09B2\u09C7",hp:95,speed:5,dmg:.95,range:1.2,charge:1.4,look:{shirt:"#f8f9fa",pants:"#6c757d",skin:"#b07a52",hair:"#dee2e6",glasses:!0,mustache:!0,cane:!0,panjabi:!0},special:{id:"kan",name:"\u0995\u09BE\u09A8 \u09A7\u09B0\u09C7 \u0989\u09A0\u09AC\u09B8",desc:"\u0995\u09BE\u099B\u09C7\u09B0 \u09B8\u09AC \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C \u09EB \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1 \u0995\u09BE\u09A8 \u09A7\u09B0\u09C7 \u0989\u09A0\u09AC\u09B8 \u0995\u09B0\u09AC\u09C7, \u09AE\u09BE\u09B0 \u0996\u09BE\u09AC\u09C7 \u09A6\u09CD\u09AC\u09BF\u0997\u09C1\u09A3"},stats:[2,2,2,5]}],Fd=["\u09B6\u0995\u09CD\u09A4\u09BF","\u0997\u09A4\u09BF","\u09A6\u09AE","\u09AC\u09BF\u09B6\u09C7\u09B7"],qs={broom:{name:"\u099D\u09BE\u09A1\u09BC\u09C1",dmg:1.35,range:.7,uses:14,word:"\u099D\u09BE\u09A1\u09BC\u09C1\u09AA\u09C7\u099F\u09BE!"},stick:{name:"\u09B2\u09BE\u09A0\u09BF",dmg:1.6,range:.55,uses:10,word:"\u09A0\u0995\u09BE\u09B8!"}},Od=[{shirt:"#4dabf7",pants:"#343a40",skin:"#a0704c",hair:"#151515"},{shirt:"#f8f9fa",pants:"#5c7cfa",skin:"#8d5a3b",hair:"#222",lungi:"#5c7cfa"},{shirt:"#ffd43b",pants:"#495057",skin:"#b07a52",hair:"#111"},{shirt:"#e64980",pants:"#e64980",skin:"#a8744f",hair:"#0d0d0d",saree:!0},{shirt:"#20c997",pants:"#20c997",skin:"#9c6644",hair:"#0d0d0d",saree:!0},{shirt:"#868e96",pants:"#212529",skin:"#b5835a",hair:"#bbb",topi:"#f8f9fa",beard:!0},{shirt:"#ff922b",pants:"#2b8a3e",skin:"#8d5a3b",hair:"#151515",lungi:"#2b8a3e"},{shirt:"#ae3ec9",pants:"#ae3ec9",skin:"#b07a52",hair:"#111",saree:!0},{shirt:"#74c0fc",pants:"#1c7ed6",skin:"#a0704c",hair:"#111",backpack:"#e03131"}];var jc=["\u09AE\u09BE\u09AF\u09BC\u09C7\u09B0 \u09A6\u09CB\u09AF\u09BC\u09BE \u09B8\u09CD\u099F\u09CB\u09B0","\u09AD\u09BE\u0987 \u09AD\u09BE\u0987 \u09AB\u09BE\u09B0\u09CD\u09AE\u09C7\u09B8\u09BF","\u09A8\u09BF\u0989 \u09AE\u09A1\u09BE\u09B0\u09CD\u09A8 \u099F\u09C7\u0987\u09B2\u09BE\u09B0\u09CD\u09B8","\u09B8\u09A4\u09A4\u09BE \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8\u09BF\u0982","\u099C\u09A8\u09A8\u09C0 \u09AD\u09CD\u09AF\u09BE\u09B0\u09BE\u0987\u099F\u09BF\u099C","\u09AC\u09BF\u09B8\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09B9 \u09B9\u09CB\u099F\u09C7\u09B2","\u09B0\u09B9\u09AE\u09BE\u09A8 \u0987\u09B2\u09C7\u0995\u099F\u09CD\u09B0\u09A8\u09BF\u0995\u09CD\u09B8","\u09A2\u09BE\u0995\u09BE \u0995\u09AE\u09CD\u09AA\u09BF\u0989\u099F\u09BE\u09B0","\u09A8\u09C1\u09B0 \u099C\u09C1\u09AF\u09BC\u09C7\u09B2\u09BE\u09B0\u09CD\u09B8","\u09AC\u09BE\u0982\u09B2\u09BE\u09B0 \u09AE\u09BF\u09B7\u09CD\u099F\u09BF\u09AE\u09C1\u0996","\u0986\u09A6\u09B0\u09CD\u09B6 \u09B2\u09BE\u0987\u09AC\u09CD\u09B0\u09C7\u09B0\u09BF","\u09B8\u09CB\u09A8\u09BE\u09B0 \u09AC\u09BE\u0982\u09B2\u09BE \u09B9\u09BE\u09B0\u09CD\u09A1\u0993\u09AF\u09BC\u09CD\u09AF\u09BE\u09B0"],Qc=[["\u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u0995\u09C7","\u09A8\u09BE \u09AC\u09B2\u09C1\u09A8"],["\u0998\u09C1\u09B7 \u09A6\u09C7\u0993\u09AF\u09BC\u09BE-\u09A8\u09C7\u0993\u09AF\u09BC\u09BE","\u09A6\u09A3\u09CD\u09A1\u09A8\u09C0\u09AF\u09BC \u0985\u09AA\u09B0\u09BE\u09A7"],["\u099C\u09A8\u0997\u09A3\u09C7\u09B0 \u099F\u09BE\u0995\u09BE","\u099C\u09A8\u0997\u09A3\u09C7\u09B0"],["\u0989\u09A8\u09CD\u09A8\u09AF\u09BC\u09A8\u09C7\u09B0","\u09AE\u09B9\u09BE\u09B8\u09A1\u09BC\u0995"],["\u09AB\u09BE\u0987\u09B2 \u099A\u09B2\u09C7","\u0998\u09C1\u09B7\u09C7 \u09A8\u09AF\u09BC, \u09A8\u09BF\u09AF\u09BC\u09AE\u09C7"],["\u09B8\u09BF\u09A8\u09CD\u09A1\u09BF\u0995\u09C7\u099F","\u09AD\u09BE\u0999\u09AC\u09C7 \u099C\u09A8\u09A4\u09BE"]],kd=["\u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C\u09C7\u09B0 \u09A6\u09BE\u09AE \u0995\u09C7\u09A8 \u09AC\u09BE\u09A1\u09BC\u09B2, \u099C\u09BE\u09A8\u09A4\u09C7 \u099A\u09BE\u0987\u09B2\u09C7\u09A8 \u0996\u09CB\u09A6 \u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C","\u09AB\u09BE\u0987\u09B2 \u09A8\u09A1\u09BC\u09BE\u09A4\u09C7 \u099A\u09BE-\u09AA\u09BE\u09A8\u09BF \u09B2\u09BE\u0997\u09AC\u09C7 \u09A8\u09BE, \u0998\u09CB\u09B7\u09A3\u09BE\u09B0 \u09AA\u09B0\u09A6\u09BF\u09A8\u0987 \u099A\u09BE\u09AF\u09BC\u09C7\u09B0 \u09A6\u09BE\u09AE \u09A6\u09CD\u09AC\u09BF\u0997\u09C1\u09A3","\u099A\u09BE\u0981\u09A6\u09BE\u09AC\u09BE\u099C\u09BF \u09AC\u09A8\u09CD\u09A7\u09C7 \u0995\u09AE\u09BF\u099F\u09BF; \u0995\u09AE\u09BF\u099F\u09BF\u09B0 \u0996\u09B0\u099A \u09A4\u09C1\u09B2\u09A4\u09C7 \u09A8\u09A4\u09C1\u09A8 \u099A\u09BE\u0981\u09A6\u09BE","\u0989\u09A8\u09CD\u09A8\u09AF\u09BC\u09A8\u09C7\u09B0 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u09A4\u09BF\u09A8\u09AC\u09BE\u09B0 \u0996\u09CB\u0981\u09A1\u09BC\u09BE \u09B9\u09B2\u09CB, \u099A\u09A4\u09C1\u09B0\u09CD\u09A5\u09AC\u09BE\u09B0\u09C7\u09B0 \u09A6\u09B0\u09AA\u09A4\u09CD\u09B0 \u0986\u09B9\u09CD\u09AC\u09BE\u09A8","\u09AC\u09BE\u09B8 \u09A5\u09BE\u09AE\u09B2 \u09B8\u09CD\u099F\u09AA\u09C7\u099C\u09C7, \u09AF\u09BE\u09A4\u09CD\u09B0\u09C0\u09B0\u09BE \u09B9\u09A4\u09AC\u09BE\u0995","\u09B8\u09BF\u09A8\u09CD\u09A1\u09BF\u0995\u09C7\u099F \u09AC\u09B2\u09C7 \u0995\u09BF\u099B\u09C1 \u09A8\u09C7\u0987, \u099C\u09BE\u09A8\u09BE\u09B2 \u09B8\u09BF\u09A8\u09CD\u09A1\u09BF\u0995\u09C7\u099F","\u0985\u09AB\u09BF\u09B8\u09BE\u09B0 \u0998\u09C1\u09B7 \u09A8\u09C7\u09A8 \u09A8\u09BE, \u09B6\u09C1\u09A7\u09C1 \u0989\u09AA\u09B9\u09BE\u09B0 \u09A8\u09C7\u09A8: \u09B8\u0982\u09B6\u09CD\u09B2\u09BF\u09B7\u09CD\u099F \u09B8\u09C2\u09A4\u09CD\u09B0","\u0986\u09AE\u099C\u09A8\u09A4\u09BE \u099C\u09C7\u0997\u09C7\u099B\u09C7, \u09AB\u09C1\u099F\u09AA\u09BE\u09A4\u09C7 \u099A\u09BE \u09AC\u09BF\u0995\u09CD\u09B0\u09BF \u09AC\u09C7\u09A1\u09BC\u09C7\u099B\u09C7 \u09A4\u09BF\u09A8\u0997\u09C1\u09A3"],bi={heroes:"dhakaDash3d.heroes",name:"dhakaDash3d.name",muted:"dhakaDash3d.muted",hero:"dhakaDash3d.hero"},X_="\u09E6\u09E7\u09E8\u09E9\u09EA\u09EB\u09EC\u09ED\u09EE\u09EF",de=n=>String(n).replace(/\d/g,e=>X_[e]);function Zt(n){return n>=1e7?"\u09F3"+de(+(n/1e7).toFixed(n>=1e8?0:1))+" \u0995\u09CB\u099F\u09BF":n>=1e5?"\u09F3"+de(+(n/1e5).toFixed(1))+" \u09B2\u09BE\u0996":"\u09F3"+de(Math.round(n).toLocaleString("en-IN"))}var le=(n,e)=>n+Math.random()*(e-n),Te=n=>n[Math.random()*n.length|0],Dt=(n,e,t)=>n<e?e:n>t?t:n;function Vt(n,e,t){let i=(e-n+Math.PI)%(Math.PI*2)-Math.PI;return i<-Math.PI&&(i+=Math.PI*2),n+i*t}var ls="'Baloo Da 2', 'Hind Siliguri', 'Nirmala UI', 'Vrinda', sans-serif",Bd=4,zd=n=>{Bd=n};function Rn(n,e){let t=document.createElement("canvas");return t.width=n,t.height=e,[t,t.getContext("2d")]}function Cn(n,e=!0){let t=new Ui(n);return t.colorSpace=qt,t.anisotropy=Bd,e&&(t.wrapS=t.wrapT=Li),t}function jr(n,e,t,i,s,r){for(let a=0;a<i;a++){n.fillStyle=r[Math.random()*r.length|0],n.globalAlpha=Math.random()*s;let o=Math.random()*3+1;n.fillRect(Math.random()*e,Math.random()*t,o,o)}n.globalAlpha=1}function Hd(){let[n,e]=Rn(512,512);e.fillStyle="#5b5d61",e.fillRect(0,0,512,512),jr(e,512,512,9e3,.35,["#3d3f43","#74777c","#4a4c50","#85878a"]);for(let i=0;i<7;i++){e.fillStyle=Math.random()<.5?"rgba(40,42,46,0.45)":"rgba(120,122,126,0.3)";let s=30+Math.random()*90;e.fillRect(Math.random()*512,Math.random()*512,s,s*(.4+Math.random()))}e.strokeStyle="rgba(30,30,32,0.6)",e.lineWidth=1.5;for(let i=0;i<10;i++){e.beginPath();let s=Math.random()*512,r=Math.random()*512;e.moveTo(s,r);for(let a=0;a<6;a++)s+=(Math.random()-.5)*30,r+=Math.random()*18,e.lineTo(s,r);e.stroke()}let t=i=>(i+12)/24*512;e.fillStyle="#f2c232";for(let i of[-11.5,11.5])e.fillRect(t(i)-3,0,6,512);e.fillStyle="rgba(240,240,236,0.85)";for(let i of[-6.5,6.5])e.fillRect(t(i)-3,40,6,130),e.fillRect(t(i)-3,296,6,130);return Cn(n)}function Vd(){let[n,e]=Rn(256,256),t=["#b5654a","#a85a42","#c27258","#9e5a46"];e.fillStyle="#8f8a80",e.fillRect(0,0,256,256);for(let i=0;i<8;i++){let s=i%2?32:0,r=Math.floor(i/2)%2;for(let a=-1;a<4;a++)e.fillStyle=r?["#c9c2b4","#bdb6a8","#d3ccbe"][Math.random()*3|0]:t[Math.random()*4|0],e.fillRect(a*64+s+2,i*32+2,60,28)}return jr(e,256,256,2500,.25,["#000","#fff"]),Cn(n)}function th(n="#f5c518",e="#1d1d1d"){let[t,i]=Rn(128,32);i.fillStyle=n,i.fillRect(0,0,128,32),i.fillStyle=e;for(let s=0;s<128;s+=64)i.fillRect(s,0,32,32);return Cn(t)}function Gd(){let[n,e]=Rn(256,256);e.fillStyle="#c9bfae",e.fillRect(0,0,256,256);for(let t=0;t<16;t++)for(let i=-1;i<9;i++){let s=t%2?16:0;e.fillStyle=["#a8432f","#b64d36","#9c3f2c","#bf5a3f"][Math.random()*4|0],e.fillRect(i*32+s+1,t*16+1,30,14)}return jr(e,256,256,1800,.2,["#000","#fff"]),Cn(n)}var eh=new Map;function Wd(n,e=0){let t=n+e;if(eh.has(t))return eh.get(t);let[i,s]=Rn(128,128);s.fillStyle=n,s.fillRect(0,0,128,128),jr(s,128,128,900,.18,["#000","#fff"]),s.fillStyle="rgba(0,0,0,0.25)";for(let a=0;a<128;a+=6)s.fillRect(a+Math.random()*4,100+Math.random()*20,2,28);if(e===2)s.fillStyle="#2c3e50",s.fillRect(14,22,100,62),s.fillStyle="rgba(160,200,230,0.5)",s.fillRect(18,26,44,54),s.fillRect(66,26,44,54);else{s.fillStyle="#1f2a33",s.fillRect(28,22,72,64),s.fillStyle=e===1?"#f1d9a6":"#6d8a9c",s.fillRect(32,26,64,56),s.strokeStyle="#2b2b2b",s.lineWidth=3;for(let a=36;a<96;a+=10)s.beginPath(),s.moveTo(a,24),s.lineTo(a,84),s.stroke();s.beginPath(),s.moveTo(30,54),s.lineTo(98,54),s.stroke(),s.fillStyle="rgba(0,0,0,0.3)",s.fillRect(22,86,84,8),Math.random()<.5&&(s.fillStyle="#e9ecef",s.fillRect(84,92,30,18),s.fillStyle="#adb5bd",s.fillRect(88,96,22,2),s.fillRect(88,101,22,2))}let r=Cn(i);return eh.set(t,r),r}function Xd(){let[n,e]=Rn(128,128);e.fillStyle="#8d949b",e.fillRect(0,0,128,128);for(let t=0;t<128;t+=6)e.fillStyle=t%12?"#9aa1a8":"#7a8188",e.fillRect(0,t,128,4);return jr(e,128,128,600,.3,["#5a5f64","#c9ced3"]),Cn(n)}function $d(n){let[e,t]=Rn(256,128);t.fillStyle="#3b2f2a",t.fillRect(0,0,256,128),t.fillStyle="#fff3bf",t.fillRect(0,0,256,8);let i=["#e03131","#1c7ed6","#f59f00","#2f9e44","#ae3ec9","#f8f9fa","#e8590c"];for(let s=0;s<3;s++){t.fillStyle="#6b4f3a",t.fillRect(0,34+s*34,256,4);for(let r=4;r<252;r+=10+(n*7+r)%9){t.fillStyle=i[(r*13+s*5+n)%i.length];let a=14+(r+n)%12;t.fillRect(r,34+s*34-a,8,a)}}return Cn(e,!1)}function Pn(n,e,t,i=512,s=112){let[r,a]=Rn(i,s);a.fillStyle=e,a.fillRect(0,0,i,s),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=5,a.strokeRect(6,6,i-12,s-12),a.fillStyle=t,a.textAlign="center",a.textBaseline="middle";let o=s*.56;for(a.font=`800 ${o}px ${ls}`;a.measureText(n).width>i-40&&o>12;)o-=2,a.font=`800 ${o}px ${ls}`;return a.fillText(n,i/2,s/2+o*.08),Cn(r,!1)}function qd(n,e,t,i){let[s,r]=Rn(256,512);return r.fillStyle=e,r.fillRect(0,0,256,512),r.fillStyle=i,r.fillRect(0,0,256,34),r.fillRect(0,478,256,34),r.fillStyle="rgba(255,255,255,0.15)",r.beginPath(),r.arc(128,380,70,0,Math.PI*2),r.fill(),r.fillStyle=t,r.textAlign="center",r.textBaseline="middle",n.forEach((a,o)=>{let l=52;for(r.font=`800 ${l}px ${ls}`;r.measureText(a).width>224&&l>14;)l-=2,r.font=`800 ${l}px ${ls}`;r.fillText(a,128,120+o*82)}),r.font=`700 54px ${ls}`,r.fillText("\u270A",128,384),Cn(s,!1)}function Yd(n){let[e,t]=Rn(64,64);t.fillStyle=n,t.fillRect(0,0,64,64),t.fillStyle="rgba(255,255,255,0.28)";for(let i=0;i<64;i+=16)t.fillRect(i,0,5,64),t.fillRect(0,i,64,5);t.fillStyle="rgba(0,0,0,0.2)";for(let i=8;i<64;i+=16)t.fillRect(i,0,2,64),t.fillRect(0,i,64,2);return Cn(e)}function Zd(){let[n,e]=Rn(128,128),t=e.createRadialGradient(64,64,20,64,64,64);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.7,"rgba(255,255,255,0.15)"),t.addColorStop(.86,"rgba(255,255,255,0.95)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Cn(n,!1)}function Jd(){let[n,e]=Rn(64,64),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Cn(n,!1)}var Kd=["#e9d8a6","#d8e2dc","#e8b38a","#9fd3c7","#e5e5e5","#ffd6a5","#cdb4db","#bcd4e6","#f1c0b9","#c7d59f"],$_=[["#c92a2a","#fff"],["#1864ab","#fff"],["#2b8a3e","#fff"],["#f59f00","#1a1a1a"],["#5f3dc4","#fff"],["#e8590c","#fff"],["#0b7285","#fff"],["#fff3bf","#c92a2a"]],jd=[["#2b8a3e","#fff","#c92a2a"],["#c92a2a","#fff","#f8f9fa"],["#f8f9fa","#1b4332","#2b8a3e"],["#1864ab","#fff","#ffd43b"],["#ffd43b","#1a1a1a","#c92a2a"]];function Si(n){let e=Math.abs(n);return e<=Ie.medianHalf?.3:e>=Ie.roadHalf?Ie.curbY:0}function Qd(n){let{len:e,startZ:t,roadHalf:i,medianHalf:s}=Ie,r=-e,a=t-r,o=(t+r)/2,l=[],c=[],u=[],h=[],d=[],f=[],g=new Et({color:"#3a3833"}),v=new Et({color:"#ffcf7a",transparent:!0,opacity:0,depthWrite:!1,blending:Nr}),p=new kn(4.2,28);p.rotateX(-Math.PI/2),n.background=new ke("#d8cfbf"),n.fog=new mr("#d8cfbf",70,270);let m=new Rr("#fff4e0","#6b6255",1.55);n.add(m);let _=new Dr("#ffe2b8",2.1);_.castShadow=!0,_.shadow.mapSize.set(2048,2048);let T=_.shadow.camera;T.left=-42,T.right=42,T.top=42,T.bottom=-42,T.near=1,T.far=160,_.shadow.bias=-6e-4,_.shadow.normalBias=.04,n.add(_,_.target);let y=new B(-.55,1,.45).normalize(),M=new fe(new gt(400,a+400),new Ze({color:"#8c8476"}));M.rotation.x=-Math.PI/2,M.position.set(0,-.02,o),M.receiveShadow=!0,n.add(M);let E=Hd();E.repeat.set(1,a/24);let x=new fe(new gt(i*2,a),new Ze({map:E}));x.rotation.x=-Math.PI/2,x.position.set(0,0,o),x.receiveShadow=!0,n.add(x);let S=I=>{let N=th();return N.repeat.set(I,1),new Ze({map:N})},P=new Ze({color:"#7a8a4f"}),A=S(a/2),D=new fe(new je(s*2,.3,a),[A,A,P,P,A,A]);D.position.set(0,.15,o),D.receiveShadow=!0,n.add(D);let F=Vd();F.repeat.set((19.5-i)/2,a/2);let W=new Ze({map:F}),L=S(a/1.6);for(let I of[-1,1]){let N=19.5-i,$=new fe(new je(N,Ie.curbY,a),[L,L,W,W,L,L]);$.position.set(I*(i+N/2),Ie.curbY/2,o),$.receiveShadow=!0,n.add($)}let Z=new Fi(.55,0),Q=Math.floor(a/3.2),Y=new ji(Z,new Ze({color:"#3f7d3a",flatShading:!0}),Q),se=new dt,K=new Tn,ne=new B,ee=new B;for(let I=0;I<Q;I++){let N=t-1-I*3.2,$=le(.6,1.05);se.compose(ne.set(le(-.3,.3),.45,N),K.setFromAxisAngle(ee.set(0,1,0),le(0,6)),ee.clone().set($,$*.8,$)),Y.setMatrixAt(I,se)}n.add(Y);let ge=new Ze({color:"#c9c3b8"}),Ue=new Ze({color:"#a39d92"}),te=new fe(new je(10,1.5,a+60),ge);te.position.set(0,9.9,o),te.castShadow=!0,te.receiveShadow=!0,n.add(te);for(let I of[-1,1]){let N=new fe(new je(.4,1,a+60),Ue);N.position.set(I*4.9,11.1,o),n.add(N)}let _e=new je(1.8,9.2,1.8),we=new je(6.5,1.3,2.4),j=new gt(1.7,3.4),k=0;for(let I=t-12;I>r+4;I-=Ld){let N=new fe(_e,ge);N.position.set(0,4.6,I),N.castShadow=!0,N.receiveShadow=!0,n.add(N);let $=new fe(we,ge);$.position.set(0,8.6,I),$.castShadow=!0,n.add($);for(let C of[-1,1]){let[q,V,ce]=jd[k%jd.length],re=new fe(j,new Ze({map:qd(Qc[k%Qc.length],q,V,ce)}));re.position.set(C*.92,4.4,I),re.rotation.y=C*Math.PI/2,n.add(re),k++}l.push({x:0,z:I,r:Dd})}let oe=Xd(),ze=Gd(),me=new Map,Se=I=>(me.has(I)||me.set(I,new Ze({color:I})),me.get(I)),et=new mt(.8,.8,1.4,12),$e=new Ze({color:"#1f1f1f"}),Ke=["#2b8a3e","#1864ab","#c92a2a","#f59f00","#0b7285"],ct=[];for(let I=t-40,N=0;I>r+30;I-=78,N++)ct.push({z:I,side:N%2?1:-1,kind:N%3===2?"sandal":"tea"});let It=0;for(let I of[-1,1]){let N=t+6;for(;N>r-6;){let $=le(8,14.5),C=N-$/2,q=2+Math.floor(Math.random()*6),V=q*3.2,ce=14,re=I*19.6,he=re+I*ce/2,Re=Math.random()<.18,Fe=Te(Kd),ae=(Re?ze:Wd(Fe,Math.random()<.2?2:Math.random()<.5?1:0)).clone();ae.needsUpdate=!0,ae.repeat.set(Re?$/3:Math.max(1,Math.round($/3.4)),Re?V/3:q);let Ce=new Ze({map:ae}),Oe=Se(Re?"#a8432f":Fe),be=I<0?[Ce,Oe,Oe,Oe,Oe,Oe]:[Oe,Ce,Oe,Oe,Oe,Oe],tt=new fe(new je(ce,V,$-.3),be);tt.position.set(he,3.6+V/2,C),tt.castShadow=!0,tt.receiveShadow=!0,n.add(tt);let Ct=new fe(new je(ce,3.6,$-.3),Se("#5c544a"));Ct.position.set(he,1.8,C),n.add(Ct);let Kt=Math.random()<.72,mn=Kt?$d(It*17):oe.clone();Kt||(mn.needsUpdate=!0,mn.wrapS=mn.wrapT=Li,mn.repeat.set($/3,1));let Sn=new Ze({map:mn,emissive:"#000000",emissiveMap:Kt?mn:null});Kt&&d.push(Sn);let Ks=new fe(new gt($-1,2.8),Sn);Ks.position.set(re+I*-.02,1.58,C),Ks.rotation.y=-I*Math.PI/2,n.add(Ks);let[la,ca]=Te($_),qn=jc[It%jc.length],ds=Pn(qn,la,ca),js=new Ze({map:ds,emissive:"#000000",emissiveMap:ds});d.push(js);let fs=new fe(new gt($-1.2,1.15),js);fs.position.set(re-I*.32,3.55,C),fs.rotation.y=-I*Math.PI/2,n.add(fs);let Yn=new fe(new gt(1.6,$-1),new Ze({color:Te(Ke),side:Mt}));if(Yn.rotation.x=-Math.PI/2,Yn.rotation.y=-I*.35,Yn.position.set(re-I*.75,2.95,C),Yn.castShadow=!0,n.add(Yn),Math.random()<.6){let Ln=new fe(et,$e);Ln.position.set(he+le(-3,3),3.6+V+.7,C+le(-$/4,$/4)),Ln.castShadow=!0,n.add(Ln)}if(Math.random()<.35){let Ln=new fe(new gt(1.4,.9),new Ze({map:Pn("\u099F\u09C1-\u09B2\u09C7\u099F","#fff","#c92a2a",192,112)}));Ln.position.set(re-I*.03,3.6+Math.min(V-1,4.2),C+le(-$/3,$/3)),Ln.rotation.y=-I*Math.PI/2,n.add(Ln)}Kt&&C<t-8&&C>r+8&&(ct.some(Qs=>Qs.side===I&&Math.abs(Qs.z-C)<9)||c.push({x:I*17.9,z:C,side:I,name:qn})),It++,N-=$+(Math.random()<.12?2.5:0)}}for(let I of[t+24,r-24])for(let N=0;N<9;N++){let $=le(16,42),C=new fe(new je(le(12,22),$,14),Se(Te(Kd)));C.position.set(-48+N*12,$/2,I+(I>0?14:-14)+le(-4,4)),n.add(C)}let St=th("#f8f9fa","#e03131");St.repeat.set(4,1);let bn=new Ze({map:St}),Ft=Pn("\u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u09AC\u09A8\u09CD\u09A7 \xB7 \u0989\u09A8\u09CD\u09A8\u09AF\u09BC\u09A8 \u0995\u09BE\u099C \u099A\u09B2\u099B\u09C7","#f59f00","#1a1a1a",1024,140);for(let[I,N]of[[t+2,0],[r-2,Math.PI]]){let $=new fe(new je(39,.9,.5),bn);$.position.set(0,.9,I),n.add($);for(let V=-19;V<=19;V+=3.8){let ce=new fe(new je(.2,1.3,.6),Se("#343a40"));ce.position.set(V,.65,I),n.add(ce)}let C=new fe(new gt(14,1.9),new Ze({map:Ft,side:Mt}));C.position.set(-9,2.5,I),C.rotation.y=N,n.add(C);let q=C.clone();q.position.x=9,n.add(q);for(let V of[-15.5,-2.5,2.5,15.5]){let ce=new fe(new je(.15,2.4,.15),Se("#343a40"));ce.position.set(V,1.6,I),n.add(ce)}}let fn=new je(.28,9.4,.28),an=new Ze({color:"#8f8a82"}),on=[],O={"-1":[],1:[]};for(let I of[-1,1])for(let N=t-4+(I>0?11:0);N>r;N-=22){let $=new fe(fn,an);$.position.set(I*12.5,4.7,N),$.castShadow=!0,n.add($);let C=new fe(new je(1.8,.14,.14),an);C.position.set(I*12.5,8.6,N),n.add(C);let q=new fe(new je(.7,.18,.36),g);q.position.set(I*11.55,8.48,N),n.add(q);let V=new fe(p,v);V.position.set(I*11.2,.05,N),V.renderOrder=1,n.add(V),f.push({x:I*11.55,z:N}),O[I].push(N),l.push({x:I*12.5,z:N,r:.28})}let Jt=(I,N,$,C,q,V,ce)=>{for(let he=0;he<10;he++){let Re=he/10,Fe=(he+1)/10;on.push(I+(C-I)*Re,N+(q-N)*Re-Math.sin(Re*Math.PI)*ce,$+(V-$)*Re,I+(C-I)*Fe,N+(q-N)*Fe-Math.sin(Fe*Math.PI)*ce,$+(V-$)*Fe)}};for(let I of[-1,1]){let N=O[I];for(let $=0;$+1<N.length;$++){let C=4+(Math.random()*4|0);for(let q=0;q<C;q++){let V=le(-.85,.85);Jt(I*12.5+V,le(7.4,8.8),N[$],I*12.5+V*le(.6,1.2),le(7.4,8.8),N[$+1],le(.4,1.6))}for(let q=0;q<2;q++)Jt(I*12.5,le(6.5,8),N[$],I*19.6,le(5,9),N[$]-le(3,12),le(.3,1))}}let xt=[],_t=[],ve=["#e03131","#2f9e44","#f59f00","#1c7ed6","#e64980","#f8f9fa"].map(I=>new ke(I)),Lt=O[-1];for(let I=1;I<Lt.length;I+=2){let N=Lt[I],$=-12.5,C=12.5,q=8.2,V=1.5;Jt($,q,N,C,q,N,V);let ce=28;for(let re=0;re<ce;re++){let he=(re+.1)/ce,Re=(re+.9)/ce,Fe=(re+.5)/ce,ae=Sn=>[$+(C-$)*Sn,q-Math.sin(Sn*Math.PI)*V],[Ce,Oe]=ae(he),[be,tt]=ae(Re),[Ct,Kt]=ae(Fe);xt.push(Ce,Oe,N,be,tt,N,Ct,Kt-.55,N);let mn=ve[re%ve.length];for(let Sn=0;Sn<3;Sn++)_t.push(mn.r,mn.g,mn.b)}}let Be=new Bt;Be.setAttribute("position",new rt(on,3)),n.add(new Qi(Be,new Ni({color:"#1a1a1a"})));let Ve=new Bt;Ve.setAttribute("position",new rt(xt,3)),Ve.setAttribute("color",new rt(_t,3)),Ve.computeVertexNormals(),n.add(new fe(Ve,new Et({vertexColors:!0,side:Mt})));let R=[];for(let I of[-1,1])for(let N=t-15+(I>0?6:0);N>r+6;N-=le(20,30))ct.some($=>$.side===I&&Math.abs($.z-N)<6)||R.push({x:I*le(13.5,13.9),z:N});let b=new ji(new mt(.16,.24,3.2,6),new Ze({color:"#6b4f3a"}),R.length),H=new ji(new Fi(1.5,0),new Ze({color:"#4f8a3c",flatShading:!0}),R.length*2);R.forEach((I,N)=>{se.compose(ne.set(I.x,1.75,I.z),K.identity(),ee.set(1,1,1)),b.setMatrixAt(N,se);let $=le(.75,1.05);se.compose(ne.set(I.x,3.9,I.z),K.setFromAxisAngle(ee.set(0,1,0),le(0,6)),ee.set($,$*.85,$)),H.setMatrixAt(N*2,se);let C=$*.7;se.compose(ne.set(I.x+le(-.6,.6),4.9,I.z+le(-.6,.6)),K.setFromAxisAngle(ee.set(0,1,0),le(0,6)),ee.set(C,C,C)),H.setMatrixAt(N*2+1,se),l.push({x:I.x,z:I.z,r:.35})}),b.castShadow=!0,H.castShadow=!0,n.add(b,H);let ue=Zd(),ie=new gt(5.2,5.2);ie.rotateX(-Math.PI/2);let pe=Se("#8a5a2b"),xe=new Ze({color:"#9aa5ad",side:Mt});for(let I of ct){let N=I.side,$=N*15.6,C=new vt;C.position.set($,Ie.curbY,I.z),n.add(C);for(let[Fe,ae]of[[-1.1,-1.3],[1.1,-1.3],[-1.1,1.3],[1.1,1.3]]){let Ce=new fe(new je(.1,2.5,.1),pe);Ce.position.set(Fe,1.25,ae),C.add(Ce)}let q=new fe(new gt(2.8,3.2),xe);q.rotation.x=-Math.PI/2,q.rotation.y=N*.18,q.position.y=2.55,q.castShadow=!0,C.add(q);let V=new fe(new je(1,.95,2.2),I.kind==="tea"?pe:Se("#1864ab"));V.position.set(N*.6,.48,0),C.add(V);let ce=I.kind==="tea"?Pn("\u099A\u09BE \xB7 \u09AC\u09BF\u09B8\u09CD\u0995\u09C1\u099F \xB7 \u09AA\u09BE\u09A8","#ffd43b","#c92a2a",384,96):Pn("\u099C\u09C1\u09A4\u09BE-\u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7\u09B2","#1c7ed6","#fff",384,96),re=new fe(new gt(2.4,.6),new Ze({map:ce,side:Mt}));if(re.position.set(-N*1.15,2.25,0),re.rotation.y=-N*Math.PI/2,C.add(re),I.kind==="tea"){let Fe=new fe(new mt(.16,.2,.3,10),Se("#adb5bd"));Fe.position.set(N*.6,1.1,-.5),C.add(Fe);for(let Ce=0;Ce<4;Ce++){let Oe=new fe(new mt(.05,.04,.09,8),Se("#f8f9fa"));Oe.position.set(N*.5,1,.2+Ce*.18),C.add(Oe)}let ae=new fe(new je(.45,.45,2),pe);ae.position.set(-N*.9,.23,0),C.add(ae)}else{let Fe=["#e03131","#f59f00","#2f9e44","#ae3ec9","#1c7ed6","#f8f9fa"];for(let ae=0;ae<10;ae++){let Ce=new fe(new je(.12,.04,.3),Se(Fe[ae%Fe.length]));Ce.position.set(N*.6+le(-.3,.3),.99,-.9+ae*.2),Ce.rotation.y=le(-.4,.4),C.add(Ce)}}let he=new fe(ie,new Et({map:ue,color:I.kind==="tea"?"#ffb31a":"#22b8cf",transparent:!0,depthWrite:!1}));he.position.set(-N*2,.03,0),he.renderOrder=2,C.add(he);let Re={x:$-N*2,z:I.z,ring:he,cooldown:0,kind:I.kind};(I.kind==="tea"?u:h).push(Re),l.push({x:$+N*.4,z:I.z,r:1.35})}return l.sort((I,N)=>I.z-N.z),{colliders:l,shops:c,teaStalls:u,sandalStalls:h,zEnd:r,startZ:t,hemi:m,sun:_,sunDir:y,glow:d,lamps:f,lampMat:g,poolMat:v,update(I,N){_.position.copy(I).addScaledVector(y,80),_.target.position.copy(I);for(let $ of u)$.ring.material.opacity=.6+Math.sin(N*3)*.3;for(let $ of h)$.ring.material.opacity=$.cooldown>0?.15:.6+Math.sin(N*3+1)*.3}}}function nh(n,e,t){let i=n.colliders;for(let s=0;s<i.length;s++){let r=i[s],a=e.z-r.z;if(a>3||a<-3)continue;let o=e.x-r.x,l=t+r.r,c=o*o+a*a;if(c<l*l&&c>1e-6){let u=Math.sqrt(c);e.x=r.x+o/u*l,e.z=r.z+a/u*l}}e.x>Ie.walkHalf&&(e.x=Ie.walkHalf),e.x<-Ie.walkHalf&&(e.x=-Ie.walkHalf),e.z>Ie.startZ-1&&(e.z=Ie.startZ-1),e.z<-Ie.len+1&&(e.z=-Ie.len+1)}var ih=new Map;function ft(n,e){let t=n+(e?"m":"");if(!ih.has(t)){let i=new Ze({color:n});e&&(i.map=Yd(n),i.color.set("#ffffff")),ih.set(t,i)}return ih.get(t)}var pt=(n,e,t)=>new je(n,e,t),In={leg:pt(.17,.9,.2),foot:pt(.17,.09,.28),torso:pt(.48,.6,.28),arm:pt(.13,.58,.15),hand:pt(.12,.12,.13),head:pt(.3,.32,.3),hair:pt(.32,.1,.32),hairBack:pt(.32,.22,.08),eye:pt(.05,.05,.02),skirt:new mt(.24,.3,.8,10),sareeSkirt:new mt(.25,.33,.86,10),stick:new mt(.035,.035,1.05,6)},dl,ef;function lt(n,e,t,i,s,r){let a=new fe(e,t);return a.position.set(i,s,r),n.add(a),a}function Qr(n){let e=new vt,t=new vt;t.position.y=.95,e.add(t);let i=ft(n.skin),s=ft(n.shirt),r=ft(n.pants),a=ft(n.hair),o=ft("#141414"),l=[];for(let _ of[1,-1]){let T=new vt;T.position.set(_*.12,0,0),t.add(T),lt(T,In.leg,n.lungi||n.saree?i:r,0,-.45,0),lt(T,In.foot,o,0,-.9,.04),l.push(T)}n.lungi&&lt(t,In.skirt,ft(n.lungi,!0),0,-.42,0),n.saree&&lt(t,In.sareeSkirt,ft(n.pants),0,-.47,0);let c=new vt;t.add(c);let u=lt(c,In.torso,s,0,.32,0),h=n.belly||1;if(u.scale.set(1+(h-1)*.35,1,h),n.panjabi&&lt(c,pt(.5,.5,.3*h),s,0,-.2,0),n.vest&&lt(c,pt(.5,.5,.29*h+.02),ft(n.vest),0,.36,0),n.saree){let _=lt(c,pt(.18,.78,.3),ft(q_(n.shirt)),.06,.32,.005);_.rotation.z=.55,_.scale.z=1.05}n.backpack&&lt(c,pt(.38,.46,.18),ft(n.backpack),0,.34,-.22),n.gamchha&&(lt(c,pt(.42,.08,.32),ft(n.gamchha),0,.6,0),lt(c,pt(.1,.4,.04),ft(n.gamchha),.12,.4,.16));let d=new vt;if(d.position.y=.66,c.add(d),lt(d,In.head,i,0,.16,0),lt(d,In.hair,a,0,.34,0),lt(d,In.hairBack,a,0,.22,-.13),n.saree&&lt(d,pt(.16,.16,.14),a,0,.18,-.2),lt(d,In.eye,o,.07,.19,.155),lt(d,In.eye,o,-.07,.19,.155),n.mustache&&lt(d,pt(.16,.035,.03),a,0,.09,.16),n.beard&&lt(d,pt(.26,.12,.06),ft("#ced4da"),0,.02,.14),n.glasses){let _=ft("#222");lt(d,pt(.1,.07,.02),_,.07,.19,.165),lt(d,pt(.1,.07,.02),_,-.07,.19,.165)}n.shades&&lt(d,pt(.27,.07,.02),o,0,.19,.165),n.cap&&(lt(d,new mt(.19,.19,.1,10),ft(n.cap),0,.37,0),lt(d,pt(.28,.025,.14),ft(n.cap),0,.33,.17)),n.bandana&&lt(d,pt(.33,.07,.33),ft(n.bandana),0,.28,0),n.topi&&lt(d,new ts(.165,10,6,0,Math.PI*2,0,Math.PI/2),ft(n.topi),0,.31,0);let f=[];for(let _ of[1,-1]){let T=new vt;T.position.set(_*(.31+(h-1)*.08),.58,0),c.add(T),lt(T,In.arm,(n.saree||n.panjabi||_<0,s),0,-.27,0),lt(T,In.hand,i,0,-.6,0),f.push(T)}if(n.chain&&lt(c,pt(.3,.05,.31*h),ft("#fcc419"),0,.5,.01),n.coat&&(lt(c,pt(.52,.98,.3*h+.03),ft("#f8f9fa"),0,.15,0),lt(c,pt(.12,.5,.02),s,0,.35,.16*h+.01)),n.papers){let _=ft("#ffffff");for(let T=0;T<3;T++)lt(c,pt(.12,.16,.02),_,-.12+T*.03,.5+T*.03,.16*h)}n.briefcase&&lt(f[0],pt(.12,.32,.42),ft("#5c3b22"),0,-.78,0),dl||(dl=new gt(1.1,1.1),dl.rotateX(-Math.PI/2),ef=new Et({map:Jd(),transparent:!0,depthWrite:!1}));let g=new fe(dl,ef);g.position.y=.03,g.renderOrder=1,e.add(g);let v=new vt;v.position.set(0,-.62,0),f[1].add(v);let p=n.stick?"stick":n.umbrella?"umbrella":n.cane?"cane":null,m={group:e,body:t,torso:c,head:d,shadow:g,held:v,defaultHeld:p,stick:!1,legL:l[0],legR:l[1],armL:f[0],armR:f[1],narrow:!!(n.lungi||n.saree),height:1.95*(n.scale||1)};return ri(m,p),e.scale.setScalar(n.scale||1),m}var Ys={stick:new mt(.035,.035,1.05,6),cane:new mt(.022,.022,.95,6),shaft:new mt(.02,.02,1,6),canopy:new es(.11,.62,8),bristle:new mt(.05,.16,.45,8)};function ri(n,e){for(;n.held.children.length;)n.held.remove(n.held.children[0]);if(n.heldKind=e,n.stick=!!e,!e)return;let t=new vt;if(t.rotation.x=Math.PI/2,e==="stick")t.add(new fe(Ys.stick,ft("#8a5a2b")));else if(e==="cane")t.add(new fe(Ys.cane,ft("#6b3e1f")));else if(e==="umbrella"){let i=new fe(Ys.shaft,ft("#222")),s=new fe(Ys.canopy,ft("#1c1c1c"));s.position.y=.2;let r=new fe(pt(.05,.05,.14),ft("#8a5a2b"));r.position.set(0,-.5,.05),t.add(i,s,r)}else if(e==="broom"){let i=new fe(Ys.shaft,ft("#c9a46b")),s=new fe(Ys.bristle,ft("#e0b85c"));s.position.y=.66,t.add(i,s)}t.position.z=.38,n.held.add(t)}function q_(n){let e=new ke(n);return e.offsetHSL(0,-.1,.18),"#"+e.getHexString()}var z={};function Y_(){z.lL=0,z.lR=0,z.aLx=0,z.aLz=.08,z.aRx=0,z.aRz=-.08,z.tx=0,z.ty=0,z.hx=0,z.bx=0,z.by=.95,z.bz=0}var fl=()=>{z.aLx=-1.25,z.aRx=-1.05,z.aLz=-.25,z.aRz=.25};function cs(n,e,t){Y_();let i=e.t,s=e.move||0,r=14;switch(e.mode){case"walk":{let l=(n.narrow?.38:.62)*Math.min(1,s*1.2),c=Math.sin(e.phase);z.lL=c*l,z.lR=-c*l,z.aLx=-c*l*.9,z.aRx=c*l*.9,z.tx=.14*s,z.by=.95+Math.abs(Math.cos(e.phase))*.06*s,e.guard&&(z.aLx=-1.2+c*.1,z.aRx=-1-c*.1,z.aLz=-.25,z.aRz=.25);break}case"guard":fl(),z.by=.93+Math.sin(i*6)*.015,z.lL=.25,z.lR=-.2;break;case"punchR":case"punchL":{r=34,fl(),e.mode==="punchR"?(z.aRx=-1.6,z.aRz=.05,z.ty=-.4):(z.aLx=-1.6,z.aLz=-.05,z.ty=.4),z.tx=.18,z.lL=.35,z.lR=-.25;break}case"uppercut":r=30,fl(),z.aRx=-2.7,z.ty=-.25,z.tx=-.12,z.by=1,z.lL=.3,z.lR=-.3;break;case"kick":r=28,z.lR=-1.5,z.lL=.15,z.tx=-.3,z.aLz=.9,z.aRz=-.9,z.aLx=-.4,z.aRx=.3;break;case"windup":r=18,z.aRx=n.stick?-2.95:-2.4,z.aRz=-.15,z.aLx=-.9,z.tx=-.16,z.ty=.25,z.lL=.3,z.lR=-.25;break;case"strike":r=36,z.aRx=n.stick?-.8:-1.6,z.ty=-.3,z.tx=.3,z.aLx=-.5,z.lL=.4,z.lR=-.3;break;case"slamUp":r=12,z.aLx=-2.95,z.aRx=-2.95,z.tx=-.2,z.by=1;break;case"slam":r=40,z.aLx=-.7,z.aRx=-.7,z.tx=.55,z.by=.82,z.lL=.5,z.lR=-.5;break;case"hit":r=30,z.tx=-.5,z.hx=-.35,z.aLz=.7,z.aRz=-.7,z.aLx=-.4,z.aRx=-.4,z.lL=-.2,z.lR=.25;break;case"down":case"ko":r=e.t<.4?12:8,z.bx=-1.52,z.by=.24,z.aLz=1.3,z.aRz=-1.3,z.aLx=-.3,z.lL=-.15,z.lR=.2,e.mode==="ko"&&(z.hx=-.2);break;case"getup":{r=12;let l=Math.min(1,i/.55);z.bx=-1.52*(1-l),z.by=.24+(.95-.24)*l,z.tx=.4*(1-l),z.lL=-.6*(1-l),z.lR=-.3*(1-l);break}case"dodge":{r=60;let l=Math.min(1,i/.42);z.bx=l*Math.PI*2,z.by=.95-Math.sin(l*Math.PI)*.5,z.lL=-1.6,z.lR=-1.6,z.aLx=-2.2,z.aRx=-2.2;break}case"cheer":{let l=Math.sin(i*9);z.aLx=-2.9,z.aRx=-2.9,z.aLz=.25+l*.2,z.aRz=-.25+l*.2,z.by=.95+Math.abs(Math.sin(i*7))*.16;break}case"fist":r=20,z.aRx=-3.05,z.aRz=.1,z.aLx=-.2,z.aLz=.3,z.tx=-.12,z.by=.95+Math.max(0,Math.sin(i*6))*.12;break;case"throwUp":r=20,z.aRx=-2.9,z.aRz=-.2,z.ty=.45,z.aLx=-1,z.tx=-.1;break;case"throw":r=40,z.aRx=-1.3,z.ty=-.35,z.tx=.2,z.aLx=-.3;break;case"extort":z.aRx=-1.45+Math.sin(i*5)*.15,z.aRz=-.05,z.aLz=.55,z.aLx=.2,z.tx=.1;break;case"collect":z.aRx=-1.2+Math.sin(i*2)*.05,z.aLx=-.2,z.tx=-.05;break;case"cower":z.tx=.35,z.hx=.3,z.aLx=-2.1,z.aRx=-2.1,z.aLz=-.4,z.aRz=.4,z.by=.88+Math.sin(i*30)*.008;break;case"pay":z.aRx=-1.3,z.tx=.15,z.hx=.2;break;case"kan":{let l=.5+.5*Math.sin(i*6);z.aLx=-2.95,z.aRx=-2.95,z.aLz=-.45,z.aRz=.45,z.by=.95-l*.38,z.lL=-.7*l,z.lR=-.7*l,z.tx=.25*l,r=18;break}case"spin":r=30,z.aLz=1.5,z.aRz=-1.5,z.aRx=-.3,z.lL=.2,z.lR=-.2;break;case"ride":z.lL=-1.45,z.lR=-1.45,z.aLx=-1.1,z.aRx=-1.1,z.by=.62;break;case"sip":z.aRx=-2.2+Math.sin(i*1.3)*.25,z.aRz=.35,z.hx=-.1;break;default:z.tx=Math.sin(i*1.8)*.02,z.aLz=.08+Math.sin(i*1.8)*.02,z.aRz=-z.aLz,e.guard&&(fl(),z.by=.93+Math.sin(i*6)*.015,z.lL=.25,z.lR=-.2)}let a=1-Math.exp(-r*t),o=(l,c,u)=>{l[c]+=(u-l[c])*a};o(n.legL.rotation,"x",z.lL),o(n.legR.rotation,"x",z.lR),o(n.armL.rotation,"x",z.aLx),o(n.armL.rotation,"z",z.aLz),o(n.armR.rotation,"x",z.aRx),o(n.armR.rotation,"z",z.aRz),o(n.torso.rotation,"x",z.tx),o(n.torso.rotation,"y",z.ty),o(n.head.rotation,"x",z.hx),e.mode==="dodge"?n.body.rotation.x=z.bx:(n.body.rotation.x>Math.PI&&(n.body.rotation.x-=Math.PI*2),o(n.body.rotation,"x",z.bx)),o(n.body.position,"y",z.by)}var ea={bus:{len:10.5,w:2.5,speed:[10,13.5],dmg:34,brakes:!1,danger:!0,weight:3,lanes:[1,2,0,3]},truck:{len:8,w:2.4,speed:[9,12],dmg:30,brakes:!1,danger:!0,weight:1.5,lanes:[1,2]},cng:{len:2.8,w:1.45,speed:[8,11],dmg:12,brakes:!0,weight:3,lanes:[0,1,2,3]},rickshaw:{len:2.3,w:1.15,speed:[3,4.2],dmg:6,brakes:!0,weight:2.5,lanes:[0,3]},car:{len:4.4,w:1.85,speed:[10,14],dmg:18,brakes:!0,weight:2,lanes:[1,2]},dozer:{len:6.2,w:3.2,speed:[12,12],dmg:38,brakes:!1,danger:!0,weight:0,lanes:[]}},rh={rickshaw:{max:8,accel:6,turn:2.3,name:"\u09B0\u09BF\u0995\u09B6\u09BE",horn:"\u0995\u09CD\u09B0\u09BF\u0982 \u0995\u09CD\u09B0\u09BF\u0982!"},cng:{max:14,accel:9,turn:1.8,name:"\u09B8\u09BF\u098F\u09A8\u099C\u09BF",horn:"\u09AA\u09BF\u09AA \u09AA\u09BF\u09AA!"}},bt=n=>new Ze({color:n}),Wn=bt("#1d2a33"),pl=bt("#151515"),tf=new mt(.5,.5,.3,12).rotateZ(Math.PI/2),nf=new mt(.28,.28,.16,10).rotateZ(Math.PI/2),Z_=new mt(.5,.5,.06,14).rotateZ(Math.PI/2);function Nt(n,e,t,i,s,r,a,o){let l=new fe(new je(e,t,i),s);return l.position.set(r,a,o),n.add(l),l}function ah(n,e,t,i=512,s=160,r=!0){let a=document.createElement("canvas");a.width=i,a.height=s;let o=a.getContext("2d");o.fillStyle=n,o.fillRect(0,0,i,s),o.fillStyle=e,o.beginPath(),o.moveTo(0,s*.72);for(let c=0;c<=i;c+=16)o.lineTo(c,s*.72+Math.sin(c/30)*8);if(o.lineTo(i,s),o.lineTo(0,s),o.fill(),o.fillStyle="#ffd43b",o.fillRect(0,s*.62,i,6),r){o.fillStyle="#1d2a33";for(let c=20;c<i-40;c+=58)o.fillRect(c,14,48,s*.36)}o.fillStyle="#fff",o.font=`800 ${s*.16}px ${ls}`,o.textAlign="center",o.fillText(t,i/2,s*.88);let l=new Ui(a);return l.colorSpace=qt,l}var J_=[["#c92a2a","#2b8a3e","\u09B8\u09BF\u099F\u09BF\u0982 \u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8 (\u09A6\u09BE\u0981\u09A1\u09BC\u09BF\u09AF\u09BC\u09C7\u0993 \u09AF\u09BE\u0993\u09AF\u09BC\u09BE \u09AF\u09BE\u09AF\u09BC)"],["#2b8a3e","#f59f00","\u09B2\u09CB\u0995\u09BE\u09B2 \xB7 \u09B8\u09AC \u09B8\u09CD\u099F\u09AA\u09C7 \u09A5\u09BE\u09AE\u09C7 \u09A8\u09BE"],["#1864ab","#e03131","\u0997\u09C7\u099F\u09B2\u0995 \xB7 \u0997\u09C7\u099F \u0996\u09CB\u09B2\u09BE\u0987 \u09A5\u09BE\u0995\u09C7"],["#f59f00","#c92a2a","\u09A6\u09CD\u09B0\u09C1\u09A4\u0997\u09BE\u09AE\u09C0 \u09AA\u09B0\u09BF\u09AC\u09B9\u09A8"]].map(([n,e,t])=>new Ze({map:ah(n,e,t)})),K_=[["#e8590c","#1864ab","\u09A7\u09C0\u09B0\u09C7 \u099A\u09B2\u09C1\u09A8 \xB7 \u09AE\u09BE\u09AF\u09BC\u09C7\u09B0 \u09A6\u09CB\u09AF\u09BC\u09BE"],["#2b8a3e","#c92a2a","\u09B9\u09B0\u09CD\u09A8 \u09A6\u09BF\u09A8 \xB7 \u09B8\u09BE\u0987\u09A1 \u09A6\u09BF\u09A8"]].map(([n,e,t])=>new Ze({map:ah(n,e,t,512,160,!1)}));function sh(n){let e=new vt,t=ea[n],i=[],s=(o,l)=>{for(let[c,u,h]of l){let d=new fe(o,pl);d.position.set(c,u,h),e.add(d),i.push(d)}},r=null;if(n==="bus"){let o=Te(J_),l=bt(o.map.image?"#d9d9d9":"#ccc"),c=Nt(e,t.w,2.7,t.len,[o,o,bt("#e9ecef"),pl,Wn,l],0,1.85,0);c.castShadow=!0,Nt(e,t.w+.04,.3,.2,bt("#f1f3f5"),0,.65,t.len/2),Nt(e,.5,.18,.06,bt("#fff5bf"),.85,.85,t.len/2+.11),Nt(e,.5,.18,.06,bt("#fff5bf"),-.85,.85,t.len/2+.11),s(tf,[[1.15,.5,3.4],[-1.15,.5,3.4],[1.15,.5,-3.2],[-1.15,.5,-3.2]])}else if(n==="truck"){let o=Te(K_),l=Nt(e,t.w,2.2,2.2,[bt("#e8590c"),bt("#e8590c"),bt("#e8590c"),pl,Wn,bt("#e8590c")],0,1.7,t.len/2-1.1);l.castShadow=!0;let c=Nt(e,t.w,2.4,t.len-2.4,[o,o,bt("#5c4a2e"),pl,bt("#5c4a2e"),bt("#ffd43b")],0,1.9,-1.2);c.castShadow=!0,s(tf,[[1.1,.5,2.8],[-1.1,.5,2.8],[1.1,.5,-2.4],[-1.1,.5,-2.4]])}else if(n==="cng"){let o=bt("#2f9e44"),l=Nt(e,t.w,1,t.len,o,0,.75,0);l.castShadow=!0,Nt(e,t.w-.05,.12,t.len-.3,bt("#1f6f2e"),0,1.9,-.1),Nt(e,t.w-.1,.65,.1,Wn,0,1.5,t.len/2-.4);for(let c of[-1,1])Nt(e,.05,.7,t.len-.6,bt("#2b2b2b"),c*(t.w/2-.02),1.55,-.1);Nt(e,.3,.2,.06,bt("#fff5bf"),0,.95,t.len/2+.02),s(nf,[[0,.28,t.len/2-.35],[.62,.28,-.9],[-.62,.28,-.9]])}else if(n==="rickshaw"){let o=Te(["#e03131","#ae3ec9","#1c7ed6","#f59f00","#2f9e44"]);Nt(e,1,.25,.8,bt("#c92a2a"),0,.95,-.55),Nt(e,1,.55,.12,bt("#e64980"),0,1.25,-.92);let l=new fe(new mt(.55,.55,.9,12,1,!0,0,Math.PI),new Ze({color:o,side:Mt}));l.rotation.z=Math.PI/2,l.rotation.y=Math.PI/2,l.position.set(0,1.45,-.7),l.castShadow=!0,e.add(l),Nt(e,.06,.06,1.7,bt("#adb5bd"),0,.6,.05),s(Z_,[[.55,.5,-.6],[-.55,.5,-.6],[0,.5,.95]]),r=Qr({shirt:Te(["#f8f9fa","#ffd43b","#74c0fc"]),pants:"#2b8a3e",lungi:"#2b8a3e",skin:"#7a4a2d",hair:"#111"}),r.group.position.set(0,.28,.45),r.group.scale.setScalar(.92),r.shadow.visible=!1,e.add(r.group)}else if(n==="dozer"){let o=bt("#f5b700"),l=Nt(e,2.4,1.5,3.6,o,0,1.45,-.6);l.castShadow=!0,Nt(e,1.6,1.3,1.5,[Wn,Wn,o,o,Wn,Wn],0,2.75,-1);for(let h of[-1,1])Nt(e,.7,.9,4.4,bt("#2b2b2b"),h*1.25,.45,-.6);let c=Nt(e,t.w,1.3,.25,bt("#868e96"),0,.85,2.3);c.rotation.x=-.15,Nt(e,.2,.2,1.4,o,.8,1,1.6),Nt(e,.2,.2,1.4,o,-.8,1,1.6);let u=new fe(new gt(2.2,.5),new Et({map:ah("#f5b700","#1a1a1a","\u09A6\u0996\u09B2 \u099A\u09B2\u099B\u09C7",256,64,!1)}));u.position.set(0,2.3,1.2),e.add(u)}else{let o=Te(["#f1f3f5","#adb5bd","#212529","#1864ab","#c92a2a"]),l=Nt(e,t.w,.7,t.len,bt(o),0,.7,0);l.castShadow=!0,Nt(e,t.w-.15,.6,t.len*.5,[Wn,Wn,bt(o),bt(o),Wn,Wn],0,1.33,-.25),s(nf.clone().scale(1.3,1.3,1.3),[[.85,.36,1.4],[-.85,.36,1.4],[.85,.36,-1.4],[-.85,.36,-1.4]])}let a=null;if(t.danger){let o=new gt(t.w+.6,8);o.rotateX(-Math.PI/2),o.translate(0,.04,t.len/2+4.2);let l=document.createElement("canvas");l.width=32,l.height=128;let c=l.getContext("2d"),u=c.createLinearGradient(0,0,0,128);u.addColorStop(0,"rgba(255,60,30,0)"),u.addColorStop(1,"rgba(255,60,30,0.85)"),c.fillStyle=u,c.fillRect(0,0,32,128);for(let d=8;d<128;d+=28)c.fillStyle="rgba(255,220,60,0.5)",c.fillRect(0,d,32,8);let h=new Ui(l);a=new fe(o,new Et({map:h,transparent:!0,depthWrite:!1})),a.renderOrder=2,e.add(a)}return{group:e,wheels:i,puller:r,warn:a}}function sf(n,e){let t=[],i=0;function s(h,d=!1){let f=Math.random()*Zc.length|0,g=Zc[f],v=Object.entries(ea).filter(([,x])=>x.lanes.includes(f)),p=v.reduce((x,[,S])=>x+S.weight,0),m=Math.random()*p,_=v[0][0];for(let[x,S]of v)if(m-=S.weight,m<=0){_=x;break}let T=ea[_],y=d?h+le(-110,110):h-g.dir*le(120,150);if(y=Math.max(-Ie.len+8,Math.min(Ie.startZ-8,y)),!d&&Math.abs(y-h)<70)return;for(let x of t)if(x.lane===g&&Math.abs(x.z-y)<(x.T.len+T.len)/2+6)return;let M=sh(_);M.group.rotation.y=g.dir<0?Math.PI:0,n.add(M.group);let E=le(T.speed[0],T.speed[1]);t.push({...M,type:_,T,lane:g,x:g.x+le(-.3,.3),z:y,speed:E,cruise:E,dir:g.dir,honkT:0,phase:0})}function r(){for(let h of t)n.remove(h.group);t.length=0}function a(h,d,f,g){let v=sh(h);v.puller&&(v.puller.group.visible=!1),n.add(v.group);let p={...v,type:h,T:ea[h],lane:null,x:d,z:f,speed:0,cruise:0,dir:1,honkT:0,phase:0,parked:!0,heading:g};return v.group.position.set(d,0,f),v.group.rotation.y=g,t.push(p),p}function o(h){let d=t.filter(g=>g.parked&&!g.rider);for(let g of d)Math.abs(g.z-h)>110&&(n.remove(g.group),t.splice(t.indexOf(g),1));if(t.filter(g=>g.parked&&Math.abs(g.z-h)<90).length<3){let g=Math.random()<.5?-1:1,v=h-le(15,70)*(Math.random()<.8?1:-1);if(v=Math.max(-Ie.len+10,Math.min(Ie.startZ-10,v)),t.some(p=>p.parked&&Math.abs(p.z-v)<8))return;a(Math.random()<.55?"rickshaw":"cng",g*10.9,v,g<0?Math.PI:0)}}function l(h,d){let f=Math.random()<.5?-1:1,g=Math.max(-10,Math.min(10,h+le(-1.5,1.5))),v=sh("dozer");v.group.rotation.y=f<0?Math.PI:0,n.add(v.group);let p=d-f*55;return t.push({...v,type:"dozer",T:ea.dozer,lane:null,x:g,z:p,speed:13,cruise:13,dir:f,honkT:0,phase:0,special:!0}),e.horn("bus"),{x:g,z:p,dir:f}}function c(h,d,f,g,v,p){i-=h,i<=0&&t.filter(m=>!m.parked).length<22&&(s(d),i=le(.5,1.3));for(let m=t.length-1;m>=0;m--){let _=t[m],T=_.T;if(_.parked||_.rider){for(let P of f){if(P.dead||P===_.rider||P.riding)continue;let A=P.x-_.x,D=P.z-_.z,F=(_.rider?T.len:T.w)/2+.3,W=T.len/2+.3;if(Math.abs(A)<F&&Math.abs(D)<W&&!_.rider){let L=F-Math.abs(A),Z=W-Math.abs(D);L<Z?P.x=_.x+Math.sign(A||1)*F:P.z=_.z+Math.sign(D||1)*W}}continue}let y=P=>(P.z-_.z)*_.dir,M=_.cruise;for(let P of t){if(P===_||Math.abs(P.x-_.x)>(P.T.w+T.w)/2+.2)continue;let A=y(P)-(P.T.len+T.len)/2;if(P.rider&&T.danger){A<.6&&A>-P.T.len&&_.speed>3&&p&&p(P,_);continue}A>0&&A<10&&(M=Math.min(M,Math.max(0,P.speed)*Math.min(1,A/8)))}_.special&&(M=_.cruise);let E=null;for(let P of f){if(Math.abs(P.x-_.x)>T.w/2+.9)continue;let A=y(P)-T.len/2;A>-.5&&A<4+_.speed*.9&&(E=P,T.brakes&&(M=Math.min(M,Math.max(0,(A-1.2)*1.2))))}_.honkT-=h,E&&E.isPlayer&&_.honkT<=0&&(e.horn(T.danger?"bus":u(_)),_.honkT=le(1.4,2.6));let x=M>_.speed?4:14;_.speed+=Math.sign(M-_.speed)*Math.min(Math.abs(M-_.speed),x*h),_.z+=_.dir*_.speed*h,_.group.position.set(_.x,0,_.z);for(let P of _.wheels)P.rotation.x+=_.speed*h/.45;_.puller&&(_.phase+=_.speed*h*2.2,cs(_.puller,{mode:"walk",t:v,move:.6,phase:_.phase},h)),_.warn&&(_.warn.material.opacity=.55+Math.sin(v*10)*.35);for(let P of f){if(P.dead||P.riding)continue;let A=P.x-_.x,D=P.z-_.z,F=T.w/2+.35,W=T.len/2+.35;if(Math.abs(A)<F&&Math.abs(D)<W){_.speed>2.2&&(P.carImmune||0)<=0&&g(P,_);let L=F-Math.abs(A),Z=W-Math.abs(D);L<Z?P.x=_.x+Math.sign(A||1)*F:P.z=_.z+Math.sign(D||1)*W}}((_.special?(_.z-d)*_.dir>70:Math.abs(_.z-d)>170)||_.z<-Ie.len-4||_.z>Ie.startZ+4)&&(n.remove(_.group),t.splice(m,1))}}let u=h=>h.type;return{list:t,spawn:s,update:c,clear:r,keepParked:o,callDozer:l,addParked:a}}var oh=[{h:0,bg:"#151b2e",sky:"#5a6ca6",ground:"#2a2622",hemi:.55,sun:.22,sunCol:"#9fb4ff",night:1},{h:4.5,bg:"#1a1f33",sky:"#5a6ca6",ground:"#2a2622",hemi:.58,sun:.22,sunCol:"#9fb4ff",night:1},{h:6,bg:"#e2a985",sky:"#ffd2b0",ground:"#5c4a3e",hemi:.95,sun:.9,sunCol:"#ffb27a",night:.3},{h:8,bg:"#d8cfbf",sky:"#fff4e0",ground:"#6b6255",hemi:1.55,sun:2.1,sunCol:"#ffe2b8",night:0},{h:16,bg:"#d8cfbf",sky:"#fff4e0",ground:"#6b6255",hemi:1.55,sun:2.1,sunCol:"#ffe2b8",night:0},{h:17.6,bg:"#e8996a",sky:"#ffc49a",ground:"#6b5040",hemi:1.05,sun:1.3,sunCol:"#ff9a4d",night:.15},{h:19,bg:"#3b3c60",sky:"#7a7fb8",ground:"#2e2a28",hemi:.55,sun:.28,sunCol:"#8a95ff",night:.85},{h:20.5,bg:"#151b2e",sky:"#5a6ca6",ground:"#2a2622",hemi:.55,sun:.22,sunCol:"#9fb4ff",night:1},{h:24,bg:"#151b2e",sky:"#5a6ca6",ground:"#2a2622",hemi:.55,sun:.22,sunCol:"#9fb4ff",night:1}],j_=new ke("#7d848c"),Q_=1/8,ey=new ke,ty=new ke;function ml(n,e,t,i){return n.copy(ey.set(e)).lerp(ty.set(t),i)}function rf(n,e,t,i){let s=new ke,r=new ke,a=new ke,o=new ke,l=new ke("#3a3833"),c=new ke("#fff1b8"),u=[];for(let M=0;M<4;M++){let E=new Ir("#ffc978",0,22,1.2);E.position.set(0,-50,0),n.add(E),u.push(E)}let h=1500,d=new Float32Array(h*3),f=new Float32Array(h*6);for(let M=0;M<h;M++)d[M*3]=le(-26,26),d[M*3+1]=le(0,18),d[M*3+2]=le(-45,12);let g=new Bt;g.setAttribute("position",new _n(f,3));let v=new Ni({color:"#cfdbe8",transparent:!0,opacity:0,depthWrite:!1}),p=new Qi(g,v);p.frustumCulled=!1,p.visible=!1,n.add(p);let m=new Tr({color:"#53606b",specular:"#c9d6e3",shininess:80,transparent:!0,opacity:0,depthWrite:!1}),_=new kn(1,32);_.rotateX(-Math.PI/2);let T=[];for(let M=Ie.startZ-30;M>-Ie.len+20;M-=le(38,60)){let E=Math.random()<.75,x=E?le(-9.5,9.5):(Math.random()<.5?-1:1)*le(13,15.5),S=E?le(3,5.5):le(1.6,2.6),P=le(4,9),A=new fe(_,m);A.position.set(x,E?.04:Ie.curbY+.03,M),A.scale.set(.01,1,.01),A.renderOrder=1,A.visible=!1,n.add(A),T.push({x,z:M,sx:S,sz:P,m:A})}let y={hour:15.5,rain:0,rainOn:!1,rainT:55,water:0,flash:0,thunderT:8,shedT:0,shedCheck:0,sheds:0,rains:0,maxWater:0,reset(){y.hour=14+Math.random()*3,y.rain=0,y.rainOn=!1,y.rainT=le(45,70),y.water=0,y.shedT=0,y.sheds=0,y.rains=0,y.maxWater=0},isNight(){return y.nightK>.5},nightK:0,clockText(){let M=Math.floor(y.hour),E=Math.floor((y.hour-M)*60/10)*10,x=M%12===0?12:M%12;return`${M<5?"\u09B0\u09BE\u09A4":M<12?"\u09B8\u0995\u09BE\u09B2":M<15?"\u09A6\u09C1\u09AA\u09C1\u09B0":M<18?"\u09AC\u09BF\u0995\u09C7\u09B2":M<20?"\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE":"\u09B0\u09BE\u09A4"} ${de(x)}:${de(String(E).padStart(2,"0"))}`},label(){let M=y.shedT>0?"\u{1F56F}\uFE0F":y.rain>.3?"\u{1F327}\uFE0F":y.nightK>.5?"\u{1F319}":y.hour<17.5?"\u2600\uFE0F":"\u{1F307}",E="";return y.shedT>0?E=" \xB7 \u09B2\u09CB\u09A1\u09B6\u09C7\u09A1\u09BF\u0982":y.water>.55?E=" \xB7 \u09B9\u09BE\u0981\u099F\u09C1\u09AA\u09BE\u09A8\u09BF":y.rain>.3&&(E=" \xB7 \u09AC\u09C3\u09B7\u09CD\u099F\u09BF"),`${M} ${y.clockText()}${E}`},waterAt(M,E){if(y.water<.25)return 0;for(let x of T){let S=(E-x.z)/(x.sz*y.water);if(S>1||S<-1)continue;let P=(M-x.x)/(x.sx*y.water);if(P*P+S*S<1)return y.water}return 0},update(M,E,x){y.hour=(y.hour+M*Q_)%24;let S=0;for(;oh[S+1].h<=y.hour;)S++;let P=oh[S],A=oh[S+1],D=(y.hour-P.h)/(A.h-P.h),F=y.rain;ml(s,P.bg,A.bg,D).lerp(j_,F*.55*(1-y.nightK*.7)),ml(r,P.sky,A.sky,D),ml(a,P.ground,A.ground,D),ml(o,P.sunCol,A.sunCol,D);let W=P.night+(A.night-P.night)*D;y.nightK=W;let L=(P.hemi+(A.hemi-P.hemi)*D)*(1-F*.25),Z=(P.sun+(A.sun-P.sun)*D)*(1-F*.6);y.flash=Math.max(0,y.flash-M*3),n.background.copy(s),n.fog.color.copy(s),n.fog.near=70-F*40-W*25,n.fog.far=270-F*120-W*90,e.hemi.color.copy(r),e.hemi.groundColor.copy(a),e.hemi.intensity=L+y.flash*2.5,e.sun.color.copy(o),e.sun.intensity=Z;let Q=(y.hour-6)/12*Math.PI,Y=Math.sin(Q);Y>.05?e.sunDir.set(-Math.cos(Q)*.8,Math.max(.35,Y),.45).normalize():e.sunDir.set(.4,1,.3).normalize(),y.shedT>0&&(y.shedT-=M,y.shedT<=0&&i("power"));let se=y.shedT>0?0:W;e.lampMat.color.copy(l).lerp(c,se),e.poolMat.opacity=se*.32;for(let ee of e.glow)ee.emissive.setScalar(se*.75);let K=e.lamps.filter(ee=>Math.abs(ee.z-E.z)<45).sort((ee,ge)=>Math.abs(ee.z-E.z)-Math.abs(ge.z-E.z));for(let ee=0;ee<u.length;ee++){let ge=u[ee],Ue=K[ee];Ue&&se>.02?(ge.position.set(Ue.x,7.6,Ue.z),ge.intensity=se*7):ge.intensity=0}x&&(y.rainT-=M,y.rainT<=0&&(y.rainOn?(y.rainOn=!1,y.rainT=le(45,85),i("rainStop")):Math.random()<.6?(y.rainOn=!0,y.rainT=le(35,60),y.rains++,i("rain")):y.rainT=le(25,45)),W>.8&&(y.shedCheck-=M,y.shedCheck<=0&&(y.shedCheck=14,y.shedT<=0&&Math.random()<.22&&(y.shedT=9,y.sheds++,i("shed"))))),y.rain=Dt(y.rain+(y.rainOn?.25:-.2)*M,0,1);let ne=y.water;if(y.water=Dt(y.water+(y.rain>.5?.045:-.022)*M,0,1),ne<.55&&y.water>=.55&&i("flood"),y.maxWater=Math.max(y.maxWater,y.water),y.rain>.6&&x&&(y.thunderT-=M,y.thunderT<=0&&(y.thunderT=le(7,16),y.flash=1,t.thunder())),t.setRain(y.rain),p.visible=y.rain>.02,v.opacity=y.rain*.55,p.visible){let ee=M*24;for(let ge=0;ge<h;ge++){let Ue=d[ge*3+1]-ee;Ue<0&&(Ue+=18),d[ge*3+1]=Ue;let te=E.x+d[ge*3],_e=E.z+d[ge*3+2],we=ge*6;f[we]=te,f[we+1]=Ue,f[we+2]=_e,f[we+3]=te+.04,f[we+4]=Ue+.7,f[we+5]=_e+.12}g.attributes.position.needsUpdate=!0}m.opacity=Math.min(.85,y.water*1.3);for(let ee of T){let ge=y.water>.02&&Math.abs(ee.z-E.z)<120;ee.m.visible=ge,ge&&ee.m.scale.set(ee.sx*y.water,1,ee.sz*y.water)}}};return y}var ny=1,af=4;function lh(n,e){let t=Qr(e);return n.scene.add(t.group),{id:ny++,model:t,x:0,z:0,y:0,face:0,kx:0,kz:0,state:"idle",st:0,anim:{mode:"idle",t:0,move:0,phase:0,guard:!1},radius:.42,inv:0,carImmune:0}}function Ge(n,e){n.state=e,n.st=0}var Xn=n=>Math.sin(n.face),$n=n=>Math.cos(n.face),na=(n,e,t)=>Math.atan2(e-n.x,t-n.z);function Rt(n,e,t={}){n.log.push({t:n.stats.time,wave:n.wave,k:e,...t})}function ia(n,e,t){let i=null,s=16;for(let r of n.world.shops){let a=Math.hypot(r.x-e,r.z-t);a<s&&(s=a,i=r.name)}return i}function ch(n,e,t){e.x+=e.kx*t,e.z+=e.kz*t;let i=Math.exp(-6*t);e.kx*=i,e.kz*=i,nh(n.world,e,e.radius),e.y+=(Si(e.x)-e.y)*Math.min(1,t*20);let s=e.model.group;s.position.set(e.x,e.y,e.z),s.rotation.y=e.face}function cf(n){for(let e=0;e<n.length;e++){let t=n[e];if(!t.ghost)for(let i=e+1;i<n.length;i++){let s=n[i];if(s.ghost)continue;let r=s.x-t.x,a=s.z-t.z,o=t.radius+s.radius,l=r*r+a*a;if(l<o*o&&l>1e-6){let c=Math.sqrt(l),u=(o-c)*.5,h=t.heavy?.25:s.heavy?.75:.5;t.x-=r/c*u*2*h,t.z-=a/c*u*2*h,s.x+=r/c*u*2*(1-h),s.z+=a/c*u*2*(1-h)}}}}function hf(n,e){let t=lh(n,e.look);return Object.assign(t,{isPlayer:!0,hero:e,hp:e.hp,maxHp:e.hp,sandals:Mi.sandals,special:0,move:null,queued:!1,hitSet:new Set,dodgeX:0,dodgeZ:0,sipping:!1,weapon:null,riding:null,useCd:0,swingUsed:!1,spinTick:0}),t.x=-14.5,t.z=-6,t.face=Math.PI,Ge(t,"free"),t}function uf(n,e,t){if(e.hero===t)return;let i=e.model.group.visible;n.scene.remove(e.model.group),e.model=Qr(t.look),e.model.group.visible=i,n.scene.add(e.model.group),e.hero=t,e.maxHp=t.hp}function ta(n,e,t,i=Math.PI){let s=null,r=t;for(let a of n.foes){if(a.state==="ko"||a.state==="down")continue;let o=a.x-e.x,l=a.z-e.z,c=Math.hypot(o,l);c>r||Math.abs(df(Math.atan2(o,l),e.face))>i||(r=c,s=a)}return s}function df(n,e){let t=n-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function gl(n,e,t){n.stats.swings++;let i=ta(n,e,3.4,1.9);i&&(e.face=na(e,i.x,i.z)),e.move=t,e.queued=!1,e.swingUsed=!1,e.hitSet.clear(),Ge(e,"attack"),n.audio.swing()}function of(n,e,t){let i=null,s=t;for(let r of n.traffic.list){if(!r.parked||r.rider)continue;let a=Math.hypot(r.x-e.x,r.z-e.z);a<s&&(s=a,i=r)}return i}var iy=n=>n==="rickshaw"?"\u09B0\u09BF\u0995\u09B6\u09BE\u09AF\u09BC \u0989\u09A0\u09C1\u09A8":"\u09B8\u09BF\u098F\u09A8\u099C\u09BF\u09A4\u09C7 \u0989\u09A0\u09C1\u09A8";function ff(n,e,t,i,s){e.st+=t,e.inv-=t,e.carImmune-=t,e.useCd-=t;let r=e.anim;r.t+=t;let a=f=>s.includes(f);if(e.riding){dy(n,e,t,i,s);return}let o="idle",l=0,c=ta(n,e,7);r.guard=!!c;let u=e.hero,h=n.weather.waterAt(e.x,e.z);h>0&&e.state!=="dead"&&(n.stats.wade+=t,(i.x||i.y)&&Math.random()<t*3&&n.audio.splash());let d=1-h*.45;if(e.state==="dead")o="ko";else if(e.state==="free"){let f=u.speed*d;if(i.x||i.y){let g=i.x*f,v=i.y*f;e.x+=g*t,e.z+=v*t,e.face=Vt(e.face,Math.atan2(g,v),1-Math.exp(-16*t)),l=Math.hypot(i.x,i.y),r.phase+=f*l*t*2.1,o="walk"}else o=e.sipping?"sip":"idle";if(a("punch"))gl(n,e,"punch1");else if(a("kick"))gl(n,e,"kick");else if(a("dodge"))lf(n,e,i);else if(a("use")){let g=of(n,e,3);g?uy(n,e,g):n.hud.toast("\u0995\u09BE\u099B\u09C7 \u0995\u09CB\u09A8\u09CB \u09B0\u09BF\u0995\u09B6\u09BE \u09AC\u09BE \u09B8\u09BF\u098F\u09A8\u099C\u09BF \u09A8\u09C7\u0987","warn")}else a("throw")?e.sandals>0?(Ge(e,"throw"),e.thrown=!1):n.hud.toast("\u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7\u09B2 \u09B6\u09C7\u09B7! \u09A8\u09C0\u09B2 \u09A6\u09BE\u0997\u09C7\u09B0 \u099C\u09C1\u09A4\u09BE\u09B0 \u09A6\u09CB\u0995\u09BE\u09A8\u09C7 \u09AF\u09BE\u09A8","warn"):a("special")&&(e.special>=1?sy(n,e):n.hud.toast(`${u.special.name} \u098F\u0996\u09A8\u09CB \u09AD\u09B0\u09C7\u09A8\u09BF`,"warn"));if(e.state==="free"&&!c){let g=of(n,e,3);g&&n.hud.hint(`G \u099A\u09BE\u09AA\u09C1\u09A8: ${iy(g.type)}`)}}else if(e.state==="attack"){let f=Nd[e.move],g=e.st;o=e.move==="kick"?"kick":e.move==="punch3"?"uppercut":f.arm==="R"?"punchR":"punchL",g>f.from-.06&&g<f.to&&(ta(n,e,1,.8)||(e.x+=Xn(e)*2.6*t,e.z+=$n(e)*2.6*t)),g>=f.from&&g<=f.to&&ry(n,e,f),a("punch")&&e.move!=="kick"&&e.move!=="punch3"&&g>.06&&(e.queued=!0),a("dodge")&&g>f.to?lf(n,e,i):g>=f.dur&&(e.queued&&e.move==="punch1"?gl(n,e,"punch2"):e.queued&&e.move==="punch2"?gl(n,e,"punch3"):Ge(e,"free"))}else if(e.state==="dodge"){o="dodge";let f=1-e.st/.42*.55;e.x+=e.dodgeX*Mi.dodgeSpeed*f*d*t,e.z+=e.dodgeZ*Mi.dodgeSpeed*f*d*t,e.st>=.42&&Ge(e,"free")}else if(e.state==="hit")o="hit",e.st>=.3&&Ge(e,"free");else if(e.state==="down")o="down",e.st>=1&&(Ge(e,"getup"),e.inv=1);else if(e.state==="getup")o="getup",e.st>=.55&&Ge(e,"free");else if(e.state==="throw"){if(o=e.st<.13?"throwUp":"throw",!e.thrown&&e.st>=.13){e.thrown=!0;let f=ta(n,e,22,1.2);f&&(e.face=na(e,f.x,f.z)),My(n,e,f)}e.st>=.34&&Ge(e,"free")}else if(e.state==="special")o="fist",!e.blasted&&e.st>=.3&&(e.blasted=!0,u.special.id==="kan"?Ey(n,e):wy(n,e)),e.st>=.95&&Ge(e,"free");else if(e.state==="bell"){o="walk",l=1.6,r.phase+=t*26,(i.x||i.y)&&(e.face=Vt(e.face,Math.atan2(i.x,i.y),1-Math.exp(-3*t)));let f=15*(1-e.st*.4);e.x+=Xn(e)*f*t,e.z+=$n(e)*f*t;for(let g of n.foes){if(g.state==="ko"||e.hitSet.has(g.id))continue;let v=g.x-e.x,p=g.z-e.z;if(Math.hypot(v,p)<1.8){e.hitSet.add(g.id);let _=Math.sign(v*$n(e)-p*Xn(e))||1;wi(n,g,(g.boss?30:34)*u.dmg,{knock:!0,special:!0,dirX:Xn(e)*.6+$n(e)*_*.8,dirZ:$n(e)*.6-Xn(e)*_*.8,word:"\u0995\u09CD\u09B0\u09BF\u0982-\u09A7\u09BE\u09AE!"})}}e.st>=.95&&Ge(e,"free")}else if(e.state==="spin"){o="spin",e.face+=t*17;let f=u.speed*.6*d;if(e.x+=i.x*f*t,e.z+=i.y*f*t,e.spinTick-=t,e.spinTick<=0){e.spinTick=.2,n.audio.swing();let g=e.st>2.75;for(let v of n.foes){if(v.state==="ko"||v.state==="down")continue;let p=v.x-e.x,m=v.z-e.z,_=Math.hypot(p,m);_<2.6&&wi(n,v,6*u.dmg,{knock:g,special:g,dirX:p/(_||1),dirZ:m/(_||1),word:Te(["\u099B\u09BE\u09A4\u09BE\u09AA\u09C7\u099F\u09BE!","\u0998\u09C1\u09B0\u09C7 \u0998\u09C1\u09B0\u09C7 \u09A0\u09BE\u09B8!","\u0996\u09BE\u09B2\u09BE\u09AE\u09CD\u09AE\u09BE \u09B8\u09CD\u099F\u09BE\u0987\u09B2!"]),stun:.25})}}e.st>=3&&Ge(e,"free")}if(e.sipping=!1,e.state!=="dead"){for(let f of n.world.teaStalls)Math.hypot(e.x-f.x,e.z-f.z)<2.6&&(e.hp<e.maxHp?(e.hp=Math.min(e.maxHp,e.hp+20*t),e.sipping=!l&&e.state==="free",n.teaT=(n.teaT||0)-t,n.teaT<=0&&(n.audio.sip(),n.teaT=.8),n.stats.tea+=t,n.hud.hint(n.weather.rain>.3?"\u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09A4\u09C7 \u0997\u09B0\u09AE \u099A\u09BE... \u09A6\u09AE \u09AB\u09BF\u09B0\u099B\u09C7 \u2615":"\u099A\u09BE \u0996\u09BE\u099A\u09CD\u099B\u09C7\u09A8... \u09A6\u09AE \u09AB\u09BF\u09B0\u099B\u09C7 \u2615")):n.hud.hint("\u09A6\u09AE \u09AA\u09C1\u09B0\u09CB! \u098F\u09AC\u09BE\u09B0 \u09AE\u09BE\u09A0\u09C7 \u09A8\u09BE\u09AE\u09C7\u09A8"));for(let f of n.world.sandalStalls)f.cooldown-=t,f.cooldown<=0&&e.sandals<Mi.maxSandals&&Math.hypot(e.x-f.x,e.z-f.z)<2.6&&(e.sandals=Mi.maxSandals,f.cooldown=25,n.audio.pickup(),n.hud.toast("\u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7\u09B2 \u09AD\u09B0\u09BE \u09B9\u09B2\u09CB! F \u099A\u09C7\u09AA\u09C7 \u099B\u09C1\u09A1\u09BC\u09C1\u09A8 \u{1FA74}","good"))}r.mode=o,r.move=l,cs(e.model,r,t),ch(n,e,t)}function lf(n,e,t){let i=t.x,s=t.y;!i&&!s&&(i=Xn(e),s=$n(e));let r=Math.hypot(i,s);e.dodgeX=i/r,e.dodgeZ=s/r,e.face=Math.atan2(i,s),e.inv=.36,Ge(e,"dodge"),n.stats.dodges++,n.audio.swing()}function sy(n,e){let t=e.hero.special.id;if(e.special=0,n.stats.powers++,Rt(n,"special",{id:t}),t==="bell"){let i=ta(n,e,14,1.6);i&&(e.face=na(e,i.x,i.z)),Ge(e,"bell"),e.hitSet.clear(),e.inv=1.1,n.audio.bell(),n.shake=.3,n.hud.banner("\u0995\u09CD\u09B0\u09BF\u0982-\u0995\u09CD\u09B0\u09BF\u0982 \u09A4\u09C1\u09AB\u09BE\u09A8!","\u09AA\u09A5 \u099B\u09BE\u09A1\u09BC\u09C7\u09A8, \u09B0\u09BF\u0995\u09B6\u09BE\u0993\u09AF\u09BC\u09BE\u09B2\u09BE \u0986\u09B8\u099B\u09C7!","power"),n.hud.pop("\u0995\u09CD\u09B0\u09BF\u0982 \u0995\u09CD\u09B0\u09BF\u0982!",e.x,e.y+2.2,e.z,"big")}else t==="spin"?(Ge(e,"spin"),e.spinTick=0,e.inv=3.1,n.audio.roar(),n.hud.banner("\u099B\u09BE\u09A4\u09BE \u0998\u09C2\u09B0\u09CD\u09A3\u09BF!","\u0996\u09BE\u09B2\u09BE\u09AE\u09CD\u09AE\u09BE\u09B0 \u099B\u09BE\u09A4\u09BE\u09B0 \u09B8\u09BE\u09AE\u09A8\u09C7 \u0995\u09C7\u0989 \u099F\u09BF\u0995\u09C7 \u09A8\u09BE","power")):(Ge(e,"special"),e.blasted=!1,e.inv=1)}function ry(n,e,t){let i=e.hero,s=e.weapon?qs[e.weapon.kind]:null,r=t.range*(1+(i.range-1)*.6)+(s?s.range:0),a=t.dmg*i.dmg*(s?s.dmg:1),o=!1;for(let l of n.foes){if(e.hitSet.has(l.id)||l.state==="ko"||l.state==="down"||l.state==="getup")continue;let c=l.x-e.x,u=l.z-e.z,h=Math.hypot(c,u);if(h>r+l.radius*.5)continue;let d=(c*Xn(e)+u*$n(e))/(h||1);if(h>.9&&d<.35)continue;e.hitSet.add(l.id),o=!0;let f=s&&(t.knock||Math.random()<.45)?s.word:t.word;wi(n,l,a,{knock:t.knock,dirX:c/(h||1),dirZ:u/(h||1),word:f,weapon:s?e.weapon.kind:null})}o&&s&&!e.swingUsed&&(e.swingUsed=!0,e.weapon.uses--,e.weapon.uses<=0&&(n.hud.toast(`${s.name} \u09AD\u09C7\u0999\u09C7 \u0997\u09C7\u09B2! \u0986\u09AC\u09BE\u09B0 \u0996\u09BE\u09B2\u09BF \u09B9\u09BE\u09A4\u09C7`,"warn"),n.hud.pop("\u09AE\u099F!",e.x,e.y+2,e.z,"hurt"),Rt(n,"weaponBreak",{kind:e.weapon.kind}),e.weapon=null,ri(e.model,e.model.defaultHeld)))}function ay(n){return n.ride?"ride":n.vehicle?n.dozer?"dozer":"traffic":n.sandal?"sandal":n.follower?"follower":n.special?"special":n.weapon?n.weapon:"fist"}function wi(n,e,t,i){if(e.state==="ko")return;e.kanT>0&&(t*=2),e.hp-=t,e.hurtFlash=.12;let s=n.player.hero.charge;if(n.player.special=Math.min(1,n.player.special+(i.follower?.015:.05)*s),i.follower||(n.combo++,n.stats.maxCombo=Math.max(n.stats.maxCombo,n.combo),n.comboT=2.2,n.hitstop=Math.max(n.hitstop,i.knock?.085:.045),n.shake=Math.max(n.shake,i.knock?.28:.14)),n.audio.punch(i.knock),i.word&&n.hud.pop(i.word,e.x,e.y+e.model.height*.85,e.z,i.knock?"big":""),cy(n,e.x,e.z,14),Zs(n,e),e.hp<=0)return ly(n,e,i);if(e.state==="kan"&&!i.knock){e.kx+=(i.dirX||0)*1.5,e.kz+=(i.dirZ||0)*1.5;return}e.state==="tonic"&&(e.say="\u099F\u09A8\u09BF\u0995 \u09AA\u09A1\u09BC\u09C7 \u0997\u09C7\u09B2!",n.stats.tonicsBroken++);let r=i.knock?7.5:2.6;if(e.boss){e.poise-=t,e.kx+=i.dirX*r*.4,e.kz+=i.dirZ*r*.4,e.poise<=0||i.special?(e.poise=45,e.kx=i.dirX*6,e.kz=i.dirZ*6,Ge(e,"down"),n.audio.thud()):e.state!=="windup"&&e.state!=="slamWind"&&Ge(e,"hit");return}e.kx=i.dirX*r,e.kz=i.dirZ*r,i.knock?(Ge(e,"down"),n.audio.thud()):(Ge(e,"hit"),e.stun=i.stun||.34)}function oy(n,e,t){for(let i of n.civilians)i.follower||i.mode==="escortee"||i.mode==="down"||Math.hypot(i.x-e,i.z-t)<20&&i.mode!=="cower"&&(i.mode="cheer",i.st=le(-.4,0))}function ly(n,e,t){if(Ge(e,"ko"),e.kx=(t.dirX||0)*8,e.kz=(t.dirZ||0)*8,e.ghost=!0,e.key==="copy"){n.stats.copiesTorn++,n.audio.throwS(),n.hud.pop("\u099B\u09C7\u0981\u09A1\u09BC\u09BE \u09AB\u099F\u09CB\u0995\u09AA\u09BF!",e.x,e.y+2,e.z,"ko"),e.st=3.1;return}let i=ay(t);if(n.kos++,n.stats.kosBy[e.key]=(n.stats.kosBy[e.key]||0)+1,n.stats.method[i]=(n.stats.method[i]||0)+1,t.vehicle&&n.stats.busKOs++,t.sandal&&n.stats.sandalKOs++,e.kanT>0&&n.stats.kanKOs++,Rt(n,"ko",{key:e.key,nick:e.nick,method:i,boss:e.boss,loot:e.loot,place:ia(n,e.x,e.z),hour:n.weather.hour,rain:n.weather.rain>.3}),n.player.special=Math.min(1,n.player.special+.14*n.player.hero.charge),n.audio.thud(),n.audio.cheer(e.boss),n.hitstop=Math.max(n.hitstop,e.boss?.25:.1),n.shake=Math.max(n.shake,e.boss?.6:.3),n.hud.pop(e.boss?`${e.nick} \u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0!`:"\u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0!",e.x,e.y+2.2,e.z,"ko"),n.hud.event(e,"ko"),e.loot>0&&Py(n,e),e.key==="mastan"&&e.model.heldKind==="stick"&&Math.random()<.5&&(ri(e.model,null),Mf(n,"stick",e.x+(t.dirX||0)*.8,e.z+(t.dirZ||0)*.8)),e.victim){let s=e.victim;e.victim=null,s.bubble=Te(["\u09A7\u09A8\u09CD\u09AF\u09AC\u09BE\u09A6 \u09AD\u09BE\u0987!","\u09AC\u09BE\u0981\u099A\u09BE\u09B2\u09C7\u09A8!","\u099C\u09A8\u09A4\u09BE\u09B0 \u099C\u09AF\u09BC!"]),_l(n,s,"shop",e)}e.payers&&(e.payers.forEach((s,r)=>{s.fixed=!1,s.payer=!1,r===0?_l(n,s,"ghush",e):(s.mode="cheer",s.st=0,s.lane=Math.sign(s.x)*le(14,17.5))}),e.payers[0].bubble="\u0986\u09B0 \u0998\u09C1\u09B7 \u09A6\u09BF\u09A4\u09C7 \u09B9\u09AC\u09C7 \u09A8\u09BE!"),n.onFoeKo&&n.onFoeKo(e,i),oy(n,e.x,e.z)}function _l(n,e,t,i){if(!e.follower){if(e.follower=!0,e.fixed=!1,e.payer=!1,e.mode="follow",e.st=0,e.atk=le(.4,1),!e.name){let s=new Set(n.civilians.map(r=>r.name));e.name=Te(ul.filter(r=>!s.has(r)))||Te(ul)}if(n.followers.push(e),n.stats.followers++,Rt(n,"recruit",{name:e.name,reason:t,from:i?i.nick:null}),n.hud.toast(`${e.name} \u0986\u09AA\u09A8\u09BE\u09B0 \u09A6\u09B2\u09C7 \u09AF\u09CB\u0997 \u09A6\u09BF\u09B2\u09C7\u09A8! (${n.followers.length}/${af})`,"good"),n.followers.length>af){let s=n.followers.shift();s.follower=!1,s.mode="walk",s.lane=Math.sign(s.x||1)*le(14,17.5),s.bubble="\u09AD\u09BE\u0987, \u0986\u09AE\u09BF \u098F\u09AC\u09BE\u09B0 \u09AC\u09BE\u09B8\u09BE\u09AF\u09BC \u09AF\u09BE\u0987!"}}}function pf(n){for(let e of n.followers)e.follower=!1,e.mode="walk",e.lane=(Math.random()<.5?-1:1)*le(14.2,17.6),e.x=e.lane;n.followers.length=0}function cy(n,e,t,i){for(let s of n.foes)(s.state==="busy"||s.state==="goto"||s.state==="escort")&&Math.hypot(s.x-e,s.z-t)<i&&(Ge(s,"alert"),s.say=Te(s.type.lines))}function Zs(n,e){e.token&&(e.token=!1,n.tokens--)}function mf(n,e,t,i,s){let r=n.player;r.riding&&hs(n,r,!1),r.hp=0,Ge(r,"dead"),r.kx=e*6,r.kz=t*6,n.stats.cause=i,n.stats.killer=s,n.stats.deathHour=n.weather.hour,n.stats.deathRain=n.weather.rain>.3,n.stats.deathPlace=ia(n,r.x,r.z),n.onPlayerDown()}function Gi(n,e,t,i,s,r,a="mastan",o=null){let l=n.player;if(l.state==="dead"||l.inv>0)return!1;if(l.hp-=e,n.stats.hitsTaken++,n.audio.hurt(),n.shake=Math.max(n.shake,s?.55:.32),n.hud.flash(),n.combo=0,r&&n.hud.pop(r,l.x,l.y+1.9,l.z,"hurt"),l.hp<=0)return mf(n,t,i,a,o),!0;if(l.riding){if(!s&&e<14)return l.inv=.3,!0;hs(n,l,!0)}return s?(Ge(l,"down"),l.kx=t*7,l.kz=i*7,l.inv=1.6):(Ge(l,"hit"),l.kx=t*3.5,l.kz=i*3.5,l.inv=.3),!0}function hy(n,e,t,i){let s=n.player;s.state!=="dead"&&(s.hp-=e,s.hp<=0&&mf(n,0,0,t,i))}function uy(n,e,t){e.riding=t,t.rider=e,t.parked=!1,t.speed=0,t.hp=100,t.heading=t.group.rotation.y,t.hornCd=0,ri(e.model,null),Ge(e,"ride"),n.stats.rides++,Rt(n,"ride",{type:t.type}),n.audio.pickup();let i=e.hero.id==="rickshaw"&&t.type==="rickshaw";n.hud.toast(i?"\u09A8\u09BF\u099C\u09C7\u09B0 \u09B0\u09BF\u0995\u09B6\u09BE \u09AA\u09C7\u09AF\u09BC\u09C7 \u0997\u09C7\u09B2\u09C7\u09A8! \u09AA\u09C7\u09B6\u09BE\u09A6\u09BE\u09B0 \u0997\u09A4\u09BF \u{1F6FA}":`${rh[t.type].name} \u099A\u09BE\u09B2\u09BE\u099A\u09CD\u099B\u09C7\u09A8! J: \u09B9\u09B0\u09CD\u09A8 \xB7 G: \u09A8\u09BE\u09AE\u09C1\u09A8`,"good")}function hs(n,e,t){let i=e.riding;if(!i)return;i.rider=null,i.parked=!0,i.speed=0,e.riding=null;let s=i.heading,r=i.x>0?-1:1;if(e.x=i.x+Math.cos(s)*1.6*r,e.z=i.z-Math.sin(s)*1.6*r,e.y=Si(e.x),e.face=s,ri(e.model,e.weapon?e.weapon.kind:e.model.defaultHeld),t?(Ge(e,"down"),e.inv=1.6,e.kx=Math.cos(s)*r*6,e.kz=-Math.sin(s)*r*6):Ge(e,"free"),i.hp<=0){n.scene.remove(i.group);let a=n.traffic.list.indexOf(i);a>=0&&n.traffic.list.splice(a,1)}}function dy(n,e,t,i,s){let r=e.riding,a=rh[r.type],o=e.hero.id==="rickshaw"&&r.type==="rickshaw",l=M=>s.includes(M),c=e.anim;if(r.hornCd-=t,l("use")||l("dodge")){hs(n,e,!1);return}let u=n.weather.waterAt(r.x,r.z);u>.5&&r.type==="cng"&&r.speed>2&&(r.stalled||0)<=-3&&(r.stalled=2.2,n.hud.toast("\u09B8\u09BF\u098F\u09A8\u099C\u09BF\u09B0 \u0987\u099E\u09CD\u099C\u09BF\u09A8\u09C7 \u09AA\u09BE\u09A8\u09BF! \u09AC\u09A8\u09CD\u09A7 \u09B9\u09AF\u09BC\u09C7 \u0997\u09C7\u09B2 \u{1F4A6}","warn"),n.stats.stalls++,n.audio.splash()),r.stalled=(r.stalled??-3)-t;let h=a.max*(o?1.35:1)*(1-u*(r.type==="cng"?.6:.25))*(r.stalled>0?0:1),d=Math.hypot(i.x,i.y),f=0;if(d>.15){let M=Math.atan2(i.x,i.y),E=a.turn*t*(.5+Math.min(1,Math.abs(r.speed)/4)),x=df(M,r.heading);r.heading+=Dt(x,-E,E),f=h*d*(Math.abs(x)>2.2?.3:1)}let g=f>r.speed?a.accel:a.accel*1.8;r.speed+=Math.sign(f-r.speed)*Math.min(Math.abs(f-r.speed),g*t);let v=Math.sin(r.heading),p=Math.cos(r.heading);r.x+=v*r.speed*t,r.z+=p*r.speed*t;let m=r.x,_=r.z;nh(n.world,r,1),r.x=Dt(r.x,-17.4,17.4),Math.hypot(r.x-m,r.z-_)>.02&&(r.speed*=.92),u>0&&r.speed>2&&Math.random()<t*4&&n.audio.splash();for(let M of n.traffic.list){if(M===r)continue;let E=M.T.w/2+.85,x=M.T.len/2+.85,S=r.x-M.x,P=r.z-M.z;if(Math.abs(S)>=E||Math.abs(P)>=x)continue;if(M.T.danger&&!M.parked&&M.speed>3){n.stats.wrecks++,Rt(n,"wreck",{type:r.type,by:M.type}),r.hp=0,n.audio.crash(),n.hud.toast(`${M.type==="dozer"?"\u09AC\u09C1\u09B2\u09A1\u09CB\u099C\u09BE\u09B0":M.type==="bus"?"\u09AC\u09BE\u09B8":"\u099F\u09CD\u09B0\u09BE\u0995"} ${a.name} \u099A\u09CD\u09AF\u09BE\u09AA\u09CD\u099F\u09BE \u0995\u09B0\u09C7 \u09A6\u09BF\u09B2!`,"warn"),Gi(n,26*n.dmgScale,Math.sign(S)||1,M.dir,!0,M.type==="bus"?"\u09AC\u09BE\u09B8\u09C7\u09B0 \u09A7\u09BE\u0995\u09CD\u0995\u09BE!":"\u09A7\u09BE\u0995\u09CD\u0995\u09BE!",M.type),e.riding&&hs(n,e,!0);return}let A=E-Math.abs(S),D=x-Math.abs(P);A<D?r.x=M.x+Math.sign(S||1)*E:r.z=M.z+Math.sign(P||1)*x,Math.abs(r.speed)>4&&(n.audio.crash(),r.hp-=8,n.shake=.3),r.speed*=.3}if(l("punch")&&r.hornCd<=0){r.hornCd=1.4,r.type==="rickshaw"?n.audio.bell():n.audio.horn("cng"),n.hud.pop(a.horn,e.x,e.y+2.4,e.z,"big");for(let M of n.foes){if(M.state==="ko"||M.boss)continue;let E=M.x-r.x,x=M.z-r.z,S=Math.hypot(E,x);S<7.5&&(E*v+x*p)/(S||1)>.2&&(Zs(n,M),Ge(M,"hit"),M.stun=1.1,M.kx=E/(S||1)*3,M.kz=x/(S||1)*3,M.say=Te(["\u0989\u09AB, \u0995\u09BE\u09A8 \u0997\u09C7\u09B2!","\u09B9\u09B0\u09CD\u09A8 \u0986\u09B8\u09CD\u09A4\u09C7!","\u09B8\u09B0 \u09B8\u09B0!"]))}for(let M of n.civilians)!M.follower&&Math.hypot(M.x-r.x,M.z-r.z)<6&&Math.random()<.4&&(M.bubble=Te(["\u09B9\u09B0\u09CD\u09A8 \u09AC\u09BE\u099C\u09BE\u09A8 \u0995\u09C7\u09A8!","\u0986\u09B8\u09CD\u09A4\u09C7 \u09AD\u09BE\u0987!","\u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u0995\u09BF \u0986\u09AA\u09A8\u09BE\u09B0 \u09AC\u09BE\u09AA\u09C7\u09B0?"]))}if(Math.abs(r.speed)>3.2){for(let M of n.foes){if(M.state==="ko"||M.state==="down")continue;M.rammedT=(M.rammedT||0)-t;let E=M.x-r.x,x=M.z-r.z;Math.hypot(E,x)>1.55||M.rammedT>0||(M.rammedT=.9,n.stats.rams++,o||(r.hp-=5),wi(n,M,(10+Math.abs(r.speed)*2)*(M.boss?.6:1),{knock:Math.abs(r.speed)>5.5,vehicle:!0,ride:!0,dirX:v,dirZ:p,word:Te(r.type==="rickshaw"?["\u09B0\u09BF\u0995\u09B6\u09BE-\u09A7\u09BE\u0995\u09CD\u0995\u09BE!","\u0995\u09CD\u09B0\u09BF\u0982-\u09A7\u09A1\u09BC\u09BE\u09AE!","\u09B8\u09BE\u0987\u09A1 \u09AA\u09CD\u09B2\u09BF\u099C!"]:["\u09B8\u09BF\u098F\u09A8\u099C\u09BF-\u09A7\u09BE\u0995\u09CD\u0995\u09BE!","\u09AE\u09BF\u099F\u09BE\u09B0\u09C7 \u09AF\u09BE\u09AC\u09C7\u09A8?","\u09AD\u09CB\u0981-\u09A7\u09BE\u09AE!"])}))}for(let M of n.civilians){let E=M.x-r.x,x=M.z-r.z,S=Math.hypot(E,x);S<1.4&&S>.01&&(M.x=r.x+E/S*1.4,M.z=r.z+x/S*1.4,Math.random()<.05&&(M.bubble="\u099A\u09CB\u0996 \u0995\u0987 \u09B0\u09BE\u0996\u099B\u09C7\u09A8!"))}}if(r.hp<=0){n.hud.toast(`${a.name} \u09AD\u09C7\u0999\u09C7 \u0997\u09C7\u09B2! \u09B9\u09C7\u0981\u099F\u09C7\u0987 \u099A\u09B2\u09C7\u09A8`,"warn"),Rt(n,"wreck",{type:r.type,by:"ram"}),n.audio.crash(),hs(n,e,!1);return}r.group.position.set(r.x,0,r.z),r.group.rotation.y=r.heading;for(let M of r.wheels)M.rotation.x+=r.speed*t/.45;let T=r.type==="rickshaw"?.45:.75;e.x=r.x+v*T,e.z=r.z+p*T,e.face=r.heading,e.y=Si(r.x),c.mode="ride",cs(e.model,c,t);let y=e.model.group;y.position.set(e.x,r.type==="rickshaw"?.32:.22,e.z),y.rotation.y=e.face,n.hud.hint(`${a.name} \xB7 \u099F\u09C7\u0995\u09B8\u0987 ${Math.max(0,Math.round(r.hp))}% \xB7 J \u09B9\u09B0\u09CD\u09A8 \xB7 G \u09A8\u09BE\u09AE\u09C1\u09A8`),n.stats.rideDist+=Math.abs(r.speed)*t}var fy=new je(.16,.06,.36),py=new Fi(.17,1),my=new Ze({color:"#9c3d6e",flatShading:!0}),gy=new Er(.08,.16,3,8),xy=["#ff6b6b","#69db7c","#ffd43b"].map(n=>new Ze({color:n})),_y=new je(.42,.05,.3),yy=new Ze({color:"#f8f9fa"}),vy=["#e03131","#1c7ed6","#f59f00","#2f9e44"].map(n=>new Ze({color:n}));function My(n,e,t){e.sandals--,n.stats.sandals++,n.audio.throwS();let i=new fe(fy,Te(vy));n.scene.add(i);let s=e.x+Xn(e)*.5,r=e.z+$n(e)*.5;n.projectiles.push({kind:"sandal",mesh:i,x:s,y:e.y+1.4,z:r,vx:Xn(e)*24,vy:0,vz:$n(e)*24,life:1.1,target:t})}function by(n,e,t){let i=n.player,s=new fe(t==="pill"?gy:t==="paper"?_y:py,t==="pill"?Te(xy):t==="paper"?yy:my);n.scene.add(s);let r=e.x+Xn(e)*.4,a=e.z+$n(e)*.4,o=e.y+2.1,l=i.x-r,c=i.z-a,u=Math.hypot(l,c)||1;if(t==="paper")n.projectiles.push({kind:t,mesh:s,x:r,y:e.y+1.45,z:a,vx:l/u*15,vy:0,vz:c/u*15,life:1.5,g:0,who:e.nick});else{let h=Dt(u/13,.35,1.3),d=16,f=(i.y+1-o+.5*d*h*h)/h;n.projectiles.push({kind:t,mesh:s,x:r,y:o,z:a,vx:l/h,vy:f,vz:c/h,life:3,g:d,who:e.nick,src:e.key})}n.audio.throwS()}function gf(n,e){let t=n.player;for(let i=n.projectiles.length-1;i>=0;i--){let s=n.projectiles[i];s.life-=e;let r=s.life<=0;if(s.kind==="sandal"){let a=s.target;if(a&&a.state!=="ko"){let o=a.x-s.x,l=a.z-s.z,c=Math.hypot(o,l)||1,u=Math.hypot(s.vx,s.vz),h=Math.min(1,e*7);s.vx+=(o/c*u-s.vx)*h,s.vz+=(l/c*u-s.vz)*h}s.mesh.rotation.y+=e*22,s.mesh.rotation.x+=e*9;for(let o of n.foes)if(o.state!=="ko"&&Math.hypot(o.x-s.x,o.z-s.z)<.75){let l=Math.hypot(s.vx,s.vz)||1;n.stats.sandalHits++,wi(n,o,14,{knock:o.state==="windup",dirX:s.vx/l,dirZ:s.vz/l,word:"\u099A\u099F\u09BE\u09B6!",stun:.9,sandal:!0}),r=!0;break}}else{s.vy-=s.g*e,s.mesh.rotation.x+=e*8,s.kind==="paper"&&(s.mesh.rotation.y+=e*14);let a=s.kind==="paper"||s.y<t.y+2.1&&s.y>t.y+.2;if(t.state!=="dead"&&Math.hypot(t.x-s.x,t.z-s.z)<.8&&a){let o=Math.hypot(s.vx,s.vz)||1;s.kind==="onion"?Gi(n,6*n.dmgScale,s.vx/o,s.vz/o,!1,"\u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C!","onion",s.who)&&n.stats.onions++:s.kind==="pill"?Gi(n,7*n.dmgScale,s.vx/o,s.vz/o,!1,"\u09AD\u09C7\u099C\u09BE\u09B2 \u09AC\u09A1\u09BC\u09BF!","vejal",s.who)&&n.stats.pills++:Gi(n,4*n.dmgScale,s.vx/o,s.vz/o,!1,"\u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09AA\u09A4\u09CD\u09B0!","prosno",s.who)&&(n.stats.blinded++,n.hud.blind(2.3)),r=!0}s.y<Si(s.x)&&(r=!0,s.kind==="pill"&&Sy(n,s.x,s.z,s.who))}s.x+=s.vx*e,s.y+=s.vy*e,s.z+=s.vz*e,s.mesh.position.set(s.x,s.y,s.z),r&&(n.scene.remove(s.mesh),n.projectiles.splice(i,1))}}var xf=new kn(1,24);xf.rotateX(-Math.PI/2);function Sy(n,e,t,i){let s=new fe(xf,new Et({color:"#69db7c",transparent:!0,opacity:.6,depthWrite:!1}));s.position.set(e,Si(e)+.06,t),s.scale.setScalar(1.7),s.renderOrder=2,n.scene.add(s),n.hazards.push({x:e,z:t,r:1.7,t:6,mesh:s,who:i})}function _f(n,e){let t=n.player;for(let i=n.hazards.length-1;i>=0;i--){let s=n.hazards[i];s.t-=e,s.mesh.material.opacity=Math.min(1,s.t)*(.45+Math.sin(n.time*6+i)*.12),!t.riding&&t.state!=="dead"&&Math.hypot(t.x-s.x,t.z-s.z)<s.r&&(hy(n,9*e*n.dmgScale,"vejal",s.who),n.stats.poisoned+=e,n.hud.hint("\u09AD\u09C7\u099C\u09BE\u09B2 \u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u09AC\u09BF\u09B7! \u09B8\u09AC\u09C1\u099C \u09A6\u09BE\u0997 \u09A5\u09C7\u0995\u09C7 \u09B8\u09B0\u09C1\u09A8")),s.t<=0&&(n.scene.remove(s.mesh),s.mesh.material.dispose(),n.hazards.splice(i,1))}}function wy(n,e){n.audio.roar(),n.shake=.7,n.hitstop=.12,n.hud.banner("\u09B8\u09CD\u09B2\u09CB\u0997\u09BE\u09A8 \u09AE\u09BF\u099B\u09BF\u09B2!","\u099C\u09A8\u09A4\u09BE \u099C\u09C7\u0997\u09C7\u099B\u09C7, \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C\u09B0\u09BE \u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0","power"),n.spawnRing(e.x,e.z,11,"#ffd43b",.7);for(let t of n.foes){if(t.state==="ko")continue;let i=t.x-e.x,s=t.z-e.z,r=Math.hypot(i,s);r<11&&wi(n,t,t.boss?45:30,{knock:!0,special:!0,dirX:i/(r||1),dirZ:s/(r||1),word:"\u099C\u09A8\u09A4\u09BE\u09B0 \u09A7\u09BE\u0995\u09CD\u0995\u09BE!"})}for(let t of n.civilians){if(t.follower){t.bubble=Te(["\u09A6\u09AB\u09BE \u098F\u0995, \u09A6\u09BE\u09AC\u09BF \u098F\u0995!","\u099C\u09A8\u09A4\u09BE\u09B0 \u099C\u09AF\u09BC!","\u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u0986\u09AE\u09BE\u09A6\u09C7\u09B0!"]);continue}Math.hypot(t.x-e.x,t.z-e.z)<25&&(t.mode="rally",t.st=0,t.rx=e.x+le(-4,4),t.rz=e.z+le(-4,4))}}function Ey(n,e){n.audio.roar(),n.shake=.5,n.hitstop=.1,n.hud.banner("\u0995\u09BE\u09A8 \u09A7\u09B0\u09CB, \u0989\u09A0\u09AC\u09B8 \u0995\u09B0\u09CB!","\u09B8\u09CD\u09AF\u09BE\u09B0\u09C7\u09B0 \u09B8\u09BE\u09AE\u09A8\u09C7 \u09B8\u09AC\u09BE\u0987 \u0986\u09AC\u09BE\u09B0 \u0995\u09CD\u09B2\u09BE\u09B8 \u098F\u0987\u099F\u09C7","power"),n.hud.pop("\u0995\u09BE\u09A8 \u09A7\u09B0!",e.x,e.y+2.3,e.z,"big"),n.spawnRing(e.x,e.z,12,"#74c0fc",.7);let t=0;for(let i of n.foes)i.state!=="ko"&&(Math.hypot(i.x-e.x,i.z-e.z)>12||(Zs(n,i),i.kanT=i.boss?3.5:5.5,Ge(i,"kan"),i.say=Te(Kc),i.sayT=le(1.2,2.5),t++));n.stats.kanned+=t}var Ty=new je(.42,.2,.26),Ay=new Ze({color:"#4c9a52"}),Ry=new Ze({color:"#f8f9fa"}),Cy=new je(.1,.21,.27);function Py(n,e){let t=Math.round(e.loot*le(.9,1.1)),i=e.boss?6:3;for(let s=0;s<i;s++){let r=new vt;r.add(new fe(Ty,Ay)),r.add(new fe(Cy,Ry)),n.scene.add(r);let a=le(0,Math.PI*2);n.loot.push({mesh:r,x:e.x,y:e.y+1.2,z:e.z,vx:Math.cos(a)*le(1,3),vy:le(4,6),vz:Math.sin(a)*le(1,3),amount:t/i,t:0})}}function yf(n,e){let t=n.player;for(let i=n.loot.length-1;i>=0;i--){let s=n.loot[i];s.t+=e;let r=t.x-s.x,a=t.z-s.z,o=Math.hypot(r,a);if((o<5.5||s.t>5)&&s.t>.6&&t.state!=="dead"){let l=12+s.t*4;s.x+=r/(o||1)*l*e,s.z+=a/(o||1)*l*e,s.y+=(t.y+1-s.y)*Math.min(1,e*8)}else{s.vy-=18*e,s.x+=s.vx*e,s.z+=s.vz*e,s.y+=s.vy*e;let l=Si(s.x)+.1;s.y<l&&(s.y=l,s.vy*=-.35,s.vx*=.6,s.vz*=.6)}s.mesh.position.set(s.x,s.y,s.z),s.mesh.rotation.y+=e*4,o<.8&&s.t>.6&&(n.money+=s.amount,n.audio.coin(),n.hud.pop("+"+Zt(s.amount),t.x,t.y+2.2,t.z,"money"),n.scene.remove(s.mesh),n.loot.splice(i,1))}}var vf=new gi(.55,.75,32);vf.rotateX(-Math.PI/2);var Iy=new Et({color:"#ffd43b",transparent:!0,opacity:.8,depthWrite:!1});function Mf(n,e,t,i){let s=new vt,r={held:new vt};ri(r,e),r.held.position.y=.3,s.add(r.held);let a=new fe(vf,Iy);a.position.y=.04,s.add(a),t=Dt(t,-18,18),s.position.set(t,Si(t),i),n.scene.add(s),n.pickups.push({kind:e,x:t,z:i,mesh:s,item:r.held,t:0})}function bf(n,e){let t=n.player;for(let i=n.pickups.length-1;i>=0;i--){let s=n.pickups[i];s.t+=e,s.item.rotation.y+=e*2,s.item.position.y=.35+Math.sin(s.t*3)*.1;let r=Math.hypot(t.x-s.x,t.z-s.z),a=s.t>60||Math.abs(s.z-t.z)>140;if(!a&&r<1.3&&t.state!=="dead"&&!t.riding)if(t.weapon)n.hud.hint(`\u09B9\u09BE\u09A4\u09C7 \u0986\u0997\u09C7 \u09A5\u09C7\u0995\u09C7\u0987 ${qs[t.weapon.kind].name} \u0986\u099B\u09C7`);else{let o=qs[s.kind];t.weapon={kind:s.kind,uses:o.uses},ri(t.model,s.kind),n.audio.pickup(),n.stats.weapons++,Rt(n,"weapon",{kind:s.kind}),n.hud.toast(s.kind==="broom"?"\u09A6\u09CB\u0995\u09BE\u09A8\u09BF\u09B0 \u099D\u09BE\u09A1\u09BC\u09C1 \u09B9\u09BE\u09A4\u09C7 \u09A8\u09BF\u09B2\u09C7\u09A8! \u09AE\u09BE\u09B0 \u098F\u0996\u09A8 \u099C\u09CB\u09B0\u09BE\u09B2\u09CB \u{1F9F9}":"\u09AE\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8\u09C7\u09B0 \u09B2\u09BE\u09A0\u09BF \u098F\u0996\u09A8 \u0986\u09AA\u09A8\u09BE\u09B0 \u09B9\u09BE\u09A4\u09C7!","good"),a=!0}a&&(n.scene.remove(s.mesh),n.pickups.splice(i,1))}}function yl(n,e,t,i,s){let r=new vt;r.position.set(e,Ie.curbY,t);let a=o=>new Ze({color:o});if(i==="desk"){let o=new fe(new je(.8,.06,1.4),a("#7a4e2d"));o.position.y=.78,r.add(o);for(let[h,d]of[[-.35,-.6],[.35,-.6],[-.35,.6],[.35,.6]]){let f=new fe(new je(.06,.78,.06),a("#5c3b22"));f.position.set(h,.39,d),r.add(f)}for(let h=0;h<4;h++){let d=new fe(new je(.3,.06,.4),a(h%2?"#f8f9fa":"#ffd8a8"));d.position.set(0,.84+h*.065,-.3),d.rotation.y=le(-.2,.2),r.add(d)}let l=new fe(new gt(1.3,.34),new Et({map:Pn("\u09AB\u09BE\u0987\u09B2 \u099B\u09BE\u09A1\u09BC\u09BE\u09A8\u09CB \u09B9\u09AF\u09BC","#fff","#1864ab",384,100),side:Mt}));l.position.set(-s*.42,1.05,0),l.rotation.y=-s*Math.PI/2,r.add(l);let c=new fe(new mt(.03,.03,2.3,6),a("#ddd"));c.position.set(s*.3,1.15,.5),r.add(c);let u=new fe(new es(1.3,.5,8),a("#e03131"));u.position.set(s*.3,2.35,.5),r.add(u)}else if(i==="tender"){let o=new fe(new je(.9,.06,.9),a("#ced4da"));o.position.y=.76,r.add(o);let l=new fe(new mt(.05,.05,.76,6),a("#495057"));l.position.y=.38,r.add(l);let c=new fe(new je(.5,.36,.14),a("#3b2a1a"));c.position.set(0,.98,0),r.add(c);let u=new fe(new gt(1.5,.38),new Et({map:Pn("\u099F\u09C7\u09A8\u09CD\u09A1\u09BE\u09B0 \u09AE\u09BF\u099F\u09BF\u0982 (\u0997\u09CB\u09AA\u09A8)","#fff3bf","#5c3b22",448,112),side:Mt}));u.position.set(0,1.75,0),u.rotation.y=-s*Math.PI/2,r.add(u)}else{let o=a("#c9a46b");for(let c=0;c<7;c++){let u=new fe(new ts(.35,8,6),o);u.scale.set(1,.85,1),u.position.set(c%3*.55-.55+s*.4,.3+Math.floor(c/3)*.48,Math.floor(c/3)*.2-.2),r.add(u)}let l=new fe(new gt(1.6,.42),new Et({map:Pn("\u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C \u09F3\u09E9\u09E6\u09E6/\u0995\u09C7\u099C\u09BF","#fff3bf","#c92a2a",448,112),side:Mt}));l.position.set(-s*.2,1.65,0),l.rotation.y=-s*Math.PI/2,r.add(l)}return n.scene.add(r),r}function Ly(n,e){let t=Ud[e]||[Gn[e].name],i=t.filter(r=>!n.nicks.has(r)),s=i.length?Te(i):Te(t);return n.nicks.add(s),s}function dn(n,e,t,i,s={}){let r=Gn[e],a=lh(n,r.look),o=n.hpScale;return Object.assign(a,{isFoe:!0,key:e,type:r,boss:!!r.boss,heavy:!!r.boss,nick:e==="copy"?"\u09AB\u099F\u09CB\u0995\u09AA\u09BF":Ly(n,e),hp:Math.round(r.hp*o),maxHp:Math.round(r.hp*o),loot:r.loot,cooldown:le(.5,1.5),token:!1,poise:45,summoned:0,fled:!1,bubbleT:0,sayT:le(2,5),ghost:!1,kanT:0,tonics:0,dozerT:5,runTime:0},s),e==="copy"&&(a.hp=a.maxHp=1),a.radius=r.boss?.55:.42,a.x=t,a.z=i,a.y=Si(t),a.face=na(a,n.player.x,n.player.z),Ge(a,s.state||"busy"),n.foes.push(a),n.hud.addLabel(a),a}function xl(n){Ge(n,n.key==="pocket"?"run":"chase")}function Dy(n,e){n.hud.banner("\u09AB\u099F\u09CB\u0995\u09AA\u09BF \u09AC\u09BE\u09B9\u09BF\u09A8\u09C0!","\u0995\u09CB\u09A8\u099F\u09BE \u0986\u09B8\u09B2? \u09AE\u09BE\u09B0 \u0996\u09C7\u09B2\u09C7\u0987 \u09AC\u09CB\u099D\u09BE \u09AF\u09BE\u09AC\u09C7","boss"),n.audio.alarm();let t=[[e.x,e.z]];for(let r=0;r<3;r++){let a=r/3*Math.PI*2+le(-.4,.4),o=Dt(e.x+Math.cos(a)*3.2,-17,17),l=e.z+Math.sin(a)*3.2;t.push([o,l]),dn(n,"copy",o,l,{state:"alert",nick:e.nick}),n.spawnRing(o,l,1.6,"#f8f9fa",.4)}let[i,s]=Te(t);e.x=i,e.z=s,n.stats.copies+=3,Rt(n,"copies",{nick:e.nick})}function Sf(n,e,t){let i=n.player;e.st+=t,e.cooldown-=t,e.sayT-=t;let s=e.anim;s.t+=t;let r=e.type,a=i.x-e.x,o=i.z-e.z,l=Math.hypot(a,o),c=Math.atan2(a,o),u="idle",h=0;s.guard=!1;let d=i.state!=="dead",f=1-n.weather.waterAt(e.x,e.z)*.4,g=(v,p,m,_=!0)=>{let T=v-e.x,y=p-e.z,M=Math.hypot(T,y);if(M<.05)return M;let E=Math.min(m*f*t,M);return e.x+=T/M*E,e.z+=y/M*E,_&&(e.face=Vt(e.face,Math.atan2(T,y),1-Math.exp(-10*t))),h=m/4,s.phase+=m*t*2.1,u="walk",M};switch(e.state){case"busy":{let v=e.key==="mastan"?13:e.key==="syndicate"?15:e.boss?12:7.5;e.key==="chanda"?(u="extort",e.victim&&(e.face=na(e,e.victim.x,e.victim.z)),e.busyT-=t,e.sayT<=0&&(e.say=Te(["\u099A\u09BE\u0981\u09A6\u09BE \u09A6\u09C7!","\u09AE\u09BE\u09B8\u09C7\u09B0 \u099F\u09BE\u0995\u09BE \u0995\u0987?","\u09A6\u09CB\u0995\u09BE\u09A8 \u099A\u09BE\u09B2\u09BE\u0987\u09A4\u09C7 \u099A\u09BE\u09B8?","\u09AC\u09A1\u09BC \u09AD\u09BE\u0987\u09AF\u09BC\u09C7\u09B0 \u099C\u09A8\u09CD\u09AE\u09A6\u09BF\u09A8, \u099A\u09BE\u0981\u09A6\u09BE \u09A6\u09C7"]),e.sayT=le(3,5)),e.busyT<=0&&(e.loot+=2e4,n.stats.extortions++,Rt(n,"extort",{nick:e.nick,place:ia(n,e.x,e.z)}),n.hud.event(e,"extorted"),e.victim&&(e.victim.mode="pay",e.victim.st=0,e.victim.bubble="\u09A8\u09BF\u09AF\u09BC\u09C7 \u09AF\u09BE\u09A8..."),e.busyT=22)):e.key==="ghush"||e.key==="thikadar"?(u=e.key==="ghush"?"collect":"pay",e.sayT<=0&&(e.say=Te(r.lines),e.sayT=le(4,7))):e.boss?(l>6&&g(i.x,i.z,1.3),e.sayT<=0&&(e.say=Te(r.lines),e.sayT=le(3,5))):e.key==="syndicate"?(e.face=Vt(e.face,c,t*2),e.sayT<=0&&(e.say=Te(r.lines),e.sayT=le(4,7))):e.face=Vt(e.face,c,t*1.5),d&&l<v&&(Ge(e,"alert"),e.say=Te(r.lines));break}case"escort":{let v=e.leader;if(!v||v.state==="ko"||v.state!=="busy"){Ge(e,"alert");break}let p=Math.sin(v.face),m=Math.cos(v.face),_=v.x-m*e.slot*1.6-p*1.3,T=v.z+p*e.slot*1.6-m*1.3;g(_,T,2.5)<.2&&(u="idle",e.face=v.face);break}case"alert":s.guard=!0,e.face=Vt(e.face,c,1-Math.exp(-12*t)),e.st>.45&&xl(e);break;case"chase":{if(s.guard=!0,!d){u="cheer";break}if(r.flees&&!e.fled&&e.hp<e.maxHp*.5){e.fled=!0,Zs(n,e),Ge(e,"flee"),e.say="\u09AB\u09BE\u0987\u09B2 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09AA\u09BE\u09B2\u09BE\u0987!";break}if(e.key==="bhumi"&&(e.dozerT-=t,e.dozerT<=0&&l<35&&(e.dozerT=le(11,15),e.say="\u09AC\u09C1\u09B2\u09A1\u09CB\u099C\u09BE\u09B0 \u0986\u09A8! \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u0993 \u0986\u09AE\u09BE\u09B0!",n.traffic.callDozer(i.riding?i.riding.x:i.x,i.z),n.stats.dozers++,Rt(n,"dozer",{nick:e.nick}),n.hud.toast("\u09AC\u09C1\u09B2\u09A1\u09CB\u099C\u09BE\u09B0 \u0986\u09B8\u099B\u09C7! \u09B2\u09BE\u09B2 \u09A6\u09BE\u0997 \u09A5\u09C7\u0995\u09C7 \u09B8\u09B0\u09C1\u09A8 \u{1F69C}","warn"),n.audio.alarm())),e.key==="vejal"&&e.tonics<2&&e.hp<e.maxHp*(e.tonics?.25:.5)&&l>3){e.tonics++,Zs(n,e),Ge(e,"tonic"),e.say="\u099F\u09A8\u09BF\u0995 \u0996\u09BE\u0987, \u09B6\u0995\u09CD\u09A4\u09BF \u09AA\u09BE\u0987!",Rt(n,"tonic",{nick:e.nick});break}if(e.boss&&e.summoned<2&&e.hp<e.maxHp*(e.summoned?.33:.66)&&(e.summoned++,e.key==="prosno"?Dy(n,e):e.key!=="vejal"&&(e.say="\u098F\u0987, \u09A4\u09CB\u09B0\u09BE \u0995\u0987!",n.summon(e))),r.ranged&&l>4.5&&l<17&&e.cooldown<=0){Ge(e,"throwWind");break}let v=n.wave>=5?3:2;if(!e.token&&l<5.5&&n.tokens<v&&(e.token=!0,n.tokens++),e.token||e.boss)l>r.range-.1?g(i.x,i.z,r.speed):(u="guard",e.face=Vt(e.face,c,1-Math.exp(-10*t))),l<=r.range+.15&&e.cooldown<=0&&((e.key==="neta"||e.key==="bhumi")&&Math.random()<.4?(Ge(e,"slamWind"),n.spawnRing(e.x,e.z,3.4,"#ff4d2e",.8,!0)):Ge(e,"windup"));else{let p=r.ranged?7:3.8,m=e.id%2?1:-1,_=i.x-Math.sin(c+m*.5)*p,T=i.z-Math.cos(c+m*.5)*p;g(_,T,r.speed*.6,!1)<.4&&(u="guard"),e.face=Vt(e.face,c,1-Math.exp(-8*t))}e.sayT<=0&&Math.random()<.5&&(e.say=Te(r.lines),e.sayT=le(4,8));break}case"windup":if(u="windup",e.face=Vt(e.face,c,1-Math.exp(-4*t)),e.st>=r.windup){Ge(e,"strike"),n.audio.swing();let v=Xn(e),p=$n(e),m=(a*v+o*p)/(l||1);l<r.range+.4&&m>.3&&Gi(n,r.dmg*n.dmgScale,a/(l||1),o/(l||1),!1,e.model.heldKind==="stick"?"\u09A0\u0995\u09BE\u09B8!":e.key==="thikadar"?"\u09AC\u09CD\u09B0\u09BF\u09AB\u0995\u09C7\u09B8-\u09AC\u09BE\u09A1\u09BC\u09BF!":"\u0998\u09C1\u09B7\u09BF!",e.key,e.nick)}break;case"strike":u="strike",e.st>=.3&&(Ge(e,"chase"),e.cooldown=r.cooldown*le(.8,1.3),Zs(n,e));break;case"slamWind":if(u="slamUp",e.st>=.8){Ge(e,"slam"),n.shake=Math.max(n.shake,.5),n.audio.thud(),n.spawnRing(e.x,e.z,3.6,"#ffd8a8",.4),l<3.6&&Gi(n,18*n.dmgScale,a/(l||1),o/(l||1),!0,"\u09A7\u09A1\u09BC\u09BE\u09AE!",e.key,e.nick);for(let v of n.followers)Math.hypot(v.x-e.x,v.z-e.z)<3.6&&(v.mode="down",v.st=0,v.bubble="\u0989\u09AB!")}break;case"slam":u="slam",e.st>=.5&&(Ge(e,"chase"),e.cooldown=r.cooldown*le(.9,1.4));break;case"throwWind":u="throwUp",e.face=Vt(e.face,c,1-Math.exp(-10*t)),e.st>=.5&&(by(n,e,e.key==="vejal"?"pill":e.key==="prosno"?"paper":"onion"),Ge(e,"throwRec"));break;case"throwRec":u="throw",e.st>=.35&&(Ge(e,"chase"),e.cooldown=r.cooldown*le(.8,1.3));break;case"tonic":u="sip",e.hp=Math.min(e.maxHp,e.hp+e.maxHp*.12*t),e.st>2.4&&(Ge(e,"chase"),e.say="\u0986\u09B9\u09CD! \u09AE\u09C7\u09AF\u09BC\u09BE\u09A6\u09CB\u09A4\u09CD\u09A4\u09C0\u09B0\u09CD\u09A3 \u09B9\u09B2\u09C7\u0993 \u0995\u09BE\u099C \u0995\u09B0\u09C7!");break;case"kan":u="kan",e.kanT-=t,e.sayT<=0&&(e.say=Te(Kc),e.sayT=le(2,3.5)),e.kanT<=0&&xl(e);break;case"run":{e.runTime+=t,e.runDir||(e.runDir=e.z>i.z?1:-1),(e.z<-Ie.len+15&&e.runDir<0||e.z>Ie.startZ-15&&e.runDir>0)&&(e.runDir*=-1);let v=Math.max(4.4,r.speed-e.runTime*.09);g(Math.sign(e.x||1)*15.4,e.z+e.runDir*8,v),e.sayT<=0&&(e.say=Te(r.lines),e.sayT=le(3,5));break}case"hit":u="hit",e.st>=(e.boss?.18:e.stun||.34)&&xl(e);break;case"down":u="down",e.st>=1.1&&Ge(e,"getup");break;case"getup":u="getup",e.st>=.55&&xl(e);break;case"flee":{g(e.x-a*3,e.z-o*3,r.speed*1.35),e.st>3.2&&Ge(e,"chase");break}case"ko":u="ko",e.st>3.2&&(e.y-=t*.6,e.st>5&&(e.remove=!0));break}e.say&&(n.hud.bubble(e,e.say),e.say=null),s.mode=u,s.move=h,cs(e.model,s,t),e.state==="ko"&&e.st>3.2?(e.model.group.position.y=e.y,e.x+=e.kx*t,e.z+=e.kz*t,e.kx*=.9,e.kz*=.9,e.model.group.position.x=e.x,e.model.group.position.z=e.z):ch(n,e,t)}function us(n,e,t,i={}){let s=lh(n,i.look||Te(Od));return Object.assign(s,{isCivilian:!0,mode:i.mode||"walk",dir:Math.random()<.5?1:-1,speed:le(1.1,1.7),st:0,lane:e,name:i.name||null}),s.x=e,s.z=t,s.y=Ie.curbY,s.face=s.dir>0?0:Math.PI,s.radius=.35,n.civilians.push(s),s}var Ny=["\u09A7\u09BE\u09AA!","\u09A0\u09C1\u09B8!","\u099A\u099F\u09BE\u0982!","\u09A8\u09C7 \u098F\u09AC\u09BE\u09B0!","\u099C\u09A8\u09A4\u09BE\u09B0 \u0995\u09BF\u09B2!"];function wf(n,e,t){let i=n.player;e.st+=t;let s=e.anim;s.t+=t;let r="idle",a=0,o=(c,u,h)=>{let d=c-e.x,f=u-e.z,g=Math.hypot(d,f);if(g<.15)return g;let v=Math.min(h*t,g);return e.x+=d/g*v,e.z+=f/g*v,e.face=Vt(e.face,Math.atan2(d,f),1-Math.exp(-8*t)),a=h/4,s.phase+=h*t*2.3,r="walk",g};switch(e.mode){case"walk":{e.z+=e.dir*e.speed*t,e.x+=(e.lane-e.x)*Math.min(1,t*2),e.face=Vt(e.face,e.dir>0?0:Math.PI,1-Math.exp(-6*t)),a=e.speed/4,s.phase+=e.speed*t*2.3,r="walk",Math.abs(e.z-i.z)>75&&(e.z=i.z+(e.z>i.z?-1:1)*le(55,70),e.z=Dt(e.z,-Ie.len+4,Ie.startZ-4)),(e.z<-Ie.len+4||e.z>Ie.startZ-4)&&(e.dir*=-1);let c=null;for(let u of n.foes)if(!(u.state==="ko"||u.state==="busy"||u.state==="escort")&&Math.hypot(u.x-e.x,u.z-e.z)<11){c=u;break}c&&(e.mode="watch",e.st=0);break}case"watch":e.face=Vt(e.face,Math.atan2(i.x-e.x,i.z-e.z),t*4),e.st>4&&(e.mode="walk",e.st=0);break;case"cheer":r=e.st<0?"idle":"cheer",e.face=Vt(e.face,Math.atan2(i.x-e.x,i.z-e.z),t*6),e.st>2.6&&(e.mode=e.follower?"follow":e.fixed?"stand":"walk",e.st=0);break;case"rally":(o(e.rx,e.rz,4.2)<.4||e.st>2.5)&&(e.mode="cheer",e.st=0);break;case"cower":r="cower";break;case"pay":r=e.st<0?"idle":"pay",e.st>2&&(e.mode=e.fixed?e.payer?"pay":"cower":"walk",e.st=e.payer&&e.fixed?-le(1,3):0);break;case"stand":break;case"follow":{let c=n.followers.indexOf(e),u=n.followers.length,h=i.x+(c-(u-1)/2)*1.5,d=i.z+2+c%2*.8,f=Math.hypot(h-e.x,d-e.z);f>45&&(e.x=Dt(h,-17,17),e.z=d+6),f>.7?o(h,d,f>7?7:4.6):e.face=Vt(e.face,i.face,t*4);let g=null,v=8;for(let p of n.foes){if(p.state==="ko"||p.state==="busy"||p.state==="escort"||p.state==="down")continue;let m=Math.hypot(p.x-e.x,p.z-e.z);m<v&&(v=m,g=p)}g&&i.state!=="dead"&&(e.mode="fight",e.target=g,e.st=0);break}case"fight":{let c=e.target;if(!c||c.state==="ko"||Math.hypot(c.x-e.x,c.z-e.z)>14||Math.hypot(i.x-e.x,i.z-e.z)>22){e.mode="follow";break}e.atk-=t,e.punchT=(e.punchT||0)-t;let u=Math.hypot(c.x-e.x,c.z-e.z);u>1.25?o(c.x,c.z,4.8):(e.face=Vt(e.face,Math.atan2(c.x-e.x,c.z-e.z),1-Math.exp(-10*t)),r="guard",e.atk<=0&&c.state!=="down"&&(e.atk=le(.9,1.4),e.punchT=.26,e.arm=!e.arm,wi(n,c,4+n.wave*.4,{dirX:(c.x-e.x)/(u||1),dirZ:(c.z-e.z)/(u||1),word:Te(Ny),follower:!0,stun:.22}),Math.random()<.15&&(e.bubble=Te(["\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09A6\u09CB\u0995\u09BE\u09A8\u09C7 \u099A\u09BE\u0981\u09A6\u09BE!","\u09A8\u09C7, \u099A\u09BE-\u09AA\u09BE\u09A8\u09BF\u09B0 \u0996\u09B0\u099A!","\u098F\u099F\u09BE \u099C\u09A8\u09A4\u09BE\u09B0 \u09AA\u0995\u09CD\u09B7 \u09A5\u09C7\u0995\u09C7!"])))),e.punchT>0&&(r=e.arm?"punchR":"punchL");break}case"down":r=e.st<1.2?"down":"getup",e.st>1.8&&(e.mode=e.follower?"follow":"walk",e.st=0);break;case"escortee":{let c=Math.hypot(i.x-e.x,i.z-e.z);c<7&&i.state!=="dead"?c>1.8?o(i.x+1.2,i.z+1.4,Math.min(5.6,c*1.4)):e.face=Vt(e.face,i.face,t*4):(r="cheer",e.face=Vt(e.face,Math.atan2(i.x-e.x,i.z-e.z),t*5),e.st>3&&(e.st=0,e.bubble=Te(["\u098F\u0987 \u09AF\u09C7! \u0986\u09AE\u09BE\u0995\u09C7 \u09A8\u09BF\u09AF\u09BC\u09C7 \u099A\u09B2\u09C7\u09A8!","\u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u09B6\u09C1\u09B0\u09C1 \u09B9\u09AF\u09BC\u09C7 \u09AF\u09BE\u09AC\u09C7!","\u098F\u0995\u09BE \u09AF\u09C7\u09A4\u09C7 \u09AD\u09AF\u09BC \u09B2\u09BE\u0997\u09C7!"])));break}}e.bubble&&(n.hud.bubble(e,e.bubble),e.bubble=null),!(e.follower||e.mode==="rally"||e.mode==="escortee"||e.mode==="down")&&Math.abs(e.x)<Ie.roadHalf+.6&&(e.x=Math.sign(e.x||1)*(Ie.roadHalf+.6)),s.mode=r,s.move=a,cs(e.model,s,t),ch(n,e,t)}function sa(n,e){if(n.scene.remove(e.model.group),e.props)for(let i of e.props)n.scene.remove(i);e.isFoe&&n.hud.removeLabel(e),n.hud.removeBubble(e);let t=n.followers.indexOf(e);t>=0&&n.followers.splice(t,1)}var Uy={neta:["\u09A8\u09C7\u09A4\u09BE \u0986\u09B8\u099B\u09C7\u09A8!","\u09B8\u09BE\u09A5\u09C7 \u09AE\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8 \u09AC\u09BE\u09B9\u09BF\u09A8\u09C0 \xB7 \u09B8\u09BE\u09AC\u09A7\u09BE\u09A8"],bhumi:["\u09AD\u09C2\u09AE\u09BF\u09A6\u09B8\u09CD\u09AF\u09C1 \u09B9\u09BE\u099C\u09BF\u09B0!","\u09AB\u09C1\u099F\u09AA\u09BE\u09A4\u0993 \u09A6\u0996\u09B2 \u0995\u09B0\u09A4\u09C7 \u099A\u09BE\u09AF\u09BC \xB7 \u09AC\u09C1\u09B2\u09A1\u09CB\u099C\u09BE\u09B0 \u09A5\u09C7\u0995\u09C7 \u09B8\u09BE\u09AC\u09A7\u09BE\u09A8"],vejal:["\u09AD\u09C7\u099C\u09BE\u09B2 \u0993\u09B7\u09C1\u09A7 \u09AC\u09BF\u0995\u09CD\u09B0\u09C7\u09A4\u09BE!","\u09AC\u09BF\u09B7\u09BE\u0995\u09CD\u09A4 \u09AC\u09A1\u09BC\u09BF \u099B\u09CB\u09A1\u09BC\u09C7 \xB7 \u09B8\u09AC\u09C1\u099C \u09A6\u09BE\u0997\u09C7 \u09A6\u09BE\u0981\u09A1\u09BC\u09BE\u09AC\u09C7\u09A8 \u09A8\u09BE \xB7 \u099F\u09A8\u09BF\u0995 \u0996\u09C7\u09A4\u09C7 \u09A6\u09C7\u09AC\u09C7\u09A8 \u09A8\u09BE"],prosno:["\u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09AB\u09BE\u0981\u09B8\u0995\u09BE\u09B0\u09C0!","\u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09AA\u09A4\u09CD\u09B0 \u099B\u09C1\u09A1\u09BC\u09C7 \u099A\u09CB\u0996 \u09A2\u09BE\u0995\u09C7 \xB7 \u09AB\u099F\u09CB\u0995\u09AA\u09BF \u09A6\u09BF\u09AF\u09BC\u09C7 \u09A8\u09BF\u099C\u09C7\u09B0 \u0995\u09AA\u09BF \u09AC\u09BE\u09A8\u09BE\u09AF\u09BC"]};function Fy(n,e,t){let i=n.player,s=n.wave,r=Dt(i.z+t*50,-Ie.len+12,Ie.startZ-12),a=dn(n,e,le(-7,-3),r),o=e==="neta"?2+Math.floor(s/6):e==="bhumi"?2:e==="vejal"?1:0;for(let u=0;u<o;u++)dn(n,"mastan",a.x+le(-2,2),r+le(-2,2),{state:"escort",leader:a,slot:(u%2?1:-1)*(1+Math.floor(u/2)*.8)});let[l,c]=Uy[e];n.hud.banner(l,`${a.nick} \xB7 ${c}`,"boss"),Rt(n,"boss",{key:e,nick:a.nick})}function Ef(n){let e=n.wave;n.hpScale=1+(e-1)*.08,n.dmgScale=1+(e-1)*.05;let t;if(e===1)t=["chanda","chanda","ghush"];else if(e===2)t=["chanda","mastan","mastan","syndicate"];else{let l=3+Math.floor(e/2),c=["chanda","ghush","mastan","mastan","syndicate"];e>=4&&c.push("thikadar"),t=[];for(let u=0;u<l;u++)t.push(Te(c));e%3===0&&t.unshift(Jc[(e/3-1)%Jc.length])}let i=n.player,s=i.z>-Ie.len+120?-1:1,r=()=>Dt(i.z+s*le(24,80),-Ie.len+10,Ie.startZ-10),a=new Set;for(let l of t)if(l==="chanda"){let c=n.world.shops.filter(h=>!a.has(h)&&(h.z-i.z)*s>18&&(h.z-i.z)*s<95),u=c.length?Te(c):null;if(u){a.add(u);let h=us(n,u.x,u.z,{mode:"cower"});h.fixed=!0,h.face=-u.side*Math.PI/2,h.bubble="\u09AC\u09BE\u0981\u099A\u09BE\u09A8!",h.name=Te(ul);let d=dn(n,"chanda",u.x-u.side*1.3,u.z,{victim:h,busyT:24});d.face=u.side*Math.PI/2,d.keeper=h;continue}dn(n,"mastan",le(-16,16),r())}else if(l==="ghush"){let c=Math.random()<.5?-1:1,u=r(),h=dn(n,"ghush",c*16.6,u);h.face=-c*Math.PI/2,h.props=[yl(n,c*16,u,"desk",c)],h.x=c*17.2,h.payers=[];for(let d=0;d<2;d++){let f=us(n,c*15,u-.2+d*1.1,{mode:"stand"});f.fixed=!0,f.payer=!0,f.face=c*Math.PI/2,f.mode="pay",f.st=-le(0,1.5),h.payers.push(f)}}else if(l==="syndicate"){let c=Math.random()<.5?-1:1,u=r(),h=dn(n,"syndicate",c*15.8,u);h.props=[yl(n,c*17.2,u,"sacks",c)]}else if(l==="thikadar"){let c=Math.random()<.5?-1:1,u=r(),h=dn(n,"thikadar",c*15.6,u);h.face=-c*Math.PI/2}else Gn[l].boss?Fy(n,l,s):dn(n,"mastan",le(-16,16),r());let o=e===1?2:Math.random()<.6?1:0;for(let l=0;l<o;l++){let c=Math.random()<.5?-1:1;Mf(n,"broom",c*le(13.4,15.5),Dt(i.z+s*le(8,35),-Ie.len+6,Ie.startZ-6))}}function Tf(n,e){for(let t=0;t<2;t++){let i=t?1:-1,s=dn(n,"mastan",Dt(e.x+i*6,-17,17),e.z+le(-4,4),{state:"alert"});s.loot=3e3}}var Oy=[{shirt:"#f8f9fa",pants:"#1c3d6e",skin:"#a0704c",hair:"#141414",backpack:"#e03131"},{shirt:"#f8f9fa",pants:"#1864ab",saree:!0,skin:"#a8744f",hair:"#111",backpack:"#2f9e44"}],ky=["\u09B0\u09BE\u09B9\u09BE\u09A4","\u09A4\u09BE\u09A8\u09BF\u09AF\u09BC\u09BE","\u09AE\u09BF\u09AE","\u09B8\u09BE\u0995\u09BF\u09AC","\u09A8\u09C1\u09B8\u09B0\u09BE\u09A4","\u0986\u09B0\u09BF\u09AB"];function By(n,e,t,i){let s=new vt,r=new fe(new mt(.9,.9,14,20,1,!0),new Et({color:"#b197fc",transparent:!0,opacity:.28,depthWrite:!1,side:Mt}));r.position.y=7,s.add(r);let a=new fe(new gi(1.4,1.8,40),new Et({color:"#9775fa",transparent:!0,opacity:.85,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.06,s.add(a);let o=new fe(new gt(3.6,.8),new Et({map:Pn(i,"#5f3dc4","#fff",512,112),side:Mt}));return o.position.y=3.4,s.add(o),s.position.set(e,Ie.curbY,t),n.scene.add(s),s}function Af(n){let e={active:null,cooldown:28,last:null},t=(s,r,a)=>{s.result=r,r?n.stats.missionsOk++:n.stats.missionsFail++,n.hud.banner(r?"\u09AE\u09BF\u09B6\u09A8 \u09B8\u09AB\u09B2!":"\u09AE\u09BF\u09B6\u09A8 \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5",a,r?"good":"boss"),r?n.audio.cheer(!0):n.audio.alarm(),s.cleanup&&s.cleanup(),e.active=null,e.cooldown=le(30,45)},i={pocket(s){let r=n.player,a=r.x<0?-1:1,o=Dt(r.z+s*le(12,20),-Ie.len+30,Ie.startZ-30),l=us(n,a*15.2,o,{mode:"stand",name:Te(["\u099C\u09B0\u09BF\u09A8\u09BE \u09AC\u09C7\u0997\u09AE","\u09B9\u09BE\u09AC\u09BF\u09AC \u09AE\u09BE\u09AE\u09BE","\u09A8\u09BE\u09B8\u09B0\u09BF\u09A8 \u09AD\u09BE\u09AC\u09BF","\u09AC\u09C7\u09B2\u09BE\u09B2 \u09A1\u09CD\u09B0\u09BE\u0987\u09AD\u09BE\u09B0","\u0986\u09B2\u09C7\u09AF\u09BC\u09BE \u09A8\u09BE\u09A8\u09BF"])});l.fixed=!0,l.bubble="\u099A\u09CB\u09B0! \u099A\u09CB\u09B0! \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A8\u09BF\u09AF\u09BC\u09C7 \u0997\u09C7\u09B2!";let c=dn(n,"pocket",a*15.4,o+s*4,{state:"run",runDir:s,mission:!0});return{id:"pocket",title:"\u09AA\u0995\u09C7\u099F\u09AE\u09BE\u09B0 \u09A7\u09B0\u09C1\u09A8!",limit:32,target:c,desc:()=>`${c.nick} ${l.name}-\u098F\u09B0 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09A6\u09CC\u09A1\u09BC \u09A6\u09BF\u09AF\u09BC\u09C7\u099B\u09C7\u0964 \u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7\u09B2 \u099B\u09C1\u09A1\u09BC\u09B2\u09C7 \u09A5\u09BE\u09AE\u09AC\u09C7!`,update(){return c.state==="ko"?(l.fixed=!1,_l(n,l,"phone",c),l.bubble="\u0986\u09AE\u09BE\u09B0 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2! \u09E8\u09E6\u09E7\u09EF \u09B8\u09BE\u09B2\u09C7\u09B0, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u0986\u09AE\u09BE\u09B0!",Rt(n,"mission",{id:"pocket",ok:!0,nick:c.nick,name:l.name}),[!0,`${l.name} \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09AB\u09C7\u09B0\u09A4 \u09AA\u09C7\u09B2\u09C7\u09A8, \u09B8\u09BE\u09A5\u09C7 \u098F\u0995 \u09AC\u099B\u09B0\u09C7\u09B0 \u09AA\u09C1\u09B0\u09A8\u09CB \u09AE\u09BF\u09B8\u09A1 \u0995\u09B2`]):this.t>this.limit||Math.hypot(c.x-r.x,c.z-r.z)>70?(c.remove=!0,l.bubble="\u09AE\u09CB\u09AC\u09BE\u0987\u09B2\u099F\u09BE \u0997\u09C7\u09B2... \u0987\u098F\u09AE\u0986\u0987 \u098F\u0996\u09A8\u09CB \u09AC\u09BE\u0995\u09BF!",Rt(n,"mission",{id:"pocket",ok:!1,nick:c.nick,name:l.name}),[!1,`${c.nick} \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A8\u09BF\u09AF\u09BC\u09C7 \u0997\u09B2\u09BF\u09A4\u09C7 \u09B9\u09BE\u09B0\u09BF\u09AF\u09BC\u09C7 \u0997\u09C7\u09B2`]):null}}},escort(s){let r=n.player,a=r.x<0?-1:1,o=Dt(r.z+s*le(6,12),-Ie.len+90,Ie.startZ-90),l=Te(ky),c=us(n,a*14.8,o,{look:Te(Oy),mode:"escortee",name:l});c.bubble="\u09AD\u09BE\u0987\u09AF\u09BC\u09BE, \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0\u09C7 \u09AA\u09CC\u0981\u099B\u09C7 \u09A6\u09C7\u09AC\u09C7\u09A8?";let u=Dt(o+s*le(55,70),-Ie.len+15,Ie.startZ-15),h=a*15.2,d=By(n,h,u,"\u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0");for(let f=0;f<2;f++){let g=dn(n,"mastan",a*le(13,16),o+s*le(22,40),{mission:!0});g.say="\u09AA\u09CD\u09B0\u09B6\u09CD\u09A8 \u09B2\u09BE\u0997\u09AC\u09C7? \u09AE\u09BE\u09A4\u09CD\u09B0 \u09AA\u09BE\u0981\u099A\u09B6\u09CB!"}return{id:"escort",title:"\u099B\u09BE\u09A4\u09CD\u09B0\u0995\u09C7 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE\u09AF\u09BC \u09AA\u09CC\u0981\u099B\u09BE\u09A8",limit:60,target:{x:h,z:u},desc:()=>`${l}-\u0995\u09C7 \u09B8\u09BE\u09A5\u09C7 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0\u09C7 \u09AF\u09BE\u09A8\u0964 \u0995\u09BE\u099B\u09C7 \u09A5\u09BE\u0995\u09B2\u09C7 \u09AA\u09C7\u099B\u09A8 \u09AA\u09C7\u099B\u09A8 \u0986\u09B8\u09AC\u09C7\u0964`,update(){return d.rotation.y+=.02,Math.hypot(c.x-h,c.z-u)<3.2?(c.mode="cheer",c.fixed=!0,c.bubble="\u09B8\u09AE\u09AF\u09BC\u09AE\u09A4\u09CB \u09AA\u09CC\u0981\u099B\u09BE\u09B2\u09BE\u09AE! \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8 \u09AB\u09BE\u0981\u09B8 \u09B9\u09AF\u09BC\u09A8\u09BF \u09A4\u09CB?",r.hp=Math.min(r.maxHp,r.hp+30),r.special=Math.min(1,r.special+.5),Rt(n,"mission",{id:"escort",ok:!0,name:l}),[!0,`${l} \u09B8\u09AE\u09AF\u09BC\u09AE\u09A4\u09CB \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u09A6\u09BF\u09B2 \xB7 \u09A6\u09AE +\u09E9\u09E6 \xB7 \u09AC\u09BF\u09B6\u09C7\u09B7 \u09B6\u0995\u09CD\u09A4\u09BF +\u09EB\u09E6%`]):this.t>this.limit?(c.mode="walk",c.lane=a*15,c.bubble="\u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u09AE\u09BF\u09B8... \u0986\u0997\u09BE\u09AE\u09C0 \u09AC\u099B\u09B0 \u0986\u09AC\u09BE\u09B0!",Rt(n,"mission",{id:"escort",ok:!1,name:l}),[!1,`${l} \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE\u09AF\u09BC \u09A6\u09C7\u09B0\u09BF \u0995\u09B0\u09B2, \u0986\u09AE\u09CD\u09AE\u09C1\u09B0 \u09AC\u0995\u09BE \u09A8\u09BF\u09B6\u09CD\u099A\u09BF\u09A4`]):null},cleanup(){n.scene.remove(d)}}},bribe(s){let r=n.player,a=Math.random()<.5?-1:1,o=Dt(r.z+s*le(28,45),-Ie.len+20,Ie.startZ-20),l=dn(n,"thikadar",a*15.4,o,{mission:!0});l.face=a*Math.PI/2,l.props=[yl(n,a*16.3,o+.7,"tender",a)];let c=dn(n,"ghush",a*17.1,o+.4,{mission:!0});c.face=-a*Math.PI/2;let u=ia(n,a*17.9,o);return{id:"bribe",title:"\u0998\u09C1\u09B7 \u09B2\u09C7\u09A8\u09A6\u09C7\u09A8 \u09A5\u09BE\u09AE\u09BE\u09A8!",limit:30,target:l,desc:()=>l.state==="busy"?`${l.nick} \u099F\u09C7\u09A8\u09CD\u09A1\u09BE\u09B0\u09C7\u09B0 \u09AC\u09CD\u09B0\u09BF\u09AB\u0995\u09C7\u09B8 \u09A6\u09BF\u099A\u09CD\u099B\u09C7 ${c.nick}-\u0995\u09C7\u0964 \u09B2\u09C7\u09A8\u09A6\u09C7\u09A8 \u09B6\u09C7\u09B7 \u09B9\u0993\u09AF\u09BC\u09BE\u09B0 \u0986\u0997\u09C7 \u09AA\u09CC\u0981\u099B\u09BE\u09A8!`:`\u09B2\u09C7\u09A8\u09A6\u09C7\u09A8 \u09AD\u09C7\u09B8\u09CD\u09A4\u09C7 \u0997\u09C7\u099B\u09C7! \u098F\u09AC\u09BE\u09B0 ${l.nick}-\u0995\u09C7 \u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0 \u0995\u09B0\u09C1\u09A8`,update(){return l.state==="ko"?(Rt(n,"mission",{id:"bribe",ok:!0,nick:l.nick,officer:c.nick,place:u}),[!0,"\u099F\u09C7\u09A8\u09CD\u09A1\u09BE\u09B0\u09C7\u09B0 \u09AC\u09CD\u09B0\u09BF\u09AB\u0995\u09C7\u09B8 \u099C\u09AC\u09CD\u09A6! \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u098F\u09AC\u09BE\u09B0 \u09AE\u09BE\u09A4\u09CD\u09B0 \u098F\u0995\u09AC\u09BE\u09B0 \u0996\u09CB\u0981\u09A1\u09BC\u09BE \u09B9\u09AC\u09C7"]):(l.state!=="busy"&&(this.limit=1/0),this.t>this.limit?(l.remove=!0,c.state==="busy"&&(c.remove=!0),n.stats.bribesDone++,Rt(n,"mission",{id:"bribe",ok:!1,nick:l.nick,officer:c.nick,place:u}),[!1,`\u099F\u09C7\u09A8\u09CD\u09A1\u09BE\u09B0 \u09AA\u09BE\u09B8! ${u?u+"-\u098F\u09B0 \u09B8\u09BE\u09AE\u09A8\u09C7\u09B0 ":""}\u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u0986\u0997\u09BE\u09AE\u09C0 \u09AE\u09BE\u09B8\u09C7 \u0986\u09AC\u09BE\u09B0 \u0996\u09CB\u0981\u09A1\u09BC\u09BE \u09B9\u09AC\u09C7`]):null)}}}};return e.reset=()=>{e.active&&e.active.cleanup&&e.active.cleanup(),e.active=null,e.cooldown=le(22,30),e.last=null},e.update=s=>{let r=n.player;if(r.state==="dead")return;if(!e.active){if(!n.waveActive||(e.cooldown-=s,e.cooldown>0))return;let l=r.z>-Ie.len+140?-1:1,c=Te(Object.keys(i).filter(h=>h!==e.last));e.last=c;let u=i[c](l);u.t=0,e.active=u,n.hud.banner("\u09A8\u09A4\u09C1\u09A8 \u09AE\u09BF\u09B6\u09A8",u.title,"mission"),n.audio.alarm();return}let a=e.active;a.t+=s;let o=a.update();o&&t(a,o[0],o[1])},e.info=()=>{let s=e.active;if(!s)return null;let r=s.limit===1/0?null:Math.max(0,s.limit-s.t);return{title:s.title,desc:s.desc(),left:r,frac:r===null?1:r/s.limit,target:s.target,secs:r===null?"":de(Math.ceil(r))}},e}var vl=class{constructor(){this.ctx=null,this.muted=!1,this.hornT=2}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.muted?0:.7,this.master.connect(t.destination);let i=t.sampleRate*2;this.noiseBuf=t.createBuffer(1,i,t.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let o=0;o<i;o++)s[o]=Math.random()*2-1;let r=t.createBufferSource();r.buffer=this.noiseBuf,r.loop=!0;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=380,this.ambGain=t.createGain(),this.ambGain.gain.value=.14,r.connect(a).connect(this.ambGain).connect(this.master),r.start()}setMuted(e){this.muted=e,this.master&&this.master.gain.setTargetAtTime(e?0:.7,this.ctx.currentTime,.05)}tone(e,t,i,s,r,a=0){let o=this.ctx;if(!o)return;let l=o.currentTime+a,c=o.createOscillator(),u=o.createGain();c.type=e,c.frequency.setValueAtTime(t,l),i!==t&&c.frequency.exponentialRampToValueAtTime(Math.max(20,i),l+s),u.gain.setValueAtTime(r,l),u.gain.exponentialRampToValueAtTime(1e-4,l+s),c.connect(u).connect(this.master),c.start(l),c.stop(l+s+.02)}noise(e,t,i,s=1,r="bandpass",a=0,o){let l=this.ctx;if(!l)return;let c=l.currentTime+a,u=l.createBufferSource();u.buffer=this.noiseBuf;let h=l.createBiquadFilter();h.type=r,h.frequency.setValueAtTime(i,c),o&&h.frequency.exponentialRampToValueAtTime(o,c+e),h.Q.value=s;let d=l.createGain();d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(t,c+Math.min(.02,e/4)),d.gain.exponentialRampToValueAtTime(1e-4,c+e),u.connect(h).connect(d).connect(this.master),u.start(c,Math.random()),u.stop(c+e+.05)}swing(){this.noise(.14,.18,900,.8,"bandpass",0,2600)}punch(e){this.tone("sine",e?140:190,50,e?.22:.14,e?.7:.5),this.noise(e?.12:.08,e?.6:.4,e?700:1100,.7)}hurt(){this.tone("square",220,120,.18,.12),this.tone("sine",110,60,.25,.5)}thud(){this.tone("sine",90,35,.35,.8),this.noise(.25,.35,300,.6,"lowpass")}crash(){this.noise(.5,.9,500,.5,"lowpass"),this.tone("sawtooth",160,40,.4,.25)}horn(e){if(this.ctx)if(e==="bus")this.tone("sawtooth",311,311,.55,.09),this.tone("sawtooth",392,392,.55,.07);else if(e==="rickshaw")for(let t=0;t<3;t++)this.tone("triangle",2400,2300,.06,.08,t*.09);else this.tone("square",640,640,.12,.06),this.tone("square",640,640,.14,.06,.17)}cheer(e){let t=e?6:3;for(let i=0;i<t;i++)this.noise(e?1.4:.9,e?.22:.12,900+Math.random()*900,1.2,"bandpass",i*.05)}roar(){this.noise(1.6,.5,400,.6,"lowpass",0,1800),this.tone("sawtooth",70,140,.9,.18),this.cheer(!0)}coin(){this.tone("square",988,988,.08,.1),this.tone("square",1319,1319,.16,.1,.08)}sip(){this.noise(.12,.08,2e3,2,"bandpass")}throwS(){this.noise(.18,.2,1400,1,"bandpass",0,600)}pickup(){this.tone("triangle",660,660,.08,.15),this.tone("triangle",880,880,.12,.15,.07)}wave(){[523,659,784].forEach((e,t)=>this.tone("triangle",e,e,.18,.18,t*.11))}alarm(){this.tone("square",440,440,.12,.08),this.tone("square",330,330,.18,.08,.14)}thunder(){this.noise(2.4,.7,180,.5,"lowpass",.15,60),this.noise(.4,.4,900,.5,"lowpass")}setRain(e){if(this.ctx){if(!this.rainGain){let t=this.ctx.createBufferSource();t.buffer=this.noiseBuf,t.loop=!0;let i=this.ctx.createBiquadFilter();i.type="highpass",i.frequency.value=1400,this.rainGain=this.ctx.createGain(),this.rainGain.gain.value=0,t.connect(i).connect(this.rainGain).connect(this.master),t.start()}this.rainGain.gain.setTargetAtTime(e*.22,this.ctx.currentTime,.4)}}bell(){for(let e=0;e<6;e++)this.tone("triangle",2600,2500,.07,.1,e*.07)}splash(){this.noise(.3,.25,700,.8,"bandpass",0,300)}lose(){[392,330,262,196].forEach((e,t)=>this.tone("triangle",e,e*.98,.3,.18,t*.22))}update(e,t){if(this.ctx){if(this.hornT-=e,this.hornT<=0){this.hornT=1.5+Math.random()*4;let i=Math.random();if(this.master.gain.value>0){let r=i<.35?"bus":i<.65?"rickshaw":"cng",a=this.ctx.createGain();a.gain.value=.35;let o=this.master;this.master=a,a.connect(o),this.horn(r),this.master=o}}this.ambGain.gain.setTargetAtTime(t?.14:.09,this.ctx.currentTime,.3)}}};var Rf={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"},zy={KeyJ:"punch",Space:"punch",KeyK:"kick",KeyF:"throw",KeyL:"dodge",ShiftLeft:"dodge",ShiftRight:"dodge",KeyE:"special",KeyG:"use",KeyP:"pause",Escape:"pause",KeyM:"mute",Enter:"confirm"},Ml=class{constructor(){this.held=new Set,this.queue=[],this.stick={x:0,y:0,active:!1},window.addEventListener("keydown",e=>{if(e.target instanceof HTMLInputElement)return;let t=Rf[e.code],i=zy[e.code];(t||i)&&e.preventDefault(),t&&this.held.add(t),i&&!e.repeat&&this.queue.push(i)}),window.addEventListener("keyup",e=>{let t=Rf[e.code];t&&this.held.delete(t)}),window.addEventListener("blur",()=>this.held.clear()),this.bindTouch()}bindTouch(){let e=document.getElementById("stickPad"),t=document.getElementById("stickKnob");if(e){let i=null,s=0,r=0,a=52,o=c=>{let u=c.clientX-s,h=c.clientY-r,d=Math.hypot(u,h)||1,f=Math.min(1,d/a);this.stick.x=u/d*f,this.stick.y=h/d*f,t.style.transform=`translate(${this.stick.x*a}px, ${this.stick.y*a}px)`};e.addEventListener("pointerdown",c=>{i=c.pointerId,e.setPointerCapture(i);let u=e.getBoundingClientRect();s=u.left+u.width/2,r=u.top+u.height/2,this.stick.active=!0,o(c)}),e.addEventListener("pointermove",c=>{c.pointerId===i&&o(c)});let l=c=>{c.pointerId===i&&(i=null,this.stick.x=this.stick.y=0,this.stick.active=!1,t.style.transform="")};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l)}document.querySelectorAll("[data-act]").forEach(i=>{i.addEventListener("pointerdown",r=>{r.preventDefault(),this.queue.push(i.dataset.act),i.classList.add("down")});let s=()=>i.classList.remove("down");i.addEventListener("pointerup",s),i.addEventListener("pointerleave",s)})}axis(){let e=(this.held.has("right")?1:0)-(this.held.has("left")?1:0),t=(this.held.has("down")?1:0)-(this.held.has("up")?1:0);this.stick.active&&(e=this.stick.x,t=this.stick.y);let i=Math.hypot(e,t);return i>1&&(e/=i,t/=i),{x:e,y:t}}take(){let e=this.queue;return this.queue=[],e}};var Je=n=>document.getElementById(n),ra=new B,bl=class{constructor(e){this.camera=e,this.layer=Je("labels"),this.labels=new Map,this.bubbles=new Map,this.pops=[],this.moneyShown=0,this.hintText="",this.mini=Je("minimap"),this.mg=this.mini.getContext("2d"),this.track=Je("tickerTrack"),this.tickerX=0,this.queue=[],this.pool=kd.slice().sort(()=>Math.random()-.5),this.poolIdx=0;for(let t=0;t<4;t++)this.addHeadline(this.nextHeadline());this.toastT=0,this.bannerT=0}show(e){if(Je("hud").classList.toggle("hidden",!e),Je("touch").classList.toggle("hidden",!e),!e){for(let t of this.labels.values())t.el.remove();this.labels.clear();for(let t of this.bubbles.values())t.el.remove();this.bubbles.clear();for(let t of this.pops)t.el.remove();this.pops.length=0,this.blindT=0,Je("blind").classList.remove("on")}}project(e,t,i){ra.set(e,t,i).project(this.camera);let s=window.innerWidth,r=window.innerHeight;return{x:(ra.x*.5+.5)*s,y:(-ra.y*.5+.5)*r,ok:ra.z<1&&ra.z>-1}}addLabel(e){let t=document.createElement("div");t.className="tag"+(e.boss?" boss":""),t.innerHTML=`<b>${e.nick}</b><small>${e.key==="copy"?Gn.prosno.name:e.type.name}</small><i><s></s></i>`,this.layer.appendChild(t),this.labels.set(e.id,{el:t,bar:t.querySelector("s"),f:e})}removeLabel(e){let t=this.labels.get(e.id);t&&(t.el.remove(),this.labels.delete(e.id))}bubble(e,t){let i=this.bubbles.get(e.id);if(!i){let s=document.createElement("div");s.className="bubble",this.layer.appendChild(s),i={el:s,a:e},this.bubbles.set(e.id,i)}i.el.textContent=t,i.el.classList.toggle("foe",!!e.isFoe),i.t=2.4}removeBubble(e){let t=this.bubbles.get(e.id);t&&(t.el.remove(),this.bubbles.delete(e.id))}pop(e,t,i,s,r=""){let a=document.createElement("div");a.className="pop "+r,a.textContent=e,this.layer.appendChild(a),this.pops.push({el:a,x:t,y:i,z:s,t:0,dx:(Math.random()-.5)*30})}toast(e,t=""){let i=Je("toast");i.textContent=e,i.className="toast show "+t,this.toastT=2.2}banner(e,t,i=""){let s=Je("banner");Je("bannerTitle").textContent=e,Je("bannerSub").textContent=t,s.className="banner show "+i,this.bannerT=2.6}hint(e){this.hintText=e}blind(e){this.blindT=Math.max(this.blindT||0,e);let t=Je("blind");if(!t.children.length){let i=["\u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09AA\u09A4\u09CD\u09B0","\u09E7\u09E6\u09E6% \u0995\u09AE\u09A8","\u09B8\u09BE\u099C\u09C7\u09B6\u09A8","\u09AB\u09BE\u0981\u09B8!","MCQ","\u0989\u09A4\u09CD\u09A4\u09B0\u09AE\u09BE\u09B2\u09BE","\u0997\u09CB\u09AA\u09A8\u09C0\u09AF\u09BC"];for(let s=0;s<14;s++){let r=document.createElement("span");r.textContent=i[s%i.length],r.style.left=s*37%92+"%",r.style.top=s*53%86+"%",r.style.transform=`rotate(${s*47%50-25}deg)`,t.appendChild(r)}}t.classList.add("on")}flash(){let e=Je("flash");e.classList.remove("on"),e.offsetWidth,e.classList.add("on")}nextHeadline(){return this.queue.length?this.queue.shift():this.pool[this.poolIdx++%this.pool.length]}addHeadline(e){let t=document.createElement("span");t.textContent=e,this.track.appendChild(t)}news(e){this.queue.push("\u098F\u0987\u09AE\u09BE\u09A4\u09CD\u09B0: "+e)}event(e,t){let i=e.nick;if(t==="ko"){let r={chanda:[`\u099A\u09BE\u0981\u09A6\u09BE\u09AC\u09BE\u099C ${i} \u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0, \u09A6\u09CB\u0995\u09BE\u09A8\u09BF\u09B0\u09BE \u09AB\u09C7\u09B0\u09A4 \u09AA\u09C7\u09B2\u09C7\u09A8 ${Zt(e.loot)}`,`"\u09AE\u09BE\u09B8\u09C7\u09B0 \u099F\u09BE\u0995\u09BE \u0995\u0987?" \u099C\u09BF\u099C\u09CD\u099E\u09C7\u09B8 \u0995\u09B0\u09C7 \u09AE\u09BE\u09B8\u09C7\u09B0 \u09B8\u09C7\u09B0\u09BE \u09AE\u09BE\u09B0 \u0996\u09C7\u09B2\u09C7\u09A8 ${i}`],ghush:[`${i}-\u098F\u09B0 \u099F\u09C7\u09AC\u09BF\u09B2 \u09A5\u09C7\u0995\u09C7 ${Zt(e.loot)} \u0989\u09A6\u09CD\u09A7\u09BE\u09B0, \u09AB\u09BE\u0987\u09B2 \u09A8\u09A1\u09BC\u09B2 \u09A8\u09BF\u09AF\u09BC\u09AE\u09C7`,`"\u0995\u09BE\u09B2 \u0986\u09B8\u09C7\u09A8" \u09AC\u09B2\u09A4\u09C7\u09A8 ${i}, \u0986\u099C \u09A8\u09BF\u099C\u09C7\u0987 \u0986\u09B0 \u0989\u09A0\u09A4\u09C7 \u09AA\u09BE\u09B0\u099B\u09C7\u09A8 \u09A8\u09BE`],mastan:[`\u09B2\u09BE\u09A0\u09BF \u09B9\u09BE\u09A4\u09C7 ${i} \u098F\u0996\u09A8 \u09AB\u09C1\u099F\u09AA\u09BE\u09A4\u09C7 \u099A\u09BF\u09CE\u09AA\u099F\u09BE\u0982`,`"\u099A\u09BF\u09A8\u09B8 \u0986\u09AE\u09BE\u09B0\u09C7?" \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u099C\u09AC\u09BE\u09AC\u09C7 ${i}-\u0995\u09C7 \u099A\u09BF\u09A8\u09C7 \u09A8\u09BF\u09B2 \u099C\u09A8\u09A4\u09BE`],syndicate:[`${i}-\u098F\u09B0 \u0997\u09C1\u09A6\u09BE\u09AE \u0996\u09C1\u09B2\u09B2 \u099C\u09A8\u09A4\u09BE, \u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C\u09C7\u09B0 \u09A6\u09BE\u09AE \u09A8\u09BE\u09AE\u09B2`,`\u09B8\u09BF\u09A8\u09CD\u09A1\u09BF\u0995\u09C7\u099F \u09AC\u09B2\u09C7 \u0995\u09BF\u099B\u09C1 \u09A8\u09C7\u0987 \u09AC\u09B2\u09C7\u099B\u09BF\u09B2\u09C7\u09A8 ${i}, \u098F\u0996\u09A8 \u09A4\u09BF\u09A8\u09BF\u0993 \u09A8\u09C7\u0987`],neta:[`"\u0986\u09AE\u09BF \u0995\u09C7 \u099C\u09BE\u09A8\u09BF\u09B8?" ${i}-\u098F\u09B0 \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09A6\u09BF\u09B2 \u099C\u09A8\u09A4\u09BE`,`\u09AB\u09BF\u09A4\u09BE \u0995\u09BE\u099F\u09A4\u09C7 \u098F\u09B8\u09C7 \u09A8\u09BF\u099C\u09C7\u0987 \u0995\u09BE\u099F\u09BE \u09AA\u09A1\u09BC\u09B2\u09C7\u09A8 ${i}`],bhumi:[`\u09A6\u0996\u09B2\u09A6\u09BE\u09B0 ${i} \u098F\u0996\u09A8 \u09A8\u09BF\u099C\u09C7\u0987 \u09AB\u09C1\u099F\u09AA\u09BE\u09A4\u09C7 "\u09A6\u0996\u09B2" \u09B9\u09AF\u09BC\u09C7 \u09B6\u09C1\u09AF\u09BC\u09C7 \u0986\u099B\u09C7\u09A8`,`${i}-\u098F\u09B0 \u09AC\u09C1\u09B2\u09A1\u09CB\u099C\u09BE\u09B0 \u099C\u09AC\u09CD\u09A6, \u09A8\u09A6\u09C0 \u09AB\u09C7\u09B0\u09A4 \u09AA\u09C7\u09B2 \u09A8\u09A6\u09C0`],vejal:[`${i}-\u098F\u09B0 \u099F\u09A8\u09BF\u0995\u09C7 \u0995\u09BE\u099C \u09B9\u09B2\u09CB \u09A8\u09BE, \u099C\u09A8\u09A4\u09BE\u09B0 \u0993\u09B7\u09C1\u09A7\u09C7\u0987 \u09B8\u09C7\u09B0\u09C7 \u0997\u09C7\u09B2\u09C7\u09A8`,`\u09AE\u09C7\u09AF\u09BC\u09BE\u09A6\u09CB\u09A4\u09CD\u09A4\u09C0\u09B0\u09CD\u09A3 \u0993\u09B7\u09C1\u09A7 \u09AC\u09BF\u0995\u09CD\u09B0\u09C7\u09A4\u09BE ${i}-\u098F\u09B0 \u09AE\u09C7\u09AF\u09BC\u09BE\u09A6\u0993 \u0986\u099C \u09B6\u09C7\u09B7`],prosno:[`\u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09AB\u09BE\u0981\u09B8\u0995\u09BE\u09B0\u09C0 ${i} \u09A7\u09B0\u09BE, \u0986\u09B8\u09B2 \u0995\u09AA\u09BF\u099F\u09BE \u099A\u09BF\u09A8\u09C7 \u09A8\u09BF\u09B2 \u099C\u09A8\u09A4\u09BE`,`${i}-\u098F\u09B0 \u09B8\u09BE\u099C\u09C7\u09B6\u09A8 \u09E7\u09E6\u09E6% \u0995\u09AE\u09A8 \u09AA\u09A1\u09BC\u09C7\u09A8\u09BF, \u09AE\u09BE\u09B0 \u09AA\u09A1\u09BC\u09C7\u099B\u09C7`],pocket:[`\u09AA\u0995\u09C7\u099F\u09AE\u09BE\u09B0 ${i} \u09A7\u09B0\u09BE, \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09AB\u09BF\u09B0\u09B2 \u09AE\u09BE\u09B2\u09BF\u0995\u09C7\u09B0 \u09AA\u0995\u09C7\u099F\u09C7`],thikadar:[`\u099F\u09C7\u09A8\u09CD\u09A1\u09BE\u09B0\u09AC\u09BE\u099C ${i}-\u098F\u09B0 \u09AC\u09CD\u09B0\u09BF\u09AB\u0995\u09C7\u09B8 \u099C\u09AC\u09CD\u09A6, \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u098F\u0995\u09AC\u09BE\u09B0\u0987 \u0996\u09CB\u0981\u09A1\u09BC\u09BE \u09B9\u09AC\u09C7`]}[e.key];this.news(r?r[Math.random()*r.length|0]:`${i} \u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0`)}else t==="extorted"&&(this.news(`${i} \u09A6\u09CB\u0995\u09BE\u09A8\u09BF\u09B0 \u0995\u09BE\u099B \u09A5\u09C7\u0995\u09C7 \u099A\u09BE\u0981\u09A6\u09BE \u09A8\u09BF\u09AF\u09BC\u09C7 \u0997\u09C7\u09B2; \u099C\u09A8\u09A4\u09BE \u0995\u09CB\u09A5\u09BE\u09AF\u09BC?`),this.toast("\u099A\u09BE\u0981\u09A6\u09BE\u09AC\u09BE\u099C\u09BF \u09B9\u09AF\u09BC\u09C7 \u0997\u09C7\u09B2! \u09A6\u09CD\u09B0\u09C1\u09A4 \u09A5\u09BE\u09AE\u09BE\u09A8","warn"))}update(e,t){let i=e.player;this.moneyShown+=(e.money-this.moneyShown)*Math.min(1,t*6),Math.abs(e.money-this.moneyShown)<1&&(this.moneyShown=e.money),Je("hMoney").textContent=Zt(this.moneyShown),Je("hKos").textContent=de(e.kos),Je("hWave").textContent=de(e.wave);let s=Math.max(0,i.hp/i.maxHp);Je("hHpFill").style.width=s*100+"%",Je("hHpText").textContent=de(Math.ceil(s*100))+"%",Je("hHp").classList.toggle("low",s<.3),Je("hPowerFill").style.width=i.special*100+"%",Je("hPower").classList.toggle("ready",i.special>=1),Je("hSandals").textContent="\xD7"+de(i.sandals),Je("hSandalWrap").classList.toggle("empty",i.sandals===0),Je("hPowerName").textContent=i.hero.special.name;let r=Je("hWeapon");r.classList.toggle("hidden",!i.weapon),i.weapon&&(r.textContent=`${i.weapon.kind==="broom"?"\u{1F9F9}":"\u{1FAB5}"} ${qs[i.weapon.kind].name} \xD7${de(i.weapon.uses)}`);let a=Je("hFollowers");a.classList.toggle("hidden",!e.followers.length),e.followers.length&&(a.textContent=`\u{1F465} \u09A6\u09B2\u09C7 ${de(e.followers.length)} \u099C\u09A8`),Je("hClock").textContent=e.weather.label(),Je("hClock").classList.toggle("night",e.weather.nightK>.5),this.blindT>0&&(this.blindT-=t,this.blindT<=0&&Je("blind").classList.remove("on"));let o=e.missions.info(),l=Je("mission");if(l.classList.toggle("hidden",!o),o){Je("mTitle").textContent=o.title,Je("mDesc").textContent=o.desc;let h=o.target,d=Math.hypot(h.x-i.x,h.z-i.z),f=Math.abs(h.z-i.z)>Math.abs(h.x-i.x)*.8?h.z<i.z?"\u09B8\u09BE\u09AE\u09A8\u09C7":"\u09AA\u09C7\u099B\u09A8\u09C7":h.x>i.x?"\u09A1\u09BE\u09A8\u09C7":"\u09AC\u09BE\u0981\u09AF\u09BC\u09C7";Je("mDist").textContent=d<5?"\u098F\u0995\u09A6\u09AE \u0995\u09BE\u099B\u09C7":`${de(Math.round(d))} \u09AE\u09BF ${f}`,Je("mTime").textContent=o.secs?o.secs+" \u09B8\u09C7":"",Je("mFill").style.width=o.frac*100+"%",l.classList.toggle("urgent",o.left!==null&&o.left<8)}let c=Je("combo");e.combo>=3&&e.comboT>0?(c.classList.add("show"),c.firstElementChild.textContent=de(e.combo)):c.classList.remove("show");let u=Je("hint");u.textContent=this.hintText,u.classList.toggle("show",!!this.hintText),this.hintText="",this.toastT-=t,this.toastT<=0&&Je("toast").classList.remove("show"),this.bannerT-=t,this.bannerT<=0&&Je("banner").classList.remove("show"),this.objective(e),this.drawMinimap(e),this.overlay(t),this.ticker(t)}objective(e){let t=e.player,i=null,s=1/0,r="";for(let h of e.foes){if(h.state==="ko")continue;let d=Math.hypot(h.x-t.x,h.z-t.z);h.key==="chanda"&&h.state==="busy"&&(d*=.6),d<s&&(s=d,i=h)}let a=Je("objective");if(!i){r=e.waveClearT>0?"\u09AA\u09B0\u09C7\u09B0 \u09A6\u09AB\u09BE \u0986\u09B8\u099B\u09C7...":"\u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u0986\u09AA\u09BE\u09A4\u09A4 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0",Je("objText").textContent=r,a.classList.add("calm");return}a.classList.remove("calm");let o=i.x-t.x,l=i.z-t.z,c=Math.abs(l)>Math.abs(o)*.8?l<0?"\u09B8\u09BE\u09AE\u09A8\u09C7":"\u09AA\u09C7\u099B\u09A8\u09C7":o>0?"\u09A1\u09BE\u09A8\u09C7":"\u09AC\u09BE\u0981\u09AF\u09BC\u09C7",u=i.key==="chanda"&&i.state==="busy"?"\u099A\u09BE\u0981\u09A6\u09BE\u09AC\u09BE\u099C\u09BF \u099A\u09B2\u099B\u09C7!":i.key==="ghush"&&i.state==="busy"?"\u0998\u09C1\u09B7 \u09B2\u09C7\u09A8\u09A6\u09C7\u09A8 \u099A\u09B2\u099B\u09C7!":i.nick;Je("objText").textContent=s<6?`${u} \xB7 \u098F\u0995\u09A6\u09AE \u0995\u09BE\u099B\u09C7`:`${u} \xB7 ${de(Math.round(s))} \u09AE\u09BF ${c}`,Je("objArrow").style.transform=`rotate(${Math.atan2(o,-l)}rad)`}drawMinimap(e){let t=this.mg,i=this.mini.width,s=this.mini.height,r=e.player,a=1.45;t.clearRect(0,0,i,s),t.save(),t.beginPath(),t.arc(i/2,s/2,i/2-2,0,Math.PI*2),t.clip(),t.fillStyle="#3b3a36",t.fillRect(0,0,i,s);let o=u=>i/2+(u-r.x)*a,l=u=>s/2+(u-r.z)*a;t.fillStyle="#6d6a62",t.fillRect(o(-19.5),0,39*a,s),t.fillStyle="#4a4a4f",t.fillRect(o(-12),0,24*a,s),t.fillStyle="#7a8a4f",t.fillRect(o(-1.1),0,2.2*a,s),t.fillStyle="#b8a98f",t.fillRect(0,0,o(-19.5),s),t.fillRect(o(19.5),0,i,s),t.fillStyle="#e03131";for(let u of[Ie.startZ,-Ie.len])t.fillRect(o(-19.5),l(u)-2,39*a,4);for(let u of e.world.teaStalls)Js(t,o(u.x),l(u.z),5,"#ffb31a");for(let u of e.world.sandalStalls)Js(t,o(u.x),l(u.z),5,u.cooldown>0?"#3b6b73":"#22b8cf");for(let u of e.traffic.list)t.fillStyle=u.parked?"#69db7c":u.T.danger?"#ff6b4a":"#adb5bd",t.fillRect(o(u.x)-u.T.w*a/2,l(u.z)-u.T.len*a/2,u.T.w*a,u.T.len*a);for(let u of e.pickups)Js(t,o(u.x),l(u.z),3.5,"#ffd43b");for(let u of e.followers)Js(t,o(u.x),l(u.z),3,"#74c0fc");let c=e.missions.active;if(c){let u=c.target,h=Cf(o(u.x),8,i-8),d=Cf(l(u.z),8,s-8);Js(t,h,d,6,"#9775fa","#fff")}for(let u of e.foes){if(u.state==="ko")continue;let h=u.state==="busy"||u.state==="escort";Js(t,o(u.x),l(u.z),u.boss?7:4.5,h?"#ff922b":"#ff2d2d","#fff")}t.translate(i/2,s/2),t.rotate(Math.PI-r.face),t.fillStyle="#ffd43b",t.strokeStyle="#1a1a1a",t.lineWidth=2,t.beginPath(),t.moveTo(0,-9),t.lineTo(6.5,7),t.lineTo(0,3.5),t.lineTo(-6.5,7),t.closePath(),t.fill(),t.stroke(),t.restore()}overlay(e){let t=i=>{i.style.display="none"};for(let i of this.labels.values()){let s=i.f;if(s.state==="ko"||s.state==="busy"&&Math.hypot(s.x-this.camera.position.x,s.z-this.camera.position.z)>40){t(i.el);continue}let r=this.project(s.x,s.y+s.model.height+.35,s.z),a=Math.hypot(s.x-this.camera.position.x,s.z-this.camera.position.z);if(!r.ok||a>55){t(i.el);continue}i.el.style.display="",i.el.style.transform=`translate(${r.x}px, ${r.y}px) translate(-50%, -100%)`,i.bar.style.width=Math.max(0,s.hp/s.maxHp)*100+"%",i.el.classList.toggle("busy",s.state==="busy"||s.state==="escort")}for(let[i,s]of this.bubbles){s.t-=e;let r=s.a;if(s.t<=0){s.el.remove(),this.bubbles.delete(i);continue}let a=this.project(r.x,r.y+r.model.height+(r.isFoe?.95:.45),r.z);if(!a.ok){t(s.el);continue}s.el.style.display="",s.el.style.opacity=Math.min(1,s.t*3),s.el.style.transform=`translate(${a.x}px, ${a.y}px) translate(-50%, -100%)`}for(let i=this.pops.length-1;i>=0;i--){let s=this.pops[i];if(s.t+=e,s.t>1){s.el.remove(),this.pops.splice(i,1);continue}let r=this.project(s.x,s.y,s.z);if(!r.ok){t(s.el);continue}s.el.style.display="";let a=s.t;s.el.style.opacity=a<.7?1:1-(a-.7)/.3;let o=a<.12?.6+a*5:1.2-Math.min(.2,a-.12);s.el.style.transform=`translate(${r.x+s.dx*a}px, ${r.y-a*60}px) translate(-50%, -50%) scale(${o})`}}ticker(e){this.tickerX-=70*e;let t=this.track.firstElementChild;t&&-this.tickerX>t.offsetWidth&&(this.tickerX+=t.offsetWidth,t.remove(),this.addHeadline(this.nextHeadline())),this.track.style.transform=`translateX(${this.tickerX}px)`}},Cf=(n,e,t)=>n<e?e:n>t?t:n;function Js(n,e,t,i,s,r){n.beginPath(),n.arc(e,t,i,0,Math.PI*2),n.fillStyle=s,n.fill(),r&&(n.strokeStyle=r,n.lineWidth=1.5,n.stroke())}var Hy=["\u099C\u09BE\u09A8\u09C1\u09AF\u09BC\u09BE\u09B0\u09BF","\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1\u09AF\u09BC\u09BE\u09B0\u09BF","\u09AE\u09BE\u09B0\u09CD\u099A","\u098F\u09AA\u09CD\u09B0\u09BF\u09B2","\u09AE\u09C7","\u099C\u09C1\u09A8","\u099C\u09C1\u09B2\u09BE\u0987","\u0986\u0997\u09B8\u09CD\u099F","\u09B8\u09C7\u09AA\u09CD\u099F\u09C7\u09AE\u09CD\u09AC\u09B0","\u0985\u0995\u09CD\u099F\u09CB\u09AC\u09B0","\u09A8\u09AD\u09C7\u09AE\u09CD\u09AC\u09B0","\u09A1\u09BF\u09B8\u09C7\u09AE\u09CD\u09AC\u09B0"],Vy=1/8;function uh(){return{kosBy:{},method:{},sandals:0,sandalHits:0,sandalKOs:0,tea:0,onions:0,pills:0,busHits:0,busKOs:0,maxCombo:0,powers:0,extortions:0,dodges:0,swings:0,hitsTaken:0,time:0,cause:"mastan",killer:null,rams:0,rides:0,rideDist:0,wrecks:0,stalls:0,weapons:0,followers:0,missionsOk:0,missionsFail:0,copies:0,copiesTorn:0,blinded:0,poisoned:0,tonicsBroken:0,dozers:0,dozerHits:0,kanned:0,kanKOs:0,bribesDone:0,wade:0,hero:"student",deathHour:16,deathRain:!1,deathPlace:null}}var aa=n=>n.slice().sort(()=>Math.random()-.5),oa=(n,e)=>aa(n).slice(0,e);var Xi=(n,e)=>n+Math.floor(Math.random()*(e-n+1)),hh=n=>de(n)+"%";function Wi(n){n=(n%24+24)%24;let e=Math.floor(n),t=e%12===0?12:e%12;return`${e<5?"\u09B0\u09BE\u09A4":e<12?"\u09B8\u0995\u09BE\u09B2":e<15?"\u09A6\u09C1\u09AA\u09C1\u09B0":e<18?"\u09AC\u09BF\u0995\u09C7\u09B2":e<20?"\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE":"\u09B0\u09BE\u09A4"} ${de(t)}\u099F\u09BE`}var Gy={student:"\u098F\u0995 \u099B\u09BE\u09A4\u09CD\u09B0",rickshaw:"\u098F\u0995 \u09B0\u09BF\u0995\u09B6\u09BE\u099A\u09BE\u09B2\u0995",aunty:"\u098F\u0995 \u0996\u09BE\u09B2\u09BE\u09AE\u09CD\u09AE\u09BE",teacher:"\u098F\u0995 \u0985\u09AC\u09B8\u09B0\u09AA\u09CD\u09B0\u09BE\u09AA\u09CD\u09A4 \u09B6\u09BF\u0995\u09CD\u09B7\u0995"},Wy={student:["\u09B9\u09B2\u09C7\u09B0 \u0995\u09CD\u09AF\u09BE\u09A8\u09CD\u099F\u09BF\u09A8\u09C7 \u09AC\u09BE\u0995\u09BF \u09B0\u09C7\u0996\u09C7 \u0986\u09B8\u09BE","\u099F\u09BF\u0989\u09B6\u09A8\u09BF \u09B6\u09C7\u09B7\u09C7 \u09AC\u09BE\u09B8\u09BE\u09AF\u09BC \u09AB\u09C7\u09B0\u09BE\u09B0 \u09AA\u09A5\u09C7 \u09A5\u09BE\u0995\u09BE","\u0985\u09CD\u09AF\u09BE\u09B8\u09BE\u0987\u09A8\u09AE\u09C7\u09A8\u09CD\u099F \u099C\u09AE\u09BE \u09A8\u09BE \u09A6\u09BF\u09AF\u09BC\u09C7 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC \u09A8\u09BE\u09AE\u09BE"],rickshaw:["\u09A6\u09BF\u09A8\u09C7 \u09A4\u09BF\u09A8\u09AC\u09BE\u09B0 \u09AD\u09BE\u09A1\u09BC\u09BE \u09A8\u09BF\u09AF\u09BC\u09C7 \u09A4\u09B0\u09CD\u0995 \u0995\u09B0\u09BE","\u0997\u09BE\u09AE\u099B\u09BE \u09AE\u09BE\u09A5\u09BE\u09AF\u09BC \u09AC\u09BE\u0981\u09A7\u09BE","\u09AC\u09BF\u09B6 \u09AC\u099B\u09B0 \u09A7\u09B0\u09C7 \u098F\u0995\u0987 \u09B0\u09BF\u0995\u09B6\u09BE \u099A\u09BE\u09B2\u09BE\u09A8\u09CB"],aunty:["\u09AC\u09BE\u099C\u09BE\u09B0\u09C7\u09B0 \u09AC\u09CD\u09AF\u09BE\u0997 \u09B9\u09BE\u09A4\u09C7 \u09A5\u09BE\u0995\u09BE","\u09A6\u09B0\u09A6\u09BE\u09AE \u0995\u09B0\u09A4\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC \u09A8\u09BE\u09AE\u09BE","\u099B\u09BE\u09A4\u09BE\u0995\u09C7 \u0985\u09B8\u09CD\u09A4\u09CD\u09B0 \u09AC\u09BE\u09A8\u09BE\u09A8\u09CB"],teacher:["\u099A\u09B2\u09CD\u09B2\u09BF\u09B6 \u09AC\u099B\u09B0 \u09AC\u09C7\u09A4 \u09B9\u09BE\u09A4\u09C7 \u0995\u09CD\u09B2\u09BE\u09B8 \u09A8\u09C7\u0993\u09AF\u09BC\u09BE","\u09AA\u09C7\u09A8\u09B6\u09A8\u09C7\u09B0 \u09AB\u09BE\u0987\u09B2 \u098F\u0996\u09A8\u09CB \u0986\u099F\u0995\u09C7 \u09A5\u09BE\u0995\u09BE","\u099B\u09BE\u09A4\u09CD\u09B0\u09A6\u09C7\u09B0 \u09A8\u09BE\u09AE \u098F\u0996\u09A8\u09CB \u09AD\u09C1\u09B2\u09C7 \u09A8\u09BE \u09AF\u09BE\u0993\u09AF\u09BC\u09BE"]},Pf={fist:"\u0996\u09BE\u09B2\u09BF \u09B9\u09BE\u09A4\u09C7",broom:"\u09A6\u09CB\u0995\u09BE\u09A8\u09BF\u09B0 \u099D\u09BE\u09A1\u09BC\u09C1 \u09A6\u09BF\u09AF\u09BC\u09C7",stick:"\u09AE\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8\u09C7\u09B0\u0987 \u09B2\u09BE\u09A0\u09BF \u09A6\u09BF\u09AF\u09BC\u09C7",sandal:"\u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7\u09B2 \u099B\u09C1\u09A1\u09BC\u09C7",ride:"\u09B0\u09BF\u0995\u09B6\u09BE-\u09B8\u09BF\u098F\u09A8\u099C\u09BF \u09A6\u09BF\u09AF\u09BC\u09C7 \u09A7\u09BE\u0995\u09CD\u0995\u09BE \u09AE\u09C7\u09B0\u09C7",traffic:"\u09AC\u09BE\u09B8\u09C7\u09B0 \u0985\u09A8\u09BF\u099A\u09CD\u099B\u09BE\u0995\u09C3\u09A4 \u09B8\u09B9\u09BE\u09AF\u09BC\u09A4\u09BE\u09AF\u09BC",dozer:"\u09A4\u09BE\u09A6\u09C7\u09B0\u0987 \u09AC\u09C1\u09B2\u09A1\u09CB\u099C\u09BE\u09B0 \u09A6\u09BF\u09AF\u09BC\u09C7",follower:"\u099C\u09A8\u09A4\u09BE\u09B0 \u0995\u09BF\u09B2\u0998\u09C1\u09B7\u09BF\u09A4\u09C7",special:"\u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09BE\u09AF\u09BC\u09A6\u09BE\u09AF\u09BC"};function Xy(n,e){let t=n.log||[],i=t.filter(h=>h.k==="ko"),s=i.filter(h=>h.boss),r=t.filter(h=>h.k==="recruit"),a=t.filter(h=>h.k==="mission"),o=t.filter(h=>h.k==="extort"),l=i.map(h=>h.place).filter(Boolean),c=Vi.find(h=>h.id===e.hero)||Vi[0],u=(e.deathHour??16)-e.time*Vy;return{log:t,kos:i,bosses:s,recruits:r,missions:a,extorts:o,places:l,hero:c,first:i[0],last:i[i.length-1],names:r.map(h=>h.name),rain:t.some(h=>h.k==="rain"),flood:t.some(h=>h.k==="flood"),shed:t.some(h=>h.k==="shed"),night:i.some(h=>h.hour>=19||h.hour<5)||e.deathHour>=19||e.deathHour<5,startHour:u,endHour:e.deathHour??16,noun:Gy[c.id],nicks:i.map(h=>h.nick),boss:s[0]||null,bossSeen:t.find(h=>h.k==="boss")||null}}function $y(n,e,t){let i=[],s=(h,d)=>i.push({w:h,t:Te(d)}),r=t.boss;if(r){let h=r.nick,d={neta:[`"\u0986\u09AE\u09BF \u0995\u09C7 \u099C\u09BE\u09A8\u09BF\u09B8?" \u099C\u09BE\u09A8\u09A4\u09C7 \u099A\u09BE\u0987\u09B2\u09C7\u09A8 ${h}, \u0989\u09A4\u09CD\u09A4\u09B0 \u09A6\u09BF\u09B2 \u099C\u09A8\u09A4\u09BE`,`\u09AB\u09BF\u09A4\u09BE \u0995\u09BE\u099F\u09A4\u09C7 \u098F\u09B8\u09C7 \u09A8\u09BF\u099C\u09C7\u0987 \u0995\u09BE\u099F\u09BE \u09AA\u09A1\u09BC\u09B2\u09C7\u09A8 ${h}`,`${h}-\u098F\u09B0 \u09AD\u09BE\u09B7\u09A3 \u09B6\u09C7\u09B7 \u09B9\u0993\u09AF\u09BC\u09BE\u09B0 \u0986\u0997\u09C7\u0987 \u09B6\u09C7\u09B7 ${h}`],bhumi:[`\u09A8\u09A6\u09C0, \u09AE\u09BE\u09A0, \u09AB\u09C1\u099F\u09AA\u09BE\u09A4 \u09A6\u0996\u09B2\u09C7\u09B0 \u09AA\u09B0 ${h} \u098F\u09AC\u09BE\u09B0 \u09A6\u0996\u09B2 \u09B9\u09B2\u09C7\u09A8 \u09B9\u09BE\u09B8\u09AA\u09BE\u09A4\u09BE\u09B2\u09C7\u09B0 \u09AC\u09C7\u09A1\u09C7`,`${h}-\u098F\u09B0 \u09AC\u09C1\u09B2\u09A1\u09CB\u099C\u09BE\u09B0 \u09AB\u09C7\u09B0\u09A4 \u0997\u09C7\u09B2 \u09AD\u09BE\u09A1\u09BC\u09BE\u09B0 \u09A6\u09CB\u0995\u09BE\u09A8\u09C7`,`"\u098F\u0987 \u099C\u09AE\u09BF \u0986\u09AE\u09BE\u09B0" \u09AC\u09B2\u09C7\u099B\u09BF\u09B2\u09C7\u09A8 ${h}, \u099C\u09AE\u09BF\u0987 \u098F\u0996\u09A8 \u09A4\u09BE\u0981\u09B0 \u0993\u09AA\u09B0`],vejal:[`${h}-\u098F\u09B0 \u099F\u09A8\u09BF\u0995\u09C7 \u0995\u09BE\u099C \u09B9\u09B2\u09CB \u09A8\u09BE, \u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0 "\u09B8\u09AC \u09B0\u09CB\u0997\u09C7\u09B0 \u09A1\u09BE\u0995\u09CD\u09A4\u09BE\u09B0"`,`\u09AE\u09C7\u09AF\u09BC\u09BE\u09A6\u09CB\u09A4\u09CD\u09A4\u09C0\u09B0\u09CD\u09A3 \u0993\u09B7\u09C1\u09A7 \u09AC\u09BF\u0995\u09CD\u09B0\u09C7\u09A4\u09BE ${h}-\u098F\u09B0 \u09AE\u09C7\u09AF\u09BC\u09BE\u09A6 \u0986\u099C \u09B6\u09C7\u09B7`,`\u099A\u0995\u09C7\u09B0 \u0997\u09C1\u0981\u09A1\u09BC\u09BE\u09B0 \u09AC\u09A1\u09BC\u09BF \u0996\u09BE\u0987\u09AF\u09BC\u09C7 \u0985\u09AC\u09B6\u09C7\u09B7\u09C7 \u09A8\u09BF\u099C\u09C7\u0987 \u099A\u0995 \u09B9\u09B2\u09C7\u09A8 ${h}`],prosno:[`\u09E7\u09E6\u09E6% \u0995\u09AE\u09A8 \u09B8\u09BE\u099C\u09C7\u09B6\u09A8 \u09A6\u09C7\u0993\u09AF\u09BC\u09BE ${h}-\u098F\u09B0 \u09A8\u09BF\u099C\u09C7\u09B0 \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8 \u0986\u099C \u0995\u09AE\u09A8 \u09AA\u09A1\u09BC\u09B2 \u09A8\u09BE`,`\u09AB\u099F\u09CB\u0995\u09AA\u09BF\u09B0 \u09AD\u09BF\u09A1\u09BC\u09C7\u0993 \u0986\u09B8\u09B2 ${h}-\u0995\u09C7 \u099A\u09BF\u09A8\u09C7 \u09AB\u09C7\u09B2\u09B2 \u099C\u09A8\u09A4\u09BE`,`\u09AA\u09CD\u09B0\u09B6\u09CD\u09A8 \u09AB\u09BE\u0981\u09B8 \u0995\u09B0\u09A4\u09C7\u09A8 ${h}, \u0986\u099C \u09AB\u09BE\u0981\u09B8 \u09B9\u09B2\u09CB \u09A4\u09BE\u0981\u09B0 \u09A6\u09CC\u09A1\u09BC\u09C7\u09B0 \u09B0\u09C7\u0995\u09B0\u09CD\u09A1`]};s(10,d[r.key]||[`${h} \u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0!`])}let a=e.kanKOs+e.kanned;e.hero==="teacher"&&e.kanned>=3&&s(7,[`${de(e.kanned)} \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C\u0995\u09C7 \u0995\u09BE\u09A8 \u09A7\u09B0\u09C7 \u0989\u09A0\u09AC\u09B8 \u0995\u09B0\u09BE\u09B2\u09C7\u09A8 \u0985\u09AC\u09B8\u09B0\u09AA\u09CD\u09B0\u09BE\u09AA\u09CD\u09A4 \u09B6\u09BF\u0995\u09CD\u09B7\u0995`,`"\u09B8\u09CD\u09AF\u09BE\u09B0, \u0986\u09B0 \u0995\u09B0\u09AC \u09A8\u09BE!" \u09B0\u09BE\u099C\u09A7\u09BE\u09A8\u09C0\u09B0 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC \u098F\u0995\u09B8\u09BE\u09A5\u09C7 \u09AC\u09B2\u09B2\u09C7\u09A8 ${de(e.kanned)} \u099C\u09A8`]),e.hero==="aunty"&&n.kos>=3&&s(5,["\u0996\u09BE\u09B2\u09BE\u09AE\u09CD\u09AE\u09BE\u09B0 \u099B\u09BE\u09A4\u09BE\u09B0 \u09B8\u09BE\u09AE\u09A8\u09C7 \u099F\u09BF\u0995\u09B2 \u09A8\u09BE \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF; \u0986\u09AC\u09B9\u09BE\u0993\u09AF\u09BC\u09BE \u0985\u09AB\u09BF\u09B8 \u09AC\u09B2\u099B\u09C7, \u099B\u09BE\u09A4\u09BE \u098F\u0996\u09A8 \u0985\u09B8\u09CD\u09A4\u09CD\u09B0",`\u09AC\u09BE\u099C\u09BE\u09B0\u09C7\u09B0 \u09AC\u09CD\u09AF\u09BE\u0997 \u098F\u0995 \u09B9\u09BE\u09A4\u09C7, \u099B\u09BE\u09A4\u09BE \u0986\u09B0\u09C7\u0995 \u09B9\u09BE\u09A4\u09C7: ${de(n.kos)} \u099C\u09A8 \u0995\u09BE\u09AC\u09C1`]),e.hero==="rickshaw"&&(e.method.ride||0)+(e.method.special||0)>=2&&s(6,['"\u09AC\u09C7\u09B2 \u09A4\u09CB \u09A6\u09BF\u09B8\u09BF\u09B2\u09BE\u09AE \u09AE\u09BE\u09AE\u09BE": \u09B0\u09BF\u0995\u09B6\u09BE\u099A\u09BE\u09B2\u0995\u09C7\u09B0 \u09A7\u09BE\u0995\u09CD\u0995\u09BE\u09AF\u09BC \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C\u09B0\u09BE \u099B\u09BF\u099F\u0995\u09C7 \u0997\u09C7\u09B2',"\u09B0\u09BF\u0995\u09B6\u09BE\u099A\u09BE\u09B2\u0995\u09C7\u09B0 \u0995\u09CD\u09B0\u09BF\u0982-\u0995\u09CD\u09B0\u09BF\u0982 \u09A4\u09C1\u09AB\u09BE\u09A8\u09C7 \u09AB\u09C1\u099F\u09AA\u09BE\u09A4 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0"]),t.names.length>=3&&s(6,[`${t.names.slice(0,2).join(", ")} \u09B8\u09B9 ${de(t.names.length)} \u099C\u09A8 \u09AF\u09CB\u0997 \u09A6\u09BF\u09B2\u09C7\u09A8 \u098F\u0995 \u09AA\u09A5\u099A\u09BE\u09B0\u09C0\u09B0 \u09AE\u09BF\u099B\u09BF\u09B2\u09C7`,`\u098F\u0995\u09BE \u09A8\u09BE\u09AE\u09B2\u09C7\u09A8, \u09AB\u09BF\u09B0\u09B2\u09C7\u09A8 ${de(t.names.length)} \u099C\u09A8\u09C7\u09B0 \u09A6\u09B2 \u09A8\u09BF\u09AF\u09BC\u09C7`]),(e.method.ride||0)>=2&&s(6,[`\u09B0\u09BF\u0995\u09B6\u09BE \u09A6\u09BF\u09AF\u09BC\u09C7 ${de(e.method.ride)} \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C\u0995\u09C7 \u09A7\u09BE\u0995\u09CD\u0995\u09BE; \u099F\u09CD\u09B0\u09BE\u09AB\u09BF\u0995 \u09AA\u09C1\u09B2\u09BF\u09B6 \u099C\u09B0\u09BF\u09AE\u09BE\u09A8\u09BE \u0995\u09B0\u09B2 \u09B0\u09BF\u0995\u09B6\u09BE\u0995\u09C7\u0987`,`"\u09AE\u09BF\u099F\u09BE\u09B0\u09C7 \u09AF\u09BE\u09AC\u09C7\u09A8?" \u099C\u09BF\u099C\u09CD\u099E\u09C7\u09B8 \u09A8\u09BE \u0995\u09B0\u09C7\u0987 ${de(e.method.ride)} \u099C\u09A8\u0995\u09C7 \u09AA\u09CC\u0981\u099B\u09C7 \u09A6\u09C7\u0993\u09AF\u09BC\u09BE \u09B9\u09B2\u09CB \u09B9\u09BE\u09B8\u09AA\u09BE\u09A4\u09BE\u09B2\u09C7`]),(e.method.broom||0)>=2&&s(6,["\u099D\u09BE\u09A1\u09BC\u09C1 \u09B9\u09BE\u09A4\u09C7 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0! \u0995\u09C3\u09A4\u09BF\u09A4\u09CD\u09AC \u09A6\u09BE\u09AC\u09BF \u0995\u09B0\u09B2 \u09B8\u09BF\u099F\u09BF \u0995\u09B0\u09CD\u09AA\u09CB\u09B0\u09C7\u09B6\u09A8",`\u09A6\u09CB\u0995\u09BE\u09A8\u09BF\u09B0 \u099D\u09BE\u09A1\u09BC\u09C1\u09A4\u09C7 ${de(e.method.broom)} \u099C\u09A8 \u09B8\u09BE\u09AB, \u099D\u09BE\u09A1\u09BC\u09C1\u09B0 \u09A6\u09BE\u09AE \u09AC\u09BE\u09A1\u09BC\u09B2 \u09B0\u09BE\u09A4\u09BE\u09B0\u09BE\u09A4\u09BF`]),t.flood&&n.kos&&s(5,["\u09B9\u09BE\u0981\u099F\u09C1\u09AA\u09BE\u09A8\u09BF\u09A4\u09C7\u0993 \u09A5\u09BE\u09AE\u09C7\u09A8\u09BF \u09B2\u09A1\u09BC\u09BE\u0987; \u09A8\u09CC\u0995\u09BE \u09A8\u09BF\u09AF\u09BC\u09C7 \u0998\u099F\u09A8\u09BE\u09B8\u09CD\u09A5\u09B2\u09C7 \u09AA\u09CC\u0981\u099B\u09BE\u09B2 \u09AA\u09C1\u09B2\u09BF\u09B6, \u09A6\u09C1\u0987 \u0998\u09A3\u09CD\u099F\u09BE \u09AA\u09B0","\u099C\u09B2\u09BE\u09AC\u09A6\u09CD\u09A7 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C\u09A6\u09C7\u09B0 \u09B9\u09BE\u09AC\u09C1\u09A1\u09C1\u09AC\u09C1, \u09A1\u09CD\u09B0\u09C7\u09A8\u09C7\u09B0 \u09A2\u09BE\u0995\u09A8\u09BE \u098F\u0996\u09A8\u09CB \u09A8\u09BF\u0996\u09CB\u0981\u099C"]),t.shed&&n.kos&&s(5,["\u09B2\u09CB\u09A1\u09B6\u09C7\u09A1\u09BF\u0982\u09AF\u09BC\u09C7\u09B0 \u0985\u09A8\u09CD\u09A7\u0995\u09BE\u09B0\u09C7\u0993 \u09B2\u0995\u09CD\u09B7\u09CD\u09AF\u09AD\u09CD\u09B0\u09B7\u09CD\u099F \u09B9\u09AF\u09BC\u09A8\u09BF \u099C\u09A8\u09A4\u09BE\u09B0 \u0998\u09C1\u09B7\u09BF","\u0995\u09BE\u09B0\u09C7\u09A8\u09CD\u099F \u0997\u09C7\u09B2, \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C\u09A6\u09C7\u09B0 \u09B9\u09C1\u0981\u09B6\u0993 \u0997\u09C7\u09B2"]),e.copiesTorn>=2&&s(5,[`${de(e.copiesTorn)}\u099F\u09BF \u09AB\u099F\u09CB\u0995\u09AA\u09BF \u099B\u09BF\u0981\u09A1\u09BC\u09B2 \u099C\u09A8\u09A4\u09BE, \u0986\u09B8\u09B2\u099F\u09BE \u09A4\u0996\u09A8 \u09AA\u09BE\u09B2\u09BE\u09A8\u09CB\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE\u09AF\u09BC`]),e.tonicsBroken&&s(4,["\u09AE\u09BE\u09B0\u09BE\u09AE\u09BE\u09B0\u09BF\u09B0 \u09AE\u09BE\u099D\u09C7 \u099F\u09A8\u09BF\u0995 \u0996\u09C7\u09A4\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7 \u09A7\u09B0\u09BE \u0996\u09C7\u09B2\u09C7\u09A8 \u09AD\u09C7\u099C\u09BE\u09B2 \u0993\u09B7\u09C1\u09A7 \u09AC\u09BF\u0995\u09CD\u09B0\u09C7\u09A4\u09BE"]);let o=t.missions.find(h=>h.id==="pocket"&&h.ok);o&&s(5,[`\u09AA\u0995\u09C7\u099F\u09AE\u09BE\u09B0 ${o.nick} \u09A7\u09B0\u09BE; ${o.name} \u09AB\u09C7\u09B0\u09A4 \u09AA\u09C7\u09B2\u09C7\u09A8 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u0986\u09B0 \u09EA\u09ED\u099F\u09BF \u09AE\u09BF\u09B8\u09A1 \u0995\u09B2`]);let l=t.missions.find(h=>h.id==="bribe");l&&l.ok&&s(6,[`\u099F\u09C7\u09A8\u09CD\u09A1\u09BE\u09B0\u09C7\u09B0 \u09AC\u09CD\u09B0\u09BF\u09AB\u0995\u09C7\u09B8\u09B8\u09B9 \u09A7\u09B0\u09BE ${l.nick}, \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u098F\u09AC\u09BE\u09B0 \u098F\u0995\u09AC\u09BE\u09B0\u0987 \u0996\u09CB\u0981\u09A1\u09BC\u09BE \u09B9\u09AC\u09C7`]),l&&!l.ok&&s(4,[`\u099C\u09A8\u09A4\u09BE \u09AA\u09CC\u0981\u099B\u09BE\u09A8\u09CB\u09B0 \u0986\u0997\u09C7\u0987 \u099F\u09C7\u09A8\u09CD\u09A1\u09BE\u09B0 \u09AA\u09BE\u09B8; ${l.place||"\u098F\u09B2\u09BE\u0995\u09BE\u09B0"} \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u0996\u09CB\u0981\u09A1\u09BC\u09BE \u09B9\u09AC\u09C7 \u0986\u09B0\u09CB \u09A4\u09BF\u09A8\u09AC\u09BE\u09B0`]);let c=t.missions.find(h=>h.id==="escort"&&h.ok);c&&s(4,[`\u09AA\u09A5\u099A\u09BE\u09B0\u09C0\u09B0 \u09AA\u09BE\u09B9\u09BE\u09B0\u09BE\u09AF\u09BC \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u09A6\u09BF\u09B2 ${c.name}; \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8 \u09AB\u09BE\u0981\u09B8 \u09B9\u09AF\u09BC\u09A8\u09BF \u09AC\u09B2\u09C7 \u09B9\u09A4\u09AC\u09BE\u0995 \u0985\u09AD\u09BF\u09AD\u09BE\u09AC\u0995\u09B0\u09BE`]),n.money>=1e7&&s(5,[`\u098F\u0995 \u09AC\u09C7\u09B2\u09BE\u09AF\u09BC ${Zt(n.money)} \u0989\u09A6\u09CD\u09A7\u09BE\u09B0! \u09A6\u09C1\u09A6\u0995 \u09AC\u09B2\u099B\u09C7, "\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09A6\u09B6 \u09AC\u099B\u09B0 \u09B2\u09BE\u0997\u09A4"`,`${Zt(n.money)} \u0989\u09A6\u09CD\u09A7\u09BE\u09B0; \u099F\u09BE\u0995\u09BE\u09B0 \u0997\u09A8\u09CD\u09A7\u09C7 \u0998\u099F\u09A8\u09BE\u09B8\u09CD\u09A5\u09B2\u09C7 \u09B9\u09BE\u099C\u09BF\u09B0 \u09A4\u09BF\u09A8\u099F\u09BF \u09A4\u09A6\u09A8\u09CD\u09A4 \u0995\u09AE\u09BF\u099F\u09BF`]),n.kos===0&&s(20,["\u09AA\u09A5\u099A\u09BE\u09B0\u09C0 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC \u09A8\u09BE\u09AE\u09B2\u09C7\u09A8, \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C\u09B0\u09BE \u099F\u09C7\u09B0\u0987 \u09AA\u09C7\u09B2 \u09A8\u09BE","\u09B0\u09C1\u0996\u09C7 \u09A6\u09BE\u0981\u09A1\u09BC\u09BE\u09A4\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7 \u09B6\u09C1\u09A7\u09C1 \u09A6\u09BE\u0981\u09A1\u09BC\u09BF\u09AF\u09BC\u09C7\u0987 \u09A5\u09BE\u0995\u09B2\u09C7\u09A8 \u098F\u0995 \u09AA\u09A5\u099A\u09BE\u09B0\u09C0","\u09B8\u09BE\u09B9\u09B8 \u099B\u09BF\u09B2, \u0998\u09C1\u09B7\u09BF \u099B\u09BF\u09B2 \u09A8\u09BE: \u098F\u0995 \u09AA\u09A5\u099A\u09BE\u09B0\u09C0\u09B0 \u099B\u09CB\u099F\u09CD\u099F \u0985\u09AD\u09BF\u09AF\u09BE\u09A8"]),t.first&&t.first.place&&s(3,[`${t.first.place}-\u098F\u09B0 \u09B8\u09BE\u09AE\u09A8\u09C7 \u09B6\u09C1\u09B0\u09C1, \u09A4\u09BE\u09B0\u09AA\u09B0 \u09AA\u09C1\u09B0\u09CB \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC \u099C\u09A8\u09A4\u09BE\u09B0 \u099C\u09AF\u09BC`]),s(2,[`\u0986\u09AE\u099C\u09A8\u09A4\u09BE\u09B0 \u09B9\u09BE\u09A4\u09C7 ${de(n.kos)} \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C \u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0, \u0989\u09A6\u09CD\u09A7\u09BE\u09B0 ${Zt(n.money)}`,`${t.noun}-\u098F\u09B0 \u0998\u09C1\u09B7\u09BF\u09A4\u09C7 ${de(n.kos)} \u099C\u09A8\u09C7\u09B0 "\u09B8\u09BF\u09B8\u09CD\u099F\u09C7\u09AE" \u09AC\u09A8\u09CD\u09A7`,`${de(n.kos)} \u099C\u09A8 \u0995\u09BE\u09AC\u09C1; \u09AC\u09BE\u0995\u09BF\u09B0\u09BE \u0986\u09AA\u09BE\u09A4\u09A4 "\u09A6\u09C7\u09B6\u09C7\u09B0 \u09AC\u09BE\u0987\u09B0\u09C7"`]);let u=Math.random()*i.reduce((h,d)=>h+d.w,0);for(let h of i)if(u-=h.w,u<=0)return h.t;return i[0].t}var If={bus:[n=>'\u09B6\u09C7\u09B7\u09AE\u09C7\u09B6 \u09B9\u09BE\u09B0 \u09AE\u09BE\u09A8\u09B2\u09C7\u09A8 \u098F\u0995 \u09B8\u09BF\u099F\u09BF\u0982 \u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8\u09C7\u09B0 \u0995\u09BE\u099B\u09C7\u0964 \u09AC\u09BE\u09B8 \u0995\u09B0\u09CD\u09A4\u09C3\u09AA\u0995\u09CD\u09B7 \u09AC\u09B2\u099B\u09C7, "\u09AC\u09CD\u09B0\u09C7\u0995 \u09A4\u09CB \u09AC\u09BF\u09B2\u09BE\u09B8\u09BF\u09A4\u09BE\u0964"',()=>'\u098F\u0995\u099F\u09BF \u09B2\u09CB\u0995\u09BE\u09B2 \u09AC\u09BE\u09B8 \u09A7\u09BE\u0995\u09CD\u0995\u09BE \u09A6\u09BF\u09AF\u09BC\u09C7 "\u09B8\u09BE\u09AE\u09A8\u09C7 \u0996\u09BE\u09B2\u09BF, \u09B8\u09BE\u09AE\u09A8\u09C7 \u0996\u09BE\u09B2\u09BF" \u09AC\u09B2\u09A4\u09C7 \u09AC\u09B2\u09A4\u09C7 \u099A\u09B2\u09C7 \u09AF\u09BE\u09AF\u09BC\u0964 \u09AC\u09BE\u09B8\u099F\u09BF \u098F\u0996\u09A8\u09CB \u09A5\u09BE\u09AE\u09C7\u09A8\u09BF\u0964'],truck:[()=>'\u098F\u0995\u099F\u09BF \u099F\u09CD\u09B0\u09BE\u0995 \u09A4\u09BE\u0981\u0995\u09C7 \u09A7\u09BE\u0995\u09CD\u0995\u09BE \u09A6\u09C7\u09AF\u09BC\u0964 \u09AA\u09C7\u099B\u09A8\u09C7 \u09B2\u09C7\u0996\u09BE \u099B\u09BF\u09B2 "\u09A7\u09C0\u09B0\u09C7 \u099A\u09B2\u09C1\u09A8", \u099A\u09BE\u09B2\u0995 \u09B2\u09C7\u0996\u09BE\u099F\u09BE \u09AA\u09A1\u09BC\u09C7\u09A8\u09A8\u09BF \u0995\u09BE\u09B0\u09A3 \u09B8\u09C7\u099F\u09BE \u09AA\u09C7\u099B\u09A8\u09C7\u0964'],cng:[()=>'\u098F\u0995\u099F\u09BF \u09B8\u09BF\u098F\u09A8\u099C\u09BF \u09A7\u09BE\u0995\u09CD\u0995\u09BE \u09A6\u09BF\u09AF\u09BC\u09C7 \u09AE\u09BF\u099F\u09BE\u09B0\u09C7 \u09AD\u09BE\u09A1\u09BC\u09BE \u09A4\u09C1\u09B2\u09B2 \u09F3\u09EB\u09E6\u09E6\u0964 \u099A\u09BE\u09B2\u0995 \u09AC\u09B2\u09B2\u09C7\u09A8, "\u09AE\u09BF\u099F\u09BE\u09B0\u09C7 \u09AF\u09BE\u0987 \u09A8\u09BE, \u09A7\u09BE\u0995\u09CD\u0995\u09BE \u09AE\u09BF\u099F\u09BE\u09B0\u09C7\u0987 \u09A6\u09BF\u0987\u0964"'],car:[()=>'\u098F\u0995\u099F\u09BF \u09AA\u09CD\u09B0\u09BE\u0987\u09AD\u09C7\u099F \u0995\u09BE\u09B0 \u09A7\u09BE\u0995\u09CD\u0995\u09BE \u09A6\u09BF\u09AF\u09BC\u09C7 \u0989\u09B2\u09CD\u099F\u09CB \u09AA\u09A5\u09C7 \u099A\u09B2\u09C7 \u09AF\u09BE\u09AF\u09BC\u0964 \u09B8\u09BE\u09AE\u09A8\u09C7\u09B0 \u09B8\u09CD\u099F\u09BF\u0995\u09BE\u09B0\u09C7 \u09B2\u09C7\u0996\u09BE: "\u09B8\u09BE\u0982\u09AC\u09BE\u09A6\u09BF\u0995 / \u09AA\u09C1\u09B2\u09BF\u09B6 / \u0989\u0995\u09BF\u09B2 / \u09A1\u09BE\u0995\u09CD\u09A4\u09BE\u09B0"\u0964'],rickshaw:[()=>'\u098F\u0995\u099F\u09BF \u09B0\u09BF\u0995\u09B6\u09BE\u09B0 \u09A7\u09BE\u0995\u09CD\u0995\u09BE\u09AF\u09BC \u0995\u09BE\u09AC\u09C1 \u09B9\u09A8\u0964 \u099A\u09BE\u09B2\u0995 \u09AC\u09B2\u09C7\u09A8, "\u09AC\u09C7\u09B2 \u09A4\u09CB \u09A6\u09BF\u09B8\u09BF\u09B2\u09BE\u09AE \u09AE\u09BE\u09AE\u09BE, \u0986\u09AA\u09A8\u09C7 \u09B6\u09CB\u09A8\u09C7\u09A8 \u09A8\u09BE\u0987\u0964"'],dozer:[n=>`\u09B6\u09C7\u09B7 \u0986\u0998\u09BE\u09A4\u099F\u09BF \u0986\u09B8\u09C7 \u098F\u0995\u099F\u09BF \u09AC\u09C1\u09B2\u09A1\u09CB\u099C\u09BE\u09B0 \u09A5\u09C7\u0995\u09C7\u0964 \u0997\u09BE\u09AF\u09BC\u09C7 \u09B2\u09C7\u0996\u09BE \u099B\u09BF\u09B2 "\u09A6\u0996\u09B2 \u099A\u09B2\u099B\u09C7"\u0964 ${n?n+' \u09AA\u09B0\u09C7 \u09A6\u09BE\u09AC\u09BF \u0995\u09B0\u09C7\u09A8, "\u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC \u09A6\u09BE\u0981\u09A1\u09BC\u09BE\u09A8\u09CB \u09B2\u09CB\u0995\u099F\u09BE\u0993 \u0986\u09AE\u09BE\u09B0 \u099C\u09AE\u09BF\u09B0 \u0985\u0982\u09B6\u0964"':""}`],onion:[n=>`\u09B6\u09C7\u09B7 \u0986\u0998\u09BE\u09A4\u099F\u09BF \u0986\u09B8\u09C7 \u098F\u0995\u099F\u09BF \u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C \u09A5\u09C7\u0995\u09C7${n?`, \u099B\u09C1\u09A1\u09BC\u09C7\u099B\u09BF\u09B2\u09C7\u09A8 ${n}`:""}\u0964 \u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u0995\u09CD\u09B7\u09A6\u09B0\u09CD\u09B6\u09C0\u09B0\u09BE \u099C\u09BE\u09A8\u09BE\u09A8, \u09A6\u09BE\u09AE \u09B6\u09C1\u09A8\u09C7\u0987 \u09A4\u09BF\u09A8\u09BF \u0985\u09B0\u09CD\u09A7\u09C7\u0995 \u0995\u09BE\u09AC\u09C1 \u09B9\u09AF\u09BC\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7\u099B\u09BF\u09B2\u09C7\u09A8\u0964`],vejal:[n=>`${n||"\u09AD\u09C7\u099C\u09BE\u09B2 \u0993\u09B7\u09C1\u09A7 \u09AC\u09BF\u0995\u09CD\u09B0\u09C7\u09A4\u09BE"}-\u098F\u09B0 \u09AC\u09BF\u09B7\u09BE\u0995\u09CD\u09A4 \u09AC\u09A1\u09BC\u09BF\u09B0 \u0995\u09BE\u099B\u09C7 \u09B6\u09C7\u09B7\u09C7 \u09B9\u09BE\u09B0 \u09AE\u09BE\u09A8\u09C7\u09A8\u0964 \u09AC\u09A1\u09BC\u09BF\u09B0 \u09AA\u09CD\u09AF\u09BE\u0995\u09C7\u099F\u09C7 \u09B2\u09C7\u0996\u09BE "\u09B8\u09AC \u09B0\u09CB\u0997\u09C7\u09B0 \u0993\u09B7\u09C1\u09A7, \u09B8\u09BE\u0987\u09A1-\u098F\u09AB\u09C7\u0995\u09CD\u099F: \u09B8\u09AC \u09B0\u09CB\u0997"\u0964`],prosno:[n=>`${n||"\u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09AB\u09BE\u0981\u09B8\u0995\u09BE\u09B0\u09C0"}-\u098F\u09B0 \u099B\u09CB\u09A1\u09BC\u09BE \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09AA\u09A4\u09CD\u09B0\u09C7 \u099A\u09CB\u0996 \u09A2\u09C7\u0995\u09C7 \u09AF\u09BE\u09AF\u09BC, \u09A4\u09BE\u09B0\u09AA\u09B0\u09C7\u0987 \u09B8\u09AC \u0985\u09A8\u09CD\u09A7\u0995\u09BE\u09B0\u0964 \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09AA\u09A4\u09CD\u09B0\u099F\u09BF \u09AA\u09B0\u09C7 \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u09AF\u09BE\u09AF\u09BC \u098F\u0995\u099F\u09BF \u0995\u09CB\u099A\u09BF\u0982 \u09B8\u09C7\u09A8\u09CD\u099F\u09BE\u09B0\u09C7\u0964`],neta:[n=>`${n||"\u09A8\u09C7\u09A4\u09BE"}-\u098F\u09B0 \u0986\u099B\u09BE\u09A1\u09BC\u09C7 \u0995\u09C1\u09AA\u09CB\u0995\u09BE\u09A4 \u09B9\u09A8\u0964 ${n||"\u09A8\u09C7\u09A4\u09BE"} \u09AE\u09BE\u0987\u0995 \u09B9\u09BE\u09A4\u09C7 \u09AC\u09B2\u09C7\u09A8, "\u098F\u099F\u09BE\u0993 \u0989\u09A8\u09CD\u09A8\u09AF\u09BC\u09A8\u09C7\u09B0 \u0985\u0982\u09B6\u0964" \u09AA\u09BE\u09B6\u09C7 \u09B9\u09BE\u09A4\u09A4\u09BE\u09B2\u09BF \u09A6\u09C7\u09AF\u09BC \u09A6\u09C1\u0987\u099C\u09A8 \u09AD\u09BE\u09A1\u09BC\u09BE \u0995\u09B0\u09BE \u09B8\u09AE\u09B0\u09CD\u09A5\u0995\u0964`],bhumi:[n=>`${n||"\u09AD\u09C2\u09AE\u09BF\u09A6\u09B8\u09CD\u09AF\u09C1"}-\u098F\u09B0 \u09B9\u09BE\u09A4\u09C7 \u09B6\u09C7\u09B7\u09C7 \u0995\u09BE\u09AC\u09C1 \u09B9\u09A8\u0964 \u0998\u099F\u09A8\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BF\u09A8\u09BF \u0998\u099F\u09A8\u09BE\u09B8\u09CD\u09A5\u09B2\u099F\u09BF\u0993 \u09A8\u09BF\u099C\u09C7\u09B0 \u09A8\u09BE\u09AE\u09C7 \u09B0\u09C7\u099C\u09BF\u09B8\u09CD\u099F\u09CD\u09B0\u09BF \u0995\u09B0\u09C7 \u09A8\u09C7\u09A8\u0964`],ghush:[n=>`${n||"\u098F\u0995 \u0998\u09C1\u09B7\u0996\u09CB\u09B0 \u0985\u09AB\u09BF\u09B8\u09BE\u09B0"}-\u098F\u09B0 \u0998\u09C1\u09B7\u09BF\u09A4\u09C7 \u0995\u09BE\u09AC\u09C1 \u09B9\u09A8\u0964 \u0985\u09AB\u09BF\u09B8\u09BE\u09B0\u09C7\u09B0 \u09A6\u09BE\u09AC\u09BF, \u0998\u09C1\u09B7\u09BF\u099F\u09BE \u0998\u09C1\u09B7 \u09A8\u09AF\u09BC, "\u09B8\u09CC\u099C\u09A8\u09CD\u09AF \u0989\u09AA\u09B9\u09BE\u09B0"\u0964`],chanda:[n=>`${n||"\u098F\u0995 \u099A\u09BE\u0981\u09A6\u09BE\u09AC\u09BE\u099C"}-\u098F\u09B0 \u09B9\u09BE\u09A4\u09C7 \u0995\u09BE\u09AC\u09C1 \u09B9\u09A8\u0964 \u099A\u09BE\u0981\u09A6\u09BE\u09AC\u09BE\u099C \u0998\u09C1\u09B7\u09BF\u09B0 \u099C\u09A8\u09CD\u09AF \u09B0\u09B8\u09BF\u09A6 \u09A6\u09BF\u09A4\u09C7 \u0985\u09B8\u09CD\u09AC\u09C0\u0995\u09BE\u09B0 \u0995\u09B0\u09C7\u09A8\u0964`],syndicate:[n=>`${n||"\u098F\u0995 \u09B8\u09BF\u09A8\u09CD\u09A1\u09BF\u0995\u09C7\u099F \u09AC\u09CD\u09AF\u09AC\u09B8\u09BE\u09AF\u09BC\u09C0"}-\u098F\u09B0 \u09A7\u09BE\u0995\u09CD\u0995\u09BE\u09AF\u09BC \u0995\u09BE\u09AC\u09C1 \u09B9\u09A8\u0964 \u09AC\u09CD\u09AF\u09AC\u09B8\u09BE\u09AF\u09BC\u09C0 \u099C\u09BE\u09A8\u09BE\u09A8, "\u09A7\u09BE\u0995\u09CD\u0995\u09BE\u09B0 \u09B8\u09BE\u09AA\u09CD\u09B2\u09BE\u0987 \u0995\u09AE, \u09A4\u09BE\u0987 \u09A6\u09BE\u09AE \u09AC\u09C7\u09B6\u09BF \u09AA\u09A1\u09BC\u09B2\u0964"`],thikadar:[n=>`${n||"\u098F\u0995 \u09A0\u09BF\u0995\u09BE\u09A6\u09BE\u09B0"}-\u098F\u09B0 \u09AC\u09CD\u09B0\u09BF\u09AB\u0995\u09C7\u09B8\u09C7\u09B0 \u09AC\u09BE\u09A1\u09BC\u09BF\u09A4\u09C7 \u0995\u09BE\u09AC\u09C1 \u09B9\u09A8\u0964 \u09AC\u09CD\u09B0\u09BF\u09AB\u0995\u09C7\u09B8\u09C7 \u099B\u09BF\u09B2 \u09A4\u09BF\u09A8\u099F\u09BF \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09B0 \u099F\u09C7\u09A8\u09CD\u09A1\u09BE\u09B0 \u0986\u09B0 \u098F\u0995\u099F\u09BF \u099F\u09BF\u09AB\u09BF\u09A8 \u09AC\u09BE\u0995\u09CD\u09B8\u0964`],pocket:[n=>`${n||"\u098F\u0995 \u09AA\u0995\u09C7\u099F\u09AE\u09BE\u09B0"}-\u098F\u09B0 \u09B9\u09BE\u09A4\u09C7 \u0995\u09BE\u09AC\u09C1 \u09B9\u09A8, \u09AF\u09BE\u0993\u09AF\u09BC\u09BE\u09B0 \u09B8\u09AE\u09AF\u09BC \u09B8\u09C7 \u09AE\u09BE\u09A8\u09BF\u09AC\u09CD\u09AF\u09BE\u0997\u099F\u09BE\u0993 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09AF\u09BE\u09AF\u09BC\u0964`],copy:[()=>"\u098F\u0995\u099F\u09BF \u09AB\u099F\u09CB\u0995\u09AA\u09BF\u09B0 \u09B9\u09BE\u09A4\u09C7 \u0995\u09BE\u09AC\u09C1 \u09B9\u09A8\u0964 \u0986\u09B8\u09B2\u099F\u09BE \u09A6\u09C2\u09B0\u09C7 \u09A6\u09BE\u0981\u09A1\u09BC\u09BF\u09AF\u09BC\u09C7 \u09B9\u09BE\u09B8\u099B\u09BF\u09B2\u0964"],mastan:[n=>`${n||"\u09AE\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8\u09B0\u09BE"} \u09B2\u09BE\u09A0\u09BF \u09B9\u09BE\u09A4\u09C7 \u09B6\u09C7\u09B7\u09C7 \u0995\u09BE\u09AC\u09C1 \u0995\u09B0\u09C7 \u09AB\u09C7\u09B2\u09C7\u0964 \u099C\u09BF\u099C\u09CD\u099E\u09C7\u09B8 \u0995\u09B0\u09B2\u09C7 \u09AC\u09B2\u09C7, "\u0986\u09AE\u09B0\u09BE \u0995\u09BF\u099B\u09C1 \u0995\u09B0\u09BF \u09A8\u09BE\u0987, \u09AD\u09BE\u0987 \u0995\u09B0\u09A4\u09C7 \u09AC\u09B2\u09B8\u09C7\u0964"`,n=>`${n||"\u09AE\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8"}-\u098F\u09B0 \u09B2\u09BE\u09A0\u09BF\u09B0 \u0995\u09BE\u099B\u09C7 \u09B9\u09BE\u09B0, \u09A4\u09AC\u09C7 \u09AE\u09A8\u09CB\u09AC\u09B2 \u0985\u099F\u09C1\u099F\u0964 "\u09AD\u09BE\u0987" \u098F\u0996\u09A8\u09CB \u09AB\u09CB\u09A8 \u09A7\u09B0\u099B\u09C7\u09A8 \u09A8\u09BE\u0964`]};function qy(n,e,t){let i=Math.floor(e.time/60),s=Math.floor(e.time%60),r=i?`${de(i)} \u09AE\u09BF\u09A8\u09BF\u099F ${de(s)} \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1`:`${de(s)} \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1`,a=`${Te(Wy[t.hero.id])} ${t.noun.replace("\u098F\u0995 ","")}`,o=[];if(o.push(Te([`\u09B0\u09BE\u099C\u09A7\u09BE\u09A8\u09C0\u09B0 \u098F\u0995 \u09AC\u09CD\u09AF\u09B8\u09CD\u09A4 \u09B8\u09A1\u09BC\u0995\u09C7 ${Wi(t.startHour)} \u09A5\u09C7\u0995\u09C7 ${Wi(t.endHour)} \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4, \u09AE\u09CB\u099F ${r} \u09A7\u09B0\u09C7 \u098F\u0995\u09BE\u0987 \u09B0\u09C1\u0996\u09C7 \u09A6\u09BE\u0981\u09A1\u09BC\u09BE\u09A8 ${a}\u0964`,`${Wi(t.startHour)} \u09A8\u09BE\u0997\u09BE\u09A6 \u099A\u09BE \u0996\u09C7\u09AF\u09BC\u09C7 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC \u09A8\u09BE\u09AE\u09C7\u09A8 ${a}\u0964 \u09AB\u09C7\u09B0\u09C7\u09A8 ${Wi(t.endHour)}, \u09AE\u09BE\u099D\u0996\u09BE\u09A8\u09C7 \u0995\u09C7\u099F\u09C7 \u09AF\u09BE\u09AF\u09BC ${r}\u0964`,`\u0998\u09A1\u09BC\u09BF\u09A4\u09C7 \u09A4\u0996\u09A8 ${Wi(t.startHour)}\u0964 ${a} \u09A0\u09BF\u0995 \u0995\u09B0\u09B2\u09C7\u09A8, \u0986\u099C \u0986\u09B0 \u09B8\u09B9\u09CD\u09AF \u0995\u09B0\u09AC\u09C7\u09A8 \u09A8\u09BE\u0964 \u09AA\u09B0\u09C7\u09B0 ${r} \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09B0 \u0987\u09A4\u09BF\u09B9\u09BE\u09B8\u09C7 \u09B2\u09C7\u0996\u09BE \u09A5\u09BE\u0995\u09AC\u09C7\u0964`])),t.first&&o.push(`\u09AA\u09CD\u09B0\u09A5\u09AE \u09B6\u09BF\u0995\u09BE\u09B0 ${t.first.nick} (${Gn[t.first.key].name}), ${t.first.place?`${t.first.place}-\u098F\u09B0 \u09B8\u09BE\u09AE\u09A8\u09C7 `:""}${Pf[t.first.method]||"\u0996\u09BE\u09B2\u09BF \u09B9\u09BE\u09A4\u09C7"} \u0995\u09BE\u09AC\u09C1 \u09B9\u09A8\u0964`),n.kos>1){let c=Object.entries(e.method).sort((u,h)=>h[1]-u[1])[0];o.push(`\u09B8\u09AC \u09AE\u09BF\u09B2\u09BF\u09AF\u09BC\u09C7 \u09A6\u09AB\u09BE ${de(n.wave)} \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0 \u09B9\u09AF\u09BC ${de(n.kos)} \u099C\u09A8, \u09AF\u09BE\u09B0 \u09AC\u09C7\u09B6\u09BF\u09B0\u09AD\u09BE\u0997 ${Pf[c[0]]||"\u0996\u09BE\u09B2\u09BF \u09B9\u09BE\u09A4\u09C7"}\u0964 \u0989\u09A6\u09CD\u09A7\u09BE\u09B0 \u09B9\u09AF\u09BC ${Zt(n.money)}\u0964`)}else n.kos===0&&o.push(Te(["\u09A6\u09C1\u09B0\u09CD\u09AD\u09BE\u0997\u09CD\u09AF\u09AC\u09B6\u09A4 \u0995\u09BE\u0989\u0995\u09C7\u0987 \u0995\u09BE\u09AC\u09C1 \u0995\u09B0\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF, \u09A4\u09AC\u09C7 \u0995\u09AF\u09BC\u09C7\u0995\u099C\u09A8 \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C \u09A8\u09BE\u0995\u09BF \u098F\u0995\u099F\u09C1 \u09AD\u09AF\u09BC \u09AA\u09C7\u09AF\u09BC\u09C7\u099B\u09BF\u09B2\u0964","\u0998\u09C1\u09B7\u09BF\u0997\u09C1\u09B2\u09CB \u09B2\u0995\u09CD\u09B7\u09CD\u09AF\u09C7 \u09A8\u09BE \u09B2\u09BE\u0997\u09B2\u09C7\u0993 \u09AC\u09BE\u09A4\u09BE\u09B8 \u09AF\u09A5\u09C7\u09B7\u09CD\u099F \u0986\u09B9\u09A4 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7 \u09AC\u09B2\u09C7 \u099C\u09BE\u09A8\u09BE \u0997\u09C7\u099B\u09C7\u0964"]));t.boss?o.push(`\u09A6\u09BF\u09A8\u09C7\u09B0 \u09AC\u09A1\u09BC \u0998\u099F\u09A8\u09BE: ${t.boss.nick} (${Gn[t.boss.key].name}) \u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0\u0964 \u09A4\u09BE\u0981\u09B0 \u09B8\u09AE\u09B0\u09CD\u09A5\u0995\u09B0\u09BE \u098F\u0996\u09A8 \u09AC\u09B2\u099B\u09C7\u09A8, "\u0986\u09AE\u09B0\u09BE \u09A4\u09BE\u0981\u0995\u09C7 \u099A\u09BF\u09A8\u09BF \u09A8\u09BE\u0964"`):t.bossSeen&&o.push(`${t.bossSeen.nick} (${Gn[t.bossSeen.key].name}) \u0998\u099F\u09A8\u09BE\u09B8\u09CD\u09A5\u09B2\u09C7 \u098F\u09B2\u09C7\u0993 \u09B6\u09C7\u09B7 \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u09AC\u09B9\u09BE\u09B2 \u09A4\u09AC\u09BF\u09AF\u09BC\u09A4\u09C7 \u0986\u099B\u09C7\u09A8, \u0986\u09AA\u09BE\u09A4\u09A4\u0964`),t.names.length&&o.push(`\u09AA\u09A5\u09C7 \u09AF\u09CB\u0997 \u09A6\u09C7\u09A8 ${t.names.slice(0,3).join(", ")}${t.names.length>3?` \u09B8\u09B9 \u0986\u09B0\u09CB ${de(t.names.length-3)} \u099C\u09A8`:""}\u0964 ${Te(["\u09AE\u09BF\u099B\u09BF\u09B2 \u099B\u09CB\u099F, \u09A4\u09AC\u09C7 \u0986\u0993\u09AF\u09BC\u09BE\u099C \u09AC\u09A1\u09BC\u0964","\u09A4\u09BE\u0981\u09A6\u09C7\u09B0 \u0995\u09C7\u0989 \u0995\u09C7\u0989 \u099C\u09C0\u09AC\u09A8\u09C7 \u09AA\u09CD\u09B0\u09A5\u09AE \u0995\u09BE\u0989\u0995\u09C7 \u0998\u09C1\u09B7\u09BF \u09A6\u09BF\u09B2\u09C7\u09A8\u0964","\u09A6\u09B2\u09C7\u09B0 \u09A8\u09BE\u09AE \u098F\u0996\u09A8\u09CB \u09A0\u09BF\u0995 \u09B9\u09AF\u09BC\u09A8\u09BF, \u09A4\u09AC\u09C7 \u09AB\u09C7\u09B8\u09AC\u09C1\u0995 \u09AA\u09C7\u099C \u0996\u09CB\u09B2\u09BE \u09B9\u09AF\u09BC\u09C7 \u0997\u09C7\u099B\u09C7\u0964"])}`),t.flood?o.push("\u09AE\u09BE\u099D\u09AA\u09A5\u09C7 \u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09A4\u09C7 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC \u09B9\u09BE\u0981\u099F\u09C1\u09AA\u09BE\u09A8\u09BF \u099C\u09AE\u09C7 \u09AF\u09BE\u09AF\u09BC, \u09A4\u09AC\u09C1 \u09B2\u09A1\u09BC\u09BE\u0987 \u09A5\u09BE\u09AE\u09C7\u09A8\u09BF\u0964"):t.rain&&o.push("\u09AE\u09BE\u099D\u09C7 \u098F\u0995 \u09AA\u09B6\u09B2\u09BE \u09AC\u09C3\u09B7\u09CD\u099F\u09BF \u09B9\u09AF\u09BC, \u09A4\u09BE\u09A4\u09C7 \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF \u09A7\u09C1\u09AF\u09BC\u09C7 \u09A8\u09BE \u0997\u09C7\u09B2\u09C7\u0993 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09B0 \u09A7\u09C1\u09B2\u09BE \u0995\u09BF\u099B\u09C1\u099F\u09BE \u0997\u09C7\u099B\u09C7\u0964"),t.shed&&o.push("\u09B2\u09CB\u09A1\u09B6\u09C7\u09A1\u09BF\u0982\u09AF\u09BC\u09C7\u09B0 \u0985\u09A8\u09CD\u09A7\u0995\u09BE\u09B0\u09C7 \u0995\u09BF\u099B\u09C1\u0995\u09CD\u09B7\u09A3 \u0995\u09C7 \u0995\u09BE\u0995\u09C7 \u09AE\u09BE\u09B0\u099B\u09C7 \u09AC\u09CB\u099D\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF, \u09A4\u09AC\u09C7 \u09AB\u09B2\u09BE\u09AB\u09B2 \u099C\u09A8\u09A4\u09BE\u09B0 \u09AA\u0995\u09CD\u09B7\u09C7\u0987\u0964"),e.rides&&o.push(`\u098F\u0995 \u09AA\u09B0\u09CD\u09AF\u09BE\u09AF\u09BC\u09C7 \u09A4\u09BF\u09A8\u09BF ${e.method.ride?`\u09AA\u09BE\u09B0\u09CD\u0995 \u0995\u09B0\u09BE \u09B0\u09BF\u0995\u09B6\u09BE-\u09B8\u09BF\u098F\u09A8\u099C\u09BF \u09A8\u09BF\u09AF\u09BC\u09C7 ${de(e.method.ride)} \u099C\u09A8\u0995\u09C7 \u09A7\u09BE\u0995\u09CD\u0995\u09BE \u09AE\u09BE\u09B0\u09C7\u09A8`:"\u09AA\u09BE\u09B0\u09CD\u0995 \u0995\u09B0\u09BE \u098F\u0995\u099F\u09BF \u09B0\u09BF\u0995\u09B6\u09BE \u09A8\u09BF\u09AF\u09BC\u09C7 \u0995\u09BF\u099B\u09C1\u09A6\u09C2\u09B0 \u099A\u09BE\u09B2\u09BE\u09A8"}${e.wrecks?`, \u09AF\u09A6\u09BF\u0993 ${de(e.wrecks)}\u099F\u09BF \u09AF\u09BE\u09A8 \u09B6\u09C7\u09B7\u09C7 \u09AD\u09C7\u0999\u09C7 \u09AF\u09BE\u09AF\u09BC`:""}\u0964`);let l=If[e.cause]||If.mastan;return o.push(Te(l)(e.killer)),o.join(" ")}var Yy=[n=>["\u099A\u09BE-\u09AC\u09BF\u0995\u09CD\u09B0\u09C7\u09A4\u09BE \u09B0\u09B9\u09BF\u09AE \u09AE\u09BF\u09AF\u09BC\u09BE",n.tea>3?`\u0989\u09A8\u09BF \u0986\u099C ${de(Math.ceil(n.tea/3))} \u0995\u09BE\u09AA \u099A\u09BE \u0996\u09BE\u0987\u099B\u09C7\u09A8, \u09AC\u09BE\u0995\u09BF\u09B0 \u0996\u09BE\u09A4\u09BE\u09AF\u09BC \u09B2\u09C7\u0987\u0996\u09BE \u09B0\u09BE\u0996\u099B\u09BF\u0964 \u09B9\u09BF\u09B0\u09CB \u09B9\u0987\u09B2\u09C7\u0993 \u09AC\u09BE\u0995\u09BF \u09AC\u09BE\u0995\u09BF\u0987\u0964`:"\u099A\u09BE \u09A8\u09BE \u0996\u09BE\u0987\u09AF\u09BC\u09BE\u0987 \u09AE\u09BE\u09B0\u09BE\u09AE\u09BE\u09B0\u09BF! \u09AA\u09B0\u09C7\u09B0 \u09AC\u09BE\u09B0 \u098F\u0995 \u0995\u09BE\u09AA \u0996\u09BE\u0987\u09AF\u09BC\u09BE \u09AF\u09BE\u0987\u09AF\u09BC\u09C7\u09A8\u0964"],n=>["\u09B0\u09BF\u0995\u09B6\u09BE\u099A\u09BE\u09B2\u0995 \u0995\u09C1\u09A6\u09CD\u09A6\u09C1\u09B8",n.dodges>8?`\u098F\u09AE\u09A8\u09C7 \u0997\u09A1\u09BC\u09BE\u0997\u09A1\u09BC\u09BF \u09A6\u09BF\u09B2, ${de(n.dodges)} \u09AC\u09BE\u09B0! \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09B0 \u09A7\u09C1\u09B2\u09BE \u09B8\u09AC \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0\u0964`:"\u0986\u09AE\u09BF \u09A4\u09CB \u09AD\u09BE\u09AC\u099B\u09BF\u09B2\u09BE\u09AE \u09B8\u09BF\u09A8\u09C7\u09AE\u09BE\u09B0 \u09B6\u09C1\u099F\u09BF\u0982\u0964 \u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE \u0996\u09C1\u0981\u099C\u09A4\u09C7\u099B\u09BF\u09B2\u09BE\u09AE\u0964"],n=>["\u0998\u099F\u09A8\u09BE\u09B8\u09CD\u09A5\u09B2\u09C7\u09B0 \u098F\u0995 \u0986\u09A8\u09CD\u099F\u09BF",n.sandals>2?`${de(n.sandals)}\u099F\u09BE \u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7\u09B2, \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BE \u09AE\u09BE\u09AA\u09AE\u09A4\u09CB\u0964 \u0986\u09AE\u09BE\u09B0 \u099B\u09C7\u09B2\u09C7 \u099C\u09C0\u09AC\u09A8\u09C7 \u098F\u09A4 \u09A8\u09BF\u09B6\u09BE\u09A8\u09BE \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09A8\u09BE\u0987\u0964`:"\u099B\u09C7\u09B2\u09C7\u099F\u09BE \u09AD\u09BE\u09B2\u09CB, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u099C\u09BE\u09AE\u09BE\u099F\u09BE \u098F\u0995\u099F\u09C1 \u0987\u09B8\u09CD\u09A4\u09CD\u09B0\u09BF \u0995\u09B0\u09B2\u09C7 \u0986\u09B0\u09CB \u09B9\u09BF\u09B0\u09CB \u09B2\u09BE\u0997\u09A4\u0964"],()=>["\u098F\u0995 \u09AC\u09BF\u09B6\u09CD\u09AC\u09AC\u09BF\u09A6\u09CD\u09AF\u09BE\u09B2\u09AF\u09BC \u099B\u09BE\u09A4\u09CD\u09B0","\u0986\u09AE\u09B0\u09BE \u09A4\u09CB \u09AB\u09C7\u09B8\u09AC\u09C1\u0995\u09C7 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09BE\u09A6 \u0995\u09B0\u09BF, \u0989\u09A8\u09BF \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC \u09A8\u09C7\u09AE\u09C7 \u0997\u09C7\u09B2\u09C7\u09A8\u0964 \u098F\u099F\u09BE \u0995\u09BF \u09B2\u09BF\u0997\u09CD\u09AF\u09BE\u09B2? \u09AA\u09CB\u09B8\u09CD\u099F \u09A6\u09BF\u09AF\u09BC\u09C7 \u099C\u09BF\u099C\u09CD\u099E\u09C7\u09B8 \u0995\u09B0\u09A4\u09C7\u099B\u09BF\u0964"],()=>["\u09AB\u09C1\u099F\u09AA\u09BE\u09A4\u09C7\u09B0 \u098F\u0995 \u09A6\u09CB\u0995\u09BE\u09A8\u09BF","\u09AC\u09BF\u09B6 \u09AC\u099B\u09B0 \u099A\u09BE\u0981\u09A6\u09BE \u09A6\u09BF\u099B\u09BF\u0964 \u0986\u099C \u09AA\u09CD\u09B0\u09A5\u09AE \u09A6\u09C7\u0996\u09B2\u09BE\u09AE \u099A\u09BE\u0981\u09A6\u09BE\u09AC\u09BE\u099C \u09A8\u09BF\u099C\u09C7\u0987 \u09AE\u09BE\u099F\u09BF\u09A4\u09C7\u0964"],()=>["\u09AC\u09BE\u09B8\u09C7\u09B0 \u09B9\u09C7\u09B2\u09AA\u09BE\u09B0","\u0993\u09B8\u09CD\u09A4\u09BE\u09A6, \u0986\u09B8\u09CD\u09A4\u09C7! \u09A5\u09C1\u0995\u09CD\u0995\u09C1, \u099C\u09CB\u09B0\u09C7! \u0986\u09AE\u09BF \u0986\u09B8\u09B2\u09C7 \u09AC\u09C1\u099D\u09A4\u09C7\u099B\u09BF\u09B2\u09BE\u09AE \u09A8\u09BE \u0995\u09CB\u09A8 \u09A6\u09BF\u0995\u09C7 \u09A5\u09BE\u0995\u09AC\u0964"],()=>["\u098F\u0995 \u0987\u0989\u099F\u09BF\u0989\u09AC\u09BE\u09B0","\u09AD\u09BE\u0987\u09AF\u09BC\u09C7\u09B0\u09BE, \u09AD\u09BF\u09A1\u09BF\u0993\u099F\u09BE \u09B6\u09C7\u09B7 \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u09A6\u09C7\u0996\u09AC\u09C7\u09A8, \u09B2\u09BE\u0987\u0995 \u09A6\u09BF\u09AC\u09C7\u09A8\u0964 \u0986\u09AE\u09BF \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09BF \u09A8\u09BE\u0987, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u0995\u09A8\u09CD\u099F\u09C7\u09A8\u09CD\u099F \u09AC\u09BE\u09A8\u09BE\u0987\u099B\u09BF\u0964"],n=>["\u09AA\u09BE\u09B6\u09C7\u09B0 \u09AC\u09BF\u09B2\u09CD\u09A1\u09BF\u0982\u09AF\u09BC\u09C7\u09B0 \u09A6\u09BE\u09B0\u09CB\u09AF\u09BC\u09BE\u09A8",n.time>120?"\u098F\u09A4 \u09B2\u09AE\u09CD\u09AC\u09BE \u09AE\u09BE\u09B0\u09BE\u09AE\u09BE\u09B0\u09BF, \u0986\u09AE\u09BE\u09B0 \u09B6\u09BF\u09AB\u099F \u09B6\u09C7\u09B7 \u09B9\u09AF\u09BC\u09C7 \u0997\u09C7\u09B2, \u09A4\u09BE\u0993 \u09B6\u09C7\u09B7 \u09B9\u09AF\u09BC \u09A8\u09BE\u0964":"\u0986\u09AE\u09BF \u0997\u09C7\u099F \u0996\u09C1\u09B2\u09A4\u09C7 \u0996\u09C1\u09B2\u09A4\u09C7\u0987 \u09B8\u09AC \u09B6\u09C7\u09B7\u0964"],n=>["\u09AE\u09CB\u09A1\u09BC\u09C7\u09B0 \u099F\u09CD\u09B0\u09BE\u09AB\u09BF\u0995 \u09AA\u09C1\u09B2\u09BF\u09B6",n.busHits?`\u0989\u09A8\u09BF ${de(n.busHits)} \u09AC\u09BE\u09B0 \u09AC\u09BE\u09B8\u09C7\u09B0 \u09A7\u09BE\u0995\u09CD\u0995\u09BE \u0996\u09BE\u0987\u099B\u09C7\u09A8\u0964 \u0986\u09AE\u09BF \u09B9\u09BE\u09A4 \u09A4\u09C1\u09B2\u099B\u09BF\u09B2\u09BE\u09AE, \u09AC\u09BE\u09B8 \u09A6\u09C7\u0996\u09C7 \u09A8\u09BE\u0987, \u09AF\u09C7\u09AE\u09A8 \u0995\u0996\u09A8\u09CB \u09A6\u09C7\u0996\u09C7 \u09A8\u09BE\u0964`:"\u0986\u09AE\u09BF \u09A4\u0996\u09A8 \u09B9\u09BE\u09A4 \u09A4\u09C1\u09B2\u09C7 \u09A6\u09BE\u0981\u09A1\u09BC\u09BE\u09AF\u09BC \u099B\u09BF\u09B2\u09BE\u09AE, \u0995\u09C7\u0989 \u0996\u09C7\u09AF\u09BC\u09BE\u09B2 \u0995\u09B0\u09C7 \u09A8\u09BE\u0987\u0964"],n=>["\u09AA\u09BE\u09A1\u09BC\u09BE\u09B0 \u09AE\u09C1\u09B0\u09C1\u09AC\u09CD\u09AC\u09BF",n.hero==="teacher"?"\u09B8\u09CD\u09AF\u09BE\u09B0 \u0986\u09AE\u09BE\u09B0\u09C7\u0993 \u098F\u0995\u09AC\u09BE\u09B0 \u0995\u09BE\u09A8 \u09A7\u09B0\u09BE\u0987\u099B\u09BF\u09B2\u09C7\u09A8, \u09E7\u09EF\u09EE\u09ED \u09B8\u09BE\u09B2\u09C7\u0964 \u0986\u099C\u0995\u09C7 \u09AC\u09C1\u099D\u09B2\u09BE\u09AE \u0995\u09C7\u09A8\u0964":"\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B8\u09AE\u09AF\u09BC\u09C7 \u098F\u09AE\u09A8 \u099B\u09C7\u09B2\u09C7\u09AE\u09C7\u09AF\u09BC\u09C7 \u099B\u09BF\u09B2\u0964 \u098F\u0996\u09A8 \u09B8\u09AC\u09BE\u0987 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2\u09C7\u0964"]],Lf={shop:(n,e)=>[`\u09A6\u09CB\u0995\u09BE\u09A8\u09BF ${n}`,`${e||"\u099A\u09BE\u0981\u09A6\u09BE\u09AC\u09BE\u099C\u099F\u09BE"} \u09AA\u09CD\u09B0\u09A4\u09BF \u09AE\u09BE\u09B8\u09C7 \u0986\u09B8\u09A4\u0964 \u0986\u099C\u0995\u09C7 \u09AA\u09CD\u09B0\u09A5\u09AE \u09AE\u09BE\u09B8 \u09AF\u09C7\u099F\u09BE \u09AB\u09CD\u09B0\u09BF \u0997\u09C7\u09B2\u0964 \u09A6\u09CB\u0995\u09BE\u09A8\u09C7 \u0986\u099C \u09B8\u09AC\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u09AC\u09BF\u09B8\u09CD\u0995\u09C1\u099F \u09AB\u09CD\u09B0\u09BF, \u09B6\u09C1\u09A7\u09C1 \u0986\u099C\u0995\u09C7\u0964`],ghush:(n,e)=>[n,`${e||"\u0985\u09AB\u09BF\u09B8\u09BE\u09B0"} \u0986\u09AE\u09BE\u09B0 \u09AB\u09BE\u0987\u09B2 \u09A4\u09BF\u09A8 \u09AC\u099B\u09B0 \u0986\u099F\u0995\u09BE\u09AF\u09BC \u09B0\u09BE\u0996\u099B\u09BF\u09B2\u0964 \u0986\u099C\u0995\u09C7 \u09AB\u09BE\u0987\u09B2 \u09A8\u09BF\u099C\u09C7\u0987 \u09B9\u09C7\u0981\u099F\u09C7 \u09AC\u09BE\u09B8\u09BE\u09AF\u09BC \u099A\u09B2\u09C7 \u0986\u09B8\u099B\u09C7\u0964`],phone:(n,e)=>[n,`${e||"\u099A\u09CB\u09B0\u099F\u09BE"} \u0986\u09AE\u09BE\u09B0 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A8\u09BF\u09AF\u09BC\u09BE \u09A6\u09CC\u09A1\u09BC \u09A6\u09BF\u099B\u09BF\u09B2\u0964 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2\u099F\u09BE \u09AA\u09C1\u09B0\u09BE\u09A8, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09AD\u09C7\u09A4\u09B0\u09C7 \u0986\u09AE\u09BE\u09B0 \u09A8\u09BE\u09A4\u09BF\u09B0 \u099B\u09AC\u09BF\u0964`]},Zy=["\u09AC\u09BF\u09B7\u09AF\u09BC\u099F\u09BF \u0996\u09A4\u09BF\u09AF\u09BC\u09C7 \u09A6\u09C7\u0996\u09BE \u09B9\u099A\u09CD\u099B\u09C7\u0964 \u0995\u09CB\u09A8 \u0996\u09BE\u09A4\u09BE\u09AF\u09BC \u0996\u09A4\u09BF\u09AF\u09BC\u09C7 \u09A6\u09C7\u0996\u09AC \u09B8\u09C7\u099F\u09BE \u09A0\u09BF\u0995 \u09B9\u09B2\u09C7\u0987 \u0995\u09BE\u099C \u09B6\u09C1\u09B0\u09C1 \u09B9\u09AC\u09C7\u0964","\u0986\u09AE\u09B0\u09BE \u0998\u099F\u09A8\u09BE\u09B0 \u09A4\u09C0\u09AC\u09CD\u09B0 \u09A8\u09BF\u09A8\u09CD\u09A6\u09BE \u0993 \u0997\u09AD\u09C0\u09B0 \u0989\u09A6\u09CD\u09AC\u09C7\u0997, \u09A6\u09C1\u099F\u09CB\u0987 \u098F\u0995\u09B8\u09BE\u09A5\u09C7 \u09AA\u09CD\u09B0\u0995\u09BE\u09B6 \u0995\u09B0\u099B\u09BF\u0964 \u0986\u099C\u0995\u09C7\u09B0 \u09AE\u09A4\u09CB \u09AA\u09CD\u09B0\u0995\u09BE\u09B6 \u09B6\u09C7\u09B7\u0964","\u099C\u09A8\u0997\u09A3\u09C7\u09B0 \u0986\u0987\u09A8 \u09B9\u09BE\u09A4\u09C7 \u09A4\u09C1\u09B2\u09C7 \u09A8\u09C7\u0993\u09AF\u09BC\u09BE \u0989\u099A\u09BF\u09A4 \u09A8\u09BE\u0964 \u0986\u0987\u09A8\u099F\u09BE \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B9\u09BE\u09A4\u09C7\u0987 \u099B\u09BF\u09B2, \u09B6\u09C1\u09A7\u09C1 \u09AA\u0995\u09C7\u099F\u09C7 \u09B0\u09BE\u0996\u09BE \u099B\u09BF\u09B2\u0964","\u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C\u09A6\u09C7\u09B0 \u09A4\u09BE\u09B2\u09BF\u0995\u09BE \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7\u0964 \u09A4\u09BE\u09B2\u09BF\u0995\u09BE \u0995\u09B0\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u09AC\u09BE\u099C\u09C7\u099F \u099A\u09BE\u0993\u09AF\u09BC\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7 \u09F3\u09EB\u09E6 \u0995\u09CB\u099F\u09BF\u0964","\u0998\u099F\u09A8\u09BE \u09A4\u09A6\u09A8\u09CD\u09A4\u09C7 \u098F\u0995\u099F\u09BF \u0995\u09AE\u09BF\u099F\u09BF \u0997\u09A0\u09A8 \u0995\u09B0\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964 \u0995\u09AE\u09BF\u099F\u09BF\u09B0 \u09B0\u09BF\u09AA\u09CB\u09B0\u09CD\u099F \u09A6\u09C7\u0996\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u0986\u09B0\u09C7\u0995\u099F\u09BF \u0995\u09AE\u09BF\u099F\u09BF \u0997\u09A0\u09A8\u09C7\u09B0 \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09BE\u09AC \u098F\u09B8\u09C7\u099B\u09C7\u0964","\u09AB\u09C1\u099F\u09AA\u09BE\u09A4 \u09A6\u0996\u09B2\u09AE\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09A4\u09C7 \u0986\u09AE\u09B0\u09BE \u0985\u09AD\u09BF\u09AF\u09BE\u09A8 \u099A\u09BE\u09B2\u09BE\u09AC\u0964 \u09A4\u09BE\u09B0\u09BF\u0996 \u098F\u0996\u09A8\u09CB \u09A0\u09BF\u0995 \u09B9\u09AF\u09BC\u09A8\u09BF, \u09A4\u09AC\u09C7 \u09AA\u09CB\u09B8\u09CD\u099F\u09BE\u09B0 \u099B\u09BE\u09AA\u09BE \u09B9\u09AF\u09BC\u09C7 \u0997\u09C7\u099B\u09C7\u0964","\u098F\u099F\u09BE \u09AC\u09BF\u099A\u09CD\u099B\u09BF\u09A8\u09CD\u09A8 \u0998\u099F\u09A8\u09BE\u0964 \u09AA\u09CD\u09B0\u09A4\u09BF\u09A6\u09BF\u09A8\u0987 \u098F\u09AE\u09A8 \u09AC\u09BF\u099A\u09CD\u099B\u09BF\u09A8\u09CD\u09A8 \u0998\u099F\u09A8\u09BE \u0998\u099F\u09C7, \u09B8\u09AC \u09AE\u09BF\u09B2\u09BF\u09AF\u09BC\u09C7 \u09AC\u09C7\u09B6 \u09B8\u0982\u09AF\u09C1\u0995\u09CD\u09A4\u0964","\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B8\u09AE\u09AF\u09BC\u09C7 \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF \u099B\u09BF\u09B2 \u09A8\u09BE\u0964 \u09AE\u09BE\u09A8\u09C7 \u099B\u09BF\u09B2, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09AA\u09A4\u09CD\u09B0\u09BF\u0995\u09BE\u09AF\u09BC \u0986\u09B8\u09A4 \u09A8\u09BE\u0964","\u09AF\u09BE\u0981\u09B0\u09BE \u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u09A8 \u09A4\u09BE\u0981\u09B0\u09BE \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u0995\u09C7\u0989 \u09A8\u09BE\u0964 \u09A4\u09AC\u09C7 \u0995\u09BE\u09B2 \u09B8\u0995\u09BE\u09B2\u09C7 \u098F\u0995\u09AC\u09BE\u09B0 \u0996\u09CB\u0981\u099C \u09A8\u09BF\u09AF\u09BC\u09C7 \u09A6\u09C7\u0996\u09AC\u0964","\u099C\u09A8\u09A4\u09BE\u0995\u09C7 \u09A7\u09A8\u09CD\u09AF\u09AC\u09BE\u09A6\u0964 \u09AA\u09C1\u09B0\u09B8\u09CD\u0995\u09BE\u09B0 \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u098F\u0995\u099F\u09BF \u09B8\u09BE\u09B0\u09CD\u099F\u09BF\u09AB\u09BF\u0995\u09C7\u099F \u09A6\u09C7\u0993\u09AF\u09BC\u09BE \u09B9\u09AC\u09C7, \u09B8\u09BE\u09B0\u09CD\u099F\u09BF\u09AB\u09BF\u0995\u09C7\u099F\u09C7\u09B0 \u09AB\u09BF \u09F3\u09EB\u09E6\u09E6\u0964"];function Jy(n,e){let t=n.kos,i=n.money;return t===0?Te([["\u09A6\u09B0\u09CD\u09B6\u0995 \u09AA\u09A5\u099A\u09BE\u09B0\u09C0","\u09AE\u09BE\u09B0\u09BE\u09AE\u09BE\u09B0\u09BF \u09A6\u09C7\u0996\u09C7\u099B\u09C7\u09A8, \u09AD\u09BF\u09A1\u09BF\u0993 \u0995\u09B0\u09C7\u09A8\u09A8\u09BF, \u098F\u099F\u09BE\u0987 \u09B8\u09BE\u09A8\u09CD\u09A4\u09CD\u09AC\u09A8\u09BE"],["\u099A\u09BE\u09AF\u09BC\u09C7\u09B0 \u0995\u09BE\u09AA\u09C7\u09B0 \u09AF\u09CB\u09A6\u09CD\u09A7\u09BE","\u0986\u099C \u099A\u09BE \u0996\u09C7\u09AF\u09BC\u09C7\u099B\u09C7\u09A8, \u0995\u09BE\u09B2 \u09B9\u09AF\u09BC\u09A4\u09CB \u0998\u09C1\u09B7\u09BF\u0993 \u09A6\u09C7\u09AC\u09C7\u09A8"]]):e.hero==="teacher"&&e.kanned>=5?["\u099C\u09BE\u09A4\u09BF\u09B0 \u09B9\u09C7\u09A1\u09B8\u09CD\u09AF\u09BE\u09B0",'\u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09B0 \u09B8\u09AC \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C \u098F\u0996\u09A8 \u0986\u09AA\u09A8\u09BE\u0995\u09C7 "\u09B8\u09CD\u09AF\u09BE\u09B0" \u09A1\u09BE\u0995\u09C7, \u0995\u09BE\u0981\u09AA\u09BE \u0997\u09B2\u09BE\u09AF\u09BC']:e.hero==="aunty"&&t>=6?["\u09AA\u09BE\u09A1\u09BC\u09BE\u09B0 \u099B\u09BE\u09A4\u09BE-\u09B8\u09AE\u09CD\u09B0\u09BE\u099C\u09CD\u099E\u09C0","\u09AC\u09C3\u09B7\u09CD\u099F\u09BF \u09B9\u09CB\u0995 \u09A8\u09BE \u09B9\u09CB\u0995, \u0986\u09AA\u09A8\u09BE\u09B0 \u099B\u09BE\u09A4\u09BE \u09A6\u09C7\u0996\u09B2\u09C7\u0987 \u09AE\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8\u09B0\u09BE \u09A6\u09CC\u09A1\u09BC\u09BE\u09AF\u09BC"]:e.hero==="rickshaw"&&t>=6?["\u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09B0 \u0986\u09B8\u09B2 \u09AE\u09BE\u09B2\u09BF\u0995","\u098F\u0996\u09A8 \u09A5\u09C7\u0995\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09BF\u0995\u09B6\u09BE\u09AF\u09BC \u09AD\u09BE\u09A1\u09BC\u09BE \u09A8\u09BF\u09AF\u09BC\u09C7 \u0995\u09C7\u0989 \u09A4\u09B0\u09CD\u0995 \u0995\u09B0\u09AC\u09C7 \u09A8\u09BE"]:n.followers&&e.followers>=4?["\u09AE\u09BF\u099B\u09BF\u09B2\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09AE\u09A3\u09BF","\u0986\u09AA\u09A8\u09BF \u09B9\u09BE\u0981\u099F\u09B2\u09C7\u0987 \u09AA\u09C7\u099B\u09A8\u09C7 \u09B2\u09CB\u0995 \u099C\u09AE\u09C7 \u09AF\u09BE\u09AF\u09BC, \u09AA\u09C1\u09B2\u09BF\u09B6 \u0995\u09A8\u09AB\u09BF\u0989\u099C\u09A1"]:i<2e5?["\u09AA\u09BE\u09A1\u09BC\u09BE\u09B0 \u09A8\u09AC\u09C0\u09A8 \u09B9\u09BF\u09B0\u09CB",'\u099A\u09BE\u09AF\u09BC\u09C7\u09B0 \u09A6\u09CB\u0995\u09BE\u09A8\u09C7 \u098F\u0996\u09A8 \u0986\u09AA\u09A8\u09BE\u0995\u09C7 "\u09AD\u09BE\u0987" \u09A1\u09BE\u0995\u09C7']:i<2e6?["\u09AB\u09C1\u099F\u09AA\u09BE\u09A4\u09C7\u09B0 \u09AC\u09BE\u0998","\u099A\u09BE\u0981\u09A6\u09BE\u09AC\u09BE\u099C\u09B0\u09BE \u0986\u09AA\u09A8\u09BE\u09B0 \u099B\u09AC\u09BF \u09A6\u09C7\u0996\u09C7 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u09AC\u09A6\u09B2\u09BE\u09AF\u09BC"]:i<1e8?["\u09AE\u09B9\u09B2\u09CD\u09B2\u09BE\u09B0 \u09AE\u09C1\u0995\u09CD\u09A4\u09BF\u09A6\u09BE\u09A4\u09BE","\u09AA\u09BE\u09A1\u09BC\u09BE\u09B0 \u09AE\u09BE\u0987\u0995\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u09A8\u09BE\u09AE\u09C7 \u0998\u09CB\u09B7\u09A3\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7, \u09A6\u09C1\u0987\u09AC\u09BE\u09B0"]:["\u099C\u09BE\u09A4\u09C0\u09AF\u09BC \u099C\u09A8\u09A4\u09BE-\u09AC\u09C0\u09B0","\u0986\u09AA\u09A8\u09BE\u09B0 \u09A8\u09BE\u09AE\u09C7 \u09AB\u09CD\u09B2\u09BE\u0987\u0993\u09AD\u09BE\u09B0\u09C7\u09B0 \u09A8\u09BE\u09AE\u0995\u09B0\u09A3\u09C7\u09B0 \u09A6\u09BE\u09AC\u09BF \u0989\u09A0\u09C7\u099B\u09C7 (\u09A8\u09BF\u09B0\u09CD\u09AE\u09BE\u09A3 \u09B6\u09C7\u09B7 \u09B9\u09AC\u09C7 \u09EA\u09E6 \u09AC\u099B\u09B0\u09C7)"]}function Ky(n,e,t){let i=[["\u0989\u09A6\u09CD\u09A7\u09BE\u09B0",Zt(n.money),99],["\u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0",de(n.kos),98],["\u09A6\u09AB\u09BE",de(n.wave),50],["\u09B8\u09C7\u09B0\u09BE \u0995\u09AE\u09CD\u09AC\u09CB",de(e.maxCombo),40],e.followers&&["\u09A6\u09B2\u09C7 \u09AF\u09CB\u0997",de(e.followers)+" \u099C\u09A8",70],e.rams&&["\u09B0\u09BF\u0995\u09B6\u09BE-\u09A7\u09BE\u0995\u09CD\u0995\u09BE",de(e.rams),70],e.sandals&&["\u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7\u09B2",de(e.sandals),45],e.tea>1&&["\u099A\u09BE",de(Math.ceil(e.tea/3))+" \u0995\u09BE\u09AA",45],e.missionsOk&&["\u09AE\u09BF\u09B6\u09A8",de(e.missionsOk)+" \u09B8\u09AB\u09B2",65],e.kanned&&["\u0995\u09BE\u09A8 \u09A7\u09B0\u09BE",de(e.kanned)+" \u099C\u09A8",75],e.copiesTorn&&["\u09AB\u099F\u09CB\u0995\u09AA\u09BF \u099B\u09C7\u0981\u09A1\u09BC\u09BE",de(e.copiesTorn),60],e.wade>5&&["\u09AA\u09BE\u09A8\u09BF\u09A4\u09C7 \u09B9\u09BE\u0981\u099F\u09BE",de(Math.round(e.wade))+" \u09B8\u09C7",55],e.hitsTaken&&["\u09AE\u09BE\u09B0 \u0996\u09BE\u0993\u09AF\u09BC\u09BE",de(e.hitsTaken),30]].filter(Boolean),s=i.filter(a=>a[2]>=98),r=aa(i.filter(a=>a[2]<98)).sort((a,o)=>o[2]-a[2]+(Math.random()-.5)*40).slice(0,2);return[...s,...r]}function jy(n,e,t){let i=[],s=e.kosBy;return e.sandals&&i.push(["\u099C\u09C1\u09A4\u09BE \u09B6\u09BF\u09B2\u09CD\u09AA\u09C7 \u09A8\u09C0\u09B0\u09AC \u09AC\u09BF\u09AA\u09CD\u09B2\u09AC",`${de(e.sandals)}\u099F\u09BF \u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7\u09B2 \u0989\u09A1\u09BC\u09C7\u099B\u09C7, ${de(e.sandalHits)}\u099F\u09BF \u09AA\u09CC\u0981\u099B\u09C7\u099B\u09C7 \u09B8\u09A0\u09BF\u0995 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE\u09AF\u09BC\u0964 \u09A1\u09BE\u0995 \u09AC\u09BF\u09AD\u09BE\u0997\u09C7\u09B0 \u099A\u09C7\u09AF\u09BC\u09C7 \u09A8\u09BF\u09B0\u09CD\u09AD\u09C1\u09B2 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF\u0964`]),e.tea>2&&i.push(["\u099A\u09BE\u09AF\u09BC\u09C7\u09B0 \u09A6\u09CB\u0995\u09BE\u09A8\u09C7 \u09B0\u09C7\u0995\u09B0\u09CD\u09A1 \u09AC\u09BF\u0995\u09CD\u09B0\u09BF",`\u098F\u0995\u099C\u09A8 \u098F\u0995\u09BE\u0987 \u0996\u09C7\u09AF\u09BC\u09C7\u099B\u09C7\u09A8 ${de(Math.ceil(e.tea/3))} \u0995\u09BE\u09AA\u0964 \u09A6\u09CB\u0995\u09BE\u09A8\u09BF "\u09B9\u09BF\u09B0\u09CB \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u099A\u09BE" \u099A\u09BE\u09B2\u09C1 \u0995\u09B0\u099B\u09C7\u09A8, \u09A6\u09BE\u09AE \u09A6\u09CD\u09AC\u09BF\u0997\u09C1\u09A3\u0964`]),e.onions&&i.push(["\u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C \u098F\u0996\u09A8 \u0985\u09B8\u09CD\u09A4\u09CD\u09B0",`${de(e.onions)}\u099F\u09BF \u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C \u09A8\u09BF\u0995\u09CD\u09B7\u09C7\u09AA, \u09AC\u09BE\u099C\u09BE\u09B0\u09A6\u09B0\u09C7 \u0995\u09CD\u09B7\u09A4\u09BF ${Zt(e.onions*300)}\u0964 \u09A8\u09BF\u0995\u09CD\u09B7\u09C7\u09AA\u0995\u09BE\u09B0\u09C0 \u09AC\u09B2\u09C7\u09A8, "\u09A6\u09BE\u09AE \u09AC\u09C7\u09B6\u09BF, \u09A4\u09BE\u0987 \u099B\u09C1\u09A1\u09BC\u09B2\u09C7\u0993 \u09B2\u09BE\u09AD\u0964"`]),e.busKOs&&i.push(["\u09AC\u09BE\u09B8 \u099A\u09BE\u09B2\u0995\u09A6\u09C7\u09B0 \u0985\u09A8\u09BF\u099A\u09CD\u099B\u09BE\u0995\u09C3\u09A4 \u0985\u09AC\u09A6\u09BE\u09A8",`${de(e.busKOs)} \u099C\u09A8 \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C\u0995\u09C7 \u09AC\u09BE\u09B8 \u09A7\u09BE\u0995\u09CD\u0995\u09BE \u09A6\u09BF\u09AF\u09BC\u09C7\u099B\u09C7\u0964 \u099A\u09BE\u09B2\u0995\u09B0\u09BE \u0995\u09BE\u0989\u0995\u09C7 \u09A6\u09C7\u0996\u09C7\u09A8\u09A8\u09BF, \u09AF\u09C7\u09AE\u09A8 \u0995\u0996\u09A8\u09CB\u0987 \u09A6\u09C7\u0996\u09C7\u09A8 \u09A8\u09BE\u0964`]),e.busHits&&i.push(["\u09A8\u09BF\u099C\u09C7\u0993 \u09AC\u09BE\u09B8\u09C7\u09B0 \u09A7\u09BE\u0995\u09CD\u0995\u09BE \u0996\u09C7\u09B2\u09C7\u09A8",`\u09A6\u09BF\u09A8\u09C7 ${de(e.busHits)} \u09AC\u09BE\u09B0\u0964 \u099F\u09CD\u09B0\u09BE\u09AB\u09BF\u0995 \u09AC\u09BF\u09AD\u09BE\u0997 \u09AC\u09B2\u099B\u09C7, "\u099C\u09C7\u09AC\u09CD\u09B0\u09BE \u0995\u09CD\u09B0\u09B8\u09BF\u0982 \u099B\u09BF\u09B2 \u09A8\u09BE, \u09A4\u09BE\u0987 \u09A6\u09BE\u09AF\u09BC \u099C\u09C7\u09AC\u09CD\u09B0\u09BE\u09B0\u0964"`]),e.maxCombo>=5&&i.push(["\u0995\u09BE\u09B0\u09BE\u09A4\u09C7 \u0995\u09CD\u09B2\u09BE\u09AC\u09C7 \u09AD\u09B0\u09CD\u09A4\u09BF\u09B0 \u09B9\u09BF\u09A1\u09BC\u09BF\u0995",`\u099F\u09BE\u09A8\u09BE ${de(e.maxCombo)} \u09B9\u09BF\u099F\u09C7\u09B0 \u0995\u09AE\u09CD\u09AC\u09CB \u09A6\u09C7\u0996\u09C7 \u09AA\u09BE\u09A1\u09BC\u09BE\u09B0 \u0995\u09BE\u09B0\u09BE\u09A4\u09C7 \u0995\u09CD\u09B2\u09BE\u09AC\u09C7 \u09B2\u09AE\u09CD\u09AC\u09BE \u09B2\u09BE\u0987\u09A8\u0964 \u09AB\u09BF \u09AC\u09C7\u09A1\u09BC\u09C7\u099B\u09C7, \u09B8\u09BF\u09A8\u09CD\u09A1\u09BF\u0995\u09C7\u099F \u09B8\u09A8\u09CD\u09A6\u09C7\u09B9\u0964`]),e.extortions&&i.push(["\u099A\u09BE\u0981\u09A6\u09BE\u09AC\u09BE\u099C\u09BF \u09A4\u09AC\u09C1\u0993 \u09B9\u09B2\u09CB",`${de(e.extortions)} \u09AC\u09BE\u09B0${t.extorts[0]&&t.extorts[0].place?`, \u09AA\u09CD\u09B0\u09A5\u09AE\u099F\u09BF ${t.extorts[0].place}-\u098F`:""}\u0964 \u09A6\u09CB\u0995\u09BE\u09A8\u09BF\u09B0\u09BE \u099C\u09BE\u09A8\u09A4\u09C7 \u099A\u09BE\u09A8 \u09AA\u09A5\u099A\u09BE\u09B0\u09C0 \u09A4\u0996\u09A8 \u0995\u09CB\u09A5\u09BE\u09AF\u09BC \u099B\u09BF\u09B2\u09C7\u09A8\u0964 (\u09B8\u09C2\u09A4\u09CD\u09B0: \u099A\u09BE \u0996\u09BE\u099A\u09CD\u099B\u09BF\u09B2\u09C7\u09A8)`]),s.ghush&&i.push(["\u0985\u09AB\u09BF\u09B8\u09C7 \u09AB\u09BE\u0987\u09B2 \u09A8\u09A1\u09BC\u099B\u09C7",`${de(s.ghush)} \u099C\u09A8 \u0998\u09C1\u09B7\u0996\u09CB\u09B0 \u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0 \u09B9\u0993\u09AF\u09BC\u09BE\u09B0 \u09AA\u09B0 \u09AB\u09BE\u0987\u09B2\u0997\u09C1\u09B2\u09CB \u09A8\u09BF\u099C\u09C7 \u09A8\u09BF\u099C\u09C7\u0987 \u099F\u09C7\u09AC\u09BF\u09B2 \u09AA\u09BE\u09B0 \u09B9\u099A\u09CD\u099B\u09C7\u0964 \u0995\u09B0\u09CD\u09AE\u099A\u09BE\u09B0\u09C0\u09B0\u09BE \u09AD\u09AF\u09BC\u09C7 \u099B\u09C1\u099F\u09BF\u09B0 \u0986\u09AC\u09C7\u09A6\u09A8 \u0995\u09B0\u09C7\u099B\u09C7\u09A8\u0964`]),s.mastan&&i.push(["\u09B2\u09BE\u09A0\u09BF\u09B0 \u09AC\u09BE\u099C\u09BE\u09B0\u09C7 \u09AE\u09A8\u09CD\u09A6\u09BE",`${de(s.mastan)} \u099C\u09A8 \u09AE\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8 \u0995\u09BE\u09AC\u09C1, \u09AC\u09BE\u0981\u09B6\u09C7\u09B0 \u09B2\u09BE\u09A0\u09BF\u09B0 \u099A\u09BE\u09B9\u09BF\u09A6\u09BE \u0995\u09AE\u09C7\u099B\u09C7\u0964 \u09B2\u09BE\u09A0\u09BF \u09AC\u09CD\u09AF\u09AC\u09B8\u09BE\u09AF\u09BC\u09C0 \u09B8\u09AE\u09BF\u09A4\u09BF \u09AA\u09CD\u09B0\u09A3\u09CB\u09A6\u09A8\u09BE \u099A\u09C7\u09AF\u09BC\u09C7\u099B\u09C7\u0964`]),e.method.broom&&i.push(["\u099D\u09BE\u09A1\u09BC\u09C1\u09B0 \u09A6\u09BE\u09AE \u0986\u0995\u09BE\u09B6\u09C7",`${de(e.method.broom)} \u099C\u09A8\u0995\u09C7 \u099D\u09BE\u09A1\u09BC\u09C1\u09AA\u09C7\u099F\u09BE \u0995\u09B0\u09BE\u09B0 \u0996\u09AC\u09B0\u09C7 \u09AC\u09BE\u099C\u09BE\u09B0\u09C7 \u099D\u09BE\u09A1\u09BC\u09C1 \u0989\u09A7\u09BE\u0993\u0964 \u09B8\u09BF\u099F\u09BF \u0995\u09B0\u09CD\u09AA\u09CB\u09B0\u09C7\u09B6\u09A8 \u09AC\u09B2\u099B\u09C7, "\u0986\u09AE\u09B0\u09BE\u0993 \u0995\u09BF\u09A8\u09A4\u09C7 \u09AA\u09BE\u09B0\u099B\u09BF \u09A8\u09BE\u0964"`]),e.method.stick&&i.push(["\u09B2\u09BE\u09A0\u09BF \u09AB\u09C7\u09B0\u09A4 \u0997\u09C7\u09B2 \u09AE\u09BE\u09B2\u09BF\u0995\u09C7\u09B0 \u0995\u09BE\u099B\u09C7",`\u09AE\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8\u09C7\u09B0 \u09B2\u09BE\u09A0\u09BF \u09A6\u09BF\u09AF\u09BC\u09C7\u0987 \u0995\u09BE\u09AC\u09C1 \u09B9\u09B2\u09CB ${de(e.method.stick)} \u099C\u09A8\u0964 \u09AE\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8\u09B0\u09BE \u09AC\u09B2\u099B\u09C7, "\u09B2\u09BE\u09A0\u09BF \u09A7\u09BE\u09B0 \u09A6\u09C7\u0993\u09AF\u09BC\u09BE\u099F\u09BE\u0987 \u09AD\u09C1\u09B2 \u09B9\u0987\u099B\u09C7\u0964"`]),e.rides&&i.push(["\u09B0\u09BF\u0995\u09B6\u09BE \u09AE\u09BE\u09B2\u09BF\u0995 \u09B8\u09AE\u09BF\u09A4\u09BF\u09B0 \u0989\u09A6\u09CD\u09AC\u09C7\u0997",`${de(e.rides)}\u099F\u09BF \u09AA\u09BE\u09B0\u09CD\u0995 \u0995\u09B0\u09BE \u09AF\u09BE\u09A8 "\u09A7\u09BE\u09B0" \u09A8\u09C7\u0993\u09AF\u09BC\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7, \u099A\u09B2\u09C7\u099B\u09C7 \u09AE\u09CB\u099F ${de(Math.round(e.rideDist))} \u09AE\u09BF\u099F\u09BE\u09B0\u0964 \u09AD\u09BE\u09A1\u09BC\u09BE \u098F\u0996\u09A8\u09CB \u09AA\u09B0\u09BF\u09B6\u09CB\u09A7 \u09B9\u09AF\u09BC\u09A8\u09BF\u0964`]),e.stalls&&i.push(["\u09B8\u09BF\u098F\u09A8\u099C\u09BF \u098F\u0996\u09A8 \u09A8\u09CC\u0995\u09BE",`\u099C\u09B2\u09BE\u09AC\u09A6\u09CD\u09A7\u09A4\u09BE\u09AF\u09BC ${de(e.stalls)} \u09AC\u09BE\u09B0 \u09B8\u09BF\u098F\u09A8\u099C\u09BF\u09B0 \u0987\u099E\u09CD\u099C\u09BF\u09A8 \u09AC\u09A8\u09CD\u09A7\u0964 \u099A\u09BE\u09B2\u0995 \u09AC\u09B2\u099B\u09C7\u09A8, "\u09AE\u09BF\u099F\u09BE\u09B0\u09C7 \u09AA\u09BE\u09A8\u09BF \u09A2\u09C1\u0995\u099B\u09C7, \u09AD\u09BE\u09A1\u09BC\u09BE \u098F\u0996\u09A8 \u09A6\u09CD\u09AC\u09BF\u0997\u09C1\u09A3\u0964"`]),e.copiesTorn&&i.push(["\u09AB\u099F\u09CB\u0995\u09AA\u09BF\u09B0 \u09A6\u09CB\u0995\u09BE\u09A8\u09C7 \u09A4\u09B2\u09CD\u09B2\u09BE\u09B6\u09BF",`${de(e.copiesTorn)}\u099F\u09BF \u099C\u09C0\u09AC\u09A8\u09CD\u09A4 \u09AB\u099F\u09CB\u0995\u09AA\u09BF \u099B\u09C7\u0981\u09A1\u09BC\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964 \u09AB\u099F\u09CB\u0995\u09AA\u09BF \u09AE\u09BE\u09B2\u09BF\u0995 \u09B8\u09AE\u09BF\u09A4\u09BF \u09AC\u09B2\u099B\u09C7, "\u0986\u09AE\u09B0\u09BE \u09B6\u09C1\u09A7\u09C1 \u0995\u09BE\u0997\u099C \u0995\u09AA\u09BF \u0995\u09B0\u09BF, \u09AE\u09BE\u09A8\u09C1\u09B7 \u09A8\u09BE\u0964"`]),e.blinded&&i.push(["\u099A\u09CB\u0996\u09C7 \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09AA\u09A4\u09CD\u09B0",`${de(e.blinded)} \u09AC\u09BE\u09B0 \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09AA\u09A4\u09CD\u09B0 \u0989\u09A1\u09BC\u09C7 \u098F\u09B8\u09C7 \u099A\u09CB\u0996 \u09A2\u09C7\u0995\u09C7\u099B\u09C7\u0964 \u099A\u0995\u09CD\u09B7\u09C1 \u09AC\u09BF\u09B6\u09C7\u09B7\u099C\u09CD\u099E: "\u09AA\u09CD\u09B0\u09B6\u09CD\u09A8 \u09AB\u09BE\u0981\u09B8 \u099A\u09CB\u0996\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0995\u09CD\u09B7\u09A4\u09BF\u0995\u09B0\u0964"`]),e.poisoned>1&&i.push(["\u09AD\u09C7\u099C\u09BE\u09B2\u09C7\u09B0 \u09AC\u09BF\u09B7\u09C7 \u09B8\u09AC\u09C1\u099C \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE",`${de(Math.round(e.poisoned))} \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1 \u09AC\u09BF\u09B7\u09BE\u0995\u09CD\u09A4 \u09A6\u09BE\u0997\u09C7 \u09A6\u09BE\u0981\u09A1\u09BC\u09BF\u09AF\u09BC\u09C7 \u099B\u09BF\u09B2\u09C7\u09A8\u0964 \u0993\u09B7\u09C1\u09A7 \u09AA\u09CD\u09B0\u09B6\u09BE\u09B8\u09A8 \u09AC\u09B2\u099B\u09C7, "\u09A6\u09BE\u0997\u099F\u09BE \u0986\u09B8\u09B2\u09C7 \u09AD\u09BF\u099F\u09BE\u09AE\u09BF\u09A8\u0964"`]),e.dozers&&i.push(["\u09AC\u09C1\u09B2\u09A1\u09CB\u099C\u09BE\u09B0\u09C7\u09B0 \u09B2\u09BE\u0987\u09B8\u09C7\u09A8\u09CD\u09B8 \u09A8\u09C7\u0987",`${de(e.dozers)} \u09AC\u09BE\u09B0 \u09AC\u09C1\u09B2\u09A1\u09CB\u099C\u09BE\u09B0 \u09A1\u09BE\u0995\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964 \u09AC\u09C1\u09B2\u09A1\u09CB\u099C\u09BE\u09B0\u09C7\u09B0 \u0995\u09BE\u0997\u099C\u09AA\u09A4\u09CD\u09B0 \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u0997\u09C7\u099B\u09C7 \u098F\u0995\u099F\u09BF \u09AD\u09C2\u09AE\u09BF \u0985\u09AB\u09BF\u09B8\u09C7\u09B0 \u09A1\u09CD\u09B0\u09AF\u09BC\u09BE\u09B0\u09C7\u0964`]),e.kanned&&i.push(["\u09AB\u09C1\u099F\u09AA\u09BE\u09A4\u09C7 \u0989\u09A0\u09AC\u09B8 \u0995\u09CD\u09B2\u09BE\u09B8",`${de(e.kanned)} \u099C\u09A8 \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C\u0995\u09C7 \u0995\u09BE\u09A8 \u09A7\u09B0\u09C7 \u0989\u09A0\u09AC\u09B8 \u0995\u09B0\u09BE\u09A8\u09CB \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964 \u098F\u0995\u099C\u09A8 \u099C\u09BE\u09A8\u09BE\u09A8, "\u09B8\u09CD\u09AF\u09BE\u09B0\u09C7\u09B0 \u099A\u09C7\u09B9\u09BE\u09B0\u09BE \u09A6\u09C7\u0996\u09C7 \u09B9\u09BE\u09A4 \u09A8\u09BF\u099C\u09C7 \u09A8\u09BF\u099C\u09C7 \u0995\u09BE\u09A8\u09C7 \u099A\u09B2\u09C7 \u0997\u09C7\u099B\u09C7\u0964"`]),t.shed&&i.push(["\u09B2\u09CB\u09A1\u09B6\u09C7\u09A1\u09BF\u0982 \u09A8\u09C7\u0987, \u09B6\u09C1\u09A7\u09C1 \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u09A8\u09C7\u0987",'\u09B0\u09BE\u09A4\u09C7 \u09AC\u09C7\u09B6 \u0995\u09BF\u099B\u09C1\u0995\u09CD\u09B7\u09A3 \u09AC\u09BE\u09A4\u09BF \u09A8\u09BF\u09AD\u09C7 \u099B\u09BF\u09B2\u0964 \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u09AC\u09BF\u09AD\u09BE\u0997 \u09AC\u09B2\u099B\u09C7, \u098F\u099F\u09BE "\u09AA\u09B0\u09BF\u0995\u09B2\u09CD\u09AA\u09BF\u09A4 \u0985\u09A8\u09CD\u09A7\u0995\u09BE\u09B0"\u0964']),t.flood&&i.push(["\u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u09A8\u09BE \u09A8\u09A6\u09C0?",'\u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09B0 \u09AA\u09B0 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC \u09B9\u09BE\u0981\u099F\u09C1\u09AA\u09BE\u09A8\u09BF\u0964 \u09A8\u0997\u09B0 \u0995\u09B0\u09CD\u09A4\u09C3\u09AA\u0995\u09CD\u09B7 \u09A8\u09BE\u0997\u09B0\u09BF\u0995\u09A6\u09C7\u09B0 "\u09B8\u09BE\u0981\u09A4\u09BE\u09B0 \u09B6\u09C7\u0996\u09BE\u09B0" \u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6 \u09A6\u09BF\u09AF\u09BC\u09C7\u099B\u09C7\u0964']),e.swings>60&&n.kos<3&&i.push(["\u09AC\u09BE\u09A4\u09BE\u09B8\u09C7\u09B0 \u09AC\u09BF\u09B0\u09C1\u09A6\u09CD\u09A7\u09C7 \u09B2\u09A1\u09BC\u09BE\u0987",`${de(e.swings)}\u099F\u09BF \u0998\u09C1\u09B7\u09BF, \u09AC\u09C7\u09B6\u09BF\u09B0\u09AD\u09BE\u0997\u0987 \u09AC\u09BE\u09A4\u09BE\u09B8\u09C7\u0964 \u0986\u09AC\u09B9\u09BE\u0993\u09AF\u09BC\u09BE \u0985\u09AB\u09BF\u09B8 \u099C\u09BE\u09A8\u09BE\u09AF\u09BC, \u098F\u09B2\u09BE\u0995\u09BE\u09B0 \u09AC\u09BE\u09A4\u09BE\u09B8 \u098F\u0996\u09A8 \u0986\u09B9\u09A4\u0964`]),i.length||i.push(["\u0986\u099C\u0995\u09C7\u09B0 \u0996\u09AC\u09B0 \u09A8\u09C7\u0987","\u09B8\u0982\u09AC\u09BE\u09A6\u09A6\u09BE\u09A4\u09BE \u099A\u09BE \u0996\u09C7\u09A4\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7\u099B\u09BF\u09B2\u09C7\u09A8\u0964 \u09AB\u09BF\u09B0\u09C7 \u098F\u09B8\u09C7 \u09A6\u09C7\u0996\u09C7\u09A8 \u09B8\u09AC \u09B6\u09C7\u09B7\u0964"]),oa(i,4)}var Qy=["\u0986\u099C \u09AA\u0995\u09C7\u099F\u09C7 \u09B9\u09BE\u09A4 \u09A6\u09BF\u09B2\u09C7 \u099F\u09BE\u0995\u09BE \u09AA\u09BE\u09AC\u09C7\u09A8 \u09A8\u09BE, \u0995\u09BE\u09B0\u09A3 \u099A\u09BE\u0981\u09A6\u09BE\u09AC\u09BE\u099C \u0986\u0997\u09C7\u0987 \u09A6\u09BF\u09AF\u09BC\u09C7\u099B\u09C7\u0964 \u09B6\u09C1\u09AD \u09B0\u0982: \u09AC\u09BE\u09B8\u09C7\u09B0 \u09B2\u09BE\u09B2\u0964","\u09AA\u09C1\u09B0\u09A8\u09CB \u09B6\u09A4\u09CD\u09B0\u09C1 \u09AB\u09BF\u09B0\u09C7 \u0986\u09B8\u09AC\u09C7, \u09B8\u09BE\u09A5\u09C7 \u0986\u09A8\u09AC\u09C7 \u09B2\u09BE\u09A0\u09BF\u0964 \u09A1\u099C \u09AC\u09BE\u099F\u09A8 \u09B9\u09BE\u09A4\u09C7\u09B0 \u0995\u09BE\u099B\u09C7 \u09B0\u09BE\u0996\u09C1\u09A8\u0964","\u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C \u09A5\u09C7\u0995\u09C7 \u09A6\u09C2\u09B0\u09C7 \u09A5\u09BE\u0995\u09C1\u09A8, \u09A6\u09BE\u09AE\u09C7 \u098F\u09AC\u0982 \u09A8\u09BF\u09B6\u09BE\u09A8\u09BE\u09AF\u09BC, \u09A6\u09C1\u0987\u09AD\u09BE\u09AC\u09C7\u0987\u0964",'\u0995\u09CB\u09A8\u09CB \u098F\u0995 \u0985\u09AB\u09BF\u09B8\u09BE\u09B0 "\u099A\u09BE-\u09AA\u09BE\u09A8\u09BF\u09B0" \u0995\u09A5\u09BE \u09AC\u09B2\u09AC\u09C7\u09A8\u0964 \u099A\u09BE \u09A8\u09BF\u09A8, \u09AA\u09BE\u09A8\u09BF \u09A8\u09BF\u09A8, \u099F\u09BE\u0995\u09BE \u09A6\u09C7\u09AC\u09C7\u09A8 \u09A8\u09BE\u0964',"\u09AA\u09CD\u09B0\u09C7\u09AE\u09C7 \u09B8\u09BE\u09AB\u09B2\u09CD\u09AF \u0986\u09B8\u09AC\u09C7, \u09AF\u09A6\u09BF \u09AA\u09CD\u09B0\u09C7\u09AE\u09BF\u0995\u09BE \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BF\u09B0\u09CB\u09A7\u09C0 \u09B9\u09A8\u0964 \u09A8\u09BE \u09B9\u09B2\u09C7 \u0986\u0997\u09C7 \u09A4\u09A6\u09A8\u09CD\u09A4 \u0995\u09AE\u09BF\u099F\u09BF \u0995\u09B0\u09C1\u09A8\u0964","\u0986\u099C \u09AC\u09C3\u09B7\u09CD\u099F\u09BF \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964 \u099B\u09BE\u09A4\u09BE \u09A8\u09BF\u09A8, \u0996\u09BE\u09B2\u09BE\u09AE\u09CD\u09AE\u09BE\u09B0 \u09AE\u09A4\u09CB \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8\u0964",'\u0995\u09C7\u0989 \u0986\u09AA\u09A8\u09BE\u0995\u09C7 "\u09E7\u09E6\u09E6% \u0995\u09AE\u09A8 \u09B8\u09BE\u099C\u09C7\u09B6\u09A8" \u09A6\u09BF\u09A4\u09C7 \u099A\u09BE\u0987\u09B2\u09C7 \u09A6\u09CC\u09A1\u09BC \u09A6\u09BF\u09A8, \u09AA\u09BE\u09B0\u09B2\u09C7 \u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7\u09B2 \u099B\u09C1\u09A1\u09BC\u09C7\u0964',"\u09B0\u09BE\u09A4 \u0986\u099F\u099F\u09BE\u09B0 \u09AA\u09B0 \u09B2\u09CB\u09A1\u09B6\u09C7\u09A1\u09BF\u0982 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964 \u0985\u09A8\u09CD\u09A7\u0995\u09BE\u09B0\u09C7 \u0998\u09C1\u09B7\u09BF \u09A6\u09BF\u09B2\u09C7 \u0986\u0997\u09C7 \u09A8\u09BF\u09B6\u09CD\u099A\u09BF\u09A4 \u09B9\u09CB\u09A8 \u0993\u099F\u09BE \u09AE\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8, \u09A6\u09C7\u09AF\u09BC\u09BE\u09B2 \u09A8\u09BE\u0964","\u0986\u099C \u098F\u0995 \u09B0\u09BF\u0995\u09B6\u09BE\u0993\u09AF\u09BC\u09BE\u09B2\u09BE \u09AD\u09BE\u09A1\u09BC\u09BE \u09A8\u09BF\u09AF\u09BC\u09C7 \u09A4\u09B0\u09CD\u0995 \u0995\u09B0\u09AC\u09C7\u09A8 \u09A8\u09BE\u0964 \u09A6\u09BF\u09A8\u099F\u09BE \u0995\u09CD\u09AF\u09BE\u09B2\u09C7\u09A8\u09CD\u09A1\u09BE\u09B0\u09C7 \u09B2\u09BF\u0996\u09C7 \u09B0\u09BE\u0996\u09C1\u09A8\u0964","\u0986\u09AA\u09A8\u09BE\u09B0 \u099C\u09AE\u09BF\u09A4\u09C7 \u0995\u09C7\u0989 \u09AC\u09C1\u09B2\u09A1\u09CB\u099C\u09BE\u09B0 \u0986\u09A8\u09B2\u09C7 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09B0 \u09AE\u09BE\u099D\u0996\u09BE\u09A8\u09C7 \u09A6\u09BE\u0981\u09A1\u09BC\u09BE\u09AC\u09C7\u09A8 \u09A8\u09BE, \u09AA\u09BE\u09B6\u09C7 \u09A6\u09BE\u0981\u09A1\u09BC\u09BF\u09AF\u09BC\u09C7 \u099A\u09BF\u09CE\u0995\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8\u0964"],ev=[["\u09B9\u09BE\u09B0\u09BE\u09A8\u09CB \u09AC\u09BF\u099C\u09CD\u099E\u09AA\u09CD\u09A4\u09BF",n=>`${de(Math.max(1,n.kos))} \u099C\u09A8 \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C\u09C7\u09B0 \u09AE\u09BE\u09A8-\u09B8\u09AE\u09CD\u09AE\u09BE\u09A8 \u09B9\u09BE\u09B0\u09BF\u09AF\u09BC\u09C7 \u0997\u09C7\u099B\u09C7\u0964 \u0995\u09C7\u0989 \u0996\u09C1\u0981\u099C\u09C7 \u09AA\u09C7\u09B2\u09C7 \u09AB\u09C7\u09B0\u09A4 \u09A6\u09C7\u09AC\u09C7\u09A8 \u09A8\u09BE\u0964`],["\u09AA\u09BE\u09A4\u09CD\u09B0\u09C0 \u099A\u09BE\u0987",()=>'\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u0985\u09AB\u09BF\u09B8\u09BE\u09B0 \u09AA\u09BE\u09A4\u09CD\u09B0\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF\u0964 \u09AC\u09C7\u09A4\u09A8 \u0995\u09AE, "\u0989\u09AA\u09B0\u09BF" \u0985\u09A8\u09C7\u0995\u0964 (\u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09AA\u09A8\u099F\u09BF \u098F\u0996\u09A8 \u09A6\u09C1\u09A6\u0995\u09C7\u09B0 \u09A4\u09A6\u09A8\u09CD\u09A4\u09BE\u09A7\u09C0\u09A8)'],["\u0986\u09AC\u09B6\u09CD\u09AF\u0995",()=>"\u098F\u0995\u099C\u09A8 \u09B8\u09CE \u0985\u09AB\u09BF\u09B8\u09BE\u09B0\u0964 \u0985\u09AD\u09BF\u099C\u09CD\u099E\u09A4\u09BE \u09B2\u09BE\u0997\u09AC\u09C7 \u09A8\u09BE, \u0995\u09BE\u09B0\u09A3 \u0985\u09AD\u09BF\u099C\u09CD\u099E \u0995\u09BE\u0989\u0995\u09C7 \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF\u0964"],["\u099C\u09B0\u09C1\u09B0\u09BF",()=>"\u098F\u0995\u099F\u09BF \u09AC\u09BE\u09B8\u09C7\u09B0 \u09AC\u09CD\u09B0\u09C7\u0995 \u0996\u09C1\u0981\u099C\u099B\u09BF\u0964 \u09B6\u09C7\u09B7 \u09A6\u09C7\u0996\u09BE \u0997\u09BF\u09AF\u09BC\u09C7\u099B\u09BF\u09B2 \u09E7\u09EF\u09EF\u09EE \u09B8\u09BE\u09B2\u09C7\u0964 \u09B8\u09A8\u09CD\u09A7\u09BE\u09A8\u09A6\u09BE\u09A4\u09BE\u0995\u09C7 \u09AA\u09C1\u09B0\u09B8\u09CD\u0995\u09C3\u09A4 \u0995\u09B0\u09BE \u09B9\u09AC\u09C7\u0964"],["\u09AC\u09BF\u0995\u09CD\u09B0\u09AF\u09BC",(n,e)=>e.kosBy.mastan?"\u09B8\u09BE\u09AE\u09BE\u09A8\u09CD\u09AF \u09AC\u09CD\u09AF\u09AC\u09B9\u09C3\u09A4 \u09AC\u09BE\u0981\u09B6\u09C7\u09B0 \u09B2\u09BE\u09A0\u09BF\u0964 \u09AE\u09BE\u09B2\u09BF\u0995 \u0986\u09AA\u09BE\u09A4\u09A4 \u09B9\u09BE\u09B8\u09AA\u09BE\u09A4\u09BE\u09B2\u09C7\u0964 \u09A6\u09BE\u09AE \u0986\u09B2\u09CB\u099A\u09A8\u09BE\u09B8\u09BE\u09AA\u09C7\u0995\u09CD\u09B7\u09C7\u0964":"\u098F\u0995\u099F\u09BF \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AE\u09C1\u0995\u09CD\u09A4 \u09AC\u09BF\u09AC\u09C7\u0995\u0964 \u0995\u0996\u09A8\u09CB \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u09B9\u09AF\u09BC\u09A8\u09BF, \u09A4\u09BE\u0987 \u098F\u0995\u09A6\u09AE \u09A8\u09A4\u09C1\u09A8\u0964"],["\u099F\u09C1-\u09B2\u09C7\u099F",(n,e)=>e.kosBy.syndicate?'\u098F\u0995\u099F\u09BF \u0997\u09C1\u09A6\u09BE\u09AE \u09AD\u09BE\u09A1\u09BC\u09BE \u09B9\u09AC\u09C7, \u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C \u099B\u09BE\u09A1\u09BC\u09BE\u0964 \u0986\u0997\u09C7\u09B0 \u09AD\u09BE\u09A1\u09BC\u09BE\u099F\u09BF\u09AF\u09BC\u09BE "\u09B8\u09BE\u09AA\u09CD\u09B2\u09BE\u0987 \u09A8\u09BE\u0987" \u09AC\u09B2\u09C7 \u099A\u09B2\u09C7 \u0997\u09C7\u099B\u09C7\u09A8\u0964':"\u09AB\u09C1\u099F\u09AA\u09BE\u09A4\u09C7 \u09A6\u09CB\u0995\u09BE\u09A8\u09C7\u09B0 \u099C\u09BE\u09AF\u09BC\u0997\u09BE\u0964 \u099A\u09BE\u0981\u09A6\u09BE \u09B2\u09BE\u0997\u09AC\u09C7 \u09A8\u09BE (\u098F\u0987 \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF)\u0964"],["\u0995\u09CB\u099A\u09BF\u0982",()=>"\u09AA\u09CD\u09B0\u09B6\u09CD\u09A8 \u09AB\u09BE\u0981\u09B8 \u099B\u09BE\u09A1\u09BC\u09BE\u0987 \u09AA\u09BE\u09B6 \u0995\u09B0\u09BE\u09B0 \u0997\u09CB\u09AA\u09A8 \u0995\u09CC\u09B6\u09B2 \u09B6\u09C7\u0996\u09BE\u09A8\u09CB \u09B9\u09AF\u09BC\u0964 \u0995\u09CC\u09B6\u09B2: \u09AA\u09A1\u09BC\u09BE\u09B6\u09CB\u09A8\u09BE\u0964 \u09AD\u09B0\u09CD\u09A4\u09BF \u099A\u09B2\u099B\u09C7, \u0995\u09C7\u0989 \u0986\u09B8\u099B\u09C7 \u09A8\u09BE\u0964"],["\u09A8\u09BF\u09B2\u09BE\u09AE",(n,e)=>e.kosBy.bhumi?'\u098F\u0995\u099F\u09BF \u09AC\u09CD\u09AF\u09AC\u09B9\u09C3\u09A4 \u09AC\u09C1\u09B2\u09A1\u09CB\u099C\u09BE\u09B0\u0964 \u0986\u0997\u09C7\u09B0 \u09AE\u09BE\u09B2\u09BF\u0995 "\u09AC\u09CD\u09AF\u09B8\u09CD\u09A4"\u0964 \u0995\u09BE\u0997\u099C\u09AA\u09A4\u09CD\u09B0 \u09A8\u09C7\u0987, \u09A4\u09AC\u09C7 \u0986\u09A4\u09CD\u09AE\u09AC\u09BF\u09B6\u09CD\u09AC\u09BE\u09B8 \u0986\u099B\u09C7\u0964':"\u09A4\u09BF\u09A8\u09AC\u09BE\u09B0 \u0996\u09CB\u0981\u09A1\u09BC\u09BE \u098F\u0995\u099F\u09BF \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u0964 \u099A\u09A4\u09C1\u09B0\u09CD\u09A5\u09AC\u09BE\u09B0 \u0996\u09CB\u0981\u09A1\u09BC\u09BE\u09B0 \u0985\u09A7\u09BF\u0995\u09BE\u09B0\u09B8\u09B9 \u09AC\u09BF\u0995\u09CD\u09B0\u09BF \u09B9\u09AC\u09C7\u0964"],["\u0995\u09CD\u09B7\u09AE\u09BE \u09AA\u09CD\u09B0\u09BE\u09B0\u09CD\u09A5\u09A8\u09BE",(n,e,t)=>`\u0986\u09AE\u09BF ${t.nicks[0]||"\u098F\u0995 \u09AE\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8"}, \u0985\u09A8\u09BF\u099A\u09CD\u099B\u09BE\u0995\u09C3\u09A4\u09AD\u09BE\u09AC\u09C7 \u099A\u09BE\u0981\u09A6\u09BE\u09AC\u09BE\u099C\u09BF \u0995\u09B0\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u09A6\u09C1\u0983\u0996\u09BF\u09A4\u0964 \u0987\u099A\u09CD\u099B\u09BE\u0995\u09C3\u09A4\u0997\u09C1\u09B2\u09CB\u09B0 \u099C\u09A8\u09CD\u09AF \u09A6\u09C1\u0983\u0996\u09BF\u09A4 \u09A8\u0987\u0964`],["\u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u0997\u09BF\u09AF\u09BC\u09C7\u099B\u09C7",(n,e)=>e.weapons?'\u098F\u0995\u099F\u09BF \u099D\u09BE\u09A1\u09BC\u09C1, \u0995\u09AF\u09BC\u09C7\u0995\u099F\u09BF \u09A6\u09BE\u0981\u09A4, \u098F\u0995\u099F\u09BF "\u09AD\u09BE\u0987" \u09B2\u09C7\u0996\u09BE \u09B8\u09CD\u099F\u09BF\u0995\u09BE\u09B0\u0964 \u09AE\u09BE\u09B2\u09BF\u0995\u09B0\u09BE \u099A\u09BE\u0987\u09B2\u09C7 \u09A5\u09BE\u09A8\u09BE\u09AF\u09BC \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8 (\u09A5\u09BE\u09A8\u09BE \u09AC\u09A8\u09CD\u09A7)\u0964':"\u098F\u0995\u099F\u09BF \u09AB\u09BE\u0987\u09B2, \u09AF\u09BE \u09A4\u09BF\u09A8 \u09AC\u099B\u09B0 \u09A7\u09B0\u09C7 \u0995\u09C7\u0989 \u0996\u09C1\u0981\u099C\u099B\u09BF\u09B2\u0964 \u099F\u09C7\u09AC\u09BF\u09B2\u09C7\u09B0 \u09A8\u09BF\u099A\u09C7 \u099B\u09BF\u09B2\u0964"],["\u09AC\u09BF\u09A8\u09BF\u09AE\u09AF\u09BC",()=>"\u09A6\u09C1\u0987 \u0995\u09C7\u099C\u09BF \u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C\u09C7\u09B0 \u09AC\u09BF\u09A8\u09BF\u09AE\u09AF\u09BC\u09C7 \u098F\u0995\u099F\u09BF \u09AA\u09C1\u09B0\u09A8\u09CB \u09AE\u09CB\u099F\u09B0\u09B8\u09BE\u0987\u0995\u09C7\u09B2 \u09A6\u09BF\u09A4\u09C7 \u099A\u09BE\u0987\u0964 \u09B6\u09C1\u09A7\u09C1 \u09B8\u09BF\u09A8\u09CD\u09A1\u09BF\u0995\u09C7\u099F \u09B8\u09A6\u09B8\u09CD\u09AF\u09B0\u09BE \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09AC\u09C7\u09A8 \u09A8\u09BE\u0964"],["\u099F\u09BF\u0989\u09B6\u09A8\u09BF",(n,e)=>e.hero==="teacher"?"\u0985\u09AC\u09B8\u09B0\u09AA\u09CD\u09B0\u09BE\u09AA\u09CD\u09A4 \u09B6\u09BF\u0995\u09CD\u09B7\u0995 \u099F\u09BF\u0989\u09B6\u09A8\u09BF \u09A6\u09C7\u09AC\u09C7\u09A8\u0964 \u09AC\u09C7\u09A4 \u09A8\u09BF\u099C\u09B8\u09CD\u09AC\u0964 \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C\u09A6\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09AC\u09BF\u09B6\u09C7\u09B7 \u09AC\u09CD\u09AF\u09BE\u099A\u0964":"\u099B\u09BE\u09A4\u09CD\u09B0 \u09AA\u09A1\u09BC\u09BE\u09A4\u09C7 \u099A\u09BE\u0987\u0964 \u09AB\u09BF: \u09AE\u09BE\u09B8\u09C7 \u09A6\u09C1\u0987 \u0995\u09BE\u09AA \u099A\u09BE \u0986\u09B0 \u098F\u0995 \u09AA\u09CD\u09B2\u09C7\u099F \u09B8\u09BF\u0999\u09CD\u0997\u09BE\u09B0\u09BE\u0964"]],tv=[["\u09B8\u09A4\u09A4\u09BE \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8\u09BF\u0982","\u098F\u0996\u09BE\u09A8\u09C7 \u09AB\u09CB\u09A8 \u09AE\u09C7\u09B0\u09BE\u09AE\u09A4 \u09B9\u09AF\u09BC, \u09AC\u09BF\u09AC\u09C7\u0995 \u09A8\u09AF\u09BC\u0964 \u09AC\u09BF\u09AC\u09C7\u0995\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09AA\u09BE\u09B6\u09C7\u09B0 \u09A6\u09CB\u0995\u09BE\u09A8\u09C7 \u09AF\u09BE\u09A8 (\u09AC\u09A8\u09CD\u09A7)\u0964"],["\u09AE\u09BE\u09AF\u09BC\u09C7\u09B0 \u09A6\u09CB\u09AF\u09BC\u09BE \u09A1\u09CD\u09B0\u09BE\u0987\u09AD\u09BF\u0982 \u09B8\u09CD\u0995\u09C1\u09B2","\u09B9\u09B0\u09CD\u09A8 \u09AC\u09BE\u099C\u09BE\u09A8\u09CB\u09B0 \u0989\u09AA\u09B0 \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09CB\u09B0\u09CD\u09B8\u0964 \u09AC\u09CD\u09B0\u09C7\u0995 \u09B6\u09C7\u0996\u09BE\u09A8\u09CB \u09B9\u09AF\u09BC \u09A8\u09BE, \u099A\u09BE\u09B9\u09BF\u09A6\u09BE \u09A8\u09C7\u0987\u0964"],["\u09B9\u09BF\u09B0\u09CB \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u09A6\u09C1\u09A7-\u099A\u09BE","\u098F\u0995 \u099A\u09C1\u09AE\u09C1\u0995\u09C7 \u09A6\u09AE \u09AB\u09BF\u09B0\u09AC\u09C7 \u09E7\u09E6\u09E6%\u0964 \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C\u09A6\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09A6\u09BE\u09AE \u09A6\u09CD\u09AC\u09BF\u0997\u09C1\u09A3\u0964"],["\u099C\u09A8\u09A8\u09C0 \u099B\u09BE\u09A4\u09BE \u09B9\u09BE\u0989\u09B8","\u09AC\u09C3\u09B7\u09CD\u099F\u09BF, \u09B0\u09CB\u09A6, \u09AE\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8: \u09B8\u09AC \u09A5\u09C7\u0995\u09C7 \u09B0\u0995\u09CD\u09B7\u09BE \u09AA\u09C7\u09A4\u09C7 \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u099B\u09BE\u09A4\u09BE\u0964 \u0996\u09BE\u09B2\u09BE\u09AE\u09CD\u09AE\u09BE\u09B0\u09BE \u09AA\u09BE\u09AC\u09C7\u09A8 \u09E8\u09E6% \u099B\u09BE\u09A1\u09BC\u0964"],["\u09AD\u09BE\u0987 \u09AD\u09BE\u0987 \u09A8\u09CC\u0995\u09BE \u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8","\u09AC\u09B0\u09CD\u09B7\u09BE\u09AF\u09BC \u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u09A5\u09C7\u0995\u09C7 \u09AE\u09A4\u09BF\u099D\u09BF\u09B2\u0964 \u099C\u09CD\u09AF\u09BE\u09AE\u09C7 \u09A8\u09AF\u09BC, \u09AA\u09BE\u09A8\u09BF\u09A4\u09C7 \u0986\u099F\u0995\u09BE\u09AC\u09C7\u09A8\u0964"],["\u09AC\u09BE\u0982\u09B2\u09BE\u09B0 \u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7\u09B2","\u09A8\u09BF\u09B6\u09BE\u09A8\u09BE\u09AF\u09BC \u09A8\u09BF\u09B0\u09CD\u09AD\u09C1\u09B2, \u09AA\u09BE\u09AF\u09BC\u09C7 \u0986\u09B0\u09BE\u09AE\u09A6\u09BE\u09AF\u09BC\u0995\u0964 \u098F\u0995 \u099C\u09CB\u09A1\u09BC\u09BE \u0995\u09BF\u09A8\u09B2\u09C7 \u0986\u09B0\u09C7\u0995 \u09AA\u09BE\u099F\u09BF \u099B\u09CB\u09A1\u09BC\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u09AB\u09CD\u09B0\u09BF\u0964"],["\u0986\u09A6\u09B0\u09CD\u09B6 \u09AC\u09C7\u09A4 \u09AD\u09BE\u09A3\u09CD\u09A1\u09BE\u09B0","\u09AA\u09C1\u09B0\u09A8\u09CB \u09A6\u09BF\u09A8\u09C7\u09B0 \u0986\u09B8\u09B2 \u09AC\u09C7\u09A4\u0964 \u098F\u0996\u09A8 \u09B6\u09C1\u09A7\u09C1 \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C\u09A6\u09C7\u09B0 \u09B6\u09BE\u09B8\u09A8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09AC\u09BF\u0995\u09CD\u09B0\u09BF \u09B9\u09AF\u09BC\u0964"]];function nv(n,e,t){let i=[];return n.kos===0&&i.push("\u09B8\u09BE\u09B9\u09B8 \u0995\u09B0\u09C7 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC \u09A8\u09BE\u09AE\u09BE\u099F\u09BE\u0987 \u09AA\u09CD\u09B0\u09A5\u09AE \u09A7\u09BE\u09AA\u0964 \u09A6\u09CD\u09AC\u09BF\u09A4\u09C0\u09AF\u09BC \u09A7\u09BE\u09AA \u09B9\u09B2\u09CB \u0998\u09C1\u09B7\u09BF\u099F\u09BE \u09B2\u09BE\u0997\u09BE\u09A8\u09CB\u0964 \u0986\u09AE\u09B0\u09BE \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE\u09AF\u09BC \u09B0\u0987\u09B2\u09BE\u09AE\u0964"),t.boss&&i.push(`\u0986\u099C \u09AA\u09CD\u09B0\u09AE\u09BE\u09A3 \u09B9\u09B2\u09CB, ${t.boss.nick}-\u098F\u09B0 \u09AE\u09A4\u09CB \u09B2\u09CB\u0995\u09A6\u09C7\u09B0 \u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7 \u09AC\u09A1\u09BC \u09AD\u09AF\u09BC \u098F\u0995\u099C\u09A8 \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3 \u09AE\u09BE\u09A8\u09C1\u09B7\u0964 \u0995\u09BE\u09B2 \u09B9\u09AF\u09BC\u09A4\u09CB \u09A8\u09A4\u09C1\u09A8 \u0995\u09C7\u0989 \u0986\u09B8\u09AC\u09C7\u09A8, \u09AA\u09C1\u09B0\u09A8\u09CB \u09B8\u09CD\u09AC\u09AD\u09BE\u09AC \u09A8\u09BF\u09AF\u09BC\u09C7\u0964 \u099C\u09A8\u09A4\u09BE\u0993 \u0986\u09B8\u09AC\u09C7, \u09AA\u09C1\u09B0\u09A8\u09CB \u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7\u09B2 \u09A8\u09BF\u09AF\u09BC\u09C7\u0964`),t.names.length&&i.push(`${t.names[0]} \u0986\u099C \u09B6\u09C1\u09A7\u09C1 \u09B0\u0995\u09CD\u09B7\u09BE \u09AA\u09BE\u09A8\u09A8\u09BF, \u09A8\u09BF\u099C\u09C7\u0993 \u09B0\u09C1\u0996\u09C7 \u09A6\u09BE\u0981\u09A1\u09BC\u09BF\u09AF\u09BC\u09C7\u099B\u09C7\u09A8\u0964 \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09B0 \u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7 \u09AC\u09A1\u09BC \u09B6\u09A4\u09CD\u09B0\u09C1 \u098F\u0995\u099C\u09A8 \u09B9\u09BF\u09B0\u09CB \u09A8\u09AF\u09BC, \u09B9\u09BF\u09B0\u09CB\u09B0 \u09AA\u09C7\u099B\u09A8\u09C7 \u099C\u09AE\u09C7 \u09AF\u09BE\u0993\u09AF\u09BC\u09BE \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3 \u09AE\u09BE\u09A8\u09C1\u09B7\u0964`),(t.flood||t.shed)&&i.push("\u09B9\u09BE\u0981\u099F\u09C1\u09AA\u09BE\u09A8\u09BF, \u0985\u09A8\u09CD\u09A7\u0995\u09BE\u09B0, \u09AD\u09BE\u0999\u09BE \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE: \u098F\u0997\u09C1\u09B2\u09CB\u0993 \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09B0 \u09AB\u09B8\u09B2\u0964 \u0986\u099C \u09AF\u09BE\u0981\u09B0\u09BE \u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0 \u09B9\u09B2\u09C7\u09A8, \u09A4\u09BE\u0981\u09A6\u09C7\u09B0 \u09B9\u09BF\u09B8\u09BE\u09AC\u09C7\u09B0 \u0996\u09BE\u09A4\u09BE\u09AF\u09BC \u098F\u0997\u09C1\u09B2\u09CB\u0993 \u09B2\u09C7\u0996\u09BE \u09A5\u09BE\u0995\u09C1\u0995\u0964"),e.missionsOk&&i.push("\u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09AB\u09C7\u09B0\u09A4, \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE\u09AF\u09BC \u09B8\u09AE\u09AF\u09BC\u09AE\u09A4\u09CB \u09AA\u09CC\u0981\u099B\u09BE\u09A8\u09CB, \u099F\u09C7\u09A8\u09CD\u09A1\u09BE\u09B0 \u0986\u099F\u0995\u09BE\u09A8\u09CB: \u099B\u09CB\u099F \u099B\u09CB\u099F \u0995\u09BE\u099C\u0964 \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09B6\u09B9\u09B0\u099F\u09BE \u098F\u09B8\u09AC \u099B\u09CB\u099F \u0995\u09BE\u099C \u09A6\u09BF\u09AF\u09BC\u09C7\u0987 \u09AC\u09BE\u0981\u099A\u09C7\u0964"),n.kos>0&&i.push(`\u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF \u098F\u0995\u09A6\u09BF\u09A8\u09C7 \u09AF\u09BE\u09AF\u09BC \u09A8\u09BE, \u09A4\u09AC\u09C7 \u0986\u099C \u0985\u09A8\u09CD\u09A4\u09A4 ${de(n.kos)} \u099C\u09A8 \u098F\u0995\u09A6\u09BF\u09A8\u09C7\u09B0 \u099B\u09C1\u099F\u09BF\u09A4\u09C7 \u0997\u09C7\u09B2\u0964 \u09AC\u09BE\u0995\u09BF\u09A6\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09AC\u09BE\u09B0\u09CD\u09A4\u09BE: \u09AB\u09C1\u099F\u09AA\u09BE\u09A4\u09C7 \u099A\u09BE\u09AF\u09BC\u09C7\u09B0 \u09A6\u09CB\u0995\u09BE\u09A8 \u0986\u099B\u09C7, \u0986\u09B0 \u099A\u09BE\u09AF\u09BC\u09C7\u09B0 \u09A6\u09CB\u0995\u09BE\u09A8\u09C7 \u0986\u09AE\u099C\u09A8\u09A4\u09BE \u0986\u099B\u09C7\u0964`),Te(i)}function iv(n,e,t){let i=Math.min(97,52+n.kos*4+Xi(0,9)),s=Te([["\u0986\u099C\u0995\u09C7\u09B0 \u09AA\u09A5\u099A\u09BE\u09B0\u09C0\u0995\u09C7 \u0995\u09BF \u09AA\u09B0\u09C7\u09B0 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8\u09C7 \u09A6\u09BE\u0981\u09A1\u09BC\u09BE\u09A8\u09CB \u0989\u099A\u09BF\u09A4?",[["\u09B9\u09CD\u09AF\u09BE\u0981",i],["\u09A8\u09BE, \u0989\u09A8\u09BF \u09AD\u09BE\u09B2\u09CB \u09AE\u09BE\u09A8\u09C1\u09B7",Math.max(1,100-i-4)],["\u0989\u09A8\u09BF \u0995\u09C7?",4]]],["\u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF \u0995\u09AE\u09BE\u09A4\u09C7 \u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0 \u0995\u09C0?",[["\u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7\u09B2",30+Math.min(40,e.sandals*3)],["\u09A4\u09A6\u09A8\u09CD\u09A4 \u0995\u09AE\u09BF\u099F\u09BF",2],["\u0996\u09BE\u09B2\u09BE\u09AE\u09CD\u09AE\u09BE\u09B0 \u099B\u09BE\u09A4\u09BE",0]]],["\u09AC\u09BE\u09B8 \u0995\u09C7\u09A8 \u09A5\u09BE\u09AE\u09C7 \u09A8\u09BE?",[["\u09AC\u09CD\u09B0\u09C7\u0995 \u09A8\u09C7\u0987",41],["\u09A5\u09BE\u09AE\u09BE\u09B0 \u0995\u09A5\u09BE \u0995\u09C7\u0989 \u09AC\u09B2\u09C7\u09A8\u09BF",37],["\u09A5\u09BE\u09AE\u09B2\u09C7 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AF\u09CB\u0997\u09BF\u09A4\u09BE\u09AF\u09BC \u09B9\u09C7\u09B0\u09C7 \u09AF\u09BE\u09AC\u09C7",22]]]]);return s[1][2]&&s[1][2][1]===0&&(s[1][2][1]=Math.max(1,100-s[1][0][1]-s[1][1][1])),["\u0985\u09A8\u09B2\u09BE\u0987\u09A8 \u099C\u09B0\u09BF\u09AA",`<p class="poll-q">${s[0]}</p>${s[1].map(([r,a])=>`<div class="poll-row"><span>${r}</span><i><b style="width:${a}%"></b></i><em>${hh(a)}</em></div>`).join("")}<small>\u099C\u09B0\u09BF\u09AA\u09C7 \u0985\u0982\u09B6 \u09A8\u09BF\u09AF\u09BC\u09C7\u099B\u09C7\u09A8 ${de(Xi(1200,98e3))} \u099C\u09A8, \u09AF\u09BE\u0981\u09A6\u09C7\u09B0 ${hh(Xi(30,70))} \u098F\u0995\u0987 \u09AB\u09CB\u09A8 \u09A5\u09C7\u0995\u09C7\u0964</small>`]}function sv(n,e,t){let i=t.kos.slice(-3).reverse(),s=[];for(let r of i.slice(0,2)){let a=r.method==="broom"?"\u099D\u09BE\u09A1\u09BC\u09C1 \u09A6\u09BF\u09AF\u09BC\u09C7":r.method==="sandal"?"\u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7\u09B2 \u09A6\u09BF\u09AF\u09BC\u09C7":r.method==="ride"?"\u09B0\u09BF\u0995\u09B6\u09BE \u09A6\u09BF\u09AF\u09BC\u09C7":"\u09B8\u09AC\u09BE\u09B0 \u09B8\u09BE\u09AE\u09A8\u09C7";s.push([r.nick,Te([`\u0986\u09AE\u09BE\u0995\u09C7 ${a} \u09AE\u09BE\u09B0\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7, \u098F\u099F\u09BE \u0986\u09AE\u09BE\u09B0 \u09AE\u09BE\u09A8\u09AC\u09BE\u09A7\u09BF\u0995\u09BE\u09B0\u09C7\u09B0 \u09B2\u0999\u09CD\u0998\u09A8\u0964 \u0986\u09AE\u09BF \u09B8\u09BE\u09B0\u09BE\u099C\u09C0\u09AC\u09A8 \u0985\u09A8\u09CD\u09AF\u09A6\u09C7\u09B0 \u0985\u09A7\u09BF\u0995\u09BE\u09B0 \u09B2\u0999\u09CD\u0998\u09A8 \u0995\u09B0\u09C7\u099B\u09BF, \u09A4\u09BE\u0987 \u09AC\u09BF\u09B7\u09AF\u09BC\u099F\u09BE \u09AD\u09BE\u09B2\u09CB \u09AC\u09C1\u099D\u09BF\u0964`,`${r.place?`${r.place}-\u098F\u09B0 \u09B8\u09BE\u09AE\u09A8\u09C7 `:""}\u0986\u09AE\u09BE\u09B0 \u09AE\u09BE\u09A8-\u09B8\u09AE\u09CD\u09AE\u09BE\u09A8 \u09A8\u09B7\u09CD\u099F \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964 \u09A6\u09AF\u09BC\u09BE \u0995\u09B0\u09C7 \u099B\u09AC\u09BF\u099F\u09BE \u099B\u09BE\u09AA\u09AC\u09C7\u09A8 \u09A8\u09BE, \u0986\u09AE\u09BE\u09B0 \u0986\u09AE\u09CD\u09AE\u09BE \u09AA\u09A4\u09CD\u09B0\u09BF\u0995\u09BE \u09AA\u09A1\u09BC\u09C7\u09A8\u0964`,"\u0986\u09AE\u09BF \u09A8\u09BF\u09B0\u09CD\u09A6\u09CB\u09B7\u0964 \u099A\u09BE\u0981\u09A6\u09BE\u0997\u09C1\u09B2\u09CB \u0986\u09AE\u09BF \u09A8\u09BF\u0987\u09A8\u09BF, \u0993\u09B0\u09BE \u09A8\u09BF\u099C\u09C7 \u09A5\u09C7\u0995\u09C7 \u0986\u09AE\u09BE\u09B0 \u09AA\u0995\u09C7\u099F\u09C7 \u09A2\u09C1\u0995\u09C7 \u0997\u09C7\u099B\u09C7\u0964"])])}return t.names[0]&&s.push([t.names[0],"\u0986\u09AE\u09BF \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3 \u09AE\u09BE\u09A8\u09C1\u09B7, \u0995\u0996\u09A8\u09CB \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09BE\u09A6 \u0995\u09B0\u09BF\u09A8\u09BF\u0964 \u0986\u099C \u0995\u09B0\u09B2\u09BE\u09AE\u0964 \u09AD\u09AF\u09BC \u09B2\u09C7\u0997\u09C7\u099B\u09BF\u09B2, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09AD\u09AF\u09BC\u09C7\u09B0 \u099A\u09C7\u09AF\u09BC\u09C7 \u09B0\u09BE\u0997 \u09AC\u09C7\u09B6\u09BF \u099B\u09BF\u09B2\u0964"]),s.length<2&&s.push(["\u098F\u0995\u099C\u09A8 \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3 \u09AA\u09BE\u09A0\u0995","\u0986\u09AA\u09A8\u09BE\u09A6\u09C7\u09B0 \u09AA\u09A4\u09CD\u09B0\u09BF\u0995\u09BE\u09AF\u09BC \u09B8\u09AC\u09B8\u09AE\u09AF\u09BC \u0996\u09BE\u09B0\u09BE\u09AA \u0996\u09AC\u09B0 \u09A5\u09BE\u0995\u09C7\u0964 \u0986\u099C \u098F\u0995\u099F\u09BE \u09AD\u09BE\u09B2\u09CB \u0996\u09AC\u09B0 \u09AA\u09A1\u09BC\u09B2\u09BE\u09AE, \u09A4\u09BE\u0987 \u099A\u09BF\u09A0\u09BF \u09B2\u09BF\u0996\u09C7 \u09AB\u09C7\u09B2\u09B2\u09BE\u09AE\u0964"]),["\u09AA\u09BE\u09A0\u0995\u09C7\u09B0 \u099A\u09BF\u09A0\u09BF",s.slice(0,2).map(([r,a])=>`<p class="letter">"${a}"<cite>${r}</cite></p>`).join("")]}function rv(n,e,t){let i=e.kosBy,s=(a,o)=>{let l=o?-Xi(8,20)-o*Xi(8,14):Xi(1,12);return`<div class="stk"><span>${a}</span><b class="${l<0?"dn":"up"}">${l<0?"\u25BC":"\u25B2"} ${hh(Math.min(99,Math.abs(l)))}</b></div>`},r=[s("\u099A\u09BE\u0981\u09A6\u09BE \u09B2\u09BF\u09AE\u09BF\u099F\u09C7\u09A1",i.chanda||0),s("\u0998\u09C1\u09B7 \u09B9\u09CB\u09B2\u09CD\u09A1\u09BF\u0982\u09B8",i.ghush||0),s("\u09B2\u09BE\u09A0\u09BF \u0985\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1 \u0995\u09CB\u0982",i.mastan||0),s("\u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C \u09B8\u09BF\u09A8\u09CD\u09A1\u09BF\u0995\u09C7\u099F \u09AA\u09BF\u098F\u09B2\u09B8\u09BF",i.syndicate||0),s("\u09A6\u0996\u09B2 \u09B0\u09BF\u09AF\u09BC\u09C7\u09B2 \u098F\u09B8\u09CD\u099F\u09C7\u099F",i.bhumi||0),s("\u099F\u09C7\u09A8\u09CD\u09A1\u09BE\u09B0 \u0997\u09CD\u09B0\u09C1\u09AA",i.thikadar||0)];return["\u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09B0 \u09B6\u09C7\u09AF\u09BC\u09BE\u09B0\u09AC\u09BE\u099C\u09BE\u09B0",`${oa(r,4).join("")}<small>${n.kos>5?"\u09A1\u09BF\u098F\u09B8\u0987: \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF \u09B8\u09C2\u099A\u0995\u09C7 \u0987\u09A4\u09BF\u09B9\u09BE\u09B8\u09C7\u09B0 \u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7 \u09AC\u09A1\u09BC \u09A6\u09B0\u09AA\u09A4\u09A8\u0964":"\u09AC\u09BE\u099C\u09BE\u09B0 \u09B8\u09CD\u09A5\u09BF\u09A4\u09BF\u09B6\u09C0\u09B2, \u09AE\u09BE\u09A8\u09C7 \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF \u09B8\u09CD\u09A5\u09BF\u09A4\u09BF\u09B6\u09C0\u09B2\u0964"}</small>`]}function av(n,e,t){let i=t.nicks[0]||"\u098F\u0995 \u09AE\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8",s=t.boss?t.boss.nick:t.nicks[1]||"\u098F\u0995 \u09A8\u09C7\u09A4\u09BE",r=aa([['\u099F\u0995 \u09B6\u09CB: "\u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF \u0995\u09BF \u0986\u09B8\u09B2\u09C7\u0987 \u0996\u09BE\u09B0\u09BE\u09AA?"',`\u0985\u09A4\u09BF\u09A5\u09BF: ${s} (\u09B9\u09BE\u09B8\u09AA\u09BE\u09A4\u09BE\u09B2 \u09A5\u09C7\u0995\u09C7 \u09AB\u09CB\u09A8\u09C7)`],['\u09A8\u09BE\u099F\u0995: "\u099A\u09BE\u0981\u09A6\u09BE\u09AC\u09BE\u099C\u09C7\u09B0 \u09B8\u0982\u09B8\u09BE\u09B0"',`\u09AA\u09CD\u09B0\u09A7\u09BE\u09A8 \u099A\u09B0\u09BF\u09A4\u09CD\u09B0\u09C7 ${i}, \u098F\u0996\u09A8 \u09AC\u09BF\u09B6\u09CD\u09B0\u09BE\u09AE\u09C7`],["\u0996\u09C7\u09B2\u09BE: \u09AB\u09C1\u099F\u09AA\u09BE\u09A4 \u09AA\u09CD\u09B0\u09BF\u09AE\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B2\u09BF\u0997","\u099C\u09A8\u09A4\u09BE \u09AC\u09A8\u09BE\u09AE \u09B8\u09BF\u09A8\u09CD\u09A1\u09BF\u0995\u09C7\u099F, \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF"],['\u09B0\u09BE\u09A8\u09CD\u09A8\u09BE: "\u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C \u099B\u09BE\u09A1\u09BC\u09BE \u09B0\u09BE\u09A8\u09CD\u09A8\u09BE"',"\u09A6\u09C7\u0996\u09BE\u09AC\u09C7\u09A8 \u098F\u0995\u099C\u09A8 \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3 \u0997\u09C3\u09B9\u09BF\u09A3\u09C0, \u09AC\u09BE\u09A7\u09CD\u09AF \u09B9\u09AF\u09BC\u09C7"],["\u09AC\u09BF\u09B6\u09C7\u09B7 \u09AC\u09C1\u09B2\u09C7\u099F\u09BF\u09A8",`${Wi(t.endHour)}: \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09B0 \u0998\u099F\u09A8\u09BE, \u098F\u0995\u0987 \u09AD\u09BF\u09A1\u09BF\u0993 \u09E8\u09EE \u09AC\u09BE\u09B0`],['\u0995\u09BE\u09B0\u09CD\u099F\u09C1\u09A8: "\u09AB\u09BE\u0987\u09B2 \u09AD\u09BE\u0987\u09AF\u09BC\u09BE"',"\u09AF\u09C7 \u09AB\u09BE\u0987\u09B2 \u09A4\u09BF\u09A8 \u09AC\u099B\u09B0 \u09A8\u09A1\u09BC\u09C7 \u09A8\u09BE"]]).slice(0,4),a=["\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE \u09ED\u099F\u09BE","\u09B0\u09BE\u09A4 \u09EE\u099F\u09BE","\u09B0\u09BE\u09A4 \u09EF\u099F\u09BE","\u09B0\u09BE\u09A4 \u09E7\u09E7\u099F\u09BE"];return["\u0986\u099C\u0995\u09C7\u09B0 \u099F\u09BF\u09AD\u09BF",r.map(([o,l],c)=>`<div class="tv"><em>${a[c]}</em><b>${o}</b><small>${l}</small></div>`).join("")]}function ov(n,e,t){let i=t.boss||t.last;if(!i)return null;let s=Gn[i.key].name;return["\u09B6\u09CB\u0995\u09B8\u0982\u09AC\u09BE\u09A6: \u098F\u0995\u099F\u09BF \u0995\u09CD\u09AF\u09BE\u09B0\u09BF\u09AF\u09BC\u09BE\u09B0",`<p><b>${i.nick}</b>-\u098F\u09B0 ${s} \u0995\u09CD\u09AF\u09BE\u09B0\u09BF\u09AF\u09BC\u09BE\u09B0 \u0986\u099C ${Wi(i.hour??t.endHour)} ${i.place?`${i.place}-\u098F\u09B0 \u09B8\u09BE\u09AE\u09A8\u09C7 `:""}\u0987\u09A8\u09CD\u09A4\u09C7\u0995\u09BE\u09B2 \u0995\u09B0\u09C7\u099B\u09C7\u0964 \u0995\u09CD\u09AF\u09BE\u09B0\u09BF\u09AF\u09BC\u09BE\u09B0\u099F\u09BF\u09B0 \u09AC\u09AF\u09BC\u09B8 \u09B9\u09AF\u09BC\u09C7\u099B\u09BF\u09B2 \u0986\u09A8\u09C1\u09AE\u09BE\u09A8\u09BF\u0995 ${de(Xi(4,22))} \u09AC\u099B\u09B0\u0964 ${Te(["\u09AE\u09C3\u09A4\u09CD\u09AF\u09C1\u0995\u09BE\u09B2\u09C7 \u09B0\u09C7\u0996\u09C7 \u0997\u09C7\u099B\u09C7 \u09A6\u09C1\u099F\u09BF \u09AE\u09BE\u09AE\u09B2\u09BE, \u098F\u0995\u099F\u09BF \u09B2\u09BE\u09A0\u09BF \u0993 \u0985\u09B8\u0982\u0996\u09CD\u09AF \u09AD\u09C1\u0995\u09CD\u09A4\u09AD\u09CB\u0997\u09C0\u0964","\u099C\u09BE\u09A8\u09BE\u099C\u09BE\u09AF\u09BC \u0995\u09C7\u0989 \u0986\u09B8\u09C7\u09A8\u09BF, \u09A4\u09AC\u09C7 \u09AD\u09C1\u0995\u09CD\u09A4\u09AD\u09CB\u0997\u09C0\u09B0\u09BE \u09AE\u09BF\u09B7\u09CD\u099F\u09BF \u09AC\u09BF\u09A4\u09B0\u09A3 \u0995\u09B0\u09C7\u099B\u09C7\u09A8\u0964",'\u0995\u09CD\u09AF\u09BE\u09B0\u09BF\u09AF\u09BC\u09BE\u09B0\u099F\u09BF \u09A6\u09C0\u09B0\u09CD\u0998\u09A6\u09BF\u09A8 "\u0989\u09AA\u09B0\u09C7\u09B0 \u0986\u09B6\u09C0\u09B0\u09CD\u09AC\u09BE\u09A6" \u09A8\u09BE\u09AE\u0995 \u09B0\u09CB\u0997\u09C7 \u09AD\u09C1\u0997\u099B\u09BF\u09B2\u0964'])}</p>`]}function lv(n,e,t){let i=n.kos,s=e.extortions+e.bribesDone+(e.missionsFail||0);return["\u0996\u09C7\u09B2\u09BE\u09B0 \u09AA\u09BE\u09A4\u09BE",`<p class="score"><b>\u099C\u09A8\u09A4\u09BE ${de(i)}</b> : <b>${de(s)} \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF</b></p><p>${i>s?Te(['\u099C\u09A8\u09A4\u09BE\u09B0 \u098F\u0995\u09A4\u09B0\u09AB\u09BE \u099C\u09AF\u09BC\u0964 \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF \u09A6\u09B2\u09C7\u09B0 \u0995\u09CB\u099A \u09AC\u09B2\u099B\u09C7\u09A8, "\u09B0\u09C7\u09AB\u09BE\u09B0\u09BF \u0995\u09BF\u09A8\u09A4\u09C7 \u09AA\u09BE\u09B0\u09BF\u09A8\u09BF, \u09B8\u09C7\u099F\u09BE\u0987 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u0964"',"\u09AE\u09CD\u09AF\u09BE\u099A \u09B6\u09C7\u09B7\u09C7 \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF \u09A6\u09B2 \u0986\u09AA\u09BF\u09B2 \u0995\u09B0\u09C7\u099B\u09C7\u0964 \u0986\u09AA\u09BF\u09B2 \u09B6\u09C1\u09A8\u09AC\u09C7\u09A8 \u09A4\u09BE\u0981\u09A6\u09C7\u09B0\u0987 \u098F\u0995 \u099A\u09BE\u099A\u09BE\u0964"]):"\u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF \u09A6\u09B2 \u099C\u09BF\u09A4\u09C7\u099B\u09C7, \u09AF\u09A5\u09BE\u09B0\u09C0\u09A4\u09BF\u0964 \u09AE\u09CD\u09AF\u09BE\u099A\u09C7\u09B0 \u0986\u0997\u09C7\u0987 \u09AB\u09B2\u09BE\u09AB\u09B2 \u09A0\u09BF\u0995 \u0995\u09B0\u09BE \u099B\u09BF\u09B2\u0964"} \u09B8\u09C7\u09B0\u09BE \u0996\u09C7\u09B2\u09CB\u09AF\u09BC\u09BE\u09A1\u09BC: ${t.noun.replace("\u098F\u0995 ","")}${e.maxCombo>=4?`, \u099F\u09BE\u09A8\u09BE ${de(e.maxCombo)} \u09B9\u09BF\u099F\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF`:""}\u0964</p>`]}function cv(n,e,t){let i=(r,a)=>`${Zt(Math.round(r*a))} ${a>1.05?"\u25B2":a<.95?"\u25BC":"="}`,s=[["\u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C (\u0995\u09C7\u099C\u09BF)",i(300,e.kosBy.syndicate?.7:1.2)],["\u099D\u09BE\u09A1\u09BC\u09C1 (\u09AA\u09BF\u09B8)",i(80,e.method.broom?2.5:1)],["\u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7\u09B2 (\u099C\u09CB\u09A1\u09BC\u09BE)",i(250,e.sandals>3?1.6:1)],["\u099A\u09BE (\u0995\u09BE\u09AA)",i(10,e.tea>3?1.5:1)],["\u099B\u09BE\u09A4\u09BE",i(450,t.rain?1.8:1)],["\u099F\u09A8\u09BF\u0995 (\u09AD\u09C7\u099C\u09BE\u09B2)",i(120,e.kosBy.vejal?.3:1)],["\u09AE\u09CB\u09AE\u09AC\u09BE\u09A4\u09BF",i(15,t.shed?3:1)]];return["\u0986\u099C\u0995\u09C7\u09B0 \u09AC\u09BE\u099C\u09BE\u09B0\u09A6\u09B0",`${oa(s,5).map(([r,a])=>`<div class="stk"><span>${r}</span><b>${a}</b></div>`).join("")}<small>\u09A6\u09BE\u09AE \u09AC\u09BE\u09A1\u09BC\u09BE\u09B0 \u0995\u09BE\u09B0\u09A3: "\u0986\u09A8\u09CD\u09A4\u09B0\u09CD\u099C\u09BE\u09A4\u09BF\u0995 \u09AC\u09BE\u099C\u09BE\u09B0"\u0964 \u0995\u09CB\u09A8 \u09A6\u09C7\u09B6\u09C7\u09B0, \u09B8\u09C7\u099F\u09BE \u099C\u09BE\u09A8\u09BE\u09A8\u09CB \u09B9\u09AF\u09BC\u09A8\u09BF\u0964</small>`]}function hv(n,e,t){let i=e.deathHour??16,s=i>=19||i<5,r=[];return r.push(s?"\u{1F319} \u0986\u099C \u09B0\u09BE\u09A4: \u0985\u09A8\u09CD\u09A7\u0995\u09BE\u09B0, \u09A4\u09AC\u09C7 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09B0 \u0997\u09B0\u09CD\u09A4\u0997\u09C1\u09B2\u09CB \u09A0\u09BF\u0995\u0987 \u09A6\u09C7\u0996\u09BE \u09AF\u09BE\u09AC\u09C7, \u09AA\u09BE \u09A6\u09BF\u09AF\u09BC\u09C7\u0964":"\u2600\uFE0F \u0986\u099C: \u0997\u09B0\u09AE, \u09B8\u09BE\u09A5\u09C7 \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09B0 \u0997\u09C1\u09AE\u09CB\u099F \u09AD\u09BE\u09AC\u0964"),(e.deathRain||t.rain)&&r.push("\u{1F327}\uFE0F \u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09B0 \u09B8\u09AE\u09CD\u09AD\u09BE\u09AC\u09A8\u09BE: \u09E7\u09E6\u09E6%, \u0995\u09BE\u09B0\u09A3 \u098F\u099F\u09BE \u09B2\u09C7\u0996\u09BE\u09B0 \u09B8\u09AE\u09AF\u09BC\u0993 \u09AC\u09C3\u09B7\u09CD\u099F\u09BF \u09B9\u099A\u09CD\u099B\u09C7\u0964"),t.flood&&r.push("\u{1F30A} \u099C\u09B2\u09BE\u09AC\u09A6\u09CD\u09A7\u09A4\u09BE: \u09B9\u09BE\u0981\u099F\u09C1 \u09B8\u09AE\u09BE\u09A8\u0964 \u09B6\u09BF\u09B6\u09C1\u09A6\u09C7\u09B0 \u0995\u09CB\u09AE\u09B0 \u09B8\u09AE\u09BE\u09A8\u0964 \u09B8\u09BF\u098F\u09A8\u099C\u09BF\u09B0 \u0987\u099E\u09CD\u099C\u09BF\u09A8 \u09B8\u09AE\u09BE\u09A8\u0964"),t.shed&&r.push("\u{1F56F}\uFE0F \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE: \u0986\u09B8\u09BE-\u09AF\u09BE\u0993\u09AF\u09BC\u09BE\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09A5\u09BE\u0995\u09AC\u09C7, \u09AC\u09C7\u09B6\u09BF\u09B0\u09AD\u09BE\u0997 \u09B8\u09AE\u09AF\u09BC \u09AF\u09BE\u0993\u09AF\u09BC\u09BE\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7\u0964"),r.push(Te(["\u{1F9C5} \u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C \u09B8\u09C2\u099A\u0995: \u099A\u09A1\u09BC\u09BE","\u{1F68C} \u09AC\u09BE\u09B8 \u09A5\u09BE\u09AE\u09BE\u09B0 \u09B8\u09AE\u09CD\u09AD\u09BE\u09AC\u09A8\u09BE: \u09E8%","\u{1F637} \u09A7\u09C1\u09B2\u09BE: \u09B8\u09CD\u09AC\u09BE\u09AD\u09BE\u09AC\u09BF\u0995 (\u09AE\u09BE\u09A8\u09C7 \u09AC\u09BF\u09AA\u099C\u09CD\u099C\u09A8\u0995)","\u{1F321}\uFE0F \u0985\u09A8\u09C1\u09AD\u09C2\u09A4 \u09A4\u09BE\u09AA\u09AE\u09BE\u09A4\u09CD\u09B0\u09BE: \u0998\u09C1\u09B7 \u099A\u09BE\u0993\u09AF\u09BC\u09BE\u09B0 \u09B8\u09AE\u09AF\u09BC \u09AF\u09A4\u099F\u09BE \u0997\u09B0\u09AE \u09B2\u09BE\u0997\u09C7"])),["\u0986\u09AC\u09B9\u09BE\u0993\u09AF\u09BC\u09BE",r.map(a=>`<p>${a}</p>`).join("")]}function uv(n,e,t){let i=t.nicks[0];return["\u09B8\u0982\u09B6\u09CB\u09A7\u09A8\u09C0",Te([`<p>\u0997\u09A4\u0995\u09BE\u09B2\u09C7\u09B0 \u09B8\u0982\u0996\u09CD\u09AF\u09BE\u09AF\u09BC \u09B2\u09C7\u0996\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09BF\u09B2 "${i||"\u098F\u0995 \u09AE\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8"} \u098F\u0995\u099C\u09A8 \u09B8\u09AE\u09BE\u099C\u09B8\u09C7\u09AC\u0995"\u0964 \u0986\u09B8\u09B2\u09C7 \u09A4\u09BF\u09A8\u09BF \u09B8\u09AE\u09BE\u099C \u09A5\u09C7\u0995\u09C7 "\u09B8\u09C7\u09AC\u09BE" \u09A8\u09C7\u09A8\u0964 \u0985\u09A8\u09BF\u099A\u09CD\u099B\u09BE\u0995\u09C3\u09A4 \u09AD\u09C1\u09B2\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09A6\u09C1\u0983\u0996\u09BF\u09A4\u0964</p>`,'<p>\u0997\u09A4\u0995\u09BE\u09B2 \u09B2\u09C7\u0996\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09BF\u09B2 "\u09AC\u09BE\u09B8 \u09A5\u09C7\u09AE\u09C7\u099B\u09C7"\u0964 \u0996\u09AC\u09B0\u099F\u09BF \u09AD\u09C1\u09B2 \u099B\u09BF\u09B2\u0964 \u09AC\u09BE\u09B8 \u09A5\u09BE\u09AE\u09C7\u09A8\u09BF, \u0986\u09AE\u09B0\u09BE \u0998\u09C1\u09AE\u09BF\u09AF\u09BC\u09C7 \u09AA\u09A1\u09BC\u09C7\u099B\u09BF\u09B2\u09BE\u09AE\u0964</p>',"<p>\u0997\u09A4 \u09B8\u0982\u0996\u09CD\u09AF\u09BE\u09AF\u09BC \u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C\u09C7\u09B0 \u09A6\u09BE\u09AE \u099B\u09BE\u09AA\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09BF\u09B2 \u09F3\u09E9\u09E6\u09E6\u0964 \u099B\u09BE\u09AA\u09BE\u09B0 \u09AA\u09B0 \u09A6\u09BE\u09AE \u09AC\u09C7\u09A1\u09BC\u09C7 \u09AF\u09BE\u0993\u09AF\u09BC\u09BE\u09AF\u09BC \u0996\u09AC\u09B0\u099F\u09BF \u098F\u0996\u09A8 \u09AD\u09C1\u09B2\u0964</p>"])]}function dv(n,e,t){let i=Te(["\u{1F9D1}\u200D\u{1F4BC}\u{1F4BC}\u27A1\uFE0F\u{1F3C3}\u200D\u2642\uFE0F\u{1F4A8}","\u{1F68C}\u{1F4A8}\u{1F9CD}\u200D\u2642\uFE0F\u2753","\u{1F9C5}\u{1F451}\u{1F4C8}","\u{1F4C4}\u{1F4C4}\u{1F4C4}\u{1F5A8}\uFE0F\u{1F608}","\u{1F69C}\u{1F3DE}\uFE0F\u{1F622}","\u2602\uFE0F\u{1F475}\u{1F4A5}\u{1F574}\uFE0F"]),s=Te(['"\u09AB\u09BE\u0987\u09B2 \u09A8\u09A1\u09BC\u09AC\u09C7?" "\u099A\u09BE \u0996\u09BE\u09AC\u09C7\u09A8?" "\u09A8\u09BE\u0964" "\u09A4\u09BE\u09B9\u09B2\u09C7 \u09A8\u09A1\u09BC\u09AC\u09C7 \u09A8\u09BE\u0964"','"\u09AD\u09BE\u0987, \u09AC\u09BE\u09B8 \u09A5\u09BE\u09AE\u09AC\u09C7?" "\u09A5\u09BE\u09AE\u09B2\u09C7 \u09A4\u09CB \u0986\u09B0 \u09AC\u09BE\u09B8 \u09A5\u09BE\u0995\u09C7 \u09A8\u09BE, \u09B8\u09CD\u099F\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1 \u09B9\u09AF\u09BC\u09C7 \u09AF\u09BE\u09AF\u09BC\u0964"','"\u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C\u09C7\u09B0 \u09A6\u09BE\u09AE \u0995\u09C7\u09A8 \u09AC\u09BE\u09A1\u09BC\u09B2?" "\u0995\u09BE\u09B0\u09A3 \u0986\u09AA\u09A8\u09BF \u099C\u09BF\u099C\u09CD\u099E\u09C7\u09B8 \u0995\u09B0\u09B2\u09C7\u09A8\u0964"','"\u09AA\u09CD\u09B0\u09B6\u09CD\u09A8 \u0995\u09BF \u09AB\u09BE\u0981\u09B8 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7?" "\u09A8\u09BE, \u09B6\u09C1\u09A7\u09C1 \u09B8\u09AC\u09BE\u09B0 \u0995\u09BE\u099B\u09C7 \u09AA\u09CC\u0981\u099B\u09C7\u099B\u09C7\u0964"','"\u09A8\u09A6\u09C0 \u0995\u09CB\u09A5\u09BE\u09AF\u09BC \u0997\u09C7\u09B2?" "\u0995\u09BE\u0997\u099C\u09C7 \u0986\u099B\u09C7, \u099A\u09BF\u09A8\u09CD\u09A4\u09BE \u0995\u09B0\u09AC\u09C7\u09A8 \u09A8\u09BE\u0964"','"\u0996\u09BE\u09B2\u09BE\u09AE\u09CD\u09AE\u09BE, \u099B\u09BE\u09A4\u09BE \u0995\u09C7\u09A8? \u09AC\u09C3\u09B7\u09CD\u099F\u09BF \u09A4\u09CB \u09A8\u09C7\u0987\u0964" "\u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09B0 \u099C\u09A8\u09CD\u09AF \u09A8\u09BE\u0964"']);return["\u0995\u09BE\u09B0\u09CD\u099F\u09C1\u09A8",`<div class="cartoon">${i}</div><p class="cap">${s}</p>`]}function fv(n,e,t){return["\u0986\u099C\u0995\u09C7\u09B0 \u0995\u09C1\u0987\u099C",Te(["<p>\u09E7. \u098F\u0995\u099F\u09BF \u09AB\u09BE\u0987\u09B2 \u099F\u09C7\u09AC\u09BF\u09B2 \u09AA\u09BE\u09B0 \u09B9\u09A4\u09C7 \u0995\u09A4 \u0995\u09BE\u09AA \u099A\u09BE \u09B2\u09BE\u0997\u09C7?<br/>\u0995) \u09E7 \u0996) \u09E7\u09E6 \u0997) \u09AB\u09BE\u0987\u09B2\u09C7\u09B0 \u0993\u099C\u09A8 \u0985\u09A8\u09C1\u09AF\u09BE\u09AF\u09BC\u09C0</p><small>\u09B8\u09A0\u09BF\u0995 \u0989\u09A4\u09CD\u09A4\u09B0: \u0997</small>","<p>\u09E7. \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u09AC\u099B\u09B0\u09C7 \u0995\u09A4\u09AC\u09BE\u09B0 \u0996\u09CB\u0981\u09A1\u09BC\u09BE \u09B9\u09AF\u09BC?<br/>\u0995) \u09E7 \u0996) \u09E9 \u0997) \u099F\u09C7\u09A8\u09CD\u09A1\u09BE\u09B0 \u09AF\u09A4\u09AC\u09BE\u09B0 \u09AA\u09BE\u09B8 \u09B9\u09AF\u09BC</p><small>\u09B8\u09A0\u09BF\u0995 \u0989\u09A4\u09CD\u09A4\u09B0: \u0997</small>",'<p>\u09E7. "\u099A\u09BE-\u09AA\u09BE\u09A8\u09BF" \u09B6\u09AC\u09CD\u09A6\u09C7\u09B0 \u0986\u09B8\u09B2 \u0985\u09B0\u09CD\u09A5 \u0995\u09C0?<br/>\u0995) \u099A\u09BE \u0996) \u09AA\u09BE\u09A8\u09BF \u0997) \u0995\u09CB\u09A8\u09CB\u099F\u09BE\u0987 \u09A8\u09BE</p><small>\u09B8\u09A0\u09BF\u0995 \u0989\u09A4\u09CD\u09A4\u09B0: \u0997</small>'])]}var pv=[iv,sv,rv,av,ov,lv,cv,hv,uv,dv,fv];function mv(n,e,t){let i=e.deathHour??16,s=i>=19||i<5,r=[];return r.push(s?"\u{1F319} \u09B0\u09BE\u09A4\u09C7\u09B0 \u09B8\u0982\u09B8\u09CD\u0995\u09B0\u09A3":i<12?"\u{1F305} \u09B8\u0995\u09BE\u09B2\u09C7\u09B0 \u09B8\u0982\u09B8\u09CD\u0995\u09B0\u09A3":"\u2600\uFE0F \u09AC\u09BF\u0995\u09C7\u09B2\u09C7\u09B0 \u09B8\u0982\u09B8\u09CD\u0995\u09B0\u09A3"),r.push(t.flood?"\u{1F30A} \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC \u09B9\u09BE\u0981\u099F\u09C1\u09AA\u09BE\u09A8\u09BF":t.rain?"\u{1F327}\uFE0F \u09A5\u09C7\u09AE\u09C7 \u09A5\u09C7\u09AE\u09C7 \u09AC\u09C3\u09B7\u09CD\u099F\u09BF":Te(["\u{1F9C5} \u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C \u09B8\u09C2\u099A\u0995: \u09F3\u09E9\u09E6\u09E6 \u25B2","\u{1F637} \u09A7\u09C1\u09B2\u09BE: \u09AC\u09BF\u09AA\u099C\u09CD\u099C\u09A8\u0995 (\u09B8\u09CD\u09AC\u09BE\u09AD\u09BE\u09AC\u09BF\u0995)"])),r.push(t.shed?"\u{1F56F}\uFE0F \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE: \u0986\u09B8\u09BE-\u09AF\u09BE\u0993\u09AF\u09BC\u09BE\u09AF\u09BC":Te(["\u{1F68C} \u09AC\u09BE\u09B8 \u09A5\u09BE\u09AE\u09BE\u09B0 \u09B8\u09AE\u09CD\u09AD\u09BE\u09AC\u09A8\u09BE: \u09E8%","\u{1F6A6} \u09B8\u09BF\u0997\u09A8\u09CD\u09AF\u09BE\u09B2 \u09AE\u09BE\u09A8\u09BE\u09B0 \u09B9\u09BE\u09B0: \u09E9%"])),r}function gv(n){let e=n.match(/^.[\u0981-\u0983\u09BC-\u09D7\u09E2\u09E3]*/u),t=e?e[0]:n[0];return`<span class="dropcap">${t}</span>${n.slice(t.length)}`}function Df(n,e,t){let i=Xy(n,e),s=new Date,r=`${de(s.getDate())} ${Hy[s.getMonth()]} ${de(s.getFullYear())}`,[a,o]=Jy(n,e),l=8+Math.floor(Math.random()*30),c=i.recruits.filter(p=>Lf[p.reason]).map(p=>Lf[p.reason](p.name,p.from)),u=[...aa(c).slice(0,1),...oa(Yy,2).map(p=>p(e))].slice(0,2),h=aa(pv).map(p=>p(n,e,i)).filter(Boolean).slice(0,4),d=Xi(100,9999),f=Te(["\u09F3\u09E7\u09E6 (\u099A\u09BE-\u09AA\u09BE\u09A8\u09BF \u0986\u09B2\u09BE\u09A6\u09BE)","\u09F3\u09E7\u09E6 (\u09A6\u09B0\u09A6\u09BE\u09AE \u099A\u09B2\u09AC\u09C7 \u09A8\u09BE)","\u09F3\u09E7\u09E6 (\u099A\u09BE\u0981\u09A6\u09BE \u0985\u09A8\u09CD\u09A4\u09B0\u09CD\u09AD\u09C1\u0995\u09CD\u09A4 \u09A8\u09AF\u09BC)"]),g=t?Te([`\u099B\u09AC\u09BF: \u0998\u099F\u09A8\u09BE\u09B8\u09CD\u09A5\u09B2\u0964 \u09AA\u09BE\u09B6\u09C7 \u09A6\u09BE\u0981\u09A1\u09BC\u09BF\u09AF\u09BC\u09C7 \u09AD\u09BF\u09A1\u09BF\u0993 \u0995\u09B0\u099B\u09BF\u09B2\u09C7\u09A8 ${de(l)} \u099C\u09A8, \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09C7\u099B\u09C7\u09A8 \u09E6 \u099C\u09A8\u0964`,`\u099B\u09AC\u09BF: ${e.deathPlace?e.deathPlace+"-\u098F\u09B0 \u09B8\u09BE\u09AE\u09A8\u09C7 ":""}\u09B6\u09C7\u09B7 \u09AE\u09C1\u09B9\u09C2\u09B0\u09CD\u09A4\u0964 \u099B\u09AC\u09BF\u099F\u09BF \u09A4\u09C1\u09B2\u09C7\u099B\u09C7\u09A8 \u098F\u0995 \u09AA\u09A5\u099A\u09BE\u09B0\u09C0, \u09AF\u09BF\u09A8\u09BF \u098F\u09B0\u09AA\u09B0 "\u09B8\u09CD\u099F\u09CB\u09B0\u09BF" \u09A6\u09BF\u09AF\u09BC\u09C7\u099B\u09C7\u09A8\u0964`,`\u099B\u09AC\u09BF: ${Wi(i.endHour)}, \u0998\u099F\u09A8\u09BE\u09B8\u09CD\u09A5\u09B2\u0964 \u09AB\u099F\u09CB\u0997\u09CD\u09B0\u09BE\u09AB\u09BE\u09B0 \u099C\u09BE\u09A8\u09BE\u09A8, "\u0986\u09B0\u09C7\u0995\u099F\u09C1 \u09AC\u09BE\u0981 \u09A6\u09BF\u0995\u09C7 \u09AA\u09A1\u09BC\u09B2\u09C7 \u09AB\u09CD\u09B0\u09C7\u09AE\u09C7 \u09AD\u09BE\u09B2\u09CB \u0986\u09B8\u09A4\u0964"`]):"\u099B\u09AC\u09BF \u09A4\u09CB\u09B2\u09BE\u09B0 \u0986\u0997\u09C7\u0987 \u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE\u09AE\u09CD\u09AF\u09BE\u09A8 \u099A\u09BE \u0996\u09C7\u09A4\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7\u099B\u09BF\u09B2\u09C7\u09A8",v=i.boss?"\u09AC\u09A1\u09BC \u0996\u09AC\u09B0":i.flood?"\u099C\u09B2\u09BE\u09AC\u09A6\u09CD\u09A7 \u09B0\u09BE\u099C\u09A7\u09BE\u09A8\u09C0":i.night?"\u09B0\u09BE\u09A4\u09C7\u09B0 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE":Te(["\u09AC\u09BF\u09B6\u09C7\u09B7 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09C7\u09A6\u09A8","\u098F\u0995\u09CD\u09B8\u0995\u09CD\u09B2\u09C1\u09B8\u09BF\u09AD","\u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u09A5\u09C7\u0995\u09C7"]);return`
  <header class="masthead">
    <div class="mast-side">\u09AC\u09B0\u09CD\u09B7 \u09E7 \xB7 \u09B8\u0982\u0996\u09CD\u09AF\u09BE ${de(d)}<br/>\u09AE\u09C2\u09B2\u09CD\u09AF: ${f}</div>
    <div class="mast-center">
      <h2>\u09A6\u09C8\u09A8\u09BF\u0995 \u0986\u09AE\u099C\u09A8\u09A4\u09BE</h2>
      <span class="motto">"${Te(["\u09B8\u09A4\u09CD\u09AF \u09AC\u09B2\u09BF, \u09A4\u09AC\u09C7 \u098F\u0995\u099F\u09C1 \u0986\u09B8\u09CD\u09A4\u09C7","\u0996\u09AC\u09B0 \u0986\u09AE\u09BE\u09A6\u09C7\u09B0, \u09A6\u09BE\u09AF\u09BC \u0986\u09AA\u09A8\u09BE\u09B0","\u099B\u09BE\u09AA\u09BE \u09B9\u09AF\u09BC \u09AF\u09BE, \u0998\u099F\u09C7 \u09A4\u09BE\u09B0 \u099A\u09C7\u09AF\u09BC\u09C7 \u09AC\u09C7\u09B6\u09BF"])}"</span>
    </div>
    <div class="mast-side right">${r}<br/>\u09A2\u09BE\u0995\u09BE \u09B8\u0982\u09B8\u09CD\u0995\u09B0\u09A3</div>
  </header>
  <div class="weather">${mv(n,e,i).map(p=>`<span>${p}</span>`).join("")}</div>

  <div class="paper-grid">
    <section class="lead">
      <span class="kicker">${v}</span>
      <h3>${$y(n,e,i)}</h3>
      <figure class="photo">
        ${t?`<img src="${t}" alt="" />`:`<div class="nophoto">${g}</div>`}
        ${t?`<figcaption>${g}</figcaption>`:""}
      </figure>
      <p class="byline">${Te(["\u09A8\u09BF\u099C\u09B8\u09CD\u09AC \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09C7\u09A6\u0995","\u09AD\u09CD\u09B0\u09BE\u09AE\u09CD\u09AF\u09AE\u09BE\u09A3 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09C7\u09A6\u0995","\u099A\u09BE\u09AF\u09BC\u09C7\u09B0 \u09A6\u09CB\u0995\u09BE\u09A8 \u09A5\u09C7\u0995\u09C7 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09C7\u09A6\u0995"])} \xB7 \u09A2\u09BE\u0995\u09BE</p>
      <p class="body">${gv(qy(n,e,i))}</p>
      <div class="quotes">
        ${u.map(([p,m])=>`<blockquote>"${m}"<cite>${p}</cite></blockquote>`).join("")}
      </div>
      <p class="body official"><b>\u0995\u09B0\u09CD\u09A4\u09C3\u09AA\u0995\u09CD\u09B7\u09C7\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE:</b> \u098F\u0995 \u098A\u09B0\u09CD\u09A7\u09CD\u09AC\u09A4\u09A8 \u0995\u09B0\u09CD\u09AE\u0995\u09B0\u09CD\u09A4\u09BE \u09A8\u09BE\u09AE \u09AA\u09CD\u09B0\u0995\u09BE\u09B6 \u09A8\u09BE \u0995\u09B0\u09BE\u09B0 \u09B6\u09B0\u09CD\u09A4\u09C7 (\u098F\u09AC\u0982 \u099A\u09BE-\u09AA\u09BE\u09A8\u09BF\u09B0 \u09B6\u09B0\u09CD\u09A4\u09C7) \u09AC\u09B2\u09C7\u09A8, "${Te(Zy)}"</p>
    </section>

    <aside class="side">
      <div class="rank-box">
        <span>\u0986\u099C\u0995\u09C7\u09B0 \u0996\u09C7\u09A4\u09BE\u09AC</span>
        <b>${a}</b>
        <small>${o}</small>
      </div>
      <div class="stats-box">
        ${Ky(n,e,i).map(([p,m])=>`<div><span>${p}</span><b>${m}</b></div>`).join("")}
      </div>
      <h4>\u0996\u09AC\u09B0 \u09B8\u0982\u0995\u09CD\u09B7\u09C7\u09AA</h4>
      ${jy(n,e,i).map(([p,m])=>`<div class="brief"><b>${p}</b><p>${m}</p></div>`).join("")}
      <div class="horo">
        <h4>\u09B0\u09BE\u09B6\u09BF\u09AB\u09B2 \xB7 \u09B0\u09BE\u09B6\u09BF: ${i.hero.name}</h4>
        <p>${Te(Qy)}</p>
      </div>
    </aside>
  </div>

  <div class="extras">
    ${h.map(([p,m])=>`<section class="xsec"><h4>${p}</h4>${m}</section>`).join("")}
  </div>

  <div class="paper-bottom">
    <section class="editorial">
      <h4>\u09B8\u09AE\u09CD\u09AA\u09BE\u09A6\u0995\u09C0\u09AF\u09BC</h4>
      <p>${nv(n,e,i)}</p>
    </section>
    <section class="classifieds">
      <h4>\u09B6\u09CD\u09B0\u09C7\u09A3\u09C0\u09AC\u09A6\u09CD\u09A7 \u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09AA\u09A8</h4>
      ${oa(ev,3).map(([p,m])=>`<p><b>${p}:</b> ${m(n,e,i)}</p>`).join("")}
    </section>
    <section class="adbox">
      <span>\u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09AA\u09A8</span>
      ${(()=>{let p=Te(tv);return`<b>${p[0]}</b><p>${p[1]}</p>`})()}
    </section>
  </div>
  <footer class="imprint">
    \u09B8\u09AE\u09CD\u09AA\u09BE\u09A6\u0995 \u0993 \u09AA\u09CD\u09B0\u0995\u09BE\u09B6\u0995: \u0986\u09AE\u099C\u09A8\u09A4\u09BE \xB7 \u099B\u09BE\u09AA\u09BE: \u09AB\u09C1\u099F\u09AA\u09BE\u09A4 \u09AA\u09CD\u09B0\u09C7\u09B8 \xB7
    <a href="https://babuntooacademy.com" target="_blank" rel="noopener">\u0997\u09C7\u09AE\u099F\u09BF \u09AC\u09BE\u09A8\u09BF\u09AF\u09BC\u09C7\u099B\u09C7\u09A8 <b>Tahsan</b> \xB7 babuntooacademy.com</a>
  </footer>`}var Ut=n=>document.getElementById(n);async function xv(){try{await Promise.race([Promise.all([document.fonts.load("800 40px 'Baloo Da 2'","\u09AC\u09BE\u0982\u09B2\u09BE"),document.fonts.load("600 20px 'Hind Siliguri'","\u09AC\u09BE\u0982\u09B2\u09BE")]),new Promise(n=>setTimeout(n,2500))])}catch{}_v()}function dh(){let n=localStorage.getItem(bi.hero);return Vi.find(e=>e.id===n)||Vi[0]}function _v(){let n=new rl({canvas:Ut("game"),antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});n.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=ns,n.toneMapping=Fr,n.toneMappingExposure=1.05,zd(Math.min(8,n.capabilities.getMaxAnisotropy()));let e=new gr,t=new nn(55,window.innerWidth/window.innerHeight,.1,330);t.position.set(-10,6,6);let i=Qd(e),s=new vl,r=new bl(t),a=new Ml,o=sf(e,s),l=new gi(.86,1,56);l.rotateX(-Math.PI/2);let c=new kn(1,40);c.rotateX(-Math.PI/2);let u=[],h={scene:e,world:i,audio:s,hud:r,traffic:o,camera:t,mode:"title",player:null,foes:[],civilians:[],projectiles:[],loot:[],pickups:[],hazards:[],followers:[],log:[],nicks:new Set,money:0,kos:0,wave:0,combo:0,comboT:0,tokens:0,time:0,shake:0,hitstop:0,hpScale:1,dmgScale:1,waveClearT:0,overT:0,best:null,stats:uh(),photo:null,photoT:0,spawnRing(j,k,oe,ze,me,Se=!1){let et=new Et({color:ze,transparent:!0,depthWrite:!1,side:Mt}),$e=new fe(Se?c:l,et);$e.position.set(j,.32,k),$e.renderOrder=3,e.add($e),u.push({mesh:$e,r:oe,dur:me,t:0,telegraph:Se})},summon(j){Tf(h,j)},onPlayerDown(){h.overT=2.4,h.photoT=.6,s.lose(),r.banner("\u0995\u09BE\u09AC\u09C1 \u09B9\u09AF\u09BC\u09C7 \u0997\u09C7\u09B2\u09C7\u09A8!","\u0986\u099C\u0995\u09C7\u09B0 \u09AE\u09A4\u09CB \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09AC\u09BE\u099C\u09A6\u09C7\u09B0 \u09A6\u0996\u09B2\u09C7","boss")}};h.weather=rf(e,i,s,d),h.missions=Af(h),h.player=hf(h,dh()),h.player.model.group.visible=!1;function d(j){if(h.mode!=="play")return;let k=h.weather;j==="rain"?(r.toast("\u099D\u09C1\u09AE \u09AC\u09C3\u09B7\u09CD\u099F\u09BF \u09B6\u09C1\u09B0\u09C1! \u098F\u0995\u099F\u09C1 \u09AA\u09B0\u09C7\u0987 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC \u09B9\u09BE\u0981\u099F\u09C1\u09AA\u09BE\u09A8\u09BF \u{1F327}\uFE0F","warn"),r.news('\u09AC\u09C3\u09B7\u09CD\u099F\u09BF \u09A8\u09BE\u09AE\u09A4\u09C7\u0987 \u09A1\u09CD\u09B0\u09C7\u09A8 \u0989\u09AA\u099A\u09C7 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC; \u09B8\u09BF\u099F\u09BF \u0995\u09B0\u09CD\u09AA\u09CB\u09B0\u09C7\u09B6\u09A8 \u09AC\u09B2\u099B\u09C7, "\u098F\u099F\u09BE \u09A8\u09A6\u09C0 \u09A8\u09AF\u09BC, \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE"'),Rt(h,"rain",{hour:k.hour})):j==="flood"?(r.toast("\u099C\u09B2\u09BE\u09AC\u09A6\u09CD\u09A7\u09A4\u09BE! \u09AA\u09BE\u09A8\u09BF\u09A4\u09C7 \u09B9\u09BE\u0981\u099F\u09BE \u09A7\u09C0\u09B0, \u09B8\u09BF\u098F\u09A8\u099C\u09BF\u09B0 \u0987\u099E\u09CD\u099C\u09BF\u09A8 \u09AC\u09A8\u09CD\u09A7 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7","warn"),r.news('\u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC \u09B9\u09BE\u0981\u099F\u09C1\u09AA\u09BE\u09A8\u09BF; \u09A8\u09CC\u0995\u09BE \u09A8\u09BF\u09AF\u09BC\u09C7 \u0985\u09AB\u09BF\u09B8\u09C7 \u0997\u09C7\u09B2\u09C7\u09A8 \u098F\u0995 \u0995\u09B0\u09CD\u09AE\u0995\u09B0\u09CD\u09A4\u09BE, \u09AC\u09B2\u09B2\u09C7\u09A8 "\u0989\u09A8\u09CD\u09A8\u09AF\u09BC\u09A8"'),Rt(h,"flood",{hour:k.hour})):j==="rainStop"?r.news("\u09AC\u09C3\u09B7\u09CD\u099F\u09BF \u09A5\u09BE\u09AE\u09B2, \u09AA\u09BE\u09A8\u09BF \u09A8\u09BE\u09AE\u09AC\u09C7 \u0986\u0997\u09BE\u09AE\u09C0 \u09AC\u09B0\u09CD\u09B7\u09BE\u09B0 \u0986\u0997\u09C7: \u09B8\u0982\u09B6\u09CD\u09B2\u09BF\u09B7\u09CD\u099F \u09A6\u09AA\u09CD\u09A4\u09B0"):j==="shed"?(r.toast("\u09B2\u09CB\u09A1\u09B6\u09C7\u09A1\u09BF\u0982! \u09B8\u09AC \u09AC\u09BE\u09A4\u09BF \u09A8\u09BF\u09AD\u09C7 \u0997\u09C7\u09B2 \u{1F56F}\uFE0F","warn"),r.news("\u09B2\u09CB\u09A1\u09B6\u09C7\u09A1\u09BF\u0982 \u09A8\u09C7\u0987, \u09B6\u09C1\u09A7\u09C1 \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u09A8\u09C7\u0987: \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u09AC\u09BF\u09AD\u09BE\u0997"),Rt(h,"shed",{hour:k.hour})):j==="power"&&(r.toast("\u0995\u09BE\u09B0\u09C7\u09A8\u09CD\u099F \u0986\u09B8\u099B\u09C7! \u099C\u09A8\u09A4\u09BE\u09B0 \u0989\u09B2\u09CD\u09B2\u09BE\u09B8","good"),s.cheer(!1))}for(let j=0;j<24;j++){let k=j%2?1:-1;us(h,k*le(14.2,17.6),le(-70,10))}for(let j=0;j<14;j++)o.spawn(-20,!0);let f=localStorage.getItem(bi.muted)==="1";s.setMuted(f);let g=()=>{Ut("muteBtn").classList.toggle("off",f)};g();let v=()=>{f=!f,s.setMuted(f),localStorage.setItem(bi.muted,f?"1":"0"),g()},p=window.matchMedia("(pointer: coarse)").matches;document.body.classList.toggle("touchy",p);function m(){let j=h.player;j.riding&&hs(h,j,!1),pf(h),h.missions.reset();for(let k of h.foes)sa(h,k);h.foes.length=0;for(let k=h.civilians.length-1;k>=0;k--){let oe=h.civilians[k];(oe.fixed||oe.mode==="escortee")&&(sa(h,oe),h.civilians.splice(k,1))}for(let k of h.projectiles)e.remove(k.mesh);h.projectiles.length=0;for(let k of h.loot)e.remove(k.mesh);h.loot.length=0;for(let k of h.pickups)e.remove(k.mesh);h.pickups.length=0;for(let k of h.hazards)e.remove(k.mesh);h.hazards.length=0;for(let k of u)e.remove(k.mesh);u.length=0,h.tokens=0}function _(){s.unlock(),m();let j=h.player,k=dh();uf(h,j,k),Object.assign(j,{hp:k.hp,maxHp:k.hp,sandals:Mi.sandals,special:0,x:-14.5,z:-6,face:Math.PI,kx:0,kz:0,inv:1,weapon:null}),ri(j.model,j.model.defaultHeld),j.state="free",j.st=0,j.model.group.visible=!0,j.model.body.rotation.x=0;for(let oe of i.sandalStalls)oe.cooldown=0;Object.assign(h,{money:0,kos:0,wave:0,combo:0,comboT:0,overT:0,waveClearT:2.2,shake:0,hitstop:0,mode:"play",waveActive:!1}),h.stats=uh(),h.stats.hero=k.id,h.log=[],h.nicks.clear(),h.weather.reset(),h.photo=null,h.photoT=0;for(let oe of h.civilians)oe.z=Dt(j.z+le(-60,40),-Ie.len+5,Ie.startZ-5);r.moneyShown=0,r.show(!0),F(null),r.banner("\u09A6\u09AB\u09BE \u09E7",`${k.name} \u09A8\u09BE\u09AE\u09B2\u09C7\u09A8 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09AF\u09BC \xB7 \u09AB\u09C1\u099F\u09AA\u09BE\u09A4\u09C7 \u099A\u09BE\u0981\u09A6\u09BE\u09AC\u09BE\u099C\u09BF \u099A\u09B2\u099B\u09C7, \u09A5\u09BE\u09AE\u09BE\u09A8!`),s.wave()}function T(){if(h.wave++,h.tokens=0,Ef(h),h.wave>1&&h.wave%3!==0){let j=["\u09AE\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8 \u0986\u09B0 \u09B8\u09BF\u09A8\u09CD\u09A1\u09BF\u0995\u09C7\u099F \u09A8\u09C7\u09AE\u09C7\u099B\u09C7","\u0998\u09C1\u09B7\u09C7\u09B0 \u099F\u09C7\u09AC\u09BF\u09B2 \u09AC\u09B8\u09C7\u099B\u09C7 \u09AB\u09C1\u099F\u09AA\u09BE\u09A4\u09C7","\u099A\u09BE\u0981\u09A6\u09BE\u09AC\u09BE\u099C\u09B0\u09BE \u09AB\u09BF\u09B0\u09C7 \u098F\u09B8\u09C7\u099B\u09C7","\u09A6\u09C1\u09B0\u09CD\u09A8\u09C0\u09A4\u09BF\u09B0 \u099C\u09BE\u09B2 \u0986\u09B0\u09CB \u09AC\u09A1\u09BC","\u099F\u09C7\u09A8\u09CD\u09A1\u09BE\u09B0\u09AC\u09BE\u099C\u09B0\u09BE\u0993 \u098F\u09B8\u09C7 \u0997\u09C7\u099B\u09C7"];r.banner("\u09A6\u09AB\u09BE "+de(h.wave),j[h.wave%j.length]),s.wave()}h.waveActive=!0}function y(j){if(h.player.state!=="dead"){if(h.waveClearT>0){h.waveClearT-=j,h.waveClearT<=0&&T();return}if(h.waveActive&&h.foes.every(k=>k.state==="ko"||k.mission)){h.waveActive=!1,h.waveClearT=4.5;let k=h.player;k.hp=Math.min(k.maxHp,k.hp+25),k.sandals=Math.min(Mi.maxSandals,k.sandals+1),r.banner("\u09A6\u09AB\u09BE "+de(h.wave)+" \u09B6\u09C7\u09B7!","\u09A6\u09AE \u09AB\u09BF\u09B0\u09B2 +\u09E8\u09EB \xB7 \u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7\u09B2 +\u09E7","good"),s.cheer(!0)}}}function M(){h.mode="over",r.show(!1),Ut("paperBody").innerHTML=Df(h,h.stats,h.photo),Ut("heroName").value=localStorage.getItem(bi.name)||"",Ut("saveHero").disabled=!1,Ut("saveHero").textContent="\u09AC\u09CB\u09B0\u09CD\u09A1\u09C7 \u09A8\u09BE\u09AE \u09A4\u09C1\u09B2\u09C1\u09A8",Ut("shareBtn").disabled=!1,Ut("shareBtn").textContent="\u09AA\u09A4\u09CD\u09B0\u09BF\u0995\u09BE \u09B6\u09C7\u09AF\u09BC\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8",F("over"),Ut("over").scrollTop=0}async function E(){let j=Ut("shareBtn");j.disabled=!0,j.textContent="\u099B\u09BE\u09AA\u09BE \u09B9\u099A\u09CD\u099B\u09C7...";try{let k=document.querySelector("#over .paper");k.classList.add("exporting");let oe=await Id(k,{pixelRatio:2,backgroundColor:"#f3ead7",cacheBust:!0,filter:Se=>!(Se.classList&&Se.classList.contains("no-export"))});k.classList.remove("exporting");let ze=await(await fetch(oe)).blob(),me=new File([ze],"dainik-amjonota.png",{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[me]}))await navigator.share({files:[me],title:"\u09A6\u09C8\u09A8\u09BF\u0995 \u0986\u09AE\u099C\u09A8\u09A4\u09BE",text:"\u09A2\u09BE\u0995\u09BE \u09A1\u09CD\u09AF\u09BE\u09B6\u09C7 \u0986\u09AE\u09BE\u09B0 \u0995\u09C0\u09B0\u09CD\u09A4\u09BF! \u0996\u09C7\u09B2\u09C1\u09A8 \u0986\u09B0 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u09AC\u09BE\u0981\u099A\u09BE\u09A8"}),j.textContent="\u09B6\u09C7\u09AF\u09BC\u09BE\u09B0 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7 \u2713";else{let Se=document.createElement("a");Se.href=oe,Se.download="dainik-amjonota.png",Se.click(),j.textContent="\u099B\u09AC\u09BF \u09A1\u09BE\u0989\u09A8\u09B2\u09CB\u09A1 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7 \u2713"}}catch{document.querySelector("#over .paper").classList.remove("exporting"),j.textContent="\u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8"}j.disabled=!1}function x(){try{return JSON.parse(localStorage.getItem(bi.heroes))||[]}catch{return[]}}function S(){let j=x();Ut("heroList").innerHTML=j.length?j.map((oe,ze)=>`<li><span class="rank">${de(ze+1)}</span><span class="nm">${Nf(oe.name)}${oe.hero?` <em>${Nf(Vi.find(me=>me.id===oe.hero)?.name||"")}</em>`:""}</span><span class="mn">${Zt(oe.money)}</span><span class="ko">${de(oe.kos)} \u09A7\u09B0\u09BE\u09B6\u09BE\u09AF\u09BC\u09C0</span></li>`).join(""):'<li class="empty">\u098F\u0996\u09A8\u09CB \u0995\u09C7\u0989 \u09B0\u09C1\u0996\u09C7 \u09A6\u09BE\u0981\u09A1\u09BC\u09BE\u09AF\u09BC\u09A8\u09BF\u0964 \u0986\u09AA\u09A8\u09BF\u0987 \u09AA\u09CD\u09B0\u09A5\u09AE \u09B9\u09CB\u09A8!</li>';let k=j[0];Ut("titleBest").textContent=k?`\u09B8\u09C7\u09B0\u09BE \u09B9\u09BF\u09B0\u09CB: ${k.name} \xB7 ${Zt(k.money)}`:""}let P={student:"\u{1F393}",rickshaw:"\u{1F6FA}",aunty:"\u2602\uFE0F",teacher:"\u{1F453}"};function A(){let j=dh().id;Ut("heroPick").innerHTML=Vi.map(k=>`
      <button class="hero-card${k.id===j?" on":""}" data-action="pickHero" data-id="${k.id}" style="--c:${k.look.shirt}">
        <span class="hc-icon">${P[k.id]}</span>
        <span class="hc-name">${k.name}</span>
        <span class="hc-tag">${k.tag}</span>
        <span class="hc-stats">${k.stats.map((oe,ze)=>`<span><i>${Fd[ze]}</i><b style="width:${oe*20}%"></b></span>`).join("")}</span>
        <span class="hc-special"><b>E \xB7 ${k.special.name}</b>${k.special.desc}</span>
      </button>`).join("")}function D(){let j=(Ut("heroName").value||"").trim().slice(0,18)||"\u0985\u099A\u09C7\u09A8\u09BE \u09AA\u09A5\u099A\u09BE\u09B0\u09C0";localStorage.setItem(bi.name,j);let k=x();k.push({name:j,money:Math.round(h.money),kos:h.kos,wave:h.wave,hero:h.stats.hero,at:Date.now()}),k.sort((oe,ze)=>ze.money-oe.money),localStorage.setItem(bi.heroes,JSON.stringify(k.slice(0,10))),Ut("saveHero").disabled=!0,Ut("saveHero").textContent="\u09A8\u09BE\u09AE \u0989\u09A0\u09C7\u099B\u09C7 \u2713",S()}function F(j){for(let k of["title","pause","over"])Ut(k).classList.toggle("hidden",k!==j)}function W(){m(),h.mode="title",h.player.model.group.visible=!1,r.show(!1),A(),F("title")}function L(){h.mode==="play"?(h.mode="paused",F("pause")):h.mode==="paused"&&(h.mode="play",F(null))}document.addEventListener("click",j=>{let k=j.target.closest("[data-action]");if(!k)return;s.unlock();let oe=k.dataset.action;oe==="start"||oe==="again"?_():oe==="resume"?L():oe==="menu"?W():oe==="pause"?L():oe==="mute"?v():oe==="save"?D():oe==="share"?E():oe==="pickHero"?(localStorage.setItem(bi.hero,k.dataset.id),A(),s.pickup()):oe==="heroes"?(S(),Ut("heroes").classList.remove("hidden")):oe==="disclaimer"?Ut("disclaimer").classList.remove("hidden"):oe==="close"?k.closest(".modal").classList.add("hidden"):oe==="howto"&&Ut("howto").classList.toggle("collapsed")}),Ut("heroName").addEventListener("keydown",j=>{j.key==="Enter"&&D()}),window.addEventListener("blur",()=>{h.mode==="play"&&L()}),window.addEventListener("resize",()=>{n.setSize(window.innerWidth,window.innerHeight),t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix()});function Z(j,k){let ze=(Math.sign(j.x-k.x)||1)*.8,me=k.dir*.6,Se=k.type==="dozer";if(j.isFoe&&Se&&j.key==="bhumi")return;j.carImmune=1.3,s.crash();let et=Se?"\u09AC\u09C1\u09B2\u09A1\u09CB\u099C\u09BE\u09B0!":k.type==="bus"?"\u09AC\u09BE\u09B8\u09C7\u09B0 \u09A7\u09BE\u0995\u09CD\u0995\u09BE!":"\u09A7\u09BE\u0995\u09CD\u0995\u09BE!";j.isPlayer?(Gi(h,k.T.dmg*(k.T.danger?1:.8),ze,me,k.T.dmg>=12,et,k.type)&&(h.stats.busHits++,Se&&h.stats.dozerHits++),j.kx=ze*9,j.kz=me*9):j.isFoe?(wi(h,j,k.T.danger?70:22,{knock:!0,vehicle:!0,dozer:Se,dirX:ze,dirZ:me,word:et}),j.kx=ze*10,j.kz=me*10):j.isCivilian&&(j.mode="down",j.st=0,j.kx=ze*8,j.kz=me*8,j.bubble=yv(["\u0989\u09AB! \u099C\u09C7\u09AC\u09CD\u09B0\u09BE \u0995\u09CD\u09B0\u09B8\u09BF\u0982 \u0995\u0987?","\u0986\u09B2\u09CD\u09B2\u09BE\u09B9 \u09AC\u09BE\u0981\u099A\u09BE\u0987\u099B\u09C7!","\u09B9\u09C7\u09B2\u09AE\u09C7\u099F \u099B\u09BF\u09B2 \u09A8\u09BE!"]))}let Q=new B(-14,6,4),Y=new B(-14,1,-6),se=new B,K=new B,ne=new B,ee=0;function ge(j){let k=h.player;if(h.mode==="title"){ee+=j;let Se=Ie.startZ-20-ee*2.2%(Ie.len-100);return Q.set(Math.sin(ee*.12)*7-3,5.5+Math.sin(ee*.2)*.8,Se),t.position.copy(Q),t.lookAt(se.set(Math.sin(ee*.12)*4,2.5,Se-20)),Se}let oe=k.riding?1.25:1,ze=se.set(k.x*.68,k.y+6.2*oe,k.z+9.4*oe),me=1-Math.exp(-6*j);if(Q.lerp(ze,me),Y.lerp(K.set(k.x*.94,k.y+1.2,k.z-4),me),t.position.copy(Q),h.shake>0){let Se=h.shake*.35;t.position.x+=(Math.random()-.5)*Se,t.position.y+=(Math.random()-.5)*Se}return t.lookAt(Y),k.z}function Ue(j){for(let k=u.length-1;k>=0;k--){let oe=u[k];oe.t+=j;let ze=oe.t/oe.dur;if(ze>=1){e.remove(oe.mesh),oe.mesh.material.dispose(),u.splice(k,1);continue}oe.telegraph?(oe.mesh.scale.setScalar(oe.r*(.3+.7*Math.min(1,ze*1.4))),oe.mesh.material.opacity=.25+Math.sin(oe.t*30)*.12):(oe.mesh.scale.setScalar(.3+oe.r*Math.sqrt(ze)),oe.mesh.material.opacity=1-ze)}}function te(){try{let j=n.domElement,k=720,oe=Math.round(j.height/j.width*720),ze=document.createElement("canvas");ze.width=k,ze.height=oe;let me=ze.getContext("2d"),Se=h.weather?h.weather.nightK:0;me.filter=`grayscale(1) contrast(${(1.15+Se*.1).toFixed(2)}) brightness(${(1.05+Se*.9).toFixed(2)})`,me.drawImage(j,0,0,k,oe),h.photo=ze.toDataURL("image/jpeg",.75)}catch{h.photo=null}}let _e=performance.now();function we(j){requestAnimationFrame(we);let k=Math.min(.05,(j-_e)/1e3);_e=j,h.time+=k;let oe=a.take();oe.includes("mute")&&v(),oe.includes("pause")&&L(),h.mode==="title"&&oe.includes("confirm")&&_(),h.mode==="over"&&oe.includes("confirm")&&document.activeElement!==Ut("heroName")&&_();let ze=h.mode==="play"||h.mode==="title"||h.mode==="over",me=k;if(h.hitstop>0&&(h.hitstop-=k,me=k*.08),ze){let Se=h.player;if(h.mode==="play"){ff(h,Se,me,Se.state==="dead"?{x:0,y:0}:a.axis(),oe);for(let Ke of h.foes)Sf(h,Ke,me);for(let Ke=h.foes.length-1;Ke>=0;Ke--)h.foes[Ke].remove&&(sa(h,h.foes[Ke]),h.foes.splice(Ke,1));cf([Se,...h.foes.filter(Ke=>Ke.state!=="ko"),...h.followers]),gf(h,me),yf(h,me),bf(h,me),_f(h,me),y(me),h.missions.update(me),o.keepParked(Se.z),h.comboT-=me,h.comboT<=0&&(h.combo=0),h.overT>0&&(h.overT-=k,h.overT<=0&&M())}let et=ge(k);h.mode==="title"&&(Se.z=et-10);for(let Ke of h.civilians)wf(h,Ke,me);for(let Ke=h.civilians.length-1;Ke>=0;Ke--){let ct=h.civilians[Ke];ct.fixed&&!ct.follower&&Math.abs(ct.z-Se.z)>110&&!h.foes.some(It=>It.victim===ct||It.payers&&It.payers.includes(ct))&&(sa(h,ct),h.civilians.splice(Ke,1))}let $e=h.mode==="play"?[Se,...h.foes.filter(Ke=>Ke.state!=="ko"),...h.civilians.filter(Ke=>Ke.follower||Ke.mode==="escortee")]:[];o.update(me,h.mode==="play"?Se.z:et-20,$e,Z,h.time),Ue(me),h.mode==="play"?ne.set(Se.x,0,Se.z):ne.set(0,0,et-25),h.weather.update(me,ne,h.mode==="play"),i.update(ne,h.time),h.mode==="play"?r.update(h,k):r.ticker(k),h.shake=Math.max(0,h.shake-k*1.6)}s.update(k,h.mode==="play"),n.render(e,t),h.mode==="play"&&(h.player.state!=="dead"&&(h.stats.time+=k),h.photoT>0&&(h.photoT-=k,h.photoT<=0&&te()))}S(),A(),F("title"),r.show(!1),requestAnimationFrame(we)}function yv(n){return n[Math.random()*n.length|0]}function Nf(n){return n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}xv();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

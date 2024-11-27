import{c as L,g as H,T as G}from"./commonjsHelpers-oXBIWH0m.js";import{o as A,b as I,w as U,c as S,d as h,j as q,l as B,k as F,E as $}from"./vendor-Dl8iSx9S.js";import{_ as J}from"./index-DZdTV-rP.js";var _={exports:{}};(function(W,c){(function(w,y){W.exports=y()})(typeof self<"u"?self:L,()=>(()=>{var w={d:(e,t)=>{for(var s in t)w.o(t,s)&&!w.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},y={};function v(){return typeof navigator<"u"?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}function m(e,t){return e==null&&(e=0),t==null&&(t=1),Math.floor(e+Math.random()*(t-e+1))}w.r(y),w.d(y,{default:()=>j}),Number.prototype.clamp=function(e,t){return Math.min(Math.max(this,e),t)};const N=e=>.299*e.r+.587*e.g+.114*e.b;function P(e){for(;e.children&&e.children.length>0;)P(e.children[0]),e.remove(e.children[0]);e.geometry&&e.geometry.dispose(),e.material&&(Object.keys(e.material).forEach(t=>{e.material[t]&&e.material[t]!==null&&typeof e.material[t].dispose=="function"&&e.material[t].dispose()}),e.material.dispose())}const T=typeof window=="object";let z=T&&window.THREE||{};T&&!window.VANTA&&(window.VANTA={});const d=T&&window.VANTA||{};d.register=(e,t)=>d[e]=s=>new t(s),d.version="0.5.24";const k=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};d.VantaBase=class{constructor(e={}){if(!T)return!1;d.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const t=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},t),(e instanceof HTMLElement||typeof e=="string")&&(e={el:e}),Object.assign(this.options,e),this.options.THREE&&(z=this.options.THREE),this.el=this.options.el,this.el==null)k('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const a=this.el;if(this.el=(s=a,document.querySelector(s)),!this.el)return void k("Cannot find element",a)}var s,i;this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(a){return k("Init error",a),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=(i=this.options.backgroundColor,typeof i=="number"?"#"+("00000"+i.toString(16)).slice(-6):i)))}this.initMouse(),this.resize(),this.animationLoop();const n=window.addEventListener;n("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(n("scroll",this.windowMouseMoveWrapper),n("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(n("touchstart",this.windowTouchWrapper),n("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&n("deviceorientation",this.windowGyroWrapper)}setOptions(e={}){Object.assign(this.options,e),this.triggerMouseMove()}prepareEl(){let e,t;if(typeof Node<"u"&&Node.TEXT_NODE)for(e=0;e<this.el.childNodes.length;e++){const s=this.el.childNodes[e];if(s.nodeType===Node.TEXT_NODE){const i=document.createElement("span");i.textContent=s.textContent,s.parentElement.insertBefore(i,s),s.remove()}}for(e=0;e<this.el.children.length;e++)t=this.el.children[e],getComputedStyle(t).position==="static"&&(t.style.position="relative"),getComputedStyle(t).zIndex==="auto"&&(t.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles(e,t={}){Object.assign(e.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(e.style,t),e.classList.add("vanta-canvas")}initThree(){z.WebGLRenderer?(this.renderer=new z.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new z.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){const e=this.getCanvasElement();return!!e&&e.getBoundingClientRect()}windowMouseMoveWrapper(e){const t=this.getCanvasRect();if(!t)return!1;const s=e.clientX-t.left,i=e.clientY-t.top;s>=0&&i>=0&&s<=t.width&&i<=t.height&&(this.mouseX=s,this.mouseY=i,this.options.mouseEase||this.triggerMouseMove(s,i))}windowTouchWrapper(e){const t=this.getCanvasRect();if(!t)return!1;if(e.touches.length===1){const s=e.touches[0].clientX-t.left,i=e.touches[0].clientY-t.top;s>=0&&i>=0&&s<=t.width&&i<=t.height&&(this.mouseX=s,this.mouseY=i,this.options.mouseEase||this.triggerMouseMove(s,i))}}windowGyroWrapper(e){const t=this.getCanvasRect();if(!t)return!1;const s=Math.round(2*e.alpha)-t.left,i=Math.round(2*e.beta)-t.top;s>=0&&i>=0&&s<=t.width&&i<=t.height&&(this.mouseX=s,this.mouseY=i,this.options.mouseEase||this.triggerMouseMove(s,i))}triggerMouseMove(e,t){e===void 0&&t===void 0&&(this.options.mouseEase?(e=this.mouseEaseX,t=this.mouseEaseY):(e=this.mouseX,t=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=e/this.scale,this.uniforms.iMouse.value.y=t/this.scale);const s=e/this.width,i=t/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(s,i)}setSize(){this.scale||(this.scale=1),v()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){const e=this.el.offsetHeight,t=this.el.getBoundingClientRect(),s=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,i=t.top+s;return i-window.innerHeight<=s&&s<=i+e}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const e=performance.now();if(this.prevNow){let t=(e-this.prevNow)/16.666666666666668;t=Math.max(.2,Math.min(t,5)),this.t+=t,this.t2+=(this.options.speed||1)*t,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2)}return this.prevNow=e,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();const e=window.removeEventListener;e("touchstart",this.windowTouchWrapper),e("touchmove",this.windowTouchWrapper),e("scroll",this.windowMouseMoveWrapper),e("mousemove",this.windowMouseMoveWrapper),e("deviceorientation",this.windowGyroWrapper),e("resize",this.resize),window.cancelAnimationFrame(this.req);const t=this.scene;t&&t.children&&P(t),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),d.current===this&&(d.current=null)}};const V=d.VantaBase;let o=typeof window=="object"&&window.THREE;class D extends V{static initClass(){this.prototype.defaultOptions={color:16727937,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0}}constructor(t){o=t.THREE||o,super(t)}genPoint(t,s,i){let n;if(this.points||(this.points=[]),this.options.showDots){const b=new o.SphereGeometry(.25,12,12),C=new o.MeshLambertMaterial({color:this.options.color});n=new o.Mesh(b,C)}else n=new o.Object3D;var a,l;return this.cont.add(n),n.ox=t,n.oy=s,n.oz=i,n.position.set(t,s,i),n.r=((a=-2)==null&&(a=0),(l=2)==null&&(l=1),a+Math.random()*(l-a)),this.points.push(n)}onInit(){this.cont=new o.Group,this.cont.position.set(0,0,0),this.scene.add(this.cont);let t=this.options.points,{spacing:s}=this.options;v()&&(t=~~(.75*t),s=~~(.65*s));const i=t*t*2;this.linePositions=new Float32Array(i*i*3),this.lineColors=new Float32Array(i*i*3);const n=N(new o.Color(this.options.color)),a=N(new o.Color(this.options.backgroundColor));this.blending=n>a?"additive":"subtractive";const l=new o.BufferGeometry;l.setAttribute("position",new o.BufferAttribute(this.linePositions,3).setUsage(o.DynamicDrawUsage)),l.setAttribute("color",new o.BufferAttribute(this.lineColors,3).setUsage(o.DynamicDrawUsage)),l.computeBoundingSphere(),l.setDrawRange(0,0);const b=new o.LineBasicMaterial({vertexColors:o.VertexColors,blending:this.blending==="additive"?o.AdditiveBlending:null,transparent:!0});this.linesMesh=new o.LineSegments(l,b),this.cont.add(this.linesMesh);for(let u=0;u<=t;u++)for(let p=0;p<=t;p++){const E=m(-3,3),r=(u-t/2)*s+m(-5,5);let x=(p-t/2)*s+m(-5,5);u%2&&(x+=.5*s),this.genPoint(r,E-m(5,15),x),this.genPoint(r+m(-5,5),E+m(5,15),x+m(-5,5))}this.camera=new o.PerspectiveCamera(25,this.width/this.height,.01,1e4),this.camera.position.set(50,100,150),this.scene.add(this.camera);const C=new o.AmbientLight(16777215,.75);return this.scene.add(C),this.spot=new o.SpotLight(16777215,1),this.spot.position.set(0,200,0),this.spot.distance=400,this.spot.target=this.cont,this.scene.add(this.spot)}onDestroy(){this.scene&&this.scene.remove(this.linesMesh),this.spot=this.points=this.linesMesh=this.lineColors=this.linePositions=null}setOptions(t){super.setOptions(t),t.color&&this.points.forEach(s=>{s.material.color=new o.Color(t.color)})}onUpdate(){let t;const s=this.camera;Math.abs(s.tx-s.position.x)>.01&&(t=s.tx-s.position.x,s.position.x+=.02*t),Math.abs(s.ty-s.position.y)>.01&&(t=s.ty-s.position.y,s.position.y+=.02*t),s.lookAt(new o.Vector3(0,0,0));let i=0,n=0,a=0;const l=new o.Color(this.options.backgroundColor),b=new o.Color(this.options.color),C=b.clone().sub(l);this.rayCaster&&this.rayCaster.setFromCamera(new o.Vector2(this.rcMouseX,this.rcMouseY),this.camera);for(let u=0;u<this.points.length;u++){let p,E;const r=this.points[u];E=this.rayCaster?this.rayCaster.ray.distanceToPoint(r.position):1e3;const x=E.clamp(5,15);if(r.scale.x=r.scale.y=r.scale.z=(.25*(15-x)).clamp(1,100),r.r!==0){let f=Math.atan2(r.position.z,r.position.x);p=Math.sqrt(r.position.z*r.position.z+r.position.x*r.position.x),f+=25e-5*r.r,r.position.x=p*Math.cos(f),r.position.z=p*Math.sin(f)}for(let f=u;f<this.points.length;f++){const M=this.points[f],O=r.position.x-M.position.x,R=r.position.y-M.position.y,X=r.position.z-M.position.z;if(p=Math.sqrt(O*O+R*R+X*X),p<this.options.maxDistance){let g;const Y=(2*(1-p/this.options.maxDistance)).clamp(0,1);g=this.blending==="additive"?new o.Color(0).lerp(C,Y):l.clone().lerp(b,Y),this.linePositions[i++]=r.position.x,this.linePositions[i++]=r.position.y,this.linePositions[i++]=r.position.z,this.linePositions[i++]=M.position.x,this.linePositions[i++]=M.position.y,this.linePositions[i++]=M.position.z,this.lineColors[n++]=g.r,this.lineColors[n++]=g.g,this.lineColors[n++]=g.b,this.lineColors[n++]=g.r,this.lineColors[n++]=g.g,this.lineColors[n++]=g.b,a++}}}return this.linesMesh.geometry.setDrawRange(0,2*a),this.linesMesh.geometry.attributes.position.needsUpdate=!0,this.linesMesh.geometry.attributes.color.needsUpdate=!0,.001*this.t}onMouseMove(t,s){const i=this.camera;i.oy||(i.oy=i.position.y,i.ox=i.position.x,i.oz=i.position.z);const n=Math.atan2(i.oz,i.ox),a=Math.sqrt(i.oz*i.oz+i.ox*i.ox),l=n+2*(t-.5)*(this.options.mouseCoeffX||1);i.tz=a*Math.sin(l),i.tx=a*Math.cos(l),i.ty=i.oy+50*(s-.5)*(this.options.mouseCoeffY||1),this.rayCaster,this.rcMouseX=2*t-1,this.rcMouseY=2*-t+1}onRestart(){this.scene&&this.scene.remove(this.linesMesh),this.points=[]}}D.initClass();const j=d.register("NET",D);return y})())})(_);var K=_.exports;const Q=H(K),Z={name:"SecurityCheck",data(){return{show:!0,isVerified:!1,vantaEffect:null}},mounted(){this.vantaEffect=Q({el:"#security-bg",THREE:G,mouseControls:!1,touchControls:!1,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color:7428322,backgroundColor:658708,points:12,maxDistance:18,spacing:18,showDots:!1,opacity:.9}),setTimeout(()=>{this.isVerified=!0,setTimeout(()=>{this.show=!1,this.vantaEffect&&this.vantaEffect.destroy()},1e3)},2e3)},beforeUnmount(){this.vantaEffect&&this.vantaEffect.destroy()}},tt={key:0,class:"security-overlay"},et={class:"security-modal"},st={class:"security-content"},it={key:0,class:"verification-progress"},ot={key:1,class:"verification-success"};function nt(W,c,w,y,v,m){return A(),I($,{name:"security-fade"},{default:U(()=>[v.show?(A(),S("div",tt,[c[4]||(c[4]=h("div",{id:"security-bg"},null,-1)),h("div",et,[c[2]||(c[2]=h("div",{class:"security-header"},[h("div",{class:"security-logo"},[h("i",{class:"bi bi-shield-check"})]),h("div",{class:"security-title"},[h("h2",null,"Sicherheitsüberprüfung"),h("p",null,"Protected by IronWall - GGS-Network")])],-1)),h("div",st,[h("div",{class:q(["verification-box",{verified:v.isVerified}])},[v.isVerified?(A(),S("div",ot,c[1]||(c[1]=[h("i",{class:"bi bi-check-circle"},null,-1),h("p",null,"Überprüfung erfolgreich!",-1)]))):(A(),S("div",it,c[0]||(c[0]=[h("div",{class:"spinner"},null,-1),h("p",null,"Bitte warten Sie, während wir Ihre Verbindung überprüfen...",-1)])))],2)]),c[3]||(c[3]=h("div",{class:"security-footer"},[h("div",{class:"security-info"},[h("small",null,"Diese Überprüfung ist notwendig, um DDoS-Angriffe und böswillige Bots zu blockieren.")]),h("div",{class:"security-badges"},[h("span",{class:"badge"},[h("i",{class:"bi bi-shield-lock"}),B(" IronWall Protection ")]),h("span",{class:"badge"},[h("i",{class:"bi bi-robot"}),B(" Bot Defense ")])])],-1))])])):F("",!0)]),_:1})}const lt=J(Z,[["render",nt],["__scopeId","data-v-beb0e777"]]);export{lt as default};

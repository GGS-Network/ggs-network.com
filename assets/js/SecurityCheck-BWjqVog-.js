import{T as t}from"./animations-BwzKGgaG.js";import{c as e,g as s}from"./_commonjsHelpers-4bwTGH6J.js";import{o as i,b as o,w as n,c as r,d as h,j as a,l,k as c,D as p}from"./vendor-Bqe9aLnF.js";import{_ as d}from"./index-DqdfB1wf.js";var u={exports:{}};"undefined"!=typeof self&&self;const m=s(u.exports=(()=>(()=>{var t={d:(e,s)=>{for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function s(){return"undefined"!=typeof navigator?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}function i(t,e){return null==t&&(t=0),null==e&&(e=1),Math.floor(t+Math.random()*(e-t+1))}t.r(e),t.d(e,{default:()=>u}),Number.prototype.clamp=function(t,e){return Math.min(Math.max(this,t),e)};const o=t=>.299*t.r+.587*t.g+.114*t.b;function n(t){for(;t.children&&t.children.length>0;)n(t.children[0]),t.remove(t.children[0]);t.geometry&&t.geometry.dispose(),t.material&&(Object.keys(t.material).forEach((e=>{t.material[e]&&null!==t.material[e]&&"function"==typeof t.material[e].dispose&&t.material[e].dispose()})),t.material.dispose())}const r="object"==typeof window;let h=r&&window.THREE||{};r&&!window.VANTA&&(window.VANTA={});const a=r&&window.VANTA||{};a.register=(t,e)=>a[t]=t=>new e(t),a.version="0.5.24";const l=function(){Array.prototype.unshift.call(arguments,"[VANTA]")};a.VantaBase=class{constructor(t={}){if(!r)return!1;a.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const e="function"==typeof this.getDefaultOptions?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},e),(t instanceof HTMLElement||"string"==typeof t)&&(t={el:t}),Object.assign(this.options,t),this.options.THREE&&(h=this.options.THREE),this.el=this.options.el,null==this.el)l('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const t=this.el;if(this.el=(s=t,document.querySelector(s)),!this.el)return void l("Cannot find element",t)}var s,i;this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(t){return l("Init error",t),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(this.el.style.background=(i=this.options.backgroundColor,"number"==typeof i?"#"+("00000"+i.toString(16)).slice(-6):i)))}this.initMouse(),this.resize(),this.animationLoop();const o=window.addEventListener;o("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(o("scroll",this.windowMouseMoveWrapper),o("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(o("touchstart",this.windowTouchWrapper),o("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&o("deviceorientation",this.windowGyroWrapper)}setOptions(t={}){Object.assign(this.options,t),this.triggerMouseMove()}prepareEl(){let t,e;if("undefined"!=typeof Node&&Node.TEXT_NODE)for(t=0;t<this.el.childNodes.length;t++){const e=this.el.childNodes[t];if(e.nodeType===Node.TEXT_NODE){const t=document.createElement("span");t.textContent=e.textContent,e.parentElement.insertBefore(t,e),e.remove()}}for(t=0;t<this.el.children.length;t++)e=this.el.children[t],"static"===getComputedStyle(e).position&&(e.style.position="relative"),"auto"===getComputedStyle(e).zIndex&&(e.style.zIndex=1);"static"===getComputedStyle(this.el).position&&(this.el.style.position="relative")}applyCanvasStyles(t,e={}){Object.assign(t.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(t.style,e),t.classList.add("vanta-canvas")}initThree(){h.WebGLRenderer&&(this.renderer=new h.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new h.Scene)}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){const t=this.getCanvasElement();return!!t&&t.getBoundingClientRect()}windowMouseMoveWrapper(t){const e=this.getCanvasRect();if(!e)return!1;const s=t.clientX-e.left,i=t.clientY-e.top;s>=0&&i>=0&&s<=e.width&&i<=e.height&&(this.mouseX=s,this.mouseY=i,this.options.mouseEase||this.triggerMouseMove(s,i))}windowTouchWrapper(t){const e=this.getCanvasRect();if(!e)return!1;if(1===t.touches.length){const s=t.touches[0].clientX-e.left,i=t.touches[0].clientY-e.top;s>=0&&i>=0&&s<=e.width&&i<=e.height&&(this.mouseX=s,this.mouseY=i,this.options.mouseEase||this.triggerMouseMove(s,i))}}windowGyroWrapper(t){const e=this.getCanvasRect();if(!e)return!1;const s=Math.round(2*t.alpha)-e.left,i=Math.round(2*t.beta)-e.top;s>=0&&i>=0&&s<=e.width&&i<=e.height&&(this.mouseX=s,this.mouseY=i,this.options.mouseEase||this.triggerMouseMove(s,i))}triggerMouseMove(t,e){void 0===t&&void 0===e&&(this.options.mouseEase?(t=this.mouseEaseX,e=this.mouseEaseY):(t=this.mouseX,e=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=t/this.scale,this.uniforms.iMouse.value.y=e/this.scale);const s=t/this.width,i=e/this.height;"function"==typeof this.onMouseMove&&this.onMouseMove(s,i)}setSize(){this.scale||(this.scale=1),s()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,"function"==typeof this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),"function"==typeof this.onResize&&this.onResize()}isOnScreen(){const t=this.el.offsetHeight,e=this.el.getBoundingClientRect(),s=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,i=e.top+s;return i-window.innerHeight<=s&&s<=i+t}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const t=performance.now();if(this.prevNow){let e=(t-this.prevNow)/(1e3/60);e=Math.max(.2,Math.min(e,5)),this.t+=e,this.t2+=(this.options.speed||1)*e,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2)}return this.prevNow=t,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&("function"==typeof this.onUpdate&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),"function"==typeof this.afterRender&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);"function"==typeof this.onRestart&&this.onRestart(),this.init()}init(){"function"==typeof this.onInit&&this.onInit()}destroy(){"function"==typeof this.onDestroy&&this.onDestroy();const t=window.removeEventListener;t("touchstart",this.windowTouchWrapper),t("touchmove",this.windowTouchWrapper),t("scroll",this.windowMouseMoveWrapper),t("mousemove",this.windowMouseMoveWrapper),t("deviceorientation",this.windowGyroWrapper),t("resize",this.resize),window.cancelAnimationFrame(this.req);const e=this.scene;e&&e.children&&n(e),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),a.current===this&&(a.current=null)}};const c=a.VantaBase;let p="object"==typeof window&&window.THREE;class d extends c{static initClass(){this.prototype.defaultOptions={color:16727937,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0}}constructor(t){p=t.THREE||p,super(t)}genPoint(t,e,s){let i;if(this.points||(this.points=[]),this.options.showDots){const t=new p.SphereGeometry(.25,12,12),e=new p.MeshLambertMaterial({color:this.options.color});i=new p.Mesh(t,e)}else i=new p.Object3D;var o,n;return this.cont.add(i),i.ox=t,i.oy=e,i.oz=s,i.position.set(t,e,s),i.r=(null==(o=-2)&&(o=0),null==(n=2)&&(n=1),o+Math.random()*(n-o)),this.points.push(i)}onInit(){this.cont=new p.Group,this.cont.position.set(0,0,0),this.scene.add(this.cont);let t=this.options.points,{spacing:e}=this.options;s()&&(t=~~(.75*t),e=~~(.65*e));const n=t*t*2;this.linePositions=new Float32Array(n*n*3),this.lineColors=new Float32Array(n*n*3);const r=o(new p.Color(this.options.color)),h=o(new p.Color(this.options.backgroundColor));this.blending=r>h?"additive":"subtractive";const a=new p.BufferGeometry;a.setAttribute("position",new p.BufferAttribute(this.linePositions,3).setUsage(p.DynamicDrawUsage)),a.setAttribute("color",new p.BufferAttribute(this.lineColors,3).setUsage(p.DynamicDrawUsage)),a.computeBoundingSphere(),a.setDrawRange(0,0);const l=new p.LineBasicMaterial({vertexColors:p.VertexColors,blending:"additive"===this.blending?p.AdditiveBlending:null,transparent:!0});this.linesMesh=new p.LineSegments(a,l),this.cont.add(this.linesMesh);for(let s=0;s<=t;s++)for(let o=0;o<=t;o++){const n=i(-3,3),r=(s-t/2)*e+i(-5,5);let h=(o-t/2)*e+i(-5,5);s%2&&(h+=.5*e),this.genPoint(r,n-i(5,15),h),this.genPoint(r+i(-5,5),n+i(5,15),h+i(-5,5))}this.camera=new p.PerspectiveCamera(25,this.width/this.height,.01,1e4),this.camera.position.set(50,100,150),this.scene.add(this.camera);const c=new p.AmbientLight(16777215,.75);return this.scene.add(c),this.spot=new p.SpotLight(16777215,1),this.spot.position.set(0,200,0),this.spot.distance=400,this.spot.target=this.cont,this.scene.add(this.spot)}onDestroy(){this.scene&&this.scene.remove(this.linesMesh),this.spot=this.points=this.linesMesh=this.lineColors=this.linePositions=null}setOptions(t){super.setOptions(t),t.color&&this.points.forEach((e=>{e.material.color=new p.Color(t.color)}))}onUpdate(){let t;const e=this.camera;Math.abs(e.tx-e.position.x)>.01&&(t=e.tx-e.position.x,e.position.x+=.02*t),Math.abs(e.ty-e.position.y)>.01&&(t=e.ty-e.position.y,e.position.y+=.02*t),e.lookAt(new p.Vector3(0,0,0));let s=0,i=0,o=0;const n=new p.Color(this.options.backgroundColor),r=new p.Color(this.options.color),h=r.clone().sub(n);this.rayCaster&&this.rayCaster.setFromCamera(new p.Vector2(this.rcMouseX,this.rcMouseY),this.camera);for(let a=0;a<this.points.length;a++){let t,e;const l=this.points[a];e=this.rayCaster?this.rayCaster.ray.distanceToPoint(l.position):1e3;const c=e.clamp(5,15);if(l.scale.x=l.scale.y=l.scale.z=(.25*(15-c)).clamp(1,100),0!==l.r){let e=Math.atan2(l.position.z,l.position.x);t=Math.sqrt(l.position.z*l.position.z+l.position.x*l.position.x),e+=25e-5*l.r,l.position.x=t*Math.cos(e),l.position.z=t*Math.sin(e)}for(let d=a;d<this.points.length;d++){const e=this.points[d],a=l.position.x-e.position.x,c=l.position.y-e.position.y,u=l.position.z-e.position.z;if(t=Math.sqrt(a*a+c*c+u*u),t<this.options.maxDistance){let a;const c=(2*(1-t/this.options.maxDistance)).clamp(0,1);a="additive"===this.blending?new p.Color(0).lerp(h,c):n.clone().lerp(r,c),this.linePositions[s++]=l.position.x,this.linePositions[s++]=l.position.y,this.linePositions[s++]=l.position.z,this.linePositions[s++]=e.position.x,this.linePositions[s++]=e.position.y,this.linePositions[s++]=e.position.z,this.lineColors[i++]=a.r,this.lineColors[i++]=a.g,this.lineColors[i++]=a.b,this.lineColors[i++]=a.r,this.lineColors[i++]=a.g,this.lineColors[i++]=a.b,o++}}}return this.linesMesh.geometry.setDrawRange(0,2*o),this.linesMesh.geometry.attributes.position.needsUpdate=!0,this.linesMesh.geometry.attributes.color.needsUpdate=!0,.001*this.t}onMouseMove(t,e){const s=this.camera;s.oy||(s.oy=s.position.y,s.ox=s.position.x,s.oz=s.position.z);const i=Math.atan2(s.oz,s.ox),o=Math.sqrt(s.oz*s.oz+s.ox*s.ox),n=i+2*(t-.5)*(this.options.mouseCoeffX||1);s.tz=o*Math.sin(n),s.tx=o*Math.cos(n),s.ty=s.oy+50*(e-.5)*(this.options.mouseCoeffY||1),this.rayCaster,this.rcMouseX=2*t-1,this.rcMouseY=2*-t+1}onRestart(){this.scene&&this.scene.remove(this.linesMesh),this.points=[]}}d.initClass();const u=a.register("NET",d);return e})())()),f={key:0,class:"security-overlay"},g={class:"security-modal"},w={class:"security-content"},y={key:0,class:"verification-progress"},v={key:1,class:"verification-success"};const b=d({name:"SecurityCheck",data:()=>({show:!0,isVerified:!1,vantaEffect:null}),mounted(){this.vantaEffect=m({el:"#security-bg",THREE:t,mouseControls:!1,touchControls:!1,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color:7428322,backgroundColor:658708,points:12,maxDistance:18,spacing:18,showDots:!1,opacity:.9}),setTimeout((()=>{this.isVerified=!0,setTimeout((()=>{this.show=!1,this.vantaEffect&&this.vantaEffect.destroy()}),1e3)}),2e3)},beforeUnmount(){this.vantaEffect&&this.vantaEffect.destroy()}},[["render",function(t,e,s,d,u,m){return i(),o(p,{name:"security-fade"},{default:n((()=>[u.show?(i(),r("div",f,[e[4]||(e[4]=h("div",{id:"security-bg"},null,-1)),h("div",g,[e[2]||(e[2]=h("div",{class:"security-header"},[h("div",{class:"security-logo"},[h("i",{class:"bi bi-shield-check"})]),h("div",{class:"security-title"},[h("h2",null,"Sicherheitsüberprüfung"),h("p",null,"Protected by IronWall - GGS-Network")])],-1)),h("div",w,[h("div",{class:a(["verification-box",{verified:u.isVerified}])},[u.isVerified?(i(),r("div",v,e[1]||(e[1]=[h("i",{class:"bi bi-check-circle"},null,-1),h("p",null,"Überprüfung erfolgreich!",-1)]))):(i(),r("div",y,e[0]||(e[0]=[h("div",{class:"spinner"},null,-1),h("p",null,"Bitte warten Sie, während wir Ihre Verbindung überprüfen...",-1)])))],2)]),e[3]||(e[3]=h("div",{class:"security-footer"},[h("div",{class:"security-info"},[h("small",null,"Diese Überprüfung ist notwendig, um DDoS-Angriffe und böswillige Bots zu blockieren.")]),h("div",{class:"security-badges"},[h("span",{class:"badge"},[h("i",{class:"bi bi-shield-lock"}),l(" IronWall Protection ")]),h("span",{class:"badge"},[h("i",{class:"bi bi-robot"}),l(" Bot Defense ")])])],-1))])])):c("",!0)])),_:1})}],["__scopeId","data-v-beb0e777"]]);export{b as default};
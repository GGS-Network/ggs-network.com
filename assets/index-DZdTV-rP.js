const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Header-C-9F4smw.js","assets/vendor-Dl8iSx9S.js","assets/Header-Dz7S5B9n.css","assets/Footer-C6PZPOjm.js","assets/Footer-C-ZgohUs.css","assets/CookieConsent-DpIRWE0z.js","assets/ui-Ceob_0pG.js","assets/CookieConsent-D8D69uKg.css","assets/SecurityCheck-Dui148cA.js","assets/commonjsHelpers-oXBIWH0m.js","assets/SecurityCheck-Ct9arrLx.css","assets/Home-BXkDP7Hv.js","assets/Home-vjf_mwNj.css","assets/Services-9xRjHBot.js","assets/Services-CclRHnTv.css","assets/Status-BOT5ziEM.js","assets/Status-CHF8noJ4.css","assets/Privacy-Mm4E35qq.js","assets/Privacy-B8PuY9jw.css","assets/Vision-D2aww3AD.js","assets/Vision-CtafmsPz.css","assets/Features-DRkH0ntF.js","assets/Features-DZxcCf0N.css","assets/AboutUs-DkH0_EYN.js","assets/AboutUs-CqkfMoBq.css","assets/NotFound-CPsVcZqg.js","assets/NotFound-umxflO1r.css"])))=>i.map(i=>d[i]);
import{r as _,o as u,c as p,a as S,w as O,b as y,d as P,e as V,S as Te,f as N,g as Ee,h as Oe,i as b,t as be,u as Se,n as Z,j as I,m as z,k as F,F as M,l as j,p as ee,q as Pe,s as we,T as Ie,v as G,x as De,y as Re,z as te}from"./vendor-Dl8iSx9S.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const Be="modulepreload",Le=function(e){return"/"+e},x={},d=function(t,s,a){let r=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),c=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=Promise.allSettled(s.map(l=>{if(l=Le(l),l in x)return;x[l]=!0;const g=l.endsWith(".css"),w=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${w}`))return;const i=document.createElement("link");if(i.rel=g?"stylesheet":Be,g||(i.as="script"),i.crossOrigin="",i.href=l,c&&i.setAttribute("nonce",c),document.head.appendChild(i),g)return new Promise((ye,Ce)=>{i.addEventListener("load",ye),i.addEventListener("error",()=>Ce(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(n){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=n,window.dispatchEvent(c),!c.defaultPrevented)throw n}return r.then(n=>{for(const c of n||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})},Ae=(e,t)=>{const s=e.__vccOpts||e;for(const[a,r]of t)s[a]=r;return s},Ve=N(()=>d(()=>import("./Header-C-9F4smw.js"),__vite__mapDeps([0,1,2]))),Ne=N(()=>d(()=>import("./Footer-C6PZPOjm.js"),__vite__mapDeps([3,1,4]))),ke=N(()=>d(()=>import("./CookieConsent-DpIRWE0z.js"),__vite__mapDeps([5,6,1,7]))),$e=N(()=>d(()=>import("./SecurityCheck-Dui148cA.js"),__vite__mapDeps([8,9,1,10]))),Fe={name:"App",components:{Header:Ve,Footer:Ne,CookieConsent:ke,SecurityCheck:$e},methods:{handleCookiePreferences(e){console.log("Cookie preferences updated:",e)},openCookieSettings(){this.$refs.cookieConsent.openSettings()}},provide(){return{openCookieSettings:this.openCookieSettings}}},He={id:"app"};function Me(e,t,s,a,r,o){const n=_("SecurityCheck"),c=_("Header"),l=_("router-view"),g=_("Footer"),w=_("CookieConsent");return u(),p("div",He,[S(n),S(c),S(l,null,{default:O(({Component:i})=>[(u(),y(Te,null,{fallback:O(()=>t[0]||(t[0]=[P("div",{class:"loading"},"Laden...",-1)])),default:O(()=>[(u(),y(V(i)))]),_:2},1024))]),_:1}),S(g),S(w,{ref:"cookieConsent",onPreferencesUpdated:o.handleCookiePreferences},null,8,["onPreferencesUpdated"])])}const Ue=Ae(Fe,[["render",Me]]),ze=[{path:"/",name:"Home",component:()=>d(()=>import("./Home-BXkDP7Hv.js"),__vite__mapDeps([11,9,1,6,12]))},{path:"/services",name:"Services",component:()=>d(()=>import("./Services-9xRjHBot.js"),__vite__mapDeps([13,1,14]))},{path:"/status",name:"Status",component:()=>d(()=>import("./Status-BOT5ziEM.js"),__vite__mapDeps([15,1,16]))},{path:"/datenschutz",name:"Privacy",component:()=>d(()=>import("./Privacy-Mm4E35qq.js"),__vite__mapDeps([17,1,18]))},{path:"/vision",name:"Vision",component:()=>d(()=>import("./Vision-D2aww3AD.js"),__vite__mapDeps([19,1,20]))},{path:"/features",name:"Features",component:()=>d(()=>import("./Features-DRkH0ntF.js"),__vite__mapDeps([21,1,22]))},{path:"/about-us",name:"AboutUs",component:()=>d(()=>import("./AboutUs-DkH0_EYN.js"),__vite__mapDeps([23,1,24]))},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>d(()=>import("./NotFound-CPsVcZqg.js"),__vite__mapDeps([25,1,26]))}],je=Ee({history:Oe(),routes:ze,scrollBehavior(e,t,s){return s||(e.hash?{el:e.hash,behavior:"smooth"}:{top:0})}});var We=Object.defineProperty,q=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,X=(e,t,s)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,se=(e,t)=>{for(var s in t||(t={}))Ge.call(t,s)&&X(e,s,t[s]);if(q)for(var s of q(t))xe.call(t,s)&&X(e,s,t[s]);return e},k=e=>typeof e=="function",$=e=>typeof e=="string",oe=e=>$(e)&&e.trim().length>0,qe=e=>typeof e=="number",E=e=>typeof e>"u",D=e=>typeof e=="object"&&e!==null,Xe=e=>C(e,"tag")&&oe(e.tag),ne=e=>window.TouchEvent&&e instanceof TouchEvent,re=e=>C(e,"component")&&ae(e.component),Ke=e=>k(e)||D(e),ae=e=>!E(e)&&($(e)||Ke(e)||re(e)),K=e=>D(e)&&["height","width","right","left","top","bottom"].every(t=>qe(e[t])),C=(e,t)=>(D(e)||k(e))&&t in e,Je=(e=>()=>e++)(0);function H(e){return ne(e)?e.targetTouches[0].clientX:e.clientX}function J(e){return ne(e)?e.targetTouches[0].clientY:e.clientY}var Qe=e=>{E(e.remove)?e.parentNode&&e.parentNode.removeChild(e):e.remove()},R=e=>re(e)?R(e.component):Xe(e)?b({render(){return e}}):typeof e=="string"?e:be(Se(e)),Ye=e=>{if(typeof e=="string")return e;const t=C(e,"props")&&D(e.props)?e.props:{},s=C(e,"listeners")&&D(e.listeners)?e.listeners:{};return{component:R(e),props:t,listeners:s}},Ze=()=>typeof window<"u",W=class{constructor(){this.allHandlers={}}getHandlers(e){return this.allHandlers[e]||[]}on(e,t){const s=this.getHandlers(e);s.push(t),this.allHandlers[e]=s}off(e,t){const s=this.getHandlers(e);s.splice(s.indexOf(t)>>>0,1)}emit(e,t){this.getHandlers(e).forEach(a=>a(t))}},et=e=>["on","off","emit"].every(t=>C(e,t)&&k(e[t])),h;(function(e){e.SUCCESS="success",e.ERROR="error",e.WARNING="warning",e.INFO="info",e.DEFAULT="default"})(h||(h={}));var A;(function(e){e.TOP_LEFT="top-left",e.TOP_CENTER="top-center",e.TOP_RIGHT="top-right",e.BOTTOM_LEFT="bottom-left",e.BOTTOM_CENTER="bottom-center",e.BOTTOM_RIGHT="bottom-right"})(A||(A={}));var f;(function(e){e.ADD="add",e.DISMISS="dismiss",e.UPDATE="update",e.CLEAR="clear",e.UPDATE_DEFAULTS="update_defaults"})(f||(f={}));var v="Vue-Toastification",m={type:{type:String,default:h.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},ie={type:m.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},L={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:m.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},U={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},ce={transition:{type:[Object,String],default:`${v}__bounce`}},tt={position:{type:String,default:A.TOP_RIGHT},draggable:m.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:m.trueBoolean,pauseOnHover:m.trueBoolean,closeOnClick:m.trueBoolean,timeout:U.timeout,hideProgressBar:U.hideProgressBar,toastClassName:m.classNames,bodyClassName:m.classNames,icon:ie.customIcon,closeButton:L.component,closeButtonClassName:L.classNames,showCloseButtonOnHover:L.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new W}},st={id:{type:[String,Number],required:!0,default:0},type:m.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},ot={container:{type:[Object,Function],default:()=>document.body},newestOnTop:m.trueBoolean,maxToasts:{type:Number,default:20},transition:ce.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:e=>e},filterToasts:{type:Function,default:e=>e},containerClassName:m.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},T={CORE_TOAST:tt,TOAST:st,CONTAINER:ot,PROGRESS_BAR:U,ICON:ie,TRANSITION:ce,CLOSE_BUTTON:L},le=b({name:"VtProgressBar",props:T.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${v}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function nt(e,t){return u(),p("div",{style:Z(e.style),class:I(e.cpClass)},null,6)}le.render=nt;var rt=le,ue=b({name:"VtCloseButton",props:T.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?R(this.component):"button"},classes(){const e=[`${v}__close-button`];return this.showOnHover&&e.push("show-on-hover"),e.concat(this.classNames)}}}),at=j(" × ");function it(e,t){return u(),y(V(e.buttonComponent),z({"aria-label":e.ariaLabel,class:e.classes},e.$attrs),{default:O(()=>[at]),_:1},16,["aria-label","class"])}ue.render=it;var ct=ue,de={},lt={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},ut=P("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),dt=[ut];function ht(e,t){return u(),p("svg",lt,dt)}de.render=ht;var ft=de,he={},pt={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},mt=P("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),vt=[mt];function gt(e,t){return u(),p("svg",pt,vt)}he.render=gt;var Q=he,fe={},_t={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},yt=P("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),Ct=[yt];function Tt(e,t){return u(),p("svg",_t,Ct)}fe.render=Tt;var Et=fe,pe={},Ot={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},bt=P("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),St=[bt];function Pt(e,t){return u(),p("svg",Ot,St)}pe.render=Pt;var wt=pe,me=b({name:"VtIcon",props:T.ICON,computed:{customIconChildren(){return C(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return $(this.customIcon)?this.trimValue(this.customIcon):C(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return C(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:ae(this.customIcon)?R(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[h.DEFAULT]:Q,[h.INFO]:Q,[h.SUCCESS]:ft,[h.ERROR]:wt,[h.WARNING]:Et}[this.type]},iconClasses(){const e=[`${v}__icon`];return this.hasCustomIcon?e.concat(this.customIconClass):e}},methods:{trimValue(e,t=""){return oe(e)?e.trim():t}}});function It(e,t){return u(),y(V(e.component),{class:I(e.iconClasses)},{default:O(()=>[j(ee(e.customIconChildren),1)]),_:1},8,["class"])}me.render=It;var Dt=me,ve=b({name:"VtToast",components:{ProgressBar:rt,CloseButton:ct,Icon:Dt},inheritAttrs:!1,props:Object.assign({},T.CORE_TOAST,T.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const e=[`${v}__toast`,`${v}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&e.push("disable-transition"),this.rtl&&e.push(`${v}__toast--rtl`),e},bodyClasses(){return[`${v}__toast-${$(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return K(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:C,getVueComponentFromObj:R,closeToast(){this.eventBus.emit(f.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const e=this.$el;e.addEventListener("touchstart",this.onDragStart,{passive:!0}),e.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const e=this.$el;e.removeEventListener("touchstart",this.onDragStart),e.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(e){this.beingDragged=!0,this.dragPos={x:H(e),y:J(e)},this.dragStart=H(e),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(e){this.beingDragged&&(e.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:H(e),y:J(e)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,K(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),Rt=["role"];function Bt(e,t){const s=_("Icon"),a=_("CloseButton"),r=_("ProgressBar");return u(),p("div",{class:I(e.classes),style:Z(e.draggableStyle),onClick:t[0]||(t[0]=(...o)=>e.clickHandler&&e.clickHandler(...o)),onMouseenter:t[1]||(t[1]=(...o)=>e.hoverPause&&e.hoverPause(...o)),onMouseleave:t[2]||(t[2]=(...o)=>e.hoverPlay&&e.hoverPlay(...o))},[e.icon?(u(),y(s,{key:0,"custom-icon":e.icon,type:e.type},null,8,["custom-icon","type"])):F("v-if",!0),P("div",{role:e.accessibility.toastRole||"alert",class:I(e.bodyClasses)},[typeof e.content=="string"?(u(),p(M,{key:0},[j(ee(e.content),1)],2112)):(u(),y(V(e.getVueComponentFromObj(e.content)),z({key:1,"toast-id":e.id},e.hasProp(e.content,"props")?e.content.props:{},Pe(e.hasProp(e.content,"listeners")?e.content.listeners:{}),{onCloseToast:e.closeToast}),null,16,["toast-id","onCloseToast"]))],10,Rt),e.closeButton?(u(),y(a,{key:1,component:e.closeButton,"class-names":e.closeButtonClassName,"show-on-hover":e.showCloseButtonOnHover,"aria-label":e.accessibility.closeButtonLabel,onClick:we(e.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):F("v-if",!0),e.timeout?(u(),y(r,{key:2,"is-running":e.isRunning,"hide-progress-bar":e.hideProgressBar,timeout:e.timeout,onCloseToast:e.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):F("v-if",!0)],38)}ve.render=Bt;var Lt=ve,ge=b({name:"VtTransition",props:T.TRANSITION,emits:["leave"],methods:{hasProp:C,leave(e){e instanceof HTMLElement&&(e.style.left=e.offsetLeft+"px",e.style.top=e.offsetTop+"px",e.style.width=getComputedStyle(e).width,e.style.position="absolute")}}});function At(e,t){return u(),y(Ie,{tag:"div","enter-active-class":e.transition.enter?e.transition.enter:`${e.transition}-enter-active`,"move-class":e.transition.move?e.transition.move:`${e.transition}-move`,"leave-active-class":e.transition.leave?e.transition.leave:`${e.transition}-leave-active`,onLeave:e.leave},{default:O(()=>[De(e.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}ge.render=At;var Vt=ge,_e=b({name:"VueToastification",devtools:{hide:!0},components:{Toast:Lt,VtTransition:Vt},props:Object.assign({},T.CORE_TOAST,T.CONTAINER,T.TRANSITION),data(){return{count:0,positions:Object.values(A),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const e=this.eventBus;e.on(f.ADD,this.addToast),e.on(f.CLEAR,this.clearToasts),e.on(f.DISMISS,this.dismissToast),e.on(f.UPDATE,this.updateToast),e.on(f.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(e){k(e)&&(e=await e()),Qe(this.$el),e.appendChild(this.$el)},setToast(e){E(e.id)||(this.toasts[e.id]=e)},addToast(e){e.content=Ye(e.content);const t=Object.assign({},this.defaults,e.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[e.type],e),s=this.defaults.filterBeforeCreate(t,this.toastArray);s&&this.setToast(s)},dismissToast(e){const t=this.toasts[e];!E(t)&&!E(t.onClose)&&t.onClose(),delete this.toasts[e]},clearToasts(){Object.keys(this.toasts).forEach(e=>{this.dismissToast(e)})},getPositionToasts(e){const t=this.filteredToasts.filter(s=>s.position===e).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?t.reverse():t},updateDefaults(e){E(e.container)||this.setup(e.container),this.defaults=Object.assign({},this.defaults,e)},updateToast({id:e,options:t,create:s}){this.toasts[e]?(t.timeout&&t.timeout===this.toasts[e].timeout&&t.timeout++,this.setToast(Object.assign({},this.toasts[e],t))):s&&this.addToast(Object.assign({},{id:e},t))},getClasses(e){return[`${v}__container`,e].concat(this.defaults.containerClassName)}}});function Nt(e,t){const s=_("Toast"),a=_("VtTransition");return u(),p("div",null,[(u(!0),p(M,null,G(e.positions,r=>(u(),p("div",{key:r},[S(a,{transition:e.defaults.transition,class:I(e.getClasses(r))},{default:O(()=>[(u(!0),p(M,null,G(e.getPositionToasts(r),o=>(u(),y(s,z({key:o.id},o),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}_e.render=Nt;var kt=_e,Y=(e={},t=!0)=>{const s=e.eventBus=e.eventBus||new W;t&&Re(()=>{const o=te(kt,se({},e)),n=o.mount(document.createElement("div")),c=e.onMounted;if(E(c)||c(n,o),e.shareAppContext){const l=e.shareAppContext;l===!0?console.warn(`[${v}] App to share context with was not provided.`):(o._context.components=l._context.components,o._context.directives=l._context.directives,o._context.mixins=l._context.mixins,o._context.provides=l._context.provides,o.config.globalProperties=l.config.globalProperties)}});const a=(o,n)=>{const c=Object.assign({},{id:Je(),type:h.DEFAULT},n,{content:o});return s.emit(f.ADD,c),c.id};a.clear=()=>s.emit(f.CLEAR,void 0),a.updateDefaults=o=>{s.emit(f.UPDATE_DEFAULTS,o)},a.dismiss=o=>{s.emit(f.DISMISS,o)};function r(o,{content:n,options:c},l=!1){const g=Object.assign({},c,{content:n});s.emit(f.UPDATE,{id:o,options:g,create:l})}return a.update=r,a.success=(o,n)=>a(o,Object.assign({},n,{type:h.SUCCESS})),a.info=(o,n)=>a(o,Object.assign({},n,{type:h.INFO})),a.error=(o,n)=>a(o,Object.assign({},n,{type:h.ERROR})),a.warning=(o,n)=>a(o,Object.assign({},n,{type:h.WARNING})),a},$t=()=>{const e=()=>console.warn(`[${v}] This plugin does not support SSR!`);return new Proxy(e,{get(){return e}})};function Ft(e){return Ze()?et(e)?Y({eventBus:e},!1):Y(e,!0):$t()}var Ht=Symbol("VueToastification"),Mt=new W,Ut=(e,t)=>{(t==null?void 0:t.shareAppContext)===!0&&(t.shareAppContext=e);const s=Ft(se({eventBus:Mt},t));e.provide(Ht,s)},zt=Ut;function jt(e={}){const{immediate:t=!1,onNeedRefresh:s,onOfflineReady:a,onRegistered:r,onRegisteredSW:o,onRegisterError:n}=e;let c,l;const g=async(i=!0)=>{await l};async function w(){if("serviceWorker"in navigator){if(c=await d(async()=>{const{Workbox:i}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:i}},[]).then(({Workbox:i})=>new i("/sw.js",{scope:"/",type:"classic"})).catch(i=>{n==null||n(i)}),!c)return;c.addEventListener("activated",i=>{(i.isUpdate||i.isExternal)&&window.location.reload()}),c.addEventListener("installed",i=>{i.isUpdate||a==null||a()}),c.register({immediate:t}).then(i=>{o?o("/sw.js",i):r==null||r(i)}).catch(i=>{n==null||n(i)})}}return l=w(),g}const B=te(Ue);jt({immediate:!0,onNeedRefresh(){},onOfflineReady(){}});const Wt={position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1};B.config.performance=!0;B.config.errorHandler=(e,t,s)=>{console.error("Global error:",e),console.error("Component:",t),console.error("Info:",s)};B.use(je);B.use(zt,Wt);B.mount("#app");export{Ae as _};

import{_ as d}from"./index-DCvlIxEi.js";import{r as v,o as b,c as g,d as s,a,w as i,j as t,l as n,k as h}from"./vendor-BGsd3K-v.js";const f={name:"Header",data(){return{isMobileNavOpen:!1,isScrolled:!1,lastScrollY:0,scrollDirection:"down"}},computed:{isDashboardPage(){return this.$route.path.startsWith("/dashboard")},isHomePage(){return this.$route.path==="/"},isServicesPage(){return this.$route.path==="/services"},isFeaturesPage(){return this.$route.path==="/features"},isVisionPage(){return this.$route.path==="/vision"},isStatusPage(){return this.$route.path==="/status"},isAboutUsPage(){return this.$route.path==="/about-us"}},methods:{toggleMobileNav(){this.isMobileNavOpen=!this.isMobileNavOpen,document.body.style.overflow=this.isMobileNavOpen?"hidden":""},closeMobileNav(){this.isMobileNavOpen=!1,document.body.style.overflow=""},handleScroll(){const r=window.scrollY;this.isScrolled=r>50}},watch:{$route(){this.closeMobileNav(),this.handleScroll()}},mounted(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll),document.body.style.overflow=""}},m={class:"container d-flex align-items-center justify-content-between"},k={class:"logo"};function N(r,e,C,w,c,l){const o=v("router-link");return l.isDashboardPage?h("",!0):(b(),g("header",{key:0,id:"header",class:t(["fixed-top",{"header-scrolled":c.isScrolled}])},[s("div",m,[s("div",k,[a(o,{to:"/",class:"d-flex align-items-center"},{default:i(()=>e[1]||(e[1]=[s("svg",{class:"logo-svg",viewBox:"0 0 200 60",xmlns:"http://www.w3.org/2000/svg"},[s("g",{class:"logo-icon"},[s("path",{d:"M40 35c0-6.627-5.373-12-12-12-1.4 0-2.743.24-4 .683C22.805 18.966 18.177 15.5 12.75 15.5 5.707 15.5 0 21.207 0 28.25c0 .55.035 1.092.103 1.623C.035 30.408 0 30.95 0 31.5 0 37.299 4.701 42 10.5 42h27c4.142 0 7.5-3.358 7.5-7.5z",fill:"currentColor"})])],-1),s("span",{class:"logo-text"},"VelocityDesk",-1)])),_:1})]),s("nav",{id:"navbar",class:t(["navbar",{"navbar-mobile":c.isMobileNavOpen}])},[s("ul",null,[s("li",null,[a(o,{to:"/",class:t(["nav-link",{active:l.isHomePage}]),onClick:l.closeMobileNav},{default:i(()=>e[2]||(e[2]=[n("Home")])),_:1},8,["class","onClick"])]),s("li",null,[a(o,{to:"/services",class:t(["nav-link",{active:l.isServicesPage}]),onClick:l.closeMobileNav},{default:i(()=>e[3]||(e[3]=[n("Leistungen")])),_:1},8,["class","onClick"])]),s("li",null,[a(o,{to:"/features",class:t(["nav-link",{active:l.isFeaturesPage}]),onClick:l.closeMobileNav},{default:i(()=>e[4]||(e[4]=[n("Funktionen")])),_:1},8,["class","onClick"])]),s("li",null,[a(o,{to:"/vision",class:t(["nav-link",{active:l.isVisionPage}]),onClick:l.closeMobileNav},{default:i(()=>e[5]||(e[5]=[n("Vision")])),_:1},8,["class","onClick"])]),s("li",null,[a(o,{to:"/status",class:t(["nav-link",{active:l.isStatusPage}]),onClick:l.closeMobileNav},{default:i(()=>e[6]||(e[6]=[n("Status")])),_:1},8,["class","onClick"])]),s("li",null,[a(o,{to:"/about-us",class:t(["nav-link",{active:l.isAboutUsPage}]),onClick:l.closeMobileNav},{default:i(()=>e[7]||(e[7]=[n("Über uns")])),_:1},8,["class","onClick"])])])],2),s("i",{class:"bi bi-list mobile-nav-toggle",onClick:e[0]||(e[0]=(...u)=>l.toggleMobileNav&&l.toggleMobileNav(...u))})])],2))}const S=d(f,[["render",N],["__scopeId","data-v-9b182de4"]]);export{S as default};

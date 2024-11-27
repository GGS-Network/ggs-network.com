import{_ as h}from"./index-DCvlIxEi.js";import{c as n,d as e,F as m,v as g,k as u,j as d,l as c,p as i,o}from"./vendor-BGsd3K-v.js";const v={async getSystemStatus(){try{const t={services:[],announcements:[{id:1,type:"degraded",message:"Service aktuell nicht im Betrieb.",startDate:"2024-04-15T02:00:00",endDate:"2025-12-01T018:00:00"}],overall:{status:"operational",lastUpdated:new Date().toISOString()}};return await new Promise(s=>setTimeout(s,1e3)),t}catch(t){throw console.error("Error fetching system status:",t),t}}},S={name:"Status",data(){return{services:[],overallStatus:"operational",lastUpdated:null,loading:!1,error:null,announcements:[]}},computed:{formattedLastUpdate(){return this.lastUpdated?new Date(this.lastUpdated).toLocaleString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):""},overallStatusText(){return{operational:"Alle Systeme funktionieren",degraded:"Einige Systeme eingeschränkt",outage:"Systemstörung"}[this.overallStatus]||this.overallStatus},overallStatusClass(){return`status-${this.overallStatus}`}},methods:{async fetchStatus(){this.loading=!0,this.error=null;try{const t=await v.getSystemStatus();this.services=t.services,this.announcements=t.announcements,this.overallStatus=t.overall.status,this.lastUpdated=t.overall.lastUpdated}catch(t){this.error="Fehler beim Laden der Statusdaten",console.error(t)}finally{this.loading=!1}},getStatusClass(t){return{"status-operational":t==="operational","status-degraded":t==="degraded","status-outage":t==="outage"}},getStatusText(t){return{operational:"Betriebsbereit",degraded:"Eingeschränkt",outage:"Störung"}[t]||t},getAnnouncementIcon(t){return{maintenance:"bi-wrench",alert:"bi-exclamation-triangle",info:"bi-info-circle"}[t]||"bi-info-circle"},formatAnnouncementTime(t){const s={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"};return t.startDate&&t.endDate?`Von ${new Date(t.startDate).toLocaleString("de-DE",s)} bis ${new Date(t.endDate).toLocaleString("de-DE",s)}`:t.startDate?`Ab ${new Date(t.startDate).toLocaleString("de-DE",s)}`:t.endDate?`Bis ${new Date(t.endDate).toLocaleString("de-DE",s)}`:""}},mounted(){this.fetchStatus(),this.intervalId=setInterval(this.fetchStatus,6e4)},beforeUnmount(){this.intervalId&&clearInterval(this.intervalId)}},_={class:"status-page"},p={class:"status-container"},f={key:0,class:"announcements"},y={class:"announcement-icon"},D={class:"announcement-content"},b={class:"announcement-message"},k={key:0,class:"announcement-time"},x={class:"status-header"},w={class:"last-updated"},T={class:"services-grid"},U={class:"service-status"},E={class:"service-metrics"},I={class:"metric"},L={class:"value"},A={class:"metric"},C={class:"value"},B={key:1,class:"error-message"},F={class:"refresh-button"},V=["disabled"];function z(t,s,N,j,l,r){return o(),n("div",_,[e("div",p,[l.announcements.length>0?(o(),n("div",f,[(o(!0),n(m,null,g(l.announcements,a=>(o(),n("div",{key:a.id,class:d(["announcement",a.type])},[e("div",y,[e("i",{class:d(["bi",r.getAnnouncementIcon(a.type)])},null,2)]),e("div",D,[e("div",b,i(a.message),1),a.startDate||a.endDate?(o(),n("div",k,i(r.formatAnnouncementTime(a)),1)):u("",!0)])],2))),128))])):u("",!0),e("div",x,[s[2]||(s[2]=e("h1",null,"System Status",-1)),e("div",{class:d(["overall-status",r.overallStatusClass])},[s[1]||(s[1]=e("span",{class:"status-indicator"},null,-1)),c(" "+i(r.overallStatusText),1)],2),e("div",w," Zuletzt aktualisiert: "+i(r.formattedLastUpdate),1)]),e("div",T,[(o(!0),n(m,null,g(l.services,a=>(o(),n("div",{key:a.id,class:d(["service-card",r.getStatusClass(a.status)])},[e("h3",null,i(a.service),1),e("div",U,[s[3]||(s[3]=e("span",{class:"status-indicator"},null,-1)),c(" "+i(r.getStatusText(a.status)),1)]),e("div",E,[e("div",I,[s[4]||(s[4]=e("span",{class:"label"},"Uptime",-1)),e("span",L,i(a.uptime.toFixed(2))+"%",1)]),e("div",A,[s[5]||(s[5]=e("span",{class:"label"},"Reaktionszeit",-1)),e("span",C,i(a.responseTime)+"ms",1)])])],2))),128))]),l.error?(o(),n("div",B,i(l.error),1)):u("",!0),e("div",F,[e("button",{onClick:s[0]||(s[0]=(...a)=>r.fetchStatus&&r.fetchStatus(...a)),disabled:l.loading},s[6]||(s[6]=[e("i",{class:"bi bi-arrow-clockwise"},null,-1),c(" Aktualisieren ")]),8,V)])])])}const R=h(S,[["render",z],["__scopeId","data-v-d7516b2a"]]);export{R as default};

import{M as k}from"./ui-Ceob_0pG.js";import{o as l,c,d as e,A as d,l as t,k as v,B as r,D as f}from"./vendor-BGsd3K-v.js";import{_ as b}from"./index-DCvlIxEi.js";const u={name:"CookieConsent",data(){return{cookiesAccepted:!1,showSettings:!1,modal:null,cookiePreferences:{necessary:!0,functional:!1,analytics:!1}}},mounted(){this.modal=new k(document.getElementById("cookieModal"));const n=localStorage.getItem("cookiePreferences");n&&(this.cookiesAccepted=!0,this.cookiePreferences=JSON.parse(n))},methods:{acceptAllCookies(){this.cookiePreferences={necessary:!0,functional:!0,analytics:!0},this.saveCookiePreferences()},saveCookiePreferences(){localStorage.setItem("cookiePreferences",JSON.stringify(this.cookiePreferences)),this.cookiesAccepted=!0,this.$emit("preferences-updated",this.cookiePreferences),this.modal.hide()},openSettings(){this.modal.show()}}},m={key:0,class:"cookie-banner"},p={class:"cookie-content"},h={class:"cookie-actions"},C={class:"modal fade",id:"cookieModal",tabindex:"-1","aria-hidden":"true"},g={class:"modal-dialog modal-dialog-centered"},y={class:"modal-content"},P={class:"modal-body"},S={class:"cookie-options"},_={class:"cookie-option"},w={class:"option-header"},x={class:"form-check form-switch"},A={class:"cookie-option"},z={class:"option-header"},E={class:"form-check form-switch"},N={class:"modal-footer"};function B(n,s,I,V,a,o){return l(),c("div",null,[a.cookiesAccepted?v("",!0):(l(),c("div",m,[e("div",p,[s[7]||(s[7]=d('<div class="cookie-header" data-v-35abf7da><div class="cookie-icon" data-v-35abf7da><i class="bi bi-shield-lock-fill" data-v-35abf7da></i></div><div class="cookie-title" data-v-35abf7da><h5 data-v-35abf7da>Datenschutz &amp; Cookies</h5><p data-v-35abf7da>Wir schätzen Ihre Privatsphäre</p></div></div><div class="cookie-body" data-v-35abf7da><p data-v-35abf7da> Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unsere Services zu optimieren. Entscheiden Sie selbst, welche Cookies Sie zulassen möchten. </p></div>',2)),e("div",h,[e("button",{class:"btn btn-settings",onClick:s[0]||(s[0]=(...i)=>o.openSettings&&o.openSettings(...i))},s[5]||(s[5]=[e("i",{class:"bi bi-sliders me-2"},null,-1),t(" Einstellungen ")])),e("button",{class:"btn btn-accept",onClick:s[1]||(s[1]=(...i)=>o.acceptAllCookies&&o.acceptAllCookies(...i))},s[6]||(s[6]=[e("i",{class:"bi bi-check2-all me-2"},null,-1),t(" Alle akzeptieren ")]))])])])),e("div",C,[e("div",g,[e("div",y,[s[13]||(s[13]=d('<div class="modal-header" data-v-35abf7da><div class="modal-header-content" data-v-35abf7da><i class="bi bi-shield-lock-fill me-2" data-v-35abf7da></i><h5 class="modal-title" data-v-35abf7da>Cookie-Einstellungen</h5></div><button type="button" class="btn-close" data-bs-dismiss="modal" data-v-35abf7da></button></div>',1)),e("div",P,[e("div",S,[s[10]||(s[10]=d('<div class="cookie-option" data-v-35abf7da><div class="option-header" data-v-35abf7da><div class="option-info" data-v-35abf7da><h6 data-v-35abf7da><i class="bi bi-shield-check me-2" data-v-35abf7da></i>Notwendige Cookies</h6><p data-v-35abf7da>Diese Cookies sind für die Grundfunktionen der Website erforderlich.</p></div><div class="form-check form-switch" data-v-35abf7da><input class="form-check-input" type="checkbox" checked disabled data-v-35abf7da></div></div></div>',1)),e("div",_,[e("div",w,[s[8]||(s[8]=e("div",{class:"option-info"},[e("h6",null,[e("i",{class:"bi bi-gear me-2"}),t("Funktionale Cookies")]),e("p",null,"Ermöglichen erweiterte Funktionen und Personalisierung.")],-1)),e("div",x,[r(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":s[2]||(s[2]=i=>a.cookiePreferences.functional=i)},null,512),[[f,a.cookiePreferences.functional]])])])]),e("div",A,[e("div",z,[s[9]||(s[9]=e("div",{class:"option-info"},[e("h6",null,[e("i",{class:"bi bi-graph-up me-2"}),t("Analyse-Cookies")]),e("p",null,"Helfen uns zu verstehen, wie Besucher mit der Website interagieren.")],-1)),e("div",E,[r(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":s[3]||(s[3]=i=>a.cookiePreferences.analytics=i)},null,512),[[f,a.cookiePreferences.analytics]])])])])])]),e("div",N,[s[12]||(s[12]=e("button",{class:"btn btn-outline-primary","data-bs-dismiss":"modal"},[e("i",{class:"bi bi-x-lg me-2"}),t("Schließen ")],-1)),e("button",{class:"btn btn-primary",onClick:s[4]||(s[4]=(...i)=>o.saveCookiePreferences&&o.saveCookiePreferences(...i))},s[11]||(s[11]=[e("i",{class:"bi bi-check-lg me-2"},null,-1),t("Speichern ")]))])])])])])}const F=b(u,[["render",B],["__scopeId","data-v-35abf7da"]]);export{F as default};

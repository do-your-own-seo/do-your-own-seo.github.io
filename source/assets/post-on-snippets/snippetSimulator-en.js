---
layout: null
---
var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function l(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function o(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.data!==e&&(t.data=e)}function g(t,e){(null!=e||t.value)&&(t.value=e)}let m;function v(t){m=t}const $=[],x=[],b=[],y=[],_=Promise.resolve();let w=!1;function E(t){b.push(t)}let C=!1;const k=new Set;function j(){if(!C){C=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];v(e),A(e.$$)}for($.length=0;x.length;)x.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];k.has(e)||(k.add(e),e())}b.length=0}while($.length);for(;y.length;)y.pop()();w=!1,C=!1,k.clear()}}function A(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const L=new Set;function M(t,e){-1===t.$$.dirty[0]&&($.push(t),w||(w=!0,_.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(r,a,c,i,u,f,d=[-1]){const h=m;v(r);const p=a.props||{},g=r.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:d};let $=!1;if(g.ctx=c?c(r,p,(t,e,...n)=>{const s=n.length?n[0]:e;return g.ctx&&u(g.ctx[t],g.ctx[t]=s)&&(g.bound[t]&&g.bound[t](s),$&&M(r,t)),e}):[],g.update(),$=!0,s(g.before_update),g.fragment=!!i&&i(g.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);g.fragment&&g.fragment.l(t),t.forEach(o)}else g.fragment&&g.fragment.c();a.intro&&((x=r.$$.fragment)&&x.i&&(L.delete(x),x.i(b))),function(t,n,r){const{fragment:a,on_mount:c,on_destroy:o,after_update:i}=t.$$;a&&a.m(n,r),E(()=>{const n=c.map(e).filter(l);o?o.push(...n):s(n),t.$$.on_mount=[]}),i.forEach(E)}(r,a.target,a.anchor),j()}var x,b;v(h)}function T(t){let e,n,s=(t[2]?t[2]:t[9])+"",l=!t[13]&&function(t){let e,n,s;return{c(){e=i("br"),n=i("i"),n.textContent="________",s=i("br"),h(n,"class","separator eieumn")},m(t,l){c(t,e,l),c(t,n,l),c(t,s,l)},d(t){t&&o(e),t&&o(n),t&&o(s)}}}();return{c(){l&&l.c(),e=i("span"),n=u(s),h(e,"class","st eieumn")},m(t,s){l&&l.m(t,s),c(t,e,s),a(e,n)},p(t,e){4&e&&s!==(s=(t[2]?t[2]:t[9])+"")&&p(n,s)},d(t){l&&l.d(t),t&&o(e)}}}function B(e){let n,l,r,m,v,$,x,b,y,_,w,E,C,k,j,A,L,M,S,B,D,I,N,O,Y,H,P,q,z,F,G,Z,J,K,Q,R,U,V,W,X,tt,et,nt,st,lt,rt,at,ct,ot=e[0].length?"= "+e[0].length:"= 0",it=e[1].length?"= "+e[1].length:"= 0",ut=(e[0]?e[0]:e[7])+"",ft=(e[1]?e[6].substring(e[5].length,135):e[8])+"",dt=e[15](),ht=(e[6].length>160||!e[1])&&T(e),pt=dt&&function(t){let e;return{c(){e=i("p"),e.textContent="🍊   🍾   🍕   🍏   🌶️   🍫   🎡   🧐   🎠   🛩️   📗   ⏰   ⌛   📙   📈   📘  🇨🇦   🇺🇦   ⚽    🌎",h(e,"class","unicode eieumn")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}();return{c(){n=i("h3"),n.innerHTML='<span class="green">Google Snippet</span>  Preview',l=f(),r=i("form"),m=i("div"),v=i("textarea"),$=f(),x=i("label"),b=u(ot),y=f(),_=i("div"),w=i("textarea"),E=f(),C=i("label"),k=u(it),j=f(),A=i("div"),L=i("label"),M=i("input"),S=u(e[12]),B=f(),D=i("div"),I=i("cite"),I.textContent="example.com › Bread › Crumbs",N=f(),O=i("div"),Y=i("div"),H=i("span"),P=i("h3"),q=u(ut),z=f(),F=i("div"),G=i("span"),Z=u(e[5]),J=i("span"),K=u(ft),Q=i("span"),R=u(e[3]),U=f(),ht&&ht.c(),V=f(),W=i("div"),X=i("p"),X.textContent="➊ ➋ ➌ ➍ ➎ ➥ ➦ ✔ ✖ ⚑ ✆ ☎ ✈ ✉ ✎ § ⨌ ⚖ (͡๏̯͡๏) 〠 ♛ ♜ ♝ ♞ ✮ ✰ ✿",tt=f(),et=i("p"),nt=u(e[11]),st=f(),lt=i("a"),lt.textContent="emojipedia",rt=u("."),at=f(),pt&&pt.c(),h(n,"class","txt-center eieumn"),h(n,"id","simulator"),h(v,"id","title"),h(v,"placeholder"," Your title here"),h(v,"maxlength","90"),h(v,"cols","24"),h(v,"rows","3"),h(v,"class","eieumn"),h(x,"for","title"),h(x,"class","eieumn"),h(m,"class","eieumn"),h(w,"id","descr"),h(w,"placeholder"," Your description here"),h(w,"maxlength","280"),h(w,"cols","45"),h(w,"rows","3"),h(w,"class","eieumn"),h(C,"for","descr"),h(C,"class","eieumn"),h(M,"type","checkbox"),h(L,"class","eieumn"),h(A,"class","eieumn"),h(_,"class","eieumn"),h(r,"class","eieumn"),h(I,"class","eieumn"),h(P,"class","eieumn"),h(H,"class","a eieumn"),h(Y,"class","r eieumn"),h(G,"class","f eieumn"),h(Q,"class","long eieumn"),h(Q,"title",e[10]),h(J,"class","st eieumn"),h(F,"class","s eieumn"),h(O,"class","rc eieumn"),h(D,"class","g eieumn"),h(X,"class","unicode eieumn"),h(lt,"href","https://emojipedia.org/"),h(W,"class","txt-center eieumn")},m(t,o,i){c(t,n,o),c(t,l,o),c(t,r,o),a(r,m),a(m,v),g(v,e[0]),a(m,$),a(m,x),a(x,b),a(r,y),a(r,_),a(_,w),g(w,e[1]),a(_,E),a(_,C),a(C,k),a(_,j),a(_,A),a(A,L),a(L,M),M.checked=e[4],a(L,S),c(t,B,o),c(t,D,o),a(D,I),a(D,N),a(D,O),a(O,Y),a(Y,H),a(H,P),a(P,q),a(O,z),a(O,F),a(F,G),a(G,Z),a(F,J),a(J,K),a(J,Q),a(Q,R),a(F,U),ht&&ht.m(F,null),c(t,V,o),c(t,W,o),a(W,X),a(W,tt),a(W,et),a(et,nt),a(et,st),a(et,lt),a(et,rt),a(W,at),pt&&pt.m(W,null),i&&s(ct),ct=[d(v,"input",e[21]),d(v,"input",e[22]),d(w,"input",e[23]),d(w,"input",e[24]),d(M,"change",e[25])]},p(t,[e]){1&e&&g(v,t[0]),1&e&&ot!==(ot=t[0].length?"= "+t[0].length:"= 0")&&p(b,ot),2&e&&g(w,t[1]),2&e&&it!==(it=t[1].length?"= "+t[1].length:"= 0")&&p(k,it),16&e&&(M.checked=t[4]),1&e&&ut!==(ut=(t[0]?t[0]:t[7])+"")&&p(q,ut),32&e&&p(Z,t[5]),98&e&&ft!==(ft=(t[1]?t[6].substring(t[5].length,135):t[8])+"")&&p(K,ft),8&e&&p(R,t[3]),t[6].length>160||!t[1]?ht?ht.p(t,e):(ht=T(t),ht.c(),ht.m(F,null)):ht&&(ht.d(1),ht=null)},i:t,o:t,d(t){t&&o(n),t&&o(l),t&&o(r),t&&o(B),t&&o(D),ht&&ht.d(),t&&o(V),t&&o(W),pt&&pt.d(),s(ct)}}}function D(t,e,n){let[s,l,r,a]=["","","",""],c=/^[A-Z|a-z|0-9|А-Я|Є|І|а-я|є|і|ё]$/,o=new Date,i=!0,u=window.matchMedia("(max-width: 639px)").matches,f=document.createElement("textarea"),d=document.createElement("canvas").getContext("2d");const h=t=>(f.innerHTML=t,f.value),p=(t,e,n,s)=>{let l=t.substring(e,n),r=t.length>n;return s&&c.test(t[e-1])&&c.test(t[e])&&(l=t.substring(0,e).split(" ").pop()+l),t[n]&&c.test(t[n-1])&&c.test(t[n])&&(l=l.substring(0,l.lastIndexOf(" "))),r?l+(u?" ":"..."):l};let g,m;return t.$$.update=()=>{16&t.$$.dirty&&n(5,g=i?o.getDate()+" "+o.toLocaleString("default",{month:"long"})+" "+o.getFullYear()+" - ":""),34&t.$$.dirty&&n(6,m=g+l),64&t.$$.dirty&&n(3,a=m.length>134?p(m,135,160):""),64&t.$$.dirty&&n(2,r=m.length>159?p(m,160,280,!0):"")},[s,l,r,a,i,g,m,"{{site.data.t.snippet.title.en}}","{{site.data.t.snippet.descr.en}}...","{{site.data.t.snippet.extra.en}}","{{site.data.t.snippet.tooltip.en}}","{{site.data.t.snippet.emoji.en}}","{{site.data.t.snippet.date.en}}",u,h,()=>(d.fillText("🍕",-2,4),d.getImageData(0,0,1,1).data[3]>0),f,c,o,d,p,function(){s=this.value,n(0,s)},t=>{n(0,s=h(s))},function(){l=this.value,n(1,l)},t=>{n(1,l=h(l))},function(){i=this.checked,n(4,i)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),S(this,t,D,B,r,{})}}({target:document.getElementById("component")})}();
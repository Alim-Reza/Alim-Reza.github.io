(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function m(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(a){if(a.ep)return;a.ep=!0;const t=m(a);fetch(a.href,t)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ae(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var ee={exports:{}};(function(p,A){(function(m,s){p.exports=s()})(te,function(){return function(m){function s(t){if(a[t])return a[t].exports;var c=a[t]={exports:{},id:t,loaded:!1};return m[t].call(c.exports,c,c.exports,s),c.loaded=!0,c.exports}var a={};return s.m=m,s.c=a,s.p="dist/",s(0)}([function(m,s,a){function t(r){return r&&r.__esModule?r:{default:r}}var c=Object.assign||function(r){for(var S=1;S<arguments.length;S++){var L=arguments[S];for(var B in L)Object.prototype.hasOwnProperty.call(L,B)&&(r[B]=L[B])}return r},b=a(1),w=(t(b),a(6)),n=t(w),g=a(7),i=t(g),l=a(8),d=t(l),v=a(9),j=t(v),M=a(10),K=t(M),V=a(11),W=t(V),Y=a(14),G=t(Y),z=[],J=!1,h={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},$=function(){var r=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(r&&(J=!0),J)return z=(0,W.default)(z,h),(0,K.default)(z,h.once),z},N=function(){z=(0,G.default)(),$()},o=function(){z.forEach(function(r,S){r.node.removeAttribute("data-aos"),r.node.removeAttribute("data-aos-easing"),r.node.removeAttribute("data-aos-duration"),r.node.removeAttribute("data-aos-delay")})},e=function(r){return r===!0||r==="mobile"&&j.default.mobile()||r==="phone"&&j.default.phone()||r==="tablet"&&j.default.tablet()||typeof r=="function"&&r()===!0},u=function(r){h=c(h,r),z=(0,G.default)();var S=document.all&&!window.atob;return e(h.disable)||S?o():(h.disableMutationObserver||d.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),h.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",h.easing),document.querySelector("body").setAttribute("data-aos-duration",h.duration),document.querySelector("body").setAttribute("data-aos-delay",h.delay),h.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?$(!0):h.startEvent==="load"?window.addEventListener(h.startEvent,function(){$(!0)}):document.addEventListener(h.startEvent,function(){$(!0)}),window.addEventListener("resize",(0,i.default)($,h.debounceDelay,!0)),window.addEventListener("orientationchange",(0,i.default)($,h.debounceDelay,!0)),window.addEventListener("scroll",(0,n.default)(function(){(0,K.default)(z,h.once)},h.throttleDelay)),h.disableMutationObserver||d.default.ready("[data-aos]",N),z)};m.exports={init:u,refresh:$,refreshHard:N}},function(m,s){},,,,,function(m,s){(function(a){function t(e,u,r){function S(f){var O=P,R=_;return P=_=void 0,H=f,k=e.apply(R,O)}function L(f){return H=f,x=setTimeout(I,u),q?S(f):k}function B(f){var O=f-E,R=f-H,Z=u-O;return T?N(Z,C-R):Z}function F(f){var O=f-E,R=f-H;return E===void 0||O>=u||O<0||T&&R>=C}function I(){var f=o();return F(f)?U(f):void(x=setTimeout(I,B(f)))}function U(f){return x=void 0,y&&P?S(f):(P=_=void 0,k)}function X(){x!==void 0&&clearTimeout(x),H=0,P=E=_=x=void 0}function Q(){return x===void 0?k:U(o())}function D(){var f=o(),O=F(f);if(P=arguments,_=this,E=f,O){if(x===void 0)return L(E);if(T)return x=setTimeout(I,u),S(E)}return x===void 0&&(x=setTimeout(I,u)),k}var P,_,C,k,x,E,H=0,q=!1,T=!1,y=!0;if(typeof e!="function")throw new TypeError(l);return u=g(u)||0,b(r)&&(q=!!r.leading,T="maxWait"in r,C=T?$(g(r.maxWait)||0,u):C,y="trailing"in r?!!r.trailing:y),D.cancel=X,D.flush=Q,D}function c(e,u,r){var S=!0,L=!0;if(typeof e!="function")throw new TypeError(l);return b(r)&&(S="leading"in r?!!r.leading:S,L="trailing"in r?!!r.trailing:L),t(e,u,{leading:S,maxWait:u,trailing:L})}function b(e){var u=typeof e>"u"?"undefined":i(e);return!!e&&(u=="object"||u=="function")}function w(e){return!!e&&(typeof e>"u"?"undefined":i(e))=="object"}function n(e){return(typeof e>"u"?"undefined":i(e))=="symbol"||w(e)&&h.call(e)==v}function g(e){if(typeof e=="number")return e;if(n(e))return d;if(b(e)){var u=typeof e.valueOf=="function"?e.valueOf():e;e=b(u)?u+"":u}if(typeof e!="string")return e===0?e:+e;e=e.replace(j,"");var r=K.test(e);return r||V.test(e)?W(e.slice(2),r?2:8):M.test(e)?d:+e}var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",d=NaN,v="[object Symbol]",j=/^\s+|\s+$/g,M=/^[-+]0x[0-9a-f]+$/i,K=/^0b[01]+$/i,V=/^0o[0-7]+$/i,W=parseInt,Y=(typeof a>"u"?"undefined":i(a))=="object"&&a&&a.Object===Object&&a,G=(typeof self>"u"?"undefined":i(self))=="object"&&self&&self.Object===Object&&self,z=Y||G||Function("return this")(),J=Object.prototype,h=J.toString,$=Math.max,N=Math.min,o=function(){return z.Date.now()};m.exports=c}).call(s,function(){return this}())},function(m,s){(function(a){function t(o,e,u){function r(y){var f=D,O=P;return D=P=void 0,E=y,C=o.apply(O,f)}function S(y){return E=y,k=setTimeout(F,e),H?r(y):C}function L(y){var f=y-x,O=y-E,R=e-f;return q?$(R,_-O):R}function B(y){var f=y-x,O=y-E;return x===void 0||f>=e||f<0||q&&O>=_}function F(){var y=N();return B(y)?I(y):void(k=setTimeout(F,L(y)))}function I(y){return k=void 0,T&&D?r(y):(D=P=void 0,C)}function U(){k!==void 0&&clearTimeout(k),E=0,D=x=P=k=void 0}function X(){return k===void 0?C:I(N())}function Q(){var y=N(),f=B(y);if(D=arguments,P=this,x=y,f){if(k===void 0)return S(x);if(q)return k=setTimeout(F,e),r(x)}return k===void 0&&(k=setTimeout(F,e)),C}var D,P,_,C,k,x,E=0,H=!1,q=!1,T=!0;if(typeof o!="function")throw new TypeError(i);return e=n(e)||0,c(u)&&(H=!!u.leading,q="maxWait"in u,_=q?h(n(u.maxWait)||0,e):_,T="trailing"in u?!!u.trailing:T),Q.cancel=U,Q.flush=X,Q}function c(o){var e=typeof o>"u"?"undefined":g(o);return!!o&&(e=="object"||e=="function")}function b(o){return!!o&&(typeof o>"u"?"undefined":g(o))=="object"}function w(o){return(typeof o>"u"?"undefined":g(o))=="symbol"||b(o)&&J.call(o)==d}function n(o){if(typeof o=="number")return o;if(w(o))return l;if(c(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=c(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=o.replace(v,"");var u=M.test(o);return u||K.test(o)?V(o.slice(2),u?2:8):j.test(o)?l:+o}var g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},i="Expected a function",l=NaN,d="[object Symbol]",v=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,K=/^0o[0-7]+$/i,V=parseInt,W=(typeof a>"u"?"undefined":g(a))=="object"&&a&&a.Object===Object&&a,Y=(typeof self>"u"?"undefined":g(self))=="object"&&self&&self.Object===Object&&self,G=W||Y||Function("return this")(),z=Object.prototype,J=z.toString,h=Math.max,$=Math.min,N=function(){return G.Date.now()};m.exports=t}).call(s,function(){return this}())},function(m,s){function a(g){var i=void 0,l=void 0;for(i=0;i<g.length;i+=1)if(l=g[i],l.dataset&&l.dataset.aos||l.children&&a(l.children))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function c(){return!!t()}function b(g,i){var l=window.document,d=t(),v=new d(w);n=i,v.observe(l.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function w(g){g&&g.forEach(function(i){var l=Array.prototype.slice.call(i.addedNodes),d=Array.prototype.slice.call(i.removedNodes),v=l.concat(d);if(a(v))return n()})}Object.defineProperty(s,"__esModule",{value:!0});var n=function(){};s.default={isSupported:c,ready:b}},function(m,s){function a(l,d){if(!(l instanceof d))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var c=function(){function l(d,v){for(var j=0;j<v.length;j++){var M=v[j];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(d,M.key,M)}}return function(d,v,j){return v&&l(d.prototype,v),j&&l(d,j),d}}(),b=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,n=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,g=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,i=function(){function l(){a(this,l)}return c(l,[{key:"phone",value:function(){var d=t();return!(!b.test(d)&&!w.test(d.substr(0,4)))}},{key:"mobile",value:function(){var d=t();return!(!n.test(d)&&!g.test(d.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),l}();s.default=new i},function(m,s){Object.defineProperty(s,"__esModule",{value:!0});var a=function(c,b,w){var n=c.node.getAttribute("data-aos-once");b>c.position?c.node.classList.add("aos-animate"):typeof n<"u"&&(n==="false"||!w&&n!=="true")&&c.node.classList.remove("aos-animate")},t=function(c,b){var w=window.pageYOffset,n=window.innerHeight;c.forEach(function(g,i){a(g,n+w,b)})};s.default=t},function(m,s,a){function t(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(s,"__esModule",{value:!0});var c=a(12),b=t(c),w=function(n,g){return n.forEach(function(i,l){i.node.classList.add("aos-init"),i.position=(0,b.default)(i.node,g.offset)}),n};s.default=w},function(m,s,a){function t(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(s,"__esModule",{value:!0});var c=a(13),b=t(c),w=function(n,g){var i=0,l=0,d=window.innerHeight,v={offset:n.getAttribute("data-aos-offset"),anchor:n.getAttribute("data-aos-anchor"),anchorPlacement:n.getAttribute("data-aos-anchor-placement")};switch(v.offset&&!isNaN(v.offset)&&(l=parseInt(v.offset)),v.anchor&&document.querySelectorAll(v.anchor)&&(n=document.querySelectorAll(v.anchor)[0]),i=(0,b.default)(n).top,v.anchorPlacement){case"top-bottom":break;case"center-bottom":i+=n.offsetHeight/2;break;case"bottom-bottom":i+=n.offsetHeight;break;case"top-center":i+=d/2;break;case"bottom-center":i+=d/2+n.offsetHeight;break;case"center-center":i+=d/2+n.offsetHeight/2;break;case"top-top":i+=d;break;case"bottom-top":i+=n.offsetHeight+d;break;case"center-top":i+=n.offsetHeight/2+d}return v.anchorPlacement||v.offset||isNaN(g)||(l=g),i+l};s.default=w},function(m,s){Object.defineProperty(s,"__esModule",{value:!0});var a=function(t){for(var c=0,b=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)c+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),b+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:b,left:c}};s.default=a},function(m,s){Object.defineProperty(s,"__esModule",{value:!0});var a=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(c){return{node:c}})};s.default=a}])})})(ee);var oe=ee.exports;const re=ae(oe);re.init();const ne=[{title:"Senior Software Developer",company:"Kona Software Lab",period:"2022 - Present",description:"Developed a high-performance cryptocurrency trading platform with <b>Next.js</b> and built a secure fintech system portal using <b>Spring Boot</b>,  and actively participated in code reviews while following <b>TDD</b> principles.",achievements:["Reduced API call load on the server by 60% and improved user experience through effective caching strategies.","Enhanced frontend security by preventing XSS attacks and implementing DOMPurify for safe HTML rendering.","Optimized the web notification service, improving performance and delivery speed by 50%."]},{title:"Software Developer",company:"RedDot Digital Ltd.",period:"2021 - 2022",description:"Developed and maintained multiple telecom applications using <b>Spring Boot</b>.",achievements:["Delivered projects that served over 100,000+ daily active users","Managed server security with regular SSL/TLS updates and YUM patches."]},{title:"Software Developer",company:"CoKreates Limited",period:"2019 - 2021",description:"Built eGRP, an ERP system for the Bangladesh government, supporting two ministries with <b>Spring Boot</b> and <b>Angular</b>.",achievements:["Automated deployment pipeline with Jenkins.","Reduced development time and nuisances with task automation using bash scripts.","Covered 75% E2E testing with protractor."]}],ie=[{degree:"Bachelor of Computer Science & Engineering",school:"American International University - Bangladesh",period:"2016 - 2020",description:"Focus on Core Computer Science and Engineer",achievements:["Published thesis, titled <b><i>An Automated Model using Deep Convolutional Neural Network for Retinal Image Classification to Detect Diabetic Retinopathy</i></b> on <i>https://dl.acm.org/doi/abs/10.1145/3377049.3377067</i>"]}],se={frontend:["ReactJS","NextJS","Angular","TypeScript","Tailwind CSS"],backend:["Spring Boot","Django","PostgreSQL","MariaDB","Microservice Architecture","REST API","Kafka","Redis"],devops:["Linux","Jenkins","Docker"],tools:["Git","SonarQube","Jira","Figma"]},ce=[{title:"e-GRP",description:"Full-stack ERP solution for the Goivernment of Bangladesh",tech:["Angular","Spring-Boot","PostgreSQL"],type:"Full Stack"},{title:"Shadhinota Campaign",description:"Telco solution for rewarding mobile auto-recharge merchants.",tech:["Spring Boot","Kafka","PostgreSQL"],type:"Backend"},{title:"Cryptokona.io",description:"Crypto currency trading platform.",tech:["ReactJS","NextJS"],type:"Frontend"},,{title:"Kona Integrated Platform - Portal",description:"Highly customizable portal platform for Fintech Solution ",tech:["Spring Boot","Kafka","MariaDB"],type:"Backend"}];document.querySelector("#app").innerHTML=`
  <div class="min-h-screen">
    <!-- Header -->
    <header class="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm z-50">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-xl font-bold text-gray-800 dark:text-white">Alim Ahmed Reza</h1>
          <div class="space-x-6">
            <a href="#about" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a>
            <a href="#experience" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Experience</a>
            <a href="#education" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Education</a>
            <a href="#skills" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Skills</a>
            <a href="#projects" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Projects</a>
            <a href="#contact" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-6">
      <div class="container mx-auto text-center" data-aos="fade-up">
        <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Full Stack Developer
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Building robust and scalable applications with modern technologies.
          Passionate about creating exceptional user experiences and efficient backend solutions.
        </p>
        <div class="flex justify-center gap-4">
          <a href="#contact" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get in Touch
          </a>
          <a href="/alim_ahmed_reza-5yoe.pdf" 
             download 
             class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white" data-aos="fade-up">
          Professional Experience
        </h2>
        <div class="space-y-12">
          ${ne.map((p,A)=>`
            <div class="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="${A*100}">
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">${p.title}</h3>
                  <p class="text-blue-600 dark:text-blue-400">${p.company}</p>
                </div>
                <span class="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">${p.period}</span>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-4">${p.description}</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                ${p.achievements.map(m=>`
                  <li>${m}</li>
                `).join("")}
              </ul>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white" data-aos="fade-up">
          Education
        </h2>
        <div class="space-y-12">
          ${ie.map((p,A)=>`
            <div class="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="${A*100}">
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">${p.degree}</h3>
                  <p class="text-blue-600 dark:text-blue-400">${p.school}</p>
                </div>
                <span class="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">${p.period}</span>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-4">${p.description}</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                ${p.achievements.map(m=>`
                  <li>${m}</li>
                `).join("")}
              </ul>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white" data-aos="fade-up">
          Skills & Expertise
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          ${Object.entries(se).map(([p,A])=>`
            <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg" data-aos="fade-up">
              <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white capitalize">
                ${p}
              </h3>
              <div class="space-y-2">
                ${A.map(m=>`
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-gray-700 dark:text-gray-300">${m}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-gray-100 dark:bg-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-aos="fade-up">
          Featured Projects
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${ce.map((p,A)=>`
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="${A*100}">
              <span class="text-sm font-medium text-blue-600 dark:text-blue-400">${p.type}</span>
              <h3 class="text-xl font-bold mt-2 mb-3 text-gray-900 dark:text-white">${p.title}</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">${p.description}</p>
              <div class="flex flex-wrap gap-2">
                ${p.tech.map(m=>`
                  <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
                    ${m}
                  </span>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white" data-aos="fade-up">
          Let's Work Together
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto" data-aos="fade-up">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <div class="flex justify-center gap-6" data-aos="fade-up">
          <a href="mailto:reza.alimahmed@gmail.com" class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Email
          </a>
          <a href="https://github.com/alim-reza" target="_blank" class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
          <a href="https://linkedin.com/in/alim-ahmed-reza-asif/" target="_blank" class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-100 dark:bg-gray-800 py-8">
      <div class="container mx-auto px-6 text-center text-gray-600 dark:text-gray-300">
        © ${new Date().getFullYear()} Alim Ahmed Reza. All rights reserved.
      </div>
    </footer>
  </div>
`;

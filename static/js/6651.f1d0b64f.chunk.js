(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6651],{61532:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=61532,e.exports=t},74709:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(33028),o=n(59740),i=n(9249),a=n(87371),s=n(45754),l=n(13820),c=n(11510),d=n(36262),u=n(33087),f=n(17507),p=n(94531),m=["dependencies","codePen"];function h(e){var t=e.dependencies,n=e.codePen,i=(0,o.Z)(e,m),a=(0,r.Z)({},i);return n&&(a.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n        "template": "node",\n        "container": {\n          "startScript": "start",\n          "node": "14"\n        }\n      }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:a.code.replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"react-baidu-map-demo",description:"\u767e\u5ea6\u5730\u56fe React \u7ec4\u4ef6 - demo",dependencies:{react:"latest","react-dom":"latest","@uiw/react-baidu-map":"latest"},devDependencies:{"@kkt/less-modules":"7.2.0",kkt:"7.1.5",typescript:"4.3.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),(0,p.jsx)(f.Z,(0,r.Z)((0,r.Z)({},a),{},{dependencies:(0,r.Z)((0,r.Z)({},t),{},{React:c},c),style:{marginBottom:0}}))}var v="index_footer__Fp4ea",g=function(e){var t=(e||{}).editorUrl;return(0,p.jsxs)("div",{className:v,children:[t&&(0,p.jsx)("a",{title:"Editor Current Page",target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/uiw-admin/edit/master".concat(t),children:"\u7f16\u8f91\u5f53\u524d\u9875\u9762"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin/issues/new",children:"\u63d0\u4ea4 Bug"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin",children:"GitHub"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"uiwjs"})]})},b="index_markdown__hcQCp",w=n(68079),y=n(96234),j=n(7896),x="esm_navbox__Zvl4q",k="esm_active__jkS6S",T=n(53729),Z=function(e){var t,n;for(t=0;t<e.length&&!e[t];t++);for(n=e.length-1;n>=0&&!e[n];n--);return e.slice(t,n+1)},S=function(e){var t=e.markdown,n=e.headingTopOffset,r=void 0===n?100:n,o=e.routerType,i=void 0===o?"bower":o,a=(0,c.useState)(0),s=(0,y.Z)(a,2),l=s[0],d=s[1],u=(0,c.useRef)(null),f=(0,c.useMemo)((function(){var e=t.replace(/^[^#]+\n/g,"").replace(/(?:[^\n#]+)#+\s([^#\n]+)\n*/g,"").replace(/^#\s[^#\n]*\n+/,"").replace(/```[^`\n]*\n+[^```]+```\n+/g,"").replace(/`([^`\n]+)`/g,"$1").replace(/\*\*?([^*\n]+)\*\*?/g,"$1").replace(/__?([^_\n]+)__?/g,"$1").trim(),n=/#+\s([^#\n]+)\n*/g,r=e.match(n);if(!r)return[];var o=r.map((function(e,t){return{index:t,level:e.match(/^#+/g)[0].length,text:e.replace(n,"$1"),listNo:0}})),i=0;o.forEach((function(e){e.level>i&&(i=e.level)}));for(var a=[],s=0;s<o.length;s++){for(var l=o[s],c=l.level;a.length&&a[a.length-1].level>c;)a.pop();if(0!==a.length){var d=a[a.length-1].arr.slice();d[c-1]+=1,a.push({level:c,arr:d}),l.listNo=Z(d).join(".")}else{var u=new Array(i).fill(0);u[c-1]+=1,a.push({level:c,arr:u}),l.listNo=Z(u).join(".")}}return o}),[t]);(0,c.useEffect)((function(){f&&(u.current&&clearTimeout(u.current),u.current=setTimeout((function(){b(),document.addEventListener("scroll",g,!1)}),500))}),[f]);var m=(0,c.useCallback)((function(){var e=[];return f&&f.forEach((function(t){var n=(0,w.Z)(document.querySelectorAll("h"+t.level)).find((function(e){return e.innerText.trim()===t.text.trim()}));n&&e.push({dataId:t.text,offsetTop:n.offsetTop,listNo:t.listNo})})),e}),[f]),h=function(e){var t=(""+decodeURIComponent(e)).replace(/\./g,""),n=document.querySelector("#"+t);n&&"number"===typeof n.offsetTop&&function(e,t,n){if(void 0===n&&(n=0),e)if("function"===typeof e.scrollTo){var r={top:t,left:n};e.scrollTo(r)}else e===window?(document.documentElement.scrollTop=t,document.documentElement.scrollLeft=n):(e.scrollTop=t,e.scrollLeft=n)}(window,n.offsetTop-r,0)},v=function(e){var t=window.location.href,n="";if("bower"===i)n=""+window.location.pathname+window.location.search+"#"+e;else if(t.includes("?title=")){var r=t.indexOf("?title=");n=t.slice(0,r)+"?title="+e}else n=t+"?title="+e;window.history.replaceState({},"",n)},g=(0,T.Z)((function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,t=m().map((function(t){return(0,j.Z)({},t,{distanceToTop:Math.abs(e+r-t.offsetTop)})})),n=t.map((function(e){return e.distanceToTop})),o=Math.min.apply(Math,(0,w.Z)(n)),i=t.find((function(e){return e.distanceToTop===o}));i&&(v(i.dataId.toLowerCase().replace(" ","-")),d(i.listNo))}),200),b=function(){if(window.location.hash)if("bower"===i)h(window.location.hash.replace("#",""));else{var e=window.location.href.indexOf("?title=");if(e>-1){var t=window.location.href.slice(e+7);h(t)}}};return(0,p.jsx)("div",{className:x,children:f&&f.map((function(e,t){return(0,p.jsxs)("div",{style:{paddingLeft:5*e.level,paddingRight:5,lineHeight:"25px",cursor:"pointer"},className:l===e.listNo?k:"",onClick:function(){var t=e.text.toLowerCase().replace(" ","-");h(t),v(t),d(e.listNo)},children:[e.listNo," ",e.text]},t)}))})},_=["inline","node"],N=function e(){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((function(n){"text"===n.type?t+=n.value:n.children&&Array.isArray(n.children)&&(t+=e(n.children))})),t},O=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).editorUrl=void 0,r.getMdStr=void 0,r.dependencies=void 0,r.state={mdStr:""},r}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default||t})}))}},{key:"render",value:function(){var e=this;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(u.X2j,{children:[(0,p.jsx)(u.JXS,{children:(0,p.jsx)(d.Z,{style:{padding:"15px 15px"},source:this.state.mdStr,className:b,components:{code:function(t){var n=t.inline,i=t.node,a=(0,o.Z)(t,_),s=a,l=s.noPreview,c=s.noScroll,d=s.bgWhite,u=s.noCode,f=s.codePen,m=s.codeSandboxOption;if(n)return(0,p.jsx)("code",(0,r.Z)({},a));var v={noPreview:l,noScroll:c,bgWhite:d,noCode:u,codePen:f,codeSandboxOption:m};return 0===Object.keys(v).filter((function(e){return void 0!==v[e]})).length?(0,p.jsx)("code",(0,r.Z)({},a)):(0,p.jsx)(h,{code:N(i.children),dependencies:e.dependencies,noPreview:l,noScroll:c,bgWhite:d,noCode:u,codePen:f,codeSandboxOption:m})}}})}),(0,p.jsx)(u.JXS,{fixed:!0,style:{width:150},children:(0,p.jsx)(S,{markdown:this.state.mdStr,routerType:"hash"})})]}),(0,p.jsx)(g,{editorUrl:this.editorUrl})]})}}]),n}(c.Component)},72440:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(87371),o=n(9249),i=n(45754),a=n(13820),s=n(74709),l=n(56666),c=n(96234);function d(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var f=n(11510),p=n.p+"static/media/r2g7rm.c1f408daff26a9128797.jpg",m=n(33949),h=n(33087),v=n(24535),g=n(16948),b=n(94531),w=["name","required","labelFor"],y=["title"],j=function(e){var t=e.align,n=void 0===t?"center":t,r=e.classNameWarp,o=void 0===r?"":r,i=e.styleWarp,a=void 0===i?{}:i,s=e.classNameBody,j=void 0===s?"":s,x=e.styleBody,k=void 0===x?{}:x,T=e.footer,Z=void 0===T||T,S=e.bg,_=void 0===S?p:S,N=e.logo,O=void 0===N?p:N,E=e.children,C=e.projectName,F=void 0===C?"UIW Admin":C,M=e.onSuccess,P=void 0===M?function(){return null}:M,A=e.btnProps,W=void 0===A?{}:A,q=e.api,R=e.onBefore,U=e.requestConfig,D=e.buttons,I=e.saveField,L=e.fields,X=e.isDefaultFields,B=void 0===X||X,J=e.defaultFieldsConfig,$=e.styleContainer,z=void 0===$?{}:$,G=I||{},Y=G.userName,H=void 0===Y?"username":Y,V=G.passWord,Q=void 0===V?"password":V,K=((J||{}).userName||{}).label||"\u8d26\u53f7",ee=((J||{}).passWord||{}).label||"\u5bc6\u7801";H=((J||{}).userName||{}).name||H,Q=((J||{}).passWord||{}).name||Q;var te=f.useState(),ne=(0,c.Z)(te,2),re=ne[0],oe=ne[1],ie=(0,v.ZP)(re?[q,u({method:"POST",body:re},U||{})]:null,g.WY,{revalidateOnFocus:!1,onSuccess:function(e){return P(e,re)}}).isValidating,ae=[u({name:H,label:""+K,labelFor:H,required:!0,children:(0,b.jsx)("input",{type:"text",disabled:!!ie,id:H,placeholder:"\u8bf7\u8f93\u5165"+K,className:"form-field"})},(null==J?void 0:J.userName)||{}),u({name:Q,label:""+ee,labelFor:Q,required:!0,children:(0,b.jsx)("input",{disabled:!!ie,id:Q,type:"password",placeholder:"\u8bf7\u8f93\u5165"+ee,className:"form-field"})},(null==J?void 0:J.passWord)||{})],se=ae;L&&Array.isArray(L)&&(se=B?ae.concat(L):L);var le=f.useMemo((function(){return!1===Z||""===Z?null:!0===Z?(0,b.jsx)("div",{className:"copyright-footer",children:"\u7248\u6743\u6240\u6709 copyright \xa9 2022 uiw admin"}):Z}),[]);return(0,b.jsxs)("div",{className:"uiw-loayout-login",style:u({background:"url("+_+")"},z),children:[(0,b.jsx)(m.Z,{title:F}),(0,b.jsx)("div",{style:a,className:"uiw-loayout-login-warp "+o+" uiw-loayout-login-warp-"+n,children:(0,b.jsxs)("div",{className:"uiw-loayout-login-body "+j,style:k,children:[O&&(0,b.jsx)("img",{className:"logo",src:O}),F&&(0,b.jsx)("span",{className:"uiw-title",children:F}),E||(0,b.jsx)(h.l09,{resetOnSubmit:!1,onSubmit:function(e){var t=e.current,n={};if(se.forEach((function(e){if(e.verification&&"function"===typeof e.verification){var r=e.verification(t[e.name],t);"string"===typeof r&&r&&(n[e.name]=r)}else e.required&&!t[e.name]&&(n[e.name]=e.label+"\u4e0d\u80fd\u4e3a\u7a7a")})),Object.keys(n).length>0){var r=new Error;throw r.filed=n,r}if("function"===typeof R){var o=R(t);if("object"===typeof o)return void oe(u({},t,o||{},{swr_Rest_Time:(new Date).getTime()}));if(!o)return}oe(u({},t,{swr_Rest_Time:(new Date).getTime()}))},onSubmitError:function(e){return e.filed?u({},e.filed):null},fields:se.reduce((function(e,t){if(!t||t&&!t.name)return u({},e);var n=t.name,r=t.labelFor,o=d(t,w);return u({},e,(0,l.Z)({},n,u({labelFor:n||r},o)))}),{}),children:function(e){var t=e.fields,n=void 0===t?{}:t,r=e.canSubmit,o="function"===typeof r?r():void 0;return(0,b.jsxs)("div",{children:[se.map((function(e,t){return(0,b.jsx)(h.X2j,{children:(0,b.jsx)(h.JXS,{children:n[e.name]})},t)})),(0,b.jsx)(h.X2j,{children:D&&D.length>0?D.map((function(e,t){var n=e.title,r=d(e,y);return(0,b.jsx)(h.zxk,u({loading:!!ie&&"submit"===e.htmlType,disabled:!o,className:"btns",type:"danger"},r,{children:n}),t)})):(0,b.jsx)(h.zxk,u({disabled:!o,loading:!!ie,className:"btns",block:!0,style:{marginTop:20},htmlType:"submit",type:"dark"},W,{children:"\u767b\u5f55"}))})]})}})]})}),le]})},x=function(e){(0,i.Z)(s,e);var t=(0,a.Z)(s);function s(){var e;(0,o.Z)(this,s);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).editorUrl="/packages/user-login/README.md",e.dependencies={UserLogin:j,Notify:h.gUr,Form:h.l09,Row:h.X2j,Col:h.JXS,Button:h.zxk},e.getMdStr=function(){return n.e(1826).then(n.bind(n,31826))},e}return(0,r.Z)(s)}(s.Z)},33949:function(e,t,n){"use strict";var r=n(55839),o=n(11510),i=n(94531);t.Z=function(e){return void 0===e&&(e={}),(0,o.useEffect)((function(){document.title=e.title||""}),[e.title]),(0,i.jsx)(o.Fragment,{children:o.Children.toArray(e.children).map((function(e){return o.isValidElement(e)?o.cloneElement(e,(0,r.Z)({},e.props||{})):null}))})}},16948:function(e,t,n){"use strict";n.d(t,{WY:function(){return f}});var r=n(96234),o=n(7896),i=n(31461),a=n(57084),s=n.n(a);var l=n(15511),c=n.n(l),d=["body","headers","requestType"],u={200:"\u670d\u52a1\u5668\u6210\u529f\u8fd4\u56de\u8bf7\u6c42\u7684\u6570\u636e\u3002",201:"\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u6210\u529f\u3002",202:"\u4e00\u4e2a\u8bf7\u6c42\u5df2\u7ecf\u8fdb\u5165\u540e\u53f0\u6392\u961f\uff08\u5f02\u6b65\u4efb\u52a1\uff09\u3002",204:"\u5220\u9664\u6570\u636e\u6210\u529f\u3002",400:"\u53d1\u51fa\u7684\u8bf7\u6c42\u6709\u9519\u8bef\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u3002",401:"\u7528\u6237\u6ca1\u6709\u6743\u9650\uff08\u4ee4\u724c\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u9519\u8bef\uff09\u3002",403:"\u7528\u6237\u5f97\u5230\u6388\u6743\uff0c\u4f46\u662f\u8bbf\u95ee\u662f\u88ab\u7981\u6b62\u7684\u3002",404:"\u53d1\u51fa\u7684\u8bf7\u6c42\u9488\u5bf9\u7684\u662f\u4e0d\u5b58\u5728\u7684\u8bb0\u5f55\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u64cd\u4f5c\u3002",406:"\u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53ef\u5f97\u3002",410:"\u8bf7\u6c42\u7684\u8d44\u6e90\u88ab\u6c38\u4e45\u5220\u9664\uff0c\u4e14\u4e0d\u4f1a\u518d\u5f97\u5230\u7684\u3002",422:"\u5f53\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u53d1\u751f\u4e00\u4e2a\u9a8c\u8bc1\u9519\u8bef\u3002",500:"\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002",502:"\u7f51\u5173\u9519\u8bef\u3002",503:"\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002",504:"\u7f51\u5173\u8d85\u65f6\u3002"};function f(e,t){void 0===t&&(t={});var n=t.method||"GET",a=t,l=a.body,f=a.headers,p=a.requestType,m=void 0===p?"json":p,h=(0,i.Z)(t,d);(null==l?void 0:l.swr_Rest_Time)&&delete l.swr_Rest_Time;var v=(0,o.Z)({},h,{url:e,method:n,data:l});if("json"===m)v.headers=(0,o.Z)({"Content-Type":"application/json; charset=utf-8",Accept:"application/json"},f||{}),v.data=JSON.stringify(l||{});else if("form"===m){var g=new FormData;Object.entries(l||{}).forEach((function(e){var t=(0,r.Z)(e,2),n=t[0],o=t[1];g.append(n,o)})),v.headers=(0,o.Z)({Accept:"application/json"},f||{}),v.data=g}else"urlencoded"===m&&(v.headers=(0,o.Z)({"Content-Type":"application/x-www-form-urlencoded; charset=utf-8",Accept:"application/json"},f||{}),v.data=c().stringify(l||{},{arrayFormat:"repeat"}));/(GET)/.test(n)&&(v.url=function(e,t){var n=e,r=[];return Object.keys(t).forEach((function(e){return r.push(e+"="+t[e])})),0===Object.keys(t).length?e:(!1===/\?/.test(n)?n=n+"?"+r.join("&"):n+="&"+r.join("&"),n)}(e,(0,o.Z)({},l)),delete v.body);var b=sessionStorage.getItem("token")||localStorage.getItem("token");return b&&(v.headers=(0,o.Z)({},v.headers||{},{token:b})),s().request(v).then((function(e){return e.data})).catch((function(e){var t=e.response;if(t.status>=200&&t.status<300)return t;var n=t.status,r=u[n]||t.statusText,o=new Error(r);if(o.name=t.status,t.data)return t.data;throw o}))}},53260:function(){},55839:function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=6651.f1d0b64f.chunk.js.map
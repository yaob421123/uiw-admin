(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40],{61532:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=61532,e.exports=n},2627:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(33028),i=t(59740),l=t(9249),o=t(87371),a=t(45754),u=t(37687),c=t(56976),s=t(26956),d=t(44819),f=t(14218),p=["dependencies","codePen"];function h(e){var n=e.dependencies,t=e.codePen,l=(0,i.Z)(e,p),o=(0,r.Z)({},l);return t&&(o.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n        "template": "node",\n        "container": {\n          "startScript": "start",\n          "node": "14"\n        }\n      }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:o.code.replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"react-baidu-map-demo",description:"\u767e\u5ea6\u5730\u56fe React \u7ec4\u4ef6 - demo",dependencies:{react:"latest","react-dom":"latest","@uiw/react-baidu-map":"latest"},devDependencies:{"@kkt/less-modules":"6.11.0",kkt:"6.11.0",typescript:"4.3.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),(0,f.jsx)(d.Z,(0,r.Z)((0,r.Z)({},o),{},{dependencies:(0,r.Z)((0,r.Z)({},n),{},{React:c},c),style:{marginBottom:0}}))}var v="index_footer__Fp4ea",m=function(e){var n=(e||{}).editorUrl;return(0,f.jsxs)("div",{className:v,children:[n&&(0,f.jsx)("a",{title:"Editor Current Page",target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/uiw-admin/edit/master".concat(n),children:"\u7f16\u8f91\u5f53\u524d\u9875\u9762"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin/issues/new",children:"\u63d0\u4ea4 Bug"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin",children:"GitHub"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"uiwjs"})]})},x="index_markdown__hcQCp",g=["inline","node"],b=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.forEach((function(n){"text"===n.type?t+=n.value:n.children&&Array.isArray(n.children)&&(t+=e(n.children))})),t},y=function(e){(0,a.Z)(t,e);var n=(0,u.Z)(t);function t(e){var r;return(0,l.Z)(this,t),(r=n.call(this,e)).editorUrl=void 0,r.getMdStr=void 0,r.dependencies=void 0,r.state={mdStr:""},r}return(0,o.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(n){e.setState({mdStr:n.default||n})}))}},{key:"render",value:function(){var e=this;return(0,f.jsxs)(c.Fragment,{children:[(0,f.jsx)(s.Z,{style:{padding:"20px 26px"},source:this.state.mdStr,className:x,components:{code:function(n){var t=n.inline,l=n.node,o=(0,i.Z)(n,g),a=o,u=a.noPreview,c=a.noScroll,s=a.bgWhite,d=a.noCode,p=a.codePen,v=a.codeSandboxOption;if(t)return(0,f.jsx)("code",(0,r.Z)({},o));var m={noPreview:u,noScroll:c,bgWhite:s,noCode:d,codePen:p,codeSandboxOption:v};return 0===Object.keys(m).filter((function(e){return void 0!==m[e]})).length?(0,f.jsx)("code",(0,r.Z)({},o)):(0,f.jsx)(h,{code:b(l.children),dependencies:e.dependencies,noPreview:u,noScroll:c,bgWhite:s,noCode:d,codePen:p,codeSandboxOption:v})}}}),(0,f.jsx)(m,{editorUrl:this.editorUrl})]})}}]),t}(c.Component)},80898:function(e,n,t){"use strict";t.d(n,{PB:function(){return U},A9:function(){return oe},QV:function(){return B},Od:function(){return c},x6:function(){return A}});var r=t(7896),i=t(31461),l=t(56976),o=t(32463),a=t(14218),u=["children","style","loading"],c=function(e){var n=e.children,t=e.style,l=e.loading,c=void 0!==l&&l,s=(0,i.Z)(e,u);return(0,a.jsx)(o.aN,(0,r.Z)({loading:c,style:(0,r.Z)({display:"block"},t),bgColor:"rgba(255, 255, 255, 0.4)"},s,{children:(0,a.jsx)(a.Fragment,{children:n})}))},s=t(96234),d=t(77162),f=t.n(d),p=t(34795),h=t(35642),v=t(47303),m=t.n(v);var x={200:"\u670d\u52a1\u5668\u6210\u529f\u8fd4\u56de\u8bf7\u6c42\u7684\u6570\u636e\u3002",201:"\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u6210\u529f\u3002",202:"\u4e00\u4e2a\u8bf7\u6c42\u5df2\u7ecf\u8fdb\u5165\u540e\u53f0\u6392\u961f\uff08\u5f02\u6b65\u4efb\u52a1\uff09\u3002",204:"\u5220\u9664\u6570\u636e\u6210\u529f\u3002",400:"\u53d1\u51fa\u7684\u8bf7\u6c42\u6709\u9519\u8bef\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u3002",401:"\u7528\u6237\u6ca1\u6709\u6743\u9650\uff08\u4ee4\u724c\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u9519\u8bef\uff09\u3002",403:"\u7528\u6237\u5f97\u5230\u6388\u6743\uff0c\u4f46\u662f\u8bbf\u95ee\u662f\u88ab\u7981\u6b62\u7684\u3002",404:"\u53d1\u51fa\u7684\u8bf7\u6c42\u9488\u5bf9\u7684\u662f\u4e0d\u5b58\u5728\u7684\u8bb0\u5f55\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u64cd\u4f5c\u3002",406:"\u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53ef\u5f97\u3002",410:"\u8bf7\u6c42\u7684\u8d44\u6e90\u88ab\u6c38\u4e45\u5220\u9664\uff0c\u4e14\u4e0d\u4f1a\u518d\u5f97\u5230\u7684\u3002",422:"\u5f53\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u53d1\u751f\u4e00\u4e2a\u9a8c\u8bc1\u9519\u8bef\u3002",500:"\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002",502:"\u7f51\u5173\u9519\u8bef\u3002",503:"\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002",504:"\u7f51\u5173\u8d85\u65f6\u3002"};function g(e,n){void 0===n&&(n={});var t=n.method||"GET",i={url:e,method:t,data:n.body,headers:{"Content-Type":"application/json; charset=utf-8",Accept:"application/json"}};return/(GET)/.test(t)&&(i.url=function(e,n){var t=e,r=[];return Object.keys(n).forEach((function(e){return r.push(e+"="+n[e])})),0===Object.keys(n).length?e:(!1===/\?/.test(t)?t=t+"?"+r.join("&"):t+="&"+r.join("&"),t)}(e,(0,r.Z)({},n.body)),delete i.body),m().request(i).then((function(e){return e.data})).catch((function(e){var n=e.response;if(n.status>=200&&n.status<300)return n;var t=n.status,r=x[t]||n.statusText,i=new Error(r);if(i.name=n.status,n.data)return n.data;throw i}))}var b=(0,l.createContext)({}),y=function(){return(0,l.useContext)(b)};var j=["style","columns","rowSelection","onPageChange"],k=function(e){var n=e.columns,t=e.rowSelection,u=void 0===t?{}:t,c=e.onPageChange,d=(0,i.Z)(e,j),v=(0,l.useState)(1),m=(0,s.Z)(v,2),x=m[0],b=m[1],k=(0,l.useState)({data:[],total:0}),S=(0,s.Z)(k,2),Z=S[0],w=S[1],C=y(),O=C.formatData,P=C.updateStore,N=C.query,F=C.key,B=C.searchValues,A=C.SWRConfiguration,R=void 0===A?{}:A,I=u.selectKey,M=u.type,U=void 0===M?"checkbox":M,V=u.defaultSelected,z=void 0===V?[]:V,E="checkbox"===U,J=(0,l.useMemo)((function(){var e={};return n.forEach((function(n){var t;if(null!=n&&null!=(t=n.props)&&t.initialValue){var r=n.key||n.props.key;e[r]=n.props.initialValue}})),e}),[JSON.stringify(n)]),_=(0,l.useRef)(!1),L=(0,l.useCallback)((function(){return N?N(x,!1===_.current?J:B):{page:1,pageSize:10}}),[x,JSON.stringify(J),JSON.stringify(B)]),D=L().pageSize||10,T=(0,h.ZP)([F,{method:"POST",body:L()}],g,(0,r.Z)({revalidateOnFocus:!1},R)),W=T.data,X=T.isValidating,Y=O&&W?O(W).data:(null==W?void 0:W.data)||(null==Z?void 0:Z.data),H=function(e,n,t){void 0===n&&(n=[]),void 0===t&&(t=!1);var r=(0,l.useState)(n),i=(0,s.Z)(r,2),o=i[0],a=i[1],u=(0,l.useMemo)((function(){return new Set(o)}),[o]),c=function(e){return u.has(e)},d=function(){e.forEach((function(e){u.delete(e)})),a(Array.from(u))},f=function(e){return t&&d(),u.add(e),a(Array.from(u))},p=function(e){return u.delete(e),a(Array.from(u))},h=function(){e.forEach((function(e){u.add(e)})),a(Array.from(u))},v=(0,l.useMemo)((function(){return e.every((function(e){return!u.has(e)}))}),[e,u]),m=(0,l.useMemo)((function(){return e.every((function(e){return u.has(e)}))&&!v}),[e,u,v]),x=(0,l.useMemo)((function(){return!v&&!m}),[v,m]);return{selected:o,noneSelected:v,allSelected:m,partiallySelected:x,setSelected:a,isSelected:c,select:f,unSelect:p,toggle:function(e){c(e)?p(e):f(e)},selectAll:h,unSelectAll:d,toggleAll:function(){return m?d():h()}}}(I?Y?Y.map((function(e){return e[I]})):[]:Y,z,"radio"===U),q=(0,l.useCallback)((0,p.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(1);case 1:case"end":return e.stop()}}),e)}))),[b]),G=(0,l.useCallback)((function(e){c&&c(e),b(e)}),[b,c]);(0,l.useEffect)((function(){var e={};n.forEach((function(n){var t;if(null!=n&&null!=(t=n.props)&&t.initialValue){var r=n.key||n.props.key;e[r]=n.props.initialValue}}));var t={data:null==W?void 0:W.data,total:null==W?void 0:W.total,loading:!W||X,onSearch:q,selection:H,pageIndex:x};_.current||(_.current=!0,t.searchValues=e),P(t),W&&w(W)}),[JSON.stringify(W),X,JSON.stringify(n),x,JSON.stringify(H)]);var K=[{title:E?function(){return(0,a.jsx)(o.XZ,{checked:H.allSelected,onClick:function(){H.toggleAll()}})}:null,key:"checked",render:function(e,n,t){return I?E?(0,a.jsx)(o.XZ,{checked:H.isSelected(t[I]),onClick:function(){H.toggle(t[I])}}):(0,a.jsx)(o.Y8,{onChange:function(){H.toggle(t[I])},checked:H.isSelected(t[I])}):null}}];return(0,a.jsx)(o.iA,(0,r.Z)({columns:I?K.concat(n):n,data:Y,footer:W&&(0,a.jsx)(o.tl,{current:x,pageSize:D,total:O&&W?O(W).total:(null==W?void 0:W.total)||(null==Z?void 0:Z.total),divider:!0,onChange:function(e){G(e)}})},d))},S=["option"],Z=function(e){var n=e.option,t=(0,i.Z)(e,S);return(0,a.jsxs)(o.Ph,(0,r.Z)({},t,{children:[(0,a.jsx)(o.Ph.Option,{value:"",children:"\u8bf7\u9009\u62e9"}),n&&n.map((function(e){return(0,a.jsx)(o.Ph.Option,{value:e.value,children:e.label},e.value)}))]}))},w=["option"],C=function(e){var n=e.option,t=(0,i.Z)(e,w);return(0,a.jsx)(o.Ee,(0,r.Z)({},t,{children:n&&n.map((function(e){return(0,a.jsx)(o.Y8,{value:e.value,children:e.label},e.value)}))}))},O=["widgetProps","key","widget","label","initialValue"],P={input:o.II,radio:C,checkbox:o.XZ,switch:o.rs,select:Z,searchSelect:o.ul,textarea:o.gx,dateInput:o.Wr,timePicker:o.jI,monthPicker:o.lH},N=function(e){var n=y(),t=n.updateStore,u=n.onSearch,c=e.columns,s=e.searchBtns,d=e.onBeforeSearch,f=(0,l.useMemo)((function(){var e={};return c.forEach((function(n){if(n.props&&Object.keys(n.props).length>0){var t=n.props,l=t.widgetProps,o=t.key,u=t.widget,c=t.label,s=t.initialValue,d=(0,i.Z)(t,O),f=o||n.key,p=P[u];e[f]=(0,r.Z)({label:c||n.title,children:(0,a.jsx)(p,(0,r.Z)({},l))},d,{initialValue:s})}})),e}),[JSON.stringify(c)]),p=function(e){var n=e.initial,i=e.current;t({searchValues:(0,r.Z)({},n,i)}),u(i)},h=4-Object.keys(f).length%5;return(0,a.jsx)(o.l0,{style:{background:"#fff",paddingBottom:10,marginBottom:14},resetOnSubmit:!1,onSubmit:function(e){var n=e.initial,t=e.current;d&&d({initial:n,current:t}),p({initial:n,current:t})},onSubmitError:function(e){return e.filed?(0,r.Z)({},e.filed):null},fields:f,children:function(e){var n=e.fields;e.state,e.canSubmit,e.resetForm;return(0,a.jsx)("div",{children:(0,a.jsxs)(o.X2,{gutter:12,children:[Object.keys(n).map((function(e){return(0,a.jsx)(o.JX,{fixed:!0,style:{width:"20%"},children:n[e]},e)})),Array(h).fill("").map((function(e,n){return(0,a.jsx)(o.JX,{fixed:!0,style:{width:"20%"}},n.toString())})),(0,a.jsx)(o.JX,{align:"middle",style:{textAlign:"right",marginRight:14},children:s?s.map((function(e,n){return null!=e&&e.render?(0,a.jsx)(l.Fragment,{children:e.render},n.toString()):(0,a.jsx)(o.zx,(0,r.Z)({style:{marginRight:5}},e,{children:e.label}),n.toString())})):(0,a.jsx)(o.zx,{type:"primary",htmlType:"submit",children:"\u67e5\u8be2"})})]})})}})},F=["table","columns","operateButtons","searchBtns","onBeforeSearch"],B=function(e){var n=e.table,t=e.columns,u=e.operateButtons,s=void 0===u?[]:u,d=e.searchBtns,f=e.onBeforeSearch,p=(0,i.Z)(e,F),h=n.key,v=n.reset,m=n.refersh,x=n.updateStore,g=n.formatData,y=n.query,j=n.searchValues,S=n.loading,Z=n.onSearch,w=n.SWRConfiguration,C=n.selection,O=n.pageIndex,P=(0,l.useMemo)((function(){return{data:[],reset:v,refersh:m,key:h,updateStore:x,formatData:g,query:y,searchValues:j,onSearch:Z,SWRConfiguration:w,selection:C,pageIndex:O}}),[JSON.stringify(n)]);return(0,a.jsx)(b.Provider,{value:P,children:(0,a.jsxs)(c,{loading:S,children:[(0,a.jsx)(N,{columns:t,searchBtns:d,onBeforeSearch:f}),s.length>0&&(0,a.jsx)("div",{style:{background:"#fff",padding:10},children:s.map((function(e,n){return null!=e&&e.render?(0,a.jsx)(l.Fragment,{children:e.render},n.toString()):(0,a.jsx)(o.zx,(0,r.Z)({},e,{children:e.label}),n.toString())}))}),(0,a.jsx)(k,(0,r.Z)({columns:t},p))]})})},A=function(e,n){void 0===n&&(n={});var t=n,i=t.formatData,o=t.query,a=t.SWRConfiguration,u=(0,l.useState)({pageIndex:1,total:1,data:[],searchValues:{},loading:!1,selection:{selected:[],noneSelected:!1,allSelected:!1,partiallySelected:!1,setSelected:function(){return null},isSelected:function(){return null},select:function(){return null},unSelect:function(){return null},toggle:function(){return null},selectAll:function(){return null},unSelectAll:function(){return null},toggleAll:function(){return null}}}),c=(0,s.Z)(u,2),d=c[0],f=c[1];return(0,r.Z)({key:e,reset:function(){},refersh:function(){},onSearch:function(){},formatData:i,query:o,updateStore:function(e){f((0,r.Z)({},d,e))},SWRConfiguration:a},d)},R=["visible","title","onClose","width","buttons","children"],I=["label","show"];function M(e){var n=e.visible,t=e.title,l=void 0===t?"":t,u=e.onClose,c=void 0===u?null:u,s=e.width,d=void 0===s?800:s,f=e.buttons,p=void 0===f?[]:f,h=e.children,v=(0,i.Z)(e,R);return(0,a.jsx)(o.dy,(0,r.Z)({title:l,isOpen:n,onClose:c&&c,size:d,bodyStyle:{padding:"0 10px 45px 10px"},footer:p.map((function(e,n){var t=e.label,l=void 0===t?"":t,u=e.show,c=void 0===u||u,s=(0,i.Z)(e,I);return c&&(0,a.jsx)(o.zx,(0,r.Z)({},s,{children:l}),n)}))},v,{children:h}))}var U=(0,l.memo)(M);var V=function(e){var n=e.formfields,t=e.onSubmit,i=e.onChange,u=e.buttonsContainer,c=e.submitRef,s=e.showSaveButton,d=void 0!==s&&s,f=e.showResetButton,p=void 0!==f&&f,h=e.saveButtonProps,v=e.resetButtonProps;return(0,a.jsx)(o.l0,{style:{background:"#fff",paddingBottom:10,marginBottom:14},resetOnSubmit:!1,onSubmit:function(e){var n=e.initial,r=e.current;return null==t?void 0:t(n,r)},onChange:function(e){var n=e.initial,t=e.current;return null==i?void 0:i(n,t)},onSubmitError:function(e){return e.filed?(0,r.Z)({},e.filed):null},fields:n,children:function(e){var n=e.fields,t=(e.state,e.canSubmit),i=e.resetForm;return(0,a.jsxs)(l.Fragment,{children:[(0,a.jsx)(o.X2,{gutter:10,children:Object.keys(n).map((function(e){var t,r,i=(null==(t=n[e])||null==(r=t.props)?void 0:r.span)||"8";return(0,a.jsx)(o.JX,{span:i,children:n[e]},e)}))}),(0,a.jsxs)("div",{className:"w-form-item-center",style:(0,r.Z)({},u),children:[d?(0,a.jsx)(o.zx,(0,r.Z)({},h,{ref:c,disabled:!t(),htmlType:"submit",children:(null==h?void 0:h.label)||"\u63d0\u4ea4"})):(0,a.jsx)(o.zx,(0,r.Z)({style:{display:"none"},ref:c,disabled:!t(),htmlType:"submit"},h,{children:(null==h?void 0:h.label)||"\u63d0\u4ea4"})),(0,a.jsx)(o.zx,(0,r.Z)({style:{display:p?"flex":"none"},onClick:i},v,{children:(null==v?void 0:v.label)||"\u91cd\u7f6e"}))]})]})}})},z=t(41361),E=t(68079),J=t(56666),_=function(e){var n=new FileReader;return new Promise((function(t){n.addEventListener("load",(function(){return t(String(n.result))})),n.readAsDataURL(e)}))},L=function(e,n){for(var t=[],r=0;r<e.length;r+=1)t.push(_(e[r]));return Promise.all(t).then((function(t){return t.map((function(t,r){var i;return i={},(0,J.Z)(i,n,t),(0,J.Z)(i,"file",e[r]),i}))}))},D=function(e,n){return!n||e<=n},T=function(e,n){if(e&&e.length>0){var t=n.split(".").pop()||"";if(e.findIndex((function(e){return e.toLowerCase()===t.toLowerCase()}))<0)return!1}return!0},W=function(e,n,t){if(0!==n&&!n)return!0;if(-1===t){if(e<=n)return!0}else if(e<=n+1)return!0;return!1},X=function(){var e=(0,p.Z)(f().mark((function e(n){var t,r,i,l,o,a,u,c,s;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.fileList,r=n.value,i=n.maxNumber,l=n.keyUpdate,o=n.accept,a=n.maxFileSize,u={},W(t.length+r.length,i,l)){e.next=6;break}u.maxNumber=!0,e.next=23;break;case 6:c=0;case 7:if(!(c<t.length)){e.next=23;break}if(s=t[c].file){e.next=11;break}return e.abrupt("continue",20);case 11:if(d=s.type,console.log("fileType",d),d.includes("image")||d.includes("pdf")||d.includes("vnd.openxmlformats-officedocument.spreadsheetml.sheet")){e.next=14;break}return u.accept=!0,e.abrupt("break",23);case 14:if(T(o,s.name)){e.next=17;break}return u.accept=!0,e.abrupt("break",23);case 17:if(D(s.size,a)){e.next=20;break}return u.maxFileSize=!0,e.abrupt("break",23);case 20:c+=1,e.next=7;break;case 23:if(!Object.values(u).find(Boolean)){e.next=25;break}return e.abrupt("return",u);case 25:return e.abrupt("return",null);case 26:case"end":return e.stop()}var d}),e)})));return function(n){return e.apply(this,arguments)}}(),Y=-1,H=function(e){var n=e.value,t=void 0===n?[]:n,i=e.onChange,o=e.onError,u=e.children,c=e.dataURLKey,d=void 0===c?"dataURL":c,h=e.multiple,v=void 0!==h&&h,m=e.maxNumber,x=void 0===m?3:m,g=e.accept,b=e.maxFileSize,y=e.inputProps,j=void 0===y?{}:y,k=t||[],S=(0,l.useRef)(null),Z=(0,l.useState)(Y),w=(0,s.Z)(Z,2),C=w[0],O=w[1],P=(0,l.useState)(null),N=(0,s.Z)(P,2),F=N[0],B=N[1],A=(0,l.useCallback)((function(){return function(e){e.current&&e.current.click()}(S)}),[S]),R=(0,l.useCallback)((function(){O(Y),A()}),[A]),I=(0,l.useCallback)((function(){null==i||i([])}),[i]),M=function(){var e=(0,p.Z)(f().mark((function e(n){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X({fileList:n,maxFileSize:b,maxNumber:x,accept:g,keyUpdate:C,value:k});case 2:if(!(t=e.sent)){e.next=7;break}return B(t),null==o||o(t,n),e.abrupt("return",!1);case 7:return F&&B(null),e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),U=function(){var e=(0,p.Z)(f().mark((function e(n){var t,r,l,o,a,u;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,L(n,d);case 4:if((t=e.sent).length){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,M(t);case 9:if(e.sent){e.next=12;break}return e.abrupt("return");case 12:if(l=[],C>Y)o=(0,s.Z)(t,1),a=o[0],(r=(0,E.Z)(k))[C]=a,l.push(C);else if(v)for(r=[].concat((0,E.Z)(k),(0,E.Z)(t)),u=k.length;u<r.length;u+=1)l.push(u);else r=[t[0]],l.push(0);null==i||i(r,l);case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),V=function(){var e=(0,p.Z)(f().mark((function e(n){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(n.target.files);case 2:C>Y&&O(Y),S.current&&(S.current.value="");case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),z=(0,l.useMemo)((function(){return function(e){return e&&e.length>0?e.map((function(e){return"."+e})).join(", "):"image/*"}(g)}),[g]);return(0,a.jsxs)(l.Fragment,{children:[(0,a.jsx)("input",(0,r.Z)({type:"file",accept:z,ref:S,multiple:v&&C===Y,onChange:V,style:{display:"none"}},j)),null==u?void 0:u({fileList:k,onFileUpload:R,onFileRemoveAll:I,onFileUpdate:function(e){O(e),A()},onFileRemove:function(e){var n=(0,E.Z)(k);Array.isArray(e)?e.forEach((function(e){n.splice(e,1)})):n.splice(e,1),null==i||i(n)},errors:F})]})},q=function(e){if(void 0===e&&(e=""),e){var n=e.lastIndexOf("/"),t=e.substr(n+1);return-1!==["png","jpg","jpeg","bmp","gif","webp","psd","svg","tiff"].indexOf(t.toLowerCase())}return!1},G=function(e){var n=e.readOnly,t=e.maxNumber,r=e.onUploadView,i=e.fileList,l=e.onFileUpload,u=(e.onFileRemoveAll,e.onFileUpdate),c=e.onFileRemove,s=t!==i.length&&!n,d=!n;return(0,a.jsxs)("div",{className:"upload-list-picture-card-row",children:[i.map((function(e,t){var i,l=null==e||null==(i=e.file)?void 0:i.type,s=q(l);return(0,a.jsx)("div",{className:"upload-list-picture-card-container",children:(0,a.jsxs)("div",{className:"upload-list-item",children:[s&&(0,a.jsx)("img",{onClick:function(){return!n&&u(t)},crossOrigin:"anonymous",src:e.data_url,alt:"",width:"100%",height:"100%"}),(0,a.jsx)("div",{className:"upload-list-item-actions",children:(0,a.jsxs)("div",{className:"upload-list-picture-card-row",children:[d&&(0,a.jsx)(o.JO,{type:"delete",onClick:function(){return c(t)}}),s&&(0,a.jsx)(o.JO,{style:{marginLeft:10},type:"eye-o",onClick:function(){return r(e.data_url,t)}})]})})]})},t)})),s&&(0,a.jsx)("div",{className:"upload-list-picture-card-container upload-select-picture-card",children:(0,a.jsxs)("div",{onClick:l,children:[(0,a.jsx)(o.JO,{type:"upload"}),(0,a.jsx)("div",{children:"\u4e0a\u4f20"})]})})]})},K=function(e){var n=e.readOnly,t=e.maxNumber,r=e.onUploadView,i=e.fileList,l=e.onFileUpload,u=e.onFileRemoveAll,c=e.onFileUpdate,s=e.onFileRemove,d=t!==i.length,f=i.length>0;return(0,a.jsx)(o.aV,{header:!n&&(0,a.jsxs)("div",{children:[d&&(0,a.jsx)(o.zx,{icon:"upload",onClick:l,type:"primary",children:"\u4e0a\u4f20"}),f&&(0,a.jsx)(o.zx,{icon:"delete",type:"danger",onClick:u,children:"\u5168\u90e8\u5220\u9664"})]}),style:{marginTop:10},dataSource:i,renderItem:function(e,t){var i,l,u=null==e||null==(i=e.file)?void 0:i.type;return(0,a.jsx)(o.aV.Item,{extra:(0,a.jsxs)("div",{children:[!n&&(0,a.jsx)(o.JO,{style:{marginRight:10},type:"upload",onClick:function(){return c(t)}}),!n&&(0,a.jsx)(o.JO,{style:{marginRight:10},type:"delete",onClick:function(){return s(t)}}),q(u)&&(0,a.jsx)(o.JO,{type:"eye-o",onClick:function(){return r(e.data_url,t)}})]}),children:(0,a.jsx)("span",{children:null==e||null==(l=e.file)?void 0:l.name})})}})},Q=["onUploadChange","fileList","readOnly","maxNumber","uploadType"],$=function(e){var n=e.onUploadChange,t=e.fileList,u=void 0===t?[]:t,c=e.readOnly,d=void 0!==c&&c,f=e.maxNumber,p=void 0===f?3:f,h=e.uploadType,v=void 0===h?"list":h,m=(0,i.Z)(e,Q),x=l.useState(u),g=(0,s.Z)(x,2),b=g[0],y=g[1],j=l.useState(!1),k=(0,s.Z)(j,2),S=k[0],Z=k[1],w=l.useState(""),C=(0,s.Z)(w,2),O=C[0],P=C[1],N=function(e,n){P(e),Z(!0)},F=(0,r.Z)({},m,{maxNumber:p,value:b||[],multiple:!0,dataURLKey:"data_url",onChange:function(e,t){y(e),null==n||n(e)}});return(0,a.jsxs)("div",{style:{flex:1},children:[(0,a.jsx)(H,(0,r.Z)({},F,{children:function(e){var n,t,i,u=(0,r.Z)({readOnly:d,maxNumber:p,onUploadView:N},e);return(0,a.jsxs)(l.Fragment,{children:["list"===v?(0,a.jsx)(K,(0,r.Z)({},u)):(0,a.jsx)(G,(0,r.Z)({},u)),(null==e?void 0:e.errors)&&(0,a.jsxs)("div",{children:[(null==(n=e.errors)?void 0:n.maxNumber)&&(0,a.jsx)(o.v0,{type:"error",title:"\u6587\u4ef6\u4e0a\u4f20\u6570\u91cf\u5df2\u8fbe\u4e0a\u9650"}),(null==(t=e.errors)?void 0:t.accept)&&(0,a.jsx)(o.v0,{type:"error",title:"\u6587\u4ef6\u7c7b\u578b\u9519\u8bef"}),(null==(i=e.errors)?void 0:i.maxFileSize)&&(0,a.jsx)(o.v0,{type:"error",title:"\u6587\u4ef6\u5927\u5c0f\u8d85\u8fc7\u4e0a\u9650"})]})]})}})),(0,a.jsx)(o.u_,{isOpen:S,onClosed:function(){return Z(!1)},width:600,confirmButtonProps:{style:{display:"none"}},children:(0,a.jsx)("img",{crossOrigin:"anonymous",src:O,alt:"",style:{width:"100%",height:"100%"}})})]})};function ee(e,n,t,i){var u="";if("radio"===e||"searchSelect"===e||"select"===e){var c=t.filter((function(e){return e.value===n}))||[];c.length>0&&(u=c[0].label)}else if("checkbox"===e){var s,d=(0,z.Z)(t);try{for(d.s();!(s=d.n()).done;){var f=s.value;n.includes(f.value)&&(u+=""+f.label)}}catch(h){d.e(h)}finally{d.f()}}else if("switch"===e)u=n?"\u662f":"\u5426";else if("timePicker"===e)u=n&&(0,o.zW)("HH:mm:ss",new Date(n));else if("monthPicker"===e)u=n&&(0,o.zW)("YYYY-MM",new Date(n));else if("dateInput"===e)u=n&&(0,o.zW)((null==i?void 0:i.format)||"YYYY-MM-DD",new Date(n));else if("upload"===e){var p={readOnly:!0,fileList:n,value:n,uploadType:null==i?void 0:i.uploadType,onChange:function(){}};u=(0,a.jsx)($,(0,r.Z)({},p))}else if("selectMultiple"===e){u=(n&&n.length>0&&n.map((function(e){return e.label}))||[]).join(";")}else u="string"===typeof n||"number"===typeof n||l.isValidElement(n)?n:"";return u}var ne=function(e){var n=e.title,t=e.formDatas,i=e.readOnlyProps;return(0,a.jsx)(o.w5,(0,r.Z)({bordered:!0,title:n},i,{children:null==t?void 0:t.map((function(e,n){var t=e.hide,r=e.label,i=e.widget,l=e.initialValue,u=void 0===l?"":l,c=e.option,s=void 0===c?[]:c,d=e.readSpan,f=void 0===d?1:d,p=e.widgetProps,h=void 0===p?{}:p;return t?null:(0,a.jsx)(o.w5.Item,{span:f,label:r,children:ee(i,u,s,h)},n)}))}))},te=["option"],re=function(e){var n=e.option,t=(0,i.Z)(e,te);return(0,a.jsx)(o.XZ.Group,(0,r.Z)({},t,{children:n&&n.map((function(e){return(0,a.jsx)(o.XZ,{value:e.value,children:e.label},e.value)}))}))};var ie=function(e){var n=e.option,t=void 0===n?[]:n,r=e.onChange,i=e.onSelect,u=e.onSearch,c=e.onBlur,d=e.onClear,f=e.value,p=void 0===f?[]:f,h=e.loading,v=void 0===h||h,m=e.disabled,x=void 0!==m&&m,g=e.placeholder,b=void 0===g?"\u8bf7\u9009\u62e9":g,y=e.allowClear,j=void 0!==y&&y,k=e.noContent,S=e.showSearch,Z=void 0!==S&&S,w=e.maxCount,C=void 0===w?3:w,O=(0,l.useState)(p),P=(0,s.Z)(O,2),N=P[0],F=P[1],B=(0,l.useState)(""),A=(0,s.Z)(B,2),R=A[0],I=A[1],M=(0,l.useState)(!1),U=(0,s.Z)(M,2),V=U[0],z=U[1],J=N.length===C,_=function(e,n){var t=n.target;"search"===e&&(z(!0),I(t.value),null==u||u(t.value)),"blur"===e&&(I(""),z(!1),null==c||c()),"clean"===e&&(I(""),F([]),z(!1),null==d||d([]))},L=l.useMemo((function(){var e=N&&N.length>0&&N.map((function(e){return e.label}))||[];return V?R:e.join(";")}),[N,R,V]);function D(){return!V&&j&&N.length>0?"close":V&&v?"loading":"search"}return(0,a.jsx)(o.J2,{trigger:"focus",placement:"bottomLeft",content:t&&t.length>0?(0,a.jsx)(o.v2,{style:{minHeight:25,maxHeight:150,overflowY:"scroll",width:200},children:t.map((function(e,n){var l=N&&-1!==N.findIndex((function(n){return n.value===e.value}));return(0,a.jsx)(o.v2.Item,{style:{marginBottom:t.length-1===n?0:5},active:l,text:e.label,disabled:e.disabled,onClick:function(n){z(!1),n.preventDefault(),function(e){var n=(0,E.Z)(N);n.find((function(n){return n.value===e.value}))||J?n=n.filter((function(n){return n.value!==e.value})):n.push(e),F(n),null==r||r(n),null==i||i(e)}(e)}},e.value)}))}):k||(0,a.jsx)(o.aN,{loading:v,color:"black",children:(0,a.jsxs)("div",{style:{padding:10,height:70,width:200,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:12,color:"#888"},children:[(0,a.jsx)(o.JO,{type:"file-unknown",style:{fontSize:20}}),"\u6682\u65e0\u6570\u636e"]})}),visibleArrow:!1,children:(0,a.jsx)(o.II,{readOnly:!Z,disabled:x,placeholder:b,value:L,onChange:function(e){return _("search",e)},onBlur:function(e){return _("blur",e)},addonAfter:(0,a.jsx)(o.JO,{type:D(),spin:v,onClick:"close"===D()?_.bind(this,"clean"):void 0})})})},le=["hide","widgetProps","key","widget","label","initialValue"];function oe(e){var n=e.formDatas,t=void 0===n?[]:n,u=e.title,c=void 0===u?"":u,s=e.formType,d=void 0===s?"card":s,f=e.readOnly,p=void 0!==f&&f,h=e.customWidgetsList,v=void 0===h?{}:h,m=(0,l.useMemo)((function(){return function(e,n,t){void 0===n&&(n=[]),void 0===t&&(t={});var l=(0,r.Z)({input:o.II,radio:C,checkbox:re,switch:o.rs,select:Z,searchSelect:o.ul,selectMultiple:ie,textarea:o.gx,dateInput:o.Wr,timePicker:o.jI,monthPicker:o.lH,upload:$},t),u={};return n.forEach((function(n){if(e||delete n.readSpan,n){var t=n.hide,o=void 0!==t&&t,c=n.widgetProps,s=n.key,d=n.widget,f=n.label,p=n.initialValue,h=(0,i.Z)(n,le);if(!o){var v=s,m=l[d];u[v]=(0,r.Z)({label:f,children:(0,a.jsx)(m,(0,r.Z)({},c))},h,{initialValue:p})}}})),u}(p,t,v)}),[t]);return(0,l.useMemo)((function(){var n=(0,r.Z)({},e,{formfields:m}),t=p?(0,a.jsx)(ne,(0,r.Z)({},e)):(0,a.jsx)(V,(0,r.Z)({},n)),i=p?void 0:c;return"card"===d?(0,a.jsx)(o.Zb,{title:i,children:t}):"collapse"===d?(0,a.jsx)(o.UO,{title:i,activeKey:["1"],children:(0,a.jsx)(o.UO.Panel,{header:c,children:t},"1")}):(0,a.jsxs)(l.Fragment,{children:[i&&(0,a.jsx)("h3",{children:c}),t]})}),[d,t,c])}}}]);
//# sourceMappingURL=40.8b462080.chunk.js.map
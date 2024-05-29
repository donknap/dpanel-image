"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7523],{71566:function(Y,M,e){e.d(M,{Z:function(){return l}});var Z=e(62435),t=e(93246),$=e(88484),m=e(31418),g=e(72723),C=e(14726),r=e(86074);function a(O){var A=(0,Z.useRef)(null),s=m.Z.useApp(),o=function(){A.current&&(A.current.click(),A.current.onchange=function(u){if(!u||!u.target)return"";var E=new FileReader;E.onload=function(j){var D,L=(D=j.target)===null||D===void 0?void 0:D.result;if(L.indexOf("FROM ")<0){(0,t.YZ)(s,"\u5BFC\u5165Dockerfile\u6587\u4EF6\u9519\u8BEF");return}typeof O.onImport=="function"&&O.onImport(L)};var I=u.target;if(I.files)try{E.readAsText(I.files[0])}catch(j){(0,t.YZ)(s,"\u5BFC\u5165\u6587\u4EF6\u5FC5\u987B\u662F\u6587\u672C\u7C7B\u578B")}})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Z.Item,{name:"importFile",label:"Dockerfile",children:(0,r.jsx)(C.ZP,{icon:(0,r.jsx)($.Z,{}),block:!0,onClick:o,children:"\u5BFC\u5165\u672C\u5730Dockerfile\u6587\u4EF6"})}),(0,r.jsx)("input",{style:{display:"none"},type:"file",ref:A,name:"importFileInput"})]})}var B=e(20713),y=e(62370),b=e(5574),R=e.n(b),_=e(184),h=e(86615),f=e(97462),c=e(97961),i=e(34041);function d(O){var A=(0,Z.useState)([]),s=R()(A,2),o=s[0],p=s[1];return(0,Z.useEffect)(function(){(0,c.MF)().then(function(u){var E=Object.keys(u.data).map(function(I){return u.data[I]});p(E)})},[]),(0,r.jsx)(y.Z,{children:(0,r.jsxs)(_.a,{trigger:(0,r.jsx)(C.ZP,{block:!0,children:"\u4F7F\u7528\u6A21\u677F\u751F\u6210"}),onFinish:function(E){return new Promise(function(I,j){var D=E[E.language+"EnvVersion"].split("|"),L=R()(D,2),Q=L[0],q=L[1],F="FROM ".concat(Q,`
# \u5E94\u7528\u76EE\u5F55\u4F4D\u4E8E /app
# \u53EF\u901A\u7BA1\u5BB9\u5668 - \u6587\u4EF6\u7BA1\u7406, \u4E0A\u4F20\u4EE3\u7801\u81F3\u6B64\u76EE\u5F55\u5E76\u4FEE\u6539\u6743\u9650

WORKDIR /app
VOLUME [ "/app" ]
EXPOSE 80

# \u81EA\u5B9A\u4E49\u5B89\u88C5\u7EC4\u4EF6\u3001\u6269\u5C55\u6216\u662F\u5E93, \u4F8B\u5982:
# RUN apk add --no-cache --update vim
`);switch(E.language){case"php":F+=`
                
# \u7AD9\u70B9\u76EE\u5F55\u4F4D\u4E8E /app/wwwroot \u53EF\u4E0A\u4F20\u6216\u662F\u4FEE\u6539\u7AD9\u70B9\u6587\u4EF6
# nginx \u914D\u7F6E\u4F4D\u4E8E /app/nginx/ \u53EF\u4FEE\u6539\u589E\u52A0\u81EA\u5B9A\u4E49\u914D\u7F6E
# \u901A\u8FC7\u8BBF\u95EE\u5BB9\u5668\u8FD0\u884C\u6620\u5C04\u7AEF\u53E3\uFF0C\u67E5\u770B\u73AF\u5883\u53CA\u6269\u5C55\u4FE1\u606F

`,E.language=="php"&&E.phpExt&&(F+="RUN apk add --no-cache --update ",E.phpExt.map(function(K){F+="php".concat(q,"-").concat(K," ")}));break;case"golang":F+=`
# \u53EF\u4EE5\u4FEE\u6539 RUN_COMMAND \u73AF\u5883\u53D8\u91CF, \u66F4\u6539\u542F\u52A8\u6267\u884C\u547D\u4EE4
ENV RUN_COMMAND="go version"`;break;default:break}O.onFinish(F),I(!0)})},children:[(0,r.jsx)(h.Z.Group,{radioType:"button",name:"language",label:"\u7A0B\u5E8F\u8BED\u8A00",options:o.map(function(u){return{label:u.name,value:u.name}}),required:!0}),(0,r.jsx)(f.Z,{name:["language"],children:function(E){var I=E.language;return I?(0,r.jsx)(r.Fragment,{children:o.map(function(j){if(j.name==I)return(0,r.jsxs)("div",{children:[(0,r.jsx)(y.Z,{name:"".concat(j.name,"EnvVersion"),label:"\u73AF\u5883\u7248\u672C",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7A0B\u5E8F\u8FD0\u884C\u7684\u73AF\u5883"}],children:(0,r.jsx)(i.Z,{options:j.env.map(function(D){return{label:D.name,value:D.baseImage}}),placeholder:"\u8BF7\u9009\u62E9\u5177\u4F53\u7684\u73AF\u5883\u7248\u672C"},"".concat(j.name,"Select"))},j.name),j.name=="php"&&(0,r.jsx)(y.Z,{label:"php\u6269\u5C55",name:"phpExt",children:(0,r.jsx)(i.Z,{options:j.ext.map(function(D){return{label:D,value:D}}),mode:"multiple",placeholder:"\u8BF7\u9009\u62E9\u8981\u5B89\u88C5\u7684php\u6269\u5C55"},"phpExtSelect")},"phpExt")]},"envSelect")})}):(0,r.jsx)(r.Fragment,{})}})]})})}function l(O){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{onImport:function(s){var o;return(o=O.createFormRef.current)===null||o===void 0||o.setFieldValue("buildDockerfile",s),!0}}),(0,r.jsx)(d,{onFinish:function(s){var o;(o=O.createFormRef.current)===null||o===void 0||o.setFieldValue("buildDockerfile",s)}}),(0,r.jsx)(y.Z,{shouldUpdate:!0,children:function(s){var o=s.getFieldValue;return(0,r.jsx)(y.Z,{name:"buildDockerfile",children:(0,r.jsx)(B.ZP,{value:o("buildDockerfile"),onChange:function(u){var E;(E=O.createFormRef.current)===null||E===void 0||E.setFieldValue("buildDockerfile",u)},height:"1000px",theme:"light",style:{marginBottom:"20px"}})})}})]})}},33867:function(Y,M,e){e.r(M),e.d(M,{default:function(){return q}});var Z=e(15009),t=e.n(Z),$=e(99289),m=e.n($),g=e(5574),C=e.n(g),r=e(5966),a=e(86074);function B(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Z,{fieldProps:{min:2,max:255},rules:[{required:!0}],required:!0,placeholder:"\u6307\u5B9AGit\u5730\u5740\uFF0C\u79C1\u6709\u4ED3\u5E93\u8BF7\u9644\u52A0\u6743\u9650\u3002\u4EC5\u652F\u6301Master\u5206\u652F",label:"Git\u4ED3\u5E93\u5730\u5740",name:"buildGit"})})}var y=e(97961),b=e(1677);function R(F){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(b.Z,{max:1,label:F.label,required:!0,rules:[{required:!0}],fieldProps:{name:"file",accept:F.accept,action:"/api/common/attach/upload",headers:{Authorization:"Bearer "+localStorage.getItem("token")},onRemove:function(W){return new Promise(function(k){var G;(0,y._2)({path:(G=W.response.data.path)!==null&&G!==void 0?G:""}).then(function(H){k(!0)})})}},name:F.name})})}var _=e(38345),h=e(20713),f=e(54006),c=e(78957),i=e(14726),d=e(62435),l="";function O(F){(0,d.useEffect)(function(){l=""},[F]);var K=(0,f.useNavigate)(),W=(0,d.useState)(""),k=C()(W,2),G=k[0],H=k[1],x=(0,d.useRef)({}),N=(0,f.useModel)("subscriber");return(0,d.useEffect)(function(){N.addDataHandler("imageBuild",function(){var X=N.getDataByType("imageBuild");if(X&&(X.map(function(S){S.data.TaskId=="".concat(F.imageId)&&S.data.Stream&&(l+=S.data.Stream.stream)}),H(l),x&&x.current&&x.current.view)){var V;(V=x.current.view)===null||V===void 0||V.scrollDOM.scroll(0,99999)}})},[x.current]),(0,a.jsxs)(_.Z,{title:"\u6784\u5EFA\u65E5\u5FD7",subTitle:"\u4F60\u4E5F\u53EF\u4EE5\u8DF3\u8F6C\u81F3\u5217\u8868\u9875\uFF0C\u7B49\u5F85\u67E5\u770B\u6784\u5EFA\u65E5\u5FD7",children:[(0,a.jsx)(h.ZP,{ref:x,theme:"dark",style:{marginTop:"10px",backgroundColor:"#282c34"},height:"500px",value:G}),(0,a.jsx)(c.Z,{style:{marginTop:10},children:(0,a.jsx)(i.ZP,{type:"primary",onClick:function(){K("/image/list")},children:"\u5B8C\u6210&\u8DF3\u8F6C\u81F3\u5217\u8868"})})]})}var A=e(71566),s=e(75870),o=e(97462),p=e(34041),u=e(25449);function E(F){var K=(0,d.useState)(""),W=C()(K,2),k=W[0],G=W[1],H=(0,d.useState)([]),x=C()(H,2),N=x[0],X=x[1],V=function(v){var P=String(v);P!=""&&(P+="/"),G(P)};return(0,d.useEffect)(function(){var S=[{value:"",label:"\u672C\u5730"}];(0,s.Ot)().then(function(v){v&&v.data.list.map(function(P){P.username=="anonymous"&&!F.showAnonymous||S.push({value:P.serverAddress,label:P.title+"("+P.serverAddress+")"})}),X(S)})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.Z,{label:"\u955C\u50CF\u4ED3\u5E93",tooltip:(0,a.jsxs)(a.Fragment,{children:["\u63A8\u9001\u524D\u8BF7\u4FDD\u8BC1\u4ED3\u5E93\u4E2D\u6709\u6307\u5B9A\u7684\u547D\u540D\u7A7A\u95F4, \u5982\u6CA1\u6709\u8BF7\u5148 ",(0,a.jsx)("a",{href:"",target:"_blank",children:"\u6DFB\u52A0\u4ED3\u5E93"})]}),name:"imageRegistry",initialValue:"",children:(0,a.jsx)(p.Z,{onChange:function(v){V(v)},options:N})}),(0,a.jsx)(o.Z,{name:["imageRegistry"],children:function(v){var P=v.imageRegistry;return(0,a.jsx)(r.Z,{fieldProps:{min:2,max:255,addonBefore:k||P},rules:[{required:!0}],required:!0,tooltip:"\u4F8B\u5982: name:tag\u3001namespace/name:tag\u3001registry/namespace/name:tag",placeholder:"\u53EA\u80FD\u4F7F\u7528\u5C0F\u5199\u82F1\u6587\u5B57\u7B26\u3001\u6570\u5B57\u3001_\u3001-\u3001",label:"\u955C\u50CF\u540D\u79F0",name:"imageTag"})}})]})}var I=e(18148),j=e(97269),D=e(2236),L=e(90672),Q=e(86615);function q(){var F=(0,d.useRef)(),K=(0,d.useState)([]),W=C()(K,2),k=W[0],G=W[1],H=(0,f.useSearchParams)(),x=C()(H,2),N=x[0],X=x[1],V=(0,d.useState)("dockerfile"),S=C()(V,2),v=S[0],P=S[1],te=(0,f.useNavigate)(),oe=(0,d.useState)(0),ne=C()(oe,2),ie=ne[0],de=ne[1];return(0,d.useEffect)(function(){var w,U=(w=N.get("id"))!==null&&w!==void 0?w:0;U&&(0,I.T8)({id:parseInt(U)}).then(function(n){var z;P(n.data.task.buildType),n.data.task.buildZip&&G([{name:n.data.task.buildZip,fileName:n.data.task.buildZip,uid:"".concat(n.data.task.id),type:"zip",response:{data:{path:n.data.task.buildZip}}}]),(z=F.current)===null||z===void 0||z.setFieldsValue({imageTag:n.data.task.tag,imageRegistry:n.data.task.registry,uploadType:n.data.task.buildType,buildRoot:n.data.task.buildRoot,buildGit:n.data.task.buildGit,buildDockerfile:n.data.task.buildDockerfile})})},[]),(0,a.jsx)(_.Z,{direction:"column",ghost:!0,gutter:[0,10],children:ie==0?(0,a.jsx)(_.Z,{bordered:!0,headerBordered:!0,children:(0,a.jsxs)(j.A,{submitter:{render:function(U,n){return(0,a.jsx)(D.S,{children:n})}},onFinish:function(){var w=m()(t()().mark(function U(n){var z,pe,ee,ce,ue,se,J,re,ae,le;return t()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(v!="containerTar"){T.next=8;break}return T.next=3,(0,y.vC)({tag:n.imageTag,registry:n.imageRegistry,tar:(z=n.containerTar[0].response.data.path)!==null&&z!==void 0?z:"",cmd:n.cmd,workDir:n.workDir,expose:n.expose?n.expose.split(`
`):[],env:n.env?n.env.split(`
`):[],volume:n.volume?n.volume.split(`
`):[]});case 3:return pe=T.sent,te("/image/list"),T.abrupt("return",!0);case 8:if(v!="imageTar"){T.next=16;break}return T.next=11,(0,y.hG)({tag:n.imageTag,registry:n.imageRegistry,tar:(ee=n.imageTar[0].response.data.path)!==null&&ee!==void 0?ee:""});case 11:return ce=T.sent,te("/image/list"),T.abrupt("return",!0);case 16:return se=(ue=N.get("id"))!==null&&ue!==void 0?ue:"0",J=k&&k[0]?k[0].fileName:"",re={id:parseInt(se),tag:n.imageTag,registry:n.imageRegistry,buildRoot:n.buildRoot,buildDockerfile:n.buildDockerfile,buildZip:J!=null?J:"",buildGit:n.buildGit,buildTemplate:"",buildType:v},n.buildZip&&n.buildZip.length>0&&(re.buildZip=(ae=n.buildZip[0].response.data.path)!==null&&ae!==void 0?ae:""),T.next=22,(0,y.fN)(re);case 22:return le=T.sent,de(le.data.imageId),T.abrupt("return",!1);case 25:case"end":return T.stop()}},U)}));return function(U){return w.apply(this,arguments)}}(),formRef:F,children:[(0,a.jsx)(E,{showAnonymous:!1}),(0,a.jsx)(o.Z,{name:["uploadType"],children:function(U){var n=U.uploadType;if(n=="containerTar")return[(0,a.jsx)(r.Z,{tooltip:"\u6307\u5B9A\u5BFC\u5165\u540E\u7684\u955C\u50CF\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u4E00\u822C\u6307\u5411\u4EE3\u7801\u7684\u6240\u5728\u76EE\u5F55",label:"\u5DE5\u4F5C\u76EE\u5F55",name:"workDir",placeholder:"\u9ED8\u8BA4\u4E3A / \u76EE\u5F55"},"workDir"),(0,a.jsx)(r.Z,{required:!0,tooltip:"\u901A\u8FC7\u5BB9\u5668\u5BFC\u5165\u955C\u50CF\u65F6\uFF0C\u5FC5\u987B\u6307\u5B9A\u542F\u52A8\u547D\u4EE4\uFF0C\u5426\u5219\u518D\u521B\u5EFA\u65F6\u65E0\u6CD5\u542F\u52A8",rules:[{required:!0}],label:"CMD",name:"cmd"},"cmd"),(0,a.jsx)(L.Z,{tooltip:"\u6307\u5B9A\u5BFC\u5165\u540E\u7684\u955C\u50CF\u5BF9\u5916\u66B4\u9732\u7684\u7AEF\u53E3\uFF0C\u4E00\u884C\u6307\u5B9A\u4E00\u4E2A\u7AEF\u53E3",label:"\u66B4\u9732\u7AEF\u53E3",name:"expose",placeholder:`80 
9000`},"expose"),(0,a.jsx)(L.Z,{tooltip:"\u6307\u5B9A\u5BFC\u5165\u540E\u7684\u955C\u50CF\u9700\u8981\u914D\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u4E00\u884C\u6307\u5B9A\u4E00\u4E2A\u73AF\u5883\u53D8\u91CF",label:"\u73AF\u5883\u53D8\u91CF",name:"env",placeholder:`TEST_VALUE=123 
TEST_NO_VALUE=`},"env"),(0,a.jsx)(L.Z,{tooltip:"\u6307\u5B9A\u5BFC\u5165\u540E\u7684\u955C\u50CF\u9700\u8981\u6301\u4E45\u5316\u7684\u76EE\u5F55\uFF0C\u4E00\u884C\u6307\u5B9A\u4E00\u4E2A\u76EE\u5F55",label:"\u5B58\u50A8\u5377\u76EE\u5F55",name:"volume",placeholder:`/app 
/home`},"volume")];if(n!="imageTar")return(0,a.jsx)(r.Z,{name:"buildRoot",label:"\u6784\u5EFA\u76EE\u5F55",tooltip:"\u6784\u5EFA\u76EE\u5F55\u662F\u6307Dockerfile\u6240\u5728\u7684\u5B50\u76EE\u5F55\uFF0C\u9ED8\u8BA4\u4E3A\u6839\u76EE\u5F55\u5F00\u59CB",fieldProps:{addonBefore:"\u9ED8\u8BA4\u4E3A\u5305\u5185\u76EE\u5F55\u5F00\u59CB\uFF08./\uFF09"}})}}),(0,a.jsx)(Q.Z.Group,{name:"uploadType",label:"\u6784\u5EFA\u65B9\u5F0F",initialValue:v,options:[{label:"Dockerfile",value:"dockerfile"},{label:"Zip\u6E90\u7801\u5305",value:"zip"},{label:"Git\u6E90\u7801\u4ED3\u5E93",value:"git"},{label:"\u5BFC\u5165\u5BB9\u5668Tar\u5305",value:"containerTar"},{label:"\u5BFC\u5165\u955C\u50CFTar\u5305",value:"imageTar"}],fieldProps:{onChange:function(U){P(U.target.value)}}}),v=="zip"&&(0,a.jsx)(R,{label:"\u4E0A\u4F20\u6784\u5EFA\u5305 (\u53EA\u5141\u8BB8\u4E0A\u4F20 .zip \u6587\u4EF6\uFF0C\u4E14\u4E0E\u5305\u4E2D\u7684 Dockerfile \u6307\u5B9A\u7684\u76EE\u5F55\u4FDD\u6301\u4E00\u81F4)",name:"buildZip",accept:".zip"}),v=="containerTar"&&(0,a.jsx)(R,{label:"\u5BFC\u5165\u5BB9\u5668\u5305\uFF08\u53EA\u5141\u8BB8\u4E0A\u4F20 .tar \u6587\u4EF6\uFF0C\u901A\u8FC7\u5BFC\u51FA\u5BB9\u5668\u751F\u6210\uFF09",name:"containerTar",accept:".tar"}),v=="imageTar"&&(0,a.jsx)(R,{label:"\u5BFC\u5165\u955C\u50CF\u5305\uFF08\u53EA\u5141\u8BB8\u4E0A\u4F20 .tar \u6587\u4EF6\uFF0C\u901A\u8FC7\u5BFC\u51FA\u955C\u50CF\u751F\u6210\uFF09",name:"imageTar",accept:".tar"}),v=="git"&&(0,a.jsx)(B,{}),v=="dockerfile"&&(0,a.jsx)(A.Z,{createFormRef:F})]})}):(0,a.jsx)(O,{imageId:ie})})}},97961:function(Y,M,e){e.d(M,{MF:function(){return h},_2:function(){return R},fN:function(){return C},hG:function(){return y},vC:function(){return a}});var Z=e(15009),t=e.n(Z),$=e(99289),m=e.n($),g=e(54006);function C(c){return r.apply(this,arguments)}function r(){return r=m()(t()().mark(function c(i){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,g.request)("/api/app/image/create-by-dockerfile",{method:"POST",data:i}));case 1:case"end":return l.stop()}},c)})),r.apply(this,arguments)}function a(c){return B.apply(this,arguments)}function B(){return B=m()(t()().mark(function c(i){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,g.request)("/api/app/image/import-by-container-tar",{method:"POST",data:i}));case 1:case"end":return l.stop()}},c)})),B.apply(this,arguments)}function y(c){return b.apply(this,arguments)}function b(){return b=m()(t()().mark(function c(i){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,g.request)("/api/app/image/import-by-image-tar",{method:"POST",data:i}));case 1:case"end":return l.stop()}},c)})),b.apply(this,arguments)}function R(c){return _.apply(this,arguments)}function _(){return _=m()(t()().mark(function c(i){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,g.request)("/api/common/attach/delete",{method:"POST",data:i});case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},c)})),_.apply(this,arguments)}function h(){return f.apply(this,arguments)}function f(){return f=m()(t()().mark(function c(){return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,g.request)("/api/app/image/get-template-list",{method:"POST"}));case 1:case"end":return d.stop()}},c)})),f.apply(this,arguments)}},18148:function(Y,M,e){e.d(M,{$q:function(){return h},KG:function(){return C},T8:function(){return R},Xn:function(){return y},ao:function(){return c},c5:function(){return O},c7:function(){return d}});var Z=e(15009),t=e.n(Z),$=e(99289),m=e.n($),g=e(54006);function C(s){return r.apply(this,arguments)}function r(){return r=m()(t()().mark(function s(o){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,g.request)("/api/app/image/get-list",{method:"POST",data:o}));case 1:case"end":return u.stop()}},s)})),r.apply(this,arguments)}function a(s){return B.apply(this,arguments)}function B(){return B=_asyncToGenerator(_regeneratorRuntime().mark(function s(o){return _regeneratorRuntime().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,request("/api/app/log/image-build",{method:"POST",data:o});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},s)})),B.apply(this,arguments)}function y(s){return b.apply(this,arguments)}function b(){return b=m()(t()().mark(function s(o){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,g.request)("/api/app/image/get-list-build",{method:"POST",data:o}));case 1:case"end":return u.stop()}},s)})),b.apply(this,arguments)}function R(s){return _.apply(this,arguments)}function _(){return _=m()(t()().mark(function s(o){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,g.request)("/api/app/image/get-build-task",{method:"POST",data:o});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},s)})),_.apply(this,arguments)}function h(s){return f.apply(this,arguments)}function f(){return f=m()(t()().mark(function s(o){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,g.request)("/api/app/image/delete-build-task",{method:"POST",data:o});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},s)})),f.apply(this,arguments)}function c(s){return i.apply(this,arguments)}function i(){return i=m()(t()().mark(function s(o){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,g.request)("/api/app/image/image-delete",{method:"POST",data:o});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},s)})),i.apply(this,arguments)}function d(){return l.apply(this,arguments)}function l(){return l=m()(t()().mark(function s(){return t()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,g.request)("/api/app/image/image-prune",{method:"POST"});case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},s)})),l.apply(this,arguments)}function O(){return A.apply(this,arguments)}function A(){return A=m()(t()().mark(function s(){return t()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,g.request)("/api/app/image/build-prune",{method:"POST"});case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},s)})),A.apply(this,arguments)}},75870:function(Y,M,e){e.d(M,{Ot:function(){return C},ZH:function(){return a},ix:function(){return y},t1:function(){return R}});var Z=e(15009),t=e.n(Z),$=e(99289),m=e.n($),g=e(54006);function C(h){return r.apply(this,arguments)}function r(){return r=m()(t()().mark(function h(f){return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,g.request)("/api/common/registry/get-list",{method:"POST",data:f}));case 1:case"end":return i.stop()}},h)})),r.apply(this,arguments)}function a(h){return B.apply(this,arguments)}function B(){return B=m()(t()().mark(function h(f){return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,g.request)("/api/common/registry/create",{method:"POST",data:f}));case 1:case"end":return i.stop()}},h)})),B.apply(this,arguments)}function y(h){return b.apply(this,arguments)}function b(){return b=m()(t()().mark(function h(f){return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,g.request)("/api/common/registry/delete",{method:"POST",data:f}));case 1:case"end":return i.stop()}},h)})),b.apply(this,arguments)}function R(h){return _.apply(this,arguments)}function _(){return _=m()(t()().mark(function h(f){return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,g.request)("/api/common/registry/get-detail",{method:"POST",data:f}));case 1:case"end":return i.stop()}},h)})),_.apply(this,arguments)}}}]);

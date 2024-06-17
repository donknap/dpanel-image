"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7523],{71566:function(X,O,e){e.d(O,{Z:function(){return o}});var P=e(62435),i=e(93246),S=e(88484),c=e(31418),p=e(72723),T=e(14726),a=e(86074);function r(I){var A=(0,P.useRef)(null),b=c.Z.useApp(),F=function(){A.current&&(A.current.click(),A.current.onchange=function(v){if(!v||!v.target)return"";var t=new FileReader;t.onload=function(l){var u,L=(u=l.target)===null||u===void 0?void 0:u.result;if(L.indexOf("FROM ")<0){(0,i.YZ)(b,"\u5BFC\u5165Dockerfile\u6587\u4EF6\u9519\u8BEF");return}typeof I.onImport=="function"&&I.onImport(L)};var d=v.target;if(d.files)try{t.readAsText(d.files[0])}catch(l){(0,i.YZ)(b,"\u5BFC\u5165\u6587\u4EF6\u5FC5\u987B\u662F\u6587\u672C\u7C7B\u578B")}})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.Z.Item,{name:"importFile",label:"Dockerfile",children:(0,a.jsx)(T.ZP,{icon:(0,a.jsx)(S.Z,{}),block:!0,onClick:F,children:"\u5BFC\u5165\u672C\u5730Dockerfile\u6587\u4EF6"})}),(0,a.jsx)("input",{style:{display:"none"},type:"file",ref:A,name:"importFileInput"})]})}var B=e(20713),_=e(62370),y=e(5574),j=e.n(y),m=e(184),g=e(86615),E=e(97462),f=e(97961),s=e(34041);function h(I){var A=(0,P.useState)([]),b=j()(A,2),F=b[0],w=b[1];return(0,P.useEffect)(function(){(0,f.MF)().then(function(v){var t=Object.keys(v.data).map(function(d){return v.data[d]});w(t)})},[]),(0,a.jsx)(_.Z,{children:(0,a.jsxs)(m.a,{trigger:(0,a.jsx)(T.ZP,{block:!0,children:"\u4F7F\u7528\u6A21\u677F\u751F\u6210"}),onFinish:function(t){return new Promise(function(d,l){var u=t[t.language+"EnvVersion"].split("|"),L=j()(u,2),J=L[0],Q=L[1],C="FROM ".concat(J,`
# \u5E94\u7528\u76EE\u5F55\u4F4D\u4E8E /app
# \u53EF\u901A\u7BA1\u5BB9\u5668 - \u6587\u4EF6\u7BA1\u7406, \u4E0A\u4F20\u4EE3\u7801\u81F3\u6B64\u76EE\u5F55\u5E76\u4FEE\u6539\u6743\u9650

WORKDIR /app
VOLUME [ "/app" ]
EXPOSE 80

# \u81EA\u5B9A\u4E49\u5B89\u88C5\u7EC4\u4EF6\u3001\u6269\u5C55\u6216\u662F\u5E93, \u4F8B\u5982:
# RUN apk add --no-cache --update vim
`);switch(t.language){case"php":C+=`
                
# \u7AD9\u70B9\u76EE\u5F55\u4F4D\u4E8E /app/wwwroot \u53EF\u4E0A\u4F20\u6216\u662F\u4FEE\u6539\u7AD9\u70B9\u6587\u4EF6
# nginx \u914D\u7F6E\u4F4D\u4E8E /app/nginx/ \u53EF\u4FEE\u6539\u589E\u52A0\u81EA\u5B9A\u4E49\u914D\u7F6E
# \u901A\u8FC7\u8BBF\u95EE\u5BB9\u5668\u8FD0\u884C\u6620\u5C04\u7AEF\u53E3\uFF0C\u67E5\u770B\u73AF\u5883\u53CA\u6269\u5C55\u4FE1\u606F

`,t.language=="php"&&t.phpExt&&(C+="RUN apk add --no-cache --update ",t.phpExt.map(function(N){C+="php".concat(Q,"-").concat(N," ")}));break;case"golang":C+=`
# \u53EF\u4EE5\u4FEE\u6539 RUN_COMMAND \u73AF\u5883\u53D8\u91CF, \u66F4\u6539\u542F\u52A8\u6267\u884C\u547D\u4EE4
ENV RUN_COMMAND="go version"`;break;default:break}I.onFinish(C),d(!0)})},children:[(0,a.jsx)(g.Z.Group,{radioType:"button",name:"language",label:"\u7A0B\u5E8F\u8BED\u8A00",options:F.map(function(v){return{label:v.name,value:v.name}}),required:!0}),(0,a.jsx)(E.Z,{name:["language"],children:function(t){var d=t.language;return d?(0,a.jsx)(a.Fragment,{children:F.map(function(l){if(l.name==d)return(0,a.jsxs)("div",{children:[(0,a.jsx)(_.Z,{name:"".concat(l.name,"EnvVersion"),label:"\u73AF\u5883\u7248\u672C",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7A0B\u5E8F\u8FD0\u884C\u7684\u73AF\u5883"}],children:(0,a.jsx)(s.Z,{options:l.env.map(function(u){return{label:u.name,value:u.baseImage}}),placeholder:"\u8BF7\u9009\u62E9\u5177\u4F53\u7684\u73AF\u5883\u7248\u672C"},"".concat(l.name,"Select"))},l.name),l.name=="php"&&(0,a.jsx)(_.Z,{label:"php\u6269\u5C55",name:"phpExt",children:(0,a.jsx)(s.Z,{options:l.ext.map(function(u){return{label:u,value:u}}),mode:"multiple",placeholder:"\u8BF7\u9009\u62E9\u8981\u5B89\u88C5\u7684php\u6269\u5C55"},"phpExtSelect")},"phpExt")]},"envSelect")})}):(0,a.jsx)(a.Fragment,{})}})]})})}function o(I){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{onImport:function(b){var F;return(F=I.createFormRef.current)===null||F===void 0||F.setFieldValue("buildDockerfile",b),!0}}),(0,a.jsx)(h,{onFinish:function(b){var F;(F=I.createFormRef.current)===null||F===void 0||F.setFieldValue("buildDockerfile",b)}}),(0,a.jsx)(_.Z,{shouldUpdate:!0,children:function(b){var F=b.getFieldValue;return(0,a.jsx)(_.Z,{name:"buildDockerfile",children:(0,a.jsx)(B.ZP,{value:F("buildDockerfile"),onChange:function(v){var t;(t=I.createFormRef.current)===null||t===void 0||t.setFieldValue("buildDockerfile",v)},height:"600px",theme:"dark",style:{marginBottom:"20px"}})})}})]})}},96042:function(X,O,e){e.d(O,{Z:function(){return a}});var P=e(5574),i=e.n(P),S=e(75870),c=e(34041),p=e(62435),T=e(86074);function a(r){var B=(0,p.useState)([]),_=i()(B,2),y=_[0],j=_[1];return(0,p.useEffect)(function(){(0,S.Ot)().then(function(m){m&&j(m.data.list)})},[]),(0,T.jsx)(c.Z,{onChange:function(g){r.onChange&&r.onChange(y[g])},placeholder:"\u9009\u62E9\u955C\u50CF\u4ED3\u5E93\uFF0C\u672C\u5730\u4F7F\u7528\u7559\u7A7A\u5373\u53EF",options:y.map(function(m,g){return{value:g,label:m.title+"("+m.serverAddress+")"}})})}},33867:function(X,O,e){e.r(O),e.d(O,{default:function(){return Q}});var P=e(15009),i=e.n(P),S=e(99289),c=e.n(S),p=e(5574),T=e.n(p),a=e(5966),r=e(86074);function B(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.Z,{fieldProps:{min:2,max:255},rules:[{required:!0}],required:!0,placeholder:"\u6307\u5B9AGit\u5730\u5740\uFF0C\u79C1\u6709\u4ED3\u5E93\u8BF7\u9644\u52A0\u6743\u9650\u3002\u4EC5\u652F\u6301Master\u5206\u652F",label:"Git\u4ED3\u5E93\u5730\u5740",name:"buildGit"})})}var _=e(97961),y=e(1677);function j(C){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(y.Z,{max:1,label:C.label,required:!0,rules:[{required:!0}],fieldProps:{name:"file",accept:C.accept,action:"/api/common/attach/upload",headers:{Authorization:"Bearer "+localStorage.getItem("token")},onRemove:function($){return new Promise(function(Z){var W;(0,_._2)({path:(W=$.response.data.path)!==null&&W!==void 0?W:""}).then(function(V){Z(!0)})})}},name:C.name})})}var m=e(38345),g=e(20713),E=e(54006),f=e(78957),s=e(14726),h=e(62435),o="";function I(C){(0,h.useEffect)(function(){o=""},[C]);var N=(0,E.useNavigate)(),$=(0,h.useState)(""),Z=T()($,2),W=Z[0],V=Z[1],x=(0,h.useRef)({}),M=(0,E.useModel)("subscriber");return(0,h.useEffect)(function(){M.addDataHandler("imageBuild",function(){var U=M.getDataByType("imageBuild");if(U&&(U.map(function(z){z.data.TaskId=="".concat(C.imageId)&&z.data.Stream&&(o+=z.data.Stream.stream)}),V(o),x&&x.current&&x.current.view)){var H;(H=x.current.view)===null||H===void 0||H.scrollDOM.scroll(0,99999)}})},[x.current]),(0,r.jsxs)(m.Z,{title:"\u6784\u5EFA\u65E5\u5FD7",subTitle:"\u4F60\u4E5F\u53EF\u4EE5\u8DF3\u8F6C\u81F3\u5217\u8868\u9875\uFF0C\u7B49\u5F85\u67E5\u770B\u6784\u5EFA\u65E5\u5FD7",children:[(0,r.jsx)(g.ZP,{ref:x,theme:"dark",style:{marginTop:"10px",backgroundColor:"#282c34"},height:"500px",value:W}),(0,r.jsx)(f.Z,{style:{marginTop:10},children:(0,r.jsx)(s.ZP,{type:"primary",onClick:function(){N("/image/list")},children:"\u5B8C\u6210&\u8DF3\u8F6C\u81F3\u5217\u8868"})})]})}var A=e(71566),b=e(97462),F=e(25449),w=e(96042);function v(C){var N=(0,h.useState)(""),$=T()(N,2),Z=$[0],W=$[1],V=function(M){var U=String(M.serverAddress);U!=""&&(U+="/"),W(U)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(F.Z,{label:"\u955C\u50CF\u4ED3\u5E93",tooltip:(0,r.jsxs)(r.Fragment,{children:["\u63A8\u9001\u524D\u8BF7\u4FDD\u8BC1\u4ED3\u5E93\u4E2D\u6709\u6307\u5B9A\u7684\u547D\u540D\u7A7A\u95F4, \u5982\u6CA1\u6709\u8BF7\u5148 ",(0,r.jsx)("a",{href:"",target:"_blank",children:"\u6DFB\u52A0\u4ED3\u5E93"})]}),name:"imageRegistry",initialValue:"",children:(0,r.jsx)(w.Z,{onChange:function(M){V(M)}})}),(0,r.jsx)(b.Z,{name:["imageRegistry"],children:function(M){var U=M.imageRegistry;return(0,r.jsx)(a.Z,{fieldProps:{min:2,max:255,addonBefore:Z||U},rules:[{required:!0}],required:!0,tooltip:"\u4F8B\u5982: name:tag\u3001namespace/name:tag\u3001registry/namespace/name:tag",placeholder:"\u53EA\u80FD\u4F7F\u7528\u5C0F\u5199\u82F1\u6587\u5B57\u7B26\u3001\u6570\u5B57\u3001_\u3001-\u3001",label:"\u955C\u50CFTag",name:"imageTag"})}})]})}var t=e(18148),d=e(97269),l=e(2236),u=e(86615),L=e(90672),J=e(91845);function Q(){var C=(0,h.useRef)(),N=(0,h.useState)([]),$=T()(N,2),Z=$[0],W=$[1],V=(0,E.useSearchParams)(),x=T()(V,2),M=x[0],U=x[1],H=(0,h.useState)("dockerfile"),z=T()(H,2),K=z[0],te=z[1],ne=(0,E.useNavigate)(),de=(0,h.useState)(0),ie=T()(de,2),se=ie[0],pe=ie[1];return(0,h.useEffect)(function(){var G,R=(G=M.get("id"))!==null&&G!==void 0?G:0;R&&(0,t.T8)({id:parseInt(R)}).then(function(n){var k;te(n.data.task.buildType),n.data.task.buildZip&&W([{name:n.data.task.buildZip,fileName:n.data.task.buildZip,uid:"".concat(n.data.task.id),type:"zip",response:{data:{path:n.data.task.buildZip}}}]),(k=C.current)===null||k===void 0||k.setFieldsValue({title:n.data.task.title,imageTag:n.data.task.tag,imageRegistry:n.data.task.registry,uploadType:n.data.task.buildType,buildRoot:n.data.task.buildRoot,buildGit:n.data.task.buildGit,buildDockerfile:n.data.task.buildDockerfile})})},[]),(0,r.jsx)(m.Z,{direction:"column",ghost:!0,gutter:[0,10],children:se==0?(0,r.jsx)(m.Z,{bordered:!0,headerBordered:!0,children:(0,r.jsxs)(d.A,{submitter:{render:function(R,n){return(0,r.jsx)(l.S,{children:n})}},onFinish:function(){var G=c()(i()().mark(function R(n){var k,q,ee,ce,ue,le,Y,re,ae,oe;return i()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:if(K!="containerTar"){D.next=8;break}return D.next=3,(0,_.vC)({tag:n.imageTag,registry:n.imageRegistry,tar:(k=n.containerTar[0].response.data.path)!==null&&k!==void 0?k:"",cmd:n.cmd,workDir:n.workDir,expose:n.expose?n.expose.split(`
`):[],env:n.env?n.env.split(`
`):[],volume:n.volume?n.volume.split(`
`):[]});case 3:return q=D.sent,ne("/image/list"),D.abrupt("return",!0);case 8:if(K!="imageTar"){D.next=16;break}return D.next=11,(0,_.hG)({tag:n.imageTag,registry:n.imageRegistry,tar:(ee=n.imageTar[0].response.data.path)!==null&&ee!==void 0?ee:""});case 11:return ce=D.sent,ne("/image/list"),D.abrupt("return",!0);case 16:return le=(ue=M.get("id"))!==null&&ue!==void 0?ue:"0",Y=Z&&Z[0]?Z[0].fileName:"",re={id:parseInt(le),tag:n.imageTag,title:n.title,registry:n.imageRegistry,buildRoot:n.buildRoot,buildDockerfile:n.buildDockerfile,buildZip:Y!=null?Y:"",buildGit:n.buildGit,buildType:K},n.buildZip&&n.buildZip.length>0&&(re.buildZip=(ae=n.buildZip[0].response.data.path)!==null&&ae!==void 0?ae:""),D.next=22,(0,_.fN)(re);case 22:return oe=D.sent,pe(oe.data.imageId),D.abrupt("return",!1);case 25:case"end":return D.stop()}},R)}));return function(R){return G.apply(this,arguments)}}(),formRef:C,children:[(0,r.jsx)(a.Z,{label:"\u955C\u50CF\u540D\u79F0",name:"title",fieldProps:{onChange:function(R){var n="";if(R.target.value){var k,q=(0,J.N9)(R.target.value.trim(),{toneType:"none",type:"array"});n=q.join(""),(k=C.current)===null||k===void 0||k.setFieldValue("imageTag",n)}}}}),(0,r.jsx)(v,{showAnonymous:!1}),(0,r.jsx)(u.Z.Group,{name:"uploadType",label:"\u6784\u5EFA\u65B9\u5F0F",initialValue:K,options:[{label:"Dockerfile",value:"dockerfile"},{label:"Zip\u6E90\u7801\u5305",value:"zip"},{label:"Git\u6E90\u7801\u4ED3\u5E93",value:"git"},{label:"\u5BFC\u5165\u5BB9\u5668Tar\u5305",value:"containerTar"},{label:"\u5BFC\u5165\u955C\u50CFTar\u5305",value:"imageTar"}],fieldProps:{onChange:function(R){te(R.target.value)}}}),(0,r.jsx)(b.Z,{name:["uploadType"],children:function(R){var n=R.uploadType;if(n=="containerTar")return[(0,r.jsx)(a.Z,{tooltip:"\u6307\u5B9A\u5BFC\u5165\u540E\u7684\u955C\u50CF\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u4E00\u822C\u6307\u5411\u4EE3\u7801\u7684\u6240\u5728\u76EE\u5F55",label:"\u5DE5\u4F5C\u76EE\u5F55",name:"workDir",placeholder:"\u9ED8\u8BA4\u4E3A / \u76EE\u5F55"},"workDir"),(0,r.jsx)(a.Z,{required:!0,tooltip:"\u901A\u8FC7\u5BB9\u5668\u5BFC\u5165\u955C\u50CF\u65F6\uFF0C\u5FC5\u987B\u6307\u5B9A\u542F\u52A8\u547D\u4EE4\uFF0C\u5426\u5219\u518D\u521B\u5EFA\u65F6\u65E0\u6CD5\u542F\u52A8",rules:[{required:!0}],label:"CMD",name:"cmd"},"cmd"),(0,r.jsx)(L.Z,{tooltip:"\u6307\u5B9A\u5BFC\u5165\u540E\u7684\u955C\u50CF\u5BF9\u5916\u66B4\u9732\u7684\u7AEF\u53E3\uFF0C\u4E00\u884C\u6307\u5B9A\u4E00\u4E2A\u7AEF\u53E3",label:"\u66B4\u9732\u7AEF\u53E3",name:"expose",placeholder:`80 
9000`},"expose"),(0,r.jsx)(L.Z,{tooltip:"\u6307\u5B9A\u5BFC\u5165\u540E\u7684\u955C\u50CF\u9700\u8981\u914D\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u4E00\u884C\u6307\u5B9A\u4E00\u4E2A\u73AF\u5883\u53D8\u91CF",label:"\u73AF\u5883\u53D8\u91CF",name:"env",placeholder:`TEST_VALUE=123 
TEST_NO_VALUE=`},"env"),(0,r.jsx)(L.Z,{tooltip:"\u6307\u5B9A\u5BFC\u5165\u540E\u7684\u955C\u50CF\u9700\u8981\u6301\u4E45\u5316\u7684\u76EE\u5F55\uFF0C\u4E00\u884C\u6307\u5B9A\u4E00\u4E2A\u76EE\u5F55",label:"\u5B58\u50A8\u5377\u76EE\u5F55",name:"volume",placeholder:`/app 
/home`},"volume")];if(n!="imageTar"){if(n=="zip"||n=="git")return(0,r.jsx)(a.Z,{name:"buildRoot",label:"Dockerfile\u6587\u4EF6\u4F4D\u7F6E",tooltip:"\u6307\u5B9ADockerfile\u6240\u5728\u7684\u76EE\u5F55",fieldProps:{addonBefore:"\u9ED8\u8BA4\u4EE5\u5305\u6216\u662F\u4ED3\u5E93\u76EE\u5F55\u5F00\u59CB\uFF08/\uFF09"},placeholder:"/Dockerfile"})}}}),K=="zip"&&(0,r.jsx)(j,{label:"\u4E0A\u4F20\u6784\u5EFA\u5305 (\u53EA\u5141\u8BB8\u4E0A\u4F20 .zip \u6587\u4EF6\uFF0C\u4E14\u4E0E\u5305\u4E2D\u7684 Dockerfile \u6307\u5B9A\u7684\u76EE\u5F55\u4FDD\u6301\u4E00\u81F4)",name:"buildZip",accept:".zip"}),K=="containerTar"&&(0,r.jsx)(j,{label:"\u5BFC\u5165\u5BB9\u5668\u5305\uFF08\u53EA\u5141\u8BB8\u4E0A\u4F20 .tar \u6587\u4EF6\uFF0C\u901A\u8FC7\u5BFC\u51FA\u5BB9\u5668\u751F\u6210\uFF09",name:"containerTar",accept:".tar"}),K=="imageTar"&&(0,r.jsx)(j,{label:"\u5BFC\u5165\u955C\u50CF\u5305\uFF08\u53EA\u5141\u8BB8\u4E0A\u4F20 .tar \u6587\u4EF6\uFF0C\u901A\u8FC7\u5BFC\u51FA\u955C\u50CF\u751F\u6210\uFF09",name:"imageTar",accept:".tar"}),K=="git"&&(0,r.jsx)(B,{}),K=="dockerfile"&&(0,r.jsx)(A.Z,{createFormRef:C})]})}):(0,r.jsx)(I,{imageId:se})})}},97961:function(X,O,e){e.d(O,{MF:function(){return g},_2:function(){return j},fN:function(){return T},hG:function(){return _},vC:function(){return r}});var P=e(15009),i=e.n(P),S=e(99289),c=e.n(S),p=e(54006);function T(f){return a.apply(this,arguments)}function a(){return a=c()(i()().mark(function f(s){return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,p.request)("/api/app/image/create-by-dockerfile",{method:"POST",data:s}));case 1:case"end":return o.stop()}},f)})),a.apply(this,arguments)}function r(f){return B.apply(this,arguments)}function B(){return B=c()(i()().mark(function f(s){return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,p.request)("/api/app/image/import-by-container-tar",{method:"POST",data:s}));case 1:case"end":return o.stop()}},f)})),B.apply(this,arguments)}function _(f){return y.apply(this,arguments)}function y(){return y=c()(i()().mark(function f(s){return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,p.request)("/api/app/image/import-by-image-tar",{method:"POST",data:s}));case 1:case"end":return o.stop()}},f)})),y.apply(this,arguments)}function j(f){return m.apply(this,arguments)}function m(){return m=c()(i()().mark(function f(s){return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,p.request)("/api/common/attach/delete",{method:"POST",data:s});case 2:return o.abrupt("return",o.sent);case 3:case"end":return o.stop()}},f)})),m.apply(this,arguments)}function g(){return E.apply(this,arguments)}function E(){return E=c()(i()().mark(function f(){return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,p.request)("/api/app/image/get-template-list",{method:"POST"}));case 1:case"end":return h.stop()}},f)})),E.apply(this,arguments)}},18148:function(X,O,e){e.d(O,{$q:function(){return g},Fj:function(){return b},KG:function(){return T},KX:function(){return w},T8:function(){return j},Xn:function(){return _},ao:function(){return f},c5:function(){return I},c7:function(){return h}});var P=e(15009),i=e.n(P),S=e(99289),c=e.n(S),p=e(54006);function T(t){return a.apply(this,arguments)}function a(){return a=c()(i()().mark(function t(d){return i()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,p.request)("/api/app/image/get-list",{method:"POST",data:d}));case 1:case"end":return u.stop()}},t)})),a.apply(this,arguments)}function r(t){return B.apply(this,arguments)}function B(){return B=_asyncToGenerator(_regeneratorRuntime().mark(function t(d){return _regeneratorRuntime().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,request("/api/app/log/image-build",{method:"POST",data:d});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},t)})),B.apply(this,arguments)}function _(t){return y.apply(this,arguments)}function y(){return y=c()(i()().mark(function t(d){return i()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,p.request)("/api/app/image/get-list-build",{method:"POST",data:d}));case 1:case"end":return u.stop()}},t)})),y.apply(this,arguments)}function j(t){return m.apply(this,arguments)}function m(){return m=c()(i()().mark(function t(d){return i()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,p.request)("/api/app/image/get-build-task",{method:"POST",data:d});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},t)})),m.apply(this,arguments)}function g(t){return E.apply(this,arguments)}function E(){return E=c()(i()().mark(function t(d){return i()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,p.request)("/api/app/image/delete-build-task",{method:"POST",data:d});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},t)})),E.apply(this,arguments)}function f(t){return s.apply(this,arguments)}function s(){return s=c()(i()().mark(function t(d){return i()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,p.request)("/api/app/image/image-delete",{method:"POST",data:d});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},t)})),s.apply(this,arguments)}function h(){return o.apply(this,arguments)}function o(){return o=c()(i()().mark(function t(){return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,p.request)("/api/app/image/image-prune",{method:"POST"});case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},t)})),o.apply(this,arguments)}function I(){return A.apply(this,arguments)}function A(){return A=c()(i()().mark(function t(){return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,p.request)("/api/app/image/build-prune",{method:"POST"});case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},t)})),A.apply(this,arguments)}function b(t){return F.apply(this,arguments)}function F(){return F=c()(i()().mark(function t(d){return i()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,p.request)("/api/app/image/update-title",{method:"POST",data:d});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},t)})),F.apply(this,arguments)}function w(t){return v.apply(this,arguments)}function v(){return v=c()(i()().mark(function t(d){return i()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,p.request)("/api/app/image/tag-sync",{method:"POST",data:d}));case 1:case"end":return u.stop()}},t)})),v.apply(this,arguments)}},75870:function(X,O,e){e.d(O,{Ot:function(){return T},ZH:function(){return r},ix:function(){return _},t1:function(){return j}});var P=e(15009),i=e.n(P),S=e(99289),c=e.n(S),p=e(54006);function T(g){return a.apply(this,arguments)}function a(){return a=c()(i()().mark(function g(E){return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,p.request)("/api/common/registry/get-list",{method:"POST",data:E}));case 1:case"end":return s.stop()}},g)})),a.apply(this,arguments)}function r(g){return B.apply(this,arguments)}function B(){return B=c()(i()().mark(function g(E){return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,p.request)("/api/common/registry/create",{method:"POST",data:E}));case 1:case"end":return s.stop()}},g)})),B.apply(this,arguments)}function _(g){return y.apply(this,arguments)}function y(){return y=c()(i()().mark(function g(E){return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,p.request)("/api/common/registry/delete",{method:"POST",data:E}));case 1:case"end":return s.stop()}},g)})),y.apply(this,arguments)}function j(g){return m.apply(this,arguments)}function m(){return m=c()(i()().mark(function g(E){return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,p.request)("/api/common/registry/get-detail",{method:"POST",data:E}));case 1:case"end":return s.stop()}},g)})),m.apply(this,arguments)}}}]);

"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3146],{80821:function(ne,M,u){u.d(M,{Z:function(){return N}});var z=u(5574),m=u.n(z),W=u(93246),R=u(54006),Y=u(31418),I=u(86738),g=u(14726),H=u(83062),w=u(62435),Z=u(86074);function N(a){var $=(0,w.useState)(!1),U=m()($,2),P=U[0],L=U[1],O=Y.Z.useApp(),k=(0,R.useIntl)(),T=function(){L(!0),a.action().then(function(b){if(L(!1),typeof a.onSuccess=="function"&&a.onSuccess(b),a.messageSuccess){var D="";a.messageSuccess.indexOf(".")>-1?D=k.formatMessage({id:a.messageSuccess}):D=a.messageSuccess,a.asynced?(0,W.Rk)(O,D):(0,W.$h)(O,D)}}).catch(function(b){L(!1),typeof a.onError=="function"&&a.onError(b)})};return a.confirm?(0,Z.jsx)(I.Z,{style:{width:500},title:"\u63D0\u793A",description:a.confirm,onConfirm:T,okText:"Yes",cancelText:"No",children:(0,Z.jsx)(g.ZP,{disabled:a.disabled,icon:a.icon,loading:P,danger:a.danger,type:a.type,children:a.children})}):(0,Z.jsx)(H.Z,{title:a.tips,children:(0,Z.jsx)(g.ZP,{disabled:a.disabled,icon:a.icon,loading:P,onClick:T,danger:a.danger,type:a.type,children:a.children})})}},71457:function(ne,M,u){u.r(M),u.d(M,{default:function(){return Ce}});var z=u(15009),m=u.n(z),W=u(99289),R=u.n(W),Y=u(5574),I=u.n(Y),g=u(54006);function H(l){return w.apply(this,arguments)}function w(){return w=R()(m()().mark(function l(i){return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,g.request)("/api/app/site/get-domain-list",{method:"POST",data:i}));case 1:case"end":return t.stop()}},l)})),w.apply(this,arguments)}function Z(l){return N.apply(this,arguments)}function N(){return N=R()(m()().mark(function l(i){return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,g.request)("/api/app/site/create-domain",{method:"POST",data:i}));case 1:case"end":return t.stop()}},l)})),N.apply(this,arguments)}function a(l){return $.apply(this,arguments)}function $(){return $=R()(m()().mark(function l(i){return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,g.request)("/api/app/site/delete-domain",{method:"POST",data:i}));case 1:case"end":return t.stop()}},l)})),$.apply(this,arguments)}function U(l){return P.apply(this,arguments)}function P(){return P=R()(m()().mark(function l(i){return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,g.request)("/api/app/site/get-domain-detail",{method:"POST",data:i}));case 1:case"end":return t.stop()}},l)})),P.apply(this,arguments)}function L(l){return O.apply(this,arguments)}function O(){return O=R()(m()().mark(function l(i){return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,g.request)("/api/app/site/apply-domain-cert",{method:"POST",data:i}));case 1:case"end":return t.stop()}},l)})),O.apply(this,arguments)}var k=u(184),T=u(90672),J=u(5966),b=u(62370),D=u(52688),ue=u(92398),re=u(38925),V=u(34041),Q=u(71230),K=u(15746),f=u(62435),G=u(20713),e=u(86074),X="",ae=(0,f.forwardRef)(function(l,i){var y=(0,f.useState)(!1),t=I()(y,2),B=t[0],o=t[1],r=(0,f.useRef)(),F=(0,f.useState)(),d=I()(F,2),n=d[0],c=d[1],A=(0,g.useModel)("subscriber"),s=(0,f.useState)(!1),E=I()(s,2),j=E[0],x=E[1];return(0,f.useImperativeHandle)(i,function(){return{showEdit:function(C){var h,v;(h=r.current)===null||h===void 0||h.setFieldsValue({sslCrt:C.setting.sslCrt,sslKey:C.setting.sslKey,email:(v=localStorage.getItem("email"))!==null&&v!==void 0?v:"",console:""}),C.setting.autoSsl&&x(!0),X="",c(C),o(!0)}}}),A.addDataHandler("composeUp",function(){var S=A.getDataByType("composeUp");if(S){var C;S.map(function(h){X+=h.data}),(C=r.current)===null||C===void 0||C.setFieldValue("console",X)}}),(0,e.jsx)(k.a,{drawerProps:{forceRender:!0},formRef:r,onFinish:function(){var S=R()(m()().mark(function C(h){var v,_,ee,fe,pe;return m()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(n){p.next=2;break}return p.abrupt("return",!0);case 2:if(!(h.sslCrt&&h.sslKey)){p.next=9;break}return p.next=5,a({id:[n.id]});case 5:return p.next=7,Z({schema:"https",serverName:n.serverName,port:n.setting.port,enableBlockCommonExploits:n.setting.enableBlockCommonExploits,enableAssetCache:n.setting.enableAssetCache,enableWs:n.setting.enableWs,extraNginx:n.setting.extraNginx,containerId:n.containerId,sslCrt:(v=h.sslCrt)!==null&&v!==void 0?v:"",sslKey:(_=h.sslKey)!==null&&_!==void 0?_:""});case 7:fe=p.sent,(ee=r.current)===null||ee===void 0||ee.resetFields();case 9:if(!(h.email&&n.id)){p.next=14;break}return localStorage.setItem("email",h.email),p.next=13,L({id:n.id,email:h.email,certServer:h.certServer,autoUpgrade:h.autoUpgrade,renew:h.renew,debug:h.debug});case 13:pe=p.sent;case 14:return l.onFinish&&l.onFinish(),p.abrupt("return",!0);case 16:case"end":return p.stop()}},C)}));return function(C){return S.apply(this,arguments)}}(),onOpenChange:function(C){o(C)},open:B,children:(0,e.jsx)(ue.Z,{items:[{key:"1",label:"\u5F53\u524D\u8BC1\u4E66",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(re.Z,{message:"\u5F53\u524D\u8BC1\u4E66\u4E3A\u81EA\u52A8\u7B7E\u53D1\uFF0C\u8BF7\u52FF\u4FEE\u6539\u3002\u8BC1\u4E66\u8DEF\u5F84\u4E3A\uFF1A/dpanel/cert \u76EE\u5F55",style:{margin:"15px 0"}}),(0,e.jsx)(T.Z,{fieldProps:{autoSize:{minRows:10}},label:"\u8BC1\u4E66\u5185\u5BB9 .crt ",name:"sslCrt",tooltip:"1.\u901A\u5E38\u8BC1\u4E66\u662F\u4EE5 .crt \u6216 .pem \u7B49\u4E3A\u6269\u5C55\u540D\u7684\u6587\u4EF6\uFF0C\u8BF7\u4F7F\u7528\u76F8\u5E94\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00\u8BC1\u4E66\u6587\u4EF6\u3002 2.\u8BC1\u4E66\u683C\u5F0F\u4EE5\u201C-----BEGIN CERTIFICATE-----\u201D\u5F00\u5934\uFF0C\u4EE5\u201C-----END CERTIFICATE-----\u201D\u7ED3\u5C3E\u3002 3.\u8BC1\u4E66\u5185\u5BB9\u8BF7\u5305\u542B\u5B8C\u6574\u7684\u8BC1\u4E66\u94FE\u3002",placeholder:"-----BEGIN CERTIFICATE-----",disabled:j},"sslCrt"),(0,e.jsx)(T.Z,{fieldProps:{autoSize:{minRows:10}},label:"\u79C1\u94A5\u5185\u5BB9 .key ",name:"sslKey",tooltip:"1.\u901A\u5E38\u79C1\u94A5\u662F\u4EE5 .key \u6216 .pem \u7B49\u4E3A\u6269\u5C55\u540D\u7684\u6587\u4EF6\uFF0C\u8BF7\u4F7F\u7528\u76F8\u5E94\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00\u79C1\u94A5\u6587\u4EF6\u3002 2.\u79C1\u94A5\u683C\u5F0F\u4EE5\u201C-----BEGIN PRIVATE KEY-----\u201D\u5F00\u5934\uFF0C\u4EE5\u201C-----END PRIVATE KEY-----\u201D\u7ED3\u5C3E\u3002",placeholder:"-----BEGIN PRIVATE KEY-----",disabled:j},"sslKey")]})},{key:"2",label:"\u7533\u8BF7\u8BC1\u4E66",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(J.Z,{label:"\u90AE\u7BB1",name:"email",placeholder:"\u8BF7\u8F93\u5165\u7533\u8BF7\u7684\u90AE\u7BB1"}),(0,e.jsx)(b.Z,{label:"\u7B7E\u53D1\u670D\u52A1",name:"certServer",initialValue:"letsencrypt",children:(0,e.jsx)(V.Z,{options:[{value:"letsencrypt",label:"Let's Encrypt"},{value:"zerossl",label:"ZeroSSL"}]})}),(0,e.jsxs)(Q.Z,{children:[(0,e.jsx)(K.Z,{span:8,children:(0,e.jsx)(D.Z,{label:"\u81EA\u52A8\u7EED\u7B7E",name:"autoUpgrade",initialValue:!0})}),(0,e.jsx)(K.Z,{span:8,children:(0,e.jsx)(D.Z,{tooltip:"\u901A\u5E38\u60C5\u51B5\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u7EED\u7B7E\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5F00\u542F\u6B64\u9879\u5F3A\u5236\u7EED\u7B7E",label:"\u7ACB\u5373\u7EED\u7B7E",name:"renew",initialValue:!1})}),(0,e.jsx)(K.Z,{span:8,children:(0,e.jsx)(D.Z,{tooltip:"\u663E\u793A\u5B8C\u6574\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C\u65B9\u4FBF\u6392\u67E5",label:"Debug",name:"debug",initialValue:!1})})]}),(0,e.jsx)(b.Z,{label:"\u63A7\u5236\u53F0\u8F93\u51FA",name:"console",children:(0,e.jsx)(G.ZP,{theme:"dark",style:{marginTop:"10px",backgroundColor:"#282c34"},height:"350px",extensions:[G.tk.lineWrapping]})})]})}]})})}),se=ae,le=u(31199),ie=u(97462),oe=u(14726),q=u(78957),de=(0,f.forwardRef)(function(l,i){(0,f.useImperativeHandle)(i,function(){return{showEdit:function(s){U({id:s.id}).then(function(E){var j;(j=r.current)===null||j===void 0||j.setFieldsValue({containerId:l.containerId,serverName:s.serverName,port:s.setting.port,enableBlockCommonExploits:s.setting.enableBlockCommonExploits,enableAssetCache:s.setting.enableAssetCache,enableWs:s.setting.enableWs,extraNginx:s.setting.extraNginx,sslCrt:s.setting.sslCrt,sslKey:s.setting.sslKey,vhost:E.data.vhost}),c(s.id),o(!0)})}}});var y=(0,f.useState)(!1),t=I()(y,2),B=t[0],o=t[1],r=(0,f.useRef)(),F=(0,f.useState)(0),d=I()(F,2),n=d[0],c=d[1];return(0,e.jsx)(k.a,{drawerProps:{forceRender:!0},open:B,onOpenChange:function(s){o(s)},title:"\u57DF\u540D\u7BA1\u7406",trigger:(0,e.jsx)(oe.ZP,{onClick:function(){var s;c(0),(s=r.current)===null||s===void 0||s.resetFields()},type:"primary",children:"\u7ED1\u5B9A\u57DF\u540D"}),formRef:r,onFinish:function(){var A=R()(m()().mark(function s(E){var j,x,S,C;return m()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(!(n>0)){v.next=3;break}return v.next=3,a({id:[n]});case 3:return c(0),v.next=6,Z({schema:E.schema,serverName:E.serverName,port:E.port,enableBlockCommonExploits:E.enableBlockCommonExploits,enableAssetCache:E.enableAssetCache,enableWs:E.enableWs,extraNginx:E.extraNginx,containerId:l.containerId,sslCrt:(j=E.sslCrt)!==null&&j!==void 0?j:"",sslKey:(x=E.sslKey)!==null&&x!==void 0?x:""});case 6:return C=v.sent,(S=r.current)===null||S===void 0||S.resetFields(),l.onFinish(),v.abrupt("return",!0);case 10:case"end":return v.stop()}},s)}));return function(s){return A.apply(this,arguments)}}(),children:(0,e.jsx)(ue.Z,{items:[{key:"1",label:"\u914D\u7F6E\u57DF\u540D",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(q.Z.Compact,{children:[(0,e.jsx)(b.Z,{label:"\u534F\u8BAE",tooltip:"\u9009\u62E9Https\u65F6\u4F1A\u81EA\u52A8\u7ED1\u5B9A\u8BC1\u4E66",required:!0,name:"schema",initialValue:"http",hidden:!0,children:(0,e.jsxs)(V.Z,{defaultValue:"http",style:{width:"100px"},children:[(0,e.jsx)(V.Z.Option,{value:"http",children:"http"}),(0,e.jsx)(V.Z.Option,{value:"https",children:"https"})]})}),(0,e.jsx)(J.Z,{width:"lg",label:"\u57DF\u540D",tooltip:"\u6307\u5B9A\u8981\u7ED1\u5B9A\u7684\u57DF\u540D,\u5E76\u5C06\u8BE5\u57DF\u540D\u89E3\u6790\u5230\u5F53\u524D\u670D\u52A1\u5668",name:"serverName",placeholder:"\u8BF7\u6307\u5B9A\u8981\u7ED1\u5B9A\u7684\u57DF\u540D\uFF0C\u4F8B\u5982 www.explame.com, test.explame.com",rules:[{required:!0}]})]}),(0,e.jsx)(le.Z,{label:"\u7AEF\u53E3",name:"port",placeholder:"\u8F6C\u53D1\u5230\u76EE\u6807\u5BB9\u5668\u4E2D\u7684\u7AEF\u53E3\uFF0C\u4E00\u822C\u4E3A80",required:!0,rules:[{required:!0}]}),(0,e.jsx)(ie.Z,{name:["schema"],children:function(s){var E=s.schema;if(E=="https")return[(0,e.jsx)(T.Z,{label:"\u8BC1\u4E66\u5185\u5BB9",name:"sslCrt",tooltip:"1.\u901A\u5E38\u8BC1\u4E66\u662F\u4EE5 .crt \u6216 .pem \u7B49\u4E3A\u6269\u5C55\u540D\u7684\u6587\u4EF6\uFF0C\u8BF7\u4F7F\u7528\u76F8\u5E94\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00\u8BC1\u4E66\u6587\u4EF6\u3002 2.\u8BC1\u4E66\u683C\u5F0F\u4EE5\u201C-----BEGIN CERTIFICATE-----\u201D\u5F00\u5934\uFF0C\u4EE5\u201C-----END CERTIFICATE-----\u201D\u7ED3\u5C3E\u3002 3.\u8BC1\u4E66\u5185\u5BB9\u8BF7\u5305\u542B\u5B8C\u6574\u7684\u8BC1\u4E66\u94FE\u3002",placeholder:"-----BEGIN CERTIFICATE-----"},"sslCrt"),(0,e.jsx)(T.Z,{label:"\u79C1\u94A5\u5185\u5BB9",name:"sslKey",tooltip:"1.\u901A\u5E38\u79C1\u94A5\u662F\u4EE5 .key \u6216 .pem \u7B49\u4E3A\u6269\u5C55\u540D\u7684\u6587\u4EF6\uFF0C\u8BF7\u4F7F\u7528\u76F8\u5E94\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00\u79C1\u94A5\u6587\u4EF6\u3002 2.\u79C1\u94A5\u683C\u5F0F\u4EE5\u201C-----BEGIN PRIVATE KEY-----\u201D\u5F00\u5934\uFF0C\u4EE5\u201C-----END PRIVATE KEY-----\u201D\u7ED3\u5C3E\u3002",placeholder:"-----BEGIN PRIVATE KEY-----"},"sslKey")]}}),(0,e.jsxs)(Q.Z,{children:[(0,e.jsx)(K.Z,{span:12,children:(0,e.jsx)(D.Z,{label:"\u963B\u6B62\u5E38\u89C1\u6F0F\u6D1E\u5229\u7528",name:"enableBlockCommonExploits"})}),(0,e.jsx)(K.Z,{children:(0,e.jsx)(D.Z,{width:"md",label:"\u9759\u6001\u8D44\u6E90\u7F13\u5B58",name:"enableAssetCache"})})]}),(0,e.jsx)(Q.Z,{children:(0,e.jsx)(K.Z,{span:12,children:(0,e.jsx)(D.Z,{label:"\u652F\u6301 Websocket",name:"enableWs"})})}),(0,e.jsx)(b.Z,{name:"extraNginx",label:"\u81EA\u5B9A\u4E49\u6269\u5C55\u914D\u7F6E",tooltip:"\u81EA\u5B9A\u4E49\u6269\u5C55\u7F51\u7AD9 Vhost \u914D\u7F6E\u5185\u5BB9",children:(0,e.jsx)(G.ZP,{height:"300px",theme:"dark",style:{backgroundColor:"#282c34"}})})]})},{key:"2",label:"\u67E5\u770B vhost \u914D\u7F6E",children:(0,e.jsx)(b.Z,{name:"vhost",label:" ",children:(0,e.jsx)(G.ZP,{height:"600px",theme:"dark",readOnly:!0,style:{backgroundColor:"#282c34"}})})}]})})}),ce=de,Ee=u(80821),me=u(43425),he=u(12010),te=u(66309),Fe=u(96074),ve=u(83062);function Ce(){var l=(0,g.useParams)(),i=(0,f.useRef)(),y=(0,f.useRef)(),t=(0,f.useRef)();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(se,{ref:t,onFinish:function(){var o;!((o=i.current)===null||o===void 0)&&o.reloadAndRest&&i.current.reloadAndRest()}}),(0,e.jsx)(he.Z,{rowKey:"id",actionRef:i,columns:[{title:"\u57DF\u540D",dataIndex:"serverName",render:function(o,r,F,d,n){return(0,e.jsx)("a",{href:"".concat(r.setting.enableSSL?"https":"http","://").concat(r.serverName),target:"_blank",children:r.serverName})}},{title:"\u5BB9\u5668\u5185\u7AEF\u53E3",dataIndex:["setting","port"],search:!1},{title:"SSL\u8BC1\u4E66",search:!1,render:function(o,r,F,d,n){var c;return r.setting.enableSSL?(0,e.jsxs)(te.Z,{color:"success",children:["\u8BC1\u4E66\u6709\u6548\u81F3\uFF1A",new Date((c=r.setting.sslCrtRenewTime)!==null&&c!==void 0?c:"").toLocaleDateString()]}):(0,e.jsx)(te.Z,{color:"red",children:"\u5426"})}},{title:"\u521B\u5EFA\u65F6\u95F4",search:!1,width:180,ellipsis:!0,dataIndex:"createdAt",render:function(o,r,F,d,n){return new Date(r.createdAt).toLocaleString()}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:100,render:function(o,r,F,d){return(0,e.jsxs)(q.Z,{split:(0,e.jsx)(Fe.Z,{type:"vertical"}),children:[(0,e.jsx)(g.Link,{to:"#",onClick:function(){var c;return(c=y.current)===null||c===void 0||c.showEdit(r),!0},children:(0,e.jsx)(ve.Z,{title:"\u7BA1\u7406\u57DF\u540D",children:(0,e.jsx)(me.Z,{})})}),(0,e.jsx)(g.Link,{to:"#",onClick:function(){var c;(c=t.current)===null||c===void 0||c.showEdit(r)},children:"SSL"})]})}}],request:function(){var B=R()(m()().mark(function o(r,F,d){var n,c,A,s,E;return m()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,H({containerId:(n=(c=l.id)!==null&&c!==void 0?c:"")!==null&&n!==void 0?n:"",pageSize:(A=r.pageSize)!==null&&A!==void 0?A:10,page:(s=r.current)!==null&&s!==void 0?s:1,serverName:r.serverName,port:r.port});case 2:return E=x.sent,x.abrupt("return",{data:E.data.list,success:!0,total:E.data.list.length});case 4:case"end":return x.stop()}},o)}));return function(o,r,F){return B.apply(this,arguments)}}(),toolBarRender:function(){var o;return[(0,e.jsx)(ce,{ref:y,containerId:(o=l.id)!==null&&o!==void 0?o:"",onFinish:function(){var F,d;!((F=i.current)===null||F===void 0)&&F.reloadAndRest&&((d=i.current)===null||d===void 0||d.reloadAndRest())}})]},rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},tableAlertOptionRender:function(o){var r=o.selectedRowKeys;return(0,e.jsx)(q.Z,{size:16,children:(0,e.jsx)(Ee.Z,{danger:!0,type:"primary",action:function(){return a({id:r})},onSuccess:function(){var d,n;return!((d=i.current)===null||d===void 0)&&d.reloadAndRest&&((n=i.current)===null||n===void 0||n.reloadAndRest()),!0},onError:function(){var d,n;return!((d=i.current)===null||d===void 0)&&d.reset&&((n=i.current)===null||n===void 0||n.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u6279\u91CF\u5220\u9664"})})},pagination:{pageSize:10}})]})}}}]);

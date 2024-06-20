"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3146],{80821:function(ue,L,u){u.d(L,{Z:function(){return O}});var G=u(5574),h=u.n(G),M=u(93246),x=u(54006),z=u(31418),b=u(86738),p=u(14726),Y=u(83062),P=u(62435),j=u(86074);function O(l){var K=(0,P.useState)(!1),W=h()(K,2),Z=W[0],w=W[1],T=z.Z.useApp(),k=(0,x.useIntl)(),S=function(){w(!0),l.action().then(function(R){if(w(!1),typeof l.onSuccess=="function"&&l.onSuccess(R),l.messageSuccess){var D="";l.messageSuccess.indexOf(".")>-1?D=k.formatMessage({id:l.messageSuccess}):D=l.messageSuccess,l.asynced?(0,M.Rk)(T,D):(0,M.$h)(T,D)}}).catch(function(R){w(!1),typeof l.onError=="function"&&l.onError(R)})};return l.confirm?(0,j.jsx)(b.Z,{style:{width:500},title:"\u63D0\u793A",description:l.confirm,onConfirm:S,okText:"Yes",cancelText:"No",children:(0,j.jsx)(p.ZP,{disabled:l.disabled,icon:l.icon,loading:Z,danger:l.danger,type:l.type,children:l.children})}):(0,j.jsx)(Y.Z,{title:l.tips,children:(0,j.jsx)(p.ZP,{disabled:l.disabled,icon:l.icon,loading:Z,onClick:S,danger:l.danger,type:l.type,children:l.children})})}},71457:function(ue,L,u){u.r(L),u.d(L,{default:function(){return he}});var G=u(15009),h=u.n(G),M=u(99289),x=u.n(M),z=u(5574),b=u.n(z),p=u(54006);function Y(o){return P.apply(this,arguments)}function P(){return P=x()(h()().mark(function o(c){return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.request)("/api/app/site/get-domain-list",{method:"POST",data:c}));case 1:case"end":return t.stop()}},o)})),P.apply(this,arguments)}function j(o){return O.apply(this,arguments)}function O(){return O=x()(h()().mark(function o(c){return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.request)("/api/app/site/create-domain",{method:"POST",data:c}));case 1:case"end":return t.stop()}},o)})),O.apply(this,arguments)}function l(o){return K.apply(this,arguments)}function K(){return K=x()(h()().mark(function o(c){return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.request)("/api/app/site/delete-domain",{method:"POST",data:c}));case 1:case"end":return t.stop()}},o)})),K.apply(this,arguments)}function W(o){return Z.apply(this,arguments)}function Z(){return Z=x()(h()().mark(function o(c){return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.request)("/api/app/site/get-domain-detail",{method:"POST",data:c}));case 1:case"end":return t.stop()}},o)})),Z.apply(this,arguments)}function w(o){return T.apply(this,arguments)}function T(){return T=x()(h()().mark(function o(c){return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.request)("/api/app/site/apply-domain-cert",{method:"POST",data:c}));case 1:case"end":return t.stop()}},o)})),T.apply(this,arguments)}var k=u(184),S=u(90672),H=u(5966),R=u(62370),D=u(52688),q=u(92398),U=u(34041),J=u(71230),N=u(15746),C=u(62435),V=u(20713),e=u(86074),Q="",te=(0,C.forwardRef)(function(o,c){var A=(0,C.useState)(!1),t=b()(A,2),g=t[0],d=t[1],a=(0,C.useRef)(),F=(0,C.useState)(),E=b()(F,2),r=E[0],m=E[1],B=(0,p.useModel)("subscriber");return(0,C.useImperativeHandle)(c,function(){return{showEdit:function(s){var i,v;(i=a.current)===null||i===void 0||i.setFieldsValue({sslCrt:s.setting.sslCrt,sslKey:s.setting.sslKey,email:(v=localStorage.getItem("email"))!==null&&v!==void 0?v:"",console:""}),Q="",m(s),d(!0)}}}),B.addDataHandler("composeUp",function(){var n=B.getDataByType("composeUp");if(n){var s;n.map(function(i){Q+=i.data}),(s=a.current)===null||s===void 0||s.setFieldValue("console",Q)}}),(0,e.jsx)(k.a,{drawerProps:{forceRender:!0},formRef:a,onFinish:function(){var n=x()(h()().mark(function s(i){var v,I,$,ee,y;return h()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(r){f.next=2;break}return f.abrupt("return",!0);case 2:if(!(i.sslCrt&&i.sslKey)){f.next=9;break}return f.next=5,l({id:[r.id]});case 5:return f.next=7,j({schema:"https",serverName:r.serverName,port:r.setting.port,enableBlockCommonExploits:r.setting.enableBlockCommonExploits,enableAssetCache:r.setting.enableAssetCache,enableWs:r.setting.enableWs,extraNginx:r.setting.extraNginx,containerId:r.containerId,sslCrt:(v=i.sslCrt)!==null&&v!==void 0?v:"",sslKey:(I=i.sslKey)!==null&&I!==void 0?I:""});case 7:ee=f.sent,($=a.current)===null||$===void 0||$.resetFields();case 9:if(!(i.email&&r.id)){f.next=14;break}return localStorage.setItem("email",i.email),f.next=13,w({id:r.id,email:i.email,certServer:i.certServer,autoUpgrade:i.autoUpgrade,renew:i.renew});case 13:y=f.sent;case 14:return o.onFinish&&o.onFinish(),f.abrupt("return",!0);case 16:case"end":return f.stop()}},s)}));return function(s){return n.apply(this,arguments)}}(),onOpenChange:function(s){d(s)},open:g,children:(0,e.jsx)(q.Z,{items:[{key:"1",label:"\u5F53\u524D\u8BC1\u4E66",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(S.Z,{fieldProps:{autoSize:{minRows:12}},label:"\u8BC1\u4E66\u5185\u5BB9 .crt ",name:"sslCrt",tooltip:"1.\u901A\u5E38\u8BC1\u4E66\u662F\u4EE5 .crt \u6216 .pem \u7B49\u4E3A\u6269\u5C55\u540D\u7684\u6587\u4EF6\uFF0C\u8BF7\u4F7F\u7528\u76F8\u5E94\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00\u8BC1\u4E66\u6587\u4EF6\u3002 2.\u8BC1\u4E66\u683C\u5F0F\u4EE5\u201C-----BEGIN CERTIFICATE-----\u201D\u5F00\u5934\uFF0C\u4EE5\u201C-----END CERTIFICATE-----\u201D\u7ED3\u5C3E\u3002 3.\u8BC1\u4E66\u5185\u5BB9\u8BF7\u5305\u542B\u5B8C\u6574\u7684\u8BC1\u4E66\u94FE\u3002",placeholder:"-----BEGIN CERTIFICATE-----"},"sslCrt"),(0,e.jsx)(S.Z,{fieldProps:{autoSize:{minRows:12}},label:"\u79C1\u94A5\u5185\u5BB9 .key ",name:"sslKey",tooltip:"1.\u901A\u5E38\u79C1\u94A5\u662F\u4EE5 .key \u6216 .pem \u7B49\u4E3A\u6269\u5C55\u540D\u7684\u6587\u4EF6\uFF0C\u8BF7\u4F7F\u7528\u76F8\u5E94\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00\u79C1\u94A5\u6587\u4EF6\u3002 2.\u79C1\u94A5\u683C\u5F0F\u4EE5\u201C-----BEGIN PRIVATE KEY-----\u201D\u5F00\u5934\uFF0C\u4EE5\u201C-----END PRIVATE KEY-----\u201D\u7ED3\u5C3E\u3002",placeholder:"-----BEGIN PRIVATE KEY-----"},"sslKey")]})},{key:"2",label:"\u81EA\u52A9\u7533\u8BF7",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(H.Z,{label:"\u90AE\u7BB1",name:"email",placeholder:"\u8BF7\u8F93\u5165\u7533\u8BF7\u7684\u90AE\u7BB1"}),(0,e.jsx)(R.Z,{label:"\u7B7E\u53D1\u670D\u52A1",name:"certServer",initialValue:"letsencrypt",children:(0,e.jsx)(U.Z,{options:[{value:"letsencrypt",label:"Let's Encrypt"},{value:"zerossl",label:"ZeroSSL"}]})}),(0,e.jsxs)(J.Z,{children:[(0,e.jsx)(N.Z,{span:8,children:(0,e.jsx)(D.Z,{label:"\u81EA\u52A8\u7EED\u7B7E",name:"autoUpgrade",initialValue:!0})}),(0,e.jsx)(N.Z,{span:8,children:(0,e.jsx)(D.Z,{tooltip:"\u901A\u5E38\u60C5\u51B5\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u7EED\u7B7E\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5F00\u542F\u6B64\u9879\u5F3A\u5236\u7EED\u7B7E",label:"\u7ACB\u5373\u7EED\u7B7E",name:"renew",initialValue:!1})})]}),(0,e.jsx)(R.Z,{label:"\u63A7\u5236\u53F0\u8F93\u51FA",name:"console",children:(0,e.jsx)(V.ZP,{theme:"dark",style:{marginTop:"10px",backgroundColor:"#282c34"},height:"400px",extensions:[V.tk.lineWrapping]})})]})}]})})}),ne=te,re=u(31199),ae=u(97462),se=u(14726),X=u(78957),le=(0,C.forwardRef)(function(o,c){(0,C.useImperativeHandle)(c,function(){return{showEdit:function(n){W({id:n.id}).then(function(s){var i;(i=a.current)===null||i===void 0||i.setFieldsValue({containerId:o.containerId,serverName:n.serverName,port:n.setting.port,enableBlockCommonExploits:n.setting.enableBlockCommonExploits,enableAssetCache:n.setting.enableAssetCache,enableWs:n.setting.enableWs,extraNginx:n.setting.extraNginx,sslCrt:n.setting.sslCrt,sslKey:n.setting.sslKey,vhost:s.data.vhost}),m(n.id),d(!0)})}}});var A=(0,C.useState)(!1),t=b()(A,2),g=t[0],d=t[1],a=(0,C.useRef)(),F=(0,C.useState)(0),E=b()(F,2),r=E[0],m=E[1];return(0,e.jsx)(k.a,{drawerProps:{forceRender:!0},open:g,onOpenChange:function(n){d(n)},title:"\u57DF\u540D\u7BA1\u7406",trigger:(0,e.jsx)(se.ZP,{onClick:function(){var n;m(0),(n=a.current)===null||n===void 0||n.resetFields()},type:"primary",children:"\u7ED1\u5B9A\u57DF\u540D"}),formRef:a,onFinish:function(){var B=x()(h()().mark(function n(s){var i,v,I,$;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(!(r>0)){y.next=3;break}return y.next=3,l({id:[r]});case 3:return m(0),y.next=6,j({schema:s.schema,serverName:s.serverName,port:s.port,enableBlockCommonExploits:s.enableBlockCommonExploits,enableAssetCache:s.enableAssetCache,enableWs:s.enableWs,extraNginx:s.extraNginx,containerId:o.containerId,sslCrt:(i=s.sslCrt)!==null&&i!==void 0?i:"",sslKey:(v=s.sslKey)!==null&&v!==void 0?v:""});case 6:return $=y.sent,(I=a.current)===null||I===void 0||I.resetFields(),o.onFinish(),y.abrupt("return",!0);case 10:case"end":return y.stop()}},n)}));return function(n){return B.apply(this,arguments)}}(),children:(0,e.jsx)(q.Z,{items:[{key:"1",label:"\u914D\u7F6E\u57DF\u540D",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(X.Z.Compact,{children:[(0,e.jsx)(R.Z,{label:"\u534F\u8BAE",tooltip:"\u9009\u62E9Https\u65F6\u4F1A\u81EA\u52A8\u7ED1\u5B9A\u8BC1\u4E66",required:!0,name:"schema",initialValue:"http",hidden:!0,children:(0,e.jsxs)(U.Z,{defaultValue:"http",style:{width:"100px"},children:[(0,e.jsx)(U.Z.Option,{value:"http",children:"http"}),(0,e.jsx)(U.Z.Option,{value:"https",children:"https"})]})}),(0,e.jsx)(H.Z,{width:"lg",label:"\u57DF\u540D",tooltip:"\u6307\u5B9A\u8981\u7ED1\u5B9A\u7684\u57DF\u540D,\u5E76\u5C06\u8BE5\u57DF\u540D\u89E3\u6790\u5230\u5F53\u524D\u670D\u52A1\u5668",name:"serverName",placeholder:"\u8BF7\u6307\u5B9A\u8981\u7ED1\u5B9A\u7684\u57DF\u540D\uFF0C\u4F8B\u5982 www.explame.com, test.explame.com",rules:[{required:!0}]})]}),(0,e.jsx)(re.Z,{label:"\u7AEF\u53E3",name:"port",placeholder:"\u8F6C\u53D1\u5230\u76EE\u6807\u5BB9\u5668\u4E2D\u7684\u7AEF\u53E3\uFF0C\u4E00\u822C\u4E3A80",required:!0,rules:[{required:!0}]}),(0,e.jsx)(ae.Z,{name:["schema"],children:function(n){var s=n.schema;if(s=="https")return[(0,e.jsx)(S.Z,{label:"\u8BC1\u4E66\u5185\u5BB9",name:"sslCrt",tooltip:"1.\u901A\u5E38\u8BC1\u4E66\u662F\u4EE5 .crt \u6216 .pem \u7B49\u4E3A\u6269\u5C55\u540D\u7684\u6587\u4EF6\uFF0C\u8BF7\u4F7F\u7528\u76F8\u5E94\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00\u8BC1\u4E66\u6587\u4EF6\u3002 2.\u8BC1\u4E66\u683C\u5F0F\u4EE5\u201C-----BEGIN CERTIFICATE-----\u201D\u5F00\u5934\uFF0C\u4EE5\u201C-----END CERTIFICATE-----\u201D\u7ED3\u5C3E\u3002 3.\u8BC1\u4E66\u5185\u5BB9\u8BF7\u5305\u542B\u5B8C\u6574\u7684\u8BC1\u4E66\u94FE\u3002",placeholder:"-----BEGIN CERTIFICATE-----"},"sslCrt"),(0,e.jsx)(S.Z,{label:"\u79C1\u94A5\u5185\u5BB9",name:"sslKey",tooltip:"1.\u901A\u5E38\u79C1\u94A5\u662F\u4EE5 .key \u6216 .pem \u7B49\u4E3A\u6269\u5C55\u540D\u7684\u6587\u4EF6\uFF0C\u8BF7\u4F7F\u7528\u76F8\u5E94\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00\u79C1\u94A5\u6587\u4EF6\u3002 2.\u79C1\u94A5\u683C\u5F0F\u4EE5\u201C-----BEGIN PRIVATE KEY-----\u201D\u5F00\u5934\uFF0C\u4EE5\u201C-----END PRIVATE KEY-----\u201D\u7ED3\u5C3E\u3002",placeholder:"-----BEGIN PRIVATE KEY-----"},"sslKey")]}}),(0,e.jsxs)(J.Z,{children:[(0,e.jsx)(N.Z,{span:12,children:(0,e.jsx)(D.Z,{label:"\u963B\u6B62\u5E38\u89C1\u6F0F\u6D1E\u5229\u7528",name:"enableBlockCommonExploits"})}),(0,e.jsx)(N.Z,{children:(0,e.jsx)(D.Z,{width:"md",label:"\u9759\u6001\u8D44\u6E90\u7F13\u5B58",name:"enableAssetCache"})})]}),(0,e.jsx)(J.Z,{children:(0,e.jsx)(N.Z,{span:12,children:(0,e.jsx)(D.Z,{label:"\u652F\u6301 Websocket",name:"enableWs"})})}),(0,e.jsx)(R.Z,{name:"extraNginx",label:"\u81EA\u5B9A\u4E49\u6269\u5C55\u914D\u7F6E",tooltip:"\u81EA\u5B9A\u4E49\u6269\u5C55\u7F51\u7AD9 Vhost \u914D\u7F6E\u5185\u5BB9",children:(0,e.jsx)(V.ZP,{height:"300px",theme:"dark",style:{backgroundColor:"#282c34"}})})]})},{key:"2",label:"\u67E5\u770B vhost \u914D\u7F6E",children:(0,e.jsx)(R.Z,{name:"vhost",label:" ",children:(0,e.jsx)(V.ZP,{height:"600px",theme:"dark",readOnly:!0,style:{backgroundColor:"#282c34"}})})}]})})}),ie=le,oe=u(80821),ce=u(43425),de=u(12010),_=u(66309),Ee=u(96074),me=u(83062);function he(){var o=(0,p.useParams)(),c=(0,C.useRef)(),A=(0,C.useRef)(),t=(0,C.useRef)();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ne,{ref:t,onFinish:function(){var d;!((d=c.current)===null||d===void 0)&&d.reloadAndRest&&c.current.reloadAndRest()}}),(0,e.jsx)(de.Z,{rowKey:"id",actionRef:c,columns:[{title:"\u57DF\u540D",dataIndex:"serverName",render:function(d,a,F,E,r){return(0,e.jsx)("a",{href:"".concat(a.setting.enableSSL?"https":"http","://").concat(a.serverName),target:"_blank",children:a.serverName})}},{title:"\u5BB9\u5668\u5185\u7AEF\u53E3",dataIndex:["setting","port"],search:!1},{title:"SSL\u8BC1\u4E66",search:!1,render:function(d,a,F,E,r){var m;return a.setting.enableSSL?(0,e.jsxs)(_.Z,{color:"success",children:["\u8BC1\u4E66\u6709\u6548\u81F3\uFF1A",new Date((m=a.setting.sslCrtRenewTime)!==null&&m!==void 0?m:"").toLocaleDateString()]}):(0,e.jsx)(_.Z,{color:"red",children:"\u5426"})}},{title:"\u521B\u5EFA\u65F6\u95F4",search:!1,width:180,ellipsis:!0,dataIndex:"createdAt",render:function(d,a,F,E,r){return new Date(a.createdAt).toLocaleString()}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:100,render:function(d,a,F,E){return(0,e.jsxs)(X.Z,{split:(0,e.jsx)(Ee.Z,{type:"vertical"}),children:[(0,e.jsx)(p.Link,{to:"#",onClick:function(){var m;return(m=A.current)===null||m===void 0||m.showEdit(a),!0},children:(0,e.jsx)(me.Z,{title:"\u7BA1\u7406\u57DF\u540D",children:(0,e.jsx)(ce.Z,{})})}),(0,e.jsx)(p.Link,{to:"#",onClick:function(){var m;(m=t.current)===null||m===void 0||m.showEdit(a)},children:"SSL"})]})}}],request:function(){var g=x()(h()().mark(function d(a,F,E){var r,m,B,n,s;return h()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Y({containerId:(r=(m=o.id)!==null&&m!==void 0?m:"")!==null&&r!==void 0?r:"",pageSize:(B=a.pageSize)!==null&&B!==void 0?B:10,page:(n=a.current)!==null&&n!==void 0?n:1,serverName:a.serverName,port:a.port});case 2:return s=v.sent,v.abrupt("return",{data:s.data.list,success:!0,total:s.data.list.length});case 4:case"end":return v.stop()}},d)}));return function(d,a,F){return g.apply(this,arguments)}}(),toolBarRender:function(){var d;return[(0,e.jsx)(ie,{ref:A,containerId:(d=o.id)!==null&&d!==void 0?d:"",onFinish:function(){var F,E;!((F=c.current)===null||F===void 0)&&F.reloadAndRest&&((E=c.current)===null||E===void 0||E.reloadAndRest())}})]},rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},tableAlertOptionRender:function(d){var a=d.selectedRowKeys;return(0,e.jsx)(X.Z,{size:16,children:(0,e.jsx)(oe.Z,{danger:!0,type:"primary",action:function(){return l({id:a})},onSuccess:function(){var E,r;return!((E=c.current)===null||E===void 0)&&E.reloadAndRest&&((r=c.current)===null||r===void 0||r.reloadAndRest()),!0},onError:function(){var E,r;return!((E=c.current)===null||E===void 0)&&E.reset&&((r=c.current)===null||r===void 0||r.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u6279\u91CF\u5220\u9664"})})},pagination:{pageSize:10}})]})}}}]);

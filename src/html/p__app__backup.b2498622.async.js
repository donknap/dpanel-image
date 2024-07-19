"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[550],{98165:function(p,E,e){e.d(E,{Z:function(){return v}});var P=e(87462),u=e(62435),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},o=O,y=e(84089),h=function(d,x){return u.createElement(y.Z,(0,P.Z)({},d,{ref:x,icon:o}))},S=u.forwardRef(h),v=S},80821:function(p,E,e){e.d(E,{Z:function(){return x}});var P=e(5574),u=e.n(P),O=e(93246),o=e(54006),y=e(31418),h=e(86738),S=e(14726),v=e(83062),j=e(62435),d=e(86074);function x(t){var C=(0,j.useState)(!1),A=u()(C,2),M=A[0],m=A[1],I=y.Z.useApp(),B=(0,o.useIntl)(),T=function(){m(!0),t.action().then(function(D){if(m(!1),typeof t.onSuccess=="function"&&t.onSuccess(D),t.messageSuccess){var a="";t.messageSuccess.indexOf(".")>-1?a=B.formatMessage({id:t.messageSuccess}):a=t.messageSuccess,t.asynced?(0,O.Rk)(I,a):(0,O.$h)(I,a)}}).catch(function(D){m(!1),typeof t.onError=="function"&&t.onError(D)})};return t.confirm?(0,d.jsx)(h.Z,{style:{width:500},title:"\u63D0\u793A",description:t.confirm,onConfirm:T,okText:"Yes",cancelText:"No",children:(0,d.jsx)(S.ZP,{disabled:t.disabled,icon:t.icon,loading:M,danger:t.danger,type:t.type,children:t.children})}):(0,d.jsx)(v.Z,{title:t.tips,children:(0,d.jsx)(S.ZP,{disabled:t.disabled,icon:t.icon,loading:M,onClick:T,danger:t.danger,type:t.type,children:t.children})})}},72340:function(p,E,e){e.r(E),e.d(E,{default:function(){return D}});var P=e(15009),u=e.n(P),O=e(99289),o=e.n(O),y=e(80821),h=e(54006);function S(a){return v.apply(this,arguments)}function v(){return v=o()(u()().mark(function a(s){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/app/volume/get-backup-list",{method:"POST",data:s}));case 1:case"end":return n.stop()}},a)})),v.apply(this,arguments)}function j(a){return d.apply(this,arguments)}function d(){return d=o()(u()().mark(function a(s){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/app/volume/delete-backup",{method:"POST",data:s}));case 1:case"end":return n.stop()}},a)})),d.apply(this,arguments)}function x(a){return t.apply(this,arguments)}function t(){return t=o()(u()().mark(function a(s){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/app/volume/restore",{method:"POST",data:s}));case 1:case"end":return n.stop()}},a)})),t.apply(this,arguments)}var C=e(98165),A=e(6110),M=e(90639),m=e(78957),I=e(96074),B=e(83062),T=e(62435),c=e(86074);function D(){var a=(0,T.useRef)();return(0,c.jsx)(A._z,{header:{extra:[]},children:(0,c.jsx)(M.Z,{rowKey:"id",columns:[{title:"\u6240\u5C5E\u5BB9\u5668",dataIndex:"containerId",width:150,ellipsis:!0},{title:"\u5B58\u50A8\u8DEF\u5F84",search:!1,dataIndex:["setting","backupPath"],width:200,ellipsis:!0},{title:"\u6587\u4EF6\u540D\u79F0",search:!1,render:function(l,n,f,i,r){var g=n.setting.backupTar;return g.substring(g.lastIndexOf("/",g.lastIndexOf("/")-1))}},{title:"\u5B58\u50A8\u5377\u8DEF\u5F84",search:!1,render:function(l,n,f,i,r){return(0,c.jsx)(m.Z,{wrap:!0,children:n.setting.volumePathList.map(function(g){return g})})}},{title:"\u5907\u4EFD\u65F6\u95F4",search:!1,width:200,render:function(l,n,f,i,r){return new Date(n.createdAt).toLocaleString()}},{title:"\u64CD\u4F5C",search:!1,width:100,render:function(l,n,f,i,r){return(0,c.jsx)(m.Z,{split:(0,c.jsx)(I.Z,{}),children:(0,c.jsx)(B.Z,{title:"\u6062\u590D",children:(0,c.jsx)(y.Z,{type:"link",action:function(){return x({id:n.id,containerMd5:n.containerId})},messageSuccess:"\u6062\u590D\u5907\u4EFD\u6210\u529F",children:(0,c.jsx)(C.Z,{})})})})}}],request:function(){var s=o()(u()().mark(function l(n,f,i){var r;return u()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,S({containerId:n.containerId,page:n.current,pageSize:n.pageSize});case 2:return r=R.sent,R.abrupt("return",{data:r.data.list,success:!0,total:r.data.list.length});case 4:case"end":return R.stop()}},l)}));return function(l,n,f){return s.apply(this,arguments)}}(),rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},actionRef:a,tableAlertOptionRender:function(l){var n=l.selectedRowKeys;return(0,c.jsx)(m.Z,{size:16,children:(0,c.jsx)(y.Z,{danger:!0,type:"primary",action:function(){return j({id:n})},onSuccess:function(){var i,r;return!((i=a.current)===null||i===void 0)&&i.reloadAndRest&&((r=a.current)===null||r===void 0||r.reloadAndRest()),!0},onError:function(){var i,r;return!((i=a.current)===null||i===void 0)&&i.reset&&((r=a.current)===null||r===void 0||r.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u6279\u91CF\u5220\u9664"})})},pagination:{pageSize:10}})})}}}]);

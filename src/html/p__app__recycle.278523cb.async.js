"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1610],{2830:function(L,E,t){t.d(E,{Z:function(){return M}});var P=t(87462),s=t(62435),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 01144-53.5L537 318.9a32.05 32.05 0 000 45.3l124.5 124.5a32.05 32.05 0 0045.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"}}]},name:"tool",theme:"outlined"},l=p,i=t(84089),D=function(c,m){return s.createElement(i.Z,(0,P.Z)({},c,{ref:m,icon:l}))},o=s.forwardRef(D),M=o},80821:function(L,E,t){t.d(E,{Z:function(){return m}});var P=t(5574),s=t.n(P),p=t(93246),l=t(54006),i=t(31418),D=t(86738),o=t(14726),M=t(83062),h=t(62435),c=t(86074);function m(n){var g=(0,h.useState)(!1),R=s()(g,2),O=R[0],T=R[1],u=i.Z.useApp(),j=(0,l.useIntl)(),v=function(){T(!0),n.action().then(function(a){if(T(!1),typeof n.onSuccess=="function"&&n.onSuccess(a),n.messageSuccess){var _="";n.messageSuccess.indexOf(".")>-1?_=j.formatMessage({id:n.messageSuccess}):_=n.messageSuccess,n.asynced?(0,p.Rk)(u,_):(0,p.$h)(u,_)}}).catch(function(a){T(!1),typeof n.onError=="function"&&n.onError(a)})};return n.confirm?(0,c.jsx)(D.Z,{style:{width:500},title:"\u63D0\u793A",description:n.confirm,onConfirm:v,okText:"Yes",cancelText:"No",children:(0,c.jsx)(o.ZP,{disabled:n.disabled,icon:n.icon,loading:O,danger:n.danger,type:n.type,children:n.children})}):(0,c.jsx)(M.Z,{title:n.tips,children:(0,c.jsx)(o.ZP,{disabled:n.disabled,icon:n.icon,loading:O,onClick:v,danger:n.danger,type:n.type,children:n.children})})}},67108:function(L,E,t){t.r(E),t.d(E,{default:function(){return j}});var P=t(15009),s=t.n(P),p=t(99289),l=t.n(p),i=t(6110),D=t(12010),o=t(62597),M=t(14726),h=t(83062),c=t(78957),m=t(68508),n=t(54006),g=t(2830),R=t(62435),O=t(96974),T=t(80821),u=t(86074);function j(){var v=(0,O.UO)(),r=(0,R.useRef)();return(0,R.useEffect)(function(){var a;(a=r.current)===null||a===void 0||a.reload()},[v]),(0,u.jsx)(i._z,{header:{extra:[(0,u.jsx)(M.ZP,{type:"primary",children:(0,u.jsx)(n.Link,{to:"/app/create/image",children:"\u521B\u5EFA\u5BB9\u5668"})},"create")]},children:(0,u.jsx)(D.Z,{actionRef:r,columns:[{title:"\u540D\u79F0",ellipsis:!0,dataIndex:"siteTitle"},{title:"\u6807\u8BC6",ellipsis:!0,dataIndex:"siteName"},{title:"\u5220\u9664\u65E5\u671F",ellipsis:!0,dataIndex:"deletedAt",search:!1,width:180},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:100,render:function(_,e,A,f){return[(0,u.jsx)(n.Link,{to:"/app/create/image?id="+e.id,type:"link",children:(0,u.jsx)(h.Z,{title:"\u518D\u6B21\u6784\u5EFA",children:(0,u.jsx)(g.Z,{})})},"rebuild")]}}],rowKey:"id",request:function(){var a=l()(s()().mark(function _(e,A,f){var d,U,B;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,(0,o.cl)({pageSize:(d=e.pageSize)!==null&&d!==void 0?d:10,page:(U=e.current)!==null&&U!==void 0?U:1,isDelete:!0,siteTitle:e.siteTitle,siteName:e.siteName});case 2:return B=y.sent,y.abrupt("return",{data:B.data.list,success:!0,total:B.data.total});case 4:case"end":return y.stop()}},_)}));return function(_,e,A){return a.apply(this,arguments)}}(),rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},tableAlertOptionRender:function(_){var e=_.selectedRowKeys;return(0,u.jsx)(c.Z,{size:16,children:(0,u.jsx)(T.Z,{danger:!0,type:"primary",action:function(){return(0,o.xb)({id:e})},onSuccess:function(){var f,d;return!((f=r.current)===null||f===void 0)&&f.reloadAndRest&&((d=r.current)===null||d===void 0||d.reloadAndRest()),!0},onError:function(){var f,d;return!((f=r.current)===null||f===void 0)&&f.reset&&((d=r.current)===null||d===void 0||d.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u6279\u91CF\u5220\u9664"})})},pagination:{pageSize:10},search:{collapsed:!1},tableExtraRender:function(){return(0,u.jsx)(m.Z,{mode:"horizontal",selectedKeys:["recycle"],items:[{label:(0,u.jsx)(n.Link,{to:"/app/list",replace:!0,children:"\u5BB9\u5668\u5217\u8868"}),key:"all"},{label:(0,u.jsx)(n.Link,{to:"/app/recycle",replace:!0,children:"\u56DE\u6536\u7AD9"}),key:"recycle"}]})}})})}},62597:function(L,E,t){t.d(E,{$G:function(){return D},Ct:function(){return R},Tb:function(){return c},cl:function(){return M},iE:function(){return n},lK:function(){return j},xb:function(){return T}});var P=t(15009),s=t.n(P),p=t(99289),l=t.n(p),i=t(54006);function D(r){return o.apply(this,arguments)}function o(){return o=l()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("/api/app/site/create-by-image",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),o.apply(this,arguments)}function M(r){return h.apply(this,arguments)}function h(){return h=l()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("/api/app/site/get-list",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),h.apply(this,arguments)}function c(r){return m.apply(this,arguments)}function m(){return m=l()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.request)("/api/app/log/run",{method:"POST",data:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),m.apply(this,arguments)}function n(r){return g.apply(this,arguments)}function g(){return g=l()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.request)("/api/app/site/get-detail",{data:a,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),g.apply(this,arguments)}function R(r){return O.apply(this,arguments)}function O(){return O=l()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("/api/app/container/delete",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),O.apply(this,arguments)}function T(r){return u.apply(this,arguments)}function u(){return u=l()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("/api/app/site/delete",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),u.apply(this,arguments)}function j(r){return v.apply(this,arguments)}function v(){return v=l()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.request)("/api/app/site/update-title",{method:"POST",data:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},r)})),v.apply(this,arguments)}}}]);

"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1192],{5966:function(he,_,n){var C=n(97685),f=n(1413),Y=n(45987),b=n(21770),z=n(72723),re=n(55241),W=n(97435),T=n(62435),H=n(33468),y=n(86074),le=["fieldProps","proFieldProps"],s=["fieldProps","proFieldProps"],I="text",w=function(h){var i=h.fieldProps,P=h.proFieldProps,S=(0,Y.Z)(h,le);return(0,y.jsx)(H.Z,(0,f.Z)({valueType:I,fieldProps:i,filedConfig:{valueType:I},proFieldProps:P},S))},G=function(h){var i=(0,b.Z)(h.open||!1,{value:h.open,onChange:h.onOpenChange}),P=(0,C.Z)(i,2),S=P[0],ae=P[1];return(0,y.jsx)(z.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(Q){var K,se=Q.getFieldValue(h.name||[]);return(0,y.jsx)(re.Z,(0,f.Z)((0,f.Z)({getPopupContainer:function(O){return O&&O.parentNode?O.parentNode:O},onOpenChange:ae,content:(0,y.jsxs)("div",{style:{padding:"4px 0"},children:[(K=h.statusRender)===null||K===void 0?void 0:K.call(h,se),h.strengthText?(0,y.jsx)("div",{style:{marginTop:10},children:(0,y.jsx)("span",{children:h.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},h.popoverProps),{},{open:S,children:h.children}))}})},F=function(h){var i=h.fieldProps,P=h.proFieldProps,S=(0,Y.Z)(h,s),ae=(0,T.useState)(!1),oe=(0,C.Z)(ae,2),Q=oe[0],K=oe[1];return i!=null&&i.statusRender&&S.name?(0,y.jsx)(G,{name:S.name,statusRender:i==null?void 0:i.statusRender,popoverProps:i==null?void 0:i.popoverProps,strengthText:i==null?void 0:i.strengthText,open:Q,onOpenChange:K,children:(0,y.jsx)("div",{children:(0,y.jsx)(H.Z,(0,f.Z)({valueType:"password",fieldProps:(0,f.Z)((0,f.Z)({},(0,W.Z)(i,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(ee){var O;i==null||(O=i.onBlur)===null||O===void 0||O.call(i,ee),K(!1)},onClick:function(ee){var O;i==null||(O=i.onClick)===null||O===void 0||O.call(i,ee),K(!0)}}),proFieldProps:P,filedConfig:{valueType:I}},S))})}):(0,y.jsx)(H.Z,(0,f.Z)({valueType:"password",fieldProps:i,proFieldProps:P,filedConfig:{valueType:I}},S))},N=w;N.Password=F,N.displayName="ProFormComponent",_.Z=N},80821:function(he,_,n){n.d(_,{Z:function(){return le}});var C=n(5574),f=n.n(C),Y=n(93246),b=n(54006),z=n(31418),re=n(86738),W=n(14726),T=n(83062),H=n(62435),y=n(86074);function le(s){var I=(0,H.useState)(!1),w=f()(I,2),G=w[0],F=w[1],N=z.Z.useApp(),X=(0,b.useIntl)(),h=function(){F(!0),s.action().then(function(P){if(F(!1),typeof s.onSuccess=="function"&&s.onSuccess(P),s.messageSuccess){var S="";s.messageSuccess.indexOf(".")>-1?S=X.formatMessage({id:s.messageSuccess}):S=s.messageSuccess,s.asynced?(0,Y.Rk)(N,S):(0,Y.$h)(N,S)}}).catch(function(P){F(!1),typeof s.onError=="function"&&s.onError(P)})};return s.confirm?(0,y.jsx)(re.Z,{style:{width:500},title:"\u63D0\u793A",description:s.confirm,onConfirm:h,okText:"Yes",cancelText:"No",children:(0,y.jsx)(W.ZP,{disabled:s.disabled,icon:s.icon,loading:G,danger:s.danger,type:s.type,children:s.children})}):(0,y.jsx)(T.Z,{title:s.tips,children:(0,y.jsx)(W.ZP,{disabled:s.disabled,icon:s.icon,loading:G,onClick:h,danger:s.danger,type:s.type,children:s.children})})}},30707:function(he,_,n){n.r(_),n.d(_,{default:function(){return me}});var C=n(15009),f=n.n(C),Y=n(99289),b=n.n(Y),z=n(80821),re=n(5574),W=n.n(re),T=n(54006);function H(o){return y.apply(this,arguments)}function y(){return y=b()(f()().mark(function o(E){return f()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,T.request)("/api/app/volume/get-list",{method:"POST",data:E}));case 1:case"end":return t.stop()}},o)})),y.apply(this,arguments)}function le(o){return s.apply(this,arguments)}function s(){return s=b()(f()().mark(function o(E){return f()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,T.request)("/api/app/volume/create",{method:"POST",data:E}));case 1:case"end":return t.stop()}},o)})),s.apply(this,arguments)}function I(){return w.apply(this,arguments)}function w(){return w=b()(f()().mark(function o(){return f()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,T.request)("/api/app/volume/prune",{method:"POST"});case 2:return v.abrupt("return",v.sent);case 3:case"end":return v.stop()}},o)})),w.apply(this,arguments)}function G(o){return F.apply(this,arguments)}function F(){return F=b()(f()().mark(function o(E){return f()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.request)("/api/app/volume/delete",{method:"POST",data:E});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},o)})),F.apply(this,arguments)}function N(o){return X.apply(this,arguments)}function X(){return X=b()(f()().mark(function o(E){return f()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,T.request)("/api/app/volume/get-detail",{method:"POST",data:E}));case 1:case"end":return t.stop()}},o)})),X.apply(this,arguments)}var h=n(93246),i=n(184),P=n(5966),S=n(62370),ae=n(86615),oe=n(97462),Q=n(17186),K=n(24739),se=n(31418),ee=n(14726),O=n(34041),$=n(62435),e=n(86074),c=(0,$.forwardRef)(function(o,E){var v=(0,$.useState)(!1),t=W()(v,2),d=t[0],a=t[1],j=se.Z.useApp(),g=(0,$.useRef)();return(0,$.useImperativeHandle)(E,function(){return{}}),(0,e.jsxs)(i.a,{name:"create",title:"\u6DFB\u52A0\u5B58\u50A8\u5377",open:d,onOpenChange:function(l){a(l)},formRef:g,trigger:(0,e.jsx)(ee.ZP,{type:"primary",children:"\u6DFB\u52A0"}),onFinish:function(){var B=b()(f()().mark(function l(m){var U,te,q,ue,D,R;return f()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return ue=[],m.otherOptions&&m.otherOptions.map(function(pe){ue.push(pe.name+`
`+pe.value)}),V.next=4,le({name:m.name,driver:"local",type:m.type,nfsUrl:(U=m.nfsUrl)!==null&&U!==void 0?U:"",nfsMountPoint:(te=m.nfsMountPoint)!==null&&te!==void 0?te:"",nfsOptions:(q=m.nfsOptions)!==null&&q!==void 0?q:"",tmpfsOptions:m.tmpfsOptions,otherOptions:ue});case 4:if(D=V.sent,!(D&&D.data&&D.data.info.Name!="")){V.next=10;break}return(0,h.$h)(j,"\u6DFB\u52A0\u5B58\u50A8\u5377\u6210\u529F"),o.onFinish&&o.onFinish(),(R=g.current)===null||R===void 0||R.resetFields(),V.abrupt("return",!0);case 10:case"end":return V.stop()}},l)}));return function(l){return B.apply(this,arguments)}}(),children:[(0,e.jsx)(P.Z,{label:"\u540D\u79F0",name:"name",placeholder:"\u6307\u5B9A\u552F\u4E00\u5B58\u50A8\u5377\u540D\u79F0"}),(0,e.jsx)(S.Z,{label:"\u7C7B\u578B",name:"driver",children:(0,e.jsx)(O.Z,{defaultValue:"local",children:(0,e.jsx)(O.Z.Option,{value:"local",children:"local"})})}),(0,e.jsx)(ae.Z.Group,{name:"type",label:"\u5B58\u50A8\u7C7B\u578B",valueEnum:{default:"\u9ED8\u8BA4",tmpfs:"tmpfs",nfs:"Nfs",nfs4:"Nfs4",other:"\u81EA\u5B9A\u4E49"},initialValue:"default"}),(0,e.jsx)(oe.Z,{name:["type"],children:function(l){var m=l.type;if(m=="other")return(0,e.jsx)(Q.u,{name:"otherOptions",creatorButtonProps:{creatorButtonText:"\u5B58\u50A8"},copyIconProps:!1,min:0,children:(0,e.jsxs)(K.UW,{children:[(0,e.jsx)(P.Z,{name:"name",label:"\u540D\u79F0",placeholder:"\u4F8B\u5982:mountpoint"}),(0,e.jsx)(P.Z,{name:"value",label:"\u503C",placeholder:"\u4F8B\u5982:/etc/path"})]})});if(m=="nfs"||m=="nfs4")return[(0,e.jsx)(P.Z,{label:"\u5730\u5740",name:"nfsUrl",required:!0,rules:[{required:!0}],placeholder:"\u914D\u7F6ENfs\u670D\u52A1\u5730\u5740,\u4F8B\u5982 my.nfs.com \u6216\u662F 172.16.1.13 "},"nfsUrl"),(0,e.jsx)(P.Z,{label:"\u6302\u8F7D\u70B9",name:"nfsMountPoint",required:!0,rules:[{required:!0}],placeholder:"\u4F8B\u5982, /export/share, :/export/share, /share or :/share"},"nfsMountPoint"),(0,e.jsx)(P.Z,{label:"\u914D\u7F6E",name:"nfsOptions",initialValue:"rw,noatime,rsize=8192,wsize=8192,tcp,timeo=14"},"nfsOptions")];if(m=="tmpfs")return[(0,e.jsx)(P.Z,{label:"\u914D\u7F6E",name:"tmpfsOptions",initialValue:"size=100m,uid=1000"},"tmpfsOptions")]}})]})}),x=c,r=n(38345),u=n(45360),M=n(85576),p=n(26412),J=n(63490),A=n(66309),ie=(0,$.forwardRef)(function(o,E){var v;(0,$.useImperativeHandle)(E,function(){return{showDetail:function(R){q.open({type:"loading",content:"\u6B63\u5728\u83B7\u53D6\u5B58\u50A8\u5377\u8BE6\u60C5",duration:0});var de=N({name:R}).then(function(V){m(V.data),j(!0)}).finally(function(){q.destroy()})}}});var t=(0,$.useState)(!1),d=W()(t,2),a=d[0],j=d[1],g=(0,$.useState)(),B=W()(g,2),l=B[0],m=B[1],U=u.ZP.useMessage(),te=W()(U,2),q=te[0],ue=te[1];return(0,e.jsxs)(e.Fragment,{children:[ue,(0,e.jsxs)(M.Z,{width:800,open:a,footer:!1,onCancel:function(){return j(!1)},children:[(0,e.jsx)(r.Z,{title:"\u5B58\u50A8\u8BE6\u60C5",ghost:!0,children:(0,e.jsxs)(p.Z,{labelStyle:{width:"150px"},column:1,bordered:!0,children:[(0,e.jsx)(p.Z.Item,{label:"\u540D\u79F0",children:l==null?void 0:l.info.Name}),(0,e.jsx)(p.Z.Item,{label:"\u521B\u5EFA\u65F6\u95F4",children:new Date((v=l==null?void 0:l.info.CreatedAt)!==null&&v!==void 0?v:"").toLocaleString()}),(0,e.jsx)(p.Z.Item,{label:"\u6302\u8F7D\u70B9",children:l==null?void 0:l.info.Mountpoint}),(0,e.jsx)(p.Z.Item,{label:"\u7C7B\u578B",children:l==null?void 0:l.info.Driver}),(l==null?void 0:l.info.Labels)&&(0,e.jsx)(p.Z.Item,{label:"Lables",children:(0,e.jsx)(p.Z,{labelStyle:{width:"150px"},column:1,bordered:!0,children:(l==null?void 0:l.info.Labels)&&Object.keys(l==null?void 0:l.info.Labels).map(function(D){return(0,e.jsx)(p.Z.Item,{label:D,children:l.info.Labels[D]})})})})]})}),(0,e.jsx)(r.Z,{title:"\u4F7F\u7528\u5BB9\u5668",ghost:!0,children:(0,e.jsx)(J.Z,{rowKey:"Id",columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"Name",render:function(R,de,V){return(0,e.jsx)(T.Link,{target:"_blank",to:"/app/detail/edit/".concat(de.Id),children:de.Name})}},{title:"\u5BB9\u5668\u5185\u8DEF\u5F84",dataIndex:"Mount"},{title:"\u6743\u9650",render:function(R,de,V){return de.RW?(0,e.jsx)(A.Z,{children:"\u8BFB\u5199"}):(0,e.jsx)(A.Z,{children:"\u53EA\u8BFB"})}}],dataSource:l==null?void 0:l.inUseContainer,pagination:!1})})]})]})}),L=ie,fe=n(43425),ne=n(66659),k=n(90639),ce=n(78957),ve=n(96074),Z=n(83062);function me(){var o=(0,$.useRef)(),E=(0,$.useRef)();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(L,{ref:E}),(0,e.jsx)(k.Z,{rowKey:"Name",pagination:{pageSize:10},columns:[{title:"\u540D\u79F0",ellipsis:!0,dataIndex:"Name",width:250},{title:"\u72B6\u6001",ellipsis:!0,search:!1,render:function(t,d,a,j,g){return d.InUse?(0,e.jsx)(A.Z,{color:"cyan",children:"In Use"}):(0,e.jsx)(e.Fragment,{})}},{title:"\u7C7B\u578B",ellipsis:!0,width:80,search:!1,dataIndex:"Driver"},{title:"\u6302\u8F7D\u70B9",ellipsis:!0,search:!1,dataIndex:"Mountpoint"},{title:"\u521B\u5EFA\u65F6\u95F4",ellipsis:!0,width:200,search:!1,dataIndex:"CreatedAt",render:function(t,d,a,j,g){return new Date(d.CreatedAt).toLocaleString()}},{title:"\u64CD\u4F5C",width:100,search:!1,render:function(t,d,a,j,g){return(0,e.jsx)(ce.Z,{split:(0,e.jsx)(ve.Z,{type:"vertical"}),children:(0,e.jsx)(T.Link,{to:"##",onClick:function(){var l;(l=E.current)===null||l===void 0||l.showDetail(d.Name)},children:(0,e.jsx)(Z.Z,{title:"\u7BA1\u7406",children:(0,e.jsx)(fe.Z,{})})})})}}],request:function(){var v=b()(f()().mark(function t(d,a,j){var g,B;return f()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,H({name:d.name});case 2:return g=m.sent,B=[],g.data.inUse?B=g.data.list.map(function(U){return g.data.inUse.indexOf(U.Name)!=-1?U.InUse=!0:U.InUse=!1,U}):B=g.data.list,m.abrupt("return",{data:B,success:!0,total:g.data.list.length});case 6:case"end":return m.stop()}},t)}));return function(t,d,a){return v.apply(this,arguments)}}(),toolBarRender:function(){return[(0,e.jsx)(x,{onFinish:function(){var d,a;!((d=o.current)===null||d===void 0)&&d.reloadAndRest&&((a=o.current)===null||a===void 0||a.reloadAndRest())}}),(0,e.jsx)(z.Z,{action:function(){return I()},onSuccess:function(){var d,a;return!((d=o.current)===null||d===void 0)&&d.reloadAndRest&&((a=o.current)===null||a===void 0||a.reloadAndRest()),!0},onError:function(){var d,a;return!((d=o.current)===null||d===void 0)&&d.reset&&((a=o.current)===null||a===void 0||a.reset()),!0},messageSuccess:"\u6E05\u9664\u6210\u529F",confirm:"\u662F\u5426\u6E05\u7406\u672A\u4F7F\u7528\u7684\u533F\u540D\u5B58\u50A8\uFF1F",children:"\u6E05\u7406\u672A\u4F7F\u7528\u5B58\u50A8"})]},rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},actionRef:o,tableAlertOptionRender:function(t){var d=t.selectedRowKeys;return(0,e.jsxs)(ce.Z,{size:16,children:[(0,e.jsx)(z.Z,{danger:!0,type:"primary",action:function(){return G({name:d})},onSuccess:function(){var j,g;return!((j=o.current)===null||j===void 0)&&j.reloadAndRest&&((g=o.current)===null||g===void 0||g.reloadAndRest()),!0},onError:function(){var j,g;return!((j=o.current)===null||j===void 0)&&j.reset&&((g=o.current)===null||g===void 0||g.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u6279\u91CF\u5220\u9664"}),(0,e.jsxs)(z.Z,{action:function(){},children:[(0,e.jsx)(ne.Z,{})," \u5907\u4EFD"]})]})}})]})}},66309:function(he,_,n){n.d(_,{Z:function(){return $}});var C=n(62435),f=n(97937),Y=n(93967),b=n.n(Y),z=n(98787),re=n(69760),W=n(45353),T=n(53124),H=n(54548),y=n(10274),le=n(14747),s=n(45503),I=n(91945);const w=e=>{const{paddingXXS:c,lineWidth:x,tagPaddingHorizontal:r,componentCls:u,calc:M}=e,p=M(r).sub(x).equal(),J=M(c).sub(x).equal();return{[u]:Object.assign(Object.assign({},(0,le.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:p,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,H.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${u}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${u}-close-icon`]:{marginInlineStart:J,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${u}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${u}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:p}}),[`${u}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},G=e=>{const{lineWidth:c,fontSizeIcon:x,calc:r}=e,u=e.fontSizeSM;return(0,s.TS)(e,{tagFontSize:u,tagLineHeight:(0,H.bf)(r(e.lineHeightSM).mul(u).equal()),tagIconSize:r(x).sub(r(c).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},F=e=>({defaultBg:new y.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var N=(0,I.I$)("Tag",e=>{const c=G(e);return w(c)},F),X=function(e,c){var x={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&c.indexOf(r)<0&&(x[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,r=Object.getOwnPropertySymbols(e);u<r.length;u++)c.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(e,r[u])&&(x[r[u]]=e[r[u]]);return x},i=C.forwardRef((e,c)=>{const{prefixCls:x,style:r,className:u,checked:M,onChange:p,onClick:J}=e,A=X(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:ie,tag:L}=C.useContext(T.E_),fe=me=>{p==null||p(!M),J==null||J(me)},ne=ie("tag",x),[k,ce,ve]=N(ne),Z=b()(ne,`${ne}-checkable`,{[`${ne}-checkable-checked`]:M},L==null?void 0:L.className,u,ce,ve);return k(C.createElement("span",Object.assign({},A,{ref:c,style:Object.assign(Object.assign({},r),L==null?void 0:L.style),className:Z,onClick:fe})))}),P=n(98719);const S=e=>(0,P.Z)(e,(c,x)=>{let{textColor:r,lightBorderColor:u,lightColor:M,darkColor:p}=x;return{[`${e.componentCls}${e.componentCls}-${c}`]:{color:r,background:M,borderColor:u,"&-inverse":{color:e.colorTextLightSolid,background:p,borderColor:p},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var ae=(0,I.bk)(["Tag","preset"],e=>{const c=G(e);return S(c)},F);function oe(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const Q=(e,c,x)=>{const r=oe(x);return{[`${e.componentCls}${e.componentCls}-${c}`]:{color:e[`color${x}`],background:e[`color${r}Bg`],borderColor:e[`color${r}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var K=(0,I.bk)(["Tag","status"],e=>{const c=G(e);return[Q(c,"success","Success"),Q(c,"processing","Info"),Q(c,"error","Error"),Q(c,"warning","Warning")]},F),se=function(e,c){var x={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&c.indexOf(r)<0&&(x[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,r=Object.getOwnPropertySymbols(e);u<r.length;u++)c.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(e,r[u])&&(x[r[u]]=e[r[u]]);return x};const ee=(e,c)=>{const{prefixCls:x,className:r,rootClassName:u,style:M,children:p,icon:J,color:A,onClose:ie,closeIcon:L,closable:fe,bordered:ne=!0}=e,k=se(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:ce,direction:ve,tag:Z}=C.useContext(T.E_),[me,o]=C.useState(!0);C.useEffect(()=>{"visible"in k&&o(k.visible)},[k.visible]);const E=(0,z.o2)(A),v=(0,z.yT)(A),t=E||v,d=Object.assign(Object.assign({backgroundColor:A&&!t?A:void 0},Z==null?void 0:Z.style),M),a=ce("tag",x),[j,g,B]=N(a),l=b()(a,Z==null?void 0:Z.className,{[`${a}-${A}`]:t,[`${a}-has-color`]:A&&!t,[`${a}-hidden`]:!me,[`${a}-rtl`]:ve==="rtl",[`${a}-borderless`]:!ne},r,u,g,B),m=R=>{R.stopPropagation(),ie==null||ie(R),!R.defaultPrevented&&o(!1)},[,U]=(0,re.Z)({closable:fe,closeIcon:L!=null?L:Z==null?void 0:Z.closeIcon,customCloseIconRender:R=>R===null?C.createElement(f.Z,{className:`${a}-close-icon`,onClick:m}):C.createElement("span",{className:`${a}-close-icon`,onClick:m},R),defaultCloseIcon:null,defaultClosable:!1}),te=typeof k.onClick=="function"||p&&p.type==="a",q=J||null,ue=q?C.createElement(C.Fragment,null,q,p&&C.createElement("span",null,p)):p,D=C.createElement("span",Object.assign({},k,{ref:c,className:l,style:d}),ue,U,E&&C.createElement(ae,{key:"preset",prefixCls:a}),v&&C.createElement(K,{key:"status",prefixCls:a}));return j(te?C.createElement(W.Z,{component:"Tag"},D):D)},O=C.forwardRef(ee);O.CheckableTag=i;var $=O}}]);

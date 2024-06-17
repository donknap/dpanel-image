"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3985],{44771:function(te,K,t){t.d(K,{Z:function(){return w}});var G=t(34041),a=t(25449),Y=t(62435),g=t(86074);function w(k){return(0,g.jsx)(a.Z,{name:"restart",initialValue:k.defaultValue?k.defaultValue:"on-failure",children:(0,g.jsx)(G.Z,{options:[{value:"no",label:"\u4E0D\u91CD\u542F"},{value:"on-failure",label:"\u975E\u6B63\u5E38\u9000\u51FA\u65F6,\u6700\u591A5\u6B21 - on failure"},{value:"unless-stopped",label:"\u9000\u51FA\u540E\u91CD\u542F\uFF0C\u4E0D\u5305\u62EC\u624B\u52A8\u505C\u6B62\u7684 - unless stopped"},{value:"always",label:"\u603B\u662F\u9000\u51FA\u540E\u91CD\u542F - always"}]})})}},35880:function(te,K,t){var G=t(62435),a=(0,G.createContext)({});K.Z=a},33369:function(te,K,t){t.r(K),t.d(K,{default:function(){return Ye}});var G=t(15009),a=t.n(G),Y=t(99289),g=t.n(Y),w=t(5574),k=t.n(w),R=t(38345),J=t(97269),V=t(2236),I=t(5966),H=t(97462),q=t(92398),i=t(62435),X=t(35880),L=t(62370),Q=t(12010),U=t(78957),d=t(14726),F=t(85576),M=t(75891),u=t(96074),Z=t(83062),W=t(3393),$=t(18148),c=t(5251),se=t(64789),ge=t(75162),Ee=t(28307),e=t(86074);function _e(E){var S=(0,i.useState)(!1),_=k()(S,2),y=_[0],j=_[1],C=(0,i.useRef)(),p=(0,i.useContext)(X.Z),b=p.createFormRef,x=p.volumeListRef,v=p.createEnvRef,l=p.domainRef,n=(0,i.useRef)(),f=function(){var h=g()(a()().mark(function s(r){var o,O,T,D,N,A,m,B,P,z,le;return a()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return j(!1),re.next=3,(0,W.YU)({md5:r});case 3:D=re.sent,E.redeploy||(B=(N=b.current)===null||N===void 0?void 0:N.getFieldsValue(),(A=b.current)===null||A===void 0||A.resetFields(),(m=b.current)===null||m===void 0||m.setFieldsValue({siteName:B.siteName,siteTitle:B.siteTitle})),D.data.info.Config.Env&&D.data.info.Config.Env.map(function(oe){var ue,he=oe.split("=");(ue=v.current)===null||ue===void 0||ue.addEnvItem(he[0],he[1])}),(o=b.current)===null||o===void 0||o.setFieldValue("imageName",D.data.info.RepoTags[0]),(O=b.current)===null||O===void 0||O.setFieldValue("workDir",D.data.info.Config.WorkingDir),(T=l.current)===null||T===void 0||T.setExposePort(D.data.info.Config.ExposedPorts),D.data.info.Config.Volumes?(z=[],Object.keys(D.data.info.Config.Volumes).map(function(oe,ue){z.push(oe)}),(P=x.current)===null||P===void 0||P.setDefaultDestPath(z)):(le=x.current)===null||le===void 0||le.setDefaultDestPath([]);case 10:case"end":return re.stop()}},s)}));return function(r){return h.apply(this,arguments)}}();return(0,i.useEffect)(function(){E.fromImageId&&f(E.fromImageId)},[E.fromImageId]),(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(U.Z.Compact,{children:[(0,e.jsx)(I.Z,{label:"\u955C\u50CF",tooltip:E.redeploy?"\u66F4\u65B0\u5BB9\u5668\u65F6,\u53EA\u53EF\u4EE5\u9009\u62E9\u8BE5\u955C\u50CF\u4E0B\u7684\u4E0D\u540Ctag.\u4E5F\u53EF\u4EE5\u5F3A\u5236\u66F4\u65B0\u5DF2\u90E8\u7F72tag,\u66F4\u6B21\u90E8\u7F72":"\u65B0\u5EFA\u5BB9\u5668\u65F6,\u53EF\u4EE5\u4F7F\u7528\u672C\u5730\u955C\u50CF,\u4E5F\u53EF\u4EE5\u4E0B\u8F7D\u5168\u65B0\u7684\u955C\u50CF\u6216\u662F\u66F4\u65B0\u672C\u5730\u955C\u50CF\u7684tag",name:"imageName",width:"lg",disabled:!0,placeholder:"\u8BF7\u9009\u62E9\u955C\u50CF\uFF0C\u5982\u679C\u662F\u8FDC\u7A0B\u955C\u50CF\u8BF7\u5148\u4E0B\u8F7D",rules:[{required:!0}],required:!0}),(0,e.jsx)(L.Z,{label:" ",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(d.ZP,{type:"primary",onClick:function(){return j(!0)},children:E.redeploy?"\u66F4\u65B0\u955C\u50CF":"\u9009\u62E9\u955C\u50CF"},"showBtn"),(0,e.jsx)(F.Z,{open:y,width:1024,title:"\u9009\u62E9\u955C\u50CF",footer:!1,onCancel:function(){return j(!1)},children:(0,e.jsx)(Q.Z,{columns:[{title:"Id",dataIndex:"Id",ellipsis:!0,search:!1,width:150},{title:"\u955C\u50CF\u540D\u79F0",dataIndex:"tag",render:function(s,r,o,O){return(0,e.jsx)(M.Z.Text,{code:!0,copyable:!0,children:r.RepoTags[0]},r.RepoTags[0])}},{title:"\u521B\u5EFA\u65E5\u671F",dataIndex:"Created",ellipsis:!0,search:!1,width:"180px",render:function(s,r,o,O){return(0,e.jsx)("div",{children:(0,c.ZM)(r.Created*1e3)},r.Id)},sorter:function(s,r){return s.Created-r.Created}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:"100px",render:function(s,r,o,O){return(0,e.jsxs)(U.Z,{split:(0,e.jsx)(u.Z,{type:"vertical"}),children:[(0,e.jsx)(d.ZP,{size:"small",onClick:g()(a()().mark(function T(){return a()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.abrupt("return",f(r.Id));case 1:case"end":return N.stop()}},T)})),type:"link",icon:(0,e.jsx)(Z.Z,{title:"\u4F7F\u7528\u955C\u50CF",children:(0,e.jsx)(se.Z,{})})},"addImage"),(0,e.jsx)(d.ZP,{size:"small",onClick:g()(a()().mark(function T(){var D;return a()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:r.RepoTags[0]&&((D=n.current)===null||D===void 0||D.setImageName(r.RepoTags[0]));case 1:case"end":return A.stop()}},T)})),type:"link",icon:(0,e.jsx)(Z.Z,{title:"\u66F4\u65B0\u7248\u672C",children:(0,e.jsx)(ge.Z,{})})},"updateImage")]})}}],request:function(){var h=g()(a()().mark(function s(r,o,O){var T,D,N,A;return a()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return E.redeploy&&(D=(T=b.current)===null||T===void 0?void 0:T.getFieldValue("imageName"),r.tag=D?D.split(":")[0]:r.tag),B.next=3,(0,$.KG)({tag:r.tag});case 3:return N=B.sent,A=[],N.data.list&&(A=N.data.list.flatMap(function(P){return P.RepoTags.map(function(z){return{Id:P.Id,Created:P.Created,RepoTags:[z]}})})),B.abrupt("return",{data:A,success:!0,total:A.length});case 7:case"end":return B.stop()}},s)}));return function(s,r,o){return h.apply(this,arguments)}}(),toolBarRender:function(){return[(0,e.jsx)(Ee.Z,{ref:n,onFinish:function(r){var o,O;(o=C.current)===null||o===void 0||o.setFieldValue("tag",r),(O=C.current)===null||O===void 0||O.submit()}},"remote")]},formRef:C,rowKey:"Id",pagination:{pageSize:5}})},"imageTableList")]})})]})})}var ie=t(60335),je=t(24969),Fe=t(27496),ne=t(24739),Ce=t(63434),ee=t(17186),de=t(66309),xe=(0,i.forwardRef)(function(E,S){var _=(0,i.useState)(!1),y=k()(_,2),j=y[0],C=y[1],p=(0,i.useRef)(),b=function(l){var n=(0,i.useState)([]),f=k()(n,2),h=f[0],s=f[1];return(0,i.useEffect)(function(){(0,ie.jV)({md5:l.name}).then(function(r){var o;return s((o=r.data.info.Config.Env)!==null&&o!==void 0?o:[]),!0})},[]),(0,e.jsxs)(R.Z,{bordered:!0,extra:l.action,style:{marginBottom:10},children:[(0,e.jsx)(R.Z,{title:"\u5173\u8054\u4FE1\u606F",children:(0,e.jsxs)(ne.UW,{children:[(0,e.jsx)(I.Z,{label:"\u5BB9\u5668\u540D\u79F0",name:"name",width:"md",readonly:!0}),(0,e.jsx)(I.Z,{label:"\u8BBF\u95EEHostName",name:"alise",width:"md",tooltip:"\u901A\u8FC7\u914D\u7F6E\u6B64\u540D\u79F0\uFF0C\u5728\u5BB9\u5668\u5185\u90E8\u8FDB\u884C\u8BF7\u6C42\u8BBF\u95EE"}),(0,e.jsx)(Ce.Z,{label:"\u5173\u8054\u5B58\u50A8",name:"volume"})]})}),(0,e.jsx)(R.Z,{title:"\u73AF\u5883\u53D8\u91CF",children:(0,e.jsx)(U.Z,{direction:"vertical",children:h&&h.map(function(r,o){return(0,e.jsx)(M.Z.Text,{copyable:{icon:(0,e.jsx)(je.Z,{}),onCopy:function(){var T=r.split("=");E.onAddEnv(T[0],T[1])},tooltips:["add env","success"]},code:!0,ellipsis:{tooltip:r},style:{width:300},children:r},o)})},"linkEnv")})]})},x=function(l){var n,f,h=!1,s=(n=(f=p.current)===null||f===void 0?void 0:f.getList())!==null&&n!==void 0?n:[];if(s.map(function(o){o.name==l.name&&(h=!0)}),!h){var r;(r=p.current)===null||r===void 0||r.add(l)}};return(0,i.useImperativeHandle)(S,function(){return{setDefaultLink:function(l){l&&l.map(function(n){n.name!=""&&x(n)})}}}),(0,e.jsxs)(R.Z,{title:"\u5173\u8054\u5BB9\u5668",headerBordered:!0,children:[(0,e.jsx)(ee.u,{name:"links",actionRef:p,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5173\u8054"},actionGuard:{beforeAddRow:function(l,n){return C(!0),!1}},copyIconProps:!1,min:0,itemRender:function(l,n){return(0,e.jsx)(b,{action:l.action,name:n.record.name})}}),(0,e.jsx)(F.Z,{title:"\u9009\u62E9\u5BB9\u5668",width:1024,footer:!1,open:j,onCancel:function(){return C(!1)},children:(0,e.jsx)(Q.Z,{columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"names",render:function(l,n,f,h){return(0,e.jsx)(U.Z,{direction:"vertical",style:{textAlign:"left"},children:n==null?void 0:n.Names.map(function(s){return s})},n.Id)}},{title:"\u7AEF\u53E3",dataIndex:"ports",search:!1,render:function(l,n,f,h){return n!=null&&n.Ports?(0,e.jsx)(U.Z,{direction:"vertical",style:{textAlign:"left"},children:n==null?void 0:n.Ports.map(function(s,r){return(0,e.jsx)(de.Z,{color:"#2db7f5",icon:s.PublicPort?(0,e.jsx)(Fe.Z,{}):"",children:"".concat(s.PublicPort?s.IP+":"+s.PublicPort+"->":"").concat(s.PrivatePort,"/").concat(s.Type)},r)})},n.Id):(0,e.jsx)(e.Fragment,{})}},{title:"\u8FD0\u884C\u5BB9\u5668",search:!1,render:function(l,n,f,h){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(M.Z.Text,{ellipsis:{tooltip:n.Image},children:n.Image},n.Id)})}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",ellipsis:!0,width:100,render:function(l,n,f,h){return[(0,e.jsx)(d.ZP,{type:"link",onClick:function(){(0,ie.jV)({md5:n.Id}).then(function(r){return x({name:r.data.info.Name,alise:r.data.info.Config.Hostname,volume:!1}),C(!1),!0})},children:(0,e.jsx)(se.Z,{})},n.Id)]}}],rowKey:"Id",request:function(){var v=g()(a()().mark(function l(n,f,h){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise(function(o,O){(0,ie.IE)({tag:n.names}).then(function(T){var D={data:T.data.list,success:!0,total:T.data.list.length};o(D)})}));case 1:case"end":return r.stop()}},l)}));return function(l,n,f){return v.apply(this,arguments)}}(),pagination:{pageSize:5}})})]})}),De=xe,Be=t(89035),ye=t(20713),ce="docker-image",Pe=(0,i.forwardRef)(function(E,S){var _=(0,i.useState)(ce),y=k()(_,2),j=y[0],C=y[1],p=(0,i.useRef)(),b=(0,i.useState)(""),x=k()(b,2),v=x[0],l=x[1],n=function(){j!="code"?C("code"):C(ce)};(0,i.useImperativeHandle)(S,function(){return{addEnvItem:function(r,o){var O,T=(O=p.current)===null||O===void 0?void 0:O.getList(),D=!1;if(T==null||T.map(function(A){if(A.name==r){D=!0;return}}),!D){var N;(N=p.current)===null||N===void 0||N.add({name:r,value:o})}}}});function f(s){try{for(var r,o,O=(r=(o=p.current)===null||o===void 0||(o=o.getList())===null||o===void 0?void 0:o.length)!==null&&r!==void 0?r:0,T=O;T>=0;T--){var D;(D=p.current)===null||D===void 0||D.remove(T)}var N=s.split(`
`),A=0;N.map(function(m){var B,P=m.split("=");P.length==2&&((B=p.current)===null||B===void 0||B.add({name:P[0],value:P[1]},A),A++)})}catch(m){}}function h(){if(p){var s,r=(s=p.current)===null||s===void 0?void 0:s.getList();if(r){var o=[];return r.map(function(O){o.push("".concat(O.name,"=").concat(O.value))}),o.join(`
`)}else return""}else return""}return(0,e.jsxs)(R.Z,{title:"\u73AF\u5883\u53D8\u91CF",headerBordered:!0,extra:(0,e.jsx)(Z.Z,{title:"\u4EE3\u7801\u7F16\u8F91\u6A21\u5F0F",children:(0,e.jsx)(d.ZP,{icon:(0,e.jsx)(Be.Z,{}),type:j=="code"?"primary":"default",onClick:n,children:"\u4EE3\u7801\u6A21\u5F0F"})}),children:[(0,e.jsx)(ee.u,{name:"environment",actionRef:p,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5BB9\u5668\u73AF\u5883\u53D8\u91CF"},copyIconProps:!1,min:0,children:(0,e.jsxs)(ne.UW,{children:[(0,e.jsx)(I.Z,{width:"md",name:"name",label:"\u53D8\u91CF\u540D",placeholder:""}),(0,e.jsx)(I.Z,{width:"md",name:"value",label:"\u53D8\u91CF\u503C",placeholder:""})]})}),(0,e.jsx)(F.Z,{width:"800px",open:j=="code",onCancel:function(){return C("docker-image")},onOk:function(){f(v),C("docker-image")},children:(0,e.jsx)(ye.ZP,{onChange:function(r){return l(r)},value:h(),height:"680px",theme:"light"})})]})}),we=Pe,Re=t(86615),Ie=t(64317),be=(0,i.forwardRef)(function(E,S){var _=(0,i.useRef)();return(0,i.useImperativeHandle)(S,function(){return{setDefaultDestPath:function(j){var C,p,b=(C=(p=_.current)===null||p===void 0?void 0:p.getList())!==null&&C!==void 0?C:[];j.length!=0&&j.filter(function(x){return x!=""}).map(function(x){var v=!1;if(b.map(function(n){if(n.dest==x){v=!0;return}}),!v){var l;(l=_.current)===null||l===void 0||l.add({dest:x,permission:"write",inImage:!0,edit:!1})}})}}}),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(R.Z,{title:"\u7AD9\u70B9\u5B58\u50A8\uFF08Volume\uFF09",subTitle:"\u9ED8\u8BA4\u4F1A\u5C06\u5BB9\u5668\u5185\u4F7F\u7528\u7684\u6570\u636E\u5377\u6302\u8F7D\u5230\u9ED8\u8BA4\u5B58\u50A8\u4E2D",headerBordered:!0,children:(0,e.jsx)(ee.u,{name:"volumesDefault",creatorButtonProps:{creatorButtonText:"\u7ED1\u5B9A\u76EE\u5F55\u5230\u9ED8\u8BA4\u5B58\u50A8"},actionRef:_,copyIconProps:!1,min:0,children:function(j,C,p){var b=p.getCurrentRowData();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(I.Z,{width:"lg",name:"dest",label:"\u5BB9\u5668\u5185\u8DEF\u5F84",disabled:b.inImage}),(0,e.jsx)(Re.Z.Group,{hidden:!0,name:"inImage",label:"\u955C\u50CF\u5185\u6302\u8F7D",valueEnum:{1:"\u662F",0:"\u5426"}})]})}})}),(0,e.jsx)(R.Z,{title:"\u6302\u8F7D\u5BBF\u4E3B\u673A\u6587\u4EF6\uFF08Bind\uFF09",subTitle:"\u6302\u8F7D\u5BB9\u5668\u5185\u9700\u8981\u8BBF\u95EE\u5BBF\u4E3B\u673A\u7684\u6587\u4EF6",headerBordered:!0,direction:"column",children:(0,e.jsx)(ee.u,{name:"volumes",creatorButtonProps:{creatorButtonText:"\u6302\u8F7D\u76EE\u5F55\u6216\u662F\u5176\u5B83\u5B58\u50A8"},copyIconProps:!1,min:0,children:(0,e.jsxs)(ne.UW,{children:[(0,e.jsxs)(U.Z.Compact,{children:[(0,e.jsx)(I.Z,{label:"\u5BBF\u4E3B\u673A\u6587\u4EF6\u6216\u76EE\u5F55",name:"host",width:"md"}),(0,e.jsx)(Ie.Z,{label:" ",valueEnum:{write:"\u8BFB\u5199",readonly:"\u53EA\u8BFB"},initialValue:"write",name:"permission"})]}),(0,e.jsx)(I.Z,{label:"\u5BB9\u5668\u5185\u8DEF\u5F84",name:"dest",width:"md"})]})})})]})}),Te=be,Ae=t(2831),Ze=t(10418),me=t(71338);function Se(){var E=(0,i.useState)(),S=k()(E,2),_=S[0],y=S[1];return(0,i.useEffect)(function(){(0,Ae.a)().then(function(j){return y(j.data.info)})},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(L.Z,{label:"\u5171\u4EAB\u5185\u5B58\u5927\u5C0F - /dev/shm",name:"shmsize",initialValue:64,children:(0,e.jsx)(Ze.Z,{addonAfter:"MB",min:64})}),(0,e.jsx)(L.Z,{label:"\u6700\u5927Cpu\u914D\u989D",name:"cpus",tooltip:"0 \u4E3A\u4E0D\u9650\u5236",children:(0,e.jsx)(me.Z,{step:.1,max:_==null?void 0:_.NCPU,marks:{0:"\u4E0D\u9650\u5236",.5:"0.5\u6838",1:"1\u6838",1.5:"1.5\u6838",2:"2\u6838",4:"4\u6838",6:"6\u6838",8:"8\u6838"}})}),(0,e.jsx)(L.Z,{label:"\u6700\u5927\u5185\u5B58\u914D\u989D",name:"memory",tooltip:"0 \u4E3A\u4E0D\u9650\u5236",children:(0,e.jsx)(me.Z,{step:256,max:Math.round((_==null?void 0:_.MemTotal)/1024/1024),marks:{0:"\u4E0D\u9650\u5236",1024:"1G",2048:"2G",3072:"3G",4096:"2G"}})})]})}function Oe(){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(ee.u,{name:"label",creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5BB9\u5668\u6807\u7B7E"},copyIconProps:!1,min:0,children:(0,e.jsxs)(ne.UW,{children:[(0,e.jsx)(I.Z,{width:"md",name:"name",label:"\u540D\u79F0",placeholder:""}),(0,e.jsx)(I.Z,{width:"md",name:"value",label:"\u503C",placeholder:""})]})})})}var ke=t(52688),Me=t(69677);function fe(E){var S=(0,i.useState)(""),_=k()(S,2),y=_[0],j=_[1],C=(0,i.useState)("default"),p=k()(C,2),b=p[0],x=p[1],v=function(f){return(0,e.jsx)(d.ZP,{type:b==f.type?"primary":"default",onClick:function(){return l(f.type)},children:f.text})},l=function(f){if(x(f),f=="default")j("");else{var h;j((h=E.value)!==null&&h!==void 0?h:"")}};return(0,i.useEffect)(function(){E.value&&(j(E.value),x("user"))},[E.value]),(0,e.jsx)(L.Z,{label:E.label,tooltip:E.tooltip,name:E.name,children:(0,e.jsxs)(U.Z.Compact,{children:[(0,e.jsx)(v,{text:"\u4F7F\u7528\u9ED8\u8BA4",type:"default"}),(0,e.jsx)(v,{text:"\u81EA\u5B9A\u4E49",type:"user"}),(0,e.jsx)(Me.Z,{disabled:b=="default",value:y,style:{width:"500px"},onChange:function(f){j(f.target.value)}})]})})}fe.defaultProps={};var ae=fe,Ne=t(44771);function Le(){var E,S,_,y,j,C,p,b,x=(0,i.useContext)(X.Z),v=x.createFormRef,l=x.volumeListRef,n=x.domainRef,f=x.createEnvRef,h=x.createLinkRef;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ne.Z,{}),(0,e.jsx)(ke.Z,{name:"privileged",label:"\u8D4B\u4E88\u5BB9\u5668Root\u6743\u9650",initialValue:!1}),(0,e.jsx)(ae,{label:"\u5DE5\u4F5C\u76EE\u5F55",tooltip:"\u9ED8\u8BA4\u4F7F\u7528\u955C\u50CF\u4E2D\u6307\u5B9A\u7684\u5DE5\u4F5C\u76EE\u5F55",name:"workDir",value:(E=(S=v.current)===null||S===void 0?void 0:S.getFieldValue("workDir"))!==null&&E!==void 0?E:""}),(0,e.jsx)(ae,{label:"User",tooltip:"\u5728\u5BB9\u5668\u4E2D\u8FD0\u884C\u547D\u4EE4\u7684\u7528\u6237",name:"user",value:(_=(y=v.current)===null||y===void 0?void 0:y.getFieldValue("user"))!==null&&_!==void 0?_:""}),(0,e.jsx)(ae,{label:"Command",tooltip:"\u542F\u52A8\u5BB9\u5668\u65F6\u8FD0\u884C\u7684\u547D\u4EE4\uFF0C\u4EE5\u7A7A\u683C\u5206\u9694",name:"command",value:(j=(C=v.current)===null||C===void 0?void 0:C.getFieldValue("command"))!==null&&j!==void 0?j:""}),(0,e.jsx)(ae,{label:"Entrypoint",tooltip:"\u65E0\u6CD5\u8986\u76D6\u955C\u50CF\u4E2D\u5DF2\u7ECF\u6307\u5B9A\u7684 Entrypoint \u547D\u4EE4",name:"entrypoint",value:(p=(b=v.current)===null||b===void 0?void 0:b.getFieldValue("entrypoint"))!==null&&p!==void 0?p:""})]})}var Ue=t(91845),pe=t(62597),ve=t(54006),We=t(14946),$e=t(93246),Ke=t(31418),Ve=(0,i.forwardRef)(function(E,S){var _=(0,i.useState)(!1),y=k()(_,2),j=y[0],C=y[1],p=(0,i.useRef)(),b=Ke.Z.useApp();(0,i.useImperativeHandle)(S,function(){return{}});var x=function(l){var n,f,h=!1,s=(n=(f=p.current)===null||f===void 0?void 0:f.getList())!==null&&n!==void 0?n:[];if(s.map(function(o){o.name==l.name&&(h=!0)}),!h){var r;(r=p.current)===null||r===void 0||r.add(l)}};return(0,e.jsxs)(R.Z,{title:"\u5173\u8054\u7F51\u7EDC",headerBordered:!0,children:[(0,e.jsx)(ee.u,{name:"network",actionRef:p,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u7F51\u7EDC"},actionGuard:{beforeAddRow:function(l,n){return!E.siteName||E.siteName==""||typeof E.siteName=="undefined"?((0,$e.YZ)(b,"\u8BF7\u8F93\u5165\u7AD9\u70B9\u6807\u8BC6"),!1):(C(!0),!1)}},copyIconProps:!1,min:0,itemRender:function(l,n){return(0,e.jsxs)(ne.UW,{children:[(0,e.jsx)(I.Z,{label:"\u7F51\u7EDC\u540D\u79F0",name:"name",width:"md",disabled:!0,fieldProps:{value:n.record.name}}),(0,e.jsx)(L.Z,{label:"\u8BBF\u95EEHostname",name:"alise",children:(0,e.jsx)(M.Z.Text,{code:!0,copyable:!0,children:n.record.alise})}),(0,e.jsx)(L.Z,{label:" ",children:l.action})]})}}),(0,e.jsx)(F.Z,{title:"\u9009\u62E9\u7F51\u7EDC",width:1024,footer:!1,open:j,onCancel:function(){return C(!1)},children:(0,e.jsx)(Q.Z,{rowKey:"Name",columns:[{title:"\u540D\u79F0",dataIndex:"Name",render:function(l,n,f,h,s){return n.Name=="none"||n.Name=="bridge"||n.Name=="host"?(0,e.jsxs)(e.Fragment,{children:[n.Name," ",(0,e.jsx)(de.Z,{color:"blue",children:"System"})]}):(0,e.jsx)(e.Fragment,{children:l})}},{title:"\u7C7B\u578B",ellipsis:!0,width:80,dataIndex:"Driver",search:!1},{title:"IPAM Driver",ellipsis:!0,width:120,search:!1,dataIndex:["IPAM","Driver"]},{title:"IPV4 IPAM Subnet",ellipsis:!0,width:150,search:!1,dataIndex:["IPAM","Config",0,"Subnet"]},{title:"\u64CD\u4F5C",width:100,search:!1,render:function(l,n,f,h,s){return[(0,e.jsx)(d.ZP,{type:"link",onClick:function(){var o;x({name:n.Name,alise:[((o=E.siteName)!==null&&o!==void 0?o:"")+".pod.dpanel.local"]}),C(!1)},children:(0,e.jsx)(se.Z,{})},n.Id)]}}],request:function(){var v=g()(a()().mark(function l(n,f,h){var s;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,We.jR)({name:n.Name});case 2:return s=o.sent,o.abrupt("return",{data:s.data.list,success:!0,total:s.data.list.length});case 4:case"end":return o.stop()}},l)}));return function(l,n,f){return v.apply(this,arguments)}}(),pagination:{pageSize:10}})})]})}),Ge=Ve,He=(0,i.forwardRef)(function(E,S){var _=(0,i.useState)(""),y=k()(_,2),j=y[0],C=y[1],p=(0,i.useRef)();return(0,i.useImperativeHandle)(S,function(){return{setExposePort:function(x){if(x){var v,l,n=(v=(l=p.current)===null||l===void 0?void 0:l.getList())!==null&&v!==void 0?v:[];Object.keys(x).map(function(f){var h=!1;if(n.map(function(r){r.dest==f&&(h=!0)}),!h){var s;(s=p.current)===null||s===void 0||s.add({host:"",dest:f})}})}},setHostname:function(x){C(x)}}}),(0,e.jsx)(R.Z,{title:"\u66B4\u9732\u7AEF\u53E3",headerBordered:!0,children:(0,e.jsx)(ee.u,{name:"ports",actionRef:p,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5BF9\u5916\u90E8\u8BBF\u95EE"},min:0,copyIconProps:!1,children:(0,e.jsxs)(ne.UW,{children:[(0,e.jsx)(I.Z,{width:"md",name:"host",label:"\u5916\u90E8\u8BBF\u95EE\u57DF\u540D\u6216\u662F\u7AEF\u53E3",tooltip:"\u5BF9\u5916\u8BBF\u95EE\u53EF\u4EE5\u901A\u8FC7\u7ED1\u5B9A\u57DF\u540D\u8F6C\u53D1\u6216\u662F\u76F4\u63A5\u66B4\u9732\u7AEF\u53E3",placeholder:"\u7559\u7A7A\u5C06\u4F7F\u7528\u968F\u673A\u7AEF\u53E3"}),(0,e.jsx)(I.Z,{label:"\u5BB9\u5668\u5185\u7AEF\u53E3",width:"md",name:"dest",placeholder:"\u6784\u5EFA\u65F6 Expose \u6307\u5B9A\u7684\u7AEF\u53E3"})]})})})}),ze=He;function Ye(){var E,S,_,y=(0,i.useContext)(X.Z),j=y.createFormRef,C=y.volumeListRef,p=y.domainRef,b=y.createEnvRef,x=y.createLinkRef,v=(0,i.useState)(!1),l=k()(v,2),n=l[0],f=l[1],h=(0,ve.useSearchParams)(),s=k()(h,2),r=s[0],o=s[1],O=(0,ve.useNavigate)(),T=parseInt((E=r.get("id"))!==null&&E!==void 0?E:""),D=(S=r.get("md5"))!==null&&S!==void 0?S:"",N=(_=r.get("imageId"))!==null&&_!==void 0?_:"";return(0,i.useEffect)(function(){if(D||T)(0,pe.iE)({md5:D,id:T}).then(function(m){var B;f(!0),m.data.env.network&&m.data.env.network.map(function(P){return!P.alise&&P.name!="bridge"&&(P.alise=[m.data.siteName+".pod.dpanel.local"]),P}),m.data.env.ports&&m.data.env.ports.map(function(P){return P.host=="0"&&(P.host=""),P}),(B=j.current)===null||B===void 0||B.setFieldsValue({siteTitle:m.data.siteTitle,siteName:m.data.siteName,imageName:m.data.env.imageName,privileged:m.data.env.privileged,workDir:m.data.env.workDir,user:m.data.env.user,command:m.data.env.command,entrypoint:m.data.env.entrypoint,shmsize:m.data.env.shmsize,cpus:m.data.env.cpus,memory:m.data.env.memory,environment:m.data.env.environment,label:m.data.env.label,volumesDefault:m.data.env.volumesDefault,volumes:m.data.env.volumes,ports:m.data.env.ports,links:m.data.env.links,network:m.data.env.network,restart:m.data.env.restart})});else{var A;f(!1),(A=j.current)===null||A===void 0||A.resetFields()}},[r]),(0,e.jsx)(R.Z,{direction:"column",gutter:[0,10],children:(0,e.jsxs)(J.A,{submitter:{render:function(m,B){return(0,e.jsx)(V.S,{children:B})}},formRef:j,onFinish:function(){var A=g()(a()().mark(function m(B){return a()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return B.md5=D,z.next=3,(0,pe.$G)(B);case 3:return O("/app/list"),z.abrupt("return",!0);case 5:case"end":return z.stop()}},m)}));return function(m){return A.apply(this,arguments)}}(),children:[(0,e.jsxs)(R.Z,{title:"\u57FA\u7840\u4FE1\u606F",headerBordered:!0,children:[(0,e.jsx)(I.Z,{name:"siteTitle",label:"\u7AD9\u70B9\u540D\u79F0",required:!0,rules:[{required:!0}],fieldProps:{onChange:function(m){var B="";if(m.target.value&&!n){var P,z=(0,Ue.N9)(m.target.value.trim(),{toneType:"none",type:"array"});B=z.join(""),(P=j.current)===null||P===void 0||P.setFieldValue("siteName",B)}}},placeholder:"\u8BF7\u8F93\u5165\u7AD9\u70B9\u540D\u79F0"}),(0,e.jsx)(I.Z,{name:"siteName",label:"\u7AD9\u70B9\u6807\u8BC6",tooltip:"\u7AD9\u70B9\u552F\u4E00\u6807\u8BC6\uFF0C\u7528\u4E8E\u6807\u8BC6\u7AD9\u70B9\u548C\u5185\u90E8\u8BBF\u95EE",required:!0,disabled:n,rules:[{required:!0}],placeholder:"\u8BF7\u8F93\u5165\u7AD9\u70B9\u540D\u79F0"}),(0,e.jsx)(_e,{redeploy:n,fromImageId:N})]}),(0,e.jsx)(ze,{ref:p}),(0,e.jsx)(De,{onAddEnv:function(m,B){var P;(P=b.current)===null||P===void 0||P.addEnvItem(m,B)},ref:x}),(0,e.jsx)(H.Z,{name:["siteName"],children:function(m){var B=m.siteName;return(0,e.jsx)(Ge,{siteName:B})}}),(0,e.jsx)(we,{ref:b}),(0,e.jsx)(Te,{ref:C}),(0,e.jsx)(R.Z,{title:"\u9AD8\u7EA7\u914D\u7F6E",headerBordered:!0,collapsible:!0,defaultCollapsed:!0,children:(0,e.jsx)(q.Z,{items:[{label:"\u542F\u52A8\u9879",key:"run-command",children:(0,e.jsx)(Le,{})},{label:"\u8D44\u6E90\u914D\u7F6E",key:"runtime",children:(0,e.jsx)(Se,{})},{label:"\u6807\u7B7E",key:"label",children:(0,e.jsx)(Oe,{})}]})})]},"form")})}},62597:function(te,K,t){t.d(K,{$G:function(){return k},Ct:function(){return X},Tb:function(){return I},cl:function(){return J},iE:function(){return q},xb:function(){return Q}});var G=t(15009),a=t.n(G),Y=t(99289),g=t.n(Y),w=t(54006);function k(d){return R.apply(this,arguments)}function R(){return R=g()(a()().mark(function d(F){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,w.request)("/api/app/site/create-by-image",{method:"POST",data:F}));case 1:case"end":return u.stop()}},d)})),R.apply(this,arguments)}function J(d){return V.apply(this,arguments)}function V(){return V=g()(a()().mark(function d(F){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,w.request)("/api/app/site/get-list",{method:"POST",data:F}));case 1:case"end":return u.stop()}},d)})),V.apply(this,arguments)}function I(d){return H.apply(this,arguments)}function H(){return H=g()(a()().mark(function d(F){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,w.request)("/api/app/log/run",{method:"POST",data:F});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},d)})),H.apply(this,arguments)}function q(d){return i.apply(this,arguments)}function i(){return i=g()(a()().mark(function d(F){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,w.request)("/api/app/site/get-detail",{data:F,method:"POST"});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},d)})),i.apply(this,arguments)}function X(d){return L.apply(this,arguments)}function L(){return L=g()(a()().mark(function d(F){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,w.request)("/api/app/container/delete",{method:"POST",data:F}));case 1:case"end":return u.stop()}},d)})),L.apply(this,arguments)}function Q(d){return U.apply(this,arguments)}function U(){return U=g()(a()().mark(function d(F){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,w.request)("/api/app/site/delete",{method:"POST",data:F}));case 1:case"end":return u.stop()}},d)})),U.apply(this,arguments)}},2831:function(te,K,t){t.d(K,{a:function(){return k}});var G=t(15009),a=t.n(G),Y=t(99289),g=t.n(Y),w=t(54006);function k(){return R.apply(this,arguments)}function R(){return R=g()(a()().mark(function J(){return a()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,(0,w.request)("/api/common/home/info",{method:"POST"});case 2:return I.abrupt("return",I.sent);case 3:case"end":return I.stop()}},J)})),R.apply(this,arguments)}},14946:function(te,K,t){t.d(K,{CI:function(){return I},HY:function(){return d},IS:function(){return k},XY:function(){return X},_3:function(){return M},_x:function(){return q},jR:function(){return J},t9:function(){return Q}});var G=t(15009),a=t.n(G),Y=t(99289),g=t.n(Y),w=t(54006);function k(Z){return R.apply(this,arguments)}function R(){return R=g()(a()().mark(function Z(W){return a()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,w.request)("/api/app/network/get-detail",{method:"POST",data:W}));case 1:case"end":return c.stop()}},Z)})),R.apply(this,arguments)}function J(Z){return V.apply(this,arguments)}function V(){return V=g()(a()().mark(function Z(W){return a()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,w.request)("/api/app/network/get-list",{method:"POST",data:W}));case 1:case"end":return c.stop()}},Z)})),V.apply(this,arguments)}function I(){return H.apply(this,arguments)}function H(){return H=g()(a()().mark(function Z(){return a()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,(0,w.request)("/api/app/network/prune",{method:"POST"});case 2:return $.abrupt("return",$.sent);case 3:case"end":return $.stop()}},Z)})),H.apply(this,arguments)}function q(Z){return i.apply(this,arguments)}function i(){return i=g()(a()().mark(function Z(W){return a()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,w.request)("/api/app/network/delete",{method:"POST",data:W});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},Z)})),i.apply(this,arguments)}function X(Z){return L.apply(this,arguments)}function L(){return L=g()(a()().mark(function Z(W){return a()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,w.request)("/api/app/network/create",{method:"POST",data:W});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},Z)})),L.apply(this,arguments)}function Q(Z){return U.apply(this,arguments)}function U(){return U=g()(a()().mark(function Z(W){return a()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,w.request)("/api/app/network/disconnect",{method:"POST",data:W});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},Z)})),U.apply(this,arguments)}function d(Z){return F.apply(this,arguments)}function F(){return F=g()(a()().mark(function Z(W){return a()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,w.request)("/api/app/network/connect",{method:"POST",data:W});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},Z)})),F.apply(this,arguments)}function M(Z){return u.apply(this,arguments)}function u(){return u=g()(a()().mark(function Z(W){return a()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,w.request)("/api/app/network/get-container-list",{method:"POST",data:W}));case 1:case"end":return c.stop()}},Z)})),u.apply(this,arguments)}},60335:function(te,K,t){t.d(K,{IE:function(){return J},IW:function(){return k},KK:function(){return X},LJ:function(){return Q},eE:function(){return q},jV:function(){return I}});var G=t(15009),a=t.n(G),Y=t(99289),g=t.n(Y),w=t(54006);function k(d){return R.apply(this,arguments)}function R(){return R=g()(a()().mark(function d(F){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,w.request)("/api/app/container/status",{method:"POST",data:F}));case 1:case"end":return u.stop()}},d)})),R.apply(this,arguments)}function J(d){return V.apply(this,arguments)}function V(){return V=g()(a()().mark(function d(F){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,w.request)("/api/app/container/get-list",{data:F,method:"POST"}));case 1:case"end":return u.stop()}},d)})),V.apply(this,arguments)}function I(d){return H.apply(this,arguments)}function H(){return H=g()(a()().mark(function d(F){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,w.request)("/api/app/container/get-detail",{data:F,method:"POST"}));case 1:case"end":return u.stop()}},d)})),H.apply(this,arguments)}function q(d){return i.apply(this,arguments)}function i(){return i=g()(a()().mark(function d(F){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,w.request)("/api/app/container/update",{data:F,method:"POST"}));case 1:case"end":return u.stop()}},d)})),i.apply(this,arguments)}function X(){return L.apply(this,arguments)}function L(){return L=g()(a()().mark(function d(){return a()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.abrupt("return",(0,w.request)("/api/app/container/prune",{method:"POST"}));case 1:case"end":return M.stop()}},d)})),L.apply(this,arguments)}function Q(d){return U.apply(this,arguments)}function U(){return U=g()(a()().mark(function d(F){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,w.request)("/api/app/container/export",{method:"POST",data:F,responseType:"blob"}));case 1:case"end":return u.stop()}},d)})),U.apply(this,arguments)}}}]);

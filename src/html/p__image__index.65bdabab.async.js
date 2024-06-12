"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1764],{1977:function(q,L,r){r.d(L,{n:function(){return _}});var e=r(97685),T=r(71002),A=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,x=function(a){return a==="*"||a==="x"||a==="X"},B=function(a){var i=parseInt(a,10);return isNaN(i)?a:i},Y=function(a,i){return(0,T.Z)(a)!==(0,T.Z)(i)?[String(a),String(i)]:[a,i]},U=function(a,i){if(x(a)||x(i))return 0;var l=Y(B(a),B(i)),p=(0,e.Z)(l,2),I=p[0],W=p[1];return I>W?1:I<W?-1:0},k=function(a,i){for(var l=0;l<Math.max(a.length,i.length);l++){var p=U(a[l]||"0",i[l]||"0");if(p!==0)return p}return 0},X=function(a){var i,l=a.match(A);return l==null||(i=l.shift)===null||i===void 0||i.call(l),l},_=function(a,i){var l=X(a),p=X(i),I=l.pop(),W=p.pop(),Q=k(l,p);return Q!==0?Q:I||W?I?-1:1:0}},15888:function(q,L,r){r.r(L),r.d(L,{default:function(){return B}});var e=r(6110),T=r(54006),A=r(14726),x=r(86074);function B(){return(0,x.jsx)(e._z,{header:{extra:[(0,x.jsx)(A.ZP,{type:"primary",children:(0,x.jsx)(T.Link,{to:"/image/create",children:"\u521B\u5EFA\u955C\u50CF"})},"create")]},children:(0,x.jsx)(T.Outlet,{})})}},7134:function(q,L,r){r.d(L,{C:function(){return me}});var e=r(62435),T=r(93967),A=r.n(T),x=r(9220),B=r(42550),Y=r(74443),U=r(53124),k=r(98675),X=r(25378),g=e.createContext({}),a=r(54548),i=r(14747),l=r(91945),p=r(45503);const I=t=>{const{antCls:s,componentCls:o,iconCls:n,avatarBg:u,avatarColor:R,containerSize:E,containerSizeLG:v,containerSizeSM:z,textFontSize:f,textFontSizeLG:j,textFontSizeSM:V,borderRadius:h,borderRadiusLG:S,borderRadiusSM:$,lineWidth:N,lineType:D}=t,M=(b,O,F)=>({width:b,height:b,borderRadius:"50%",[`&${o}-square`]:{borderRadius:F},[`&${o}-icon`]:{fontSize:O,[`> ${n}`]:{margin:0}}});return{[o]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,i.Wf)(t)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:R,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:u,border:`${(0,a.bf)(N)} ${D} transparent`,["&-image"]:{background:"transparent"},[`${s}-image-img`]:{display:"block"}}),M(E,f,h)),{["&-lg"]:Object.assign({},M(v,j,S)),["&-sm"]:Object.assign({},M(z,V,$)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},W=t=>{const{componentCls:s,groupBorderColor:o,groupOverlapping:n,groupSpace:u}=t;return{[`${s}-group`]:{display:"inline-flex",[`${s}`]:{borderColor:o},["> *:not(:first-child)"]:{marginInlineStart:n}},[`${s}-group-popover`]:{[`${s} + ${s}`]:{marginInlineStart:u}}}},Q=t=>{const{controlHeight:s,controlHeightLG:o,controlHeightSM:n,fontSize:u,fontSizeLG:R,fontSizeXL:E,fontSizeHeading3:v,marginXS:z,marginXXS:f,colorBorderBg:j}=t;return{containerSize:s,containerSizeLG:o,containerSizeSM:n,textFontSize:Math.round((R+E)/2),textFontSizeLG:v,textFontSizeSM:u,groupSpace:f,groupOverlapping:-z,groupBorderColor:j}};var ee=(0,l.I$)("Avatar",t=>{const{colorTextLightSolid:s,colorTextPlaceholder:o}=t,n=(0,p.TS)(t,{avatarBg:o,avatarColor:s});return[I(n),W(n)]},Q),te=r(35792),le=function(t,s){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&s.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,n=Object.getOwnPropertySymbols(t);u<n.length;u++)s.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(t,n[u])&&(o[n[u]]=t[n[u]]);return o};const ce=(t,s)=>{const[o,n]=e.useState(1),[u,R]=e.useState(!1),[E,v]=e.useState(!0),z=e.useRef(null),f=e.useRef(null),j=(0,B.sQ)(s,z),{getPrefixCls:V,avatar:h}=e.useContext(U.E_),S=e.useContext(g),$=()=>{if(!f.current||!z.current)return;const c=f.current.offsetWidth,d=z.current.offsetWidth;if(c!==0&&d!==0){const{gap:P=4}=t;P*2<d&&n(d-P*2<c?(d-P*2)/c:1)}};e.useEffect(()=>{R(!0)},[]),e.useEffect(()=>{v(!0),n(1)},[t.src]),e.useEffect($,[t.gap]);const N=()=>{const{onError:c}=t;(c==null?void 0:c())!==!1&&v(!1)},{prefixCls:D,shape:M,size:b,src:O,srcSet:F,icon:C,className:H,rootClassName:G,alt:K,draggable:ge,children:w,crossOrigin:pe}=t,J=le(t,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),m=(0,k.Z)(c=>{var d,P;return(P=(d=b!=null?b:S==null?void 0:S.size)!==null&&d!==void 0?d:c)!==null&&P!==void 0?P:"default"}),he=Object.keys(typeof m=="object"?m||{}:{}).some(c=>["xs","sm","md","lg","xl","xxl"].includes(c)),se=(0,X.Z)(he),Se=e.useMemo(()=>{if(typeof m!="object")return{};const c=Y.c4.find(P=>se[P]),d=m[c];return d?{width:d,height:d,fontSize:d&&(C||w)?d/2:18}:{}},[se,m]),y=V("avatar",D),oe=(0,te.Z)(y),[Ce,ye,xe]=ee(y,oe),Ee=A()({[`${y}-lg`]:m==="large",[`${y}-sm`]:m==="small"}),ie=e.isValidElement(O),ze=M||(S==null?void 0:S.shape)||"circle",Oe=A()(y,Ee,h==null?void 0:h.className,`${y}-${ze}`,{[`${y}-image`]:ie||O&&E,[`${y}-icon`]:!!C},xe,oe,H,G,ye),Pe=typeof m=="number"?{width:m,height:m,fontSize:C?m/2:18}:{};let Z;if(typeof O=="string"&&E)Z=e.createElement("img",{src:O,draggable:ge,srcSet:F,onError:N,alt:K,crossOrigin:pe});else if(ie)Z=O;else if(C)Z=C;else if(u||o!==1){const c=`scale(${o})`,d={msTransform:c,WebkitTransform:c,transform:c};Z=e.createElement(x.Z,{onResize:$},e.createElement("span",{className:`${y}-string`,ref:f,style:Object.assign({},d)},w))}else Z=e.createElement("span",{className:`${y}-string`,style:{opacity:0},ref:f},w);return delete J.onError,delete J.gap,Ce(e.createElement("span",Object.assign({},J,{style:Object.assign(Object.assign(Object.assign(Object.assign({},Pe),Se),h==null?void 0:h.style),J.style),className:Oe,ref:j}),Z))};var re=e.forwardRef(ce),de=r(50344),ue=r(55241),ve=r(96159);const ne=t=>{const{size:s,shape:o}=e.useContext(g),n=e.useMemo(()=>({size:t.size||s,shape:t.shape||o}),[t.size,t.shape,s,o]);return e.createElement(g.Provider,{value:n},t.children)};var fe=t=>{const{getPrefixCls:s,direction:o}=e.useContext(U.E_),{prefixCls:n,className:u,rootClassName:R,style:E,maxCount:v,maxStyle:z,size:f,shape:j,maxPopoverPlacement:V="top",maxPopoverTrigger:h="hover",children:S}=t,$=s("avatar",n),N=`${$}-group`,D=(0,te.Z)($),[M,b,O]=ee($,D),F=A()(N,{[`${N}-rtl`]:o==="rtl"},O,D,u,R,b),C=(0,de.Z)(S).map((G,K)=>(0,ve.Tm)(G,{key:`avatar-key-${K}`})),H=C.length;if(v&&v<H){const G=C.slice(0,v),K=C.slice(v,H);return G.push(e.createElement(ue.Z,{key:"avatar-popover-key",content:K,trigger:h,placement:V,overlayClassName:`${N}-popover`,destroyTooltipOnHide:!0},e.createElement(re,{style:z},`+${H-v}`))),M(e.createElement(ne,{shape:j,size:f},e.createElement("div",{className:F,style:E},G)))}return M(e.createElement(ne,{shape:j,size:f},e.createElement("div",{className:F,style:E},C)))};const ae=re;ae.Group=fe;var me=ae}}]);

import{d as B,c as R,_ as C,a as b,b as U,e as Fe,s as We,f as Le,g as X,h as De,k as Ge,l as He,n as Ne,j as Re,o as Ue,C as Xe,p as Ye,q as qe,t as Je,u as Qe,v as Ze,w as Ve,x as et,y as tt,z as nt,A as rt,B as ot,D as st,E as it,F as at,H as lt,I as ct}from"./index-9decd392.js";var le={};function N(e,t){return t?B(e,t,{clone:!1}):e}const ue={xs:0,sm:600,md:900,lg:1200,xl:1536},xe={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${ue[e]}px)`};function P(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const s=r.breakpoints||xe;return t.reduce((i,c,l)=>(i[s.up(s.keys[l])]=n(t[l]),i),{})}if(typeof t=="object"){const s=r.breakpoints||xe;return Object.keys(t).reduce((i,c)=>{if(Object.keys(s.values||ue).indexOf(c)!==-1){const l=s.up(c);i[l]=n(t[c],c)}else{const l=c;i[l]=t[l]}return i},{})}return n(t)}function ut(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const s=e.up(o);return r[s]={},r},{}))||{}}function dt(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function te(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,s)=>o&&o[s]?o[s]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function ee(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=te(e,n)||r,t&&(o=t(o,r,e)),o}function g(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,s=i=>{if(i[t]==null)return null;const c=i[t],l=i.theme,u=te(l,r)||{};return P(i,c,f=>{let a=ee(u,o,f);return f===a&&typeof f=="string"&&(a=ee(u,o,`${t}${f==="default"?"":R(f)}`,f)),n===!1?a:{[n]:a}})};return s.propTypes={},s.filterProps=[t],s}function ne(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(s=>{r[s]=o}),r),{}),n=r=>Object.keys(r).reduce((o,s)=>t[s]?N(o,t[s](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function ft(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const mt={m:"margin",p:"padding"},pt={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},ve={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},gt=ft(e=>{if(e.length>2)if(ve[e])e=ve[e];else return[e];const[t,n]=e.split(""),r=mt[t],o=pt[n]||"";return Array.isArray(o)?o.map(s=>r+s):[r+o]}),de=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],fe=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...de,...fe];function q(e,t,n,r){var o;const s=(o=te(e,t,!1))!=null?o:n;return typeof s=="number"?i=>typeof i=="string"?i:s*i:Array.isArray(s)?i=>typeof i=="string"?i:s[i]:typeof s=="function"?s:()=>{}}function Pe(e){return q(e,"spacing",8)}function J(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function ht(e,t){return n=>e.reduce((r,o)=>(r[o]=J(t,n),r),{})}function yt(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=gt(n),s=ht(o,r),i=e[n];return P(e,i,s)}function Ie(e,t){const n=Pe(e.theme);return Object.keys(e).map(r=>yt(e,t,r,n)).reduce(N,{})}function x(e){return Ie(e,de)}x.propTypes={};x.filterProps=de;function v(e){return Ie(e,fe)}v.propTypes={};v.filterProps=fe;function A(e){return typeof e!="number"?e:`${e}px solid`}const bt=g({prop:"border",themeKey:"borders",transform:A}),xt=g({prop:"borderTop",themeKey:"borders",transform:A}),vt=g({prop:"borderRight",themeKey:"borders",transform:A}),$t=g({prop:"borderBottom",themeKey:"borders",transform:A}),St=g({prop:"borderLeft",themeKey:"borders",transform:A}),wt=g({prop:"borderColor",themeKey:"palette"}),kt=g({prop:"borderTopColor",themeKey:"palette"}),Tt=g({prop:"borderRightColor",themeKey:"palette"}),Ot=g({prop:"borderBottomColor",themeKey:"palette"}),Ct=g({prop:"borderLeftColor",themeKey:"palette"}),re=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=q(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:J(t,r)});return P(e,e.borderRadius,n)}return null};re.propTypes={};re.filterProps=["borderRadius"];ne(bt,xt,vt,$t,St,wt,kt,Tt,Ot,Ct,re);const oe=e=>{if(e.gap!==void 0&&e.gap!==null){const t=q(e.theme,"spacing",8),n=r=>({gap:J(t,r)});return P(e,e.gap,n)}return null};oe.propTypes={};oe.filterProps=["gap"];const se=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=q(e.theme,"spacing",8),n=r=>({columnGap:J(t,r)});return P(e,e.columnGap,n)}return null};se.propTypes={};se.filterProps=["columnGap"];const ie=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=q(e.theme,"spacing",8),n=r=>({rowGap:J(t,r)});return P(e,e.rowGap,n)}return null};ie.propTypes={};ie.filterProps=["rowGap"];const _t=g({prop:"gridColumn"}),At=g({prop:"gridRow"}),Rt=g({prop:"gridAutoFlow"}),Pt=g({prop:"gridAutoColumns"}),It=g({prop:"gridAutoRows"}),Bt=g({prop:"gridTemplateColumns"}),Kt=g({prop:"gridTemplateRows"}),zt=g({prop:"gridTemplateAreas"}),Et=g({prop:"gridArea"});ne(oe,se,ie,_t,At,Rt,Pt,It,Bt,Kt,zt,Et);function L(e,t){return t==="grey"?t:e}const jt=g({prop:"color",themeKey:"palette",transform:L}),Mt=g({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:L}),Ft=g({prop:"backgroundColor",themeKey:"palette",transform:L});ne(jt,Mt,Ft);function T(e){return e<=1&&e!==0?`${e*100}%`:e}const Wt=g({prop:"width",transform:T}),me=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o,s;return{maxWidth:((r=e.theme)==null||(o=r.breakpoints)==null||(s=o.values)==null?void 0:s[n])||ue[n]||T(n)}};return P(e,e.maxWidth,t)}return null};me.filterProps=["maxWidth"];const Lt=g({prop:"minWidth",transform:T}),Dt=g({prop:"height",transform:T}),Gt=g({prop:"maxHeight",transform:T}),Ht=g({prop:"minHeight",transform:T});g({prop:"size",cssProperty:"width",transform:T});g({prop:"size",cssProperty:"height",transform:T});const Nt=g({prop:"boxSizing"});ne(Wt,me,Lt,Dt,Gt,Ht,Nt);const Ut={border:{themeKey:"borders",transform:A},borderTop:{themeKey:"borders",transform:A},borderRight:{themeKey:"borders",transform:A},borderBottom:{themeKey:"borders",transform:A},borderLeft:{themeKey:"borders",transform:A},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:re},color:{themeKey:"palette",transform:L},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:L},backgroundColor:{themeKey:"palette",transform:L},p:{style:v},pt:{style:v},pr:{style:v},pb:{style:v},pl:{style:v},px:{style:v},py:{style:v},padding:{style:v},paddingTop:{style:v},paddingRight:{style:v},paddingBottom:{style:v},paddingLeft:{style:v},paddingX:{style:v},paddingY:{style:v},paddingInline:{style:v},paddingInlineStart:{style:v},paddingInlineEnd:{style:v},paddingBlock:{style:v},paddingBlockStart:{style:v},paddingBlockEnd:{style:v},m:{style:x},mt:{style:x},mr:{style:x},mb:{style:x},ml:{style:x},mx:{style:x},my:{style:x},margin:{style:x},marginTop:{style:x},marginRight:{style:x},marginBottom:{style:x},marginLeft:{style:x},marginX:{style:x},marginY:{style:x},marginInline:{style:x},marginInlineStart:{style:x},marginInlineEnd:{style:x},marginBlock:{style:x},marginBlockStart:{style:x},marginBlockEnd:{style:x},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:oe},rowGap:{style:ie},columnGap:{style:se},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:T},maxWidth:{style:me},minWidth:{transform:T},height:{transform:T},maxHeight:{transform:T},minHeight:{transform:T},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},pe=Ut;function Xt(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function Yt(e,t){return typeof e=="function"?e(t):e}function qt(){function e(n,r,o,s){const i={[n]:r,theme:o},c=s[n];if(!c)return{[n]:r};const{cssProperty:l=n,themeKey:u,transform:m,style:f}=c;if(r==null)return null;const a=te(o,u)||{};return f?f(i):P(i,r,p=>{let d=ee(a,m,p);return p===d&&typeof p=="string"&&(d=ee(a,m,`${n}${p==="default"?"":R(p)}`,p)),l===!1?d:{[l]:d}})}function t(n){var r;const{sx:o,theme:s={}}=n||{};if(!o)return null;const i=(r=s.unstable_sxConfig)!=null?r:pe;function c(l){let u=l;if(typeof l=="function")u=l(s);else if(typeof l!="object")return l;if(!u)return null;const m=ut(s.breakpoints),f=Object.keys(m);let a=m;return Object.keys(u).forEach(h=>{const p=Yt(u[h],s);if(p!=null)if(typeof p=="object")if(i[h])a=N(a,e(h,p,s,i));else{const d=P({theme:s},p,S=>({[h]:S}));Xt(d,p)?a[h]=t({sx:p,theme:s}):a=N(a,d)}else a=N(a,e(h,p,s,i))}),dt(f,a)}return Array.isArray(o)?o.map(c):c(o)}return t}const Be=qt();Be.filterProps=["sx"];const ge=Be,Jt=["values","unit","step"],Qt=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>b({},n,{[r.key]:r.val}),{})};function Zt(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=C(e,Jt),s=Qt(t),i=Object.keys(s);function c(a){return`@media (min-width:${typeof t[a]=="number"?t[a]:a}${n})`}function l(a){return`@media (max-width:${(typeof t[a]=="number"?t[a]:a)-r/100}${n})`}function u(a,h){const p=i.indexOf(h);return`@media (min-width:${typeof t[a]=="number"?t[a]:a}${n}) and (max-width:${(p!==-1&&typeof t[i[p]]=="number"?t[i[p]]:h)-r/100}${n})`}function m(a){return i.indexOf(a)+1<i.length?u(a,i[i.indexOf(a)+1]):c(a)}function f(a){const h=i.indexOf(a);return h===0?c(i[1]):h===i.length-1?l(i[h]):u(a,i[i.indexOf(a)+1]).replace("@media","@media not all and")}return b({keys:i,values:s,up:c,down:l,between:u,only:m,not:f,unit:n},o)}const Vt={borderRadius:4},en=Vt;function tn(e=8){if(e.mui)return e;const t=Pe({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(s=>{const i=t(s);return typeof i=="number"?`${i}px`:i}).join(" ");return n.mui=!0,n}const nn=["breakpoints","palette","spacing","shape"];function he(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:s={}}=e,i=C(e,nn),c=Zt(n),l=tn(o);let u=B({breakpoints:c,direction:"ltr",components:{},palette:b({mode:"light"},r),spacing:l,shape:b({},en,s)},i);return u=t.reduce((m,f)=>B(m,f),u),u.unstable_sxConfig=b({},pe,i==null?void 0:i.unstable_sxConfig),u.unstable_sx=function(f){return ge({sx:f,theme:this})},u}const rn=U.createContext(null),on=rn;function sn(){return U.useContext(on)}function an(e){return Object.keys(e).length===0}function ln(e=null){const t=sn();return!t||an(t)?e:t}const cn=he();function un(e=cn){return ln(e)}const dn=["variant"];function $e(e){return e.length===0}function Ke(e){const{variant:t}=e,n=C(e,dn);let r=t||"";return Object.keys(n).sort().forEach(o=>{o==="color"?r+=$e(r)?e[o]:R(e[o]):r+=`${$e(r)?o:R(o)}${R(e[o].toString())}`}),r}const fn=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],mn=["theme"],pn=["theme"];function G(e){return Object.keys(e).length===0}function gn(e){return typeof e=="string"&&e.charCodeAt(0)>96}const hn=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,yn=(e,t)=>{let n=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants);const r={};return n.forEach(o=>{const s=Ke(o.props);r[s]=o.style}),r},bn=(e,t,n,r)=>{var o,s;const{ownerState:i={}}=e,c=[],l=n==null||(o=n.components)==null||(s=o[r])==null?void 0:s.variants;return l&&l.forEach(u=>{let m=!0;Object.keys(u.props).forEach(f=>{i[f]!==u.props[f]&&e[f]!==u.props[f]&&(m=!1)}),m&&c.push(t[Ke(u.props)])}),c};function V(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const xn=he();function vn(e={}){const{defaultTheme:t=xn,rootShouldForwardProp:n=V,slotShouldForwardProp:r=V}=e,o=s=>{const i=G(s.theme)?t:s.theme;return ge(b({},s,{theme:i}))};return o.__mui_systemSx=!0,(s,i={})=>{Fe(s,k=>k.filter(I=>!(I!=null&&I.__mui_systemSx)));const{name:c,slot:l,skipVariantsResolver:u,skipSx:m,overridesResolver:f}=i,a=C(i,fn),h=u!==void 0?u:l&&l!=="Root"||!1,p=m||!1;let d,S=V;l==="Root"?S=n:l?S=r:gn(s)&&(S=void 0);const w=We(s,b({shouldForwardProp:S,label:d},a)),_=(k,...I)=>{const K=I?I.map($=>typeof $=="function"&&$.__emotion_real!==$?O=>{let{theme:z}=O,Z=C(O,mn);return $(b({theme:G(z)?t:z},Z))}:$):[];let Q=k;c&&f&&K.push($=>{const O=G($.theme)?t:$.theme,z=hn(c,O);if(z){const Z={};return Object.entries(z).forEach(([Me,ae])=>{Z[Me]=typeof ae=="function"?ae(b({},$,{theme:O})):ae}),f($,Z)}return null}),c&&!h&&K.push($=>{const O=G($.theme)?t:$.theme;return bn($,yn(c,O),O,c)}),p||K.push(o);const be=K.length-I.length;if(Array.isArray(k)&&be>0){const $=new Array(be).fill("");Q=[...k,...$],Q.raw=[...k.raw,...$]}else typeof k=="function"&&k.__emotion_real!==k&&(Q=$=>{let{theme:O}=$,z=C($,pn);return k(b({theme:G(O)?t:O},z))});return w(Q,...K)};return w.withConfig&&(_.withConfig=w.withConfig),_}}function $n(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:Le(t.components[n].defaultProps,r)}function Sn({props:e,name:t,defaultTheme:n}){const r=un(n);return $n({theme:r,name:t,props:e})}function ze(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function wn(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function D(e){if(e.type)return e;if(e.charAt(0)==="#")return D(wn(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(X(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error(X(10,o))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:o}}function ye(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,s)=>s<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function kn(e){e=D(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,s=r*Math.min(o,1-o),i=(u,m=(u+n/30)%12)=>o-s*Math.max(Math.min(m-3,9-m,1),-1);let c="rgb";const l=[Math.round(i(0)*255),Math.round(i(8)*255),Math.round(i(4)*255)];return e.type==="hsla"&&(c+="a",l.push(t[3])),ye({type:c,values:l})}function Se(e){e=D(e);let t=e.type==="hsl"||e.type==="hsla"?D(kn(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Tn(e,t){const n=Se(e),r=Se(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function On(e,t){if(e=D(e),t=ze(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return ye(e)}function Cn(e,t){if(e=D(e),t=ze(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return ye(e)}function _n(e,t){return b({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const An={black:"#000",white:"#fff"},Y=An,Rn={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Pn=Rn,In={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},E=In,Bn={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},j=Bn,Kn={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},H=Kn,zn={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},M=zn,En={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},F=En,jn={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},W=jn,Mn=["mode","contrastThreshold","tonalOffset"],we={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Y.white,default:Y.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},ce={text:{primary:Y.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Y.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function ke(e,t,n,r){const o=r.light||r,s=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Cn(e.main,o):t==="dark"&&(e.dark=On(e.main,s)))}function Fn(e="light"){return e==="dark"?{main:M[200],light:M[50],dark:M[400]}:{main:M[700],light:M[400],dark:M[800]}}function Wn(e="light"){return e==="dark"?{main:E[200],light:E[50],dark:E[400]}:{main:E[500],light:E[300],dark:E[700]}}function Ln(e="light"){return e==="dark"?{main:j[500],light:j[300],dark:j[700]}:{main:j[700],light:j[400],dark:j[800]}}function Dn(e="light"){return e==="dark"?{main:F[400],light:F[300],dark:F[700]}:{main:F[700],light:F[500],dark:F[900]}}function Gn(e="light"){return e==="dark"?{main:W[400],light:W[300],dark:W[700]}:{main:W[800],light:W[500],dark:W[900]}}function Hn(e="light"){return e==="dark"?{main:H[400],light:H[300],dark:H[700]}:{main:"#ed6c02",light:H[500],dark:H[900]}}function Nn(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=C(e,Mn),s=e.primary||Fn(t),i=e.secondary||Wn(t),c=e.error||Ln(t),l=e.info||Dn(t),u=e.success||Gn(t),m=e.warning||Hn(t);function f(d){return Tn(d,ce.text.primary)>=n?ce.text.primary:we.text.primary}const a=({color:d,name:S,mainShade:w=500,lightShade:_=300,darkShade:k=700})=>{if(d=b({},d),!d.main&&d[w]&&(d.main=d[w]),!d.hasOwnProperty("main"))throw new Error(X(11,S?` (${S})`:"",w));if(typeof d.main!="string")throw new Error(X(12,S?` (${S})`:"",JSON.stringify(d.main)));return ke(d,"light",_,r),ke(d,"dark",k,r),d.contrastText||(d.contrastText=f(d.main)),d},h={dark:ce,light:we};return B(b({common:b({},Y),mode:t,primary:a({color:s,name:"primary"}),secondary:a({color:i,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:a({color:c,name:"error"}),warning:a({color:m,name:"warning"}),info:a({color:l,name:"info"}),success:a({color:u,name:"success"}),grey:Pn,contrastThreshold:n,getContrastText:f,augmentColor:a,tonalOffset:r},h[t]),o)}const Un=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Xn(e){return Math.round(e*1e5)/1e5}const Te={textTransform:"uppercase"},Oe='"Roboto", "Helvetica", "Arial", sans-serif';function Yn(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=Oe,fontSize:o=14,fontWeightLight:s=300,fontWeightRegular:i=400,fontWeightMedium:c=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:m,pxToRem:f}=n,a=C(n,Un),h=o/14,p=f||(w=>`${w/u*h}rem`),d=(w,_,k,I,K)=>b({fontFamily:r,fontWeight:w,fontSize:p(_),lineHeight:k},r===Oe?{letterSpacing:`${Xn(I/_)}em`}:{},K,m),S={h1:d(s,96,1.167,-1.5),h2:d(s,60,1.2,-.5),h3:d(i,48,1.167,0),h4:d(i,34,1.235,.25),h5:d(i,24,1.334,0),h6:d(c,20,1.6,.15),subtitle1:d(i,16,1.75,.15),subtitle2:d(c,14,1.57,.1),body1:d(i,16,1.5,.15),body2:d(i,14,1.43,.15),button:d(c,14,1.75,.4,Te),caption:d(i,12,1.66,.4),overline:d(i,12,2.66,1,Te)};return B(b({htmlFontSize:u,pxToRem:p,fontFamily:r,fontSize:o,fontWeightLight:s,fontWeightRegular:i,fontWeightMedium:c,fontWeightBold:l},S),a,{clone:!1})}const qn=.2,Jn=.14,Qn=.12;function y(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${qn})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Jn})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Qn})`].join(",")}const Zn=["none",y(0,2,1,-1,0,1,1,0,0,1,3,0),y(0,3,1,-2,0,2,2,0,0,1,5,0),y(0,3,3,-2,0,3,4,0,0,1,8,0),y(0,2,4,-1,0,4,5,0,0,1,10,0),y(0,3,5,-1,0,5,8,0,0,1,14,0),y(0,3,5,-1,0,6,10,0,0,1,18,0),y(0,4,5,-2,0,7,10,1,0,2,16,1),y(0,5,5,-3,0,8,10,1,0,3,14,2),y(0,5,6,-3,0,9,12,1,0,3,16,2),y(0,6,6,-3,0,10,14,1,0,4,18,3),y(0,6,7,-4,0,11,15,1,0,4,20,3),y(0,7,8,-4,0,12,17,2,0,5,22,4),y(0,7,8,-4,0,13,19,2,0,5,24,4),y(0,7,9,-4,0,14,21,2,0,5,26,4),y(0,8,9,-5,0,15,22,2,0,6,28,5),y(0,8,10,-5,0,16,24,2,0,6,30,5),y(0,8,11,-5,0,17,26,2,0,6,32,5),y(0,9,11,-5,0,18,28,2,0,7,34,6),y(0,9,12,-6,0,19,29,2,0,7,36,6),y(0,10,13,-6,0,20,31,3,0,8,38,7),y(0,10,13,-6,0,21,33,3,0,8,40,7),y(0,10,14,-6,0,22,35,3,0,8,42,7),y(0,11,14,-7,0,23,36,3,0,9,44,8),y(0,11,15,-7,0,24,38,3,0,9,46,8)],Vn=Zn,er=["duration","easing","delay"],tr={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},nr={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Ce(e){return`${Math.round(e)}ms`}function rr(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function or(e){const t=b({},tr,e.easing),n=b({},nr,e.duration);return b({getAutoHeightDuration:rr,create:(o=["all"],s={})=>{const{duration:i=n.standard,easing:c=t.easeInOut,delay:l=0}=s;return C(s,er),(Array.isArray(o)?o:[o]).map(u=>`${u} ${typeof i=="string"?i:Ce(i)} ${c} ${typeof l=="string"?l:Ce(l)}`).join(",")}},e,{easing:t,duration:n})}const sr={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},ir=sr,ar=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function lr(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:s={}}=e,i=C(e,ar);if(e.vars)throw new Error(X(18));const c=Nn(r),l=he(e);let u=B(l,{mixins:_n(l.breakpoints,n),palette:c,shadows:Vn.slice(),typography:Yn(c,s),transitions:or(o),zIndex:b({},ir)});return u=B(u,i),u=t.reduce((m,f)=>B(m,f),u),u.unstable_sxConfig=b({},pe,i==null?void 0:i.unstable_sxConfig),u.unstable_sx=function(f){return ge({sx:f,theme:this})},u}const cr=lr(),Ee=cr;function ur({props:e,name:t}){return Sn({props:e,name:t,defaultTheme:Ee})}const dr=e=>V(e)&&e!=="classes",fr=vn({defaultTheme:Ee,rootShouldForwardProp:dr}),mr=fr;function pr(e){return De("MuiSvgIcon",e)}Ge("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const gr=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],hr=e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root",t!=="inherit"&&`color${R(t)}`,`fontSize${R(n)}`]};return Ue(o,pr,r)},yr=mr("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${R(n.color)}`],t[`fontSize${R(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,o,s,i,c,l,u,m,f,a,h,p,d,S,w,_;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(o=e.transitions)==null||(s=o.duration)==null?void 0:s.shorter}),fontSize:{inherit:"inherit",small:((i=e.typography)==null||(c=i.pxToRem)==null?void 0:c.call(i,20))||"1.25rem",medium:((l=e.typography)==null||(u=l.pxToRem)==null?void 0:u.call(l,24))||"1.5rem",large:((m=e.typography)==null||(f=m.pxToRem)==null?void 0:f.call(m,35))||"2.1875rem"}[t.fontSize],color:(a=(h=(e.vars||e).palette)==null||(p=h[t.color])==null?void 0:p.main)!=null?a:{action:(d=(e.vars||e).palette)==null||(S=d.action)==null?void 0:S.active,disabled:(w=(e.vars||e).palette)==null||(_=w.action)==null?void 0:_.disabled,inherit:void 0}[t.color]}}),je=U.forwardRef(function(t,n){const r=ur({props:t,name:"MuiSvgIcon"}),{children:o,className:s,color:i="inherit",component:c="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:m=!1,titleAccess:f,viewBox:a="0 0 24 24"}=r,h=C(r,gr),p=b({},r,{color:i,component:c,fontSize:l,instanceFontSize:t.fontSize,inheritViewBox:m,viewBox:a}),d={};m||(d.viewBox=a);const S=hr(p);return He(yr,b({as:c,className:Ne(S.root,s),focusable:"false",color:u,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:n},d,h,{ownerState:p,children:[o,f?Re("title",{children:f}):null]}))});je.muiName="SvgIcon";const _e=je;function br(e,t){function n(r,o){return Re(_e,b({"data-testid":`${t}Icon`,ref:o},r,{children:e}))}return n.muiName=_e.muiName,U.memo(U.forwardRef(n))}const xr={configure:e=>{Xe.configure(e)}},vr=Object.freeze(Object.defineProperty({__proto__:null,unstable_ClassNameGenerator:xr,capitalize:R,createChainedFunction:Ye,createSvgIcon:br,debounce:qe,deprecatedPropType:Je,isMuiElement:Qe,ownerDocument:Ze,ownerWindow:Ve,requirePropFactory:et,setRef:tt,unstable_useEnhancedEffect:nt,unstable_useId:rt,unsupportedProp:ot,useControlled:st,useEventCallback:it,useForkRef:at,useIsFocusVisible:lt},Symbol.toStringTag,{value:"Module"})),$r=ct(vr);var Ae;function kr(){return Ae||(Ae=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=$r}(le)),le}export{kr as r};
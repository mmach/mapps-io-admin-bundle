import{bi as p,U as T,ag as k,ah as P,R as c,j as e,l as d,a3 as x,G as l,bk as M,Z as q,a5 as w,a6 as D,a7 as j,a as u,$ as C,i as S,a0 as _,bj as A,M as F}from"./index-7700e132.js";import{u as I}from"./hook-51452b2e.js";import{P as N}from"./index-ed16012e.js";import{d as B}from"./AccountTree-2d6fc91d.js";function U(a){const{state:{},functions:{setTitle:o,setIcon:s}}=I(),{selectors:{processesSelector:r},actions:{getAllProcess:i}}=p(),{translate:h,getLabel:R}=T(),v=k(),g=P(),L=c.useMemo(()=>new URLSearchParams(g.search).get("processId"),[g.search]);c.useEffect(()=>{o("Process List"),s(e(B,{}))},[]);function b(t){v(`/mapps/permissions/processes?processId=${t.id}`)}function y(t){v("/mapps/permissions/processes")}return d(x,{children:[e(l,{children:e(M,{color:"primary",onClick:y,value:h(R,"Create Process"),startIcon:e(q,{}),variant:"outlined"})}),e(w,{className:"mapps-io-list-link",style:{width:"100%"},children:r.sort((t,$)=>t.token>$.token?1:-1).map(t=>e(l,{className:"mapps-io-list-item",children:e(D,{button:!0,onClick:()=>{b(t)},className:L==t.id?"selected":"",children:e(j,{primary:t.token})})},t.id))})]})}var f={},V=S,W=_;Object.defineProperty(f,"__esModule",{value:!0});var O=f.default=void 0,n=W(u),z=V(C()),G=(0,z.default)(n.createElement(n.Fragment,null,n.createElement("circle",{cx:"7.2",cy:"14.4",r:"3.2"}),n.createElement("circle",{cx:"14.8",cy:"18",r:"2"}),n.createElement("circle",{cx:"15.2",cy:"8.8",r:"4.8"})),"BubbleChart");O=f.default=G;var m={},H=S,Z=_;Object.defineProperty(m,"__esModule",{value:!0});var E=m.default=void 0,J=Z(u),K=H(C()),Q=(0,K.default)(J.createElement("path",{d:"M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74c-3.6-.76-3.54-.75-3.67-.75-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"}),"TouchApp");E=m.default=Q;function X(){const{state:{},functions:{setTitle:a,setIcon:o}}=I(),s=c.useMemo(()=>new URLSearchParams(location.search).get("processId"),[location.search]),{selectors:{getProcessReducer:r},actions:{},hooks:{setProcessId:i}}=p();return u.useEffect(()=>{A(s)&&i(s)},[s]),u.useEffect(()=>{r?(a(r.token),o(e(O,{}))):(a("Select Process"),o(e(E,{})))},[r]),s?e(N,{processId:s}):e(x,{})}function ae(){const a=c.useMemo(F().Layouts.Containers.V1),[o,s]=c.useState(!1);P();const{selectors:{processesSelector:r},actions:{getAllProcess:i}}=p();return c.useEffect(()=>{r.length==0&&(s(!0),i().then(h=>{s(!1)}))},[]),d(l,{container:!0,children:[d(a,{title:"TODOOOO",xs:12,sm:12,children:["TODOOOOOOs",e(l,{children:"EDIT PROCESS - Change Name Tab with related processes and from which process state we run external process"})]}),e(a,{xs:12,sm:3,children:e(U,{})}),e(a,{style:{padding:"10px"},xs:12,sm:9,children:e(X,{})})]})}export{ae as Process};
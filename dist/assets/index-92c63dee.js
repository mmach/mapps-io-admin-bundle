import{i as M,r as g,R as e,M as s,U,j as t,G as _}from"./index-0303e4c9.js";import{a as j}from"./index-73bfdc85.js";import{u as x}from"./hook-26184920.js";import{r as y}from"./createSvgIcon-b8d3a7e5.js";var r={},C=M;Object.defineProperty(r,"__esModule",{value:!0});var u=r.default=void 0,L=C(y()),R=g,S=(0,L.default)((0,R.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");u=r.default=S;function z(h){const[i,a]=e.useState(!0),c=e.useMemo(s().Layouts.Containers.V1),l=e.useMemo(s().Layouts.Table.V2);e.useMemo(s().ButtonLoader);const{translate:d,getLabel:m}=U(),{selectors:{getAllUsersReducer:o},actions:{getUsers:p}}=x(),f=e.useMemo(()=>o.sort((n,v)=>v.name<n.name?1:-1),[o]);return e.useEffect(()=>{a(!0),Promise.all([p()]).then(n=>{a(!1)})},[]),t(_,{container:!0,style:{justifyContent:"center"},children:t(c,{title:"Users",icon:t(u,{}),xs:12,sm:12,children:t(l,{isLoading:i,title:d(m,"Manage User"),...j({}),pageSize:20,data:f})})})}export{z as default};

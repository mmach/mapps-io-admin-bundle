import{R as t,M as d,u as U,d3 as D,g,G as a,j as e,d4 as L,F as M,v as E,c$ as F,m as _}from"./index-b2bea69e.js";import{u as R}from"./hook-b7eba0d9.js";function w({userTypeId:u}){const l=t.useMemo(d().Layouts.Groups.V1),p=t.useMemo(d().BodyLoader),i=t.useMemo(d().FormComponents.DropDownList),y=t.useMemo(d().FormComponents.TextBox),{selectors:{getUserTypeByIdReducer:r},actions:{grantRole:c,revokeRole:T},hooks:{setUserTypeId:m}}=R(),{translate:v,getLabel:x}=U(),[s,S]=t.useState(),[k,h]=t.useState(!1),{selectors:{rolesSelector:B}}=D();t.useEffect(()=>{m(u)},[]),t.useEffect(()=>{r&&S({...r})},[r]);function C(){const o=s.usertype_roles.map(n=>n.roles.id),f=B.filter(n=>!o.includes(n.id));return[{id:"",value:""},...f].map(n=>({id:n.id,value:n.role||n.value}))}function I(o){const f=o.currentTarget.dataset.key;h(!0),T({id:f}).then(n=>{h(!1)})}function b(o){h(!0),c({id:E(),usertype_id:s.id,role_id:o.target.value}).then(f=>{h(!1)})}try{return s&&!k?g(a,{container:!0,style:{display:"flex"},children:[e(l,{title:"User Type",children:e(y,{disabled:!0,label:v(x,"Name"),value:s.name,field:"value",validation:[]})}),g(l,{title:"Roles",children:[e(i,{label:"Select Role",valueOptions:C(),value:"",onChange:b,field:"type",validation:[]}),s.usertype_roles.map((o,f)=>e(L,{"data-key":o.id,onClick:I,label:o.roles.role_detail.name.trim()},o.id))]})]}):e(a,{style:{height:"400px",display:"flex",width:"100%"},children:e(p,{text:" ",size:"25px"})})}catch(o){return console.log(o),e(M,{})}}function G({userTypeId:u}){const l=t.useMemo(d().Layouts.Groups.V1),p=t.useMemo(d().ButtonLoader),{actions:i}=F(),{translate:y,getLabel:r}=U(),[c,T]=t.useState(),{selectors:{getUserTypeByIdReducer:m},actions:{},hooks:{setUserTypeId:v}}=R();t.useEffect(()=>{v(u)},[]),t.useEffect(()=>{m&&T({...m})},[m]);function x(){i.openDrawer(!0,e(a,{style:{width:"50vw",display:"flex"},children:e(w,{userTypeId:c.id})}),"right")}try{return c&&g(a,{container:!0,style:{display:"flex"},children:[e(l,{title:"Assigned Roles",children:c.usertype_roles.map(s=>e(L,{"data-key":s.id,label:s.roles.role_detail.name.trim()},s.id))}),e(a,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:e(p,{color:"primary",onClick:x,value:y(r,"Edit Roles"),variant:"outlined"})})]})}catch(s){return console.log(s),e(M,{})}}function V(u){t.useState(!0);const l=t.useMemo(d().Layouts.Groups.V1),p=t.useMemo(()=>_.byName("mapps-component-translate-component").component,[]);U();const[i,y]=t.useState(),{selectors:{getUserTypeByIdReducer:r},actions:{},hooks:{setUserTypeId:c}}=R();return t.useEffect(()=>{c(u.id)},[]),t.useEffect(()=>{r&&y({...r})},[r]),i&&g(a,{container:!0,style:{justifyContent:"center"},children:[e(a,{item:!0,xs:6,style:{display:"flex"},children:e(l,{title:"User Type Translation",children:e(p,{translation:i.translation||{},isReadOnly:!0})})}),e(a,{item:!0,xs:6,style:{display:"flex"},children:e(l,{title:"User Type Roles",children:e(G,{userTypeId:i.id})})})]})}export{V as UserTypeDetails};

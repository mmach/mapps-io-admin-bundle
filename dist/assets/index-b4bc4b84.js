import{R as t,M as d,O as U,d1 as b,l as T,G as a,j as e,d2 as L,Z as M,$ as D,c_ as E,m as w}from"./index-9bb41de4.js";import{u as R}from"./hook-14bde0d4.js";function F({userTypeId:u}){const l=t.useMemo(d().Layouts.Groups.V1),p=t.useMemo(d().BodyLoader),i=t.useMemo(d().FormComponents.DropDownList),y=t.useMemo(d().FormComponents.TextBox),{selectors:{getUserTypeByIdReducer:r},actions:{grantRole:c,revokeRole:g},hooks:{setUserTypeId:m}}=R(),{translate:x,getLabel:v}=U(),[s,S]=t.useState(),[k,h]=t.useState(!1),{selectors:{rolesSelector:B}}=b();t.useEffect(()=>{m(u)},[]),t.useEffect(()=>{r&&S({...r})},[r]);function C(){const o=s.usertype_roles.map(n=>n.roles.id),f=B.filter(n=>!o.includes(n.id));return[{id:"",value:""},...f].map(n=>({id:n.id,value:n.role||n.value}))}function I(o){const f=o.currentTarget.dataset.key;h(!0),g({id:f}).then(n=>{h(!1)})}function _(o){h(!0),c({id:D(),usertype_id:s.id,role_id:o.target.value}).then(f=>{h(!1)})}try{return s&&!k?T(a,{container:!0,style:{display:"flex"},children:[e(l,{title:"User Type",children:e(y,{disabled:!0,label:x(v,"Name"),value:s.name,field:"value",validation:[]})}),T(l,{title:"Roles",children:[e(i,{label:"Select Role",valueOptions:C(),value:"",onChange:_,field:"type",validation:[]}),s.usertype_roles.map((o,f)=>e(L,{"data-key":o.id,onClick:I,label:o.roles.role_detail.name.trim()},o.id))]})]}):e(a,{style:{height:"400px",display:"flex",width:"100%"},children:e(p,{text:" ",size:"25px"})})}catch(o){return console.log(o),e(M,{})}}function G({userTypeId:u}){const l=t.useMemo(d().Layouts.Groups.V1),p=t.useMemo(d().ButtonLoader),{actions:i}=E(),{translate:y,getLabel:r}=U(),[c,g]=t.useState(),{selectors:{getUserTypeByIdReducer:m},actions:{},hooks:{setUserTypeId:x}}=R();t.useEffect(()=>{x(u)},[]),t.useEffect(()=>{m&&g({...m})},[m]);function v(){i.openDrawer(!0,e(a,{style:{width:"50vw",display:"flex"},children:e(F,{userTypeId:c.id})}),"right")}try{return c&&T(a,{container:!0,style:{display:"flex"},children:[e(l,{title:"Assigned Roles",children:c.usertype_roles.map(s=>e(L,{"data-key":s.id,label:s.roles.role_detail.name.trim()},s.id))}),e(a,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:e(p,{color:"primary",onClick:v,value:y(r,"Edit Roles"),variant:"outlined"})})]})}catch(s){return console.log(s),e(M,{})}}function P(u){t.useState(!0);const l=t.useMemo(d().Layouts.Groups.V1),p=t.useMemo(()=>w.byName("mapps-component-translate-component").component,[]);U();const[i,y]=t.useState(),{selectors:{getUserTypeByIdReducer:r},actions:{},hooks:{setUserTypeId:c}}=R();return t.useEffect(()=>{c(u.id)},[]),t.useEffect(()=>{r&&y({...r})},[r]),i&&T(a,{container:!0,style:{justifyContent:"center"},children:[e(a,{item:!0,xs:6,style:{display:"flex"},children:e(l,{title:"User Type Translation",children:e(p,{translation:i.translation||{},isReadOnly:!0})})}),e(a,{item:!0,xs:6,style:{display:"flex"},children:e(l,{title:"User Type Roles",children:e(G,{userTypeId:i.id})})})]})}export{P as UserTypeDetails};
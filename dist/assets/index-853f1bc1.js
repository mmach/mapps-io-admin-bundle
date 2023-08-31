import{R as t,M as u,U,a1 as D,l as T,G as a,j as e,a2 as L,a3 as M,X as E,Y as _,m as w}from"./index-7700e132.js";import{u as R}from"./hook-02a5d306.js";function F({userTypeId:d}){const l=t.useMemo(u().Layouts.Groups.V1),p=t.useMemo(u().BodyLoader),i=t.useMemo(u().FormComponents.DropDownList),y=t.useMemo(u().FormComponents.TextBox),{selectors:{getUserTypeByIdReducer:r},actions:{grantRole:c,revokeRole:g},hooks:{setUserTypeId:m}}=R(),{translate:x,getLabel:v}=U(),[s,S]=t.useState(),[k,h]=t.useState(!1),{selectors:{rolesSelector:B}}=D();t.useEffect(()=>{m(d)},[]),t.useEffect(()=>{r&&S({...r})},[r]);function C(){const o=s.usertype_roles.map(n=>n.roles.id),f=B.filter(n=>!o.includes(n.id));return[{id:"",value:""},...f].map(n=>({id:n.id,value:n.role||n.value}))}function I(o){const f=o.currentTarget.dataset.key;h(!0),g({id:f}).then(n=>{h(!1)})}function b(o){h(!0),c({id:E(),usertype_id:s.id,role_id:o.target.value}).then(f=>{h(!1)})}try{return s&&!k?T(a,{container:!0,style:{display:"flex"},children:[e(l,{title:"User Type",children:e(y,{disabled:!0,label:x(v,"Name"),value:s.name,field:"value",validation:[]})}),T(l,{title:"Roles",children:[e(i,{label:"Select Role",valueOptions:C(),value:"",onChange:b,field:"type",validation:[]}),s.usertype_roles.map((o,f)=>e(L,{"data-key":o.id,onClick:I,label:o.roles.role_detail.name.trim()},o.id))]})]}):e(a,{style:{height:"400px",display:"flex",width:"100%"},children:e(p,{text:" ",size:"25px"})})}catch(o){return console.log(o),e(M,{})}}function G({userTypeId:d}){const l=t.useMemo(u().Layouts.Groups.V1),p=t.useMemo(u().ButtonLoader),{actions:i}=_(),{translate:y,getLabel:r}=U(),[c,g]=t.useState(),{selectors:{getUserTypeByIdReducer:m},actions:{},hooks:{setUserTypeId:x}}=R();t.useEffect(()=>{x(d)},[]),t.useEffect(()=>{m&&g({...m})},[m]);function v(){i.openDrawer(!0,e(a,{style:{width:"50vw",display:"flex"},children:e(F,{userTypeId:c.id})}),"right")}try{return c&&T(a,{container:!0,style:{display:"flex"},children:[e(l,{title:"Assigned Roles",children:c.usertype_roles.map(s=>e(L,{"data-key":s.id,label:s.roles.role_detail.name.trim()},s.id))}),e(a,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:e(p,{color:"primary",onClick:v,value:y(r,"Edit Roles"),variant:"outlined"})})]})}catch(s){return console.log(s),e(M,{})}}function V(d){t.useState(!0);const l=t.useMemo(u().Layouts.Groups.V1),p=t.useMemo(()=>w.byName("mapps-component-translate-component").component,[]);U();const[i,y]=t.useState(),{selectors:{getUserTypeByIdReducer:r},actions:{},hooks:{setUserTypeId:c}}=R();return t.useEffect(()=>{c(d.id)},[]),t.useEffect(()=>{r&&y({...r})},[r]),i&&T(a,{container:!0,style:{justifyContent:"center"},children:[e(a,{item:!0,xs:6,style:{display:"flex"},children:e(l,{title:"User Type Translation",children:e(p,{translation:i.translation||{},isReadOnly:!0})})}),e(a,{item:!0,xs:6,style:{display:"flex"},children:e(l,{title:"User Type Roles",children:e(G,{userTypeId:i.id})})})]})}export{V as UserTypeDetails};
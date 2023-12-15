import{cU as P,cV as h,a as i,$ as y,cW as L,cX as v,cY as T,R as s,M as p,O as S,c_ as E,l as F,G,j as l,c$ as V,ab as _}from"./index-9bb41de4.js";import{d as I}from"./LockOpen-c960a224.js";import{p as $}from"./index-eb8c6a19.js";const u=t=>{const o={upsertRole:e=>t(new L().commandThunt(v.Roles.GRANT_ROLE_TO_PROJECT,e)),deleteRole:e=>t(new L().commandThunt(v.Roles.REVOKE_ROLE_TO_PROJECT,e)),upsertRoleGlobal:e=>t(new L().commandThunt(v.Roles.CREATE_ROLE_GLOBAL,e)),get:e=>t(new L().queryThunt(T.Roles.GET_ROLES,e)),getAll:e=>t(new L().queryThunt(T.Roles.GET_GLOBAL_ROLES,e))};return{...o,upsertRole:async e=>{await o.upsertRole(e),await o.get()},deleteRole:async e=>{await o.deleteRole(e),await o.get()},upsertRoleGlobal:async e=>{await o.upsertRoleGlobal(e),await o.upsertRole({role_id:e.id,id:y(),status:!0}),await o.getAll(),await o.get()},deleteRoleGlobal:async e=>{await o.deleteRoleGlobal(e),await o.getAll(),await o.get()}}},q=()=>t=>t.RolesAdminReducer.rolesGlobal,z=()=>t=>t.RolesAdminReducer.roles;function M(){const t=P(),{rolesAdminReducer:o}=h(f=>({rolesAdminReducer:f.RolesAdminReducer})),e=h(q()),g=h(z()),d=i.useCallback(u(t).getAll,[t]),R=i.useCallback(u(t).get,[t]),b=i.useCallback(u(t).upsertRoleGlobal,[t]),n=i.useCallback(u(t).deleteAction,[t]),A=i.useCallback(u(t).deleteRoleGlobal,[t]),m=i.useCallback(u(t).deleteRole,[t]),r=i.useCallback(u(t).upsertRole,[t]);return{selectors:{rolesAdminReducer:o,getAllRolesGlobalReducer:e,getAllRolesReducer:g},actions:{upsertRole:r,deleteRole:m,deleteRoleGlobal:A,deleteAction:n,upsertRoleGlobal:b,getAll:d,get:R},state:{},hooks:{},functions:{}}}function J({}){const t=s.useMemo(p().Layouts.Sections.V1),o=s.useMemo(p().FormComponents.TextBox),e=s.useMemo(p().ButtonLoader),{selectors:{},actions:{upsertRoleGlobal:g}}=M(),{translate:d,getLabel:R}=S(),b=E(),[n,A]=s.useState({id:y()}),[m,r]=s.useState(!1);function f(){r(!0),g({...n,id:n.id}).then(C=>{r(!1),b.actions.closeDrawer()})}return F(G,{container:!0,children:[l(t,{title:"Role Details",style:{flexDirection:"column"},children:l(o,{label:d(R,"Name"),value:n.name,onChange:C=>A({...n,name:C.target.value.toUpperCase()}),field:"value",validation:[]})}),l(G,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:l(e,{color:"primary",onClick:f,value:d(R,"Save"),variant:"outlined",isLoading:m})})]})}function W(t){const[o,e]=s.useState(!0),g=s.useMemo(p().Layouts.Containers.V1),d=s.useMemo(p().Layouts.Table.V2),R=s.useMemo(p().ButtonLoader),{actions:b}=E(),{translate:n,getLabel:A}=S(),{selectors:{getAllRolesGlobalReducer:m,getAllRolesReducer:r},actions:{get:f,getAll:C,upsertRole:k,deleteRole:O}}=M(),x=s.useMemo(()=>m.sort((a,c)=>c.name<a.name?1:-1).map(a=>{const c=r.find(w=>w.role_id==a.id);return{...a,roleProject:c}}),[m,r]);s.useEffect(()=>{e(!0),Promise.all([C(),f()]).then(a=>{e(!1)})},[]);function B(a,c){const w=y();e(!0),k({id:w,role_id:c.id,status:!0}).then(N=>{e(!1)})}function D(a,c){e(!0),O({id:c.roleProject.id}).then(w=>{e(!1)})}function j(){b.openDrawer(!0,l(G,{style:{width:"50vw",display:"flex"},children:l(J,{})}),"right")}return l(G,{container:!0,style:{justifyContent:"center"},children:l(g,{title:"Roles",icon:l(I,{}),xs:12,sm:12,children:l(d,{isLoading:o,title:"Manage Roles",...$({}),freeActions:[l(R,{size:"small",value:n(A,"Add Role"),variant:"outlined",onClick:j,startIcon:l(V,{})},1)],pageSize:20,actions:[a=>({icon:_.Check,label:"Activate Role",onClick:B,hidden:a.roleProject}),a=>({icon:_.Clear,label:"Deactive Role",onClick:D,hidden:!a.roleProject})],data:x})})})}export{W as default};

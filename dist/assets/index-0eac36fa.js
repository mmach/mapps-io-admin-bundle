import{K as U,L as M,b as v,N as y,Q as R,O as E,R as a,M as c,S as _,W as j,V as G,l as P,G as d,j as s,m as F,X as V,U as B}from"./index-9decd392.js";import{d as I}from"./FlashOn-47e3592a.js";const q=({})=>({columns:[{titleToken:"CREATED AT",field:"createdAt",type:"date",isActive:!0},{titleToken:"STATUS",field:"token",isActive:!0},{titleToken:"ACTIVATED",type:"checkbox",field:"statusProject",isActive:!0},{titleToken:"PREDEFINED",type:"!checkbox",field:"project_id",isActive:!0}],detailPanelPlugin:"mapps-status-expanded-preview"}),L=t=>{const n={getStatuses:e=>t(new y().queryThunt(R.Status.GET_GLOBAL_STATUSES,e)),getStatusesProject:e=>t(new y().queryThunt(R.Status.GET_STATUS,e)),upsertStatus:e=>t(new y().commandThunt(E.Status.UPSERT_STATUS,e)),upsertStatusGlobal:e=>t(new y().queryThunt(E.Status.UPSERT_STATUS_GLOBAL,e))};return{...n,upsertStatusGlobal:async e=>{await n.upsertStatusGlobal(e),await n.getStatuses()},upsertStatus:async e=>{await n.upsertStatus(e),await n.getStatusesProject()}}},O=()=>t=>t.StatusAdminReducer.statusesGlobal,N=()=>t=>t.StatusAdminReducer.statuses;function D(){const t=U(),{statusAdminReducer:n}=M(l=>({statusAdminReducer:l.StatusAdminReducer})),e=M(O()),g=M(N()),S=v.useCallback(L(t).getStatuses,[t]),p=v.useCallback(L(t).getStatusesProject,[t]),f=v.useCallback(L(t).upsertStatus,[t]),u=v.useCallback(L(t).upsertStatusGlobal,[t]);return{selectors:{statusAdminReducer:n,getAllStatusesReducer:g,getAllStatusesGlobalReducer:e},actions:{getStatuses:S,getStatusesProject:p,upsertStatus:f,upsertStatusGlobal:u},state:{},hooks:{},functions:{}}}function z({}){const t=a.useMemo(c().Layouts.Sections.V1),n=a.useMemo(c().FormComponents.TextBox),e=a.useMemo(c().ButtonLoader),{selectors:{},actions:{upsertStatusGlobal:g}}=D(),{translate:S,getLabel:p}=_(),f=j(),[u,l]=a.useState({id:G()}),[T,h]=a.useState(!1);function b(){h(!0),g({...u,id:u.id}).then(o=>{h(!1),f.actions.closeDrawer()})}return P(d,{container:!0,children:[s(t,{title:"Status Details",style:{flexDirection:"column"},children:s(n,{label:S(p,"Token"),value:u.token,onChange:o=>l({...u,token:o.target.value.toUpperCase()}),field:"value",validation:[]})}),s(d,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:s(e,{color:"primary",onClick:b,value:S(p,"Save"),variant:"outlined",isLoading:T})})]})}function Q(t){const n=a.useMemo(c().Layouts.Groups.V1),e=a.useMemo(()=>F.byName("mapps-component-translate-component").component,[]),g=a.useMemo(c().FormComponents.TextBox),S=a.useMemo(c().FormComponents.Checkbox),p=a.useMemo(c().ButtonLoader),{getPlaceholder:f,getLabel:u,translate:l}=_(),{actions:T}=j(),[h,b]=a.useState(!1),[o,A]=a.useState(t.status.statusProject),{actions:{upsertStatus:C}}=D();function k(i,r){b(!0),C(o).then(m=>{b(!1),T.closeDrawer()})}function x(i){o.translation_id||(o.translation_id=G()),i.id||(i.id=o.translation_id),A({...o,translation:i})}return P(d,{container:!0,style:{display:"flex"},children:[s(d,{item:!0,xs:6,style:{display:"flex"},children:s(n,{title:"Status Translation",children:s(e,{translation:o.translation||{},setTranslate:x,i:!0})})}),s(d,{item:!0,xs:6,style:{display:"flex"},children:P(n,{title:"Status Details",children:[s(g,{onChange:i=>{A({...o,status_order:i.target.value})},placeholder:l(f,"Order"),isRequired:!0,label:l(u,"Status order"),value:o.status_order,field:"code",validation:[]}),s(S,{label:l(u,"Status is closing"),value:o.is_closed,onChange:i=>{A({...o,is_closed:i.target.checked})}})]})}),s(d,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:s(p,{color:"primary",onClick:k,value:l(u,"Save"),variant:"outlined",isLoading:h})})]})}function $(t){const[n,e]=a.useState(!0),g=a.useMemo(c().Layouts.Containers.V1),S=a.useMemo(c().Layouts.Table.V2),p=a.useMemo(c().ButtonLoader),{translate:f,getLabel:u}=_(),{actions:l}=j(),{selectors:{getAllStatusesGlobalReducer:T,getAllStatusesReducer:h},actions:{getStatuses:b,getStatusesProject:o,upsertStatus:A}}=D();a.useEffect(()=>{e(!0),Promise.all([o(),b()]).then(r=>{e(!1)})},[]);const C=a.useMemo(()=>T.sort((r,m)=>m.token<r.token?1:-1).map(r=>{const m=h.find(w=>w.status_id==r.id);return{...r,statusProject:m}}),[T,h]);function k(r,m){const w=G();e(!0),A({id:w,status_id:m.id,status:!0}).then(K=>{e(!1)})}function x(){l.openDrawer(!0,s(d,{style:{width:"50vw",display:"flex"},children:s(z,{})}),"right")}function i(r,m){l.openDrawer(!0,s(d,{style:{width:"50vw",display:"flex"},children:s(Q,{status:m})}),"right")}return s(d,{container:!0,style:{justifyContent:"center"},children:s(g,{title:"Status List",icon:s(I,{}),xs:12,sm:12,children:s(S,{isLoading:n,title:"Manage Statuses",...q({}),freeActions:[s(p,{size:"small",value:f(u,"Add Status"),variant:"outlined",onClick:x,startIcon:s(V,{})},1)],pageSize:20,actions:[r=>({icon:B.Check,label:"Activate Status",onClick:k,hidden:r.statusProject}),r=>({icon:B.Edit,label:"Edit Status",onClick:i,hidden:!r.statusProject})],data:C})})})}export{$ as default};
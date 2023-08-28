import{K as Z,L as $,b as P,N as R,bE as G,Y as X,i as J,Z as ee,R as s,m as te,M as C,S as F,l as T,G as c,j as e,V as E,W as U,$ as ne,a0 as se,a1 as O,T as K,X as W,U as H}from"./index-ae6bf8ef.js";import{d as re}from"./Extension-b781fafc.js";import{d as oe}from"./Close-66c36c6a.js";import{S as ae}from"./style-45e7e704.js";import{d as ie}from"./LockOpen-5e71720e.js";import{I as z}from"./IconButton-b74afef6.js";import"./createSvgIcon-bd105a78.js";const ue=({type:t})=>({columns:[{titleToken:"CREATED AT",field:"createdAt",type:"date",isActive:!0},{titleToken:"TOKEN",field:"token",isActive:!0},{titleToken:"IS LAZY",field:"load_on_init",isActive:!0,type:"!checkbox"},{titleToken:"ACTIVE",field:"is_active",isActive:!0,type:"checkbox"}],enableMultiRowSelection:!1,enableRowSelection:!0}),S=t=>{const r={getCmsMenuAdmin:()=>t(new R().queryThunt("getCmsMenusAdminQuery",{})),getProjectCmsMenuElement:()=>t(new R().queryThunt("getCmsMenusQuery",{})),setCurrentMenuId:n=>t({type:G.SET_CURRENT_MENU,dto:n}),clean:n=>t({type:G.CLEAN_MENU_STORAGE}),upsertProjectCmsMenu:n=>t(new R().commandThunt("upsertProjectCmsMenuCommand",n)),deleteProjectCmsMenuItem:n=>t(new R().commandThunt("deleteProjectCmsMenuItemCommand",n)),upsertCmsMenuItem:n=>t(new R().commandThunt("upsertProjectCmsMenuItemCommand",n)),upsertProjectCmsMenuItemPrivilegeCommand:n=>t(new R().commandThunt("upsertProjectCmsMenuItemPrivilegeCommand",n)),deleteProjectCmsMenuItemPrivilegeCommand:n=>t(new R().commandThunt("deleteProjectCmsMenuItemPrivilegeCommand",n)),deleteProjectCmsMenu:n=>t(new R().commandThunt("deleteProjectCmsMenuCommand",n))};return{...r,upsertCmsMenuItem:async n=>{await r.upsertCmsMenuItem(n),await r.getCmsMenuAdmin()},upsertProjectCmsMenu:async n=>{await r.upsertProjectCmsMenu(n),await r.getCmsMenuAdmin()},deleteProjectCmsMenu:async n=>{await r.deleteProjectCmsMenu(n),await r.getCmsMenuAdmin()},upsertBunchCmsMenuItem:async n=>{const _=n.map(v=>r.upsertCmsMenuItem(v));await Promise.all(_),await r.getCmsMenuAdmin()},upsertProjectCmsMenuItemPrivilegeCommand:async n=>{await r.upsertProjectCmsMenuItemPrivilegeCommand(n),await r.getCmsMenuAdmin()},deleteProjectCmsMenuItem:async n=>{await r.deleteProjectCmsMenuItem(n),await r.getCmsMenuAdmin()},deleteProjectCmsMenuItemPrivilegeCommand:async n=>{await r.deleteProjectCmsMenuItemPrivilegeCommand(n),await r.getCmsMenuAdmin()}}},le=t=>t.CmsMenuAdminReducer.current_menu_id?t.CmsMenuAdminReducer.cms.find(r=>r.id==t.CmsMenuAdminReducer.current_menu_id):null,ce=t=>r=>t?r.CmsMenuAdminReducer.cms.find(n=>n.id==r.CmsMenuAdminReducer.current_menu_id).menu_items.find(n=>n.id==t):null,me=t=>r=>t?r.CmsMenuAdminReducer.cms.find(n=>n.id==t):null;function V(){const t=Z(),{cmsMenuAdminReducer:r}=$(o=>({cmsMenuAdminReducer:o.CmsMenuAdminReducer})),[n,_]=P.useState(),[v,b]=P.useState(),f=$(le),p=$(ce(n)),M=$(me(v)),u=P.useCallback(S(t).getCmsMenuAdmin,[t]),a=P.useCallback(S(t).deleteProjectCmsMenu,[t]),i=P.useCallback(S(t).getProjectCmsMenuElement,[t]),l=P.useCallback(S(t).setCurrentMenuId,[t]),w=P.useCallback(S(t).upsertCmsMenuItem,[t]),x=P.useCallback(S(t).upsertBunchCmsMenuItem,[t]),j=P.useCallback(S(t).deleteProjectCmsMenuItem,[t]),D=P.useCallback(S(t).upsertProjectCmsMenuItemPrivilegeCommand,[t]),h=P.useCallback(S(t).deleteProjectCmsMenuItemPrivilegeCommand,[t]),k=P.useCallback(S(t).upsertProjectCmsMenu,[t]),B=P.useCallback(S(t).clean,[t]);return{selectors:{cmsMenuAdminReducer:r,getCurrentCmsMenuReducer:f,getCmsMenuItemReducer:p,getCmsMenuReducer:M},actions:{getCmsMenuAdmin:u,getProjectCmsMenuElement:i,setCurrentMenuId:l,upsertCmsMenuItem:w,upsertBunchCmsMenuItem:x,upsertProjectCmsMenu:k,deleteProjectCmsMenu:a,deleteProjectCmsMenuItem:j,upsertProjectCmsMenuItemPrivilegeCommand:D,deleteProjectCmsMenuItemPrivilegeCommand:h,clean:B},state:{cmsMenuId:v,cmsMenuItemId:n},hooks:{setCmsMenuId:b,setCmsMenuItemId:_},functions:{}}}var q={},de=J,Ce=ee;Object.defineProperty(q,"__esModule",{value:!0});var Q=q.default=void 0,pe=Ce(P),Me=de(X()),ge=(0,Me.default)(pe.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");Q=q.default=ge;function fe({cmsMenuItem:t,setCmsMenuItem:r}){const n=s.useMemo(()=>te.byName("mapps-component-translate-component").component,[]),_=s.useMemo(C().Layouts.Groups.V1),v=s.useMemo(C().FormComponents.TextBox),b=s.useMemo(C().FormComponents.Checkbox),{getPlaceholder:f,getLabel:p,translate:M}=F(),[u,a]=s.useState({...t});s.useEffect(()=>{r(u)},[u]);function i(l){u.translation_id||(u.translation_id=E()),l.id||(l.id=u.translation_id),a({...u,translation:l})}return T(c,{container:!0,children:[e(c,{item:!0,xs:6,style:{display:"flex"},children:T(_,{title:"Menu Item Details",children:[e(v,{onChange:l=>{a({...u,url:l.target.value})},placeholder:M(f,"Url"),label:M(p,"Url"),value:u.url,field:"url",validation:[]}),e(v,{onChange:l=>{a({...u,icon:l.target.value})},placeholder:M(f,"Icon"),label:M(p,"Icon"),value:u.icon,field:"icon",validation:[]}),e(v,{onChange:l=>{a({...u,plugin_name:l.target.value})},placeholder:M(f,"Plugin Name"),label:M(p,"Plugin Name"),value:u.plugin_name,field:"plugin_name",validation:[]}),e(b,{label:M(p,"Active"),value:u.is_active,onChange:l=>{a({...u,is_active:l.target.checked})}})]})}),e(c,{item:!0,xs:6,style:{display:"flex"},children:e(_,{title:"Menu Item Translation",children:e(n,{translation:u.translation||{},setTranslate:i,i:!0})})})]})}function he({cmsMenuItemId:t,cmsMenuParentId:r}){const n=s.useMemo(C().ButtonLoader),_=U(),{translate:v,getLabel:b}=F(),[f,p]=s.useState(!0),[M,u]=s.useState({}),{selectors:{getCmsMenuItemReducer:a,getCurrentCmsMenuReducer:i},actions:{upsertCmsMenuItem:l},hooks:{setCmsMenuItemId:w}}=V();s.useEffect(()=>{t?w(t):(u({id:E(),sort_order:0}),p(!1))},[]),s.useEffect(()=>{a&&(u(a),p(!1))},[a]);async function x(){i&&(await l({...M,cms_menu_id:i.id,cms_menu_item_parent_id:r}),_.actions.closeDrawer())}return!f&&T(c,{container:!0,children:[e(fe,{cmsMenuItem:{...M},setCmsMenuItem:u}),e(c,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:e(n,{color:"primary",onClick:x,value:v(b,"Save"),variant:"outlined"})})]})}const ve=["!","|","&","="];function _e({cmsMenuItemId:t}){const r=s.useMemo(C().Layouts.Groups.V1),n=s.useMemo(C().BodyLoader),_=s.useMemo(C().ButtonLoader),v=s.useMemo(C().FormComponents.DropDownList),b=s.useMemo(C().FormComponents.TextBox),f=s.useMemo(C().FormComponents.TagComponent);U();const{translate:p,getLabel:M}=F(),[u,a]=s.useState(!0),[i,l]=s.useState({}),{selectors:{privsSelector:w}}=ne(),{selectors:{getCmsMenuItemReducer:x,getCurrentCmsMenuReducer:j},actions:{upsertCmsMenuItem:D,upsertProjectCmsMenuItemPrivilegeCommand:h,deleteProjectCmsMenuItemPrivilegeCommand:k},hooks:{setCmsMenuItemId:B}}=V();s.useEffect(()=>{t&&B(t)},[]),s.useEffect(()=>{x&&(l(x),a(!1))},[x]);function o(){const m=[],A=w.filter(y=>!m.includes(y.id));return[{id:"",value:""},...A].map(y=>({id:y.id,value:y.privilege||y.value}))}function d(m){const A=m.currentTarget.dataset.key;a(!0),k({id:A}).then(y=>{a(!1)})}function g(m){a(!0),h({id:E(),status:1,privilege_id:m.target.value,cms_menu_item_id:t}).then(A=>{a(!1)})}function L(m,A){if(m.split(" ").filter(y=>!y.startsWith("#")).length+1!=m.split(" ").filter(y=>y.startsWith("#")).length)return!1;{const y=m.split(" ").filter(N=>N.startsWith("#$")).map(N=>N.replace(/#/g,"").replace("$",""));return y.filter(N=>A.map(Y=>Y.privileges.privilege_details.name.trim()).includes(N)).length==y.length}}function I(){a(!0),D(i).then(m=>{a(!1)})}try{return i&&!u?T(c,{container:!0,style:{display:"flex"},children:[e(r,{title:"Menu Item Details",children:e(b,{disabled:!0,label:p(M,"Url"),value:i.url,field:"value",validation:[]})}),T(r,{title:"Allowed Privileges",children:[e(v,{label:"Privileges",valueOptions:o(),value:"",onChange:g,field:"type",validation:[]}),i.menu_item_privileges.map((m,A)=>e(se,{"data-key":m.id,onClick:d,label:m.privileges.privilege_details.name.trim()},m.id))]}),T(r,{title:"Function",style:{display:"flex",width:"100%"},children:[e(c,{xs:12,children:e(f,{notUniq:!0,disabled:!0,tags:i.func?i.func.split(" ").map(m=>({id:E(),value:E(),label:m})):[],noLabel:!0,onChange:m=>{const A=m.map(y=>y.label).join(" ");l({...i,func:A})},suggestions:[...ve.map(m=>({value:m,label:m,type:"OPERATOR"})),,...i.menu_item_privileges.map(m=>({id:E(),value:E(),label:`#$${m.privileges.privilege_details.name.trim()}#`,type:"PRIV"}))]})}),e(c,{xs:12,style:{marginLeft:"1rem",marginBottom:"1rem",marginTop:"1rem"},children:i.func?e(c,{style:{color:L(i.func,i.menu_item_privileges)?"green":"red"},children:i.func}):e(O,{})}),e(c,{xs:12,style:{marginLeft:"1rem",marginBottom:"1rem",marginTop:"1rem"},children:e(_,{color:"primary",onClick:I,value:p(M,"Save Func"),variant:"outlined"})})]})]}):e(c,{style:{height:"400px",display:"flex",width:"100%"},children:e(n,{text:" ",size:"25px"})})}catch(m){return console.log(m),e(O,{})}}function ye({node:t}){const r=s.useMemo(C().ButtonLoader);return t?e(O,{children:e(r,{className:t.isActive==!0?"selected":"",variant:"clean",size:"small",value:e(c,{style:{display:"flex",flexDirection:"column"},children:e(c,{children:String(t.translation?t.translation.name:t.url).toUpperCase()})}),startIcon:t.icon?e("img",{style:{maxWidth:20,maxHeight:20,width:20},src:window.env.BLOB_URL+"/blob/"+t.icon},t.id):e(c,{style:{maxWidth:20,maxHeight:20,width:20}})},t.id)}):e(O,{})}function Ie(){const t=s.useMemo(C().ConfirmationDialog),[r,n]=s.useState([{title:"_ROOT",category:"_ROOT",children:[{title:"index.js",category:" "}]}]);s.useState(""),s.useState(!0),s.useMemo(C().Layouts.Table.V2);const _=s.useMemo(C().Layouts.Sections.V1),v=s.useMemo(C().Layouts.Groups.V1),b=s.useMemo(C().ButtonLoader),{actions:f}=U(),p=K(),{translate:M,getLabel:u}=F(),{selectors:{getCurrentCmsMenuReducer:a},actions:{getCmsMenuAdmin:i,upsertCmsMenuItem:l,upsertBunchCmsMenuItem:w,deleteProjectCmsMenuItem:x}}=V();s.useEffect(()=>{window.__isReactDndBackendSetUp&&(window.__isReactDndBackendSetUp=!1)},[]),s.useEffect(()=>{a&&j()},[a]);function j(){const o=a.menu_items.sort((g,L)=>g.sort_order>L.sort_order?1:-1).map(g=>({...g,treeIndex:g.sort_order,expanded:!0})),d=D([...o.map(g=>({...g}))]);n([...d.map(g=>({...g}))])}function D(o){const d={};let g;const L=[];let I;for(I=0;I<o.length;I+=1)d[o[I].id]=I,o[I].children=[];for(I=0;I<o.length;I+=1)try{g=o[I],g.cms_menu_item_parent_id!==null?o[d[g.cms_menu_item_parent_id]].children.push(g):L.push(g)}catch{}return L}function h(o,d,g){f.openDrawer(!0,e(c,{style:{width:"50vw",display:"flex"},children:e(he,{cmsMenuParentId:d,cmsMenuItemId:g})}),"right")}function k(o,d){f.openDrawer(!0,e(c,{style:{width:"50vw",display:"flex"},children:e(_e,{cmsMenuItemId:d})}),"right")}function B(o,d){p.actions.openDialog(!0,e(t,{title:"Delete Menu Item",description:"Do you want to delete asdasdasd menu item?",onConfirm:async()=>{p.actions.closeDialog(),await x({id:d})}}))}return a?T(_,{title:a.token,children:[e(c,{children:e(b,{color:"primary",onClick:h,value:M(u,"Create"),startIcon:e(W,{}),variant:"outlined"})}),e(v,{title:"Category Tree",children:e(c,{style:{display:"block",width:"100%",height:"100%"},children:e(ae,{rowHeight:55,style:{height:"800px"},treeData:r,onChange:o=>{n([...o])},canDrag:o=>!0,onMoveNode:async o=>{let d=[];return o.nextParentNode?d=o.nextParentNode.children.map((L,I)=>({...L,sort_order:I,title:void 0,children:[],cms_menu_item_parent_id:o.nextParentNode.id})):d=o.treeData.map((g,L)=>({...g,sort_order:L,children:[],title:void 0,cms_menu_item_parent_id:null})),await w(d),o},generateNodeProps:o=>(o.node.title=e(c,{style:{paddingLeft:20},children:e(ye,{node:{...o.node}})}),o.buttons=[],o.buttons.push(e(z,{size:"small",onClick:d=>h(d,o.node.id),children:e(W,{})})),o.buttons.push(e(z,{size:"small",onClick:d=>h(d,o.node.cms_menu_item_parent_id,o.node.id),children:e(Q,{})})),o.buttons.push(e(z,{size:"small",onClick:d=>B(d,o.node.id),children:e(oe,{})})),o.buttons.push(e(z,{size:"small",onClick:d=>k(d,o.node.id),children:e(ie,{})})),o),onlyExpandSearchedNodes:!0})})})]}):e(O,{})}function Pe({cmsMenuId:t}){const r=s.useMemo(C().Layouts.Groups.V1),n=s.useMemo(C().FormComponents.TextBox),_=s.useMemo(C().FormComponents.Checkbox),v=s.useMemo(C().ButtonLoader),b=U(),{translate:f,getLabel:p,getPlaceholder:M}=F(),[u,a]=s.useState(!0),[i,l]=s.useState({}),{selectors:{getCmsMenuReducer:w},actions:{upsertProjectCmsMenu:x},hooks:{setCmsMenuId:j}}=V();s.useEffect(()=>{t?j(t):(l({id:E(),sort_order:0}),a(!1))},[]),s.useEffect(()=>{w&&(l(w),a(!1))},[w]);async function D(){await x({...i}),b.actions.closeDrawer()}return!u&&T(c,{container:!0,children:[e(c,{item:!0,xs:12,style:{display:"flex"},children:T(r,{title:"Menu Details",children:[e(n,{onChange:h=>{l({...i,token:h.target.value})},placeholder:f(M,"Menu token"),label:f(p,"Menu token"),value:i.token,field:"menu-token",validation:[]}),e(_,{label:f(p,"Load on init"),value:i.load_on_init,onChange:h=>{l({...i,load_on_init:h.target.checked})}}),e(_,{label:f(p,"Active"),value:i.is_active,onChange:h=>{l({...i,is_active:h.target.checked})}})]})}),e(c,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:e(v,{color:"primary",onClick:D,value:f(p,"Save"),variant:"outlined"})})]})}function De(){const t=s.useMemo(C().ConfirmationDialog),[r,n]=s.useState(!0),_=s.useMemo(C().Layouts.Table.V2),v=s.useMemo(C().Layouts.Containers.V1),b=s.useMemo(C().ButtonLoader),{actions:f}=U(),p=K(),{translate:M,getLabel:u}=F(),{selectors:{cmsMenuAdminReducer:a},actions:{getCmsMenuAdmin:i,setCurrentMenuId:l,deleteProjectCmsMenu:w,clean:x}}=V();s.useEffect(()=>(n(!0),Promise.all([i()]).then(h=>{n(!1)}),x),[]);function j(h,k){f.openDrawer(!0,e(c,{style:{width:"50vw",display:"flex"},children:e(Pe,{cmsMenuId:k&&k.id})}),"right")}function D(h,k){p.actions.openDialog(!0,e(t,{title:"Delete CMS Menu",description:`Do you want to delete ${k.token} menu?`,onConfirm:async()=>{p.actions.closeDialog(),n(!0),await w(k),n(!1)}}))}return e(c,{container:!0,style:{justifyContent:"center"},children:e(v,{title:"CMS Menus",icon:e(re,{}),xs:12,sm:12,children:T(c,{container:!0,style:{justifyContent:"center"},children:[e(c,{item:!0,xs:6,children:e(_,{freeActions:[e(b,{size:"small",value:M(u,"Create"),variant:"outlined",onClick:j,startIcon:e(W,{})},1)],onRowSelectionChange:h=>{const k=Object.keys(h).map(B=>B);l(k[0])},isLoading:r,title:"Manage CMS Menus",actions:[h=>({icon:H.Edit,label:"Edit",onClick:j}),h=>({icon:H.Delete,label:"Delete",onClick:D})],pageSize:20,...ue({}),data:a.cms||[]})}),e(c,{item:!0,container:!0,xs:6,children:e(Ie,{})})]})})})}export{De as default};

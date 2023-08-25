import{K as V,L as A,b as v,N as _,S as D,R as o,m as w,M as r,l as k,a1 as B,j as e,ag as y,ai as L,V as x,G as h,ak as G,W as R,T as O,X as U,U as M}from"./index-085b2e83.js";import{d as z}from"./Extension-e2f2caec.js";import"./createSvgIcon-e696faba.js";const H=({type:n})=>({columns:[{titleToken:"CREATED AT",field:"createdAt",type:"date",isActive:!0},{titleToken:"GROUP",field:"group",isActive:!0},{titleToken:"TITLTE",field:"title",isActive:!0},{titleToken:"URL",field:"url",isActive:!0},{titleToken:"URL EXACT",field:"url_exact",isActive:!0,type:"checkbox"},{titleToken:"HOMEPAGE",field:"is_homepage",isActive:!0,type:"checkbox"},{titleToken:"ACTIVATE",field:"is_active",isActive:!0,type:"checkbox"},{titleToken:"LAYOUT",field:"layout_plugin_name",isActive:!0}],enableGrouping:!0}),S=n=>{const i={getCmsPage:()=>n(new _().queryThunt("getCmsPagesQuery",{})),deleteCmsPage:t=>n(new _().commandThunt("deleteProjectCmsPageCommand",t)),upsertCmsPage:t=>n(new _().commandThunt("upsertProjectCmsPageCommand",t))};return{...i,upsertCmsPage:async t=>{await i.upsertCmsPage(t),await i.getCmsPage()},deleteCmsPage:async t=>{await i.deleteCmsPage(t),await i.getCmsPage()}}},N=n=>i=>n?i.CmsPagesAdminReducer.cms.find(t=>t.id==n):null;function F(){const n=V(),{cmsPagesAdminReducer:i}=A(a=>({cmsPagesAdminReducer:a.CmsPagesAdminReducer})),[t,l]=v.useState(),g=A(N(t)),u=v.useCallback(S(n).getCmsPage,[n]),d=v.useCallback(S(n).deleteCmsPage,[n]),m=v.useCallback(S(n).upsertCmsPage,[n]);return{selectors:{cmsPagesAdminReducer:i,getCmsPageIdReducer:g},actions:{getCmsPage:u,deleteCmsPage:d,upsertCmsPage:m},state:{cmsPageId:t},hooks:{setCmsPageId:l},functions:{}}}function $({cmsPage:n,setCmsPage:i}){const{translate:t,getLabel:l}=D(),g=o.useMemo(()=>w.byName("mapps-component-translate-component").component,[]),u=o.useMemo(()=>w.byType("mapps-io-page-layout"),[]),d=o.useMemo(r().Layouts.Sections.V1),m=o.useMemo(r().FormComponents.DropDownList),[a,c]=o.useState({...n});o.useEffect(()=>{i(a)},[a]);function p(s){a.translation_id||(a.translation_id=x()),s.id||(s.id=a.translation_id),c({...a,translation:s})}function f(){return[{id:"",name:""},...u].map(s=>({id:s.name,value:s.layout?s.layout.name:s.name}))}return k(B,{children:[k(d,{title:"Cms Page",children:[e(y,{label:t(l,"Title Token"),value:a.title,onChange:s=>{c({...a,title:s.target.value})},field:"title",validation:[]}),e(y,{label:t(l,"URL"),value:a.url,onChange:s=>{c({...a,url:s.target.value})},field:"url",validation:[]}),e(m,{label:"Layout",valueOptions:f(),value:a.layout_plugin_name,onChange:s=>{c({...a,layout_plugin_name:s.target.value})},field:"type",validation:[]}),e(y,{disabled:!0,label:t(l,"Layout Plugin"),value:a.layout_plugin_name,onChange:s=>{c({...a,layout_plugin_name:s.target.value})},field:"layout_plugin_name",validation:[]}),e(L,{label:t(l,"Exact"),value:a.url_exact,onChange:s=>{c({...a,url_exact:s.target.checked})},field:"url_exact",validation:[]}),e(L,{label:t(l,"Is Homepage"),value:a.is_homepage,onChange:s=>{c({...a,is_homepage:s.target.checked})},field:"is_homepage",validation:[]}),e(L,{label:t(l,"Is active"),value:a.is_active,onChange:s=>{c({...a,is_active:s.target.checked})},field:"is_active",validation:[]})]}),e(d,{title:"Page Title Translation",children:e(g,{translation:a.translation||{},setTranslate:p,i:!0})})]})}function X({cmsPage:n,setCmsPage:i}){const t=o.useMemo(r().Layouts.Tab.V1),[l,g]=o.useState({...n});return o.useEffect(()=>{i(l)},[l]),e(h,{container:!0,children:e(t,{defaultTab:0,tabConfig:[{label:"CMS ",render:()=>e(G,{mode:"json",theme:"monokai",value:l.cms,onChange:u=>{g({...l,cms:u})},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,width:"100%",height:"80vh"},showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}},1)}]})})}function E({cmsPageId:n}){const i=o.useMemo(r().ButtonLoader),t=o.useMemo(r().Layouts.Groups.V1),l=o.useMemo(r().Layouts.Tab.V1),g=R(),{translate:u,getLabel:d}=D(),[m,a]=o.useState(!0),[c,p]=o.useState({}),{selectors:{getCmsPageIdReducer:f},actions:{upsertCmsPage:s},hooks:{setCmsPageId:b}}=F();o.useEffect(()=>{n?b(n):(p({id:x()}),a(!1))},[]),o.useEffect(()=>{f&&(p(f),a(!1))},[f]);async function T(){await s(c),g.actions.closeDrawer()}return!m&&k(h,{container:!0,children:[e(t,{xs:12,sm:6,title:"CMS Page Details",children:e(y,{label:u(d,"Page Token Title"),value:c.title,field:"title",disabled:!0,validation:[]})}),e(l,{defaultTab:0,tabConfig:[{label:"Details",render:()=>e($,{cmsPage:{...c},setCmsPage:p})},{label:"CMS JSON",render:()=>e(X,{cmsPage:{...c},setCmsPage:p})}]}),e(h,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:e(i,{color:"primary",onClick:T,value:u(d,"Save"),variant:"outlined"})})]})}function Q(){const n=o.useMemo(r().ConfirmationDialog),[i,t]=o.useState(!0),l=o.useMemo(r().Layouts.Table.V2),g=o.useMemo(r().Layouts.Containers.V1);o.useMemo(r().Layouts.Tab.V1);const u=o.useMemo(r().ButtonLoader),{actions:d}=R(),m=O(),{translate:a,getLabel:c}=D(),{selectors:{cmsPagesAdminReducer:p},actions:{getCmsPage:f,deleteCmsPage:s}}=F();o.useEffect(()=>{t(!0),Promise.all([f()]).then(C=>{t(!1)})},[]);function b(){d.openDrawer(!0,e(h,{style:{width:"50vw",display:"flex"},children:e(E,{})}),"right")}function T(C,P){d.openDrawer(!0,e(h,{style:{width:"50vw",display:"flex"},children:e(E,{cmsPageId:P.id})}),"right")}function I(C,P){m.actions.openDialog(!0,e(n,{title:"Duplicate CMS Element",description:`Do you want to duplicate ${P.token} element?`,onConfirm:async()=>{m.actions.closeDialog(),t(!0),t(!1)}}))}function j(C,P){m.actions.openDialog(!0,e(n,{title:"Delete CMS Page",description:`Do you want to delete ${P.title} page?`,onConfirm:async()=>{m.actions.closeDialog(),t(!0),await s(P),t(!1)}}))}return e(h,{container:!0,style:{justifyContent:"center"},children:e(g,{title:"CMS Pages",icon:e(z,{}),xs:12,sm:12,children:e(l,{freeActions:[e(u,{size:"small",value:a(c,"Create Page"),variant:"outlined",onClick:b,startIcon:e(U,{})},1)],isLoading:i,title:"Manage CMS Pages",pageSize:20,...H({}),data:p.cms||[],actions:[C=>({icon:M.Edit,label:"Edit",onClick:T,hidden:!C.project_id}),C=>({icon:M.Delete,label:"Delete",onClick:j,hidden:!C.project_id}),C=>({icon:M.Save,label:"CMS",onClick:I})]})})})}export{Q as default};

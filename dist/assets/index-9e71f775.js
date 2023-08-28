import{j as o,a0 as Q,K,L as I,b as h,V as j,N as C,O as S,Q as F,R as a,M as g,S as B,W as N,l as R,G as O,m as W,X,U as P}from"./index-ae6bf8ef.js";import{d as H}from"./FlashOn-8bc68159.js";import{u as Y}from"./hook-237fc9d0.js";const J=({openCategoryOption:t})=>({columns:[{titleToken:"CREATED AT",field:"createdAt",type:"date",isActive:!0},{titleToken:"DIMENSION NAME",field:"name",isActive:!0},{titleToken:"CATEGORY TYPE NAME",field:"coType.name",isActive:!0},{titleToken:"CATEGORY OPTION",type:"function",field:"categoryOptions",isActive:!0,render:i=>i.categoryOptions.map(e=>o(Q,{onClick:t,"data-key":e.id,label:`${e.id.split("-")[0]} - ${e.translation&&e.translation.name}`},e.id)),enableSorting:!1,enableColumnFilter:!1,enableGrouping:!1},{titleToken:"CATEGORY TYPE",field:"coType.type",isActive:!0},{titleToken:"CATEGORY TYPE ITEM",field:"coTypeItem.show",isActive:!0},{titleToken:"AS CAT REF",type:"checkbox",field:"as_cat_ref",isActive:!0},{titleToken:"ACTIVATED",type:"checkbox",field:"dimensionProject",isActive:!0},{titleToken:"PREDEFINED",type:"!checkbox",field:"project_id",isActive:!0}],enableGrouping:!0}),v=t=>{const i={deleteDimension:e=>t(new C().commandThunt(S.Dimensions.DELETE_DIM,e)),deleteDimensionGlobal:e=>t(new C().commandThunt(S.Dimensions.DELETE_DIM_GLOBALLY,e)),upsertDimensionGlobal:e=>t(new C().commandThunt(S.Dimensions.UPSERT_DIM_GLOBALLY,e)),get:e=>t(new C().queryThunt(F.Dimensions.GET_DIM,e)),getAll:e=>t(new C().queryThunt(F.Dimensions.GET_GLOBAL_DIM,e)),upsertDimension:e=>t(new C().commandThunt(S.Dimensions.UPSERT_DIM,e))};return{...i,upsertDimensionGlobal:async e=>{await i.upsertDimensionGlobal(e),await i.upsertDimension({dimension_id:e.id,id:j(),status:!0}),await i.getAll(),await i.get()},upsertDimension:async e=>{await i.upsertDimension(e),await i.get()},deleteDimension:async e=>{await i.deleteDimension(e),await i.get()},deleteDimensionGlobal:async e=>{await i.deleteDimensionGlobal(e),await i.getAll(),await i.get()}}},Z=()=>t=>t.DimensionAdminReducer.dimensionsGlobal,ee=()=>t=>t.DimensionAdminReducer.dimensions;function V(){const t=K(),{dimensionAdminReducer:i}=I(y=>({dimensionAdminReducer:y.DimensionAdminReducer})),e=I(Z()),G=I(ee()),_=h.useCallback(v(t).get,[t]),k=h.useCallback(v(t).getAll,[t]),E=h.useCallback(v(t).upsertDimension,[t]),w=h.useCallback(v(t).upsertDimensionGlobal,[t]),L=h.useCallback(v(t).deleteDimensionGlobal,[t]),u=h.useCallback(v(t).deleteDimension,[t]);return{selectors:{dimensionAdminReducer:i,getAllDimensionsReducer:G,getAllDimensionsGlobalReducer:e},actions:{getAll:k,get:_,deleteDimension:u,deleteDimensionGlobal:L,upsertDimensionGlobal:w,upsertDimension:E},state:{},hooks:{},functions:{buildAdminDims:({getAllDimensionsGlobalReducer:y,getAllDimensionsReducer:s,getAllCategoryOptionsReducer:r,getCategoryTypes:A})=>y.sort((c,p)=>p.name<c.name?1:-1).map(c=>{const p=s.find(D=>D.dimension_id==c.id);let b={},n={},l=[],M=[];if(c.co_type_id&&A&&(b=A.find(D=>D.id==c.co_type_id)),b&&c.cott_id&&(n=b.cat_options_type_temp.find(D=>D.id==c.cott_id),n.show=`${n.order} - ${n.type}`),p&&r.length>0&&(l=r.filter(f=>f.dim_id==p.id)||l),p&&l.length==0&&r.length>0){const D=[];r.forEach(f=>D.push(...f.cat_opt_temp)),M=D.filter(f=>f.dim_id==p.id),l=r.filter(f=>M.find(x=>x.co_id==f.id))}return{...c,dimensionProject:p,coType:b,coTypeItem:n,categoryOptions:l,categoryOptionItems:M}})}}}function te({}){const t=a.useMemo(g().Layouts.Sections.V1),i=a.useMemo(g().FormComponents.TextBox),e=a.useMemo(g().FormComponents.TextArea),G=a.useMemo(g().FormComponents.Checkbox),_=a.useMemo(g().FormComponents.DropDownList),k=a.useMemo(g().ButtonLoader),{selectors:{},actions:{upsertDimensionGlobal:E}}=V(),{selectors:{getCategoryTypes:w},actions:{},functions:{getCategoryTypesValues:L}}=Y(),{translate:u,getLabel:m}=B(),y=N(),[s,r]=a.useState({id:j()}),[A,c]=a.useState(!1);function p(){c(!0),E({...s,id:s.id}).then(n=>{c(!1),y.actions.closeDrawer()})}function b(){const n=w.find(l=>l.id==s.co_type_id);return n?[{id:null,value:""},...n.cat_options_type_temp].map(l=>({id:l.id,value:l.order?l.order+" "+l.type:l.value})):[]}return R(O,{container:!0,children:[R(t,{title:"Dimension Global Details",style:{flexDirection:"column"},children:[o(i,{label:u(m,"Name"),value:s.name,onChange:n=>r({...s,name:n.target.value.toUpperCase()}),field:"name",validation:[]}),o(e,{label:u(m,"Descritpion"),value:s.descritpion,onChange:n=>r({...s,descritpion:n.target.value}),field:"descritpion",validation:[]}),o(G,{label:u(m,"Use as reference for other dimensions [ex. dictionaries with Unit Of Measure]"),onChange:n=>r({...s,as_cat_ref:n.target.checked})})]}),R(t,{title:"Select Category Type Relation for this Dimension Details",style:{flexDirection:"column"},children:[o(_,{label:u(m,"Category Type"),valueOptions:L(),value:s.co_type_id,onChange:n=>r({...s,co_type_id:n.target.value}),field:"cottChoose",validation:[]}),o(_,{label:u(m,"Category Type Item"),valueOptions:b(),value:s.cott_id,onChange:n=>r({...s,cott_id:n.target.value}),disabled:!s.co_type_id,field:"cottChoose",validation:[]})]}),o(O,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:o(k,{color:"primary",onClick:p,value:u(m,"Save"),variant:"outlined",isLoading:A})})]})}function se(t){const[i,e]=a.useState(!0),G=a.useMemo(g().Layouts.Containers.V1),_=a.useMemo(g().Layouts.Table.V2),k=a.useMemo(g().ButtonLoader),E=a.useMemo(()=>W.byName("mapps-category-option-preview").component),{translate:w,getLabel:L}=B(),{actions:u}=N(),{selectors:{getAllCategoryOptionsReducer:m,getCategoryTypes:y},actions:{getAllCategoryOptions:s}}=Y(),{selectors:{getAllDimensionsReducer:r,getAllDimensionsGlobalReducer:A},actions:{upsertDimension:c,get:p,getAll:b,deleteDimension:n,deleteDimensionGlobal:l},functions:{buildAdminDims:M}}=V();a.useEffect(()=>{e(!0),Promise.all([p(),b()]).then(()=>{e(!1)})},[]),a.useEffect(()=>{m.length==0&&s().then(d=>{})},[]);const D=a.useMemo(()=>M({getAllDimensionsGlobalReducer:A,getAllDimensionsReducer:r,getAllCategoryOptionsReducer:m,getCategoryTypes:y}),[A,r,m,y]);function f(d,T){const z=j();e(!0),c({id:z,dimension_id:T.id,status:!0}).then(()=>{e(!1)})}function x(d,T){e(!0),n(T.dimensionProject).then(()=>{e(!1)})}function U(d,T){e(!0),l(T).then(()=>{e(!1)})}function $(){u.openDrawer(!0,o(O,{style:{width:"50vw",display:"flex"},children:o(te,{})}),"right")}function q(d){const T=d.currentTarget.dataset.key;u.openDrawer(!0,o(O,{style:{width:"50vw",display:"flex"},children:o(E,{readOnly:!0,categoryOptionId:T})}),"right")}return o(O,{container:!0,style:{justifyContent:"center"},children:o(G,{title:"Dimension List",icon:o(H,{}),xs:12,sm:12,children:o(_,{isLoading:i,title:"Manage Dimensions",...J({openCategoryOption:q}),freeActions:[o(k,{size:"small",value:w(L,"Add Dimension"),variant:"outlined",onClick:$,startIcon:o(X,{})},1)],pageSize:20,actions:[d=>({icon:P.Check,label:"Activate Dimension",onClick:f,hidden:d.dimensionProject}),d=>({icon:P.Clear,label:"Deactivate Dimension",onClick:x,hidden:!d.dimensionProject}),d=>({icon:P.Delete,label:"Delete Dimension Global",onClick:U,hidden:!d.project_id||d.dimensionProject||d.categoryOptions.length>0})],data:D})})})}export{se as default};

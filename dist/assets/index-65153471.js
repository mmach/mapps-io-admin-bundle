import{R as o,t as _,f as E,c$ as R,dl as j,M as m,ek as x,u as P,j as e,G as i,T as l,el as U,em as V,en as B,g as u,eo as p}from"./index-b2bea69e.js";function $(d){const[h,f]=o.useState(!0),[r,g]=o.useState(new Date),[v,I]=o.useState([]),b=_({}),y=E(),w=R(),S=j(),A=o.useMemo(m().Layouts.Table.V2),O=o.useMemo(m().IUA.PREVIEW.DEFAULT),s=x(),{translate:D,getLabel:F}=P();o.useEffect(()=>()=>s.actions.clean(),[]),o.useEffect(()=>{f(!0),s.actions.getInvoices({year:r.getFullYear(),month:r.getMonth(),asAdmin:!0}).then(t=>{const n=t.data.filter(a=>!b.selectors.iuaReducer.iuaRelations[a.iua.id]).map(a=>a.iua.id);if(f(!1),n.length>0)return b.actions.getIuaList(n)}).then(t=>{if(t&&t.data){const n=[...new Set(t.data.map(a=>a.category_id))];S.hooks.setCategoryIds(n)}})},[r]),o.useEffect(()=>{I([...s.selectors.invoicesAdminReducer.invoices]),console.log(s.selectors.invoicesAdminReducer.invoices)},[s.selectors.invoicesAdminReducer.invoices]);function M(t){const n=t;window.scrollTo(0,0),g(n)}function C(t,n){w.actions.openDrawer(!0,e(i,{container:!0,style:{width:1100},children:e(O,{iua_id:n.iua.id,cmsMode:"DEFAULT",device:"desktop"})}),"right")}function L(t,n){const a=n.id,c=v.filter(T=>T.id==a)[0],k={pdf_id:c.blob.blob_id,subject:D(F,"SEND_MAIL_SUBJECT",c.number_string,c.month+"/"+c.year),body:`${window.env.BLOB_URL}/blob/${c.blob.blob_id}.pdf`};y.actions.openModal(!0,e(B,{...k}))}return e(i,{container:!0,style:{justifyContent:"center"},children:e(A,{isLoading:h,icons:l,freeActions:[e(U,{variant:"month",label:"Month",dateFormat:"MM/yyyy",showMonthYearPicker:!0,value:r,onChange:M})],...V({}),actions:[t=>({icon:l.OpenIn,label:"Open IUA",onClick:C}),t=>({icon:l.PictureAsPdf,label:"Open Invoice",onClick:L})],data:v.sort((t,n)=>new Date(n.createdAt)>new Date(t.createdAt)).map(t=>({...t,info:{number:t.number}})),title:"Invoices List"})})}function Y(){const d=o.useMemo(m().Layouts.Containers.V1);return u(i,{container:!0,style:{justifyContent:"center"},children:[u(d,{title:"TODOOOO",icon:e(p,{}),xs:12,sm:12,children:["TODOOOOOOs",u(i,{children:["Income/Outcome types,",e("br",{}),"Fill auto get incoide or manual invoice flag,",e("br",{}),"Allow to gen manual invoice,",e("br",{}),"Allow edit only manual invoice,",e("br",{}),"link income / outcome invoices,",e("br",{}),"Snapshot for user invoice information values",e("br",{}),"FIX backend to gen invoice based on inputs",e("br",{}),"Socket for invoice status change",e("br",{})]}),e(i,{children:"Income - include fees and tax, Outcome - price with tax"}),e(i,{children:"Calculate summary income for all fees"})]}),e(d,{title:"Invoices",icon:e(p,{}),xs:12,sm:12,children:e($,{})})]})}export{Y as default};
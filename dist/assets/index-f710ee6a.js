import{R as o,m as p,h as b,k as f,e as h,l as x,g as I,G as n,j as a,F as _,p as S}from"./index-b2bea69e.js";function L(y){const l=o.useMemo(()=>p.byName("mapps-component-image").component),[i,u]=o.useState([]),{selectors:{userProfileImageReducer:t=t},actions:{getUserImages:d=d}}=b(),{actions:{openLightbox:c=c}}=f(),{selectors:{userProfileReducer:s=s},actions:{getUserInfo:g=g}}=h();x(),o.useEffect(()=>{u(t.images)},[t.images]);function r(e){i.forEach(m=>{m.id==e.currentTarget.dataset.tag&&c(m,i)})}return I(n,{className:"mapps-user-images-container",style:{display:"flex",flexDirection:"column",placeItems:"center"},children:[s&&a(_,{children:a(l,{className:"mapps-user-images-list-item-image",animationDuration:1e3,disableSpinner:!1,"data-tag":s.user.blob_id,onClick:r,src:window.env.BLOB_URL+"/blob/"+(s.user.blob_profile&&s.user.blob_profile.blob_id),style:{cursor:"pointer",maxHeight:500,maxWidth:500}})}),a(n,{container:!0,spacing:3,className:"mapps-user-images-list",children:i.filter(e=>e.id!=s.user.blob_id).map(e=>a(n,{item:!0,xs:3,className:"mapps-user-images-list-item",children:a(S,{className:"mapps-user-images-list-item-image",style:{width:"100%",margin:0},"data-tag":e.id,onClick:r,children:a(l,{disableSpinner:!1,animationDuration:1e3,"data-tag":e.id,onClick:r,src:window.env.BLOB_URL+"/blob/"+e.blob_thumbmail_id,style:{cursor:"pointer"}})})},e.id))})]})}export{L as default};

import{M as p,j as t,aa as B,R as u,O as j,m as w,U as n,ab as L,l as A}from"./index-9bb41de4.js";import{M as E,d as x}from"./index-e6c53440.js";import"./Box-b9222e03.js";function I({title:T,titleToken:M,type:s,field:l,isActive:f,onClick:h,pluginName:d,filtering:y}){const k=p().ButtonLoader();try{let o={field:l,type:s,titleToken:M,title:T,isActive:f,pluginName:d,filtering:y};return s=="checkbox"?o={...o,render:c=>{const i=l.split(".").reduce((a,r,m)=>a[r],c);return t(B,{style:{display:"flex"},noLabel:!0,disabled:!0,value:!!i})}}:s=="!checkbox"?o={...o,render:c=>{const i=l.split(".").reduce((a,r,m)=>a[r],c);return t(B,{style:{display:"flex"},noLabel:!0,disabled:!0,value:!i})}}:s=="button"?o={...o,render:c=>{const i=l.split(".").reduce((a,r,m)=>a[r],c);return t(k,{style:{fontSize:"0.65rem",width:"100%",margin:"0px",height:"100%"},"data-key":c.id,variant:"clean",onClick:h,value:i})}}:o={...o,render:c=>l.split(".").reduce((a,r,m)=>a[r],c)||""},o}catch(o){return console.log(o),{}}}function H({title:T,data:M,columns:s,detailsContainerPlugins:l,options:f={},freeActions:h,detailPanelPlugin:d,pageSize:y,isLoading:k,actions:o,style:c}){const{translate:i,getLabel:a}=j(),[r,m]=u.useState(s.filter(e=>e.isActive).map(e=>e.titleToken)),C=u.useMemo(()=>[...s.map(e=>I(e)).map(e=>({...e,hidden:!r.includes(e.titleToken),title:i(a,e.titleToken)}))],[r]),z=u.useMemo(p().ButtonLoader),N=u.useMemo(p().Layouts.Sections.V2),G=u.useMemo(p().JsonToGrid);u.useMemo(p().IconButton);const O=u.useMemo(()=>d&&w.byName(d).component,[d]),V=u.useMemo(()=>s.map((e,v)=>t(z,{style:{fontSize:"0.65rem",margin:"0px",height:"100%",color:r.includes(e.titleToken)?"var(--mapps-primary-color-l1)":"var(--mapps-a-default-color)"},"data-key":e.titleToken,value:i(a,e.titleToken),variant:"clean",onClick:S=>{const g=S.currentTarget.dataset.key;r.includes(g)?m(r.filter(b=>b&&b!=g)):m([...r,g].filter(b=>b))}},v)),[r,s]);try{return t(n,{container:!0,className:"mapps-io-table-container",children:t(E,{isLoading:k,icons:L,options:{pageSize:y,actionsColumnIndex:-1,...f},columns:C,data:M,title:T,actions:o,detailPanel:[l&&{icon:L.NextPage,tooltip:"Expand",iconProps:{fontSize:"small"},render:e=>(console.log(e),t(n,{className:"mapps-io-table-expanded-row",children:t(G,{...e,currentGrid:l})}))},d&&{icon:L.NextPage,tooltip:"Expand",iconProps:{fontSize:"small"},render:e=>t(n,{className:"mapps-io-table-expanded-row",children:t(O,{...e,currentGrid:l})})}].filter(e=>e),components:{Header:e=>t(n,{className:"mapps-io-table-header",children:t(x.MTableHeader,{...e})}),Body:e=>t(n,{className:"mapps-io-table-body",children:t(x.MTableBody,{...e})}),Toolbar:e=>A(n,{children:[t(x.MTableToolbar,{...e,children:t("span",{children:"KUPAA"})}),A(n,{container:!0,spaceing:3,children:[t(n,{item:!0,xs:10,children:t(N,{title:"Show columns",children:V})}),h&&t(n,{item:!0,xs:2,children:t(N,{title:"Actions",style:{width:"100%"},children:h.map((v,S)=>t(n,{children:v},S))})})]})]}),Action:e=>t(n,{children:t(x.MTableAction,{...e,size:"small"})})}})})}catch(e){return console.log(e),"OOOOPS"}}const D=u.memo(H);export{D as default};

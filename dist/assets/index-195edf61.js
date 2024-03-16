import{cU as ue,dl as ge,cV as pe,r as Y,cW as F,cY as te,cX as q,dm as ye,R as o,m as V,M as f,u as U,da as K,dn as se,j as e,G as p,g as h,F as x,v as X,dj as $,dp as Ce,d3 as fe,dd as oe,C as M,c$ as ce,cZ as le,d1 as de,T as ae,o as me,dc as _e,df as ie,q as he,dq as Te,dr as be,ds as Le,dt as ve,du as re}from"./index-b2bea69e.js";import{u as ne}from"./hook-bc350f6a.js";import{C as ke}from"./Google-a723b1df.js";import{P as Oe}from"./index-3020cc08.js";import{u as Ee}from"./hook-5369ad5d.js";import{C as Ae}from"./index-37fccc8a.js";import{a as Se,C as we}from"./index-f276f2ad.js";import{S as Ie}from"./style-0bd2ac23.js";const H=i=>{const n={getAllCategories:()=>i(new F().queryThunt(te.Category.GET_CATEGORIES_ALL_TREE,{})),deleteCategory:t=>i(new F().commandThunt(q.Category.DELETE_CATEGORY,{id:t})),setCategoryParent:t=>i(new F().commandThunt(q.Category.SET_PARENT,t)),expandCategoryTreeByCategoryId:t=>i({type:ye.EXPAND_CATEGORY,dto:{category_id:t}}),createCategory:t=>i(new F().commandThunt(q.Category.ADD_CATEGORY,t)),editCategory:t=>i(new F().commandThunt(q.Category.EDIT_CATEGORY,t)),getCategories:({parent:t,id:r})=>i(new F().queryThunt(te.Category.GET_CATEGORIES_HIERARCHY,{parent:t,id:r})),getCategoryOptions:t=>i(new F().queryThunt(te.CategoryOptions.GET_CATEGORY_OPTION,{id:t})),linkCategoryOptionToCategory:t=>i(new F().commandThunt(q.Category_Options.UPSERT_CAETEGORY_OPTIONS_FOR_CATEGORY,t)),deleteCategoryOptionLink:t=>i(new F().commandThunt(q.Category_Options.DELETE_CAETEGORY_OPTIONS_FOR_CATEGORY,t)),editCategoryOptionLink:t=>i(new F().commandThunt(q.Category_Options.UPSERT_CAETEGORY_OPTIONS_FOR_CATEGORY,t))};return{...n,getAllCategories:async t=>{const r=await n.getAllCategories();return await n.getCategories({id:r.data.map(u=>u.category_child_id)}),r},editCategory:async t=>{await n.editCategory(t),await n.getCategories({id:t.id}),await n.getCategoryOptions(t.id)},linkCategoryOptionToCategory:async t=>{await n.linkCategoryOptionToCategory(t),await n.getCategories({id:t.category_id}),await n.getCategoryOptions(t.category_id)},deleteCategoryOptionLink:async t=>{await n.deleteCategoryOptionLink(t),await n.getCategories({id:t.category_id}),await n.getCategoryOptions(t.category_id)},editCategoryOptionLink:async t=>{await n.editCategoryOptionLink(t),await n.getCategories({id:t.category_id}),await n.getCategoryOptions(t.category_id)},createCategory:async t=>(await n.createCategory(t),await n.getCategories({id:t.id}),await n.getCategoryOptions(t.id))}};function P(i=!0){const n=ue(),t=ge(i),{categoriesAdminReducer:r}=pe(y=>({categoriesAdminReducer:y.CategoriesAdminReducer})),u=Y.useCallback(H(n).getAllCategories,[n]),s=Y.useCallback(H(n).setCategoryParent,[n]),a=Y.useCallback(H(n).deleteCategory,[n]),d=Y.useCallback(H(n).expandCategoryTreeByCategoryId,[n]),l=Y.useCallback(H(n).editCategory,[n]),T=Y.useCallback(H(n).linkCategoryOptionToCategory,[n]),_=Y.useCallback(H(n).deleteCategoryOptionLink,[n]),C=Y.useCallback(H(n).editCategoryOptionLink,[n]),m=Y.useCallback(H(n).createCategory,[n]);return{selectors:{...t.selectors,categoriesAdminReducer:r},actions:{...t.actions,getAllCategories:u,setCategoryParent:s,deleteCategory:a,expandCategoryTreeByCategoryId:d,editCategory:l,linkCategoryOptionToCategory:T,deleteCategoryOptionLink:_,editCategoryOptionLink:C,createCategory:m},state:{...t.state},hooks:{...t.hooks},functions:{...t.functions}}}function Re(){const{functions:{setTitle:i,setIcon:n}}=ne(),[t,r]=o.useState({}),u=o.useMemo(()=>V.byName("mapps-component-translate-component").component,[]),s=o.useMemo(f().Layouts.Sections.V1),a=o.useMemo(f().ButtonLoader),{translate:d,getLabel:l}=U();o.useMemo(f().Layouts.Tab.V1),o.useMemo(f().BodyLoader);const[T,_]=o.useState(!1),C=K(),{parentId:m,status:y}=se(),{selectors:{getCategoryLeaf:b,getCategoryLeafIcon:w},actions:{expandCategoryTreeByCategoryId:E,createCategory:L},hooks:{setCategoryId:v},state:{categoryId:I},functions:{isCategoryLeafLoaded:N}}=P();o.useEffect(()=>{_(!0),N()&&(i(b.category),E(I),_(!1),n(e("img",{src:w})))},[b]),o.useEffect(()=>{i("Create Category")},[]),o.useState(()=>{v(m)},[m]);function R(B){r({...t,translation:B})}function G(B){t.id=X(),t.category_child_id=t.id,t.translation_id=X(),t.translation.id=t.translation_id;let O;m!="undefined"?(t.category_parent_id=b.id,O={...b,...t,category:"",category_children:[],CategoryHierarchy:{category_parent_id:b.id}}):O={...t,params:"{}",forEvent:1,forSell:1,forThing:1,category_parent_id:null,status:y,category_children:[],CategoryHierarchy:{category_parent_id:null}},L(O).then(Q=>{C(`/mapps/categories/categories/edit/${O.id}`)})}return(m=="undefined"||N())&&e(p,{container:!0,children:h(x,{children:[e(s,{title:d(l,"Category Name Translation"),children:e(u,{translation:t.translation||{},setTranslate:R})}),e(a,{color:"primary",onClick:G,value:d(l,"Save"),variant:"outlined",children:"s"})]})})}function Me({categoryId:i}){const{translate:n,getLabel:t}=U(),r=o.useMemo(f().ButtonLoader),u=o.useMemo(f().Layouts.Tab.V1),[s,a]=o.useState(),{selectors:{getCategoryLeaf:d},actions:{expandCategoryTreeByCategoryId:l,editCategory:T},hooks:{setCategoryId:_},functions:{isCategoryLeafLoaded:C}}=P();o.useEffect(()=>{_(i)},[i]),o.useEffect(()=>{C()&&a(d)},[d]);function m(y){T(s)}return s?s&&h(p,{container:!0,children:[e(u,{defaultTab:0,tabConfig:[{label:"Search",render:()=>e($,{mode:"json",theme:"monokai",value:s.cms_search,onChange:y=>{a({...s,cms_search:y})},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,width:"100%",height:"80vh"},showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}},1)},{label:"Create",render:()=>e(x,{children:e($,{mode:"json",theme:"monokai",value:s.cms_create,onChange:y=>{a({...s,cms_create:y})},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,width:"100%",height:"80vh"},showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}},2)})},{label:"Preview",render:()=>e(x,{children:e($,{mode:"json",theme:"monokai",value:s.cms_preview,onChange:y=>{a({...s,cms_preview:y})},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,width:"100%",height:"80vh"},showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}},3)})}]}),e(r,{color:"primary",onClick:m,value:n(t,"Save"),variant:"outlined"})]}):e(p,{})}function xe({setCategoryParent:i,categoryId:n}){const t=o.useMemo(f().IconButton),r=o.useMemo(()=>V.byName("mapps-component-image").component);let u;const[s,a]=o.useState(),{selectors:{getCategoryLeaf:d},actions:{expandCategoryTreeByCategoryId:l,editCategory:T},hooks:{setCategoryId:_},functions:{isCategoryLeafLoaded:C}}=P(),[m,y]=o.useState([]);o.useEffect(()=>{_(n)},[n]),o.useEffect(()=>{C()&&(a(d),y(C.icon_blob))},[d]);function b(){u.click()}function w(L){const v=L.target.files,I=[];for(let N=0;N<v.length;N++){const R=v[N],G=new window.FileReader;G.readAsDataURL(R),G.onload=()=>{const B={name:R.name,type:R.type,size:Math.round(R.size/1e3)+" kB",base64:G.result,file:R};if(I.push(B),I.length==v.length){const O={};O.id=X(),O.blob=I[0].base64.split("base64,")[1],O.type=I[0].type,y(I[0]),a({...s,blob:O}),i({...s,blob:O})}}}}if(!s)return e(p,{});const E=s&&s.icon_blob?window.env.BLOB_URL+"/blob/"+s.icon_blob.blob_id:"";return s&&e(x,{children:h(p,{item:!0,xs:"12",children:[e(p,{onClick:b,style:{cursor:"pointer",display:E?"default":"flex",alignItems:"center",justifyContent:"center"},children:m==null?E?e(r,{src:E}):e(t,{children:e(Ce,{})}):e(r,{src:m.base64?m.base64:E})}),e("input",{type:"file",ref:L=>u=L,style:{display:"none"},onChange:w})]})})}function De({categoryId:i}){const{translate:n,getLabel:t}=U(),r=o.useMemo(f().ButtonLoader),u=o.useMemo(f().Layouts.Sections.V1),s=o.useMemo(f().FormComponents.TextBox),[a,d]=o.useState(),{selectors:{getCategoryLeaf:l},actions:{editCategory:T},hooks:{setCategoryId:_},functions:{isCategoryLeafLoaded:C}}=P();o.useEffect(()=>{_(i)},[i]),o.useEffect(()=>{C()&&d(l)},[l]);function m(y){T(a)}return a?a&&h(x,{children:[h(p,{container:!0,spacing:3,children:[e(p,{item:!0,xs:2,sm:2,children:e(u,{title:"Upload Icon (Pin, Category List)",children:e(xe,{categoryId:i,setCategoryParent:d})})}),e(p,{item:!0,xs:2,sm:2,children:e(u,{title:"Choose Main Color (Pin,List element)",style:{justifyContent:"center"},children:e(ke,{className:"chrome-picker ",disableAlpha:!0,color:a.color?a.color:"#666666",onChangeComplete:({hex:y})=>d({...a,color:y})})})}),e(p,{item:!0,xs:8,sm:8,children:e(u,{title:"Cms Fields",children:e(s,{onChange:y=>d({...a,expired_day:y.target.value}),label:n(t,"CATEGORY_EXPIRE_DATE_PLACEHOLDER"),value:a.expired_day,field:"expired_day",validation:[]})})})]}),e(r,{color:"primary",onClick:m,value:n(t,"Save"),variant:"outlined"})]}):e(p,{})}function Pe({categoryId:i}){const{translate:n,getLabel:t}=U(),r=o.useMemo(f().ButtonLoader),u=o.useMemo(f().Layouts.Sections.V1),s=o.useMemo(f().FormComponents.DropDownList),{selectors:{processesSelector:a}}=fe(),[d,l]=o.useState({}),[T,_]=o.useState({}),{selectors:{getCategoryLeaf:C},actions:{editCategory:m},hooks:{setCategoryId:y},functions:{isCategoryLeafLoaded:b}}=P();o.useEffect(()=>{y(i)},[i]),o.useEffect(()=>{b()&&l(C)},[C]),o.useEffect(()=>{const L=a.find(v=>v.id==d.process_id);_(L)},[d.process_id]);function w(){return[{id:"",token:" "},...a].map(L=>({id:L.id,value:L.token}))}function E(L){m(d)}return d.id?d.id&&h(x,{children:[e(u,{title:n(t,"Processes"),children:e(s,{label:n(t,"Assign Process"),valueOptions:w(),onChange:L=>l({...d,process_id:L.target.value}),field:"type",validation:[],value:d.process_id})}),e(u,{title:n(t,"Processes Preview"),children:e(p,{container:!0,className:"mapps-io-preview-process",children:T&&e(Oe,{processId:T.id})})}),e(r,{color:"primary",onClick:E,value:n(t,"Save"),variant:"outlined",children:"s"})]}):e(p,{})}function Ne({categoryId:i}){const{translate:n,getLabel:t}=U(),r=o.useMemo(f().ButtonLoader),u=o.useMemo(f().Layouts.Sections.V1),s=o.useMemo(()=>V.byName("mapps-component-translate-component").component,[]),[a,d]=o.useState(),{selectors:{getCategoryLeaf:l},actions:{editCategory:T},hooks:{setCategoryId:_},functions:{isCategoryLeafLoaded:C}}=P();o.useEffect(()=>{_(i)},[i]),o.useEffect(()=>{C()&&d(l)},[l]);function m(b){d({...a,translation:b})}function y(b){a.translation_id||(a.translation_id=X()),a.translation.id=a.translation_id,T(a)}return a?a&&h(x,{children:[e(u,{title:n(t,"LANG_TEXTBOX"),children:e(s,{translation:a.translation||{},setTranslate:m})}),e(r,{color:"primary",onClick:y,value:n(t,"Save"),variant:"outlined",children:"s"})]}):e(p,{})}const Be=({openCategoryOption:i})=>({columns:[{titleToken:"#",field:"link.order",type:"numeric",isActive:!0},{titleToken:"SEARCH#",field:"link.order_search",type:"numeric",isActive:!0},{titleToken:"CATEGORY_OPTION_NAME_TBL_HEADER",type:"button",onClick:i,isActive:!0,field:"name"},{titleToken:"CATEGORY_OPTION_TYPE_TBL_HEADER",type:"text",field:"cat_opt.name",isActive:!0},{titleToken:"CATEGORY_OPTION_REQUIRE_TBL_HEADER",type:"checkbox",field:"is_required",isActive:!0},{titleToken:"CATEGORY_OPTION_SEARCHABLE_TBL_HEADER",type:"checkbox",field:"link.is_searchable",isActive:!0},{titleToken:"CATEGORY_OPTION_IS_ON_MAP_TBL_HEADER",type:"checkbox",field:"link.is_on_map",isActive:!0},{titleToken:"CATEGORY_OPTION_IS_ON_TOOLTIP_TBL_HEADER",type:"checkbox",field:"link.is_on_pin_map",isActive:!0},{titleToken:"CATEGORY_OPTION_FORM_HIDDEN_TBL_HEADER",type:"checkbox",field:"link.is_form_hidden"},{titleToken:"CATEGORY_OPTION_ABOVE_TBL_HEADER",type:"checkbox",field:"link.can_above_pin",isActive:!0},{titleToken:"CATEGORY_OPTION_IS_IUA_HEADER",type:"checkbox",field:"link.is_on_iua"},{titleToken:"CATEGORY_OPTION_IS_IUA_REQ_HEADER",type:"checkbox",field:"link.is_on_iua_request"},{titleToken:"CATEGORY_OPTION_IS_PARAM_HEADER",type:"checkbox",field:"link.is_params"},{titleToken:"CATEGORY_OPTION_IS_VISIBLE_HEADER",type:"checkbox",field:"link.is_visible_view"},{titleToken:"CATEGORY_OPTION_IS_ON_MAIN_PAGE_HEADER",type:"checkbox",field:"link.is_on_main_page "},{titleToken:"FORM RENDERED",field:"link.is_form_rendered",type:"checkbox"},{titleToken:"CATEGORY_OPTION_LIMIT_TBL_HEADER",field:"link.limit_of",type:"numeric"}]});function Fe({categoryOptionLink:i,setCategoryOptionLink:n}){const t=o.useMemo(f().Layouts.Tab.V1),[r,u]=o.useState({...i});return o.useEffect(()=>{n(r)},[r]),e(p,{container:!0,children:e(t,{defaultTab:0,tabConfig:[{label:"Search",render:()=>e($,{mode:"json",theme:"monokai",value:r.search_params,onChange:s=>{u({...r,search_params:s})},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,width:"100%",height:"80vh"},showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}},1)},{label:"Create",render:()=>e(x,{children:e($,{mode:"json",theme:"monokai",value:r.create_params,onChange:s=>{u({...r,create_params:s})},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,width:"100%",height:"80vh"},showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}},2)})},{label:"Preview",render:()=>e(x,{children:e($,{mode:"json",theme:"monokai",value:r.preview_params,onChange:s=>{u({...r,preview_params:s})},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,width:"100%",height:"80vh"},showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}},3)})}]})})}function Ge({categoryOptionLink:i,isImage:n,setCategoryOptionLink:t}){const{translate:r,getLabel:u}=U(),s=o.useMemo(f().Layouts.Sections.V1),[a,d]=o.useState({...i});return o.useEffect(()=>{t(a)},[a]),h(x,{children:[n()&&e(s,{title:"Limitations settings",children:e(p,{container:!0,spacing:3,children:e(oe,{label:r(u,"Limit of"),value:a.limit_of,onChange:l=>{d({...a,limit_of:l.target.value})},type:"numeric",field:"name",validation:[]})})}),h(s,{title:"Search settings",children:[e(oe,{label:r(u,"Order search"),value:a.order_search,onChange:l=>{d({...a,order_search:l.target.value})},type:"numeric",field:"order",validation:[]}),e(M,{label:r(u,"Is searchable"),value:a.is_searchable,onChange:l=>{d({...a,is_searchable:l.target.checked})},field:"is_searchable",validation:[]}),e(M,{label:r(u,"Show above pin on map"),value:a.is_on_pin_map,onChange:l=>{d({...a,is_on_pin_map:l.target.checked})},field:"is_on_pin_map",validation:[]}),e(M,{label:r(u,"Can above pin (search)"),value:a.can_above_pin,onChange:l=>{d({...a,can_above_pin:l.target.checked})},field:"is_visible_view",validation:[]}),e(M,{label:r(u,"Treat as url params"),value:a.is_params,onChange:l=>{d({...a,is_params:l.target.checked})},field:"is_form_hidden",validation:[]}),e(M,{label:r(u,"On main page search"),value:a.is_on_main_page,onChange:l=>{d({...a,is_on_main_page:l.target.checked})},field:"is_visible_view",validation:[]})]}),h(s,{title:"Create settings",children:[e(oe,{label:r(u,"Order label"),value:a.order,onChange:l=>{d({...a,order:l.target.value})},type:"numeric",field:"order",validation:[]}),e(M,{label:r(u,"Is require"),value:a.is_require,onChange:l=>{d({...a,is_require:l.target.checked})},field:"is_require",validation:[]}),e(M,{label:r(u,"Is  on form rendered"),value:a.is_form_rendered,onChange:l=>{d({...a,is_form_rendered:l.target.checked})},field:"is_form_rendered",validation:[]}),e(M,{label:r(u,"Is in form hidden"),value:a.is_form_hidden,onChange:l=>{d({...a,is_form_hidden:l.target.checked})},field:"is_form_hidden",validation:[]})]}),h(s,{title:"Preview settings",children:[e(M,{label:r(u,"Is on map list"),value:a.is_on_map,onChange:l=>{d({...a,is_on_map:l.target.checked})},field:"is_on_map",validation:[]}),e(M,{label:r(u,"Is visible in preview"),value:a.is_visible_view,onChange:l=>{d({...a,is_visible_view:l.target.checked})},field:"is_visible_view",validation:[]})]}),h(s,{title:"IUA settings",children:[e(M,{label:r(u,"On IUA view"),value:a.is_on_iua,onChange:l=>{d({...a,is_on_iua:l.target.checked})},field:"is_visible_view",validation:[]}),e(M,{label:r(u,"Init on IUA request"),value:a.is_on_iua_request,onChange:l=>{d({...a,is_on_iua_request:l.target.checked})},field:"is_on_pin_map",validation:[]})]})]})}function Ye({categoryOptionLink:i,categoryOption:n}){const t=o.useMemo(f().ButtonLoader),r=o.useMemo(f().Layouts.Groups.V1),u=o.useMemo(f().Layouts.Tab.V1),s=ce(),{translate:a,getLabel:d}=U(),{selectors:{getCategoryTypes:l},actions:{editCategoryOptionLink:T}}=P(),[_,C]=o.useState({...i});function m(){return["IMAGES"].includes(l.find(b=>b.id==n.cot_id).type)}async function y(){s.actions.closeDrawer(),await T(_)}return h(p,{container:!0,children:[e(r,{xs:12,sm:6,title:"Category Option Link Detail",children:e(Se,{catOptionId:n.id,readOnly:!0})}),e(u,{defaultTab:0,tabConfig:[{label:"Core",render:()=>e(Ge,{isImage:m,categoryOptionLink:{..._},setCategoryOptionLink:C})},{label:"CMS",render:()=>e(Fe,{categoryOptionLink:{..._},setCategoryOptionLink:C})}]}),e(p,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:e(t,{color:"primary",onClick:y,value:a(d,"Save"),variant:"outlined"})})]})}function He({categoryId:i}){const n=o.useMemo(()=>V.byName("mapps-component-dialog-content").component),t=o.useMemo(()=>V.byName("mapps-component-dialog-actions").component),r=o.useMemo(()=>V.byName("mapps-component-dialog-title").component),u=o.useMemo(()=>V.byName("mapps-component-dialog-content-text").component),{translate:s,getLabel:a}=U(),d=o.useMemo(f().ButtonLoader),l=o.useMemo(f().Layouts.Table.V2),T=o.useMemo(f().Layouts.Sections.V1),_=le(),{actions:C}=ce(),[m,y]=o.useState(!1),b=K(),[w,E]=o.useState(),{selectors:{getCategoryLeaf:L,getCategoryOptionsByCategoryId:v},actions:{linkCategoryOptionToCategory:I,deleteCategoryOptionLink:N},hooks:{setCategoryId:R},functions:{isCategoryLeafLoaded:G,isLoaded:B}}=P(),{selectors:{getAllCategoryOptionsReducer:O},actions:{getAllCategoryOptions:Q}}=Ee(),Z=o.useMemo(()=>B()&&v.sort((g,k)=>Number(g.category_link[0].order?g.category_link[0].order:g.order)>Number(k.category_link[0].order?k.category_link[0].order:k.order)?1:-1).map(g=>{let k=g.category_link[0];return k=k||"",{...g,link:k,name:g.name}}),[v]);o.useEffect(()=>{O.length==0&&(y(!0),Q().then(g=>{y(!1)}))},[]),o.useEffect(()=>{R(i)},[i]),o.useEffect(()=>{G()&&E(L)},[L]);async function c(g,k){const j=k.id,W=v.find(ee=>ee.id==j).category_link.find(ee=>ee.category_id==i);_.actions.openDialog(!0,h(o.Fragment,{children:[e(r,{id:"alert-dialog-slide-title",className:"mapps-dialog-title",children:s(a,"Unlink Category Options")}),e(n,{className:"mapps-dialog-content",children:e(u,{id:"alert-dialog-slide-description",children:s(a,"Do you want to unlink this category options")})}),h(t,{className:"mapps-dialog-actions",children:[e(d,{className:"mapps-button",onClick:async()=>{_.actions.closeDialog(),y(!0),await N({id:W.id,category_id:i}),y(!1)},color:"primary",value:s(a,"YES_LABEL")}),e(d,{className:"mapps-button",onClick:()=>{_.actions.closeDialog()},color:"primary",value:s(a,"NO_LABEL")})]})]}))}function A(g,k){const j=v.find(W=>W.id==k.id),J=j.category_link.find(W=>W.category_id==i);C.openDrawer(!0,e(p,{style:{width:"50vw",display:"flex"},children:e(Ye,{categoryOptionLink:J,categoryOption:j})}),"right")}function D(g){C.openDrawer(!0,e(p,{style:{width:"50vw",display:"flex"},children:e(we,{readOnly:!0,categoryOptionId:g.currentTarget.dataset.key})}),"right")}function z(){C.openDrawer(!0,e(T,{title:"Select Category Options",style:{flexDirection:"column"},children:e(Ae,{selectionMode:!0,selectedCategories:Z.map(g=>g.id),onClick:S})}),"right")}async function S(g){const k=O.find(J=>J.id.toLowerCase()==g.currentTarget.dataset.key.toLowerCase());let j={...k,id:X(),co_id:k.id,category_id:i};y(!0),C.closeDrawer(),await I(j),y(!1)}return!w||!B()?e(p,{}):e(x,{children:e(l,{title:"Manage Category Options Assignment",isLoading:m,freeActions:[e(d,{size:"small",value:s(a,"Add"),variant:"outlined",onClick:z,startIcon:e(de,{})},1)],actions:[g=>({icon:ae.Edit,label:"Edit Link",onClick:A,hidden:g.link.category_id!=w.id}),g=>({icon:ae.Delete,label:"Delete Link",onClick:c,hidden:g.link.category_id!=w.id}),g=>({icon:ae.ViewColumn,label:"Go to parent",onClick:k=>b(`/mapps/categories/categories/edit/${g.link.category_id}`),hidden:g.link.category_id==w.id})],pageSize:20,...Be({openCategoryOption:D}),data:Z})})}function Ve(){const{functions:{setTitle:i,setIcon:n}}=ne(),t=o.useMemo(f().Layouts.Tab.V1),r=o.useMemo(f().BodyLoader),[u,s]=o.useState(!1),a=se(),{selectors:{getCategoryLeaf:d,getCategoryLeafIcon:l},actions:{expandCategoryTreeByCategoryId:T},hooks:{setCategoryId:_},state:{categoryId:C},functions:{isCategoryLeafLoaded:m}}=P();return o.useEffect(()=>{i("Category")},[l]),o.useEffect(()=>{a.id&&(s(!0),_(a.id))},[a]),o.useEffect(()=>{s(!0),m()&&(console.log("WTF"),i(d.category),T(C),s(!1),n(e("img",{src:l})))},[d]),u||!m()?e(p,{style:{height:"400px",display:"flex"},children:e(r,{text:" ",size:"25px"})}):!u&&m()&&h(p,{container:!0,children:[h(p,{container:!0,spacing:3,children:[e(p,{item:!0,xs:8}),e(p,{itemxs:3})]}),e(t,{defaultTab:0,tabConfig:[{label:"Category Options",render:()=>e(He,{categoryId:C})},{label:"Process",render:()=>e(Pe,{categoryId:C})},{label:"Translation",render:()=>e(Ne,{categoryId:C})},{label:"CMS",render:()=>e(Me,{categoryId:C})},{label:"CMS Params",render:()=>e(De,{categoryId:C})}]})]})}function ze({node:i}){const n=o.useMemo(f().ButtonLoader),{selectors:{getCategoryLeafIcon:t,getCategoryLeaf:r},hooks:{setCategoryId:u},functions:{isCategoryLeafLoaded:s}}=P(!1),a=K();return o.useEffect(()=>{u(i.category_child_id)},[]),h(x,{children:[!s()&&e(n,{className:i.isActive==!0?"selected":"",variant:"clean",size:"small",onClick:()=>{a(`/mapps/categories/categories/edit/${i.category_child_id}`)},value:String(i.category).toUpperCase(),startIcon:e(p,{style:{maxWidth:20,maxHeight:20,width:20}})},i.category_child_id),s()&&e(n,{className:i.isActive==!0?"selected":"",variant:"clean",size:"small",onClick:()=>{a(`/mapps/categories/categories/edit/${r.id}`)},value:String(r.translation.name).toUpperCase(),startIcon:s()?e("img",{style:{maxWidth:20,maxHeight:20,width:20},src:t},r.category_child_id):e(p,{style:{maxWidth:20,maxHeight:20,width:20}})},r.id)]})}function Ue(i){const n=o.useMemo(f().Layouts.Groups.V1),t=o.useMemo(f().BodyLoader),r=o.useMemo(f().FormComponents.TextBox);o.useEffect(()=>{window.__isReactDndBackendSetUp&&(window.__isReactDndBackendSetUp=!1)},[]);const{state:{},functions:{setTitle:u,setIcon:s}}=ne(),a=me(),{actions:{openDialog:d,closeDialog:l}}=le(),{selectors:{categoriesAdminReducer:T},actions:{getAllCategories:_,setCategoryParent:C,deleteCategory:m}}=P(),[y,b]=o.useState([{title:"src/",category:" ",children:[{title:"index.js",category:" "}]}]),[w,E]=o.useState(!1),[L,v]=o.useState(!1),[I,N]=o.useState(""),R=K();o.useEffect(()=>{u("Category Tree Manager"),s(e(_e,{}))},[]),o.useEffect(()=>{T.categories.length==0?(v(!1),_().then(c=>{v(!0)})):v(!0)},[]),o.useEffect(()=>{E(!0),G(),setTimeout(()=>{E(!1)},500)},[T.categories]);function G(){const c=T.categories.filter(g=>g.status==1),A=T.categories.filter(g=>g.status==0),D=B([...c.map(g=>({...g}))]),z=B([...A.map(g=>({...g}))]),S=[{title:"_VERIFIED",category:"_VERIFIED",status:1,forEvent:!0,forSell:!0,forThing:!0,expanded:c.filter(g=>g.expanded==!0).length>0,children:D},{title:"_NOT_VERIFIED",category:"_NOT_VERIFIED",forEvent:!0,forSell:!0,forThing:!0,status:0,expanded:A.filter(g=>g.expanded==!0).length>0,children:z}];b([...S.map(g=>({...g}))])}function B(c){const A={};let D;const z=[];let S;for(S=0;S<c.length;S+=1)A[c[S].category_child_id]=S,c[S].children=[];for(S=0;S<c.length;S+=1)try{D=c[S],D.category_parent_id!==null?c[A[D.category_parent_id]].children.push(D):z.push(D)}catch{}return z}function O(c){const A={id:c.id,status:c.status,CategoryHierarchy:{category_parent_id:c.parentId}};E(!0),C(A).then(()=>{a.actions.setSuccessGlobal("Move Category to new Category Parent Successed")})}function Q(c){const A=c.currentTarget.dataset.tag;c.preventDefault(),d(!0,h(o.Fragment,{children:[e(Te,{id:"alert-dialog-slide-title",children:"Remove Category"}),e(be,{children:e(Le,{id:"alert-dialog-slide-description",children:"Are you sure that you want to remove this category?"})}),h(ve,{children:[e(re,{onClick:async()=>{const D=T.categories.find(z=>z.id==A);await m(A),await l(),D.isActive&&R("/mapps/categories/categories")},color:"primary",children:"YES"}),e(re,{onClick:()=>{l()},color:"primary",children:"NO"})]})]}))}function Z(c){const A=c.target.value;N(String(A).toUpperCase())}return h(p,{container:!0,children:[e(r,{label:"Filter",isRequired:!0,value:I,onChange:Z,field:"search",validation:[]}),e(n,{title:"Category Tree",children:h(p,{style:{display:"block",width:"100%",height:"100%"},children:[(w||!L)&&e(t,{text:" ",size:"25px"}),!w&&L&&e(Ie,{rowHeight:55,style:{height:"800px"},treeData:y,onChange:c=>{b([...c])},onMoveNode:c=>(O({id:c.node.id,parentId:c.nextParentNode.id,status:c.nextParentNode.status}),c),searchQuery:I,onlyExpandSearchedNodes:!0,canDrag:c=>!["_SPAM","_NOT_VERIFIED","_VERIFIED","_TO_DO","_ROOT"].includes(c.node.category),canDrop:c=>(c.nextParent.forEvent==c.node.forEvent||c.nextParent.forEvent==!0)&&(c.nextParent.forSell==c.node.forSell||c.nextParent.forSell==!0)&&(c.nextParent.forThing==c.node.forThing||c.nextParent.forThing==!0),generateNodeProps:c=>(c.node.title=c.node.category&&c.node.category.startsWith("_")?e(p,{style:{paddingLeft:20},children:String(c.node.category).toUpperCase()}):h(p,{children:[e(p,{style:{display:"none"},children:String(c.node.category).toUpperCase()}),e(ze,{node:{...c.node}})]},c.node.category_child_id),c.buttons=[],c.buttons.push(e(ie,{size:"small",onClick:()=>{R(`/mapps/categories/categories/add/${c.node.status}/${c.node.category_child_id}`)},children:e(de,{})})),["_SPAM","_NOT_VERIFIED","_VERIFIED","_TO_DO","_ROOT"].includes(c.node.category)||c.buttons.push(e(ie,{size:"small","data-tag":c.node.category_child_id,"data-name":c.node.category,onClick:Q,children:e(he,{})})),c)})]})})]})}function Ke(){const i=o.useMemo(()=>V.byName("mapps-item-basic-route").component),n=o.useMemo(()=>V.byName("mapps-item-basic-routes").component),t=o.useMemo(f().Layouts.Containers.V1);return h(p,{container:!0,children:[e(t,{xs:12,sm:3,children:e(Ue,{})}),e(t,{style:{padding:"10px"},xs:12,sm:9,children:h(n,{children:[e(i,{path:"/add/:status/:parentId",element:e(Re,{})}),e(i,{path:"/edit/:id",element:e(Ve,{})})]})})]})}export{Ke as Categories};

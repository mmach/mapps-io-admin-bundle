import{d8 as ue,a as N,dp as ge,_ as pe,cU as ye,dq as me,cV as fe,cW as G,cY as te,cX as $,dr as Ce,R as o,m as V,M as f,O as U,de as J,ds as se,j as e,G as y,l as h,Z as x,$ as X,dj as j,d1 as _e,dg as oe,aa as M,c_ as ce,cZ as le,c$ as de,ab as ae,a1 as he}from"./index-9bb41de4.js";import{u as ne}from"./hook-ee942a67.js";import{C as Te}from"./Google-85051e33.js";import{d as be}from"./CloudUpload-c6fe4c64.js";import{P as ve}from"./index-52813b18.js";import{u as Le}from"./hook-55df9c1d.js";import{C as ke}from"./index-c0ec1098.js";import{a as Oe,C as Ee}from"./index-eae92d75.js";import{S as Ae}from"./style-fdcf2531.js";import{d as Se}from"./AccountTree-49be4c05.js";import{d as we}from"./Close-2650301e.js";import{I as ie}from"./IconButton-6f0b722e.js";import{D as Ie,a as Re,b as Me,B as re}from"./DialogTitle-e8be6b21.js";import"./utils-15a7aa19.js";var xe={root:{marginBottom:12}},De=N.forwardRef(function(n,t){return N.createElement(ge,pe({component:"p",variant:"body1",color:"textSecondary",ref:t},n))});const Pe=ue(xe,{name:"MuiDialogContentText"})(De),H=i=>{const n={getAllCategories:()=>i(new G().queryThunt(te.Category.GET_CATEGORIES_ALL_TREE,{})),deleteCategory:t=>i(new G().commandThunt($.Category.DELETE_CATEGORY,{id:t})),setCategoryParent:t=>i(new G().commandThunt($.Category.SET_PARENT,t)),expandCategoryTreeByCategoryId:t=>i({type:Ce.EXPAND_CATEGORY,dto:{category_id:t}}),createCategory:t=>i(new G().commandThunt($.Category.ADD_CATEGORY,t)),editCategory:t=>i(new G().commandThunt($.Category.EDIT_CATEGORY,t)),getCategories:({parent:t,id:r})=>i(new G().queryThunt(te.Category.GET_CATEGORIES_HIERARCHY,{parent:t,id:r})),getCategoryOptions:t=>i(new G().queryThunt(te.CategoryOptions.GET_CATEGORY_OPTION,{id:t})),linkCategoryOptionToCategory:t=>i(new G().commandThunt($.Category_Options.UPSERT_CAETEGORY_OPTIONS_FOR_CATEGORY,t)),deleteCategoryOptionLink:t=>i(new G().commandThunt($.Category_Options.DELETE_CAETEGORY_OPTIONS_FOR_CATEGORY,t)),editCategoryOptionLink:t=>i(new G().commandThunt($.Category_Options.UPSERT_CAETEGORY_OPTIONS_FOR_CATEGORY,t))};return{...n,getAllCategories:async t=>{const r=await n.getAllCategories();return await n.getCategories({id:r.data.map(u=>u.category_child_id)}),r},editCategory:async t=>{await n.editCategory(t),await n.getCategories({id:t.id}),await n.getCategoryOptions(t.id)},linkCategoryOptionToCategory:async t=>{await n.linkCategoryOptionToCategory(t),await n.getCategories({id:t.category_id}),await n.getCategoryOptions(t.category_id)},deleteCategoryOptionLink:async t=>{await n.deleteCategoryOptionLink(t),await n.getCategories({id:t.category_id}),await n.getCategoryOptions(t.category_id)},editCategoryOptionLink:async t=>{await n.editCategoryOptionLink(t),await n.getCategories({id:t.category_id}),await n.getCategoryOptions(t.category_id)},createCategory:async t=>(await n.createCategory(t),await n.getCategories({id:t.id}),await n.getCategoryOptions(t.id))}};function B(i=!0){const n=ye(),t=me(i),{categoriesAdminReducer:r}=fe(p=>({categoriesAdminReducer:p.CategoriesAdminReducer})),u=N.useCallback(H(n).getAllCategories,[n]),s=N.useCallback(H(n).setCategoryParent,[n]),a=N.useCallback(H(n).deleteCategory,[n]),d=N.useCallback(H(n).expandCategoryTreeByCategoryId,[n]),l=N.useCallback(H(n).editCategory,[n]),T=N.useCallback(H(n).linkCategoryOptionToCategory,[n]),_=N.useCallback(H(n).deleteCategoryOptionLink,[n]),m=N.useCallback(H(n).editCategoryOptionLink,[n]),C=N.useCallback(H(n).createCategory,[n]);return{selectors:{...t.selectors,categoriesAdminReducer:r},actions:{...t.actions,getAllCategories:u,setCategoryParent:s,deleteCategory:a,expandCategoryTreeByCategoryId:d,editCategory:l,linkCategoryOptionToCategory:T,deleteCategoryOptionLink:_,editCategoryOptionLink:m,createCategory:C},state:{...t.state},hooks:{...t.hooks},functions:{...t.functions}}}function Ne(){const{functions:{setTitle:i,setIcon:n}}=ne(),[t,r]=o.useState({}),u=o.useMemo(()=>V.byName("mapps-component-translate-component").component,[]),s=o.useMemo(f().Layouts.Sections.V1),a=o.useMemo(f().ButtonLoader),{translate:d,getLabel:l}=U();o.useMemo(f().Layouts.Tab.V1),o.useMemo(f().BodyLoader);const[T,_]=o.useState(!1),m=J(),C=se(),{selectors:{getCategoryLeaf:p,getCategoryLeafIcon:k},actions:{expandCategoryTreeByCategoryId:S,createCategory:O},hooks:{setCategoryId:b},state:{categoryId:v},functions:{isCategoryLeafLoaded:w}}=B();o.useEffect(()=>{_(!0),w()&&(i(p.category),S(v),_(!1),n(e("img",{src:k})))},[p]),o.useEffect(()=>{i("Create Category")},[]),o.useState(()=>{b(C.parentId)},[C]);function Y(F){r({...t,translation:F})}function I(F){t.id=X(),t.category_child_id=t.id,t.translation_id=X(),t.translation.id=t.translation_id;let R;C.parentId!="undefined"?(t.category_parent_id=p.id,R={...p,...t,category:"",category_children:[],CategoryHierarchy:{category_parent_id:p.id}}):R={...t,params:"{}",forEvent:1,forSell:1,forThing:1,category_parent_id:null,status:C.status,category_children:[],CategoryHierarchy:{category_parent_id:null}},O(R).then(D=>{m(`/mapps/categories/categories/edit/${R.id}`)})}return(C.parentId=="undefined"||w())&&e(y,{container:!0,children:h(x,{children:[e(s,{title:d(l,"Category Name Translation"),children:e(u,{translation:t.translation||{},setTranslate:Y})}),e(a,{color:"primary",onClick:I,value:d(l,"Save"),variant:"outlined",children:"s"})]})})}function Be({categoryId:i}){const{translate:n,getLabel:t}=U(),r=o.useMemo(f().ButtonLoader),u=o.useMemo(f().Layouts.Tab.V1),[s,a]=o.useState(),{selectors:{getCategoryLeaf:d},actions:{expandCategoryTreeByCategoryId:l,editCategory:T},hooks:{setCategoryId:_},functions:{isCategoryLeafLoaded:m}}=B();o.useEffect(()=>{_(i)},[i]),o.useEffect(()=>{m()&&a(d)},[d]);function C(p){T(s)}return s?s&&h(y,{container:!0,children:[e(u,{defaultTab:0,tabConfig:[{label:"Search",render:()=>e(j,{mode:"json",theme:"monokai",value:s.cms_search,onChange:p=>{a({...s,cms_search:p})},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,width:"100%",height:"80vh"},showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}},1)},{label:"Create",render:()=>e(x,{children:e(j,{mode:"json",theme:"monokai",value:s.cms_create,onChange:p=>{a({...s,cms_create:p})},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,width:"100%",height:"80vh"},showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}},2)})},{label:"Preview",render:()=>e(x,{children:e(j,{mode:"json",theme:"monokai",value:s.cms_preview,onChange:p=>{a({...s,cms_preview:p})},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,width:"100%",height:"80vh"},showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}},3)})}]}),e(r,{color:"primary",onClick:C,value:n(t,"Save"),variant:"outlined"})]}):e(y,{})}function Fe({setCategoryParent:i,categoryId:n}){const t=o.useMemo(f().IconButton),r=o.useMemo(()=>V.byName("mapps-component-image").component);let u;const[s,a]=o.useState(),{selectors:{getCategoryLeaf:d},actions:{expandCategoryTreeByCategoryId:l,editCategory:T},hooks:{setCategoryId:_},functions:{isCategoryLeafLoaded:m}}=B(),[C,p]=o.useState([]);o.useEffect(()=>{_(n)},[n]),o.useEffect(()=>{m()&&(a(d),p(m.icon_blob))},[d]);function k(){u.click()}function S(b){const v=b.target.files,w=[];for(let Y=0;Y<v.length;Y++){const I=v[Y],F=new window.FileReader;F.readAsDataURL(I),F.onload=()=>{const R={name:I.name,type:I.type,size:Math.round(I.size/1e3)+" kB",base64:F.result,file:I};if(w.push(R),w.length==v.length){const D={};D.id=X(),D.blob=w[0].base64.split("base64,")[1],D.type=w[0].type,p(w[0]),a({...s,blob:D}),i({...s,blob:D})}}}}if(!s)return e(y,{});const O=s&&s.icon_blob?window.env.BLOB_URL+"/blob/"+s.icon_blob.blob_id:"";return s&&e(x,{children:h(y,{item:!0,xs:"12",children:[e(y,{onClick:k,style:{cursor:"pointer",display:O?"default":"flex",alignItems:"center",justifyContent:"center"},children:C==null?O?e(r,{src:O}):e(t,{children:e(be,{})}):e(r,{src:C.base64?C.base64:O})}),e("input",{type:"file",ref:b=>u=b,style:{display:"none"},onChange:S})]})})}function Ge({categoryId:i}){const{translate:n,getLabel:t}=U(),r=o.useMemo(f().ButtonLoader),u=o.useMemo(f().Layouts.Sections.V1),s=o.useMemo(f().FormComponents.TextBox),[a,d]=o.useState(),{selectors:{getCategoryLeaf:l},actions:{editCategory:T},hooks:{setCategoryId:_},functions:{isCategoryLeafLoaded:m}}=B();o.useEffect(()=>{_(i)},[i]),o.useEffect(()=>{m()&&d(l)},[l]);function C(p){T(a)}return a?a&&h(x,{children:[h(y,{container:!0,spacing:3,children:[e(y,{item:!0,xs:2,sm:2,children:e(u,{title:"Upload Icon (Pin, Category List)",children:e(Fe,{categoryId:i,setCategoryParent:d})})}),e(y,{item:!0,xs:2,sm:2,children:e(u,{title:"Choose Main Color (Pin,List element)",style:{justifyContent:"center"},children:e(Te,{className:"chrome-picker ",disableAlpha:!0,color:a.color?a.color:"#666666",onChangeComplete:({hex:p})=>d({...a,color:p})})})}),e(y,{item:!0,xs:8,sm:8,children:e(u,{title:"Cms Fields",children:e(s,{onChange:p=>d({...a,expired_day:p.target.value}),label:n(t,"CATEGORY_EXPIRE_DATE_PLACEHOLDER"),value:a.expired_day,field:"expired_day",validation:[]})})})]}),e(r,{color:"primary",onClick:C,value:n(t,"Save"),variant:"outlined"})]}):e(y,{})}function Ye({categoryId:i}){const{translate:n,getLabel:t}=U(),r=o.useMemo(f().ButtonLoader),u=o.useMemo(f().Layouts.Sections.V1),s=o.useMemo(f().FormComponents.DropDownList),{selectors:{processesSelector:a}}=_e(),[d,l]=o.useState({}),[T,_]=o.useState({}),{selectors:{getCategoryLeaf:m},actions:{editCategory:C},hooks:{setCategoryId:p},functions:{isCategoryLeafLoaded:k}}=B();o.useEffect(()=>{p(i)},[i]),o.useEffect(()=>{k()&&l(m)},[m]),o.useEffect(()=>{const b=a.find(v=>v.id==d.process_id);_(b)},[d.process_id]);function S(){return[{id:"",token:" "},...a].map(b=>({id:b.id,value:b.token}))}function O(b){C(d)}return d.id?d.id&&h(x,{children:[e(u,{title:n(t,"Processes"),children:e(s,{label:n(t,"Assign Process"),valueOptions:S(),onChange:b=>l({...d,process_id:b.target.value}),field:"type",validation:[],value:d.process_id})}),e(u,{title:n(t,"Processes Preview"),children:e(y,{container:!0,className:"mapps-io-preview-process",children:T&&e(ve,{processId:T.id})})}),e(r,{color:"primary",onClick:O,value:n(t,"Save"),variant:"outlined",children:"s"})]}):e(y,{})}function He({categoryId:i}){const{translate:n,getLabel:t}=U(),r=o.useMemo(f().ButtonLoader),u=o.useMemo(f().Layouts.Sections.V1),s=o.useMemo(()=>V.byName("mapps-component-translate-component").component,[]),[a,d]=o.useState(),{selectors:{getCategoryLeaf:l},actions:{editCategory:T},hooks:{setCategoryId:_},functions:{isCategoryLeafLoaded:m}}=B();o.useEffect(()=>{_(i)},[i]),o.useEffect(()=>{m()&&d(l)},[l]);function C(k){d({...a,translation:k})}function p(k){a.translation_id||(a.translation_id=X()),a.translation.id=a.translation_id,T(a)}return a?a&&h(x,{children:[e(u,{title:n(t,"LANG_TEXTBOX"),children:e(s,{translation:a.translation||{},setTranslate:C})}),e(r,{color:"primary",onClick:p,value:n(t,"Save"),variant:"outlined",children:"s"})]}):e(y,{})}const Ve=({openCategoryOption:i})=>({columns:[{titleToken:"#",field:"link.order",type:"numeric",isActive:!0},{titleToken:"SEARCH#",field:"link.order_search",type:"numeric",isActive:!0},{titleToken:"CATEGORY_OPTION_NAME_TBL_HEADER",type:"button",onClick:i,isActive:!0,field:"name"},{titleToken:"CATEGORY_OPTION_TYPE_TBL_HEADER",type:"text",field:"cat_opt.name",isActive:!0},{titleToken:"CATEGORY_OPTION_REQUIRE_TBL_HEADER",type:"checkbox",field:"is_required",isActive:!0},{titleToken:"CATEGORY_OPTION_SEARCHABLE_TBL_HEADER",type:"checkbox",field:"link.is_searchable",isActive:!0},{titleToken:"CATEGORY_OPTION_IS_ON_MAP_TBL_HEADER",type:"checkbox",field:"link.is_on_map",isActive:!0},{titleToken:"CATEGORY_OPTION_IS_ON_TOOLTIP_TBL_HEADER",type:"checkbox",field:"link.is_on_pin_map",isActive:!0},{titleToken:"CATEGORY_OPTION_FORM_HIDDEN_TBL_HEADER",type:"checkbox",field:"link.is_form_hidden"},{titleToken:"CATEGORY_OPTION_ABOVE_TBL_HEADER",type:"checkbox",field:"link.can_above_pin",isActive:!0},{titleToken:"CATEGORY_OPTION_IS_IUA_HEADER",type:"checkbox",field:"link.is_on_iua"},{titleToken:"CATEGORY_OPTION_IS_IUA_REQ_HEADER",type:"checkbox",field:"link.is_on_iua_request"},{titleToken:"CATEGORY_OPTION_IS_PARAM_HEADER",type:"checkbox",field:"link.is_params"},{titleToken:"CATEGORY_OPTION_IS_VISIBLE_HEADER",type:"checkbox",field:"link.is_visible_view"},{titleToken:"CATEGORY_OPTION_IS_ON_MAIN_PAGE_HEADER",type:"checkbox",field:"link.is_on_main_page "},{titleToken:"FORM RENDERED",field:"link.is_form_rendered",type:"checkbox"},{titleToken:"CATEGORY_OPTION_LIMIT_TBL_HEADER",field:"link.limit_of",type:"numeric"}]});function ze({categoryOptionLink:i,setCategoryOptionLink:n}){const t=o.useMemo(f().Layouts.Tab.V1),[r,u]=o.useState({...i});return o.useEffect(()=>{n(r)},[r]),e(y,{container:!0,children:e(t,{defaultTab:0,tabConfig:[{label:"Search",render:()=>e(j,{mode:"json",theme:"monokai",value:r.search_params,onChange:s=>{u({...r,search_params:s})},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,width:"100%",height:"80vh"},showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}},1)},{label:"Create",render:()=>e(x,{children:e(j,{mode:"json",theme:"monokai",value:r.create_params,onChange:s=>{u({...r,create_params:s})},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,width:"100%",height:"80vh"},showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}},2)})},{label:"Preview",render:()=>e(x,{children:e(j,{mode:"json",theme:"monokai",value:r.preview_params,onChange:s=>{u({...r,preview_params:s})},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,width:"100%",height:"80vh"},showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}},3)})}]})})}function Ue({categoryOptionLink:i,isImage:n,setCategoryOptionLink:t}){const{translate:r,getLabel:u}=U(),s=o.useMemo(f().Layouts.Sections.V1),[a,d]=o.useState({...i});return o.useEffect(()=>{t(a)},[a]),h(x,{children:[n()&&e(s,{title:"Limitations settings",children:e(y,{container:!0,spacing:3,children:e(oe,{label:r(u,"Limit of"),value:a.limit_of,onChange:l=>{d({...a,limit_of:l.target.value})},type:"numeric",field:"name",validation:[]})})}),h(s,{title:"Search settings",children:[e(oe,{label:r(u,"Order search"),value:a.order_search,onChange:l=>{d({...a,order_search:l.target.value})},type:"numeric",field:"order",validation:[]}),e(M,{label:r(u,"Is searchable"),value:a.is_searchable,onChange:l=>{d({...a,is_searchable:l.target.checked})},field:"is_searchable",validation:[]}),e(M,{label:r(u,"Show above pin on map"),value:a.is_on_pin_map,onChange:l=>{d({...a,is_on_pin_map:l.target.checked})},field:"is_on_pin_map",validation:[]}),e(M,{label:r(u,"Can above pin (search)"),value:a.can_above_pin,onChange:l=>{d({...a,can_above_pin:l.target.checked})},field:"is_visible_view",validation:[]}),e(M,{label:r(u,"Treat as url params"),value:a.is_params,onChange:l=>{d({...a,is_params:l.target.checked})},field:"is_form_hidden",validation:[]}),e(M,{label:r(u,"On main page search"),value:a.is_on_main_page,onChange:l=>{d({...a,is_on_main_page:l.target.checked})},field:"is_visible_view",validation:[]})]}),h(s,{title:"Create settings",children:[e(oe,{label:r(u,"Order label"),value:a.order,onChange:l=>{d({...a,order:l.target.value})},type:"numeric",field:"order",validation:[]}),e(M,{label:r(u,"Is require"),value:a.is_require,onChange:l=>{d({...a,is_require:l.target.checked})},field:"is_require",validation:[]}),e(M,{label:r(u,"Is  on form rendered"),value:a.is_form_rendered,onChange:l=>{d({...a,is_form_rendered:l.target.checked})},field:"is_form_rendered",validation:[]}),e(M,{label:r(u,"Is in form hidden"),value:a.is_form_hidden,onChange:l=>{d({...a,is_form_hidden:l.target.checked})},field:"is_form_hidden",validation:[]})]}),h(s,{title:"Preview settings",children:[e(M,{label:r(u,"Is on map list"),value:a.is_on_map,onChange:l=>{d({...a,is_on_map:l.target.checked})},field:"is_on_map",validation:[]}),e(M,{label:r(u,"Is visible in preview"),value:a.is_visible_view,onChange:l=>{d({...a,is_visible_view:l.target.checked})},field:"is_visible_view",validation:[]})]}),h(s,{title:"IUA settings",children:[e(M,{label:r(u,"On IUA view"),value:a.is_on_iua,onChange:l=>{d({...a,is_on_iua:l.target.checked})},field:"is_visible_view",validation:[]}),e(M,{label:r(u,"Init on IUA request"),value:a.is_on_iua_request,onChange:l=>{d({...a,is_on_iua_request:l.target.checked})},field:"is_on_pin_map",validation:[]})]})]})}function $e({categoryOptionLink:i,categoryOption:n}){const t=o.useMemo(f().ButtonLoader),r=o.useMemo(f().Layouts.Groups.V1),u=o.useMemo(f().Layouts.Tab.V1),s=ce(),{translate:a,getLabel:d}=U(),{selectors:{getCategoryTypes:l},actions:{editCategoryOptionLink:T}}=B(),[_,m]=o.useState({...i});function C(){return["IMAGES"].includes(l.find(k=>k.id==n.cot_id).type)}async function p(){s.actions.closeDrawer(),await T(_)}return h(y,{container:!0,children:[e(r,{xs:12,sm:6,title:"Category Option Link Detail",children:e(Oe,{catOptionId:n.id,readOnly:!0})}),e(u,{defaultTab:0,tabConfig:[{label:"Core",render:()=>e(Ue,{isImage:C,categoryOptionLink:{..._},setCategoryOptionLink:m})},{label:"CMS",render:()=>e(ze,{categoryOptionLink:{..._},setCategoryOptionLink:m})}]}),e(y,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:e(t,{color:"primary",onClick:p,value:a(d,"Save"),variant:"outlined"})})]})}function qe({categoryId:i}){const n=o.useMemo(()=>V.byName("mapps-component-dialog-content").component),t=o.useMemo(()=>V.byName("mapps-component-dialog-actions").component),r=o.useMemo(()=>V.byName("mapps-component-dialog-title").component),u=o.useMemo(()=>V.byName("mapps-component-dialog-content-text").component),{translate:s,getLabel:a}=U(),d=o.useMemo(f().ButtonLoader),l=o.useMemo(f().Layouts.Table.V2),T=o.useMemo(f().Layouts.Sections.V1),_=le(),{actions:m}=ce(),[C,p]=o.useState(!1),k=J(),[S,O]=o.useState(),{selectors:{getCategoryLeaf:b,getCategoryOptionsByCategoryId:v},actions:{linkCategoryOptionToCategory:w,deleteCategoryOptionLink:Y},hooks:{setCategoryId:I},functions:{isCategoryLeafLoaded:F,isLoaded:R}}=B(),{selectors:{getAllCategoryOptionsReducer:D},actions:{getAllCategoryOptions:K}}=Le(),Q=o.useMemo(()=>R()&&v.sort((g,L)=>Number(g.category_link[0].order?g.category_link[0].order:g.order)>Number(L.category_link[0].order?L.category_link[0].order:L.order)?1:-1).map(g=>{let L=g.category_link[0];return L=L||"",{...g,link:L,name:g.name}}),[v]);o.useEffect(()=>{D.length==0&&(p(!0),K().then(g=>{p(!1)}))},[]),o.useEffect(()=>{I(i)},[i]),o.useEffect(()=>{F()&&O(b)},[b]);async function c(g,L){const q=L.id,W=v.find(ee=>ee.id==q).category_link.find(ee=>ee.category_id==i);_.actions.openDialog(!0,h(o.Fragment,{children:[e(r,{id:"alert-dialog-slide-title",className:"mapps-dialog-title",children:s(a,"Unlink Category Options")}),e(n,{className:"mapps-dialog-content",children:e(u,{id:"alert-dialog-slide-description",children:s(a,"Do you want to unlink this category options")})}),h(t,{className:"mapps-dialog-actions",children:[e(d,{className:"mapps-button",onClick:async()=>{_.actions.closeDialog(),p(!0),await Y({id:W.id,category_id:i}),p(!1)},color:"primary",value:s(a,"YES_LABEL")}),e(d,{className:"mapps-button",onClick:()=>{_.actions.closeDialog()},color:"primary",value:s(a,"NO_LABEL")})]})]}))}function E(g,L){const q=v.find(W=>W.id==L.id),Z=q.category_link.find(W=>W.category_id==i);m.openDrawer(!0,e(y,{style:{width:"50vw",display:"flex"},children:e($e,{categoryOptionLink:Z,categoryOption:q})}),"right")}function P(g){m.openDrawer(!0,e(y,{style:{width:"50vw",display:"flex"},children:e(Ee,{readOnly:!0,categoryOptionId:g.currentTarget.dataset.key})}),"right")}function z(){m.openDrawer(!0,e(T,{title:"Select Category Options",style:{flexDirection:"column"},children:e(ke,{selectionMode:!0,selectedCategories:Q.map(g=>g.id),onClick:A})}),"right")}async function A(g){const L=D.find(Z=>Z.id.toLowerCase()==g.currentTarget.dataset.key.toLowerCase());let q={...L,id:X(),co_id:L.id,category_id:i};p(!0),m.closeDrawer(),await w(q),p(!1)}return!S||!R()?e(y,{}):e(x,{children:e(l,{title:"Manage Category Options Assignment",isLoading:C,freeActions:[e(d,{size:"small",value:s(a,"Add"),variant:"outlined",onClick:z,startIcon:e(de,{})},1)],actions:[g=>({icon:ae.Edit,label:"Edit Link",onClick:E,hidden:g.link.category_id!=S.id}),g=>({icon:ae.Delete,label:"Delete Link",onClick:c,hidden:g.link.category_id!=S.id}),g=>({icon:ae.ViewColumn,label:"Go to parent",onClick:L=>k(`/mapps/categories/categories/edit/${g.link.category_id}`),hidden:g.link.category_id==S.id})],pageSize:20,...Ve({openCategoryOption:P}),data:Q})})}function je(){const{functions:{setTitle:i,setIcon:n}}=ne(),t=o.useMemo(f().Layouts.Tab.V1),r=o.useMemo(f().BodyLoader),[u,s]=o.useState(!1),a=se(),{selectors:{getCategoryLeaf:d,getCategoryLeafIcon:l},actions:{expandCategoryTreeByCategoryId:T},hooks:{setCategoryId:_},state:{categoryId:m},functions:{isCategoryLeafLoaded:C}}=B();return o.useEffect(()=>{i("Category")},[l]),o.useEffect(()=>{a.id&&(s(!0),_(a.id))},[a]),o.useEffect(()=>{s(!0),C()&&(console.log("WTF"),i(d.category),T(m),s(!1),n(e("img",{src:l})))},[d]),u||!C()?e(y,{style:{height:"400px",display:"flex"},children:e(r,{text:" ",size:"25px"})}):!u&&C()&&h(y,{container:!0,children:[h(y,{container:!0,spacing:3,children:[e(y,{item:!0,xs:8}),e(y,{itemxs:3})]}),e(t,{defaultTab:0,tabConfig:[{label:"Category Options",render:()=>e(qe,{categoryId:m})},{label:"Process",render:()=>e(Ye,{categoryId:m})},{label:"Translation",render:()=>e(He,{categoryId:m})},{label:"CMS",render:()=>e(Be,{categoryId:m})},{label:"CMS Params",render:()=>e(Ge,{categoryId:m})}]})]})}function We({node:i}){const n=o.useMemo(f().ButtonLoader),{selectors:{getCategoryLeafIcon:t,getCategoryLeaf:r},hooks:{setCategoryId:u},functions:{isCategoryLeafLoaded:s}}=B(!1),a=J();return o.useEffect(()=>{u(i.category_child_id)},[]),h(x,{children:[!s()&&e(n,{className:i.isActive==!0?"selected":"",variant:"clean",size:"small",onClick:()=>{a(`/mapps/categories/categories/edit/${i.category_child_id}`)},value:String(i.category).toUpperCase(),startIcon:e(y,{style:{maxWidth:20,maxHeight:20,width:20}})},i.category_child_id),s()&&e(n,{className:i.isActive==!0?"selected":"",variant:"clean",size:"small",onClick:()=>{a(`/mapps/categories/categories/edit/${r.id}`)},value:String(r.translation.name).toUpperCase(),startIcon:s()?e("img",{style:{maxWidth:20,maxHeight:20,width:20},src:t},r.category_child_id):e(y,{style:{maxWidth:20,maxHeight:20,width:20}})},r.id)]})}function Xe(i){const n=o.useMemo(f().Layouts.Groups.V1),t=o.useMemo(f().BodyLoader),r=o.useMemo(f().FormComponents.TextBox);o.useEffect(()=>{window.__isReactDndBackendSetUp&&(window.__isReactDndBackendSetUp=!1)},[]);const{state:{},functions:{setTitle:u,setIcon:s}}=ne(),a=he(),{actions:{openDialog:d,closeDialog:l}}=le(),{selectors:{categoriesAdminReducer:T},actions:{getAllCategories:_,setCategoryParent:m,deleteCategory:C}}=B(),[p,k]=o.useState([{title:"src/",category:" ",children:[{title:"index.js",category:" "}]}]),[S,O]=o.useState(!1),[b,v]=o.useState(!1),[w,Y]=o.useState(""),I=J();o.useEffect(()=>{u("Category Tree Manager"),s(e(Se,{}))},[]),o.useEffect(()=>{T.categories.length==0?(v(!1),_().then(c=>{v(!0)})):v(!0)},[]),o.useEffect(()=>{O(!0),F(),setTimeout(()=>{O(!1)},500)},[T.categories]);function F(){const c=T.categories.filter(g=>g.status==1),E=T.categories.filter(g=>g.status==0),P=R([...c.map(g=>({...g}))]),z=R([...E.map(g=>({...g}))]),A=[{title:"_VERIFIED",category:"_VERIFIED",status:1,forEvent:!0,forSell:!0,forThing:!0,expanded:c.filter(g=>g.expanded==!0).length>0,children:P},{title:"_NOT_VERIFIED",category:"_NOT_VERIFIED",forEvent:!0,forSell:!0,forThing:!0,status:0,expanded:E.filter(g=>g.expanded==!0).length>0,children:z}];k([...A.map(g=>({...g}))])}function R(c){const E={};let P;const z=[];let A;for(A=0;A<c.length;A+=1)E[c[A].category_child_id]=A,c[A].children=[];for(A=0;A<c.length;A+=1)try{P=c[A],P.category_parent_id!==null?c[E[P.category_parent_id]].children.push(P):z.push(P)}catch{}return z}function D(c){const E={id:c.id,status:c.status,CategoryHierarchy:{category_parent_id:c.parentId}};O(!0),m(E).then(()=>{a.actions.setSuccessGlobal("Move Category to new Category Parent Successed")})}function K(c){const E=c.currentTarget.dataset.tag;c.preventDefault(),d(!0,h(o.Fragment,{children:[e(Ie,{id:"alert-dialog-slide-title",children:"Remove Category"}),e(Re,{children:e(Pe,{id:"alert-dialog-slide-description",children:"Are you sure that you want to remove this category?"})}),h(Me,{children:[e(re,{onClick:async()=>{const P=T.categories.find(z=>z.id==E);await C(E),await l(),P.isActive&&I("/mapps/categories/categories")},color:"primary",children:"YES"}),e(re,{onClick:()=>{l()},color:"primary",children:"NO"})]})]}))}function Q(c){const E=c.target.value;Y(String(E).toUpperCase())}return h(y,{container:!0,children:[e(r,{label:"Filter",isRequired:!0,value:w,onChange:Q,field:"search",validation:[]}),e(n,{title:"Category Tree",children:h(y,{style:{display:"block",width:"100%",height:"100%"},children:[(S||!b)&&e(t,{text:" ",size:"25px"}),!S&&b&&e(Ae,{rowHeight:55,style:{height:"800px"},treeData:p,onChange:c=>{k([...c])},onMoveNode:c=>(D({id:c.node.id,parentId:c.nextParentNode.id,status:c.nextParentNode.status}),c),searchQuery:w,onlyExpandSearchedNodes:!0,canDrag:c=>!["_SPAM","_NOT_VERIFIED","_VERIFIED","_TO_DO","_ROOT"].includes(c.node.category),canDrop:c=>(c.nextParent.forEvent==c.node.forEvent||c.nextParent.forEvent==!0)&&(c.nextParent.forSell==c.node.forSell||c.nextParent.forSell==!0)&&(c.nextParent.forThing==c.node.forThing||c.nextParent.forThing==!0),generateNodeProps:c=>(c.node.title=c.node.category&&c.node.category.startsWith("_")?e(y,{style:{paddingLeft:20},children:String(c.node.category).toUpperCase()}):h(y,{children:[e(y,{style:{display:"none"},children:String(c.node.category).toUpperCase()}),e(We,{node:{...c.node}})]},c.node.category_child_id),c.buttons=[],c.buttons.push(e(ie,{size:"small",onClick:()=>{I(`/mapps/categories/categories/add/${c.node.status}/${c.node.category_child_id}`)},children:e(de,{})})),["_SPAM","_NOT_VERIFIED","_VERIFIED","_TO_DO","_ROOT"].includes(c.node.category)||c.buttons.push(e(ie,{size:"small","data-tag":c.node.category_child_id,"data-name":c.node.category,onClick:K,children:e(we,{})})),c)})]})})]})}function dt(){const i=o.useMemo(()=>V.byName("mapps-item-basic-route").component),n=o.useMemo(()=>V.byName("mapps-item-basic-routes").component),t=o.useMemo(f().Layouts.Containers.V1);return h(y,{container:!0,children:[e(t,{xs:12,sm:3,children:e(Xe,{})}),e(t,{style:{padding:"10px"},xs:12,sm:9,children:h(n,{children:[e(i,{path:"/add/:status/:parentId",element:e(Ne,{})}),e(i,{path:"/edit/:id",element:e(je,{})})]})})]})}export{dt as Categories};

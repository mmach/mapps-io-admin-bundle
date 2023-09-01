import{a9 as he,a as l,aa as ve,ab as ye,ac as Ee,ad as xe,_ as W,n as Ce,ae as _e,af as Re,$ as G,i as Z,a0 as J,R as $,U as Le,ag as Se,M as Te,ah as Oe,j as i,l as N,a3 as $e,G as z,Z as be,ai as we,a5 as te,a6 as ae,a7 as U}from"./index-0303e4c9.js";import{d as Ie}from"./AccountTree-b05b9cfa.js";import{u as Me}from"./hook-311c6d6d.js";import{u as De}from"./hook-a875f5e0.js";import{g as ne}from"./utils-15a7aa19.js";import{I as ke}from"./IconButton-ec808d00.js";var He=function(t){return{root:{height:0,overflow:"hidden",transition:t.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}},re=l.forwardRef(function(t,F){var P=t.children,u=t.classes,m=t.className,_=t.collapsedHeight,R=t.collapsedSize,v=R===void 0?"0px":R,p=t.component,g=p===void 0?"div":p,L=t.disableStrictModeCompat,b=L===void 0?!1:L,w=t.in,S=t.onEnter,y=t.onEntered,I=t.onEntering,M=t.onExit,q=t.onExited,D=t.onExiting,e=t.style,s=t.timeout,o=s===void 0?ve.standard:s,E=t.TransitionComponent,n=E===void 0?_e:E,T=ye(t,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),j=Ee(),X=l.useRef(),h=l.useRef(null),A=l.useRef(),k=typeof(_||v)=="number"?"".concat(_||v,"px"):_||v;l.useEffect(function(){return function(){clearTimeout(X.current)}},[]);var H=j.unstable_strictMode&&!b,B=l.useRef(null),le=xe(F,H?B:void 0),x=function(r){return function(c,d){if(r){var f=H?[B.current,c]:[c,d],O=Re(f,2),Y=O[0],ee=O[1];ee===void 0?r(Y):r(Y,ee)}}},ce=x(function(a,r){a.style.height=k,S&&S(a,r)}),de=x(function(a,r){var c=h.current?h.current.clientHeight:0,d=ne({style:e,timeout:o},{mode:"enter"}),f=d.duration;if(o==="auto"){var O=j.transitions.getAutoHeightDuration(c);a.style.transitionDuration="".concat(O,"ms"),A.current=O}else a.style.transitionDuration=typeof f=="string"?f:"".concat(f,"ms");a.style.height="".concat(c,"px"),I&&I(a,r)}),ue=x(function(a,r){a.style.height="auto",y&&y(a,r)}),pe=x(function(a){var r=h.current?h.current.clientHeight:0;a.style.height="".concat(r,"px"),M&&M(a)}),fe=x(q),me=x(function(a){var r=h.current?h.current.clientHeight:0,c=ne({style:e,timeout:o},{mode:"exit"}),d=c.duration;if(o==="auto"){var f=j.transitions.getAutoHeightDuration(r);a.style.transitionDuration="".concat(f,"ms"),A.current=f}else a.style.transitionDuration=typeof d=="string"?d:"".concat(d,"ms");a.style.height=k,D&&D(a)}),ge=function(r,c){var d=H?r:c;o==="auto"&&(X.current=setTimeout(d,A.current||0))};return l.createElement(n,W({in:w,onEnter:ce,onEntered:ue,onEntering:de,onExit:pe,onExited:fe,onExiting:me,addEndListener:ge,nodeRef:H?B:void 0,timeout:o==="auto"?null:o},T),function(a,r){return l.createElement(g,W({className:Ce(u.root,u.container,m,{entered:u.entered,exited:!w&&k==="0px"&&u.hidden}[a]),style:W({minHeight:k},e),ref:le},r),l.createElement("div",{className:u.wrapper,ref:h},l.createElement("div",{className:u.wrapperInner},P)))})});re.muiSupportAuto=!0;const Ne=he(He,{name:"MuiCollapse"})(re);var K={},ze=Z,Fe=J;Object.defineProperty(K,"__esModule",{value:!0});var ie=K.default=void 0,Pe=Fe(l),qe=ze(G()),je=(0,qe.default)(Pe.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");ie=K.default=je;var Q={},Ae=Z,Be=J;Object.defineProperty(Q,"__esModule",{value:!0});var oe=Q.default=void 0,We=Be(l),Ue=Ae(G()),Ge=(0,Ue.default)(We.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");oe=Q.default=Ge;var V={},Ze=Z,Je=J;Object.defineProperty(V,"__esModule",{value:!0});var se=V.default=void 0,Ke=Je(l),Qe=Ze(G()),Ve=(0,Qe.default)(Ke.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");se=V.default=Ve;function rt({selectionMode:C,onClick:t,selectedCategories:F=[]}){const{state:{},functions:{setTitle:P,setIcon:u}}=Me(),[m,_]=$.useState(""),{translate:R,getLabel:v}=Le(),{selectors:{getCategoryTypes:p,getAllCategoryOptionsReducer:g},actions:{expandCategoryOptionsType:L}}=De(),b=Se(),w=$.useMemo(Te().ButtonLoader),S=Oe(),y=$.useMemo(()=>new URLSearchParams(S.search).get("catOptionId"),[S.search]);$.useEffect(()=>{P("Category Options List"),u(i(Ie,{}))},[]),$.useEffect(()=>{if(g.length>0&&p.length>0){const e=g.find(s=>s.id==y);if(e){const s=p.find(o=>o.id==e.cot_id);s.expanded||L(s.id)}}},[y,g,p]);function I(e){const s=e.currentTarget.dataset.tag;this.props.removeCategoryOptions({id:s}).then(()=>{this.props.getCategoryOptions(),this.setState({categoryOptions:this.state.categoryOptions.filter(o=>o.id!=s)})})}function M(e){L(e.currentTarget.dataset.key)}function q(e){if(C)t(e);else{const s=e.currentTarget.dataset.key;b(`/mapps/categories/categoriesOptions?catOptionId=${s}`)}}function D(e){b("/mapps/categories/categoriesOptions?catOptionId=new")}return N($e,{children:[!C&&i(z,{children:i(w,{color:"primary",onClick:D,value:R(v,"Create"),startIcon:i(be,{}),variant:"outlined"})}),i(z,{style:{paddingTop:0,paddingBottom:0},children:i(we,{label:R(v,"CODE_FILTER_LABEL"),value:m,onChange:e=>_(e.target.value)})}),i(te,{className:"mapps-io-list-link",children:Array.isArray(p)&&p.filter((e,s)=>g.filter(E=>E.cot_id==e.id).length>0).map((e,s)=>{const o=g.filter(n=>n.cot_id==e.id),E=o.filter(n=>String(n.name.toLowerCase()).startsWith(m.toLowerCase())||String(n.name.toLowerCase()).indexOf(m.toLowerCase())>0);return N(z,{className:"mapps-io-list-item",children:[N(ae,{button:!0,"data-key":e.id,onClick:M,className:e.expanded&&"selected",children:[i(U,{children:e.name}),i(z,{className:"mapps-io-list-item-description",children:E.length+" / "+o.length}),e.expanded?i(ie,{}):i(oe,{})]}),i(Ne,{"data-key":e.id,in:e.expanded,timeout:"auto",unmountOnExit:!0,children:i(te,{className:"mapps-io-list-link-collapse mapps-io-list-item ",children:o.sort((n,T)=>String(n.code)>String(T.code)?1:-1).map((n,T)=>{if(String(n.name).toUpperCase().startsWith(m.toUpperCase())||String(n.name).toUpperCase().indexOf(m.toUpperCase())>0)return N(ae,{className:n.status?y==n.id&&"selected":"primary",button:!0,disabled:F.includes(n.id),"data-key":n.id,onClick:q,children:[i(U,{children:i(U,{children:n.name})}),!C&&i(ke,{children:i(se,{"data-tag":n.id,onClick:I})})]},T)})})})]},s)})})]})}export{rt as C};

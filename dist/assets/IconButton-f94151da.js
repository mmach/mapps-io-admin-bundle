import{a7 as R,am as o,b as t,a9 as z,an as x,a as S,n as $,ao as u}from"./index-9decd392.js";var k=function(a){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:a.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:a.palette.action.active,transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{backgroundColor:o(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:a.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:a.palette.primary.main,"&:hover":{backgroundColor:o(a.palette.primary.main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:a.palette.secondary.main,"&:hover":{backgroundColor:o(a.palette.secondary.main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:a.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},C=t.forwardRef(function(a,b){var r=a.edge,m=r===void 0?!1:r,v=a.children,e=a.classes,f=a.className,i=a.color,l=i===void 0?"default":i,n=a.disabled,s=n===void 0?!1:n,c=a.disableFocusRipple,y=c===void 0?!1:c,d=a.size,p=d===void 0?"medium":d,h=z(a,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return t.createElement(x,S({className:$(e.root,f,l!=="default"&&e["color".concat(u(l))],s&&e.disabled,p==="small"&&e["size".concat(u(p))],{start:e.edgeStart,end:e.edgeEnd}[m]),centerRipple:!0,focusRipple:!y,disabled:s,ref:b},h),t.createElement("span",{className:e.label},v))});const _=R(k,{name:"MuiIconButton"})(C);export{_ as I};
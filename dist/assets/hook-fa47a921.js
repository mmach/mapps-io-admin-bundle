import{K as l,a6 as T,L as E,b as a,N as r,Q as p,O as i}from"./index-085b2e83.js";const s=t=>{const o={getAllCategoryOptions:()=>t(new r().queryThunt(p.CategoryOptions.GET_ALL_CETEGORIES_OPTIONS)),getCategoryOption:e=>t(new r().queryThunt(p.CategoryOptions.GET_ALL_CETEGORIES_OPTIONS,{id:e},"SINGLE")),removeCategoryOptions:e=>t(new r().queryThunt(i.Category_Options.DELETE_CATEGORY_OPTIONS,e)),upsertCategoryOptions:async e=>await t(new r().commandThunt(i.Category_Options.UPSERT_CATEGORY_OPTIONS,e)),upsertCategoryOptionTemplate:e=>t(new r().commandThunt(i.Category_Options.UPSERT_CATEGORY_OPTIONS_TEMPLATE,e))};return{...o,upsertCategoryOptions:async e=>(await o.upsertCategoryOptions(e),await o.getCategoryOption(e.id)),upsertCategoryOptionTemplate:async e=>(await o.upsertCategoryOptionTemplate(e),await o.getCategoryOption(e.co_id))}},m=()=>t=>t.CategoryReducer.catOptions;function A(){const t=l(),o=T(),e=E(m()),u=a.useCallback(s(t).getAllCategoryOptions,[t]),O=a.useCallback(s(t).removeCategoryOptions,[t]),y=a.useCallback(s(t).upsertCategoryOptionTemplate,[t]),g=a.useCallback(s(t).upsertCategoryOptions,[t]);function c(){const C=Array.isArray(o.selectors.getCategoryTypes)?o.selectors.getCategoryTypes.map(n=>({id:n.id,value:n.name,type:n.type})):[];return[{id:void 0,value:"",type:void 0},...C]}return{selectors:{...o.selectors,getAllCategoryOptionsReducer:e},actions:{...o.actions,getAllCategoryOptions:u,removeCateogryOptions:O,upsertCategoryOptionTemplate:y,upsertCategoryOptions:g},hooks:{...o.hooks},state:{...o.state},functions:{...o.functions,getCategoryTypesValues:c}}}export{A as u};

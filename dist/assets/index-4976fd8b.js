import{cS as R,cT as C,r as i,cU as c,cV as M,cW as p,R as o,M as S,u as w,cX as P,j as u,G as N,cY as U,T as G,v as x}from"./index-b4b9f8f0.js";import{l as F}from"./index-9e665006.js";const l=e=>{const n={insertLanguage:a=>e(new c().commandThunt(M.Languages.INSERT_LANGUAGE,a)),setAsMain:a=>e(new c().commandThunt(M.Languages.SET_AS_MAIN_LANG,a)),deleteLanguage:a=>e(new c().commandThunt(M.Languages.DELETE_LANGUAGE,a)),getLanguages:a=>e(new c().queryThunt(p.Languages.GET_LANGUAGES,a)),getAllLanguages:a=>e(new c().queryThunt(p.Languages.GET_GLOBAL_LANGUAGES,a))};return{...n,deleteLanguage:async a=>{await n.deleteLanguage(a),await n.getLanguages()},setAsMain:async a=>{await n.setAsMain(a),await n.getLanguages()},insertLanguage:async a=>{await n.insertLanguage(a),await n.getLanguages()}}},I=()=>e=>e.LangaugesAdminReducer.languagesGlobal,V=()=>e=>e.LangaugesAdminReducer.languages;function $(){const e=R(),{langaugesAdminReducer:n}=C(L=>({langaugesAdminReducer:L.LangaugesAdminReducer})),a=C(I()),d=C(V()),m=i.useCallback(l(e).getLanguages,[e]),A=i.useCallback(l(e).getAllLanguages,[e]),f=i.useCallback(l(e).deleteLanguage,[e]),s=i.useCallback(l(e).setAsMain,[e]),r=i.useCallback(l(e).insertLanguage,[e]);return{selectors:{langaugesAdminReducer:n,getAllLanguagesGlobalReducer:a,getAllLanguagesReducer:d},actions:{getLanguages:m,getAllLanguages:A,deleteLanguage:f,setAsMain:s,insertLanguage:r},state:{},hooks:{},functions:{}}}function z(){const[e,n]=o.useState(!0),a=o.useMemo(S().ConfirmationDialog),d=o.useMemo(S().Layouts.Containers.V1),m=o.useMemo(S().Layouts.Table.V2),{translate:A,getLabel:f}=w(),s=P(),{selectors:{getAllLanguagesGlobalReducer:r,getAllLanguagesReducer:L},actions:{getAllLanguages:y,getLanguages:b,setAsMain:T,insertLanguage:v,deleteLanguage:k},functions:{}}=$(),E=o.useMemo(()=>r.sort((t,g)=>g.name<t.name?1:-1).map(t=>{const g=L.find(D=>D.language_id==t.id);return{...t,languageProject:g}}),[L,r]);o.useEffect(()=>{n(!0),Promise.all([b(),y()]).then(t=>{n(!1)})},[]);function _(t,g){s.actions.openDialog(!0,u(a,{title:"Set as Main",description:`Do you want set ${g.name} as main language?`,onConfirm:async()=>{s.actions.closeDialog(),n(!0),await T(g),n(!1)}}))}function h(t,g){s.actions.openDialog(!0,u(a,{title:"Activate Language",description:`Do you want activate ${g.name} language?`,onConfirm:async()=>{s.actions.closeDialog(),n(!0),await v({id:x(),language_id:g.id,status:!0}),n(!1)}}))}function j(t,g){s.actions.openDialog(!0,u(a,{title:"Deactivate Language",description:`Do you want deactivate ${g.name} language?`,onConfirm:async()=>{s.actions.closeDialog(),n(!0),await k({id:g.languageProject.id}),n(!1)}}))}return u(N,{container:!0,style:{justifyContent:"center"},children:u(d,{title:"Languages",icon:u(U,{}),xs:12,sm:12,children:u(m,{isLoading:e,title:A(f,"Manage Languages"),...F({}),pageSize:20,data:E,actions:[t=>({icon:G.Check,label:"Set As Main",onClick:_,hidden:t.languageProject&&t.languageProject.is_main||!t.languageProject}),t=>({icon:G.Check,label:"Activate Language",onClick:h,hidden:t.languageProject}),t=>({icon:G.Clear,label:"Deactivate Language",onClick:j,hidden:!t.languageProject||t.languageProject&&t.languageProject.is_main})]})})})}export{z as default};

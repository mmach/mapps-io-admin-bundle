import{cS as g,cT as n,r as t,cU as o,cW as A,cV as a}from"./index-b4b9f8f0.js";const c=e=>{const r={getUsers:s=>e(new o().queryThunt(A.Project.GET_PROJECT_USERS,s)),grantRole:s=>e(new o().commandThunt(a.User.GRANT_USER_ROLE,s)),revokeRole:s=>e(new o().commandThunt(a.User.REVOKE_USER_ROLE,s))};return{...r,grantRole:async s=>(await r.grantRole(s),await r.getUsers()),revokeRole:async s=>(await r.revokeRole(s),await r.getUsers())}},S=()=>e=>e.UsersAdminReducer.users,E=e=>r=>e?r.UsersAdminReducer.users.find(s=>s.id==e):null;function w(){const e=g(),{usersAdminReducer:r}=n(m=>({usersAdminReducer:m.UsersAdminReducer})),[s,u]=t.useState(),l=n(S()),R=n(E(s)),i=t.useCallback(c(e).getUsers,[e]),d=t.useCallback(c(e).revokeRole,[e]),U=t.useCallback(c(e).grantRole,[e]);return{selectors:{usersAdminReducer:r,getAllUsersReducer:l,getUserByIdeReducer:R},actions:{getUsers:i,revokeRole:d,grantRole:U},state:{userId:s},hooks:{setUserId:u},functions:{}}}export{w as u};
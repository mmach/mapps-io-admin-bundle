import{L as g,N as n,a as t,O as o,S as A,Q as c}from"./index-57689e0c.js";const a=e=>{const r={getUsers:s=>e(new o().queryThunt(A.Project.GET_PROJECT_USERS,s)),grantRole:s=>e(new o().commandThunt(c.User.GRANT_USER_ROLE,s)),revokeRole:s=>e(new o().commandThunt(c.User.REVOKE_USER_ROLE,s))};return{...r,grantRole:async s=>(await r.grantRole(s),await r.getUsers()),revokeRole:async s=>(await r.revokeRole(s),await r.getUsers())}},S=()=>e=>e.UsersAdminReducer.users,E=e=>r=>e?r.UsersAdminReducer.users.find(s=>s.id==e):null;function w(){const e=g(),{usersAdminReducer:r}=n(m=>({usersAdminReducer:m.UsersAdminReducer})),[s,u]=t.useState(),l=n(S()),R=n(E(s)),i=t.useCallback(a(e).getUsers,[e]),d=t.useCallback(a(e).revokeRole,[e]),U=t.useCallback(a(e).grantRole,[e]);return{selectors:{usersAdminReducer:r,getAllUsersReducer:l,getUserByIdeReducer:R},actions:{getUsers:i,revokeRole:d,grantRole:U},state:{userId:s},hooks:{setUserId:u},functions:{}}}export{w as u};
import{K as m,R as t,m as n,j as o,P as d}from"./index-0303e4c9.js";const u=e=>{const[a,c]=t.useState([]),i=t.useMemo(()=>n.byName("mapps-item-use-device-type")).useHook(),r=t.useMemo(()=>n.byName("mapps-iua-preview-default")),p=t.useMemo(()=>a.map(s=>o(d,{className:"mapps-chat-window",children:r.render({...e,iua_id:s.iua_id,conversation_id:s.conversation_id,device:i.device,cmsMode:"FAST_CHAT"})},s.conversation_id)),[a]);return t.useEffect(()=>{c(e.chat.chats)},[e.chat]),o("div",{className:"mapps-chat-container",children:p})},h=e=>({chat:e.ChatPopupsContainerReducer}),C=e=>({isConnected:a=>e({type:MESSAGES_ACTIONS.IS_CONNECTED,dto:{isConnected:a}})}),P=m(h,C)(t.memo(u));export{P as default};

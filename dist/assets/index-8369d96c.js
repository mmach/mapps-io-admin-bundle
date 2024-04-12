import{R as i,M as c,u as _,d7 as F,g as y,G as o,j as e,d8 as T,v as g,F as M,y as U,d9 as W,da as q,db as z,dc as H}from"./index-96500733.js";import{u as w}from"./hook-dc846245.js";const J=["!","|","&","="];function K({actionId:u}){const d=i.useMemo(c().Layouts.Groups.V1),x=i.useMemo(c().BodyLoader),L=i.useMemo(c().ButtonLoader),h=i.useMemo(c().FormComponents.DropDownList),P=i.useMemo(c().FormComponents.TextBox),b=i.useMemo(c().FormComponents.TagComponent),{selectors:{getActionByIdReducer:m},actions:{grantPrivs:r,revokePrivs:s,upsertAction:f},hooks:{setActionId:A}}=w(),{translate:n,getLabel:C}=_(),{selectors:{privsSelector:B,actionsSelector:R}}=F(),[l,k]=i.useState(),[E,v]=i.useState(!1),[j,I]=i.useState("");i.useEffect(()=>{A(u);const t=R.find(p=>p.id==u).action;I(t)},[]),i.useEffect(()=>{m&&k({...m})},[m]);function D(){v(!0),f(l).then(t=>{v(!1)})}function V(){const t=l.action_privileges.map(a=>a.privileges.id),p=B.filter(a=>!t.includes(a.id));return[{id:"",value:""},...p].map(a=>({id:a.id,value:a.privilege||a.value}))}function G(t){const p=t.currentTarget.dataset.key;v(!0),s({id:p}).then(a=>{v(!1)})}function O(t){v(!0),r({id:g(),status:1,privilege_id:t.target.value,action_id:l.id}).then(p=>{v(!1)})}function $(t,p){if(t.split(" ").filter(a=>!a.startsWith("#")).length+1!=t.split(" ").filter(a=>a.startsWith("#")).length)return!1;{const a=t.split(" ").filter(S=>S.startsWith("#$")).map(S=>S.replace(/#/g,"").replace("$",""));return a.filter(S=>p.map(N=>N.privileges.privilege_details.name.trim()).includes(S)).length==a.length}}try{return l&&!E?y(o,{container:!0,style:{display:"flex"},children:[e(d,{title:"Action Title",children:e(P,{disabled:!0,label:n(C,"Name"),value:j,field:"value",validation:[]})}),y(d,{title:"Allowed Privileges",children:[e(h,{label:"Privileges",valueOptions:V(),value:"",onChange:O,field:"type",validation:[]}),l.action_privileges.map((t,p)=>e(T,{"data-key":t.id,onClick:G,label:t.privileges.privilege_details.name.trim()},t.id))]}),y(d,{title:"Function",style:{display:"flex",width:"100%"},children:[e(o,{xs:12,children:e(b,{notUniq:!0,disabled:!0,tags:l.func?l.func.split(" ").map(t=>({id:g(),value:g(),label:t})):[],noLabel:!0,onChange:t=>{const p=t.map(a=>a.label).join(" ");k({...l,func:p})},suggestions:[...J.map(t=>({value:t,label:t,type:"OPERATOR"})),,...l.action_privileges.map(t=>({id:g(),value:g(),label:`#$${t.privileges.privilege_details.name.trim()}#`,type:"PRIV"}))]})}),e(o,{xs:12,style:{marginLeft:"1rem",marginBottom:"1rem",marginTop:"1rem"},children:l.func?e(o,{style:{color:$(l.func,l.action_privileges)?"green":"red"},children:l.func}):e(M,{})}),e(o,{xs:12,style:{marginLeft:"1rem",marginBottom:"1rem",marginTop:"1rem"},children:e(L,{color:"primary",onClick:D,value:n(C,"Save Func"),variant:"outlined"})})]})]}):e(o,{style:{height:"400px",display:"flex",width:"100%"},children:e(x,{text:" ",size:"25px"})})}catch(t){return console.log(t),e(M,{})}}const Q=["!","|","&","="];function X(u){const d=i.useMemo(c().Layouts.Groups.V1),x=i.useMemo(c().ButtonLoader),L=i.useMemo(c().FormComponents.TagComponent),{actions:h}=U(),{translate:P,getLabel:b}=_(),{selectors:{getActionByIdReducer:m},hooks:{setActionId:r}}=w(),[s,f]=i.useState(u.actionsProject);i.useEffect(()=>{r(u.actionsProject.id)},[]),i.useEffect(()=>{m&&f({...m})},[m]);function A(){h.openDrawer(!0,e(o,{style:{width:"50vw",display:"flex"},children:e(K,{actionId:s.id})}),"right")}try{return s&&y(o,{container:!0,style:{display:"flex"},children:[e(d,{title:"Allowed Privileges",children:s.action_privileges.map(n=>e(T,{"data-key":n.id,label:n.privileges.privilege_details.name.trim()},n.id))}),e(d,{title:"Function",style:{display:"flex",width:"100%"},children:e(L,{notUniq:!0,disabled:!0,tags:s.func?s.func.split(" ").map(n=>({id:g(),value:g(),label:n})):[],noLabel:!0,suggestions:[...Q.map(n=>({value:n,label:n,type:"OPERATOR"})),,...s.action_privileges.map(n=>({id:g(),value:g(),label:`#$${n.privileges.privilege_details.name.trim()}#`,type:"PRIV"}))]})}),e(o,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:e(x,{color:"primary",onClick:A,value:P(b,"Edit Privileges"),variant:"outlined"})})]})}catch(n){return console.log(n),e(M,{})}}function Y(u){const{translate:d,getLabel:x}=_(),L=i.useMemo(c().Layouts.Sections.V1);i.useMemo(c().Layouts.Groups.V1);const[h,P]=i.useState([]),{selectors:{processesSelector:b,statusesSelector:m}}=F();return W(),i.useEffect(()=>{let r={};b.forEach(s=>{s.process_chain.forEach(f=>{f.process_chain_actions.forEach(A=>{A.action_id==u.actionsProject.id&&(r[s.token]||(r[s.token]=[]),r={...r,[s.token]:[...r[s.token],{...f,status:m.find(n=>n.id==f.status_id)}]})})})}),P(r)},[]),e(M,{children:e(o,{container:!0,spacing:3,children:Object.keys(h).map(r=>e(o,{item:!0,xs:4,sm:4,children:e(L,{title:d(x,r),children:e(q,{className:"mapps-io-list-link",style:{width:"100%"},children:h[r].map(s=>e(o,{className:"mapps-io-list-item",children:e(z,{"data-key":s.id,button:!0,children:y(H,{children:[s.id.split("-")[0]," - ",s.status&&s.status.name]})})},s.id))})})},r))})})}function ie(u){const d=i.useMemo(c().Layouts.Groups.V1);return u.actionsProject?y(o,{container:!0,style:{display:"flex"},children:[e(o,{item:!0,xs:6,style:{display:"flex"},children:e(d,{title:"Privileges",children:e(X,{...u})})}),e(o,{item:!0,xs:6,style:{display:"flex"},children:e(d,{title:"Process Related",children:e(Y,{...u})})})]}):e(M,{})}export{ie as ActionDetailsPreview};
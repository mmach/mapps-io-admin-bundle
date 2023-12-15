import{R as i,M as c,O as _,d1 as F,l as y,G as r,j as e,d2 as T,$ as g,Z as M,c_ as U,d3 as W,d4 as q,d5 as z,d6 as Z}from"./index-9bb41de4.js";import{u as w}from"./hook-dddea82a.js";const H=["!","|","&","="];function J({actionId:u}){const d=i.useMemo(c().Layouts.Groups.V1),x=i.useMemo(c().BodyLoader),L=i.useMemo(c().ButtonLoader),h=i.useMemo(c().FormComponents.DropDownList),P=i.useMemo(c().FormComponents.TextBox),b=i.useMemo(c().FormComponents.TagComponent),{selectors:{getActionByIdReducer:m},actions:{grantPrivs:a,revokePrivs:s,upsertAction:f},hooks:{setActionId:A}}=w(),{translate:n,getLabel:C}=_(),{selectors:{privsSelector:B,actionsSelector:R}}=F(),[l,k]=i.useState(),[E,v]=i.useState(!1),[j,I]=i.useState("");i.useEffect(()=>{A(u);const t=R.find(p=>p.id==u).action;I(t)},[]),i.useEffect(()=>{m&&k({...m})},[m]);function D(){v(!0),f(l).then(t=>{v(!1)})}function O(){const t=l.action_privileges.map(o=>o.privileges.id),p=B.filter(o=>!t.includes(o.id));return[{id:"",value:""},...p].map(o=>({id:o.id,value:o.privilege||o.value}))}function V(t){const p=t.currentTarget.dataset.key;v(!0),s({id:p}).then(o=>{v(!1)})}function $(t){v(!0),a({id:g(),status:1,privilege_id:t.target.value,action_id:l.id}).then(p=>{v(!1)})}function G(t,p){if(t.split(" ").filter(o=>!o.startsWith("#")).length+1!=t.split(" ").filter(o=>o.startsWith("#")).length)return!1;{const o=t.split(" ").filter(S=>S.startsWith("#$")).map(S=>S.replace(/#/g,"").replace("$",""));return o.filter(S=>p.map(N=>N.privileges.privilege_details.name.trim()).includes(S)).length==o.length}}try{return l&&!E?y(r,{container:!0,style:{display:"flex"},children:[e(d,{title:"Action Title",children:e(P,{disabled:!0,label:n(C,"Name"),value:j,field:"value",validation:[]})}),y(d,{title:"Allowed Privileges",children:[e(h,{label:"Privileges",valueOptions:O(),value:"",onChange:$,field:"type",validation:[]}),l.action_privileges.map((t,p)=>e(T,{"data-key":t.id,onClick:V,label:t.privileges.privilege_details.name.trim()},t.id))]}),y(d,{title:"Function",style:{display:"flex",width:"100%"},children:[e(r,{xs:12,children:e(b,{notUniq:!0,disabled:!0,tags:l.func?l.func.split(" ").map(t=>({id:g(),value:g(),label:t})):[],noLabel:!0,onChange:t=>{const p=t.map(o=>o.label).join(" ");k({...l,func:p})},suggestions:[...H.map(t=>({value:t,label:t,type:"OPERATOR"})),,...l.action_privileges.map(t=>({id:g(),value:g(),label:`#$${t.privileges.privilege_details.name.trim()}#`,type:"PRIV"}))]})}),e(r,{xs:12,style:{marginLeft:"1rem",marginBottom:"1rem",marginTop:"1rem"},children:l.func?e(r,{style:{color:G(l.func,l.action_privileges)?"green":"red"},children:l.func}):e(M,{})}),e(r,{xs:12,style:{marginLeft:"1rem",marginBottom:"1rem",marginTop:"1rem"},children:e(L,{color:"primary",onClick:D,value:n(C,"Save Func"),variant:"outlined"})})]})]}):e(r,{style:{height:"400px",display:"flex",width:"100%"},children:e(x,{text:" ",size:"25px"})})}catch(t){return console.log(t),e(M,{})}}const K=["!","|","&","="];function Q(u){const d=i.useMemo(c().Layouts.Groups.V1),x=i.useMemo(c().ButtonLoader),L=i.useMemo(c().FormComponents.TagComponent),{actions:h}=U(),{translate:P,getLabel:b}=_(),{selectors:{getActionByIdReducer:m},hooks:{setActionId:a}}=w(),[s,f]=i.useState(u.actionsProject);i.useEffect(()=>{a(u.actionsProject.id)},[]),i.useEffect(()=>{m&&f({...m})},[m]);function A(){h.openDrawer(!0,e(r,{style:{width:"50vw",display:"flex"},children:e(J,{actionId:s.id})}),"right")}try{return s&&y(r,{container:!0,style:{display:"flex"},children:[e(d,{title:"Allowed Privileges",children:s.action_privileges.map(n=>e(T,{"data-key":n.id,label:n.privileges.privilege_details.name.trim()},n.id))}),e(d,{title:"Function",style:{display:"flex",width:"100%"},children:e(L,{notUniq:!0,disabled:!0,tags:s.func?s.func.split(" ").map(n=>({id:g(),value:g(),label:n})):[],noLabel:!0,suggestions:[...K.map(n=>({value:n,label:n,type:"OPERATOR"})),,...s.action_privileges.map(n=>({id:g(),value:g(),label:`#$${n.privileges.privilege_details.name.trim()}#`,type:"PRIV"}))]})}),e(r,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:e(x,{color:"primary",onClick:A,value:P(b,"Edit Privileges"),variant:"outlined"})})]})}catch(n){return console.log(n),e(M,{})}}function X(u){const{translate:d,getLabel:x}=_(),L=i.useMemo(c().Layouts.Sections.V1);i.useMemo(c().Layouts.Groups.V1);const[h,P]=i.useState([]),{selectors:{processesSelector:b,statusesSelector:m}}=F();return W(),i.useEffect(()=>{let a={};b.forEach(s=>{s.process_chain.forEach(f=>{f.process_chain_actions.forEach(A=>{A.action_id==u.actionsProject.id&&(a[s.token]||(a[s.token]=[]),a={...a,[s.token]:[...a[s.token],{...f,status:m.find(n=>n.id==f.status_id)}]})})})}),P(a)},[]),e(M,{children:e(r,{container:!0,spacing:3,children:Object.keys(h).map(a=>e(r,{item:!0,xs:4,sm:4,children:e(L,{title:d(x,a),children:e(q,{className:"mapps-io-list-link",style:{width:"100%"},children:h[a].map(s=>e(r,{className:"mapps-io-list-item",children:e(z,{"data-key":s.id,button:!0,children:y(Z,{children:[s.id.split("-")[0]," - ",s.status&&s.status.name]})})},s.id))})})},a))})})}function ie(u){const d=i.useMemo(c().Layouts.Groups.V1);return u.actionsProject?y(r,{container:!0,style:{display:"flex"},children:[e(r,{item:!0,xs:6,style:{display:"flex"},children:e(d,{title:"Privileges",children:e(Q,{...u})})}),e(r,{item:!0,xs:6,style:{display:"flex"},children:e(d,{title:"Process Related",children:e(X,{...u})})})]}):e(M,{})}export{ie as ActionDetailsPreview};
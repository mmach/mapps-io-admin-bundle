import{r as b,b as v,i as M,c as S,R as o,m as r,u as L,e as x,f as y,g as u,G as n,j as e}from"./index-b2bea69e.js";var l={},N=M,I=S;Object.defineProperty(l,"__esModule",{value:!0});var m=l.default=void 0,O=I(b),P=N(v()),A=(0,P.default)(O.createElement("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");m=l.default=A;function U({showShareButton:p=!1,showUserName:d=!0,showEmail:f=!0,showPhone:_=!0}){const h=o.useMemo(()=>r.byName("mapps-component-icon-button").component),c=o.useMemo(()=>r.byName("mapps-component-textbox").component),E=o.useMemo(()=>r.byName("mapps-component-share-component").component);o.useMemo(()=>r.byName("mapps-component-map-form").component);const{getLabel:t,translate:s}=L(),{selectors:{userProfileReducer:a=a}}=x(),{actions:{openModal:i=i}}=y();function R(){i(!0,e(E,{title:s(t,"SHARE_USER_TITLE",a.user.name),link:location.href}))}return!a.isLoading&&u(n,{container:!0,className:"mapps-user-info-container",style:{justifyContent:"space-around",flexDirection:"column",flex:"auto",width:"100%"},children:[p&&e(n,{className:"mapps-user-action actions-menu",children:e(n,{item:!0,children:e(h,{onClick:R,children:e(m,{})})})}),u(n,{className:"mapps-user-info-fields-container",children:[d&&e(c,{disabled:"false",value:a.user.name+" "+a.user.surname,label:s(t,"USER_PROFILE_MODAL_NAME_SURNAME"),style:{width:"100%"}}),f&&e(c,{disabled:"false",value:a.user.email,label:s(t,"USER_PROFILE_MODAL_EMAIL"),style:{width:"100%"}}),_&&e(c,{disabled:"false",value:a.user.phone,label:s(t,"USER_PROFILE_MODAL_PHONE"),style:{width:"100%"}})]})]})}export{U as default};
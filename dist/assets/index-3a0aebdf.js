import{R as E,m as u,n as B,o as M,u as P,l as U,e as x,j as a,G as c,g as A,U as y,E as C}from"./index-b4b9f8f0.js";function V(){const n=E.useMemo(()=>u.byName("mapps-component-textbox").component),I=E.useMemo(()=>u.byName("mapps-component-button-loader").component),f=E.useMemo(()=>u.byName("mapps-component-form-helper-text").component),h=E.useMemo(()=>u.byName("mapps-component-body-loader").component),{formValues:o,isInitLoading:m,setInitLoading:p,setFormValue:T,validationArray:t,isLoading:v,setLoading:R,onValueChange:r,exceptionMessage:L}=B(y),{actions:{setSnackbar:_=_}}=M(),{translate:e,getLabel:s,getSuccessGlobal:N,getErrorGlobal:g,getPlaceholder:l}=P(),{selectors:{authReducer:S=S}}=U(),{selectors:{userProfileReducer:d=d},actions:{getInvoicesUserValues:O=O,editUserInvoice:b=b}}=x(),i=E.useMemo(()=>S.user.id==d.user.id,d.user.id);E.useEffect(()=>{d.ivoice_data.id&&(p(!0),T(d.ivoice_data),p(!1))},[d.ivoice_data]);function G(D){R(!0),D.preventDefault(),b(o).then(()=>{R(!1),_(C.CODE.SUCCESS_GLOBAL,e(N,"EDIT_USER_INVOICE_SUCCESS"))}).catch(()=>{R(!1),_(C.CODE.ERROR,e(g,"EDIT_USER_INVOICE_ERROR"))})}return m?a(c,{style:{height:"240px",display:"flex"},children:a(h,{text:" ",size:"25px"})}):!m&&A(c,{children:[a(c,{className:"mapps-edit-invoice-form-error mapps-form-error",children:a(f,{error:L,children:L})}),A(c,{className:"mapps-form mapps-edit-invoice-form-input",children:[a(n,{disabled:!i,placeholder:e(l,"REGISTER_COMPANY_NAME_PLACEHOLDER"),isRequired:!0,label:e(s,"REGISTER_COMPANY_NAME_LABEL"),value:o.name,onChange:r,field:"name",validation:t}),a(n,{disabled:!i,placeholder:e(l,"REGISTER_COMPANY_USERNAME_PLACEHOLDER"),isRequired:!0,label:e(s,"REGISTER_COMPANY_USERNAME_LABEL"),value:o.user_name,onChange:r,field:"user_name",validation:t}),a(n,{disabled:!i,placeholder:e(l,"REGISTER_ZIP_PLACEHOLDER"),isRequired:!0,label:e(s,"REGISTER_ZIPS_LABEL"),value:o.zip_code,onChange:r,field:"zip_code",validation:t}),a(n,{disabled:!i,placeholder:e(l,"REGISTER_ADDRESS_PLACEHOLDER"),isRequired:!0,label:e(s,"REGISTER_ADDRESS_LABEL"),value:o.address,onChange:r,field:"address",validation:t}),a(n,{disabled:!i,placeholder:e(l,"REGISTER_CITY_PLACEHOLDER"),isRequired:!0,label:e(s,"REGISTER_CITY_LABEL"),value:o.city,onChange:r,field:"city",validation:t}),a(n,{disabled:!i,placeholder:e(l,"REGISTER_COUNTRY_PLACEHOLDER"),isRequired:!0,label:e(s,"REGISTER_COUNTRY_LABEL"),value:o.country,onChange:r,field:"country",validation:t}),a(n,{disabled:!i,placeholder:e(l,"REGISTER_TAX_NUMBER_PLACEHOLDER"),isRequired:!0,label:e(s,"REGISTER_TAX_NUMBER_LABEL"),value:o.tax_number,onChange:r,field:"tax_number",validation:t}),a(n,{disabled:!i,placeholder:e(l,"REGISTER_BANK_NR_PLACEHOLDEr"),isRequired:!0,label:e(s,"REGISTER_BANK_NR_LABEL"),value:o.bank_account_nr,onChange:r,field:"bank_account_nr",validation:t})]}),i&&a(c,{className:"mapps-form-actions mapps-edit-invoice-form-button",children:a(I,{className:"mapps-loading-button",onClick:G,size:"medium",color:"primary",value:e(s,"EDIT_SUBMIT_LABEL"),isLoading:v})})]})}export{V as default};

"use strict";(self.webpackChunkwebsite_support_center=self.webpackChunkwebsite_support_center||[]).push([[622],{5170:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=o(5893),t=o(1151);const s={sidebar_label:"\u2699\ufe0f Common Errors",sidebar_position:3,description:"Common Errors"},i="Common Errors",a={id:"extension/common-errors",title:"Common Errors",description:"Common Errors",source:"@site/docs/extension/common-errors.md",sourceDirName:"extension",slug:"/extension/common-errors",permalink:"/extension/common-errors",draft:!1,unlisted:!1,editUrl:"https://github.com/lukso-network/website-support-center/tree/main/docs/extension/common-errors.md",tags:[],version:"current",lastUpdatedAt:1706096888,formattedLastUpdatedAt:"Jan 24, 2024",sidebarPosition:3,frontMatter:{sidebar_label:"\u2699\ufe0f Common Errors",sidebar_position:3,description:"Common Errors"},sidebar:"extensionSidebar",previous:{title:"\ud83d\udd10 Controllers",permalink:"/extension/controllers"},next:{title:"\ud83d\udedf Check 2FA Recovery",permalink:"/extension/guides/check-2fa-recovery"}},l={},c=[{value:"&quot;Universal Profile is not allowed by this Transaction Relay Service&quot;",id:"universal-profile-is-not-allowed-by-this-transaction-relay-service",level:3},{value:"&quot;No recovery set up for this Universal Profile&quot;",id:"no-recovery-set-up-for-this-universal-profile",level:3}];function h(e){const r={a:"a",admonition:"admonition",em:"em",h1:"h1",h3:"h3",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"common-errors",children:"Common Errors"}),"\n",(0,n.jsx)(r.h3,{id:"universal-profile-is-not-allowed-by-this-transaction-relay-service",children:'"Universal Profile is not allowed by this Transaction Relay Service"'}),"\n",(0,n.jsxs)(r.p,{children:["This error occurs if a user deployed his Universal Profile through a 3rd party platform that has its own Transaction Relay Service (like ",(0,n.jsx)(r.a,{href:"https://universal.page",children:(0,n.jsx)(r.em,{children:"Universal.Page"})}),"). If the externally created profile gets imported into the Universal Profile Browser Extension, it is not compatible with LUKSO's own Transaction Relay Service, responsible for paying for user transactions on the network."]}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)("img",{src:"/img/general/relay-service-tx-error.png",alt:"Relay Service Transaction Error",width:"400"})}),"\n",(0,n.jsxs)(r.p,{children:["To ",(0,n.jsx)(r.strong,{children:"solve this issue"}),", users have to ",(0,n.jsx)(r.a,{href:"/extension/guides/fund-controller",children:(0,n.jsx)(r.strong,{children:"fund the extension's controller"})})," with LYX to execute transactions without any Transaction Relay Service. Within the transaction screen, users can then select to use their own controller's funds."]}),"\n",(0,n.jsx)(r.h3,{id:"no-recovery-set-up-for-this-universal-profile",children:'"No recovery set up for this Universal Profile"'}),"\n",(0,n.jsx)(r.p,{children:"If you want to recover your profile from the dashboard, the page might show a recovery button for all of your profiles, even if a particular profile does not have a recovery set up:"}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)("img",{src:"/img/extension/recovery-dashboard.png",alt:"Recovery Dashboard",width:"600"})}),"\n",(0,n.jsx)(r.p,{children:"When you continue with the recovery, you will retrieve an error message like the following:"}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)("img",{src:"/img/extension/recovery-failed.png",alt:"Recovery Error Message",width:"600"})}),"\n",(0,n.jsxs)(r.p,{children:["To ",(0,n.jsx)(r.strong,{children:"solve this issue"}),", please ",(0,n.jsx)(r.a,{href:"/extension/guides/check-2fa-recovery",children:(0,n.jsx)(r.strong,{children:"verify that 2FA is set up on a specific profile"})})," before starting the recovery process. If 2FA was not set up, you can not recover your profile from the dashboard. Please look into the optional ",(0,n.jsx)(r.a,{href:"/extension/guides/create-backup",children:(0,n.jsx)(r.strong,{children:"Backup"})})," solutions."]}),"\n",(0,n.jsx)(r.admonition,{type:"caution",children:(0,n.jsx)(r.p,{children:"If you neither have 2FA, access to the profile within the extension, or the backup file of a profile's controller, there will be no way to regain access."})}),"\n",(0,n.jsx)(r.admonition,{title:"Upcoming Feature",type:"success",children:(0,n.jsxs)(r.p,{children:["The dashboard of ",(0,n.jsx)(r.a,{href:"https://my.universalprofile.cloud/",children:"my.universalprofile.cloud"})," is currently undergoing updates based on recent ",(0,n.jsx)(r.a,{href:"/general/feature-requests",children:"feature requests"})," only to show the recovery button for eligible profiles. On top of that, we're currently working on a feature to allow 2FA backups for already existing profiles created on ",(0,n.jsx)(r.a,{href:"https://universalprofile.cloud/",children:"universalprofile.cloud"}),"."]})})]})}function d(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,r,o)=>{o.d(r,{Z:()=>a,a:()=>i});var n=o(7294);const t={},s=n.createContext(t);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
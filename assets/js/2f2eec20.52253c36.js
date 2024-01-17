"use strict";(self.webpackChunkwebsite_support_center=self.webpackChunkwebsite_support_center||[]).push([[988],{5164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(5893),o=n(1151);const i={sidebar_label:"\ud83d\udce5 Create Backup",sidebar_position:2,description:"Extension Support: Create Backup"},s="Create Backup",a={id:"extension/guides/create-backup",title:"Create Backup",description:"Extension Support: Create Backup",source:"@site/docs/extension/guides/create-backup.md",sourceDirName:"extension/guides",slug:"/extension/guides/create-backup",permalink:"/extension/guides/create-backup",draft:!1,unlisted:!1,editUrl:"https://github.com/lukso-network/website-support-center/tree/main/docs/extension/guides/create-backup.md",tags:[],version:"current",lastUpdatedAt:1705499885,formattedLastUpdatedAt:"Jan 17, 2024",sidebarPosition:2,frontMatter:{sidebar_label:"\ud83d\udce5 Create Backup",sidebar_position:2,description:"Extension Support: Create Backup"},sidebar:"extensionSidebar",previous:{title:"\ud83d\udedf Check 2FA Recovery",permalink:"/extension/guides/check-2fa-recovery"},next:{title:"\ud83d\udcb8 Fund Controller",permalink:"/extension/guides/fund-controller"}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"create-backup",children:"Create Backup"}),"\n",(0,r.jsx)(t.p,{children:"If you lost access to the Universal Profile Browser Extension, there are multiple ways to secure your Universal Profile :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"2FA"}),": You can set up 2FA while creating the Universal Profile on ",(0,r.jsx)(t.a,{href:"https://universalprofile.cloud/",children:"UniversalProfile.cloud"}),". 2FA is the recommended way of backing up a Universal Profile and will add a new recovery controller to the profile, secured on LUKSO's end. This controller has permission to add new controllers if access to an old extension is lost. For security reasons, users must provide an authentication code from a mobile device and approve via email before a new controller can be added using LUKSO's recovery service."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"QR Import"}),": You can import any Universal Profile address into your extension. The import process will create a new local controller. Before it can can be used, the new controller needs to added to the Universal Profile by one of your existing controllers with sufficient permissions. Within the new extension, you will receive a QR code of a transaction that can be scanned or copied. When this QR code is received and the related transaction executed by an existing extension, this new controller will gain permissions on the Universal Profile."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"File Export"}),": You can export the Universal Profile directly as a text file, including the private key of the extension's controller. Make sure to store it somewhere safe. This private key will allow you to regain access to the profiles and their current controllers within the Universal Profiles."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["The Universal Profile Browser Extension currently does not feature a way to import profiles using the plain private key described in ",(0,r.jsx)(t.em,{children:"File Export"}),". Therefore, we recommend setting up 2FA during creation or importing the profile into another browser extension via a QR code. Optionally, the private key of a controller (EOA) could be imported into a regular wallet to send transactions manually."]})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(7294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
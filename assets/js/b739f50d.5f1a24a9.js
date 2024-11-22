"use strict";(self.webpackChunkwebsite_support_center=self.webpackChunkwebsite_support_center||[]).push([[741],{9013:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=n(4848),i=n(8453);const s={sidebar_label:"\ud83d\udd10 Controllers",sidebar_position:2,description:"LUKSO Support: Universal Profile Controllers"},t="Controllers",l={id:"Extension/controllers",title:"Controllers",description:"LUKSO Support: Universal Profile Controllers",source:"@site/docs/Extension/controllers.md",sourceDirName:"Extension",slug:"/Extension/controllers",permalink:"/Extension/controllers",draft:!1,unlisted:!1,editUrl:"https://github.com/lukso-network/website-support-center/tree/main/docs/Extension/controllers.md",tags:[],version:"current",lastUpdatedAt:1725538874e3,sidebarPosition:2,frontMatter:{sidebar_label:"\ud83d\udd10 Controllers",sidebar_position:2,description:"LUKSO Support: Universal Profile Controllers"},sidebar:"ExtensionSidebar",previous:{title:"\ud83d\udc49\ud83c\udffb Introduction",permalink:"/Extension/introduction"},next:{title:"\u2699\ufe0f Common Errors",permalink:"/Extension/common-errors"}},a={},c=[{value:"What are the controllers of the Universal Profile?",id:"what-are-the-controllers-of-the-universal-profile",level:2},{value:"What happens during imports and recovery?",id:"what-happens-during-imports-and-recovery",level:2},{value:"How can I add 2FA recovery to an existing Universal Profile?",id:"how-can-i-add-2fa-recovery-to-an-existing-universal-profile",level:2},{value:"Can I use a regular wallet to control my Universal Profile?",id:"can-i-use-a-regular-wallet-to-control-my-universal-profile",level:2},{value:"Can I use an existing EOA to control my Universal Profile?",id:"can-i-use-an-existing-eoa-to-control-my-universal-profile",level:2},{value:"What are the default permissions of the controllers?",id:"what-are-the-default-permissions-of-the-controllers",level:2},{value:"Can I add a Ledger account as a controller of my profile?",id:"can-i-add-a-ledger-account-as-a-controller-of-my-profile",level:2},{value:"How can I remove controllers and permissions?",id:"how-can-i-remove-controllers-and-permissions",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"controllers",children:"Controllers"}),"\n",(0,o.jsx)(r.h2,{id:"what-are-the-controllers-of-the-universal-profile",children:"What are the controllers of the Universal Profile?"}),"\n",(0,o.jsxs)(r.p,{children:["Each Universal Profile within an extension holds a separate private key to send transactions on behalf of the user, e.g., controlling it. Such controllers can be exported, added, or removed. The controllers can be found within the ",(0,o.jsx)(r.strong,{children:"Controllers"})," window of the extension:"]}),"\n",(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)("img",{src:"../../../../static/img/extension/controller-window.png",alt:"Controller Window",width:"400"})}),"\n",(0,o.jsx)(r.p,{children:"After the initial creation, there can be up to 3 controllers:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"The Universal Profile Browser Extension (used for profile interactions)"}),"\n",(0,o.jsx)(r.li,{children:"The Universal Receiver (used to write asset updates on the profile)"}),"\n",(0,o.jsx)(r.li,{children:"The Universal Profile Recovery (used as a backup for the profile)"}),"\n"]}),"\n",(0,o.jsxs)(r.admonition,{title:"Controller Names",type:"info",children:[(0,o.jsxs)(r.p,{children:["The names of the controllers can vary, depending on the time of your Universal Profile setup. The controller of the extension will either be named ",(0,o.jsx)(r.strong,{children:"UP Extension"})," or have the ",(0,o.jsx)(r.strong,{children:"name of it's blockchain address"}),". The recovery controller can either be named ",(0,o.jsx)(r.strong,{children:"UP Recovery"}),", ",(0,o.jsx)(r.strong,{children:"Create and manage your UP"}),", or ",(0,o.jsx)(r.strong,{children:"recovery-up<number>"}),". Every controller can be ",(0,o.jsx)(r.em,{children:"renamed locally"})," in your extension at any time."]}),(0,o.jsx)("img",{src:"../../../../static/img/extension/controller-name.png",alt:"Controller Name Change",width:"600"})]}),"\n",(0,o.jsx)(r.h2,{id:"what-happens-during-imports-and-recovery",children:"What happens during imports and recovery?"}),"\n",(0,o.jsxs)(r.p,{children:["If you ",(0,o.jsx)(r.strong,{children:"import or recover"})," your Universal Profile, it will result in the addition of another ",(0,o.jsx)(r.strong,{children:"UP Extension"})," controller. Each extension controller has ",(0,o.jsx)(r.strong,{children:"individual permissions"}),". Adding a new controller is done automatically using a transaction, either coming from the 2FA recovery service or sending a transaction from a previously added controller with sufficient permissions. If you never set up 2FA, please ensure that you reveal the private key of an original extension within the ",(0,o.jsx)(r.em,{children:"Settings"})," screen. This backup file will guarantee access to the profile later on."]}),"\n",(0,o.jsxs)(r.admonition,{type:"danger",children:[(0,o.jsxs)(r.p,{children:["Please do not ",(0,o.jsx)(r.strong,{children:"reinstall or reset"})," your extension if you do not have either of the following safeguards:"]}),(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/Extension/guides/check-2fa-recovery",children:"2FA Recovery set up correctly"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/universalprofilecloud/Recovery/set-wallet-recovery",children:"Wallet Recovery"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/Extension/guides/create-backup",children:"Revealed the private key using File Export"})}),"\n",(0,o.jsx)(r.li,{children:"Access to the profile within another extension"}),"\n"]}),(0,o.jsxs)(r.p,{children:["Otherwise, ",(0,o.jsx)(r.strong,{children:"you will not be able to access your profile, including LYX and assets"}),", as no new controller can be added without a transaction from one of the existing ones. Not having access to a working controller will cause endless import screens, waiting for a recovery transaction that can never be signed."]})]}),"\n",(0,o.jsx)(r.h2,{id:"how-can-i-add-2fa-recovery-to-an-existing-universal-profile",children:"How can I add 2FA recovery to an existing Universal Profile?"}),"\n",(0,o.jsxs)(r.p,{children:["To check the 2FA recovery status and add 2FA, please visit the dashboard on ",(0,o.jsx)(r.a,{href:"https://my.universalprofile.cloud/",children:"my.universalprofile.cloud"}),". The Universal Profile card will show the current ",(0,o.jsx)(r.strong,{children:"2FA recovery status"})," at the top right corner. If 2FA has not been added yet, continue by clicking the ",(0,o.jsx)(r.strong,{children:"Add Recovery"})," button."]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"2FA Recovery Dashboard",src:n(2724).A+"",width:"2112",height:"1515"})}),"\n",(0,o.jsxs)(r.admonition,{type:"warning",children:[(0,o.jsx)(r.p,{children:"Each extension has its own controller, and each controller has its own private key. Any controller is sufficient for recovering your Universal Profile as long as it has the right permissions."}),(0,o.jsxs)(r.p,{children:["After the recovery process, you will see in the extension the private key corresponsing to the ",(0,o.jsx)(r.strong,{children:"current"})," controller. The initial controller which was in your first browser extension is not carried over during the recovery process. Therefore, ",(0,o.jsx)(r.strong,{children:"before performing recovery please make sure to back up your private key, otherwise any funds associated with the initial controller will be lost"}),"."]})]}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsxs)(r.p,{children:["The 2FA recovery feature is only available for Universal Profiles directly created on ",(0,o.jsx)(r.a,{href:"https://my.universalprofile.cloud/",children:"universalprofile.cloud"})," and that can still be accessed within a Universal Profile Browser Extension. If you lost access before adding 2FA recovery, you can only recover the Universal Profile by using ",(0,o.jsx)(r.strong,{children:"File Backup"}),"."]})}),"\n",(0,o.jsx)(r.admonition,{title:"Dashboard Refresh",type:"note",children:(0,o.jsxs)(r.p,{children:["If the dashboard is not showing the ",(0,o.jsx)(r.em,{children:"recovery indicators"})," or ",(0,o.jsx)(r.em,{children:"Add Recovery"})," button, please ",(0,o.jsx)(r.strong,{children:"refresh or disconnect"})," and log-in again using your Universal Profile Browser Extension."]})}),"\n",(0,o.jsx)(r.h2,{id:"can-i-use-a-regular-wallet-to-control-my-universal-profile",children:"Can I use a regular wallet to control my Universal Profile?"}),"\n",(0,o.jsxs)(r.p,{children:["As a developer, you can connect a regular wallet to the network where the Universal Profile was deployed and ",(0,o.jsx)(r.strong,{children:"manually add its EOA"})," as a controller. You will then have to send all transactions through the ",(0,o.jsx)(r.a,{href:"https://docs.lukso.tech/standards/universal-profile/lsp6-key-manager",children:"Key Manager"})," of the Universal Profile to execute them as your persona. However, we recommend directly using the ",(0,o.jsx)(r.a,{href:"https://docs.lukso.tech/install-up-browser-extension",children:"Universal Profile Extension"})," to interact with dApps on LUKSO."]}),"\n",(0,o.jsx)(r.h2,{id:"can-i-use-an-existing-eoa-to-control-my-universal-profile",children:"Can I use an existing EOA to control my Universal Profile?"}),"\n",(0,o.jsx)(r.p,{children:"You can add any new or existing Externally Owned Account as a controller to your deployed Universal Profile of a specific chain. This also includes already existing keys from wallets. However, please remember that your previous assets and token remain on the EOA address."}),"\n",(0,o.jsx)(r.h2,{id:"what-are-the-default-permissions-of-the-controllers",children:"What are the default permissions of the controllers?"}),"\n",(0,o.jsx)(r.p,{children:"If you want to reset the controller permissions to their initial state, you can set the permissions to the default values described in the following pictures:"}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Show default permissions of the Universal Profile Extension"}),(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"Default Permissions of the Universal Profile Extension",src:n(1262).A+"",width:"1128",height:"814"})})]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Show default permissions of the Universal Receiver"}),(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"Default Permissions of the Universal Receiver",src:n(7642).A+"",width:"1128",height:"814"})})]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Show default permissions of the Universal Profile Recovery"}),(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"Default Permissions of the Universal Profile Recovery",src:n(7376).A+"",width:"1128",height:"814"})})]}),"\n",(0,o.jsx)(r.h2,{id:"can-i-add-a-ledger-account-as-a-controller-of-my-profile",children:"Can I add a Ledger account as a controller of my profile?"}),"\n",(0,o.jsxs)(r.p,{children:["Yes, you can add blockchain accounts or hardware wallets (like Ledger or Trezor) for recovery using the ",(0,o.jsx)(r.a,{href:"/universalprofilecloud/Recovery/set-wallet-recovery",children:"Wallet Recovery Setup"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"how-can-i-remove-controllers-and-permissions",children:"How can I remove controllers and permissions?"}),"\n",(0,o.jsxs)(r.p,{children:["To remove permissions, use the extension to view all controllers with permissions on the profile. You can toggle off permissions individually. Controllers can not be removed completely via the extension. Controllers without permissions will continue to show but with a ",(0,o.jsx)(r.code,{children:"No control"})," label."]}),"\n",(0,o.jsx)(r.admonition,{title:"Upcoming Feature",type:"success",children:(0,o.jsxs)(r.p,{children:["The team is currently working on a feature request to ",(0,o.jsx)(r.em,{children:"completely remove old controllers"}),", not only their individual permissions."]})}),"\n",(0,o.jsx)(r.admonition,{title:"Changing Permissions",type:"caution",children:(0,o.jsxs)(r.p,{children:["Be cautious when modifying permissions, as this might restrict access for recovery methods or extensions. For reference, you can look at the ",(0,o.jsx)(r.a,{href:"#what-are-the-default-permissions-of-the-controllers",children:"default permissions"})," of all the different controllers."]})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7642:(e,r,n)=>{n.d(r,{A:()=>o});const o=n.p+"assets/images/default-permission-universal-receiver-a17919d15b4554985e2614a3436123f6.png"},1262:(e,r,n)=>{n.d(r,{A:()=>o});const o=n.p+"assets/images/default-permission-up-extension-5a7476939cd67496b96c261ad1c48cc7.png"},7376:(e,r,n)=>{n.d(r,{A:()=>o});const o=n.p+"assets/images/default-permission-up-recovery-7f90bfbb19d64151adb857c94d92662f.png"},2724:(e,r,n)=>{n.d(r,{A:()=>o});const o=n.p+"assets/images/recovery-dashboard-214891b26c02d11fb5ec8eadd98193e3.png"},8453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>l});var o=n(6540);const i={},s=o.createContext(i);function t(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);
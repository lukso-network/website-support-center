"use strict";(self.webpackChunkwebsite_support_center=self.webpackChunkwebsite_support_center||[]).push([[51],{8241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var o=n(4848),i=n(8453);const a={sidebar_label:"\ud83d\udc49\ud83c\udffb Introduction",sidebar_position:1,description:"Support for LUKSO LYXe Migration"},r="Support for LYXe Migration",s={id:"general/l14-and-lyxe/migration/introduction",title:"Support for LYXe Migration",description:"Support for LUKSO LYXe Migration",source:"@site/docs/general/l14-and-lyxe/migration/introduction.md",sourceDirName:"general/l14-and-lyxe/migration",slug:"/general/l14-and-lyxe/migration/introduction",permalink:"/general/l14-and-lyxe/migration/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/lukso-network/website-support-center/tree/main/docs/general/l14-and-lyxe/migration/introduction.md",tags:[],version:"current",lastUpdatedAt:1715593992e3,sidebarPosition:1,frontMatter:{sidebar_label:"\ud83d\udc49\ud83c\udffb Introduction",sidebar_position:1,description:"Support for LUKSO LYXe Migration"},sidebar:"generalSidebar",previous:{title:"\ud83e\uddeb L14 and LYXe",permalink:"/general/l14-and-lyxe/"},next:{title:"\ud83d\udc5d Supported Wallets",permalink:"/general/l14-and-lyxe/migration/supported-wallets"}},l={},h=[{value:"How can I migrate LYXe to LYX?",id:"how-can-i-migrate-lyxe-to-lyx",level:2},{value:"What is the minimal amount that can be bridged?",id:"what-is-the-minimal-amount-that-can-be-bridged",level:2},{value:"How much will it cost to migrate the LYXe?",id:"how-much-will-it-cost-to-migrate-the-lyxe",level:2},{value:"What can be done about high gas fees on MetaMask?",id:"what-can-be-done-about-high-gas-fees-on-metamask",level:3},{value:"What can I do if my wallet is not showing up?",id:"what-can-i-do-if-my-wallet-is-not-showing-up",level:2},{value:"Where will the LYX be migrated to?",id:"where-will-the-lyx-be-migrated-to",level:2},{value:"How long will the LYXe migration be open for?",id:"how-long-will-the-lyxe-migration-be-open-for",level:2},{value:"Will LYXe be deprecated when migration closes?",id:"will-lyxe-be-deprecated-when-migration-closes",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"support-for-lyxe-migration",children:"Support for LYXe Migration"}),"\n",(0,o.jsx)(t.h2,{id:"how-can-i-migrate-lyxe-to-lyx",children:"How can I migrate LYXe to LYX?"}),"\n",(0,o.jsxs)(t.p,{children:["You can migrate LYXe to LYX using the official ",(0,o.jsx)(t.a,{href:"https://migrate.lukso.network/",children:"Migration Bridge"}),". Please check the ",(0,o.jsx)(t.code,{children:"lukso.network"})," domain in order to guarantee that you are on the official app, before connecting your wallet."]}),"\n",(0,o.jsx)(t.h2,{id:"what-is-the-minimal-amount-that-can-be-bridged",children:"What is the minimal amount that can be bridged?"}),"\n",(0,o.jsx)(t.p,{children:"You need at least 1 LYXe within your connected wallet to start the migration. You can send any decimal values."}),"\n",(0,o.jsx)(t.h2,{id:"how-much-will-it-cost-to-migrate-the-lyxe",children:"How much will it cost to migrate the LYXe?"}),"\n",(0,o.jsxs)(t.p,{children:["Since LYXe is managed on Ethereum, you will need some ETH to cover the Gas costs of the transaction when using the migration dApp. The transfer will cost less than 200k Gas, corresponding to ",(0,o.jsx)(t.a,{href:"https://etherscan.io/gastracker",children:"an average"})," of 0,004 ETH. Remember that these prices can fluctuate if the network is at capacity."]}),"\n",(0,o.jsx)(t.h3,{id:"what-can-be-done-about-high-gas-fees-on-metamask",children:"What can be done about high gas fees on MetaMask?"}),"\n",(0,o.jsx)(t.p,{children:'There used to be a frontend glitch which would not round the LYXe amount properly when using the "max button". This would cause the system to try to send slightly more LYXe than the balance of your wallet further causing extremely high gas fees because of an obviously wrong transaction. This issue is now solved and there is no need to round down the value anymore.'}),"\n",(0,o.jsx)(t.p,{children:"If you encounter high gas fees when migrating LYXe to LYX, there could be several reasons for this:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Nonce-related"}),": Please re-try to migrate your LYXe using your browser wallet after ",(0,o.jsx)(t.strong,{children:"resetting your wallet activity"}),". Transaction problems might be related to the nonce not being updated correctly, letting the transaction fail, or raising its gas. Here you can find an example guide: ",(0,o.jsx)(t.a,{href:"https://support.metamask.io/hc/en-us/articles/360015488891-How-to-clear-your-account-activity-reset-account",children:"How to reset the activity on MetaMask"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Gas-related"}),": If you only have a small amount of Ether to pay for the migration on Ethereum, MetaMask may estimate the gas a bit higher than your balance, causing very high gas fees of more than 0.5 ETH, instead of the regular 0.01 ETH. To solve the issue, please ",(0,o.jsx)(t.strong,{children:"make sure your wallet has enough Ether to pay for the transaction"})," at the current ",(0,o.jsx)(t.a,{href:"https://etherscan.io/gastracker",children:"transaction prices"}),". You can also adjust the transaction speed to be on the lower end. You can see ",(0,o.jsx)(t.a,{href:"https://etherscan.io/address/0xdE000042830A211533662637fE66760f1F2cD717#tokentxns",children:"previous deposit transactions"})," to get an overview of fees paid by other users."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"what-can-i-do-if-my-wallet-is-not-showing-up",children:"What can I do if my wallet is not showing up?"}),"\n",(0,o.jsxs)(t.p,{children:["The migration page supports ",(0,o.jsx)(t.a,{href:"/general/supported-wallets/wallet-support",children:"multiple wallets"}),". If you have various wallet extensions installed within your browser, it might happen that instead of MetaMask, other wallets will open up when connecting to ",(0,o.jsx)(t.a,{href:"https://migrate.lukso.network/",children:"migrate.lukso.network"}),". To ",(0,o.jsx)(t.strong,{children:"solve this issue"}),", please temporarily turn off your other wallet extensions within your browser."]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Open the Extension Menu of your browser"}),": Usually, you will be able to access the extension menu by clicking the 3-Dot-Menu on\nthe top right corner, and selecting ",(0,o.jsx)(t.em,{children:"Extensions"})," or ",(0,o.jsx)(t.em,{children:"Manage Extensions"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Temporary toggle off unused wallets"}),": You can disable other wallets, only keeping the one you would like to use for migration"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"After the migration is successful, you can enable other wallets again."}),"\n",(0,o.jsx)(t.h2,{id:"where-will-the-lyx-be-migrated-to",children:"Where will the LYX be migrated to?"}),"\n",(0,o.jsx)(t.p,{children:"The LYX will be sent to the same blockchain address (account/wallet) used during the migration. Within supported exchanges, the accounts will automatically be updated from LYXe to LYX if they have not been manually transferred to external wallets."}),"\n",(0,o.jsx)(t.h2,{id:"how-long-will-the-lyxe-migration-be-open-for",children:"How long will the LYXe migration be open for?"}),"\n",(0,o.jsxs)(t.p,{children:["The migration process started on the 4th of July, 2023. As stated in the ",(0,o.jsx)(t.a,{href:"https://medium.com/lukso/the-lyxe-migration-process-374053e5ddf5",children:"Migration Article"})," the bridge is planned to stay open up to 4 years until July 2027, allowing anyone to migrate. The Foundation for the New Creative Economies can pause the migration bridge. Please refer to the official announcements from the ",(0,o.jsx)(t.a,{href:"https://twitter.com/lukso_io",children:"LUKSO Twitter Account"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"will-lyxe-be-deprecated-when-migration-closes",children:"Will LYXe be deprecated when migration closes?"}),"\n",(0,o.jsxs)(t.p,{children:["Since LYXe is the official representation of LYX on Ethereum that was used to power off the ",(0,o.jsx)(t.a,{href:"https://medium.com/lukso/re-launching-the-reversible-ico-5289989ce7ed",children:"rICO"}),", the token itself will exist forever. However, we can not guarantee any price differences from LYXe to LYX after they can not be migrated anymore."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(6540);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);
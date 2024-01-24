"use strict";(self.webpackChunkwebsite_support_center=self.webpackChunkwebsite_support_center||[]).push([[763],{1055:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(5893),s=r(1151);const a={sidebar_label:"\ud83d\udee1\ufe0f Hardware Wallets",sidebar_position:3,description:"LUKSO Hardware Wallet Support"},o="Hardware Wallets",i={id:"general/hardware-wallets",title:"Hardware Wallets",description:"LUKSO Hardware Wallet Support",source:"@site/docs/general/hardware-wallets.md",sourceDirName:"general",slug:"/general/hardware-wallets",permalink:"/general/hardware-wallets",draft:!1,unlisted:!1,editUrl:"https://github.com/lukso-network/website-support-center/tree/main/docs/general/hardware-wallets.md",tags:[],version:"current",lastUpdatedAt:1706087656,formattedLastUpdatedAt:"Jan 24, 2024",sidebarPosition:3,frontMatter:{sidebar_label:"\ud83d\udee1\ufe0f Hardware Wallets",sidebar_position:3,description:"LUKSO Hardware Wallet Support"},sidebar:"generalSidebar",previous:{title:"\ud83d\udc5b Wallet Support",permalink:"/general/wallet-support"},next:{title:"\ud83c\udd99 Universal Profiles",permalink:"/general/universal-profiles"}},l={},d=[{value:"Can I use hardware wallets to store LYX?",id:"can-i-use-hardware-wallets-to-store-lyx",level:2},{value:"How to send transactions using Trezor wallet?",id:"how-to-send-transactions-using-trezor-wallet",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"hardware-wallets",children:"Hardware Wallets"}),"\n",(0,n.jsx)(t.h2,{id:"can-i-use-hardware-wallets-to-store-lyx",children:"Can I use hardware wallets to store LYX?"}),"\n",(0,n.jsxs)(t.p,{children:["Yes, you can use hardware wallets on the LUKSO network. ",(0,n.jsx)(t.a,{href:"https://www.ledger.com/",children:"Ledger"})," provides official support on Ledger devices and Ledger Live software. You can find more information in their ",(0,n.jsx)(t.a,{href:"https://support.ledger.com/hc/en-us/articles/15847276545053",children:"LYX Onboarding Guide"}),". If you use the same Ethereum address for LUKSO and other networks, those will show up as separate accounts but share the same private key and address."]}),"\n",(0,n.jsxs)(t.p,{children:["You can also send and receive assets using any other Ethereum hardware wallet, such as or ",(0,n.jsx)(t.a,{href:"https://trezor.io/",children:"Trezor"}),", that can be connected to a browser-based wallet like ",(0,n.jsx)(t.a,{href:"https://metamask.io/",children:"MetaMask"}),", ",(0,n.jsx)(t.a,{href:"https://rabby.io/",children:"Rabby"}),", or ",(0,n.jsx)(t.a,{href:"https://rainbow.me/",children:"Rainbow"}),". To see your LYX, you must ",(0,n.jsx)(t.a,{href:"https://docs.lukso.tech/networks/mainnet/parameters#add-lukso-to-wallets",children:"add the LUKSO Mainnet as a custom network"}),"."]}),"\n",(0,n.jsx)(t.admonition,{title:"Network ID",type:"info",children:(0,n.jsxs)(t.p,{children:["MetaMask might show a ",(0,n.jsx)(t.em,{children:"network duplication warning"}),". This is because the chain ID of the LUKSO mainnet (",(0,n.jsx)(t.code,{children:"42"}),") equals the Kovan testnet of Ethereum. The reference might be updated soon. It is nothing to worry about, if you ",(0,n.jsx)(t.em,{children:"ensured the official network parameters"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"how-to-send-transactions-using-trezor-wallet",children:"How to send transactions using Trezor wallet?"}),"\n",(0,n.jsx)(t.p,{children:"It can happen that the Trezor device will abort the transaction window right after it appeared, without showing any further notice or warning. This is not an issue of the browser wallet or LUKSO extension, but related to security settings on your Trezor device."}),"\n",(0,n.jsxs)(t.p,{children:["Trezor users have to ",(0,n.jsx)(t.strong,{children:"turn off"})," ",(0,n.jsx)(t.em,{children:"Strict Trezor Safety Checks"})," to use the standard derivation path on the ",(0,n.jsx)(t.a,{href:"https://docs.lukso.tech/networks/mainnet/parameters/",children:"LUKSO network"})," with ",(0,n.jsx)(t.code,{children:"ID 42"}),". This network ID was previously used for the ",(0,n.jsx)(t.a,{href:"https://etherworld.co/2022/05/04/ethereum-testnets-after-the-merge/",children:"deprecated Kovan Test Network"})," of Ethereum, which shut down in late 2022. Trezor still checks for such testnet IDs, so regular users are not falling for modified network transactions."]}),"\n",(0,n.jsx)(t.p,{children:"Follow these steps to solve the issue:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Connect"})," Trezor to ",(0,n.jsx)(t.em,{children:"Trezor Suit"})]}),"\n",(0,n.jsxs)(t.li,{children:["Move into the ",(0,n.jsx)(t.em,{children:"Device"})," section within the ",(0,n.jsx)(t.em,{children:"Settings"})]}),"\n",(0,n.jsxs)(t.li,{children:["Click on ",(0,n.jsx)(t.strong,{children:"Edit"})," ",(0,n.jsx)(t.em,{children:"Security Checks"})]}),"\n",(0,n.jsxs)(t.li,{children:["Allow ",(0,n.jsx)(t.em,{children:"Potentially Unsafe Actions"})," by manual approval from the Trezor device."]}),"\n",(0,n.jsxs)(t.li,{children:["Apply and ",(0,n.jsx)(t.strong,{children:"Save"})," changes"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Security Permissions",type:"caution",children:(0,n.jsxs)(t.p,{children:["Be careful with using your hardware wallet as enabled unsafe actions might include mismatched keys or allowing extreme network charges. If you only want to send a transaction on LUKSO once, but are using Trezor regularly, ",(0,n.jsx)(t.strong,{children:"we highly recommend turning this setting off again after the transaction went through"}),"."]})})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var n=r(7294);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
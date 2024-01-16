"use strict";(self.webpackChunkwebsite_support_center=self.webpackChunkwebsite_support_center||[]).push([[154],{1526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var i=t(5893),a=t(1151);const c={sidebar_label:"January 2024",sidebar_position:1},s="January 2024 Incident",r={id:"migration/incidents/january-2024",title:"January 2024 Incident",description:"On the 14th of January 2024, a sudden change in the LUKSO mainnet blockchain activity, following the release of a very gas intensive NFT project, created a wave of pending transactions from our migration system.",source:"@site/docs/migration/incidents/january-2024.md",sourceDirName:"migration/incidents",slug:"/migration/incidents/january-2024",permalink:"/migration/incidents/january-2024",draft:!1,unlisted:!1,editUrl:"https://github.com/lukso-network/website-support-center/tree/main/docs/migration/incidents/january-2024.md",tags:[],version:"current",lastUpdatedAt:1705412010,formattedLastUpdatedAt:"Jan 16, 2024",sidebarPosition:1,frontMatter:{sidebar_label:"January 2024",sidebar_position:1},sidebar:"migrationSidebar",previous:{title:"FAQ",permalink:"/migration/faq"}},o={},d=[{value:"Actions taken",id:"actions-taken",level:2},{value:"Upcoming actions",id:"upcoming-actions",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"january-2024-incident",children:"January 2024 Incident"}),"\n",(0,i.jsxs)(n.p,{children:["On the 14th of January 2024, a sudden change in the LUKSO mainnet blockchain activity, following the ",(0,i.jsx)(n.a,{href:"https://twitter.com/feindura/status/1746262322950083047",children:"release of a very gas intensive NFT project"}),", created a wave of pending transactions from our migration system."]}),"\n",(0,i.jsx)(n.p,{children:"This resulted in a longer than usual processing time (from below 20min to few days) as the migration transactions were sent with a very low gas price (1.5gwei)."}),"\n",(0,i.jsxs)(n.p,{children:["The pending migration transactions can be monitored from the ",(0,i.jsx)(n.a,{href:"https://explorer.execution.mainnet.lukso.network/address/0xc125fc4f3295dc891e909c56ad7ceb494e9f9644",children:"migration account"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"No deposited LYXe is lost or at risk. User migrations will be processed when the speed up fix will be deployed."})}),"\n",(0,i.jsx)(n.h2,{id:"actions-taken",children:"Actions taken"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Jan 15th, 5:51pm UTC: the gas fees logic has been improved to handle the variations in gas price."}),"\n",(0,i.jsx)(n.li,{children:"Jan 16th, 1pm UTC: the deposit frontend has been paused to prevent further deposits."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"upcoming-actions",children:"Upcoming actions"}),"\n",(0,i.jsx)(n.p,{children:"The following transactions are stuck with a low gas price, the engineering team is working on a system update to increase the gas price of these pending transactions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://explorer.execution.mainnet.lukso.network/tx/0x9b7431f876dd3c50d78a1351fccfa109e590e51e1e647f45c0c37922cb1f6b03",children:(0,i.jsx)(n.code,{children:"0x9b7431f876dd3c50d78a1351fccfa109e590e51e1e647f45c0c37922cb1f6b03"})})," (nonce ",(0,i.jsx)(n.code,{children:"3531"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://explorer.execution.mainnet.lukso.network/tx/0xbd9834db6abcdaa11c3b79c8f6bc209a3d1cf68407d084d4a90dc8a49c55dd64",children:(0,i.jsx)(n.code,{children:"0xbd9834db6abcdaa11c3b79c8f6bc209a3d1cf68407d084d4a90dc8a49c55dd64"})})," (nonce ",(0,i.jsx)(n.code,{children:"3532"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://explorer.execution.mainnet.lukso.network/tx/0x83379bfc82feec1de45a715c9d2c0c5dd507fcde3af9db44805265588d012a05",children:(0,i.jsx)(n.code,{children:"0x83379bfc82feec1de45a715c9d2c0c5dd507fcde3af9db44805265588d012a05"})})," (nonce ",(0,i.jsx)(n.code,{children:"3533"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://explorer.execution.mainnet.lukso.network/tx/0x02223747136b50f217a7b5991fa67eef3dedd12628bf507fef43208e7b39cba2",children:(0,i.jsx)(n.code,{children:"0x02223747136b50f217a7b5991fa67eef3dedd12628bf507fef43208e7b39cba2"})})," (nonce ",(0,i.jsx)(n.code,{children:"3534"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The deposit fontend will be reactived once the pending transactions are processed."})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(7294);const a={},c=i.createContext(a);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);
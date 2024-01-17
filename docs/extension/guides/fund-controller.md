---
sidebar_label: '💸 Fund Controller'
sidebar_position: 3
description: 'Extension Support: Fund Controller'
---

# Fund Controller

To use your funds to send transactions from your Universal Profile, you must send LYX or LYXt to the extension's controller. Sending it to the controller will ensure the transaction's gas costs are funded.

You can find the address of the extension's controller within the permission section:

<div style={{textAlign: 'center'}}>

<img
    src="/img/extension/controller-window.png"
    alt="Controller Window"
    width="400"
/>

</div>

:::info Extension Controller Name

The controller of the extension will either be named **UP Extension** or have the name of it's blockchain address. It can be renamed locally in your extension at any time.

:::

If you click on the controller, it will show the name, permissions, and blockchain address. Copy the blockchain address from the top of the screen, as shown in the following picture:

<div style={{textAlign: 'center'}}>

<img
    src="/img/extension/controller-address.png"
    alt="Controller Address"
    width="400"
/>

</div>

If you are using a regular wallet, [add LUKSO](https://docs.lukso.tech/networks/mainnet/parameters) as custom network and send LYX to the address of your controller. In case you use the Universal Profile Browser Extension, visit your Universal Profile page on [wallet.universalprofile.cloud](https://wallet.universalprofile.cloud/). On your profile page, click the send button of the LYX token and enter the address of your controller as recipient:

<div style={{textAlign: 'center'}}>

<img
    src="/img/general/asset-transfer.png"
    alt="Asset Transfer"
    width="800"
/>

</div>

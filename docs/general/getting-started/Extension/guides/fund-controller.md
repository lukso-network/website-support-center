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

:::info Controller Names

The names of the controllers can vary, depending on the time of your Universal Profile setup. The controller of the extension will either be named **UP Extension** or have the **name of it's blockchain address**. The controller can be _renamed locally_ in your extension at any time.

<img
    src="/img/extension/controller-name.png"
    alt="Controller Name Change"
    width="600"
/>

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

:::danger Importance of Backups

We highly recommend to only send small amounts of LYX to the controller of your extension and ensure to **save their private keys**. You can display and copy them by _revealing the private key_ within the _Settings_ screen. This backup is essential as every extension has an individual controller. If you import or recover the profile without saving the previous private key, you cannot [get back your controller funds](./get-controller-funds.md) after.

:::

Once the extension's controller is funded with LYX, you can select it within the transaction screen of the Universal Profile Extension:

<div style={{textAlign: 'center'}}>

<img
    src="/img/extension/transaction-controller-setting.png"
    alt="Transaction Controller Setting"
    width="400"
/>

</div>

:::success Default Payment

Once your funded controller is selected in the extension, it will stay as default payment option for transactions until its changed back to the Transaction Relay Service.

:::

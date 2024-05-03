---
sidebar_label: '👛 Set Wallet Recovery'
sidebar_position: 6
description: 'How to set up wallet recovery on the LUKSO Universal Profile Extension?'
---

# Set Wallet Recovery

If you want a personal backup solution for your Universal Profile, you can add another wallet as a recovery controller.

## Preparation

To add a new controller account to your Universal Profile, you will need the [Universal Profile Browser Extension](https://chromewebstore.google.com/detail/universal-profiles/abpickdkkbnbcoepogfhkhennhfhehfn) as well as an [Ethereum wallet with custom network support](../../general/wallet-support.md) installed **in the same [supported browser](../introduction.md#which-browsers-does-the-extension-support)**.

:::tip Wallet Support

The [Wallet Recovery Setup](https://my.universalprofile.cloud/3rd-party/add-recovery) supports **MetaMask** as the wallet. If you experience issues with other wallets, please try again by importing your seed or private key into MetaMask.

:::

After installing both extensions in your browser, you can set up the recovery account. Depending on the wallet, you can either:

- use one of the _default wallet accounts_
- import an _account from a private key_
- connect an _account from your hardware wallet_

Open the wallet and add or select the account from a source of your choice:

<div style={{textAlign: 'center'}}>

<img
    src="/img/extension/3rd-party-import.png"
    alt="3rd-party Account Import"
    width="600"
/>

</div>

:::info Hardware Wallet Support

Hardware wallets can not be connected directly and must be imported into a browser wallet first. If your browser wallet lacks hardware-wallet support, we recommend installing MetaMask and importing the hardware-wallet account there.

:::

## Connect the Extensions

After your recovery account is set in the wallet, head to the [Wallet Recovery Setup](https://my.universalprofile.cloud/3rd-party/add-recovery) and connect both extensions.

![Connect the Extensions](/img/extension/set-recovery-1.png)

## Execute the Controller Transaction

The address of the connected wallet account is then used to execute the controller transaction from the Universal Profile Extension.

![Execute the Controller Transaction](/img/extension/set-recovery-2.png)

After the transaction has been executed, your new recovery controller will be set and will show up in the _Controllers_ menu of the Universal Profile.

:::tip Set Controller Names

By default, the new recovery controller will be named **Recovery key?**. To better distinguish between different controllers, it's recommended to _locally rename the key_ by opening the controller view and clicking the pencil next to its name. You can chose a more specific name like _MetaMask Recovery_ or _Ledger Recovery_. Renaming the controllers won't affect any functionality.

<img
    src="/img/extension/controller-recovery-rename.png"
    alt="Controller Name Change"
    width="600"
/>

:::

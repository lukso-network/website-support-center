---
sidebar_label: '🔐 Recover from 3rd party Wallet'
sidebar_position: 7
description: 'How to recover a Universal Profile using your private key or 3rd-party wallet'
---

# Recover from Wallet

If you've set a **recovery controller** using the [Wallet Recovery Setup](./set-wallet-recovery.md) or have an **existing private key**, you can use these controllers to restore your Universal Profile.

## Preparation

In order to recover your Universal Profile, you will need the [Universal Profile Browser Extension](https://chromewebstore.google.com/detail/universal-profiles/abpickdkkbnbcoepogfhkhennhfhehfn) and an [Ethereum wallet with custom network support](../../general/supported-wallets/wallet-support.md) installed **in the same [supported browser](../../Extension/introduction.md#which-browsers-does-the-extension-support)**.

:::tip Wallet Support

The [Wallet Recovery Setup](https://my.universalprofile.cloud/3rd-party/add-recovery) officially supports **MetaMask** as the wallet. If you experience issues with other wallets, please try again using MetaMask.

:::

Before you can recover your Universal Profile, ensure that:

- **The recovery controller or private key was added to the third-party wallet**: If the connected account that was [set up in the wallet](./wallet-recovery.md#preparation) does not match one of the controllers of the Universal Profile, you won't be able to continue the recovery.
- **The recovery controller has enough LYX/LYXt to execute the recovery**: During the recovery process, the Universal Profile Extension will generate a new controller key that will be added to the wallet's recovery account. To set the controller and permissions, you will have to execute a transaction costing approximately `0.01` LYX/LYXt. The amount can vary based on network usage. Please fund your controller address from an existing and working wallet or Universal Profile.
- **The extension and wallet are set to the same LUKSO network**: Within your wallet, please [add and switch to the LUKSO network](https://docs.lukso.tech/networks/mainnet/parameters#add-lukso-to-wallets). The network must match that of the Universal Profile Browser Extension in order to call and verify the Universal Profile controllers.
- **The Universal Profile has not been imported into the extension**: You can only recover the Universal Profile if it has not been imported into the Universal Profile Extension already. If the profile already exists, please use a different browser or carefully check if the extension can be reinstalled without losing access to other profiles. You should only delete the extension if you don't have any other profiles, backed up all private keys from the settings screen, or have 2FA or wallet recovery set on all the other profiles.

:::info Using Hardware Wallets

If you are using a hardware wallet to recover your Universal Profile, please ensure that the correct security settings are enabled. For Ledger, you must allow **blind signing** within the Ethereum app on the device to execute smart contract transactions like the recovery. If you are using Trezor, you will have to adjust the [strict security rules](../../general/supported-wallets/hardware-wallets.md#how-to-send-transactions-using-trezor-wallet) due to the network ID.

:::

:::caution Restarting the Recovery Process

The recovery transaction will be sent **after the profile is imported**. As already existing profiles in the extension can not be recovered, this might cause problems if the process needs to be restarted from scratch. Therefore, please ensure that the controller address is funded with enough LYX/LYXt and can easily be retried. Otherwise, you might have to reinstall the extension. After recovering a profile, the remaining funds can be [sent back to one of your accounts](../../Extension/guides/get-controller-funds.md).

:::

## Connect and Import

After all requirements are met, head to the [Wallet Recovery](https://my.universalprofile.cloud/3rd-party/recover) and search for the Universal Profile you want to recover. Next, you will have to connect your wallet. The recovery service will then check if the connected account is permitted to recover the Universal Profile by adding a new controller. If so, you can import your profile. By starting the import, the extension will generate a new controller key, which must be granted permission afterward.

![Connect the Extensions](/img/extension/recover-up-1.png)

## Set the Controller

If the Universal Profile was imported into the extension, you will see that the extension is now awaiting a recovery transaction from one of the existing controllers. By continuing, the recovery service will generate this transaction and add the newly generated extension controller to your profile. After the transaction has been executed, you will have a working extension with access to your Universal Profile.

![Connect the Extensions](/img/extension/recover-up-2.png)

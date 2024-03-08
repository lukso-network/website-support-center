---
sidebar_label: '🔐 Controllers'
sidebar_position: 2
description: 'LUKSO Support: Universal Profile Controllers'
---

# Controllers

## What are the controllers of the Universal Profile?

Each Universal Profile within an extension holds a separate private key to send transactions on behalf of the user, e.g., controlling it. Such controllers can be exported, added, or removed. The controllers can be found within the **Controllers** window of the extension:

<div style={{textAlign: 'center'}}>

<img
    src="/img/extension/controller-window.png"
    alt="Controller Window"
    width="400"
/>

</div>

After the initial creation, there can be up to 3 controllers:

- The Universal Profile Browser Extension (used for profile interactions)
- The Universal Receiver (used to write asset updates on the profile)
- The Universal Profile Recovery (used as a backup for the profile)

:::info Controller Names

The names of the controllers can vary, depending on the time of your Universal Profile setup. The controller of the extension will either be named **UP Extension** or have the **name of it's blockchain address**. The recovery controller can either be named **UP Recovery**, **Create and manage your UP**, or **recovery-up\<number\>**. Every controller can be _renamed locally_ in your extension at any time.

:::

## What happens during imports and recovery?

If you **import or recover** your Universal Profile, it will result in the addition of another **UP Extension** controller. Each extension controller has **individual permissions**. Adding a new controller is done automatically using a transaction, either coming from the 2FA recovery service or sending a transaction from a previously added controller with sufficient permissions. If you never set up 2FA, please ensure that you reveal the private key of an original extension within the _Settings_ screen. This backup file will guarantee access to the profile later on.

:::danger

Please do not **reinstall or reset** your extension if you do not have either of the following safeguards:

- [2FA Recovery set up correctly](./guides/check-2fa-recovery.md)
- [Wallet Recovery](./guides/set-wallet-recovery.md)
- [Revealed the private key using File Export](./guides/create-backup.md)
- Access to the profile within another extension

Otherwise, **you will not be able to access your profile, including LYX and assets**, as no new controller can be added without a transaction from one of the existing ones. Not having access to a working controller will cause endless import screens, waiting for a recovery transaction that can never be signed.

:::

## How can I add 2FA recovery to an existing Universal Profile?

To check the 2FA recovery status and add 2FA, please visit the dashboard on [my.universalprofile.cloud](https://my.universalprofile.cloud/). The Universal Profile card will show the current **2FA recovery status** at the top right corner. If 2FA has not been added yet, continue by clicking the **Add Recovery** button.

![2FA Recovery Dashboard](/img/general/recovery-dashboard.png)

:::warning

Each extension has its own controller, and each controller has its own private key. Any controller is sufficient for recovering your Universal Profile as long as it has the right permissions.

After the recovery process, you will see in the extension the private key corresponsing to the **current** controller. The initial controller which was in your first browser extension is not carried over during the recovery process. Therefore, **before performing recovery please make sure to back up your private key, otherwise any funds associated with the initial controller will be lost**.

:::

:::info

The 2FA recovery feature is only available for Universal Profiles directly created on [universalprofile.cloud](https://my.universalprofile.cloud/) and that can still be accessed within a Universal Profile Browser Extension. If you lost access before adding 2FA recovery, you can only recover the Universal Profile by using **File Backup**.

:::

:::note Dashboard Refresh

If the dashboard is not showing the _recovery indicators_ or _Add Recovery_ button, please **refresh or disconnect** and log-in again using your Universal Profile Browser Extension.

:::

## Can I use a regular wallet to control my Universal Profile?

As a developer, you can connect a regular wallet to the network where the Universal Profile was deployed and **manually add its EOA** as a controller. You will then have to send all transactions through the [Key Manager](https://docs.lukso.tech/standards/universal-profile/lsp6-key-manager../../standards/universal-profile/lsp6-key-manager) of the Universal Profile to execute them as your persona. However, we recommend directly using the [Universal Profile Extension](https://docs.lukso.tech/install-up-browser-extension) to interact with dApps on LUKSO.

## Can I use an existing EOA to control my Universal Profile?

You can add any new or existing Externally Owned Account as a controller to your deployed Universal Profile of a specific chain. This also includes already existing keys from wallets. However, please remember that your previous assets and token remain on the EOA address.

## What are the default permissions of the controllers?

If you want to reset the controller permissions to their initial state, you can set the permissions to the default values described in the following pictures:

<details>
    <summary>Show default permissions of the Universal Profile Extension</summary>

![Default Permissions of the Universal Profile Extension](../../static/img/extension/default-permission-up-extension.png)

</details>

<details>
    <summary>Show default permissions of the Universal Receiver</summary>

![Default Permissions of the Universal Receiver](../../static/img/extension/default-permission-universal-receiver.png)

</details>

<details>
    <summary>Show default permissions of the Universal Profile Recovery</summary>

![Default Permissions of the Universal Profile Recovery](../../static/img/extension/default-permission-up-recovery.png)

</details>

## Can I add a Ledger account as a controller of my profile?

Yes, you can add blockchain accounts or hardware wallets (like Ledger or Trezor) for recovery using the [Wallet Recovery Setup](../extension/guides/set-wallet-recovery.md).

## How can I remove controllers and permissions?

To remove permissions, use the extension to view all controllers with permissions on the profile. You can toggle off permissions individually. Controllers can not be removed completely via the extension. Controllers without permissions will continue to show but with a `No control` label.

:::success Upcoming Feature

The team is currently working on a [feature request](../general/feature-requests.md) to _completely remove old controllers_, not only their individual permissions.

:::

:::caution Changing Permissions

Be cautious when modifying permissions, as this might restrict access for recovery methods or extensions. For reference, you can look at the [default permissions](#what-are-the-default-permissions-of-the-controllers) of all the different controllers.

:::

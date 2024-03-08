---
sidebar_label: '📥 Create Backup'
sidebar_position: 2
description: 'Extension Support: Create Backup'
---

# Create Backup

If you lost access to the Universal Profile Browser Extension, there are multiple ways to secure your Universal Profile :

- **2FA Recovery**: You can set up 2FA for the Universal Profile on [my.universalProfile.cloud](https://mw.universalprofile.cloud/). 2FA is the recommended way of backing up a Universal Profile and will add a new recovery controller to the profile, secured on LUKSO's end. The recovery controller has permissions to add additional controllers if access to an old extension is lost. For security reasons, users must provide an authentication code from a mobile device and approve via email before a new controller can be added using LUKSO's recovery service.
- **Wallet Recovery**: You can give recovery rights to an other blockchain account or controller on [my.universalProfile.cloud](https://mw.universalprofile.cloud/). This blockchain account then gains permissions to add additional controllers if access to an old extension is lost. Wallet recovery can also be used if you want to regain access to your Universal Profile using the revealed private key of the profile's extension controller.
- **QR Import**: You can import any Universal Profile address into your extension. The import process will create a new local controller. Before it can can be used, the new controller needs to added to the Universal Profile by one of your existing controllers with sufficient permissions. Within the new extension, you will receive a QR code of a transaction that can be scanned or copied. When this QR code is received and the related transaction executed by an existing extension, this new controller will gain permissions on the Universal Profile.
- **File Export**: Within the Settings screen, you can export all private keys of the Universal Profile of an extension as text. Make sure to export the text into a file and store it safe. Those private keys will allow anyone to regain access to the profiles based on the controller's permissions.

:::info Individual 2FA Controllers

Please note that each Universal Profile has to add a **separate** [UP Recovery controller](../controllers.md) to [complete the 2FA recovery setup](./check-2fa-recovery.md). If you created multiple Universal Profiles through [UniversalProfile.cloud](https://universalprofile.cloud/), please ensure that you **add the 2FA Recovery** during **every single** deployment process. The connected account and authentication code will stay the same across all profiles of one network and is used to authenticate on the LUKSO Transaction Relay Service.

:::

:::tip

To reduce risk of losing access, we **recommend** setting up **[2FA](../controllers.md#how-can-i-add-2fa-recovery-to-an-existing-universal-profile)** or **[Wallet Recovery](./set-wallet-recovery.md)**.

:::

:::danger Paused Import Functionality

**QR Import** is currently disabled due to the recent [Controller Recovery Incident](../incidents/controller-recovery.md)

:::

:::danger Securing Controllers

Due to the nature of [backups and recovery](../controllers.md#what-happens-during-imports-and-recovery), the **controllers of an extension will not be included within 2FA recovery**. If you [fund the extension's controllers](./fund-controller.md) to pay for your transactions, please **always reveal the private key**, e.g., choose **File Export**. Otherwise, you won't be able to [get your controller funds back](./get-controller-funds.md).

:::

## 2FA Recovery Walkthrough

<div class="video-container">
<iframe src="https://www.youtube.com/embed/rbIqA7N6Fn4?si=2mfC8_0AG6JD-7e3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

## Frequently Asked Questions

### Are 2FA backups secured in a decentralized manner?

The 2FA recovery system for Universal Profiles on [my.universalprofile.cloud](https://my.universalprofile.cloud/) is operated from LUKSO. It is not decentralized but is a mix of Web2 and Web3 security measures. Initially, a recovery controller is added to the smart contract of the Universal Profile, only [having minimal permissions](../controllers.md) to add a new controller address. This controller key is stored and secured by LUKSO. The UP Recovery service can only add new controllers to a Universal Profile if the user gives permissions using his authenticator code and email login. When the UP Recovery process is initiated, a new controller key is generated in the user's local browser extension. After receiving the approval from the linked 2FA, the UP Recovery service builds a transaction, adding the previously generated controller to the Universal Profile. This transaction is then executed from the recovery controller and sent to the LUKSO Transaction Relay Service, which automatically executes the transaction on behalf of the user.

### Is there a fully decentralized backup method?

If you do not trust 2FA and want an autonomous backup, you can restore your Universal Profile by [recovering from a private key](./wallet-recovery.md) add by adding additional recovery controllers using the [Wallet Recovery Setup](./set-wallet-recovery.md).

---
sidebar_label: '📥 Create Backup'
sidebar_position: 2
description: 'Extension Support: Create Backup'
---

# Create Backup

If you lost access to the Universal Profile Browser Extension, there are multiple ways to secure your Universal Profile :

- **2FA**: You can set up 2FA while creating the Universal Profile on [UniversalProfile.cloud](https://universalprofile.cloud/). 2FA is the recommended way of backing up a Universal Profile and will add a new recovery controller to the profile, secured on LUKSO's end. This controller has permission to add new controllers if access to an old extension is lost. For security reasons, users must provide an authentication code from a mobile device and approve via email before a new controller can be added using LUKSO's recovery service.
- **QR Import**: You can import any Universal Profile address into your extension. The import process will create a new local controller. Before it can can be used, the new controller needs to added to the Universal Profile by one of your existing controllers with sufficient permissions. Within the new extension, you will receive a QR code of a transaction that can be scanned or copied. When this QR code is received and the related transaction executed by an existing extension, this new controller will gain permissions on the Universal Profile.
- **File Export**: You can export the Universal Profile directly as a text file, including the private key of the extension's controller. Make sure to store it somewhere safe. This private key will allow you to regain access to the profiles and their current controllers within the Universal Profiles.

:::info Individual 2FA Controllers

Please note that each Universal Profile has to add a **separate** [UP Recovery controller](../controllers.md) to [complete the 2FA recovery setup](./check-2fa-recovery.md). If you created multiple Universal Profiles through [UniversalProfile.cloud](https://universalprofile.cloud/), please ensure that you **add the 2FA Recovery** during **every single** deployment process. The connected account and authentication code will stay the same across all profiles of one network and is used to authenticate on the LUKSO Transaction Relay Service.

:::

:::danger Paused Import Functionality

**QR Import** is currently disabled due to the recent [Controller Recovery Incident](../incidents/controller-recovery.md)

:::

:::caution

The Universal Profile Browser Extension currently does not feature a way to import profiles using the plain private key described in _File Export_. Therefore, we **recommend setting up 2FA** during creation. Optionally, the private key of a controller (EOA) could be imported into a regular wallet to send transactions manually. You can find further information in the [Controller](../controllers.md) section.

:::

## 2FA Recovery Walkthrough

<div class="video-container">
<iframe src="https://www.youtube.com/embed/rbIqA7N6Fn4?si=2mfC8_0AG6JD-7e3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

## Frequently Asked Questions

### Are 2FA backups secured in a decentralized manner?

The 2FA recovery system for Universal Profiles on [my.universalprofile.cloud](https://my.universalprofile.cloud/) is operated from LUKSO. It is not decentralized but is a mix of Web2 and Web3 security measures. Initially, a recovery controller is added to the smart contract of the Universal Profile, only [having minimal permissions](../controllers.md) to add a new controller address. This controller key is stored and secured by LUKSO. The UP Recovery service can only add new controllers to a Universal Profile if the user gives permissions using his authenticator code and email login. When the UP Recovery process is initiated, a new controller key is generated in the user's local browser extension. After receiving the approval from the linked 2FA, the UP Recovery service builds a transaction, adding the previously generated controller to the Universal Profile. This transaction is then executed from the recovery controller and sent to the LUKSO Transaction Relay Service, which automatically executes the transaction on behalf of the user.

### Is there a fully decentralized backup method?

If you do not trust 2FA and want an autonomous backup, users can choose the **File Export**. This process reveals the private key of the extension's controller. Please ensure that the revealed private key is stored somewhere safe.

:::success Upcoming Feature

Currently, the extension does not support importing profiles based on a private key. This [feature request](../../general/feature-requests.md) will soon be integrated into the Universal Profile Browser extension. A similar tool will allow you to manually add controllers from an existing private key, making it possible to add a hardware wallet as a recovery controller.

:::

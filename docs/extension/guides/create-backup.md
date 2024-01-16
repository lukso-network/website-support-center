---
sidebar_label: '🔒 Create Backup'
sidebar_position: 2
description: 'Extension Support: Feature Requests'
---

# Create Backup

If you lost access to the Universal Profile Browser Extension, there are multiple ways to secure your Universal Profile :

- **2FA**: You can set up 2FA while creating the Universal Profile on [UniversalProfile.cloud](https://universalprofile.cloud/). 2FA is the recommended way of backing up a Universal Profile and will add a new recovery controller to the profile, secured on LUKSO's end. This controller has permission to add new controllers if access to an old extension is lost. For security reasons, users must provide an authentication code from a mobile device and approve via email before a new controller can be added using LUKSO's recovery service.
- **QR Import**: You can import any Universal Profile address into your extension. The import process will create a new local controller. Before it can can be used, the new controller needs to added to the Universal Profile by one of your existing controllers with sufficient permissions. Within the new extension, you will receive a QR code of a transaction that can be scanned or copied. When this QR code is received and the related transaction executed by an existing extension, this new controller will gain permissions on the Universal Profile.
- **File Export**: You can export the Universal Profile directly as a text file, including the private key of the extension's controller. Make sure to store it somewhere safe. This private key will allow you to regain access to the profiles and their current controllers within the Universal Profiles.

:::caution

The Universal Profile Browser Extension currently does not feature a way to import profiles using the plain private key described in _File Export_. Therefore, we recommend setting up 2FA during creation or importing the profile into another browser extension via a QR code. Optionally, the private key of a controller (EOA) could be imported into a regular wallet to send transactions manually.

:::

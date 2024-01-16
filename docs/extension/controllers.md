---
sidebar_label: '🔐 Controllers'
sidebar_position: 2
description: 'LUKSO Support: Universal Profile Controllers'
---

## What are the controllers of the Universal Profile?

Each Universal Profile within an extension holds a separate private key to send transactions on behalf of the user, e.g., controlling it. Such controllers can be exported, added, or removed. The controllers can be found within the **Controllers** window of the extension:

<img
    src="/img/extension/controller-window.png"
    alt="Controller Window"
    width="400"
/>

## Can I add 2FA recovery to an existing Universal Profile?

At the current state (11th January 2024), the 2FA recovery method from LUKSO can only be added during the creation of a Universal Profile on [UniversalProfile.cloud](https://universalprofile.cloud/).

:::info Upcoming Update

Due to the [Controller Incident](./incidents/controller-recovery.md) of the Universal Profile Extension in January 2024.

:::

## Can I use a regular wallet to control my Universal Profile?

As a developer, you can connect a regular wallet to the network where the Universal Profile was deployed and **manually add its EOA** as a controller. You will then have to send all transactions through the [Key Manager](../../standards/universal-profile/lsp6-key-manager) of the Universal Profile to execute them as your persona. However, we recommend directly using the [Universal Profile Extension](/install-up-browser-extension) to interact with dApps on LUKSO.

## Can I use an existing EOA to control my Universal Profile?

You can add any new or existing Externally Owned Account as a controller to your deployed Universal Profile of a specific chain. This also includes already existing keys from wallets. However, please remember that your previous assets and token remain on the EOA address.

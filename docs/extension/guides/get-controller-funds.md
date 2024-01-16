---
sidebar_label: '💰 Get Controller Funds'
sidebar_position: 3
description: 'Extension Support: Get Controller Funds'
---

## Get Controller Funds

There is currently no way to get back funds from the controller directly within the extension. If you want to pay for your transactions instead of using any Relay Service, we recommend only sending minimal LYX, e.g., `0.1 LYX`.

However, as the controllers of your Universal Profile are regular wallet accounts, these can be imported into any other Ethereum wallet with custom network support. To get back funds from a controller, please open the Settings and reveal your private key of the related Extension controller.

<img
    src="/img/extension/reveal-private-key.png"
    alt="Reveal Private Keys"
    width="300"
/>

:::caution Controller Export

Every profile within the Universal Profile Extension has separate controllers. If you manage multiple Universal Profiles within the extension, make sure to select the correct controller's private key. **Never share the revealed private keys with anyone**.

:::

After you receive your private key, import this account to an Ethereum wallet with custom network support (e.g., MetaMask). Within the wallet, [add the LUKSO network](https://docs.lukso.tech/networks/mainnet/parameters#add-lukso-to-wallets) using the official network parameters. You will see the controller's funds after the network is added and selected. You can continue copying your Universal Profile's address and sending the LYX back. The imported account can be removed from the wallet after completing this process.

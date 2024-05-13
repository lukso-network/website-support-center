---
sidebar_label: '🛡️ Hardware Wallets'
sidebar_position: 3
description: LUKSO Hardware Wallet Support
---

# Hardware Wallets

## Can I use hardware wallets to store LYX?

Yes, you can use hardware wallets on the LUKSO network. [Ledger](https://www.ledger.com/) provides official support on Ledger devices and Ledger Live software. You can find more information in their [LYX Onboarding Guide](https://support.ledger.com/hc/en-us/articles/15847276545053). If you use the same Ethereum address for LUKSO and other networks, those will show up as separate accounts but share the same private key and address.

You can also send and receive assets using any other Ethereum hardware wallet, such as or [Trezor](https://trezor.io/), that can be connected to a browser-based wallet like [MetaMask](https://metamask.io/), [Rabby](https://rabby.io/), or [Rainbow](https://rainbow.me/). To see your LYX, you must [add the LUKSO Mainnet as a custom network](https://docs.lukso.tech/networks/mainnet/parameters#add-lukso-to-wallets).

:::info Network ID

MetaMask might show a _network duplication warning_. This is because the chain ID of the LUKSO mainnet (`42`) equals the Kovan testnet of Ethereum. The reference might be updated soon. It is nothing to worry about, if you _ensured the official network parameters_.

:::

## How to send transactions using Trezor wallet?

It can happen that the Trezor device will abort the transaction window right after it appeared, without showing any further notice or warning. This is not an issue of the browser wallet or LUKSO extension, but related to security settings on your Trezor device.

Trezor users have to **turn off** _Strict Trezor Safety Checks_ to use the standard derivation path on the [LUKSO network](https://docs.lukso.tech/networks/mainnet/parameters/) with `ID 42`. This network ID was previously used for the [deprecated Kovan Test Network](https://etherworld.co/2022/05/04/ethereum-testnets-after-the-merge/) of Ethereum, which shut down in late 2022. Trezor still checks for such testnet IDs, so regular users are not falling for modified network transactions.

Follow these steps to solve the issue:

1. _Connect_ Trezor to _Trezor Suit_
2. Move into the _Device_ section within the _Settings_
3. Click on **Edit** _Security Checks_
4. Allow _Potentially Unsafe Actions_ by manual approval from the Trezor device.
5. Apply and **Save** changes

:::caution Security Permissions

Be careful with using your hardware wallet as enabled unsafe actions might include mismatched keys or allowing extreme network charges. If you only want to send a transaction on LUKSO once, but are using Trezor regularly, **we highly recommend turning this setting on again after the transaction went through**.

:::

---
sidebar_label: '👉🏻 Introduction'
sidebar_position: 1
description: Support for LUKSO Extension
---

# Support for LUKSO Extension

## Where can I download the Universal Profile Extension?

You can download the Universal Profile Extension from the [Chrome Store](https://chromewebstore.google.com/detail/universal-profiles/abpickdkkbnbcoepogfhkhennhfhehfn?pli=1).

## Which browsers does the extension support?

Currently, the Universal Profile Extension only supports [Chrome](https://www.google.com/intl/en/chrome) and [Brave](https://brave.com/).

:::caution Using Unsupported Browsers

Using unsupported browsers might result in broken interfaces or the extension not being recognized by dApps. We highly recommend to wait until official support is extended.

:::

## Whats the best way to use LUKSO?

It's suggested to use the [Universal Profile Extension](https://docs.lukso.tech/install-up-browser-extension) while interacting with apps and services on LUKSO. The extension offers you a much more user-friendly and feature-rich experience than you would get using regular wallets.

## Is the Universal Profile Extension a wallet?

The Universal Profile Extension should _not be classified as a wallet_. While connected Universal Profiles can store assets, the extension serves as a comprehensive center for your blockchain interactions and reflects your on-chain persona with much more capabilities than just holding assets. Each Universal Profile within an extension holds a separate private key that can be exported into any regular Ethereum wallet.

:::info Wallet dApp

If you use the Universal Profile Browser Extension to store assets and token, please connect to [UniversalProfile.cloud](https://universalprofile.cloud/) and visit your pfoile page to see your portfolio and send funds.

:::

## Will the extension affect other wallets in the browser?

The extension injects into the blockchain provider, which may occasionally result in the _Universal Profile Extension_ appearing instead of other wallets. If this is not wanted, users can manually disable the extension within the [extension settings](https://support.google.com/chrome_webstore/answer/2664769?hl=en) of the browser. However, the extension **does not affect or modify the functionality of other wallets**.

## How does the extension store and verify the password?

The password of the Universal Profile Extension is used to encrypt the private keys of your controllers. These encrypted private keys are stored in your local browser. The password is only temporarily stored in memory when the keys are encrypted during login. If the wrong password is entered, the decryption will fail, indicating an incorrect password.

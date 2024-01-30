---
sidebar_label: '👛 Wallet Support'
sidebar_position: 2
description: LUKSO Wallet Support
---

# Wallet Support

## Which wallets are supported on LUKSO?

LUKSO is an EVM-compatible network, meaning **any Ethereum wallet that allows custom networks** can be used to send transactions and store LYX. Please ensure you are using the [Official LUKSO Parameters](https://docs.lukso.tech/networks/mainnet/parameters) when you add the network.

Here you can find guides on how to add a custom network to supported browser wallets:

- [**MetaMask**](https://metamask.io/): [How to add a custom network to MetaMask](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC)
- [**Rabby**](https://rabby.io/): [How to set up a custom network provider on Rabby](https://www.quicknode.com/guides/ethereum-development/wallets/how-to-set-a-custom-provider-in-rabby)
- [**Rainbow**](https://rainbow.me/): [How to add a custom network to Rainbow](https://rainbow.me/th/support/extension/custom-networks-on-the-browser-extension)
- [**Coinbase Wallet**](https://www.coinbase.com/wallet): [How to add custom networks on Coinbase Wallet](https://www.coinbase.com/de/learn/wallet/How-to-add-custom-networks-Coinbase-Wallet)
- [**Trust Wallet**](https://trustwallet.com/): [How to add a custom network on Trust Wallet](https://community.trustwallet.com/t/how-to-add-a-custom-network-on-the-trust-wallet-mobile-app/626781)

:::info Universal Profiles

If you want to use LUKSO Universal Profiles and get all the benefits from using a [smart account extension](https://medium.com/lukso/aa-is-not-coming-aa-is-here-4d87b12ba11a), <br/> please use the [LUKSO Universal Profile Extension](https://my.universalprofile.cloud).

:::

## What to do when the transaction fails with a nonce error?

Your transactions on LUKSO might fail due to a nonce error within your regular wallet. The issue mainly comes from the wallet (like MetaMask) not properly synchronizing the nonce for custom networks that have been set.

:::info Nonce

In Ethereum networks, a nonce is a number used to keep track of transactions sent from a specific wallet address. It ensures that each transaction is unique and processed only once, helping prevent double-spending and maintaining the order of transactions. It's like a serial number for transactions from a specific account.

:::

To fix the nonce issue, please [clear your account activity in MetaMask](https://support.metamask.io/hc/en-us/articles/360015488891-How-to-clear-your-account-activity-reset-account) or wallet of your choice.

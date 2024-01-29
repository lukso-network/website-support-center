---
sidebar_label: '👉🏻 Introduction'
sidebar_position: 1
description: Support for LUKSO LYXe Migration
---

# Support for LYXe Migration

## How can I migrate LYXe to LYX?

You can migrate LYXe to LYX using the official [Migration Bridge](https://migrate.lukso.network/). Please check the `lukso.network` domain in order to guarantee that you are on the official app, before connecting your wallet.

## What is the minimal amount that can be bridged?

You need at least 1 LYXe within your connected wallet to start the migration. You can send any decimal values.

## How much will it cost to migrate the LYXe?

Since LYXe is managed on Ethereum, you will need some ETH to cover the Gas costs of the transaction when using the migration dApp. The transfer will cost less than 200k Gas, corresponding to [an average](https://etherscan.io/gastracker) of 0,004 ETH. Remember that these prices can fluctuate if the network is at capacity.

## Where will the LYX be migrated to?

The LYX will be sent to the same blockchain address (account/wallet) used during the migration. Within supported exchanges, the accounts will automatically be updated from LYXe to LYX if they have not been manually transferred to external wallets.

## How long will the LYXe migration be open for?

The migration process started on the 4th of July, 2023. As stated in the [Migration Article](https://medium.com/lukso/the-lyxe-migration-process-374053e5ddf5) the bridge is planned to stay open up to 4 years until July 2027, allowing anyone to migrate. The Foundation for the New Creative Economies can pause the migration bridge. Please refer to the official announcements from the [LUKSO Twitter Account](https://twitter.com/lukso_io).

## Will LYXe be deprecated when migration closes?

Since LYXe is the official representation of LYX on Ethereum that was used to power off the [rICO](https://medium.com/lukso/re-launching-the-reversible-ico-5289989ce7ed), the token itself will exist forever. However, we can not guarantee any price differences from LYXe to LYX after they can not be migrated anymore.

## What can be done about high gas fees on MetaMask?

If you encounter high gas fees when migrating LYXe to LYX, there could be several reasons for this:

- **Nonce-related**: Please re-try to migrate your LYXe using your browser wallet after **resetting your wallet activity**. Transaction problems might be related to the nonce not being updated correctly, letting the transaction fail, or raising its gas. Here you can find an example guide: [How to reset the activity on MetaMask](https://support.metamask.io/hc/en-us/articles/360015488891-How-to-clear-your-account-activity-reset-account).
- **Gas-related**: If you only have a small amount of Ether to pay for the migration on Ethereum, MetaMask may estimate the gas a bit higher than your balance, causing very high gas fees of more than 0.5 ETH, instead of the regular 0.01 ETH. To solve the issue, please **make sure your wallet has enough Ether to pay for the transaction** at the current [transaction prices](https://etherscan.io/gastracker). You can also adjust the transaction speed to be on the lower end.
- **Browser-related**: Some users managed to migrate with regular gas fees using a new browser like Microsoft Edge and Brave. Therefore, please try to import your private key or connect your hardware wallet to a MetaMask wallet in a new desktop browser. The environment change will reset potential settings and cached data.

:::success Comparing Gas Fees

If you are curious of what the average gas price should be, you can **compare the gas fees** of your transaction with the [latest executed migration transactions](https://etherscan.io/address/0xdE000042830A211533662637fE66760f1F2cD717#tokentxns) on Ethereum.

:::

:::info Previous Rounding Issue

There used to be a issue within the migration frontend which would not round the LYXe amount properly when trying to send the maximum amount of LYX the wallet holds. The rounding issue caused the system to send slightly more LYXe than the balance of the wallet, resulting in extremely high gas fees because of the invalid transaction. Instead of migrating the total amount of LYX, one solution was to remove the last digit of the decimals by only migrating `1.12345678` instead of `1.123456789` LYXe.

**This issue has been resolved on December 18th, 2024. Users do not have to round down their LYXe amounts**.

:::

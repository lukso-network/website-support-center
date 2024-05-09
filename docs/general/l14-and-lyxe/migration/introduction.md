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

### What can be done about high gas fees on MetaMask?

There used to be a frontend glitch which would not round the LYXe amount properly when using the "max button". This would cause the system to try to send slightly more LYXe than the balance of your wallet further causing extremely high gas fees because of an obviously wrong transaction. This issue is now solved and there is no need to round down the value anymore.

If you encounter high gas fees when migrating LYXe to LYX, there could be several reasons for this:

- **Nonce-related**: Please re-try to migrate your LYXe using your browser wallet after **resetting your wallet activity**. Transaction problems might be related to the nonce not being updated correctly, letting the transaction fail, or raising its gas. Here you can find an example guide: [How to reset the activity on MetaMask](https://support.metamask.io/hc/en-us/articles/360015488891-How-to-clear-your-account-activity-reset-account).
- **Gas-related**: If you only have a small amount of Ether to pay for the migration on Ethereum, MetaMask may estimate the gas a bit higher than your balance, causing very high gas fees of more than 0.5 ETH, instead of the regular 0.01 ETH. To solve the issue, please **make sure your wallet has enough Ether to pay for the transaction** at the current [transaction prices](https://etherscan.io/gastracker). You can also adjust the transaction speed to be on the lower end. You can see [previous deposit transactions](https://etherscan.io/address/0xdE000042830A211533662637fE66760f1F2cD717#tokentxns) to get an overview of fees paid by other users.

## What can I do if my wallet is not showing up?

The migration page supports [multiple wallets](docs/general/supported-wallets/wallet-support.md). If you have various wallet extensions installed within your browser, it might happen that instead of MetaMask, other wallets will open up when connecting to [migrate.lukso.network](https://migrate.lukso.network/). To **solve this issue**, please temporarily turn off your other wallet extensions within your browser.

1. **Open the Extension Menu of your browser**: Usually, you will be able to access the extension menu by clicking the 3-Dot-Menu on
   the top right corner, and selecting _Extensions_ or _Manage Extensions_.
2. **Temporary toggle off unused wallets**: You can disable other wallets, only keeping the one you would like to use for migration

After the migration is successful, you can enable other wallets again.

## Where will the LYX be migrated to?

The LYX will be sent to the same blockchain address (account/wallet) used during the migration. Within supported exchanges, the accounts will automatically be updated from LYXe to LYX if they have not been manually transferred to external wallets.

## How long will the LYXe migration be open for?

The migration process started on the 4th of July, 2023. As stated in the [Migration Article](https://medium.com/lukso/the-lyxe-migration-process-374053e5ddf5) the bridge is planned to stay open up to 4 years until July 2027, allowing anyone to migrate. The Foundation for the New Creative Economies can pause the migration bridge. Please refer to the official announcements from the [LUKSO Twitter Account](https://twitter.com/lukso_io).

## Will LYXe be deprecated when migration closes?

Since LYXe is the official representation of LYX on Ethereum that was used to power off the [rICO](https://medium.com/lukso/re-launching-the-reversible-ico-5289989ce7ed), the token itself will exist forever. However, we can not guarantee any price differences from LYXe to LYX after they can not be migrated anymore.

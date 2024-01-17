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

### I'm getting very high gas fees when using MetaMask, what's going on?

There used to be a frontend glitch which would not round the LYXe amount properly when using the "max button". This would cause the system to try to send slightly more LYXe than the balance of your wallet further causing extremely high gas fees because of an obviously wrong transaction. This issue is now solved and there is no need to round down the value anymore.

If you are using MetaMask and have very few ETH to pay for the transaction fees, MetaMask may go in a weird gas estimation state where it would also show you very high gas fees (more than 0.5 ETH) vs a normal below 0.01 ETH gas fee. If you are in that situation, please make sure your wallet has enough ETH to pay for the transaction. You can see [previous deposit transactions](https://etherscan.io/address/0xdE000042830A211533662637fE66760f1F2cD717#tokentxns) to get an overview of fees paid by other users.

A few users also reported that using another browser, or profile, or another wallet could solve the high gas issue.

## Where will the LYX be migrated to?

The LYX will be sent to the same blockchain address (account/wallet) used during the migration. Within supported exchanges, the accounts will automatically be updated from LYXe to LYX if they have not been manually transferred to external wallets.

## How long will the LYXe migration be open for?

The migration process started on the 4th of July, 2023. As stated in the [Migration Article](https://medium.com/lukso/the-lyxe-migration-process-374053e5ddf5) the bridge is planned to stay open up to 4 years until July 2027, allowing anyone to migrate. The Foundation for the New Creative Economies can pause the migration bridge. Please refer to the official announcements from the [LUKSO Twitter Account](https://twitter.com/lukso_io).

## Will LYXe be deprecated when migration closes?

Since LYXe is the official representation of LYX on Ethereum that was used to power off the [rICO](https://medium.com/lukso/re-launching-the-reversible-ico-5289989ce7ed), the token itself will exist forever. However, we can not guarantee any price differences from LYXe to LYX after they can not be migrated anymore.

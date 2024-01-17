---
sidebar_label: '🔄 Transaction Process'
sidebar_position: 3
description: 'LUKSO Migration: Transaction Process'
---

# Migration Process

## Will it be possible to migrate LYX back to LYXe?

No, the official [LUKSO Migration Bridge](https://migrate.lukso.network/) acts as a 1-Way-Bridge to migrate LYXe to LYX. A single locking transaction on the Ethereum blockchain automatically triggers the transfer of the equal amount of LYX on the LUKSO blockchain.

## How long does it take to migrate my LYXe?

The token migration usually takes about 10-15min for the transaction to be finalized and the LYX sent to the wallet on the LUKSO mainnet. This time is needed to ensure security throughout every step.

:::danger Current Incident

Due to the current network utilization, the migration process might take longer than expected. Please read more within [Migration Delay January 2024](./incidents/delay-incident.md)

:::

## I'm getting very high gas fees when using MetaMask, what's going on?

There used to be a frontend glitch which would not round the LYXe amount properly when using the "max button". This would cause the system to try to send slightly more LYXe than the balance of your wallet further causing extremely high gas fees because of an obviously wrong transaction. This issue is now solved and there is no need to round down the value anymore.

If you are using MetaMask and have very few ETH to pay for the transaction fees, MetaMask may go in a weird gas estimation state where it would also show you very high gas fees (more than 0.5 ETH) vs a normal below 0.01 ETH gas fee. If you are in that situation, please make sure your wallet has enough ETH to pay for the transaction. You can see [previous deposit transactions](https://etherscan.io/address/0xdE000042830A211533662637fE66760f1F2cD717#tokentxns) to get an overview of fees paid by other users.

A few users also reported that using another browser, or profile, or another wallet could solve the high gas issue.

## What happens with LYXe sent to the LYXe contract?

Any account that accidentally sent LYXe to the [LYXe Token address](https://etherscan.io/token/0xA8b919680258d369114910511cc87595aec0be6D) on Ethereum will [receive the equal amount of LYX](https://medium.com/lukso/the-lyxe-migration-process-374053e5ddf5) on the LUKSO Blockchain.

## How can I see my transaction and LYX?

You can check your balance using the [LUKSO Mainnet Block Explorer](https://explorer.execution.testnet.lukso.network/) and searching for your address.

If you want to see the balance within your wallet, you can add LUKSO to your wallet by manually adding the RPC endpoint as described within our official [Network Properties](https://docs.lukso.tech/networks/mainnet/parameters).

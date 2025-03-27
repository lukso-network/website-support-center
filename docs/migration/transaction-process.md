---
sidebar_label: '🔄 Transaction Process'
sidebar_position: 3
description: 'LUKSO Migration: Transaction Process'
---

# Migration Process

## Will it be possible to migrate LYX back to LYXe?

No, the official [LUKSO Migration Bridge](https://migrate.lukso.network/) acts as a 1-Way-Bridge to migrate LYXe to LYX. A single locking transaction on the Ethereum blockchain automatically triggers the transfer of an equal amount of LYX on the LUKSO blockchain.

## How long does it take to migrate my LYXe?

The token migration usually takes about 10-15min for the transaction to be finalized and the LYX sent to the wallet on the LUKSO mainnet. This time is needed to ensure security throughout every step.

## How can I make sure that the migration was successful?

You can check your LYX balance using the [LUKSO Mainnet Block Explorer](https://explorer.execution.testnet.lukso.network/), searching for your address.

## I cannot see the LYX in my wallet after the migration

If you want to see the LYX balance displayed in your wallet, you can add LUKSO to your wallet as a custom network using the details from [Network Properties](https://docs.lukso.tech/networks/mainnet/parameters).

## What can I do when my transaction status stalls?

The migration transaction might be correctly executed on Ethereum and LUKSO, but the status is not updated on the [migration application](https://migrate.lukso.network/) in the browser. If you want to send a new transaction and already verified that the transaction has been executed, please reset [your browser history](https://support.google.com/accounts/answer/32050?hl=en&co=GENIE.Platform%3DDesktop) and re-open the page. You will be brought to the home screen again without any pending state.

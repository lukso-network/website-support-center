---
sidebar_label: 'January 2024'
sidebar_position: 1
---

# January 2024 Incident

On the 14th of January 2024, a sudden change in the LUKSO mainnet blockchain activity, following the [release of a very gas intensive NFT project](https://twitter.com/feindura/status/1746262322950083047), created a wave of pending transactions from our migration system.

This resulted in a longer than usual processing time (from below 20min to few days) as the migration transactions were sent with a very low gas price (1.5gwei).

The pending migration transactions can be monitored from the [migration account](https://explorer.execution.mainnet.lukso.network/address/0xc125fc4f3295dc891e909c56ad7ceb494e9f9644).

:::info

No deposited LYXe is lost or at risk. User migrations will be processed when the speed up fix will be deployed.

:::

## Actions taken

- Jan 15th, 5:51pm UTC: the gas fees logic has been improved to handle the variations in gas price.
- Jan 16th, 1pm UTC: the deposit frontend has been paused to prevent further deposits.

## Upcoming actions

The following transactions are stuck with a low gas price, the engineering team is working on a system update to increase the gas price of these pending transactions:

- [`0x9b7431f876dd3c50d78a1351fccfa109e590e51e1e647f45c0c37922cb1f6b03`](https://explorer.execution.mainnet.lukso.network/tx/0x9b7431f876dd3c50d78a1351fccfa109e590e51e1e647f45c0c37922cb1f6b03) (nonce `3531`)
- [`0xbd9834db6abcdaa11c3b79c8f6bc209a3d1cf68407d084d4a90dc8a49c55dd64`](https://explorer.execution.mainnet.lukso.network/tx/0xbd9834db6abcdaa11c3b79c8f6bc209a3d1cf68407d084d4a90dc8a49c55dd64) (nonce `3532`)
- [`0x83379bfc82feec1de45a715c9d2c0c5dd507fcde3af9db44805265588d012a05`](https://explorer.execution.mainnet.lukso.network/tx/0x83379bfc82feec1de45a715c9d2c0c5dd507fcde3af9db44805265588d012a05) (nonce `3533`)
- [`0x02223747136b50f217a7b5991fa67eef3dedd12628bf507fef43208e7b39cba2`](https://explorer.execution.mainnet.lukso.network/tx/0x02223747136b50f217a7b5991fa67eef3dedd12628bf507fef43208e7b39cba2) (nonce `3534`)

The deposit fontend will be reactived once the pending transactions are processed.

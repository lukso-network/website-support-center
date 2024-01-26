---
sidebar_label: 'Gas Miscalculation'
sidebar_position: 1
description: 'LUKSO Support: Gas Miscalculation'
---

# Gas Miscalculation

:::success Resolved

This incident has been resolved on the 18th of December 2023 at 5:00pm UTC

:::

Since the [migration started on July 4th 2023](https://medium.com/lukso/the-lyxe-migration-process-374053e5ddf5), it sporadically happened that users replied they have incredibly high gas fees, even when the [Ethereum Gas Fees](https://etherscan.io/gastracker) were tracked relatively low. The issue was tracked down and fixed within the front end of the [LUKSO Migration Bridge](https://migrate.lukso.network/). The root cause was a rounding issue when sending LYXe amounts with full decimals.

When the transaction was built from the migration page, this resulted in tremendously high gas fees in MetaMask and other wallets. Users often adjusted their decimals of the LYXe amounts they wanted to transfer, leaving behind an insignificant quantity of LYXe on their Ethereum addresses.

## Actions taken

- July - December: Deployed several adjustments on the gas fee calculation.
- **Dec 18th, 5:00pm UTC: the gas fee calculation on the migration bridge has been fixed. <br/> The fix was applied without any downtime of the migration service. ✅**

:::info

High gas fees might still appear for other reasons. You can find more information within the [Gas Fee Issue](../gas-fee-issues.md) page.

:::

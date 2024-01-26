---
sidebar_label: 'Rounding Issue 2023'
sidebar_position: 1
description: 'LUKSO Support: Rounding Issue'
---

# Rounding Issue 2023

:::success Resolved

This incident has been resolved on the 18th of December 2023 at 5:00pm UTC

:::

Since the [migration started on July 4th 2023](https://medium.com/lukso/the-lyxe-migration-process-374053e5ddf5), it sporadically happened that users replied they have incredibly high gas fees, even when the [Ethereum Gas Fees](https://etherscan.io/gastracker) were tracked relatively low. The issue was tracked down and fixed within the front end of the [LUKSO Migration Bridge](https://migrate.lukso.network/). The root cause was a rounding issue when trying to select the maximum value of LYX the address holds.

The rounding issue would cause the system to try to send slightly more LYXe than the balance of your wallet, resulting in extremely high gas fees because of the invalid transaction. Users often adjusted their decimals of the LYXe amounts they wanted to transfer, leaving behind an insignificant quantity of LYXe on their Ethereum addresses.

## Actions taken

- July - December: Deployed several adjustments on the gas fee calculation.
- **Dec 18th, 5:00pm UTC: the gas fee calculation on the migration bridge has been fixed. <br/> The fix was applied without any downtime of the migration service. ✅**

:::info

High gas fees might still appear for other reasons. You can find more information within the [Gas Fee Issue](../gas-fee-issues.md) page.

:::

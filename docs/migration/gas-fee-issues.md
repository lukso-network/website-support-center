---
sidebar_label: '⛽️ Gas Fee Issues'
sidebar_position: 5
description: Support for LUKSO LYXe Migration
---

# Gas Fee Issues

If you encounter high gas fees when migrating LYXe to LYX, there could be several reasons for this:

- **Nonce-related**: Please re-try to migrate your LYXe using your browser wallet after **resetting your wallet activity**. Transaction problems might be related to the nonce not being updated correctly, letting the transaction fail, or raising its gas. Here you can find an example guide: [How to reset the activity on MetaMask](https://support.metamask.io/hc/en-us/articles/360015488891-How-to-clear-your-account-activity-reset-account).
- **Browser-related**: Some users managed to migrate with regular gas fees using a new browser like Microsoft Edge. Therefore, please try to import your private key or connect your hardware wallet to a MetaMask wallet in a new desktop browser. The environment change will reset potential settings and cached data.
- **Decimal-related**: It could be related to the [Gas Miscalculation Incident](./incidents/gas-miscalculation), still apprearing sporadically. Instead of migrating the total amount of LYX, please try to remove the last digit of the decimals. The adjustment might skip a potential rounding problem on full decimals. Instead of migrating `1.123456789` LYXe, change it to `1.12345678` LYXe.

:::success Comparing Gas Fees

You can compare the gas fees of your transaction with the [latest executed migration transactions](https://etherscan.io/address/0xdE000042830A211533662637fE66760f1F2cD717#tokentxns) on Ethereum.

:::

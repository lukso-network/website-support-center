---
sidebar_label: '❌ Common Mistakes & Misconceptions'
sidebar_position: 4
description: Description of common mistakes and errors that users should understand and prevent from doing
---

# Common Mistakes & Misconceptions

## Mistakes to avoid!

### Can I send Ether / LYXe or any Token from Ethereum to my Universal Profile?

No you cannot send any Ethers, [LYXe (the ERC20 token on Ethereum)](https://etherscan.io/token/0xA8b919680258d369114910511cc87595aec0be6D) or any tokens on Ethereum to your Universal Profile address.

⚠️ **Users who try to send Ether, LYXe or any token on Ethereum to their Universal Profile address will result in their assets / funds being lost and not accessible anymore.**

The reason is because currently Universal Profiles are only deployed on the LUKSO network and your Universal Profile does not exists as a smart contract on the Ethereum network.

:::danger LYXe vs LYX Transactions

‼️⚠️ If you hold LYXe, **do not send them to your Universal Profile's address!**

- LYXe is the token deployed on Ethereum.
- LYX is the native currency of the LUKSO Network

Therefore, you cannot send LYXe to your Universal Profile's address, as your Universal Profile is deployed and only exists on the LUKSO network.

To transfer your LYXe to your UP, **you must first, migrate your LYXe to LYX the [LUKSO Migration Service](https://migrate.lukso.network/)**.

For further details, please visit the [Migration Support](../migration/introduction.md) page.

:::

## Common misconceptions

### Can I control assets using Universal Profiles on any blockchain?

You can manage your assets through a Universal Profile on any blockchain the contract is deployed on. If a service or project would allow you to create Universal Profiles on Ethereum, you could manage your assets through it.

### Is it possible to create a profile with the same address as my wallet?

The Universal Profile is a smart contract account deployed on its own with its own unique address.

Because of the nature of how addresses are created and controlled on a Blockchain, it is not possible to deploy a Universal Profile smart contract at the same EOA address that you own. Deploying a UP cannot _overwrite or have the same address as an existing EOA wallet (browser or hardware wallet)_.

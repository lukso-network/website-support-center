---
sidebar_label: '❓ FAQ'
sidebar_position: 6
description: 'Frequently asked questions'
---

# FAQ

## Does LUKSO have a grants program?

Yes, absolutely! Please go to our main [grants program page](https://lukso.network/grants) for more information and to apply!

## Why can't I delete my old private keys?

At the moment, the Universal Profile Browser Extension only allows to disable permissions of old controller keys. If you want to improve security, please disable all permissions of an old controller. You can learn more within the [Controllers](../../Extension/controllers.md) page. Soon, there will be a feature to manually remove controllers completely.

## Why I can't I see all my controllers?

If you remove all permissions of a controller, it will be automatically hidden within the extension. If you want to temporarily disable some permissions of a controller, please leave one minor permission set for now. This behavior will be changed within the future.

## Why can't I delete profiles from the extension?

Right now, you can not remove profiles from the dashboard on [my.universalprofile.cloud](https://my.universalprofile.cloud/) or the Universal Profile Extension. Soon, there will be a feature to clean old profiles.

## Why does my NFT not show up on UniversalProfile.cloud?

If your deployed assets do not appear on your profile on [universalprofile.cloud](https://universalprofile.cloud/), they may be using outdated InterfaceIDs from deprecated LSP versions. Ensure you are using up-to-date [LSP Interface IDs](https://docs.lukso.tech/contracts/interface-ids) as defined in the [lsp-smart-contracts](https://www.npmjs.com/package/@lukso/lsp-smart-contracts) library.

## Why does my profile show as anonymous?

Due to some changes in how data is added to the Universal Profile in the early days, it might happen that your profile does not have a name to it or shows completely anonymous on [universalprofile.cloud](https://universalprofile.cloud/) without any pictures. If you experience such an issue, please **edit and deploy your profile metadata** again within the Universal Profile Browser Extension as shown in the following picture:

![Edit Universal Profile](/img/general/edit-profile.png)

## Why do Universal Profile transactions show up as internal transactions?

Unlike regular wallets that are Externally Owned Accounts (EOA), a Universal Profile is an account powered by a **smart contract**.

With EOA wallets, _transactions are made directly by the address itself_ (which own the funds like native tokens, ERC20 tokens or NFTs).

With a Universal Profile, transactions are _executed either via a relayer or directly by one of it's controllers_.

When you use your Universal Profile to transfer LYX or any assets (tokens or NFTs), some custom logic must be executed before transferring the asset itself (_this includes checking the permissions, if the UP has enough LYX that it is trying to send, EVM internal logic, etc..._). Therefore the actual _"transfer"_ is part of a larger execution logic. This is the reason why actual LYX and token transfers appear as internal transactions.

In a transaction on the block explorer, you can see the actual transfer being made as part of the **internal transactions**. For example in the screenshot below, you can see the LYX transfer being one of the internal transactions (the other internal transactions before and after are related to what is mentioned above).

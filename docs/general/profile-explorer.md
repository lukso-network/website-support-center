---
sidebar_label: '👩‍🎤 Profile Explorer'
sidebar_position: 6
description: Support Page for the Profile Explorer
---

# Profile Explorer

## Why does my NFT not show up on UniversalProfile.cloud?

If your deployed assets do not appear on your profile on [universalprofile.cloud](https://universalprofile.cloud/), they may be using outdated InterfaceIDs from deprecated LSP versions. Ensure you are using up-to-date [LSP Interface IDs](https://docs.lukso.tech/contracts/interface-ids) as defined in the [lsp-smart-contracts](https://www.npmjs.com/package/@lukso/lsp-smart-contracts) library.

## Why does my profile show as anonymous?

Due to some changes in how data is added to the Universal Profile in the early days, it might happen that your profile does not have a name to it or shows completely anonymous on [universalprofile.cloud](https://universalprofile.cloud/) without any pictures. If you experience such an issue, please **edit and deploy your profile metadata** again within the Universal Profile Browser Extension as shown in the following picture:

![Edit Universal Profile](../../static/img/general/edit-profile.png)

---
sidebar_label: '🪙 Wallet & Assets'
sidebar_position: 2
---

# Wallet & Assets

import React from 'react'
import LoomVideo from '@site/src/components/LoomVideo'

## Transfer Tokens & NFTs from my Univeral Profile

The Universal Profile Extension **does not enable you to transfer tokens directly from the extension itself**.

Instead, it is designed to work with various decentralized applications (dApps) that can seamlessly integrate wallet features in their UI.

You can connect your Universal Profile to [wallet.universalprofile.cloud](https://wallet.universalprofile.cloud/) to send native tokens (LYX) or any token or NFT.

<LoomVideo src="https://www.loom.com/embed/47b4f4e671b248219cac48726358a791?sid=a88bd596-8860-4677-83c9-33384ccfdcb1" />

## Add missing assets not displayed

If your assets are not showing up in your list of Tokens or NFTs on your Universal Profile page, it is likely that the Universal Receiver has not been able to add them in your list of received assets at the time you received them.

You can solve this issue by watching this video or following the steps below.

<LoomVideo src="https://www.loom.com/embed/ff12158265e6482d837d5f9d420b87dd?sid=a88bd596-8860-4677-83c9-33384ccfdcb1" />

<br/>

First, you can check that you have a balance for this asset. To do so, go the [LUKSO block explorer](https://explorer.lukso.network):

1. Type the token name, symbol or paste the address of the asset you are missing.
2. In the next page, click on **"Contract" > tab "Read Contract"**.
3. Open the `balanceOf` function by clicking on it.
4. Paste your UP address under the input field next to `tokenOwner`.
5. Click on the **"Read"** button

If your UP has a balance for this asset, you can process to the next steps below to add the missing asset in your list of received assets for your 🆙.

![Show balance of asset on Blockscout](/img/universalprofilecloud/see-asset-balance-blockscout.png)

### Step 1 - Check that your Universal Receiver Delegate has the right permissions

This step will ensure that the Universal Receiver connected to your Universal Profile is correctly set up with the right permissions, so that it can register any new tokens and NFTs that your UP receives.

1. Open the Universal Profile Browser Extension
2. Click the "controllers" tab
3. Find your "UP Receiver"
4. Check that the permissions **"Profile data"** and **"Re-entrancy"** are switch on. If they are not, switch them on.

### Step 2 - Add the asset not showing on universalprofile.cloud

1. Go to [universalprofile.cloud](https://universalprofile.cloud/) and click on the top right button **"Login"** to connect your UP to the dApp.
2. In the page for your Universal Profile, go to the **"Settings > Add missing assets"** page.

> You can also click on this link to access the page directly 🙂: [Add missing assets](https://universalprofile.cloud/settings/missing-assets)

3. Paste the address of the asset and click on **"Continue"**.
4. In the next screen, click on the **"Add missing asset"** button.
5. A transaction should popup in your UP Browser extension. You can confirm it to add the missing asset.

![Add missing asset input field](/img/universalprofilecloud/add-missing-asset-input-field.png)
![Add missing asset screen](/img/universalprofilecloud/add-missing-asset-screen.png)

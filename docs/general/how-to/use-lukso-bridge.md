---
title: Use the LUKSO Bridge
sidebar_position: 4
---

import ImportTokenSection from '@site/src/components/ImportTokenSection'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Use the LUKSO Bridge

LUKSO uses the Hyperlane Warp UI for the bridging tokens to/from LUKSO Mainnet.

![Bridge UI](../../../static/img/general/bridge_ui.png)

## Prerequisites

Before using the bridge, ensure you have:

1. **A Web3 Wallet**: MetaMask, Rabby, or another compatible wallet
2. **Network Configuration**: The correct network added to your wallet
3. **Native Tokens for**:
   - the amount you want to bridge
   - to pay for the gas fees
   - to pay for the processing fee (Interchain Gas Payment)

## How to Bridge Tokens

**Visit [_Hyperlane NEXUS_](https://usenexus.org/) page** : Make sure to visit the official webpage
![Bridge UI](../../../static/img/general/bridge_ui.png)

### Are you ⤵️

<Tabs>
  <TabItem value="eoa" label={<h3>🌉 Bridging from an EOA wallet?</h3>} default>

1. **Connect Your Wallet**: Connect your Web3 wallet (MetaMask, Rabby, etc.) to the bridge interface
   ![Bridge UI](../../../static/img/general/bridge_ui.png)

---

2. **Select Networks**: Choose the **from**(source) and **to**(destination) networks
   ![Bridge UI](../../../static/img/general/bridge_ui.png)

---

3. **Select Tokens from the dropdown list**: Select **LYX**
   ![Bridge UI](../../../static/img/general/bridge_ui.png)

---

4. **Enter Amount**: Specify the amount of tokens to bridge
   ![Bridge UI](../../../static/img/general/bridge_ui.png)

---

5. **Enter the Recipient Address**: Input the destination wallet address where tokens will be sent
   ![Bridge UI](../../../static/img/general/bridge_ui.png)

---

6. **Confirm Transaction**: Review and confirm the transaction in your wallet
   ![Bridge UI](../../../static/img/general/bridge_ui.png)

---

7. **Follow your status**: Bridge transactions typically take a few minutes

Visit Hyperlane Explorer with your Message ID to see the status of your transaction

![Bridge UI](../../../static/img/general/bridge_ui.png)

---

8. **Import Token**: Use the buttons [**below**](#import-wlyx-to-wallet) to add the bridged token to your wallet

  </TabItem>
  <TabItem value="up" label={<h3>Bridging from a 🆙?</h3>}>

1. **Connect Your Universal Profile**: Connect your UP through the Universal Profile Extension or compatible wallet
   ![Bridge UI](../../../static/img/general/bridge_ui.png)

---

2. **Select Networks**: Choose the **from**(source) and **to**(destination) networks
   ![Bridge UI](../../../static/img/general/bridge_ui.png)

---

3. **Select Tokens from the dropdown list**: Select **LYX**
   ![Bridge UI](../../../static/img/general/bridge_ui.png)

---

4. **Enter Amount**: Specify the amount of tokens to bridge
   ![Bridge UI](../../../static/img/general/bridge_ui.png)

---

5. **Enter the Recipient Address**: Input the destination address

:::warning

Please do not enter a UP address as recipient on Ethereum, otherwise you will lose your tokens

:::

---

6. **Confirm Transaction**: Review and approve the transaction using your UP controller
   ![Bridge UI](../../../static/img/general/bridge_ui.png)

---

7. **Follow your status**: Bridge transactions typically take a few minutes

Visit Hyperlane Explorer with your Message ID to see the status of your transaction

![Bridge UI](../../../static/img/general/bridge_ui.png)

---

8. **Import Token**: Use the buttons [**below**](#import-wlyx-to-wallet) to add the bridged token to your wallet

  </TabItem>
</Tabs>

### --- GIF FOR THE IMPORT ACTION ---

:::tip Import Bridged Tokens to Your Wallet

After bridging tokens, you need to **import wLYX to your wallet** to see your balance.

:::

## Import wLYX to Wallet

wLYX is an ERC20 token on Ethereum. It needs to be imported in your wallet and will be visible under your list of tokens.

<ImportTokenSection />

## Important Notes

- Bridge transactions are irreversible - double-check all details before confirming
- Keep some native tokens for gas fees on both networks
- Bridging times may vary depending on network congestion
- Always verify contract addresses when manually adding tokens

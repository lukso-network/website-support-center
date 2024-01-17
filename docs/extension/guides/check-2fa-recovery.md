---
sidebar_label: '🛟 Check 2FA Recovery'
sidebar_position: 1
description: 'LUKSO Support: How to check 2FA Recovery'
---

# Check 2FA Recovery

If you ever want to recover your profile, a new controller will be added to this Universal Profile from a new extension setup. You must verify multiple steps to check if this new controller can be added to your Universal Profile by the recovery service:

# Verify the recovery controller in your extension

If you visit the controller menu in the Universal Profile Browser Extension, there need to be at least three controllers:

- The Universal Profile Browser Extension (used for profile interactions)
- The Universal Receiver (used to write asset updates on the profile)
- The Universal Profile Recovery (used as a backup for the profile)

To confirm that the permissions of the recovery controller were adequately set up, click on the controller of the Universal Profile Recovery and verify that the **Add Controller** permission is enabled.

<div style={{textAlign: 'center'}}>

<img
    src="/img/extension/2fa-controller.png"
    alt="2FA Controller"
    width="800"
/>

</div>

:::info Controller Names

The names of the controllers can vary, depending on the time of your Universal Profile setup.

:::

## Verify the recovery controller on the profile explorer

Next, we must check if the recovery was successfully added via the LUKSO Relay Service.

1. **Copy the address of your Universal Profile Recovery** from the controller menu of the Universal Profile Extension
2. Open the profile explorer on [UniversalProfile.cloud](https://universalprofile.cloud/?network=mainnet).
3. **Input the address** of the Universal Profile Recovery **into the search bar**.

If it was successfully added, it will show a recovery profile as in the following picture:

<img
    src="/img/extension/recovery-search.png"
    alt="Recovery Search"
    width="500"
/>

:::info Recovery Name

The name of the Universal Recovery controller can vary, depending on the time of your Universal Profile creation.

:::

:::caution

If your Universal Profile Recovery controller is not showing up on [UniversalProfile.cloud](https://universalprofile.cloud/?network=mainnet), please check if you selected the correct network in the bottom left corner of the page.

:::

# Verify the authentication code and email

During the 2FA setup, you will be asked to provide an **email or web account** associated with the recovery process. Verify if you **received the recovery email** and **set up an authenticator code** using one of the supported apps. Additionally, ensure that the 2FA code for the Universal Profile Recovery **can be accessed** on your authenticator app of choice.

:::danger

If you've set up 2FA but one of the verification steps cannot be fulfilled, please reach out within the **SUPPORT & BUGS** category on our Discord server or contact our support at [support@lukso.network](mailto:support@lukso.network) directly.

:::
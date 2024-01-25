---
sidebar_label: '⚙️ Common Errors'
sidebar_position: 3
description: Common Errors
---

# Common Errors

### "Universal Profile is not allowed by this Transaction Relay Service"

This error occurs if a user deployed his Universal Profile through a 3rd party platform that has its own Transaction Relay Service (like [_Universal.Page_](https://universal.page)). If the externally created profile gets imported into the Universal Profile Browser Extension, it is not compatible with LUKSO's own Transaction Relay Service, responsible for paying for user transactions on the network.

<div style={{textAlign: 'center'}}>

<img
    src="/img/general/relay-service-tx-error.png"
    alt="Relay Service Transaction Error"
    width="400"
/>

</div>

To **solve this issue**, users have to [**fund the extension's controller**](../extension/guides/fund-controller.md) with LYX to execute transactions without any Transaction Relay Service. Within the transaction screen, users can then select to use their own controller's funds.

### "No recovery set up for this Universal Profile"

If you want to recover your profile from the dashboard, the page might show a recovery button for all of your profiles, even if a particular profile does not have a recovery set up:

<div style={{textAlign: 'center'}}>

<img
    src="/img/extension/recovery-dashboard.png"
    alt="Recovery Dashboard"
    width="600"
/>

</div>

When you continue with the recovery, you will retrieve an error message like the following:

<div style={{textAlign: 'center'}}>

<img
    src="/img/extension/recovery-failed.png"
    alt="Recovery Error Message"
    width="600"
/>

</div>

To **solve this issue**, please [**verify that 2FA is set up on a specific profile**](../extension/guides/check-2fa-recovery.md) before starting the recovery process. If 2FA was not set up, you can not recover your profile from the dashboard. Please look into the optional [**Backup**](./guides/create-backup.md) solutions.

:::caution

If you neither have 2FA, access to the profile within the extension, or the backup file of a profile's controller, there will be no way to regain access.

:::

:::success Upcoming Feature

The dashboard of [my.universalprofile.cloud](https://my.universalprofile.cloud/) is currently undergoing updates based on recent [feature requests](../general/feature-requests.md) only to show the recovery button for eligible profiles. On top of that, we're currently working on a feature to allow 2FA backups for already existing profiles created on [universalprofile.cloud](https://universalprofile.cloud/).

:::

### "Universal Profile could not be added to the extension"

<div style={{textAlign: 'center'}}>

<img
    src="/img/extension/add-up-stall.png"
    alt="Add Profile to Extension Error"
    width="600"
/>

</div>

If the created Universal Profile on [universalprofile.cloud](https://universalprofile.cloud/) can not be added to your Universal Profile Browser extension, a pending transaction is yet to be signed or verified.

- If your browser extension is locked, please **log back in** and check for an approval screen to import the profile.
- If you switched your network in the _Settings_ screen of the extension, please **switch the network** and check if the pending request appears.
- If there is no pending request in the extension, please **retry to add the profile after some minutes**, as the page status might not have been correctly synchronized with the transaction verification on the blockchain.

:::info Additional Developer Support

If the error persists, please contact our support on the [LUKSO Discord server](https://discord.com/invite/lukso) within the **BUGS and SUPPORT** category. You can **right-click** on the screen to **inspect the page** to provide further details about the issue. Within the **console** of the **inspector window**, you should see a more detailed error code from the extension. Please attach a screenshot of the console and your previously defined profile name so we can track down the root cause of your issue.

:::

:::success Restarting the profile creation

Optionally, you can create a new profile, as no data or information has been added to the Universal Profile yet- except its name. Therefore, you can **clear your browser's cache** and restart your profile creation on [universalprofile.cloud](https://universalprofile.cloud/) from scratch.

:::

### "Could not fetch user data", "No profile detected."

It might happen that your profile data, like pictures and name, can not be fetched from web pages and apps:

<div style={{textAlign: 'center'}}>

<img
    src="/img/extension/error-fetch-data.png"
    alt="Error fetching profile data"
    width="300"
/>

</div>

To **solve this issue**, please **edit and re-deploy** your profile metadata **within the Universal Profile Browser Extension**. This will update the metadata file using the correct and up-to-date schema, so apps are able to fetch it again:

![Edit Universal Profile](../../static/img/general/edit-profile.png)

### "Incorrect 2FA Code"

This error might occur when you want to recover your Universal Profile using the authenticator app, but logged in with an email or Google Account **that was never attached to the 2FA recovery** process:

<div style={{textAlign: 'center'}}>

<img
    src="/img/extension/2fa-auth-fail.png"
    alt="Incorrect 2FA Code"
    width="300"
/>

</div>

To **solve this issue**, please verify that you are logging in with the **same Email or Google Account to which the authenticator code was set up**. This email or Google Account might differ from the one used for authentication upon the profile creation.

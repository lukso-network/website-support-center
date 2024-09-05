---
sidebar_label: '⚙️ Common Errors'
sidebar_position: 3
description: Common Errors
---

# Common Errors

## Extension only connects to one Universal Profile

The UP extension currently only supports **one active profile connection** at a time. If you disconnect from an application, the connection on the initial profile of the extension will remain, preventing you from establishing an additional connection. To solve this issue, open the extension and navigate to the _Connections_ menu of the initial profile. Here, remove the desired connection. When trying to re-connect, the extension will ask you which Universal Profile you would like to connect.

:::tip Upcoming Feature

The Extension Team is working on bringing multi-connection support and implementing a global connection screen that allows users to easily toggle between active connections.

:::

## Universal Profile is not allowed by this Transaction Relay Service

This error occurs if a user deployed his Universal Profile through a 3rd party platform that has its own Transaction Relay Service (like [_Universal.Page_](https://universal.page)). If the externally created profile gets imported into the Universal Profile Browser Extension, it is not compatible with LUKSO's own Transaction Relay Service, responsible for paying for user transactions on the network.

<div style={{textAlign: 'center'}}>

<img
    src="/../../img/general/relay-service-tx-error.png"
    alt="Relay Service Transaction Error"
    width="400"
/>

</div>

To **solve this issue**, users have to [**fund the extension's controller**](guides/fund-controller.md) with LYX to execute transactions without any Transaction Relay Service. Within the transaction screen, users can then select to use their own controller's funds.

:::caution

If you face this error in combination with **no sign permissions** after recovering your profile, the issue is likely related to [our recent controller incident](../Extension/incidents/controller-recovery.md). Therefore, please make sure that you either have [2FA recovery set up correctly](../Extension/guides/check-2fa-recovery.md) or revealed the private key of the [extension's controller](controllers.md) within the Settings screen. Both methods will ensure you will be able to regain access to your Universal Profile. More information can be found in the [Backup](../Extension/guides/create-backup.md) section.

:::

## No recovery set up for this Universal Profile

When you want to recover a profile using 2FA on the [my.universalprofile.cloud](https://my.universalprofile.cloud/) dashboard, you might retrieve an error message like the following:

<div style={{textAlign: 'center'}}>

<img
    src="/../img/extension/recovery-failed.png"
    alt="Recovery Error Message"
    width="600"
/>

</div>

To **solve this issue**, please

- [**verify that 2FA is set up on a specific profile**](../Extension/guides/check-2fa-recovery.md): If 2FA was not set up, you can not recover your profile from the dashboard. Please look into the optional [Backup](../Extension/guides/create-backup.md) solutions.
- **verify that you logged in with the correct email account**: The email or Google Account you've used might differ from the one that you previously set for authentication. Chrome may automatically connect with the Google account of your browser profile instead of asking for another login. If the accounts do not match, the Transaction Relay Service won't recognize the account, indicating that no recovery was set up.

:::danger

If you neither have 2FA, access to the profile within the extension, or the backup file of a profile's controller, there will be no way to regain access.

:::

## Universal Profile could not be added to the extension

<div style={{textAlign: 'center'}}>

<img
    src="/../img/extension/add-up-stall.png"
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

## Could not fetch user data / No profile detected.

It might happen that your profile data, like pictures and name, can not be fetched from web pages and apps:

<div style={{textAlign: 'center'}}>

<img
    src="/../img/extension/error-fetch-data.png"
    alt="Error fetching profile data"
    width="300"
/>

</div>

To **solve this issue**, please **edit and re-deploy** your profile metadata **within the Universal Profile Browser Extension**. This will update the metadata file using the correct and up-to-date schema, so apps are able to fetch it again:

![Edit Universal Profile](../../static/img/general/edit-profile.png)

## Incorrect 2FA Code

This error might occur when you want to recover your Universal Profile using the authenticator app, but logged in with an email or Google Account **that was never attached to the 2FA recovery** process:

<div style={{textAlign: 'center'}}>

<img
    src="/../img/extension/2fa-auth-fail.png"
    alt="Incorrect 2FA Code"
    width="300"
/>

</div>

To **solve this issue**, please verify that you are logging in with the **same Email or Google Account to which the authenticator code was set up**. This email or Google Account might differ from the one used for authentication upon the profile creation.

## Recovery Session Expired

This error might occur when you are trying to recover your profile from 2FA and are logging into a mismatched email or Google Account or if too much time has passed since the start of the recovery process. The Transaction Relay Service will abort the connection if an authentication code has never been set up for this specific account.

<div style={{textAlign: 'center'}}>

<img
    src="/../img/extension/re-authenticate.png"
    alt="Authentication Expired"
    width="300"
/>

</div>

To **solve this issue**, please verify that you are logging in with the **same Email or Google Account to which the authenticator code was set up**. If you are uncertain, please check if you still have the confirmation email. After confirmation, continue by connecting to [my.universalprofile.cloud](https://my.universalprofile.cloud/) and start the recovery again.

:::info

No profile or controller key will be generated and added to the Universal Profile extension if the recovery session expires. There will be **no pending process**. You can login and restart the recovery immediately.

:::

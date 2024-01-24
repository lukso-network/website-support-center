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

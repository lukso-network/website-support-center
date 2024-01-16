---
sidebar_label: '🔑 Controller Recovery Incident'
sidebar_position: 1
---

# Controller Recovery Incident

Following up to the enormous increase in downloads and extension users bedinning of 2024, the team discovered a controller malfunction on the 11th of January 2024. This resulted in controllers of the extensions not properly being added to the Universal Profile on **recovery** or **import**.

If you experienced issues with the extension after recovery or import, we highly recommend:

- revealing the private keys of all your extensions and keeping them in a safe place as a personal backup
- check if you set up 2FA correctly using our 2FA Controller Guide

:::danger

If you have issues with the Universal Profile Browser Extension or Relay Services, please do not delete or reinstall the extension. Doing so could risk the recovery of your profile, as it will clear all private keys that might still be accessable.

:::

## Actions taken

- Jan 12th, 2pm UTC: recovery and import functionality have been disabled (version `3.0.0-beta.6`).
- Jan 13th, 4pm UTC: released a **bugfix** for the Universal Profile Browser Extension (version `3.0.0-beta.7`)
- Jan 16th, 6pm UTC: a video guide has been released on how to recover a Universal Profile

<div class="video-container">
<iframe src="https://www.youtube.com/embed/rbIqA7N6Fn4?si=2mfC8_0AG6JD-7e3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

:::caution

This bugfix only works for new recoveries using version `3.0.0-beta.7` and above. If you have already attempted a recovery and have a non-working profile in your extension, please wait. We are working on additional updates and tools, allowing you to be able to re-gain access errors in some other cases.

:::

## Upcoming actions

- Our team is actively working on a tool to manually manage and add controllers to the Universal Profile.
- Our team is actively working on a file import feature, allowing to recover from the revealed private keys.

:::info

For personal support, please get in touch with us via [support@lukso.network](mailto:support@lukso.network)

:::

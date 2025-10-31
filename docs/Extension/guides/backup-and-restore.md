---
sidebar_label: '🔏 Backup and Restore'
sidebar_position: 3
description: 'Extension Support: Backup and Restore'
---

# Backup and Restore

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/hyXIKU66cvc?si=maJqk5iY8N9uLY9B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

The Backup and Restore feature of the Universal Profiles Browser Extension allows users to export all of their UPs to a password-protected file to be restored later.

:::info Available Recovery Options

Other safe options to restore your Universal Profile:

- Adding an email or 2FA recovery feature via my.universalprofile.cloud
- Setting another wallet as a recovery controller, known as third-party wallet recovery

:::

## Accessing Backup and Restore

Navigate to the extension settings and locate the Backup and Restore section.

<div style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap'}}>
  <img src="/img/extension/backup-and-restore/up-settings.png" alt="Extension Settings" style={{maxHeight: '500px', width: 'auto', maxWidth: '45%', minWidth: '280px', objectFit: 'contain'}} />
  <img src="/img/extension/backup-and-restore/bnr section.png" alt="Backup and Restore Section" style={{maxHeight: '500px', width: 'auto', maxWidth: '45%', minWidth: '280px', objectFit: 'contain'}} />
</div>

## 1. Backup Profiles

This feature lets you back up all Universal Profiles (UPs) currently loaded in your browser extension, for both LUKSO Mainnet and Testnet.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img src="/img/extension/backup-and-restore/backup-profiles.png" alt="Select Profiles" style={{maxHeight: '500px', width: 'auto'}} />
</div>

When backing up your Universal Profiles, you have two options:

- **Backup with password protection:** This encrypts your backup file and adds an extra security for your UPs.
- **Backup without password protection:** This option is less secure, as your backup file will not be encrypted.

### a. Backup with Protection (Recommended)

Choose to back up with password protection for enhanced security.

<div style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap'}}>
  <img src="/img/extension/backup-and-restore/backup-w-password.png" alt="Backup with Password Option" style={{maxHeight: '500px', width: 'auto', maxWidth: '45%', minWidth: '280px', objectFit: 'contain'}} />
  <img src="/img/extension/backup-and-restore/backup-w-password-form.png" alt="Enter Password" style={{maxHeight: '500px', width: 'auto', maxWidth: '45%', minWidth: '280px', objectFit: 'contain'}} />
</div>

Enter a strong password and a hint to help you remember this password.

### b. Backup without Protection

Alternatively, you can create a backup without password protection (not recommended for security reasons).

<div style={{display: 'flex', justifyContent: 'center', paddingBottom: '24px'}}>
  <img src="/img/extension/backup-and-restore/backup-wout-password.png" alt="Backup without Password" style={{maxHeight: '500px', width: 'auto'}} />
</div>

:::warning Storing the file

Save your backup file securely. Make sure to remember your password as it will be required for restoring your UPs.

:::

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img src="/img/extension/backup-and-restore/backup-save-pw.png" alt="Save Backup" style={{maxHeight: '500px', width: 'auto'}} />
</div>

## 2. Restoring Backup

- To start restoring your UPs using the backup file, click the **Restore backup** option.

<div style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap', paddingBottom: '24px'}}>
  <img src="/img/extension/backup-and-restore/restore-profiles.png" alt="Restore Profiles Section" style={{maxHeight: '500px', width: 'auto', maxWidth: '400px', objectFit: 'contain'}} />
</div>

- Select your backup file:
<div style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap', paddingBottom: '24px'}}>
  <img src="/img/extension/backup-and-restore/restore-upload-file.png" alt="Upload Backup File" style={{maxHeight: '500px', width: 'auto', maxWidth: '400px', objectFit: 'contain'}} />
</div>

- Enter your password if your backup file is password-protected. The **Hint** might be helpful!

<div style={{display: 'flex', justifyContent: 'center', paddingBottom: '24px'}}>
  <img src="/img/extension/backup-and-restore/restore-hint.png" alt="Restore Hint" style={{maxHeight: '500px', width: 'auto'}} />
</div>

- Confirm the list of UPs you are about to restore and click **Restore**. Once the process finishes, you'll see a confirmation message.

<div style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap', paddingBottom: '24px'}}>
  <img src="/img/extension/backup-and-restore/restore-confirm1.png" alt="Restore Confirmation 1" style={{maxHeight: '500px', width: 'auto', maxWidth: '22%', minWidth: '200px', objectFit: 'contain'}} />
  <img src="/img/extension/backup-and-restore/restore-confirm2.png" alt="Restore Confirmation 2" style={{maxHeight: '500px', width: 'auto', maxWidth: '22%', minWidth: '200px', objectFit: 'contain'}} />
  <img src="/img/extension/backup-and-restore/restore-confirm3.png" alt="Restore Confirmation 3" style={{maxHeight: '500px', width: 'auto', maxWidth: '22%', minWidth: '200px', objectFit: 'contain'}} />
  <img src="/img/extension/backup-and-restore/restore-confirm4.png" alt="Restore Confirmation 4" style={{maxHeight: '500px', width: 'auto', maxWidth: '22%', minWidth: '200px', objectFit: 'contain'}} />
</div>

---

Congratulations, you have just restored all your missing UPs in your Universal Profiles Browser Extension!

<div style={{display: 'flex', justifyContent: 'center', paddingBottom: '24px'}}>
  <img src="/img/extension/backup-and-restore/restore-success.png" alt="Restore Success" style={{maxHeight: '500px', width: 'auto'}} />
</div>

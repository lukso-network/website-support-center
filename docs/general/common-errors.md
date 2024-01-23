---
sidebar_label: '⚙️ Common Errors'
sidebar_position: 4
description: Common Errors
---

# Common Errors

### "Universal Profile is not allowed by this Transaction Relay Service"

This error occurs if a user deployed his Universal Profile through a 3rd party platform that has its own Transaction Relay Service (like [_Universal.Page_](https://universal.page)). If the externally created profile gets imported into the Universal Profile Browser Extension, it is not compatible with LUKSO's own Transaction Relay Service, responsible for paying for user transactions on the network.

<img
    src="/img/general/relay-service-tx-error.png"
    alt="Relay Service Transaction Error"
    width="400"
/>

To **solve this issue**, users have to [**fund the extension's controller**](../extension/guides/fund-controller.md) with LYX to execute transactions without any Transaction Relay Service. Within the transaction screen, users can then select to use their own controller's funds.

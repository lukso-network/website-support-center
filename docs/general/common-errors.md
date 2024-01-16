---
sidebar_label: 'Common Errors'
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

To **solve this issue**, users have to add a new controller to their Universal Profile. This controller must then be funded with LYX to execute transactions without any Transaction Relay Service. Within the transaction screen of the Universal Profile Extension, users can then define the controller they want to use like in the following picture:

<img
    src="/img/general/transaction-controller-setting.png"
    alt="Transaction Controller Setting"
    width="400"
/>

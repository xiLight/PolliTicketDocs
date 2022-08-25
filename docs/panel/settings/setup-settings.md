---
sidebar_position: 3
---

# Setup Settings

Here you will find a few explanations of the setup settings

:::warning
Only edit if you know what you are doing. A few settings, if misconfigured, can destroy your setup.
:::

## What do the numbers behind the setup mean?

The number indicates which setup it is, for example Setup-1 is the first setup that was made.
You can make several setups, each of which represents a ticket creator.
For example, if you have different support areas, you can make a second setup where a different role provides support.

## Basics
All basic settings for the setup

### ➤ TimeZone
It is important to choose the correct time zone, more info **[here](https://docs.polliticket.eu/getting-started/setup#timezone)**.

### ➤ Language
Here the language can be adapted by the bot, the bot will edit the embed after saving.

## Ticket Creator
Ticket Creator describes the embedding and text channel by creating new tickets by pressing a button.

### ➤ Creator embed channel
:::warning
To save this item, Save & Repost MUST be clicked so that the bot can move the embed and save the correct ids.
:::

Here you can adjust the TextChannel where the embed ends up, which is used to create new tickets.

![Log-Embed](./img\creator-embed-channel.png)

#### No Permissions

**In the dropdown appears (No Permissions) what to do?**
The error indicates that the bot in this has no permission to post or view the channel.

The following permissions are required:
- VIEW_CHANNEL
- MESSAGE_SEND
- MESSAGE_HISTORY
- MESSAGE_EMBED_LINKS

### ➤ Log TextChannel
Here you can select the channel where the logs are saved when a ticket is closed.

![Log-Embed](./img\log-textchannel.png)

#### No Permissions

**In the dropdown appears (No Permissions) what to do?**
The error indicates that the bot in this has no permission to post or view the channel.

The following permissions are required:
- VIEW_CHANNEL
- MESSAGE_SEND
- MESSAGE_HISTORY
- MESSAGE_EMBED_LINKS

### ➤ Max Tickets per User
:::info
Set to -1 to close the support, no more tickets can be created in the setup.
:::

Here you can set how many open tickets a user may have in the setup at the same time.


Anything **unclear** or **buggy** in this part? **[Please report it!](https://github.com/xiLight/PolliTicketDocs/issues/new/choose)**

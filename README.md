<!-- SPDX-License-Identifier: Apache-2.0 -->

<p align="center">
 <img src="https://raw.githubusercontent.com/gist/camdengrieh/9a62174a080ead34271ff5d187a24343/raw/02cad2900f4cedb87895cc57729030e095d2869f/gh_banner.svg" align="right" width="350">
	<h1 align="left">RIPs - Rugenerous Improvement Proposals Generator </h1>
 <h3 align="center"> </h3>
 <p align="center">
<align="center">

(https://twitter.com/rugenerous) [![Discord](https://img.shields.io/discord/734804446353031319.svg?color=768AD4&label=discord&logo=https%3A%2F%2Fdiscordapp.com%2Fassets%2F8c9701b98ad4372b58f13fd9f65f966e.svg)](https://discord.gg/N5dgz3Nbpz/) [![Telegram](https://img.shields.io/badge/chat-on%20Telegram-blue.svg)](https://t.me/rugenerous)
[![rip Actions Status](https://github.com/camdengrieh/rip/workflows/rip/badge.svg)](https://github.com/camdengrieh/rip/actions)

 </center>
  </p>
</p>
<br />
<br />

- [Abstract](#abstract)
- [Motivation](#motivation)
- [What is an RIP?](#what-is-an-rip-)
- [RIP Rationale](#rip-rationale)
  - [Process of submitting a`RIP`](#process-of-submitting-a-rip-)
- [RIP Statuses](#rip-statuses)
  - [Example RIP](#example-rip)
- [Validation](#validation)
- [Using the yRIP Generator](#using-the-rip-generator)
  - [Requirements](#requirements)
  - [Install](#install)
  - [Commands](#commands)
- [RIP Editors](#rip-editors)
- [Copyright](#copyright)

### TL;DR

`$ npm i generator-rip -g` <br>
`$ yo rip`

## Demo

[![asciicast](https://asciinema.org/a/369942.svg)](https://asciinema.org/a/369942)

## Abstract

The Rugenerous Improvement Proposals (`RIP`s) describe standards for the Rugenerous platform, including core protocol specifications, client APIs, and contract standards. This is the definitive, `cannonical` reference specification for the core logic.

## Motivation

`RIP` generator is a Yeoman generator to kickstart your Rugenerous Improvement Proposal, like strategies.

## What is an RIP?

RIP stands for Rugenerous Improvement Proposal, it has been adapted from the SIP (Synthetix Improvement Proposal). The purpose of this process is to ensure changes to Rugenerous are transparent and well governed. An RIP is a design document providing information to the Rugenerous community about a proposed change to the system. The author is responsible for building consensus within the community and documenting dissenting opinions.

## RIP Rationale

We intend RIPs to be the primary mechanisms for proposing new features, collecting community input on an issue, and for documenting the design decisions for changes to Rugenerous. Because they are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal.

It is highly recommended that a single RIP contain a single key proposal or new idea. The more focused the RIP, the more successful it is likely to be.

An RIP must meet certain minimum criteria. It must be a clear and complete description of the proposed enhancement. The enhancement must represent a net improvement.

#### Process of submitting a`RIP`

1.  Review [RIP-0](RIPS/rip-0.md).
2.  Fork the repository by clicking "Fork" in the top right.
3.  Add your RIP to your fork of the repository. There is a [template RIP here](rip-X.md).
4.  Submit a Pull Request to Rugenerous's [RIPs repository](https://github.com/iearn-finance/RIPS/).

Your first PR should be a first draft of the final RIP. It must meet the formatting criteria enforced by the build (largely, correct metadata in the header). An editor will manually review the first PR for a new RIP and assign it a number before merging it. Make sure you include a `discussions-to` header with the URL to a new thread on [gov.rug.farm](https://gov.rug.farm/) where people can discuss the RIP as a whole.

> Note: It is important that their be community support behind a proposed `RIP` - It is up to the author(s) to shepard their proposal through the process

If your RIP requires images, the image files should be included in a subdirectory of the `assets` folder for that RIP as follow: `assets/rip-X` (for rip **X**). When linking to an image in the RIP, use relative links such as `../assets/rip-X/image.png`.

When you believe your RIP is mature and ready to progress past the WIP phase, you should ask to have your issue added to the next governance call where it can be discussed for inclusion in a future platform upgrade. If the community agrees to include it, the RIP editors will update the state of your RIP to 'Approved'.

## RIP Statuses

**WIP** - a RIP that is still being developed. <br>
**Proposed** - a RIP that is ready to be reviewed in a governance call. <br>
**Approved** - a RIP that has been accepted for implementation by the Rugenerous community. <br>
**Implemented** - a RIP that has been released to mainnet. <br>
**Rejected** - a RIP that has been rejected. <br>
**Withdrawn** - a RIP that has been withdrawn by the author(s). <br>
**Deferred** - a RIP that is pending another RIP/some other change that should be bundled with it together. <br>
**Moribund** - a RIP that was implemented but is now obsolete and requires no explicit replacement. <br>

### Example RIP

```diff
-Status: Proposed
+Status: Approved
RIP: integer,
Created: 2020-09-01
-Last-Modified: 2020-09-03
+Last-Modified: 2020-09-08
```

## Validation

RIPs MUST pass some validation tests. The RIP repository ensures this by running tests using [html-proofer](https://rubygems.org/gems/html-proofer) and [rip_validator](https://rubygems.org/gems/rip_validator).

It is possible to run the RIP validator locally:

```ruby
gem install rip_validator
rip_validator <INPUT_FILES>
```

## Using the yRIP Generator

Follow instructions below to install

#### Requirements

- nodejs 10+
- npm 5+
- yeoman generator

#### Install

```bash
npm install -g yo
```

```bash
yo  rip
```

#### Commands

Follow the commands in your terminal / console

## RIP Editors

The current RIP editors are:

`* Camden Grieh (@camdengrieh)`

## Copyright

yRIP: Apache-2.0
RIPS: Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

# Your custom Twilio Flex Plugin

Twilio Flex Plugins allow you to customize the appearance and behavior of [Twilio Flex](https://www.twilio.com/flex). If you want to learn more about the capabilities and how to use the API, check out our [Flex documentation](https://www.twilio.com/docs/flex).

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com). We support Node >= 10.12 (and recommend the _even_ versions of Node). Afterwards, install the dependencies by running `npm install`:

```bash
cd 

# If you use npm
npm install
```

Next, please install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) by running:

```bash
brew tap twilio/brew && brew install twilio
```

Finally, install the [Flex Plugin extension](https://github.com/twilio-labs/plugin-flex/tree/v1-beta) for the Twilio CLI:

```bash
twilio plugins:install @twilio-labs/plugin-flex@beta
```

## Development

Run `twilio flex:plugins --help` to see all the commands we currently support. For further details on Flex Plugins refer to our documentation on the [Twilio Docs](https://www.twilio.com/docs/flex/developer/plugins/cli) page.

## Functions

Step 1: Add and Run Function emergencyDocCreate to create the Twilio Sync Document

Step 2: Add Function emergencyDocToggle, copy the URL and replace the fetch URL on line 15 in Button.js with this URL. 

Step 3: Add Function getEmergencyDocInfo to Twilio Functions

## Studio

Build a Twilio Studio Flow that utilizes the getEmergencyDocInfo function to determine if the status is "Open" or "Closed" and route the call appropriately.

## Flex

This plugin is built to work with Twilio Flex UI 2.0. It creates a toggle button on the Supervisor desktop allowing Supervisors to Toggle an Emergency on/off.


# gatsby-plugin-agilecrm

[![Build Status](https://travis-ci.org/IsAmrish/gatsby-plugin-agilecrm.svg?branch=master)](https://travis-ci.org/IsAmrish/gatsby-plugin-agilecrm) [![npm version](https://badge.fury.io/js/gatsby-plugin-agilecrm.svg)](https://www.npmjs.com/package/gatsby-plugin-agilecrm)

A Gatsby Plugin to easily add a AgileCRM embed code to your site

## Installing

`npm install --save gatsby-plugin-agilecrm`

## How to use

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-agilecrm",
      options: {
        jsAPIKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
        agilecrmOrgName: "orgName"
      }
    }
  ]
};
```

### Options

#### jsAPIKey

Type: `string`<br/>

You need to provide javascript api key of your AgileCRM org which you can find in your setting.

More information about javascript api key can be found in the [AgileCRM javascript api](https://github.com/agilecrm/javascript-api#setting-api--analytics).

#### agilecrmOrgName

Type: `string`<br/>

You need to provide your agilecrmOrgName which you can find in your agilecrm org url.

For example, if your agilecrm org url is `https://abc-xyz.agilecrm.com` then your
agilecrmOrgName is `abc-xyz`.

## License

MIT © [Amrish Kushwaha](https://github.com/IsAmrish)

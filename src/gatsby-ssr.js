import React from "react";

export function onRenderBody(
  { reporter, setPostBodyComponents },
  pluginOptions
) {
  const options = Object.assign({}, pluginOptions);
  const { jsAPIKey, agilecrmOrgName } = options;
  if (jsAPIKey === undefined) {
    reporter.warn("No agilecrm org's javascript api key provided ");
    return;
  }
  if (agilecrmOrgName === undefined) {
    reporter.warn("No agilecrm org name provided ");
    return;
  }
  setPostBodyComponents([
    <script
      type="text/javascript"
      id="_agile_min_js"
      key={`gatsby-plugin-agilecrm`}
      async
      src={`https://${agilecrmOrgName}.agilecrm.com/stats/min/agile-min.js`}
    />,
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
        var Agile_API = Agile_API || {};
        Agile_API.on_after_load = function() {_agile.set_account(${jsAPIKey}, ${agilecrmOrgName}, false);
        _agile.track_page_view();};
        `
      }}
    />
  ]);
}

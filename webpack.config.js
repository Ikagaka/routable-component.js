const config = require("webpack-config-narazaka-ts-js").node;

config.entry["routable-component"] = "./src/lib/routable-component.ts";
config.output.library = "routableComponent";

module.exports = config;

const { fixBabelImports } = require("customize-cra");
const configOverrides = require("../../config-overrides");

module.exports =
  process.env.NODE_ENV === "production"
    ? configOverrides(
        fixBabelImports("import", {
          libraryName: "antd",
          libraryDirectory: "es",
          style: "css"
        })
      )
    : configOverrides();

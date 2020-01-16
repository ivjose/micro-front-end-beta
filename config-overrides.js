const {
  override,
  babelInclude,
  fixBabelImports,
  disableChunk,
  addWebpackExternals,
  addBabelPlugins
} = require("customize-cra");
const path = require("path");
const isProduction = process.env.NODE_ENV === "production";

module.exports = (...config) =>
  override(
    disableChunk(),
    // NOTES: This Import for ant Design will remove in production stage,
    // so that there will be no multple instance of core ant design css
    !isProduction &&
      fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css"
      }),
    ...addBabelPlugins(
      "polished",
      // NOTES: Remove source map in production stagging
      isProduction ? "emotion" : ["emotion", { sourceMap: true }]
    ),
    babelInclude([
      path.resolve("src"),
      path.resolve("../components") // don't reference it through node_modules/@my-project/components
      // because yarn workspaces already resolves it
    ]),

    addWebpackExternals({
      react: "React",
      "react-dom": "ReactDOM"
    }),
    config
  );

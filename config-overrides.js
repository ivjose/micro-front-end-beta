const {
  override,
  babelInclude,
  fixBabelImports,
  disableChunk,
  addWebpackExternals
} = require("customize-cra");
const path = require("path");

module.exports = override(
  disableChunk(),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),
  babelInclude([
    path.resolve("src"),
    path.resolve("../components") // don't reference it through node_modules/@my-project/components
    // because yarn workspaces already resolves it
  ]),

  addWebpackExternals({
    react: 'React',
    'react-dom': 'ReactDOM'
  })
);

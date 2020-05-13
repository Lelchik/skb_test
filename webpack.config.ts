var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: ["webpack-hot-middleware/client", path.join(__dirname, "src")],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: "global" } },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: "eval-source-map",
};

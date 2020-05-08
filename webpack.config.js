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
        rules: [
          {
            use: ["style-loader", "css-loader"],
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|woff|woff2|eot)$/,
        use: "file-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: "eval-source-map",
};

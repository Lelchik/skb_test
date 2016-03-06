var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src')
  ],
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.(png|jpg|svg)(\?v.*)?$/,
      loader: 'url-loader?name=img-[sha512:Hash:base64:9].[ext]&limit=8192'
    }, {
      test: /\.(eot|woff2?|ttf)(\?v.*)?$/,
      loader: 'file-loader?name=font-[sha512:Hash:base64:9].[ext]'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'eval-source-map',
}

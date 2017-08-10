var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('../package.json');

const PORT = parseInt(process.env.PORT || '4000') + 1;

const theme = pkg.theme

const webpackConfig = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    path.resolve(__dirname, '../view/index.tsx')
  ],
  module: {
    rules: [
      { test:  /\.jsx|\.ts|\.tsx$/, loaders: ['babel-loader', 'awesome-typescript-loader?{configFileName: "tsconfig.client.json"}'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`] },
      { test: /\.(png|jpg|ico)$/, loader: 'url-loader?limit=8192' },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    filename: 'main.js',
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../view/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist/static'),
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    port: 3000,
    proxy: [{
      path: ['/api/*/*', '/api/*/*/*'],
      changeOrigin: true,
      target: 'http://127.0.0.1:5000',
      host:"127.0.0.1"
    }]
  },
};

if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]);
}

module.exports = webpackConfig;
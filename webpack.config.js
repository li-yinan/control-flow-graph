const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    "./app/app", // Your appʼs entry point
    "./src/index" // Your appʼs entry point
  ],
  devtool: process.env.WEBPACK_DEVTOOL || "source-map",
  output: {
    path: path.join(__dirname, "lib"),
    filename: '[name].js'
  },
  resolve: {
    extensions: ["", ".js", ".ejs", ".less"]
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ["babel"]
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-compiled-loader'
      },
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.less$/, loader: "style-loader!css-loader!less-loader"}
    ]
  },
  devServer: {
      contentBase: "./public",
      noInfo: false, //  --no-info option
      hot: true,
      inline: true
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new HtmlWebpackPlugin({
      template: './app/template.html'
    })
  ]
};

const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: [
    "./src/index" // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, "lib"),
    library: 'control-flow-graph',
    libraryTarget: 'amd',
    filename: 'index.js'
  },
  resolve: {
    extensions: ["", ".js", ".ejs", ".less"]
  },
  externals: [{
      'react': {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
      }
  }, {
      'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom'
      }
  }],
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
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    })
  ]
};

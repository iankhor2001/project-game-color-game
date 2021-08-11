const path = require("path");
const webpack = require("webpack");

module.exports = {
   context: path.resolve(__dirname, 'src'),
   entry: {
      main: ['./main.js']
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
   },
   optimization: {
      splitChunks: {
         cacheGroups: {
            vendor: {
               test: /[\\/]node_modules[\\/]lodash[\\/]/,
               name: 'vendor',
               chunks: 'all',
               enforce: true
            }
         }
      }
   }, 
   module: {
      rules: [{
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
      }]
   }
};
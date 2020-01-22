const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  watch: true,
  entry: {
    'boilerplate': ['./scss/_boilerplate.scss'],
    'layout': ['./scss/_layout.scss'],
    'mixins': ['./scss/_mixins.scss'],
    'variables': ['./scss/_variables.scss'],
  },
  output: {
    path: path.resolve(__dirname, 'js')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css-compiled/[name].css"
    })
  ],
};

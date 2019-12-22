const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: ['index'],
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.pug'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ]
  }
};

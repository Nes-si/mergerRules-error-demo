const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.dev.config');


const port = process.env.PORT || 9000;

const server = new WebpackDevServer(
  webpack(config),
  {
    historyApiFallback: true,
    hot: true,
    publicPath: config.output.publicPath
  }
);

server.listen(port, 'localhost', error => {
  if (error)
    console.error(error);
});

var webpack = require('webpack');

module.exports = {
  entry: './src/nine-tails.ts',
  output: {
    filename: './dist/nine-tails.js',
    library: "nine-tails",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  ts: {
    configFileName : './src/tsconfig.json'
  }
}

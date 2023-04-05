const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/server/index.tsx',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
}

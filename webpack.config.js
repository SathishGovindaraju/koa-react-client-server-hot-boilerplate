const path = require('path');
const webpack = require('webpack');
const dist = path.join(__dirname, 'dist');

module.exports = [
    {
        name: 'client',
        target: 'web',
        entry: [
          'react-hot-loader/patch',
          'webpack-hot-middleware/client?path=/__&timeout=20000',
          './src/client'
        ],
        output: {
            path: dist,
            filename: 'client.js'
        },
        module: {
          rules: [
            {
              test: /\.js$|.jsx$/,
              loader: 'babel-loader',
              exclude: [/node_modules/, /dist/, /public/]
            }
          ]
        },
        plugins:[
          new webpack.HotModuleReplacementPlugin()
        ],
        devtool: 'source-map'
    }, {
        name: 'server',
        target: 'node',
        entry: './src/server',
        output: {
            path: dist,
            filename: 'server.js',
            libraryTarget: 'commonjs2'
        },
        module: {
          rules: [
            {
              test: /\.js$|.jsx$/,
              loader: 'babel-loader',
              exclude: [/node_modules/, /dist/, /public/]
            }
          ]
        },
        devtool: 'source-map'
    }
];
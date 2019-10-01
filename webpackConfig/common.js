const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const alias = require('./alias')
const rules = require('./rules')

function buildConfig(settings) {
  return {
    target: 'web',
    entry : {
      index: path.resolve(settings.APP_DIR, './client/index.tsx'),
      vendor: ['react', 'react-dom']
    },
    output: {
      path: settings.BUILD_DIR,
      filename: 'js/[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      // publicPath : ''
    },
    module: {
      rules,
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias,
    },
    devServer: {
      historyApiFallback: true
    },
    performance: {
      hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    optimization: {
      nodeEnv: process.env.NODE_ENV,
      minimize: process.env.NODE_ENV === 'production',
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendor',
            minChunks: 2,
            chunks: 'all',
            test: /node_modules/,
            priority: 20
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'async',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          },
          default: {
            name: 'default',
            minChunks: 2,
            chunks: 'async',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      }
    },
    plugins: [
      new webpack.DefinePlugin ({
        'process.env': {
          NODE_ENV : JSON.stringify(process.env.NODE_ENV),
        }
      }),
      new HtmlWebpackPlugin ({
        template: path.resolve(settings.APP_DIR, './client/index.html')
      })
    ],
  }
}

module.exports = buildConfig
const {
  override,
  addWebpackModuleRule,
  addWebpackPlugin,
  addWebpackAlias,
  addBabelPreset
} = require("customize-cra");
const path = require("path");


const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const HtmlWebPackPlugin = require("html-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'production';

const stylus = () => config => {
  const stylusLoader = {
    test: /\.styl$/,
    use: [
      {
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
      }, {
        loader: 'stylus-loader'
      }
    ]
  }
  const oneOf = config.module.rules.find(rule => rule.oneOf).oneOf
  oneOf.unshift(stylusLoader)
  return config
}

module.exports = override(
  addWebpackModuleRule(
    {
      test: /\.styl$/i,
      use:[
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'stylus-loader',
      ],
    },
  ),
  addWebpackPlugin(
    new MiniCssExtractPlugin()
  ),
  addWebpackAlias({
    '@hooks': path.resolve(__dirname, './src/hooks'),
    '@components': path.resolve(__dirname, './src/components'),
    '@layouts': path.resolve(__dirname, './src/layouts'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@utils': path.resolve(__dirname, './src/utils'),
    '@typings': path.resolve(__dirname, './src/typings'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@states': path.resolve(__dirname, './src/states'),
    '@styles': path.resolve(__dirname, './src/styles'),
  }),
  addBabelPreset('@emotion/babel-preset-css-prop'),
  stylus()
 
)
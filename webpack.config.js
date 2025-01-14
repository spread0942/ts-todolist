const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/scripts/index.ts',
   ], // Your entry TypeScript file
  output: {
    filename: 'scripts/[name].bundle.js',  // The output bundled JavaScript file
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js'],  // Allow resolving .ts and .js files
  },
  module: {
    rules: [
      {
        test: /\.ts$/,           // Apply the loader to .ts files
        use: 'ts-loader',        // Use ts-loader to transpile TypeScript to JavaScript
        exclude: /node_modules/, // Exclude node_modules from being processed
      },
      // CSS Loader for development
      {
        test: /\.css$/,
        use: [
          'style-loader',  // Inject CSS into the DOM (only in development)
          'css-loader',    // Resolves CSS imports
        ],
      },
      // CSS Loader for production (using MiniCssExtractPlugin)
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,  // Extract CSS into separate files (only in production)
          'css-loader',
        ],
        include: path.resolve(__dirname, 'src'),  // Apply to CSS files in the src folder
      },
    ],
  },
  plugins: [
    // Use HtmlWebpackPlugin to copy and inject HTML file
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Template file in the src folder
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',  // Output CSS filename pattern
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/styles',  // Copy all files from 'src/assets' directory
          to: 'styles',        // to the 'assets' directory in the dist folder
        }
      ],
    }),
  ],
  devtool: 'source-map',  // Optional: Generates source maps for easier debugging
  mode: 'development',
};

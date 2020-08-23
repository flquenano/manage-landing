"use strict";

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      favicon: "./src/assets/png/favicon-32x32.png",
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.j(s|sx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"]
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: ["url-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      scss: path.resolve(__dirname, "src", "scss"),
      components: path.resolve(__dirname, "src", "components"),
      assets: path.resolve(__dirname, "src", "assets")
    },
    extensions: [".jsx", ".js", ".scss", ".sass"]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};

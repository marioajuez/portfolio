const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: ["@babel/polyfill", "./src/index.js", "./src/main.scss"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/app.bundle.js",
  },

  devServer: {
    port: 4000,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [ process.env.NODE_ENV !== 'production'
        ? 'style-loader'
        : MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [process.env.NODE_ENV !== 'production'
        ? 'style-loader'
        : MiniCssExtractPlugin.loader, "css-loader","sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/app.bundle.css",
    }),
  ],
};

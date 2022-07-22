const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

module.exports = {
  entry: ["babel-regenerator-runtime", "./src/index"],
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 3010,
    historyApiFallback: true,
    hot: true,
  },
  output: {
    publicPath: "/",
  },
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude:
          /node_modules\/(?!(bootstrap|react-step-progress-bar|react-router-modal)\/).*/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        exclude: /\.(s?(a?|c)ss|js|html)$/,
        test: /\.(css|svg|styl|sass|scss|png|jpg|gif|ttf|woff|woff2|otf|eot)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".ts", ".tsx", ".js", ".jsx", ".json"],
    fallback: {
      stream: require.resolve("stream-browserify"),
      "crypto-browserify": require.resolve("crypto-browserify"),
      util: require.resolve("util/"),
      assert: require.resolve("assert/"),
      zlib: require.resolve("browserify-zlib"),
      module: "empty",
      dgram: "empty",
      dns: "mock",
      fs: "empty",
      http2: "empty",
      net: "empty",
      tls: "empty",
      child_process: "empty",
      path: false,
      crypto: false,
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "webMicroGestionCtls",
      filename: "remoteEntry.js",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new Dotenv(),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    }),
  ],
};

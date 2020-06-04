const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/szkolenie-CSS.html",
      inject: true,
      chunks: ["index"],
      filename: "szkolenie-CSS.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/szkolenie-HTML.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "szkolenie-HTML.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/szkolenie-JS.html",
      inject: true,
      chunks: ["index"],
      filename: "szkolenie-JS.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/Hobby.html",
      inject: true,
      chunks: ["index"],
      filename: "Hobby.html",
    }),
  ],
};

1. npm init -y
2. npm install vue --save
3. npm install webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env vue-loader vue-template-compiler -D
4. public a src zlozky
5. index.html v public
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Vue app</title>
    <script type="module" src="/bundle.js"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>

7. v src main.js
import { createApp } from "vue";
import App from "./App";

createApp(App).mount('#app')

App.vue
<template>
  <div id="app">Hello vue.js</div>
</template>

webpack
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],

};

babel config
module.exports = {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "usage",
          corejs: 3,
        },
      ],
    ],
  };

  do package.json
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]

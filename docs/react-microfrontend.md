# How to setup MFEs in React with Webpack and Module Federation

This guide shows how to setup a container application with one MFE (called `overview` in this example)

## Create react apps with dependencies

1. `mkdir container overview` to create container folder and overview folder
2. In each of these folders:
    1. `npx create-react-app . --template typescript`
    2. `npm install @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react babel-loader clean-webpack-plugin css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server webpack-merge ts-loader --save-dev`
    3. `npm install @ui5/webcomponents @ui5/webcomponents-react @ui5/webcomponents-fiori` to install UI5 webcomponents for React

## Overview app (./overview)
1. Rename the file `src/index.tsx` to `src/bootstrap.tsx` with following content
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// this mount function will be called in the container app to mount this MFE to the container's DOM
const mount = (htmlElement: HTMLElement | null) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    htmlElement
  );
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("dev-overview");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
```
2. Create new file `src/index.ts` with following content
```
import("./bootstrap");
export { }; // needed to satisfy typescript compiler
```
3. Configure webpack in `config/webpack.config.js` file
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts', // Change this to your entry TypeScript file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
},
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "overview",
      filename: "remoteEntry.js",
      exposes: {
      "./OverviewApp": "./src/bootstrap"
      }
  }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 3001,
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
```

## Container app (./container)
1. Configure webpack in `config/webpack` to consume remote MFE
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts', // Change this to your entry TypeScript file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
},
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        overview: 'overview@http://localhost:8081/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
```
2. For each remote application, you need to add a type declaration (e.g. in `/src/components/remotes/remoteTypes.d.ts`)
```
// This tells TypeScript that the 'overview/OverviewApp' module exports a 'mount' function.
declare module 'overview/OverviewApp' {
  export function mount(htmlElement: HTMLElement | null): void;
}
```
3. Create a new component in the same directory as `remoteTypes.d.ts` (`src/components/remotes/Overview.tsx`)
```
import React, { useEffect, useRef } from 'react'
import { mount } from "overview/OverviewApp"; //importing mount function from remote MFE

type Props = {}

const Overview = (props: Props) => {
    const ref = useRef(null);

    useEffect(() => {
        // mounting the remote MFE to the div in the return statement below
        mount(ref.current as HTMLElement | null);
    })

    return (
        <div ref={ref} />
    )
}

export default Overview
```
4. Now you can use this component as a normal React component
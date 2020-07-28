# Webpack Starter Kit 🧰

Simple webpack 4 starter kit for basic projects.

![Cover image.](./cover-image.png)

## Table of Content

* [Features](#features)
* [Usage](#Usage)
* [Available scripts](#Available-scripts)
* [Requirements](#requirements)
* [Project tree](#project-tree)
* [Used packages](#used-packages)

## Features

* Eslint
* Prettier
* Jest
* PWA
* Sass
* ES6
* Asset loading
* CSS prefixing
* Dev server
* Sourcemaps
* Icon generator for PWA

## Requirements

* Installed fresh version of [**Node.js**](https://nodejs.org/en/) and [**yarn**](https://yarnpkg.com/)
>**TIP:** For managing node.js versions I recommend to use [**n**](https://github.com/tj/n) a simple Node.js version management

## Usage

Click on `Use this template` button and follow instructions, next clone it to your desired directory on your computer, go to the project directory in console and type `yarn install`. Now you can start developing your new awesome project 🔥🔥🔥

## Available scripts

`yarn dev` - runs development mode

`yarn build` - runs build process for production

`yarn build:icons` - automates PWA asset generation and image declaration

`yarn test` - runs jest tests

`yarn test:report` - build coverage report

`yarn lint` - runs eslint

`yarn lint:fix` - runs eslint and fix all the problems

`yarn clean` - clean dist and coverage folders

`yarn publish` - runs build process and publish the page using `gh-pages` branch

## Project tree 🌳

```
.
├── babel.config.js
├── jest.config.js
├── node_modules
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── manifest.json
│   ├── pwa
│   ├── robots.txt
│   └── service-worker.js
├── readme.md
├── src
│   ├── assets
│   │   └── img
│   │       └── logo.svg
│   ├── js
│   │   ├── index.js
│   │   ├── pwa.js
│   │   └── sum.js
│   ├── pages
│   │   └── index.html
│   ├── sass
│   │   ├── base
│   │   │   └── _variables.scss
│   │   ├── components
│   │   ├── layout
│   │   ├── main.scss
│   │   └── pages
│   │       └── index.scss
│   └── tests
│       └── sum.test.js
├── webpack
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
└── yarn.lock

```

## Used packages 📦

* @babel/core
* @babel/preset-env
* autoprefixer
* babel-jest
* babel-loader
* clean-webpack-plugin
* copy-webpack-plugin
* core-js
* css-loader
* eslint
* eslint-config-airbnb
* eslint-config-prettier
* eslint-plugin-import
* eslint-plugin-jsx-a11y
* eslint-plugin-prettier
* eslint-plugin-react
* eslint-plugin-react-hooks
* file-loader
* gh-pages
* html-loader
* html-webpack-plugin
* jest
* mini-css-extract-plugin
* minimist
* optimize-css-assets-webpack-plugin
* postcss-loader
* prettier
* sass
* sass-loader
* style-loader
* terser-webpack-plugin
* webpack
* webpack-cl
* webpack-dev-server
* webpack-merge
* websocket-extensions


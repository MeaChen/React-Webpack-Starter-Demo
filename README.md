# React-Webpack-Starter-Demo

## Preface
To those that know a little about html, javascript, css but know nothing else -:)

I am about to find a framework to quick-start the UI part of my graduation project, but encounter a lot of difficulties when following guides online.

## Introduction
**NPM** is a package manager that can be used to install dependencies easily. Package information shows in file `.package.json`. 

To get started: 

	npm init
	
you can always type `enter` to generate `package.json` with default information.
 
Then there are two ways to install dependencies:

1. (Recommend) Use `npm install xxx --save-dev`

	It will write packages in `./node_modules` and write the name and version of the package in `.package.json` with the option `--save-dev`.

2. Use `npm install` to install dependencies indicated in `.package.json`.

You can define instructions by modifying item "scripts" in `.package.json`. Although npm run has [built-in command](https://docs.npmjs.com/cli/run-script), it will take precedence over the built-in if specified.

For example,

	npm run start

will run `webpack-dev-server --hot --progress --colors` instead of built-in `node server.js`.

[**Webpack**](https://webpack.js.org/concepts/) is a module bundle. Its configurations are defined in file `.webpack.config.js`. Below are important concepts:

* Entry
	* An entry point indicates which module webpack should use to begin building out its internal dependency graph, webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).

* Output
	* The output property tells where to emits the bundles.
	
* Loaders 
	* Loaders allow webpack to process other types of files other than javascript. For example, to process files `*.css`, the loader can be `style-loader!css-loader`.
	
	* **Important**: In lower version of webpack, it is replaced by "rules".

* devServer
	* It can define the domain and the port of the server and item `contentBase` defines the location of the html file.

To run the application, use 

	webpack-dev-server --hot --progress --colors

 The option `--hot` is Hot Module Replacement(HMR) that can exchange, add or remove modules while an application is running. It is worth noting that you have to restart the application when modifying configuration file like `webpack.config.js`. The other two options can show the progress in different colors.

**CSS modules** can seperate css from javascript. Follow these step:

1. Create a `*.css` file
2. Import it in `*.js` file
3. Indicate the style in attribute `className` of the tag
4. Change the css file loader in `.webpack.config.js` to `style-loader!css-loader?modules`.


## Requirements
* node.js
* npm

## Installation
Guides can be found [here](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/00143450141843488beddae2a1044cab5acb5125baf0882000)

## Usage
Install dependencies:

	npm install

Run webpack server:

	npm run start
	
Then open "http://localhost: 8101" in the browser.
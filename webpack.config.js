// @ts-nocheck
const path = require('path');
const WebpackBar = require('webpackbar');
const nodeExternals = require('webpack-node-externals');
const ESLintPlugin = require('eslint-webpack-plugin');
const isDevelopment =
	!process.env.NODE_ENV || process.env.NODE_ENV == 'development';
const webpackConfig = {
	entry: {
		server: `./src/index.ts`
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	mode: isDevelopment ? 'development' : 'production',
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			}
		]
	},
	watch: isDevelopment,
	plugins: [new WebpackBar(), new ESLintPlugin()],
	resolve: {
		extensions: ['.js', '.ts'],
		alias: {
			'@': path.resolve(__dirname, `src`),
			'@lib': path.resolve(__dirname, `src/lib`),
			'@type': path.resolve(__dirname, `src/type`),
			'@interface': path.resolve(__dirname, `src/interface`),
			'@app': path.resolve(__dirname, `src/app`)
		}
	},
	target: 'node',
	node: {
		__dirname: false,
		__filename: false
	},
	externals: [nodeExternals()] // Need this to avoid error when
};

if (isDevelopment) webpackConfig.devtool = 'source-map';
module.exports = webpackConfig;

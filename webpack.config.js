const path = require('path');
const dotenv = require('dotenv').config();
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	mode: isProduction ? 'production' : 'development',
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.[hash].js',
		// Avoid regenerating hot update configs on every hot update
		hotUpdateChunkFilename: 'hot/hot-update.js',
		hotUpdateMainFilename: 'hot/hot-update.json'
	},
	devtool: isProduction ? false : 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 3000,
		open: 'chrome',
		overlay: true,
		hot: true,
	},
	externals: {
		'material-ui': 'window["material-ui"]'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss-loader',
							plugins: loader => [
								require('cssnano')(),
								require('stylelint')(),
								require('autoprefixer')(),
								require('postcss-cssnext')(),
								require('postcss-font-magician')()
							]
						}
					}
				]
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: ['cache-loader', 'babel-loader']
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Chat App',
			template: './public/index.html'
		})
	]
};
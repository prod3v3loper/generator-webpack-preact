const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * Thats your Webpack common config file
 */
module.exports = {

	entry: {
		index: "./src/index.tsx"
	},

	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "./dist")
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "Webpack - Preact",
			template: "./public/index.html",
			inlineSource: ".(jsx?|s?css)$",
			minify: {
				collapseWhitespace: true,
				removeComments: true
			}
		})
	],

	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif|mp4)$/,
				use: [
					"file-loader"
				]
			}
		]
	}
};

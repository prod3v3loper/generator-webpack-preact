const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
			title: "WebPack - Preact",
			template: "./public/index.html",
			inlineSource: ".(js|css)$",
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
			}
		]
	}
};

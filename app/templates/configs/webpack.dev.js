const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.config.js");

module.exports = merge(common, {
	mode: "development",

	optimization: {
		usedExports: true
	},

	devtool: "inline-source-map",

	devServer: {
		contentBase: "./dist",
		hot: true,
		compress: false
	},

	plugins: [new webpack.HotModuleReplacementPlugin()],

	module: {
		rules: [
			{
				test: /\.(tsx?|jsx?)$/,
				loader: "ts-loader",
				// include: 'path.resolve(__dirname, "src")',
                exclude: /node_modules/,
				options: {
					configFile: "tsconfig.dev.json"
				}
			}
		]
	}
});

const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.js");

module.exports = merge(common, {
	mode: "production",

	optimization: {
		usedExports: true,
		minimize: true
	},

	module: {
		rules: [
			{
				test: /\.(tsx?|jsx?)?$/,
				loader: "ts-loader",
				// include: 'path.resolve(__dirname, "src")',
                exclude: /node_modules/,
				options: {
					configFile: "tsconfig.pro.json"
				}
			}
		]
	}
});

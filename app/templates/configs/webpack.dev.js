import path from "path";
import { fileURLToPath } from "url";
import webpack from "webpack";
import { merge } from "webpack-merge";
import common from "./webpack.config.js";

// Simuliere __dirname in ES-Modulen
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Thts your development config with hotmodule page reload
 * 
 * npx webpack serve --config webpack.dev.js
 */
export default merge(common, {

	mode: "development",

	optimization: {
		usedExports: true
	},

	devtool: "inline-source-map",

	devServer: {
		hot: true,
		compress: false
	},

	plugins: [new webpack.HotModuleReplacementPlugin()],

	module: {
		rules: [
			{
				test: /\.(tsx?|jsx?)$/,
				loader: "babel-loader",
				exclude: /node_modules/,

				options: {
					presets: [
						"@babel/typescript",
						["@babel/preset-env",
							{
								"targets": {
									"browsers": [
										"last 2 versions"
									]
								}
							}
						]
					],
					plugins: [
						"@babel/plugin-proposal-object-rest-spread",
						"@babel/plugin-proposal-class-properties",
						[
							"@babel/plugin-transform-react-jsx", { "pragma": "h" }
						]
					]
				}
			},
			{
				test: /\.(tsx?|jsx?)$/,
				loader: "ts-loader",
				// include: 'path.resolve(__dirname, "src")',
				exclude: /node_modules/,
				options: {
					configFile: "tsconfig.json"
				}
			}
		]
	}
});

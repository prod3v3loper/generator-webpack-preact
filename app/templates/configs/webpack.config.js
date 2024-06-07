import path from "path";
import { fileURLToPath } from "url";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

// Simuliere __dirname in ES-Modulen
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Thats your Webpack common config file
 */
export default {

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

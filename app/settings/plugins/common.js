/**
 * Common Plugins
 * Here you can add al plugins need in the main webpack config adn use in dev and pro envoirement
 *
 * @see     https://github.com/jantimon/html-webpack-plugin#minification
 */

module.exports = function commonPlugins(answer) {
  return [
    /**
      * All files inside webpack's output.path directory will be removed once, but the
      * directory itself will not be. If using webpack 4+'s default configuration,
      * everything under <PROJECT_DIR>/dist/ will be removed.
      * Use cleanOnceBeforeBuildPatterns to override this behavior.
      *
      * During rebuilds, all webpack assets that are not used anymore
      * will be removed automatically.
      *
      * See `Options and Defaults` for information
      */
    "new CleanWebpackPlugin()",
    "new HtmlWebpackPlugin({title:'WebPack - Preact', template: './public/index.html', inlineSource: '.(js|css)$', minify: { collapseWhitespace: true, removeComments: true } })",
  ];
};

/**
 * Common Plugins
 * Here you can add al plugins need in the main webpack config adn use in dev and pro envoirement
 * 
 * @see     https://github.com/jantimon/html-webpack-plugin#minification
 */

module.exports = function commonPlugins( answer ) {
    return ( [
        "new CleanWebpackPlugin(['dist'])",
        "new HtmlWebpackPlugin({title:'WebPack - Preact', template: './public/index.html', inlineSource: '.(js|css)$', minify: { collapseWhitespace: true, removeComments: true } })"
    ] );
};
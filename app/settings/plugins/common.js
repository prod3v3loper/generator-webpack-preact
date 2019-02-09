/**
 * Common Plugins
 * Here you can add al plugins need in the main webpack config adn use in dev and pro envoirement
 */

module.exports = function commonPlugins( answer ) {
    return ( [
        "new CleanWebpackPlugin(['dist'])",
        "new HtmlWebpackPlugin({title:'WebPack - Preact', template: './public/index.html', inlineSource: '.(js|css)$'})"
    ] );
};
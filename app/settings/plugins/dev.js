/**
 * Development Plugins
 * We cann add here all plugins we want to use for development envoirement, only in development
 * To do this you add in generator.js to topScopes your plugin
 */

module.exports = function devPlugins( answer ) {
    return ( [
        "new webpack.HotModuleReplacementPlugin()"
    ] );
};
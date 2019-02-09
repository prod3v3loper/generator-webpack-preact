/**
 * webpack.pro.js
 */
// Get the pro plugins
// const proPlugins = require('../plugins/pro');

module.exports = function createProConfig( answer ) {

    let proConf = {
        mode: '"production"',
        optimization: {
            usedExports: true,
            minimize: true
        },
        // Insert all plugins is existst in proPlugins()
        // plugins: proPlugins(),
        module: {
            rules: [{
                test: '/\\.(tsx?|jsx?)?$/',
                loader: "'ts-loader'",
                include: 'path.resolve(__dirname, "src")',
                // Load ts pro config
                options: {
                    configFile: '"tsconfig.pro.json"'
                }
            }]
        }
    }

    return proConf;
}
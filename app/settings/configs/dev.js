/**
 * webpack.dev.js
 */

// Get the dev plugins
const devPlugins = require('../plugins/dev');

module.exports = function createDevConfig(answer) {

    let devConf = {
        mode: '"development"',
        optimization: {
            usedExports: true
        },
        devtool: '"inline-source-map"',
        devServer: {
            contentBase: '"./dist"',
            hot: true,
            compress: false,
            port: 9000
        },
        // Insert all plugins is existst in devPlugins()
        plugins: devPlugins(),
        module: {
            rules: [{
                test: '/\\.(tsx?|jsx?)$/',
                loader: "'ts-loader'",
                include: 'path.resolve(__dirname, "src")',
                // Load ts dev config
                options: {
                    configFile: '"tsconfig.dev.json"'
                }
            }]
        }
    }

    return devConf;
}
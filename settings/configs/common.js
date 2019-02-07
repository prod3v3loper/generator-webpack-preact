/**
 * webpack.config.js
 */
const comPlugins = require('../plugins/common');

module.exports = function createComConfig(answer) {

    let comConf = {
        entry: {
            index: answer.entry ? ("'" + answer.entry + "'") : "'./src/index.tsx'"
        },
        // path in single quotes to work
        output: {
            filename: "'[name].bundle.js'",
            path: 'path.resolve(__dirname, "./dist")',
        },

        resolve: {
            extensions: ["'.ts'", "'.tsx'", "'.js'", "'.jsx'"]
        },

        plugins: comPlugins(),

        module: {
            rules: [{
                test: '/\\.s?css$/',
                use: [
                    // Chain the rules to seperate
                    // If sass not exists get css
                    {
                        loader: "'style-loader'",
                        // use when css not import in javascript
                        // options: {
                        //     insertAt: 'top', // Insert style tag at top of <head>
                        //     singleton: true, // this is for wrap all your style in just one style tag
                        // }
                    },
                    {
                        loader: "'css-loader'"
                    },
                    {
                        loader: "'sass-loader'"
                    }
                ],
            }]
        }
    }

    return comConf;
}
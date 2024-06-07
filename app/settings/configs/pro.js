/**
 * webpack.pro.js
 */
// Get the pro plugins
import proPlugins from "../plugins/pro.js";

export default function createProConfig(answer) {
  let proConf = {
    mode: "'production'",
    optimization: {
      usedExports: true,
      minimize: true,
    },
    // Insert all plugins is existst in proPlugins()
    // plugins: proPlugins(),
    module: {
      rules: [
        {
          test: "/\\.(tsx?|jsx?)$/",
          loader: "'babel-loader'",
          exclude: "/node_modules/",
          options: {
            presets: [
              "'@babel/typescript'",
              [
                "'@babel/preset-env'",
                {
                  "'targets'": {
                    "'browsers'": ["'last 2 versions'"],
                  },
                },
              ],
            ],
            plugins: [
              "'@babel/plugin-proposal-object-rest-spread'",
              "'@babel/plugin-proposal-class-properties'",
              ["'@babel/plugin-transform-react-jsx'", { "'pragma'": "'h'" }],
            ],
          },
        },
        {
          test: "/\\.(tsx?|jsx?)?$/",
          loader: "'ts-loader'",
          // include: 'path.resolve(__dirname, "src")',
          exclude: "/node_modules/",
          options: {
            configFile: "tsconfig.json"
          }
        },
      ],
    },
  };

  return proConf;
};

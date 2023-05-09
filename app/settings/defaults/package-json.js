/**
 * The package.json for npm
 *
 * @see https://docs.npmjs.com/files/package.json
 * @see https://yeoman.io/authoring/dependencies.html
 */

module.exports = function createPackageJson(answer) {
  const pkgJsonConf = {
    name: answer.name ? answer.name : "generator-webpack-preact",
    description: answer.description
      ? "'" + answer.description + "'"
      : "This is a Webpack Scaffolding in pro style with separated configs and better understandable in complex environments.",
    version: answer.version ? "'" + answer.version + "'" : "1.0.0",
    author: answer.author
      ? "'" + answer.author + "'"
      : "prod3v3loper",
    private: answer.private ? "'" + answer.private + "'" : true,
    keywords: answer.keywords ? answer.keywords : ["generator-webpack-preact"],
    license: answer.license ? "'" + answer.license + "'" : "MIT License",
    // @see https://docs.npmjs.com/files/package.json#people-fields-author-contributors
    // contributors: [
    //   {
    //     name: "",
    //     email: "",
    //     url: "",
    //   },
    // ],
    bugs: {
      url: answer.bugs
        ? "'" + answer.bugs + "'"
        : "https://github.com/prod3v3loper/generator-webpack-preact/issues",
    },
    repository: {
      type: "git",
      url: answer.repo
        ? "'" + answer.repo + "'"
        : "https://github.com/prod3v3loper/generator-webpack-preact.git",
    },
    scripts: {
      dev: "webpack serve --open --config webpack.dev.js",
      prod: "webpack --config webpack.prod.js",
      watch: "npx webpack watch --mode development"
    },
    devDependencies: {
      "webpack": "^5.81.0",
      "webpack-cli": "^5.0.2",
      "webpack-dev-server": "^4.13.3",
      "webpack-merge": "^5.8.0",
      "css-loader": "^6.7.3",
      "node-sass": "^8.0.0",
      "sass-loader": "^13.2.2",
      "style-loader": "^3.3.2",
      "file-loader": "^6.2.0",
      "ts-loader": "^9.4.2",
      "typescript": "^5.0.4",
      "clean-webpack-plugin": "^4.0.0",
      "html-webpack-plugin": "^5.5.1",
      "@babel/core": "^7.21.5",
      "@babel/plugin-transform-react-jsx": "^7.21.5",
      "@babel/plugin-proposal-class-properties": "^7.18.6",
      "@babel/plugin-proposal-object-rest-spread": "^7.20.7",
      "@babel/preset-env": "^7.21.5",
      "@babel/preset-typescript": "^7.21.5",
      "babel-loader": "^9.1.2"
    },
    dependencies: {
      "preact": "^10.13.2",
      "redux-zero": "^5.1.7"
    }
  };

  return pkgJsonConf;
};

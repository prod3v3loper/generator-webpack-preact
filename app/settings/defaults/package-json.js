/**
 * The package.json for npm
 *
 * @see https://docs.npmjs.com/files/package.json
 * @see https://yeoman.io/authoring/dependencies.html
 */

export default function createPackageJson(answer) {
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
    type: "module",
    scripts: {
      dev: "webpack serve --open --config webpack.dev.js",
      prod: "webpack --config webpack.prod.js",
    },
    devDependencies: {
      "webpack": "^5.91.0",
      "webpack-cli": "^5.1.4",
      "webpack-dev-server": "^5.0.4",
      "webpack-merge": "^5.10.0",
      "css-loader": "^7.1.2",
      "sass": "^1.77.4",
      "sass-loader": "^14.2.1",
      "style-loader": "^4.0.0",
      "file-loader": "^6.2.0",
      "ts-loader": "^9.5.1",
      "typescript": "^5.4.5",
      "clean-webpack-plugin": "^4.0.0",
      "html-webpack-plugin": "^5.6.0",
      "@babel/core": "^7.24.7",
      "@babel/plugin-transform-react-jsx": "^7.24.7",
      "@babel/plugin-proposal-class-properties": "^7.18.6",
      "@babel/plugin-proposal-object-rest-spread": "^7.20.7",
      "@babel/preset-env": "^7.24.7",
      "@babel/preset-typescript": "^7.24.7",
      "babel-loader": "^9.1.3"
    },
    dependencies: {
      "preact": "^10.22.0",
      "redux-zero": "^5.1.7"
    }
  };

  return pkgJsonConf;
};

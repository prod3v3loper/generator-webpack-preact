/**
 * The package.json for npm
 * 
 * @see https://docs.npmjs.com/files/package.json
 * @see https://yeoman.io/authoring/dependencies.html
 */
module.exports = function createPackageJson(answer) {

    const pkgJsonConf = {
        "name": answer.name ? (answer.name) : "generator-webpack-scaffold-pro",
        "description": answer.description ? ("'" + answer.description + "'") : "This is a Webpack Scaffolding in pro style with seperated configs and better understandible in complex environment.",
        "version": answer.version ? ("'" + answer.version + "'") : "1.0.0",
        "author": answer.author ? ("'" + answer.author + "'") : "Samet Tarim aka prod3v3loper",
        "private": answer.private ? ("'" + answer.private + "'") : true,
        "keywords": answer.keywords ? answer.keywords : ["yeoman-generator"],
        "license": answer.license ? ("'" + answer.author + "'") : "MIT",
        // @see https://docs.npmjs.com/files/package.json#people-fields-author-contributors
        // "contributors": [{
        //         name: "Samet Tarim",
        //         email: "",
        //         url: ""
        //     }
        // ],
        "bugs": {
            "url": (answer.bugs ? ("'" + answer.bugs + "'") : "https://github.com/prod3v3loper/webpack-scaffold-generate/issues")
        },
        "repository": {
            "type": "git",
            "url": (answer.repo ? ("'" + answer.repo + "'") : "https://github.com/prod3v3loper/webpack-scaffold-generate.git")
        },
        "scripts": {
            "build:dev": "webpack-dev-server --open --config webpack.dev.js",
            "build:release": "webpack --config webpack.pro.js"
        },
        "devDependencies": {
            "webpack": '^4.28.4',
            "webpack-cli": "^3.2.1",
            "webpack-dev-server": "^3.1.10",
            "webpack-merge": "^4.1.4",
            "css-loader": "^0.28.11",
            "node-sass": "^4.11.0",
            "sass-loader": "^6.0.7",
            "style-loader": "^0.20.3",
            "ts-loader": "^5.3.3",
            "typescript": "^3.2.2",
            "awesome-typescript-loader": "^5.2.1",
            "clean-webpack-plugin": "^0.1.19",
            "html-webpack-plugin": "^3.2.0"
        },
        "dependencies": {
            "preact": "^8.2.5",
            "redux-zero": "^4.10.0"
        }
    }

    return pkgJsonConf;
}

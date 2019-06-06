/**
 * The package.json for npm
 * 
 * @see https://docs.npmjs.com/files/package.json
 * @see https://yeoman.io/authoring/dependencies.html
 */

module.exports = function createPackageJson( answer ) {

    const pkgJsonConf = {
        "name": answer.name ? ( answer.name ) : "generator-webpack-scaffold-pro",
        "description": answer.description ? ( "'" + answer.description + "'" ) : "This is a Webpack Scaffolding in pro style with seperated configs and better understandible in complex environment.",
        "version": answer.version ? ( "'" + answer.version + "'" ) : "1.0.0",
        "author": answer.author ? ( "'" + answer.author + "'" ) : "Samet Tarim aka prod3v3loper",
        "private": answer.private ? ( "'" + answer.private + "'" ) : true,
        "keywords": answer.keywords ? answer.keywords : ["yeoman-generator"],
        "license": answer.license ? ( "'" + answer.author + "'" ) : "MIT",
        // @see https://docs.npmjs.com/files/package.json#people-fields-author-contributors
        // "contributors": [{
        //         name: "Samet Tarim",
        //         email: "",
        //         url: ""
        //     }
        // ],
        "bugs": {
            "url": ( answer.bugs ? ( "'" + answer.bugs + "'" ) : "https://github.com/prod3v3loper/generator-webpack-preact/issues" )
        },
        "repository": {
            "type": "git",
            "url": ( answer.repo ? ( "'" + answer.repo + "'" ) : "https://github.com/prod3v3loper/generator-webpack-preact.git" )
        },
        "scripts": {
            "dev": "webpack-dev-server --open --config webpack.dev.js",
            "release": "webpack --config webpack.pro.js"
        },
        "devDependencies": {
            "webpack": "^4.33.0",
            "webpack-cli": "^3.3.2",
            "webpack-dev-server": "^3.6.0",
            "webpack-merge": "^4.2.1",
            "css-loader": "^2.1.1",
            "node-sass": "^4.12.0",
            "sass-loader": "^7.1.0",
            "style-loader": "^0.23.1",
            "file-loader": "^3.0.1",
            "ts-loader": "^6.0.2",
            "typescript": "^3.5.1",
            "clean-webpack-plugin": "^1.0.1",
            "html-webpack-plugin": "^3.2.0",
            "@babel/core": "^7.2.2",
            "@babel/plugin-transform-react-jsx": "^7.3.0",
            "@babel/plugin-proposal-class-properties": "^7.3.0",
            "@babel/plugin-proposal-object-rest-spread": "^7.3.2",
            "@babel/preset-env": "^7.3.1",
            "@babel/preset-typescript": "^7.1.0",
            "babel-loader": "^8.0.6"
        },
        "dependencies": {
            "preact": "^8.4.2",
            "redux-zero": "^5.0.4"
        }
    };

    return pkgJsonConf;
};
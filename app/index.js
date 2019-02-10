// DEFAULTS
const createGLOBALSjson = require( "./settings/defaults/global" );
const createPackageJson = require( "./settings/defaults/package-json" );
const createDevTsconfig = require( "./settings/defaults/ts-dev-json" );
const createProTsconfig = require( "./settings/defaults/ts-pro-json" );
// Yeoman
const Generator = require( "yeoman-generator" );
// Helper for create empty folders
// const mkdirp = require( 'mkdirp' );
// Scaffold
// const List = require( '@webpack-cli/webpack-scaffold' ).List;
// const Input = require( '@webpack-cli/webpack-scaffold' ).Input;
// Default abstracted configs
const createCommonConfig = require( "./settings/configs/common" );
const createProConfig = require( "./settings/configs/pro" );
const createDevConfig = require( "./settings/configs/dev" );

/**
 * Webpack Scaffolding by prod3v3loper
 *
 * @author      Samet Tarim
 * @copyright   Copyright (C) 2019 Samet Tarim - All rights reserved
 * @license     MIT
 * @version     1.0.0
 * @since       1.0
 * @package     MELABUAI
 * @subpackage  Webpack Scaffold
 * 
 * @see         https://yeoman.io/authoring/index.html
 * @see         https://github.com/webpack/webpack-cli/blob/master/SCAFFOLDING.md
 * @see         https://github.com/evenstensberg/webpack-scaffold-demo
 * @see         https://yeoman.io/authoring/dependencies.html
 * @see         https://github.com/substack/node-mkdirp
 */
module.exports = class WebpackGenerator extends Generator {

    /**
     * Constructor
     * 
     * @param {*} args 
     * @param {*} opts 
     */
    constructor( args, opts ) {

        super( args, opts );

        this.answers = {};
        this.comps = "";
        this.settings = {
            install: false,
            root: ""
        };

        opts.env.configuration = {
            // This create the webpack.config.js
            // This property says set name webpack."config".js
            // We create 3 config files webpack.config.js, webpack.dev.js and webpack.pro.js
            config: {
                topScope: [],
                webpackOptions: {},
                configName: ""
            },
            dev: {
                topScope: [],
                webpackOptions: {},
                configName: ""
            },
            pro: {
                topScope: [],
                webpackOptions: {},
                configName: ""
            }
        };
    }

    /**
     * Prompting
     * 
     * @see https://yeoman.io/authoring/user-interactions.html
     */
    async prompting() {

        // log so 
        // this.log( this );

        // Chain the questions
        this.answers = await this.prompt( [{
            type: "input",
            name: "name",
            message: "Customer name?",
            default: this.appname.replace( /\s/g, "-" ).toLocaleLowerCase() // Default to current folder name
        }, {
            type: "input",
            name: "year",
            message: "Project year?",
            default: "2019"
        }, {
            type: "input",
            name: "project",
            message: "Project name?",
            default: "newsletter"
        }, {
            type: "input",
            name: "components",
            message: "Components you want to use? (counter, todolist, clock)",
            default: ""
        },
        // List('device', 'For Device? (use arrow keys)', ['Online', 'Tablet', 'Mobile']),
        {
            type: "confirm",
            name: "npminstall",
            message: "Want you install all dependencies?",
            default: "Y/n"
        }
        ] );

        this.settings.install = this.answers.npminstall;
        this.comps = this.answers.components;

        // COMMON
        this.options.env.configuration.config.topScope = [
            "const path = require(\"path\")",
            "const CleanWebpackPlugin = require(\"clean-webpack-plugin\")",
            "const HtmlWebpackPlugin = require(\"html-webpack-plugin\")"
        ];
        this.options.env.configuration.config.webpackOptions = createCommonConfig( this.answers );
        this.options.env.configuration.config.configName = "config";

        // DEV
        this.options.env.configuration.dev.topScope = [
            "const path = require(\"path\")",
            "const webpack = require(\"webpack\")",
            "const merge = require(\"webpack-merge\")",
            "const common = require(\"./webpack.config.js\")"
        ];
        this.options.env.configuration.dev.webpackOptions = createDevConfig( this.answers );
        this.options.env.configuration.dev.merge = "common";
        this.options.env.configuration.dev.configName = "dev";

        // PRO
        this.options.env.configuration.pro.topScope = [
            "const path = require(\"path\")",
            "const merge = require(\"webpack-merge\")",
            "const common = require(\"./webpack.config.js\")"
        ];
        this.options.env.configuration.pro.webpackOptions = createProConfig( this.answers );
        this.options.env.configuration.pro.merge = "common";
        this.options.env.configuration.pro.configName = "pro";

        // Define root folder
        this.settings.root = this.answers.name + "/" + this.answers.year + "/" + this.answers.project;
    }

    /**
     * Set destination path
     */
    paths() {

        // Set root folder to destination
        this.destinationRoot( this.settings.root );
    }

    /**
     * Writing write the package.json and config files
     * 
     * @see https://yeoman.io/authoring/file-system.html
     * @see https://github.com/sboudrias/mem-fs-editor
     */
    writing() {

        // Copy tpls from scaffold to project
        this.fs.copyTpl(
            this.templatePath( "sources" ),
            this.destinationPath( "src" )
        );

        this.fs.copyTpl(
            this.templatePath( "public/index.html" ),
            this.destinationPath( 'public/index.html' ),
            { title: "Webpack Preact by prod3v3loper" }
        );

        // package.json
        this.fs.extendJSON( this.destinationPath( "package.json" ), createPackageJson( this.answers ) );

        // global.config.json
        this.fs.extendJSON( this.destinationPath( "global.config.json" ), createGLOBALSjson( this.answers ) );

        // tsconfig.json
        this.fs.extendJSON( this.destinationPath( "tsconfig.dev.json" ), createDevTsconfig( this.answers ) );
        this.fs.extendJSON( this.destinationPath( "tsconfig.pro.json" ), createProTsconfig( this.answers ) );

        // Used components
        if ( this.comps && this.comps.indexOf( ", " ) > -1 || this.comps.indexOf( "," ) > -1 ) {
            // Split components
            this.comps = this.comps + ", welcome";
            let array = this.comps.trim().split( /\s*,\s*/ );
            for ( let i = 0; i < array.length; i++ ) {
                // Copy tpls
                this.fs.copyTpl(
                    this.templatePath( "components/" + array[i] ),
                    this.destinationPath( "components/" + array[i] )
                );
            }
        } else if ( this.comps ) {
            this.log( this.comps );
            // Copy tpls
            this.fs.copyTpl(
                this.templatePath( "components/welcome" ),
                this.destinationPath( "components/welcome" )
            );
            this.fs.copyTpl(
                this.templatePath( "components/" + this.comps ),
                this.destinationPath( "components/" + this.comps )
            );
        } else {
            this.fs.copyTpl(
                this.templatePath( "components/welcome" ),
                this.destinationPath( "components/welcome" )
            );
        }

        this.fs.copyTpl(
            this.templatePath( "configs" ),
            this.destinationPath( "./" )
        );

        this.config.set( "configuration", this.options.env.configuration );
    }

    /**
     * NPM Installs the dependencies
     */
    install() {

        if ( this.settings.install ) {
            this.npmInstall();
        }
    }
};
// DEFAULTS
import createGLOBALSjson from "./settings/defaults/global.js";
import createPackageJson from "./settings/defaults/package-json.js";
import createTsconfig from "./settings/defaults/tsconfig-json.js";
import createBabelJson from "./settings/defaults/babel-json.js";
import createComposerJson from "./settings/defaults/composer-json.js";
// Yeoman
import Generator from "yeoman-generator";
// Helper for create empty folders
// import mkdirp from 'mkdirp';
// Scaffold
// import { List, Input } from "@webpack-cli/webpack-scaffold";
// Default abstracted configs
import createCommonConfig from "./settings/configs/common.js";
import createProConfig from "./settings/configs/pro.js";
import createDevConfig from "./settings/configs/dev.js";

/**
 * Yeoman Webpack Scaffolding
 *
 * @author      prod3v3loper
 * @copyright   Copyright (C) 2021 prod3v3loper - All rights reserved
 * @license     MIT
 * @version     1.4.0
 * @since       1.0.0
 * @package     MELABUAI
 * @subpackage  generator-webpack-preact
 * @link        https://www.prod3v3loper.com
 *
 * @see         https://yeoman.io/authoring/index.html
 * @see         https://github.com/evenstensberg/webpack-scaffold-demo
 * @see         https://yeoman.io/authoring/dependencies.html
 */
export default class WebpackGenerator extends Generator {
  /**
   * Constructor
   *
   * @param {*} args
   * @param {*} opts
   */
  constructor(args, opts) {

    super(args, opts);

    this.answers = {};
    this.comps = "";
    this.settings = {
      install: false,
      root: "",
    };

    // This method adds support for a `--coffee` flag
    // this.option("coffee");

    // This makes `name` a required argument.
    // this.argument("name", { type: String, required: true });
    // this.argument("year", { type: String, required: true });
    // this.argument("project", { type: String, required: true });

    // And you can then access it later; e.g.
    // this.log(this.options.name);

    opts.env = opts.env || {};
    opts.env.configuration = {
      // This create the webpack.config.js
      // This property says set name webpack."config".js
      // We create 3 config files webpack.config.js, webpack.dev.js and webpack.prod.js
      config: {
        topScope: [],
        webpackOptions: {},
        configName: "",
      },
      dev: {
        topScope: [],
        webpackOptions: {},
        configName: "",
      },
      pro: {
        topScope: [],
        webpackOptions: {},
        configName: "",
      },
    };

    this.options.env = opts.env;
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
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Customer name?",
        default: this.appname.replace(/\s/g, "-").toLocaleLowerCase(), // Default to current folder name
      },
      {
        type: "input",
        name: "year",
        message: "Project year?",
        default: new Date().getFullYear(),
      },
      {
        type: "input",
        name: "project",
        message: "Project name?",
        default: "newsletter",
      },
      {
        type: "input",
        name: "components",
        message: "Components you want to import? (counter, todolist, clock)",
        default: ["clock"],
      },
      {
        type: "confirm",
        name: "npminstall",
        message: "Want you install all dependencies?",
        default: "Y/n",
      },
    ]);

    // List("input", "For Device? (use arrow keys)", [
    //   "counter",
    //   "todolist",
    //   "clock",
    // ]);

    this.settings.install = this.answers.npminstall;
    this.comps = this.answers.components;

    // COMMON
    this.options.env.configuration.config.topScope = [
      'const path = require("path")',
      'const CleanWebpackPlugin = require("clean-webpack-plugin")',
      'const HtmlWebpackPlugin = require("html-webpack-plugin")',
    ];
    this.options.env.configuration.config.webpackOptions = createCommonConfig(
      this.answers
    );
    this.options.env.configuration.config.configName = "config";

    // DEV
    this.options.env.configuration.dev.topScope = [
      'const path = require("path")',
      'const webpack = require("webpack")',
      'const merge = require("webpack-merge")',
      'const common = require("./webpack.config.js")',
    ];
    this.options.env.configuration.dev.webpackOptions = createDevConfig(
      this.answers
    );
    this.options.env.configuration.dev.merge = "common";
    this.options.env.configuration.dev.configName = "dev";

    // PRO
    this.options.env.configuration.pro.topScope = [
      'const path = require("path")',
      'const merge = require("webpack-merge")',
      'const common = require("./webpack.config.js")',
    ];
    this.options.env.configuration.pro.webpackOptions = createProConfig(
      this.answers
    );
    this.options.env.configuration.pro.merge = "common";
    this.options.env.configuration.pro.configName = "prod";

    // Define root folder
    this.settings.root =
      this.answers.name + "/" + this.answers.year + "/" + this.answers.project;
  }

  /**
   * Set destination path
   */
  paths() {
    // Set root folder to destination
    this.destinationRoot(this.settings.root);
  }

  /**
   * Writing write the package.json and config files
   *
   * @see https://yeoman.io/authoring/file-system.html
   * @see https://github.com/sboudrias/mem-fs-editor
   */
  writing() {
    // Copy tpls from scaffold to project
    this.fs.copyTpl(this.templatePath("sources"), this.destinationPath("src"));

    this.fs.copyTpl(
      this.templatePath("public/index.html"),
      this.destinationPath("public/index.html"),
      { title: "Webpack Preact by prod3v3loper" }
    );

    // package.json
    this.fs.extendJSON(
      this.destinationPath("package.json"),
      createPackageJson(this.answers)
    );

    // global.config.json
    this.fs.extendJSON(
      this.destinationPath("global.config.json"),
      createGLOBALSjson(this.answers)
    );

    // tsconfig.json
    this.fs.extendJSON(
      this.destinationPath("tsconfig.json"),
      createTsconfig(this.answers)
    );

    this.fs.extendJSON(
      this.destinationPath("babel.config.json"),
      createBabelJson(this.answers)
    );

    this.fs.extendJSON(
      this.destinationPath("composer.json"),
      createComposerJson(this.answers)
    );

    // Used components
    if (
      (this.comps && this.comps.indexOf(", ") > -1) ||
      this.comps.indexOf(",") > -1
    ) {
      // Split components
      this.comps = this.comps + ", welcome";
      let array = this.comps.trim().split(/\s*,\s*/);
      for (let i = 0; i < array.length; i++) {
        // Copy tpls
        this.fs.copyTpl(
          this.templatePath("components/" + array[i]),
          this.destinationPath("src/components/" + array[i])
        );
      }
    } else if (this.comps) {
      this.log(this.comps);
      // Copy tpls
      this.fs.copyTpl(
        this.templatePath("components/welcome"),
        this.destinationPath("src/components/welcome")
      );
      this.fs.copyTpl(
        this.templatePath("components/" + this.comps),
        this.destinationPath("src/components/" + this.comps)
      );
    } else {
      this.fs.copyTpl(
        this.templatePath("components/welcome"),
        this.destinationPath("src/components/welcome")
      );
    }

    this.fs.copyTpl(this.templatePath("configs"), this.destinationPath("./"));

    this.config.set("configuration", this.options.env.configuration);
  }

  /**
   * NPM Installs the dependencies
   */
  install() {
    if (this.settings.install) {
      this.spawnCommand('npm', ['install']);
    }

    // this.spawnCommand('composer', ['install']);
  }
};

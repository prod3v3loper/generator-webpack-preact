# 📦 Generator Webpack Preact

![workflow](https://github.com/prod3v3loper/generator-webpack-preact/actions/workflows/node.js.yml/badge.svg)
![Language](https://img.shields.io/github/languages/top/prod3v3loper/generator-webpack-preact.svg?style=flat "Language")
[![NPM Version](https://img.shields.io/npm/v/generator-webpack-preact.svg?style=flat "NPM Version")](https://www.npmjs.com/package/generator-webpack-preact)
[![NPM Donwloads](https://img.shields.io/npm/dw/generator-webpack-preact.svg?style=flat "NPM Donwloads")](https://www.npmjs.com/package/generator-webpack-preact)
[![Github Latest Release Version](https://img.shields.io/github/release/prod3v3loper/generator-webpack-preact.svg?style=flat "Github Latest Release Version")](https://github.com/prod3v3loper/generator-webpack-preact/releases)
![Github Downloads](https://img.shields.io/github/downloads/prod3v3loper/generator-webpack-preact/latest/total.svg?style=flat "Github Downloads")
[![Commits](https://img.shields.io/github/commit-activity/m/prod3v3loper/generator-webpack-preact.svg?style=flat "Commit Activity")](https://github.com/prod3v3loper/generator-webpack-preact/commits/master)
[![License](https://img.shields.io/npm/l/generator-webpack-preact.svg?style=flat "License")](https://github.com/prod3v3loper/generator-webpack-preact/blob/master/LICENSE)
[![Issues](https://img.shields.io/github/issues/prod3v3loper/generator-webpack-preact.svg?style=flat "Issues")](https://github.com/prod3v3loper/generator-webpack-preact/issues)
![Languages](https://img.shields.io/github/languages/count/prod3v3loper/generator-webpack-preact.svg?style=flat "Language Count")
![Minified](https://img.shields.io/bundlephobia/min/generator-webpack-preact.svg?style=flat "Minified")
![Gzipped](https://img.shields.io/bundlephobia/minzip/generator-webpack-preact.svg?style=flat "Minified & Gzipped")

<img src="https://media4.giphy.com/media/4KzpjLvJjJknJ5Xuak/giphy.gif?cid=ecf05e47t4rc89yc0kv329d4d10ga4ti7qo08pyth1w9c9c6&rid=giphy.gif" width="300"/>

# OVERVIEW

This scaffold creates in seconds for you a professional environment. Code a application in HTML(5), (S)CSS, TS(X) and JS(X). All what you need for Apps.

- [Webpack](https://webpack.js.org/) (Bundler)
- [TypeScript](https://github.com/Microsoft/TypeScript) (Code in ES6 or higher)
- [Preact](https://github.com/developit/preact) (TSX and JSX)
- [Redux-Zero](https://github.com/redux-zero/redux-zero) (Storage)
- [Babel](https://github.com/babel/babel) (Compile back for Browserslist to last 2 versions or other options)

<img src="img/structure.png">

A total solution for your projects. You have with this scaffold the followed.

- 5 Prompts for create the project.
- Automatically install dependencies after scaffolding ready.
- Development Server with Hot Module Replacement (HMR) ready.
  - Welcome window with introduction for next steps after install.
- Configs was splited to development and production.
  - Split to:
    - webpack.config.js (common)
    - webpack.dev.js (merged with webpack.config.js)
    - webpack.pro.js (merged with webpack.config.js)
    - tsconfig.js (merged with webpack.dev.js & webpack.prod.js)
- Plugins inside and ready to add more.
  - Inside Plugins:
    - [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)
    - [Clean Webpack Plugin](https://github.com/johnagan/clean-webpack-plugin)
- You can create more components, example components inside and chooseable.
  - Inside components:
    - [Components Examples](https://preactjs.com/)

More information over the [Project Structur](https://github.com/prod3v3loper/generator-webpack-preact#what-this-do)

# INSTALL

1. Install [Node.js](https://nodejs.org/en/) to use the [NPM](https://www.npmjs.com/) (Node Package Manager), if not installed.
  - Check your NPM version `npm -v`
  - Additional you can install [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) (Node Version Manager) to change version.
2. We use `yo` ([Yeoman Generator](https://yeoman.io/)) to install the scaffold and start with it.
  - Also install yeoman global `npm install -g yo`

## LOCAL

> To use only in your project.

Switch to your projects folder, to install it in the project.

```bash
username$ cd /Users/username/projects/
```

And install.

```bash
projects$ npm i generator-webpack-preact
```

Now call yeoman.

```bash
projects$ yo
```

If promt a call

```bash
? 'Allo prod3v3loper,! What would you like to do? (Use arrow keys)
  Run a generator
> webpack-preact
```

or say yeoman directly the generator you want to use.

```bash
projects$ yo webpack-preact
```

Enter and create your project. You are ready to developing.

## GLOBAL

> To use it from everywhere install the generator global.

```bash
projects$ npm i -g generator-webpack-preact
```

No local install need anymore, you cann now call everytime everywhere `yo webpack-preact`.

```bash
projects$ yo
```

If promt a call

```bash
? 'Allo prod3v3loper,! What would you like to do? (Use arrow keys)
  Run a generator
> webpack-preact
```

or directly

```bash
projects$ yo webpack-preact
```

Enter and create your project. You are ready to developing.

# Promt for the solution

And we become a promt, after choose our generator `webpack preact` ;)

```bash
? Customer name? (customer)
? Project year? (2019)
? Project name? (newsletter)
? Components you want to use? (type comma seperated) (counter)
? Want you install all dependencies? Y/n
```

After answerring all questions, start the create process.

```bash
   create src/index.tsx
   create src/scss/style.scss
   create public/index.html
   create package.json
   create global.config.json
   create tsconfig.json
   create webpack.config.js
   create webpack.dev.js
   create webpack.pro.js
   create src/components/counter/actions.js
   create src/components/counter/counter.js
   create src/components/counter/store.js
```

# What this do

The following structure is created after the prompt input. With the typed data.

```
Projects
|
├── customer/ (prompt: project name)
|   └── year/ (prompt: 2019)
|       └── project/ (prompt: newsletter)
|           └── public/
|           |   └── index.html
|           └── src/
|           |   └── scss/
|           |   |   └── style.scss
|           |   └── index.tsx
|           └── components/ (prompt: type comma seperated)
|               └── counter/
|                   └── actions.js
|                   └── counter.js
|                   └── store.js
```

But the idea behind it is to collect and manage all our projects in our projects folder. So every time we call the generator in our projects folder and create a new project with customer name, it will be added to the others.

```
Projects
|
├── customer/ (prompt: project name)
|   └── year/ (prompt: 2019)
|       └── project/ (prompt: newsletter)
|           └── public/
|           |   └── index.html
|           └── src/
|           |   └── scss/
|           |   |   └── style.scss
|           |   └── index.tsx
|           └── components/ (prompt: type comma seperated)
|               └── counter/
|                   └── actions.js
|                   └── counter.js
|                   └── store.js
|
├── another-customer/
|   └── 2018/
|   |   └── project1/
|   |   |   └── ...
|   |   └── project2/
|   |       └── ...
|   └── 2019/
|       └── project1/
|       |   └── ...
|       └── project2/
|           └── public/
|           |   └── index.html
|           └── src/
|           |   └── scss/
|           |   |   └── style.scss
|           |   └── index.tsx
|           └── components/ (prompt: type comma seperated)
|               └── counter/
|                   └── actions.js
|                   └── counter.js
|                   └── store.js

```

# USAGE

Now run and see the Magic :)

Switch to the new project folder we have created. (You typed in the prompt default **newsletter**)

```bash
projects$ cd /Users/username/projects/customer/year/newsletter
```

If you not installed dependencies in the prompts, then install first.

```bash
newsletter$ npm install
```

This command start the Server with the hotmodule.

```bash
newsletter$ npm run dev
```

This command build the dist folder with the end product.

```bash
newsletter$ npm run prod
```

To close (stop the localhost server) the NPM run type in console (Terminal):
Ctrl + C

# COMPONENTS

Create your own components, or request a feature issue. Here two samples.

## Images or Videos

Import your sass or css files in easy way.
Import all your images and videos.

```scss
.maa-slider {
  width: 100%;
  height: 100%;

  &__inner {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: lightgrey;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
}
```

This example will show how to get pictures or videos from a folder with this setup.

```jsx
import "./scss/slider.scss";
import { h, render, Component } from "preact";

export default class Slider extends Component {
  images = [];
  videos = [];

  constructor() {
    super();

    // Load all images from foler
    this.images = this.importDefault(
      require.context("./img", false, /\.(png|jpe?g|svg)$/)
    );
    // Load all videos from folder
    this.videos = this.importDefault(
      require.context("./video", false, /\.(mp4)$/)
    );

    console.log(this.images);
    console.log(this.videos);
  }

  importDefault(r) {
    return r.keys().map(r);
  }

  render(props) {
    this.items = this.images.map((item, key) => (
      <li class="maa-slider__item">
        <img src={item} alt=""></img>
      </li>
    ));

    return (
      <div class="maa-slider">
        <div class="maa-slider__inner">
          <ul class="maa-slider__list">{this.items}</ul>
        </div>
      </div>
    );
  }
}
```

# Uninstall

**NPM**

Local

```bash
projects$ npm uninstall generator-webpack-preact
```

Global

```bash
projects$ npm uninstall -g generator-webpack-preact
```

# ISSUE

Please use the issue tab to request a:

* Bug
* Feature

Choose template and report a bug or feature you want [issues](https://github.com/prod3v3loper/generator-webpack-preact/issues).

# CONTRIBUTE

Please read the [contributing](https://github.com/prod3v3loper/generator-webpack-preact/blob/master/.github/CONTRIBUTING.md) to contribute.

# VULNERABILITY

Please use the Security section for privately reporting a [vulnerability](https://github.com/prod3v3loper/generator-webpack-preact/security).

# PACKAGE

You find generator-webpack-preact in [Yeoman generator](https://yeoman.io/generators/), [NPM](https://www.npmjs.com/) and on [Github](https://github.com/).

[NPM - generator-webpack-preact](https://www.npmjs.com/package/generator-webpack-preact)

[GitHub - generator-webpack-preact](https://github.com/prod3v3loper/generator-webpack-preact)

[Github Theme - generator-webpack-preact](https://prod3v3loper.github.io/generator-webpack-preact/)

# AUTHOR

[prod3v3loper](https://www.prod3v3loper.com)

# SUPPORT

[Hyperly](https://www.hyperly.de)

# LICENSE

[MIT](https://github.com/prod3v3loper/generator-webpack-preact/blob/master/LICENSE)

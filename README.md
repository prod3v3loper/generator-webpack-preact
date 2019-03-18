# Generator Webpack Preact

![Language](https://img.shields.io/github/languages/top/prod3v3loper/generator-webpack-preact.svg?style=flat "Language")
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/96c9667f61854441b426a81a96deb52a)](https://www.codacy.com/app/prod3v3loper/generator-webpack-preact?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=prod3v3loper/generator-webpack-preact&amp;utm_campaign=Badge_Grade)
[![Travis CI](https://img.shields.io/travis/prod3v3loper/generator-webpack-preact.svg?style=flat "Travis CI")](https://travis-ci.org/prod3v3loper/generator-webpack-preact)
[![NPM Version](https://img.shields.io/npm/v/generator-webpack-preact.svg?style=flat "NPM Version")](https://www.npmjs.com/package/generator-webpack-preact)
[![NPM Donwloads](https://img.shields.io/npm/dw/generator-webpack-preact.svg?style=flat "NPM Donwloads")](https://www.npmjs.com/package/generator-webpack-preact)
[![Github Latest Release Version](https://img.shields.io/github/release/prod3v3loper/generator-webpack-preact.svg?style=flat "Github Latest Release Version")](https://github.com/prod3v3loper/generator-webpack-preact/releases)
![Github Downloads](https://img.shields.io/github/downloads/prod3v3loper/generator-webpack-preact/latest/total.svg?style=flat "Github Downloads")
[![Commits](https://img.shields.io/github/commit-activity/m/prod3v3loper/generator-webpack-preact.svg?style=flat "Commit Activity")](https://github.com/prod3v3loper/generator-webpack-preact/commits/master)
[![License](https://img.shields.io/npm/l/generator-webpack-preact.svg?style=flat "License")](https://github.com/prod3v3loper/generator-webpack-preact/blob/master/LICENSE)
[![Issues](https://img.shields.io/github/issues/prod3v3loper/generator-webpack-preact.svg?style=flat "Issues")](https://github.com/prod3v3loper/generator-webpack-preact/issues)
![Languages](https://img.shields.io/github/languages/count/prod3v3loper/generator-webpack-preact.svg?style=flat "Language Count")
[![Dependencies status](https://david-dm.org/prod3v3loper/generator-webpack-preact.svg "Dependencies status")](https://david-dm.org/prod3v3loper/generator-webpack-preact)
![Minified](https://img.shields.io/bundlephobia/min/generator-webpack-preact.svg?style=flat "Minified")
![Gzipped](https://img.shields.io/bundlephobia/minzip/generator-webpack-preact.svg?style=flat "Minified & Gzipped")

This scaffold creates in seconds for you a professional environment to develop with a package of [Webpack](https://webpack.js.org/), [TypeScript](https://github.com/Microsoft/TypeScript), [Preact](https://github.com/developit/preact), [Redux-Zero](https://github.com/redux-zero/redux-zero) and [Babel](https://babeljs.io/). Code a application in HTML (5), SASS (CSS), TS (X) and JS (X).

- Webpack (Bundler)
- TypeScript (Code in ES6 or higher) 
- Preact (TSX and JSX)
- Redux-Zero (Storage) 
- Babel (Compile back for Browserslist to last 2 versions or other options)

A total solution for your projects. You have with this scaffold the followed.

- Install with [yeoman](https://yeoman.io/) and [webpack](https://github.com/webpack/webpack-cli).
- 5 Prompts for create the project.
- NPM Install dependencies after scaffolding ready.
- Development Server with Hot Module Replacement (HMR) ready.
   - Welcome window with introduction for next steps after install.
- Configs was splited to development and production.
    - Split to:
        - webpack.config.js (common)
        - webpack.dev.js (merged with webpack.config.js)
        - webpack.pro.js (merged with webpack.config.js)
        - tsconfig.dev.js (merged with webpack.dev.js)
        - tsconfig.pro.js (merged with webpack.pro.js)
- Plugins inside and ready to add more.
     - Inside Plugins:
        - [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)
        - [Clean Webpack Plugin](https://github.com/johnagan/clean-webpack-plugin)
- You can create more components, example components inside and chooseable.
    - Inside components:
       - [Counter](https://matheusml1.gitbooks.io/redux-zero-docs/content/examples/preact.html)
       - [Clock](https://preactjs.com/guide/getting-started)
       - [TodoList](https://preactjs.com/)

More information over the [Project Structur](https://github.com/prod3v3loper/generator-webpack-preact#what-this-do)

You find generator-webpack-preact in [Yeoman generator](https://yeoman.io/generators/), [NPM](https://www.npmjs.com) and on Github.

[NPM - generator-webpack-preact](https://www.npmjs.com/package/generator-webpack-preact)

[GitHub - generator-webpack-preact](https://github.com/prod3v3loper/generator-webpack-preact)

[Github Theme - generator-webpack-preact](https://prod3v3loper.github.io/generator-webpack-preact/)

Install in two ways, choose your favourite.

# Install with npm and use with Yeoman

> NPM and Yeoman

Install [Node.js](https://nodejs.org/en/) to use the Node Package Manager (NPM).
You can use `yo` (Yeoman) to install the scaffold and start with it.

Switch to the projects folder.
```
username$ cd /Users/username/projects/
```

```
projects$ npm i generator-webpack-preact
```
```
projects$ yo
```
If promt a call
```
? 'Allo Tarim,! What would you like to do? (Use arrow keys)
  Run a generator
> webpack-preact
```
or directly
```
projects$ yo webpack-preact
```

Enter and create your project

## Or install the generator global

```
projects$ sudo npm i -g generator-webpack-preact
```
Type password and now run in your project folder
```
projects$ yo
```
If promt a call
```
? 'Allo Tarim,! What would you like to do? (Use arrow keys)
  Run a generator
> webpack-preact
```
or directly
```
projects$ yo webpack-preact
```

Enter and create your project

# Install with Git and use with Webpack

> Git and Webpack

Install [Git](https://git-scm.com/) to clone with it.
Create a Scaffold Templates folder and open your Terminal, to switch in the folder.
```
username$ cd /Users/username/scaffold/templates/
```

Clone the repo or download to the place, you want your templates.
```
templates$ git clone https://github.com/prod3v3loper/generator-webpack-preact.git /Users/username/scaffold/templates/
```

And now install all Dependencies in package.json for the generator
```
templates$ npm install
```

Now create your main Projects folder. This folder contains all projects that we then create.

Switch to the projects folder.
```
templates$ cd /Users/username/projects/
```

Start the scaffolding with `webpack init` the [webpack-cli init](https://github.com/webpack/webpack-cli/blob/master/packages/init/README.md#webpack-cli-init) from our scaffold templates folder with the template `generator-webpack-preact`
```
projects$ webpack init /Users/username/scaffold/templates/generator-webpack-preact
```

# Promt for the two solutions

And we become a promt ;)

```
? Customer name? (customer)
? Project year? (2019)
? Project name? (newsletter)
? Components you want to use? (type comma seperated) (counter)
? Want you install all dependencies? Y/n
```

After answer all questions start the create 
```
   create src/index.tsx
   create src/scss/style.scss
   create public/index.html
   create package.json
   create global.config.json
   create tsconfig.dev.json
   create tsconfig.pro.json
   create src/components/counter/actions.js
   create src/components/counter/counter.js
   create src/components/counter/store.js
   create webpack.config.js
   create webpack.dev.js
   create webpack.pro.js
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
|               └── components/ (prompt: type comma seperated)
|               |   └── counter/
|               |       └── actions.js
|               |       └── counter.js
|               |       └── store.js
|               └── scss/
|               |   └── style.scss
|               └── index.tsx
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
|               └── components/ (prompt: type comma seperated)
|               |   └── counter/
|               |       └── actions.js
|               |       └── counter.js
|               |       └── store.js
|               └── scss/
|               |   └── style.scss
|               └── index.tsx
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
|               └── components/
|               |   └── counter/
|               |       └── actions.js
|               |       └── counter.js
|               |       └── store.js
|               └── scss/
|               |   └── style.scss
|               └── index.tsx

```

# Usage

Now run and see the Magic :)

Switch to the new project folder we have created. (You typed in the prompt default **newsletter**)
```
projects$ cd /Users/username/projects/customer/year/newsletter
```
If you not installed dependencies in the prompts, then install first.
```
newsletter$ npm install
```

This command start the Server with the hotmodule.
```
newsletter$ npm run dev
```
This command build the dist folder with the end product.
```
newsletter$ npm run release
```
## Create a Component

### SASS and CSS - Images and Videos

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

```jsx

import "./scss/slider.scss";
import { h, render, Component } from "preact";

export default class Slider extends Component {

    images = [];
    videos = [];

    constructor() {

        super();

        this.images = this.importDefault(require.context('./img', false, /\.(png|jpe?g|svg)$/));
        this.videos = this.importDefault(require.context('./video', false, /\.(mp4)$/));

        console.log(this.images);
        console.log(this.videos);
    }

    importDefault(r) {
        return r.keys().map(r);
    }

    render( props ) {

        this.items = this.images.map( 
            (item, key) => <li class="maa-slider__item"><img src={item} alt=""></img></li>
        );

        return ( 
            <div class="maa-slider">
                <div class="maa-slider__inner">
                    <ul class="maa-slider__list">
                        {this.items}
                    </ul>
                </div>
            </div>
         );
    }
}
```

# Uninstall

**NPM**

Local
```
projects$ npm uninstall generator-webpack-preact
```
Global
```
projects$ npm uninstall -g generator-webpack-preact
```

# Contribute

Please read the [contributing](https://github.com/prod3v3loper/generator-webpack-preact/blob/master/CONTRIBUTING.md).

# Authors

**Samet Tarim** - *All works*

# License

[MIT](https://github.com/prod3v3loper/generator-webpack-preact/blob/master/LICENSE) - [prod3v3loper](https://www.tnado.com/author/prod3v3loper/)

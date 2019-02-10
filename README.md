# Generator Webpack Preact

[![NPM Version](https://img.shields.io/npm/v/generator-webpack-preact.svg?style=flat "NPM Version")](https://www.npmjs.com/package/generator-webpack-preact)
![NPM Donwloads](https://img.shields.io/npm/dw/generator-webpack-preact.svg?style=flat "NPM Donwloads")
[![Github Latest Release Version](https://img.shields.io/github/release/prod3v3loper/generator-webpack-preact.svg?style=flat "Github Latest Release Version")](https://github.com/prod3v3loper/generator-webpack-preact/releases)
![Github Downloads](https://img.shields.io/github/downloads/prod3v3loper/generator-webpack-preact/latest/total.svg?style=flat "Github Downloads")
[![Travis CI](https://img.shields.io/travis/prod3v3loper/generator-webpack-preact.svg?style=flat "Travis CI")](https://travis-ci.org/prod3v3loper/generator-webpack-preact)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/96c9667f61854441b426a81a96deb52a)](https://www.codacy.com/app/prod3v3loper/generator-webpack-preact?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=prod3v3loper/generator-webpack-preact&amp;utm_campaign=Badge_Grade)
![Languages](https://img.shields.io/github/languages/count/prod3v3loper/generator-webpack-preact.svg?style=flat "Language Count")
![Commits](https://img.shields.io/github/commit-activity/m/prod3v3loper/generator-webpack-preact.svg?style=flat "Commit Activity")
![Minified](https://img.shields.io/bundlephobia/min/generator-webpack-preact.svg?style=flat "Minified")
![Gzipped](https://img.shields.io/bundlephobia/minzip/generator-webpack-preact.svg?style=flat "Minified & Gzipped")
![License](https://img.shields.io/npm/l/generator-webpack-preact.svg?style=flat "License")
![Issues](https://img.shields.io/github/issues/prod3v3loper/generator-webpack-preact.svg?style=flat "Issues")

[Github Theme Page](https://prod3v3loper.github.io/generator-webpack-preact/)

This scaffold creates in seconds for you a professional environment to develop with a package of [Webpack](https://webpack.js.org/), [TypeScript](https://github.com/Microsoft/TypeScript), [Preact](https://github.com/developit/preact) and [Redux-Zero](https://github.com/redux-zero/redux-zero) a application in HTML, SASS, TS(X) and JS(X).

Start in seconds with your project. You have with this scaffold generator the followed.

- Welcome window with introduction for next steps.
- Development Server with Hot Module Replacement (HMR) ready.
- Install packages after scaffolding ready.
- Configs was splited to development and production.
    - Split to:
        - webpack.config.js
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

Serach in [Yeoman generator](https://yeoman.io/generators/) for webpack-preact or preact.

# Install with npm and use with Yeoman

Install [Node.js](https://nodejs.org/en/) ([npm](https://www.npmjs.com) is inside) to use the Node Package Manager.
You can use yo ([Yeoman](https://yeoman.io/)) to install the scaffold and start with it.

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

Start the scaffolding with the [webpack-cli init](https://github.com/webpack/webpack-cli) from our scaffold templates folder with the template `generator-webpack-preact`
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

├── customer/ (project name)
|   └── year/ (2019)
|       └── project/ (newsletter)
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

But the idea behind it is to collect and manage all our projects in our projects folder. So every time we call the generator in our projects folder and create a new project with customer name, it will be added to the others.

```
Projects

├── customer/ (project name)
|   └── year/ (2019)
|       └── project/ (newsletter)
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
newsletter$ npm run build:dev
```
This command build the dist folder with the end product.
```
newsletter$ npm run build:release
```

# Contribute

Please [file an issue](https://github.com/prod3v3loper/generator-webpack-preact/issues) if you
think something could be improved. Please submit Pull Requests when ever
possible.

# Authors

* **Samet Tarim** - *All works* - [prod3v3loper](https://www.tnado.com/author/prod3v3loper/)

# License

[MIT](https://github.com/prod3v3loper/generator-webpack-preact/blob/master/LICENSE)

# Generator Webpack Preact

![alt text](https://img.shields.io/npm/v/generator-webpack-preact.svg?style=flat "NPM Version")
![alt text](https://img.shields.io/npm/l/generator-webpack-preact.svg?style=flat "License")
![alt text](https://img.shields.io/github/languages/count/hyp3rly/generator-webpack-preact.svg?style=flat "Language Count")
![alt text](https://img.shields.io/github/commit-activity/m/hyp3rly/generator-webpack-preact.svg?style=flat "Commit Activity")
![alt text](https://img.shields.io/bundlephobia/min/generator-webpack-preact.svg?style=flat "Minified")
![alt text](https://img.shields.io/bundlephobia/minzip/generator-webpack-preact.svg?style=flat "Minified & Gzipped")

This scaffold creates in seconds for your a professional envoirement to develop with Webpack, TypeScript, Preact and Redux-Zero a website in HTML, SASS, TS(X) and JS(X).

- You can create more components and choose it in the scaffolding.
- Development Server with Hot Module Replacement (HMR) ready.
- Configs was splited to development and production
- Plugins inside and ready to add more
- Install packages after scaffolding ready

# Install

You can download, open in your editor and start it directly.

Or create a Scaffold Templates folder and open your Terminal, to switch in the folder.
```
username$ cd /Users/username/scaffold/templates/
```

Clone the repo or download to the place, you want your templates.
```
templates$ git clone https://github.com/hyp3rly/generator-webpack-preact.git /Users/username/scaffold/templates/
```

And now install all Dependencies in package.json for the generator
```
templates$ npm install
```

# Usage

Now create your main Projects folder. This folder contains all projects that we then create.

Switch to the projects folder.
```
templates$ cd /Users/username/projects/
```

Start the scaffolding from our scaffold templates folder with the template `Scaffer`
```
projects$ webpack init /Users/username/scaffold/templates/generator-webpack-preact
```

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
```

# Build

Switch to the new project folder we have created.
```
projects$ cd /Users/username/projects/counter
```

This command start the Server with the hotmodule.
```
counter$ npm run build:dev
```
This command build the dist folder with the end product.
```
counter$ npm run build:release
```

# Contribute

Please [file an issue](https://github.com/hyp3rly/generator-webpack-preact/issues) if you
think something could be improved. Please submit Pull Requests when ever
possible.

# Authors

* **Samet Tarim** - *All works* - [prod3v3loper](https://www.tnado.com/author/prod3v3loper/)

# License

[MIT](https://github.com/hyp3rly/generator-webpack-preact/blob/master/LICENSE)

/**
 * Typescript config for development, this file call in webpack.dev.js
 *
 * @see https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
 * @see https://www.typescriptlang.org/docs/handbook/compiler-options.html
 */

module.exports = function createTsconfigJson(answer) {
  let tsJsonConf = {
    // https://www.typescriptlang.org/docs/handbook/compiler-options.html
    compilerOptions: {
      strict: true,
      /* Enable all strict type-checking options. */
      // "allowSyntheticDefaultImports": true,
      sourceMap: true,
      noImplicitAny: false,
      removeComments: false,
      preserveConstEnums: true,
      target: answer.target ? "'" + answer.target + "'" : "ES6",
      /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'. */
      module: "commonjs",
      /* Specify module code generation: 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
      outDir: "./dist",
      /* Redirect output structure to the directory. */
      jsx: "react",
      jsxFactory: "h",
      allowJs: true,
      // "lib": [
      //     "es6",
      //     "dom"
      // ]
    },
    include: ["src/*.ts", "src/*.tsx"],
  };

  return tsJsonConf;
};

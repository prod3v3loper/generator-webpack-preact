/**
 * Typescript config for production, this file call in webpack.pro.js
 *
 * @see https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
 * @see https://www.typescriptlang.org/docs/handbook/compiler-options.html
 */

export default function createTsconfigJson(answer) {
  let tsJsonConf = {
    // https://www.typescriptlang.org/docs/handbook/compiler-options.html
    compilerOptions: {
      forceConsistentCasingInFileNames: true,
      strict: true,
      /* Enable all strict type-checking options. */
      // "allowSyntheticDefaultImports": true,
      sourceMap: false,
      noImplicitAny: false,
      removeComments: true,
      preserveConstEnums: true,
      target: answer.target ? "'" + answer.target + "'" : "ES6",
      /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'. */
      module: "ESNext",
      /* Specify module code generation: 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
      outDir: "./dist",
      /* Redirect output structure to the directory. */
      jsx: "react",
      jsxFactory: "h",
      allowJs: true,
      moduleResolution: "node",
      esModuleInterop: true,
      skipLibCheck: true,
      allowSyntheticDefaultImports: true
      // "lib": [
      //     "es6",
      //     "dom"
      // ]
    },
    include: ["src/*.js", "src/*.jsx", "src/*.ts", "src/*.tsx"],
  };

  return tsJsonConf;
};

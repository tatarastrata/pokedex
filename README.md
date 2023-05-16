# react-ts template

React app with

- TypeScript (`./tsconfig.json`);
- Webpack - `./webpack/webpack.config.js` is set up for environments `dev` and `prod` (consider the need in `stage`);
- ESlint and Prettier (`./eslintrc.js`, `./prettierrc.js`);
- Husky for prevention linting and formatting mistakes to be committed;
- Babel loader package for transpiling javascript files;
- React-refresh plugin to avoid browser reload on changes;
- Plop for creating project templates (`./plopfile.js`, `./templates/*ts.hbs`);
- dependabot.yml file for tracking project dependencies;

### UPCOMING

- base styles

init package.json file in the root directory (`--y` takes default values)

```
npm init --y
```

```
"scripts": {
    "start": "webpack serve --config webpack/webpack.config.js --env env=dev",
    "lint": "eslint --fix \"./src/**/*.{js,jsx,ts,tsx,json}\"",
    "format": "prettier --write \"./src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\"",
    "plop": "plop"
  },
```

Don't forget to install ESlint, Prettier extensions in VSCode.

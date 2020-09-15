# @thtliife/eslint-config

This is my very opinionated linting setup, designed for new projects.

_On install, this will create the following files in your package directory._

- `.eslintrc.js`
- `.prettierrc.js`
- `babel.config.js`

**Warning:** If any of these files exist in your project directory, they will be overwritten.

If you still want to continue, install by simply running the following in a new project folder.

```bash
npm init -y
npm install --save-dev @thtliife/eslint-config
```

or alternatively if you prefer the `yarn` package manager:

```bash
yarn init -y
yarn add --dev @thtliife/eslint-config
```

Linting for prettier, with babel and react should then be configured automatically.

Good luck :)

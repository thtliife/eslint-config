# @thtliife/eslint-config

This is my very opinionated linting setup, designed for new projects.

_On install, this will create the following files in your package directory._

- `.eslintrc.js`
- `.prettierrc.js`
- `babel.config.js`

Install by simply running the following in a new project folder.

```bash
pnpm init -y
# peer dependencies that you will need for everything to work
pnpm add --save-dev @babel/core @babel/eslint-parser @babel/eslint-plugin @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods @babel/preset-env @babel/preset-react eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier
pnpm add --save-dev @thtliife/eslint-config
```

Linting for prettier, with babel and react should then be configured for you.

Good luck :)

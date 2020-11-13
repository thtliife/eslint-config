# @thtliife/eslint-config

This is my very opinionated linting setup, designed for new projects.

_On install, this will create / update the following files in your package directory._

- `.eslintrc.js`
- `.prettierrc.js`
- `babel.config.js`

**Warning:** If any of these files exist in your project directory, they will be modified.

I like the [pnpm package manager](https://pnpm.js.org/) personally, but you can use whichever package manager you like.
I have tested using `pnpm add --save-dev`, `yarn add --save-dev` & `npm install --save-dev`, and all of these package managers work just fine.
If you still want to continue, install by simply running the following in a new project folder.

```bash
# Initialise a new project (Optional)
pnpm init -y
```

```bash
# Install peer dependencies
pnpx install-peerdeps --dev @thtliife/eslint-config
```

```bash
# Install repo-config
pnpm add --save-dev @thtliife/repo-config
```

glhf :)

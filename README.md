# @thtliife/eslint-config

This is my very opinionated linting setup, for my javascript projects.

_On install, this will create / update the following files in your package directory._

- `.eslintrc.js`
- `.prettierrc.js`
- `babel.config.js`

**Warning:** If any of these files exist in your project directory, they will be modified.

I like the [pnpm package manager](https://pnpm.js.org/) personally, but you can use whichever package manager you like.
I have tested using `pnpm add --save-dev`, `yarn add --save-dev` & `npm install --save-dev`, and all of these package managers work just fine.
If you still want to continue, install by simply running the following in a new project folder.

#### pnpm

```bash
# Initialise a new project (Optional)
pnpm init -y

# Install peer dependencies
pnpx install-peerdeps --pnpm --dev @thtliife/eslint-config

# Install eslint-config
pnpm add --save-dev @thtliife/eslint-config
```

---

### Other package managers

#### npm

```bash
# Initialise a new project (Optional)
npm init -y

# Install peer dependencies
npx install-peerdeps --dev @thtliife/eslint-config

# Install eslint-config
npm install --save-dev @thtliife/eslint-config
```

#### yarn

```bash
# Initialise a new project (Optional)
yarn init -y

# Install peer dependencies
npx install-peerdeps --yarn --dev @thtliife/eslint-config

# Install eslint-config
yarn add --save-dev @thtliife/eslint-config
```

glhf :)

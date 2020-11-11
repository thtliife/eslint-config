module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
    '@thtliife'
  ],
  env: { browser: true, commonjs: true, es2021: true, node: true, es6: true },
  globals: {},
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { impliedStrict: true, jsx: true }
  },
  plugins: ['import', 'jsx-a11y', 'prettier', 'react', 'react-hooks', '@babel'],
  settings: {
    'import/resolver': { node: { extensions: ['.mjs', '.js', '.json'] } },
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$']
  },
  ignorePatterns: ['**/vendor/*'],
  rules: {
    'new-cap': 'off',
    '@babel/new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
      }
    ],
    'no-invalid-this': 'off',
    '@babel/no-invalid-this': ['error', { capIsConstructor: true }],
    'no-unused-expressions': 'off',
    '@babel/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false
      }
    ]
  }
};

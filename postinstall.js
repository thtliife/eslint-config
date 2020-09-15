/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

// eslint-disable-next-line import/no-dynamic-require
const packageJson = require(path.resolve(process.env.INIT_CWD, 'package.json'));

if (packageJson?.name === '@thtliife/eslint-config') {
  console.log(
    `we are in the core '${packageJson.name}' package.\nnothing to do...`
  );
  return;
}

/* create project config files */

const eslintConfig = `module.exports = {
  extends: ['@thtliife${
    packageJson?.name === 'now' ? '/eslint-config/service-now' : ''
  }']
};
`;

const babelConfig = `module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods'
  ]
};
`;

const prettierConfig = `module.exports = {
  arrowParens: 'avoid',
  singleQuote: true,
  trailingComma: 'none',
  vueIndentScriptAndStyle: true
};
`;

const destinationPath = process.env.INIT_CWD;
const eslintFile = path.resolve(destinationPath, '.eslintrc.js');
const babelFile = path.resolve(destinationPath, 'babel.config.js');
const prettierFile = path.resolve(destinationPath, '.prettierrc.js');

fs.writeFile(eslintFile, eslintConfig, 'utf8', err => {
  if (err) {
    throw err;
  }
  console.log(`created '.eslintrc.js' successfully`);
});

fs.writeFile(babelFile, babelConfig, 'utf8', err => {
  if (err) {
    throw err;
  }
  console.log(`created 'babel.config.js' successfully`);
});

fs.writeFile(prettierFile, prettierConfig, 'utf8', err => {
  if (err) {
    throw err;
  }
  console.log(`created '.prettierrc.js' successfully`);
});

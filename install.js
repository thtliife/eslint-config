/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

/* install peer dependencies */

exec(
  'npx install-peerdeps --dev @thtliife/eslint-config',
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);

/* create project config files */

const eslintConfig = `module.exports = {
  extends: ['@thtliife']
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
const prettierFile = path.resolve(destinationPath, '.prettier.js');

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
  console.log(`created '.eslintrc.js' successfully`);
});

fs.writeFile(prettierFile, prettierConfig, 'utf8', err => {
  if (err) {
    throw err;
  }
  console.log(`created '.eslintrc.js' successfully`);
});

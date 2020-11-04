/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-unreachable */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const cwd = process.env.INIT_CWD || '';

// eslint-disable-next-line import/no-dynamic-require
const packageJson = require(path.resolve(cwd, 'package.json'));
const { name: packageName } = packageJson;

const merge = (target, source) => {
  const isObject = obj => obj && typeof obj === 'object';

  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach(key => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue
        .filter(el => !sourceValue.includes(el))
        .concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = merge({ ...targetValue }, sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
};

if (packageName === '@thtliife/eslint-config.disabled') {
  console.log(
    `we are in the core '${packageJson.name}' package.\nnothing to do...`
  );
  return;
}

const buildConfig = ({ file, config = {} }) => {
  const prettier = require('prettier');
  const prettierOptions = require(path.resolve(
    __dirname,
    '..',
    '.prettierrc.js'
  ));
  let fileContent;

  try {
    fileContent = require(file);
  } catch {
    fileContent = {};
  }
  return prettier.format(
    `module.exports = ${JSON.stringify(merge(fileContent, config))}`,
    { ...prettierOptions, parser: 'babel' }
  );
};

const eslintOptions = {
  file: path.resolve(cwd, '.eslintrc.js'),
  config: { extends: ['@thtliife'] }
};

const babelOptions = {
  file: path.resolve(cwd, 'babel.config.js'),
  config: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-private-methods'
    ]
  }
};

const prettierOptions = {
  file: path.resolve(cwd, '.prettierrc.js'),
  config: {
    arrowParens: 'avoid',
    singleQuote: true,
    trailingComma: 'none',
    vueIndentScriptAndStyle: true
  }
};

[eslintOptions, babelOptions, prettierOptions].forEach(source =>
  fs.writeFile(source.file, buildConfig(source), 'utf8', err => {
    if (err) {
      throw err;
    }
  })
);

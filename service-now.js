const recommended = require('./index');

const snowRules = { '@babel/no-invalid-this': 'off', 'no-var': 'off' };
recommended.rules = { recommended.rules, ...snowRules };

module.exports = recommended;

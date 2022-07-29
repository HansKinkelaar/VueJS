module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'max-len': 'off',
    'no-useless-return': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'import/no-relative-packages': 'off',
    'brace-style': 'off',
    'no-unused-vars': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'linebreak-style': 'off',
    'no-trailing-spaces': 'off',
    'vue/no-unused-components': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};

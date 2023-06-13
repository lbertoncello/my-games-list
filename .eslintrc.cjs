/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'import',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [ 
          ['@', './src'],
        ],
      },
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    }
  },
  rules: {
    "prettier/prettier": ["error"],
    'vue/multi-word-component-names': 'off',
  },
}
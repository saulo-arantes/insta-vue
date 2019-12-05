module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    "plugin:vue/recommended",
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    'semi': [2, 'never'],
    'arrow-parens': 0,
    'linebreak-style': 0,
    'indent': ['error', 2]
  },
}
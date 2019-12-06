module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": [
    "plugin:vue/recommended",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "rules": {
    "arrow-parens": 0,
    "eol-last": ["error", "always"],
    "indent": ["error", 2],
    "linebreak-style": 0,
    "semi": [2, "never"],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "asyncArrow": "always",
      "named": "never",
    }],
  },
}
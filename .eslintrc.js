module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
    "impliedStrict": true,
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "warn",
      "never"
    ],
    "react/react-in-jsx-scope": "off"
  }
}

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
  },
  env: {
    "browser": true,
    "es6": true,
    "node": true,
    "amd": true,
    "commonjs": true
  },
  extends: [
    'standard'
  ],
  plugins: [
  ],
  rules: {
    "comma-dangle": [2, "only-multiline"],
    "semi": [2, "always"],
    "no-irregular-whitespace": 0,
    "no-unused-vars": 0
  }
}

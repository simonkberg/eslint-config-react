'use strict'

module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'plugin:react/recommended'],
  plugins: ['react', 'babel'],
  env: {
    'browser': true
  }
}

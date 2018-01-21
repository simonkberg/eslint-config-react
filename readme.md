# @simonkberg/eslint-config-react

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

# This package has been deprecated.

An equivalent preset is available as a separate export of [@simonkberg/eslint-config].

## Migration:

Remove `@simonkberg/eslint-config-react` and install `@simonkberg/eslint-config`:

```
yarn remove @simonkberg/eslint-config-react
yarn add --dev @simonkberg/eslint-config
```

Update `package.json` to contain:

```json
{
  "eslintConfig": {
    "extends": ["@simonkberg/eslint-config", "@simonkberg/eslint-config/react"]
  }
}
```

---

A shareable eslint config for my React projects.

## Install:

```
yarn add --dev @simonkberg/eslint-config-react
```

## Usage:

Add to `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@simonkberg/eslint-config-react"
  }
}
```

## Config:

#### Extends:

* [@simonkberg/eslint-config]
* [@simonkberg/eslint-config/react][@simonkberg/eslint-config]

[build-badge]: https://img.shields.io/travis/simonkberg/eslint-config-react/master.svg?style=flat-square
[build]: https://travis-ci.org/simonkberg/eslint-config-react
[npm-badge]: https://img.shields.io/npm/v/@simonkberg/eslint-config-react.svg?style=flat-square
[npm]: https://www.npmjs.org/package/@simonkberg/eslint-config-react
[@simonkberg/eslint-config]: https://www.npmjs.com/package/@simonkberg/eslint-config

# @simonkberg/eslint-config-react

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

A shareable eslint config for my React projects.

## Install:

```
yarn add --dev @simonkberg/eslint-config-react
```

Add to `package.json`:
```
{
  "eslintConfig": {
    "extends": "@simonkberg/eslint-config-react"
  }
}
```

## Config:

#### Parser:
- [babel-eslint]

#### Extends:
- [@simonkberg/eslint-config]
- [eslint-config-standard-react]
- [eslint-config-prettier/react]

#### Environment:
- Browser

[build-badge]: https://img.shields.io/travis/simonkberg/eslint-config-react/master.svg?style=flat-square
[build]: https://travis-ci.org/simonkberg/eslint-config-react

[npm-badge]: https://img.shields.io/npm/v/@simonkberg/eslint-config-react.svg?style=flat-square
[npm]: https://www.npmjs.org/package/@simonkberg/eslint-config-react

[babel-eslint]: https://www.npmjs.com/package/babel-eslint
[@simonkberg/eslint-config]: https://www.npmjs.com/package/@simonkberg/eslint-config
[eslint-config-standard-react]: https://www.npmjs.com/package/eslint-config-standard-react
[eslint-config-prettier/react]: https://www.npmjs.com/package/eslint-config-prettier

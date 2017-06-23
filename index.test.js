/* eslint-env jest */

const path = require('path')
const config = require('./index.js')
const CLIEngine = require('eslint').CLIEngine

describe('@simonkberg/eslint-config-react', () => {
  it('should match the snapshot', () => {
    expect(
      Object.assign({}, config, {
        parser: path.relative(__dirname, config.parser),
        extends: config.extends.map(preset => path.relative(__dirname, preset)),
      })
    ).toMatchSnapshot()
  })

  it('should load config in eslint', () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: './index.js',
    })

    const stub = 'const foo = 1\nconst bar = baz => baz\nbar(foo)\n'
    const result = cli.executeOnText(stub)

    expect(result.errorCount).toEqual(0)
    expect(result.warningCount).toEqual(0)
  })
})

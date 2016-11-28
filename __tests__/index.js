/* eslint-env jasmine */

const eslintrc = require('../')
const CLIEngine = require('eslint').CLIEngine

describe('@simonkberg/eslint-config-react', () => {
  it('should match the snapshot', () => {
    expect(eslintrc).toMatchSnapshot()
  })

  it('should load config in eslint', () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: 'eslintrc.json',
    })

    const stub = 'const foo = 1\nconst bar = baz => baz\nbar(foo)\n'
    const result = cli.executeOnText(stub)

    expect(result.errorCount).toEqual(0)
    expect(result.warningCount).toEqual(0)
  })
})

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  extends: ['next/core-web-vitals', 'turbo', 'prettier'],

  // extends: ['next/babel', 'next/core-web-vitals'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
}

module.exports = {
  env: {
    es6: false
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': ['error', { args: 'none', varsIgnorePattern: '_' }]
  }
}

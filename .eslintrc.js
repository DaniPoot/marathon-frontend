module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

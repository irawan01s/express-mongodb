module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle': ['error', 'never'],
    'consistent-return': 'off',
    'linebreak-style': 0,
    'max-len': 'off',
    'no-param-reassign': ['warn', { props: false }],
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-var': ['off'],
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false
    }],
    semi: ['error', 'never'],
    quotes: ['error', 'single']
  }
}

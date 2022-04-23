module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ['**/mocks/*.js'],
  rules: {
    'react/jsx-no-bind': 0
  }
}

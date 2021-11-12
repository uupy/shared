const path = require('path')

module.exports = {
  parser: '@typescript-eslint/parser', // 使用 ts 解析器
  extends: [
    'plugin:@typescript-eslint/recommended', // ts 推荐规则
    'plugin:jest/recommended'
  ],
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: [
    'jest'
  ],
  rules: {}
}
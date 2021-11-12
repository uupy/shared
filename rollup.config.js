import path from 'path'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
import { eslint } from 'rollup-plugin-eslint'
import pkg from './package.json'

const resolve = (p) => path.resolve(__dirname, p)

const extensions = ['.js', '.ts']

export default {
  input: resolve('./src/index.ts'),
  output: [
    {
      file: resolve(pkg.main),
      format: 'umd',
      name: pkg.name,
    },
    {
      file: resolve(pkg.module),
      format: 'es',
      name: pkg.name,
    },
    {
      file: resolve('dist/index.cjs.js'),
      format: 'cjs',
      name: pkg.name,
    },
  ],
  plugins: [
    // 验证导入的文件
    eslint({
      throwOnError: true,
      include: ['src/**/*.ts'],
      exclude: ['node_modules/**', 'dist/**'],
    }),
    // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
    commonjs(),
    // 配合 commnjs 解析第三方模块
    nodeResolve({
      extensions,
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    ts({
      tsconfig: resolve('./tsconfig.json'),
      extensions,
    }),
  ],
}

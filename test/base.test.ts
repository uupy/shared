import * as base from '../src/base'

describe('base module', () => {
  test('base.isString("string") should return true', () => {
    expect(base.isString('string')).toBe(true)
  })
  test('base.isString(1) should return false', () => {
    expect(base.isString(1)).toBe(false)
  })

  test('base.isNumber(1) should return true', () => {
    expect(base.isNumber(1)).toBe(true)
  })
  test('base.isNumber("string") should return false', () => {
    expect(base.isNumber('string')).toBe(false)
  })

  test('base.isArray([]) should return true', () => {
    expect(base.isArray([])).toBe(true)
  })

  test('base.isPlainObject({}) should return true', () => {
    expect(base.isPlainObject({})).toBe(true)
  })
  test('base.isPlainObject([]) should return false', () => {
    expect(base.isPlainObject([])).toBe(false)
  })

  test('base.isDate(new Date()) should return true', () => {
    expect(base.isDate(new Date())).toBe(true)
  })

  test('base.isFunction(() => void 0) should return true', () => {
    expect(base.isFunction(() => void 0)).toBe(true)
  })
})

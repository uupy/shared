export const noop = () => void 0

export const objToStr = (val: unknown): string =>
  Object.prototype.toString.call(val)

export const toRawType = (val: unknown): string => objToStr(val).slice(8, -1)

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isFunction = (val: unknown): val is typeof Function =>
  typeof val === 'function'

export const isArray = Array.isArray

export const isPlainObject = (val: unknown): val is object =>
  toRawType(val) === 'Object'

export const isDate = (val: unknown): val is Date => val instanceof Date

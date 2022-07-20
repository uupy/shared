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

/**
 * 检验某个值是否无效
 * @param value
 */
export const isInvalid = (value: unknown) => {
  return value === null || value === undefined || value === ''
}

/**
 * 检验某个值是否空值
 * @param value
 */
export const isEmpty = (value: unknown): boolean => {
  let empty = true
  if (isPlainObject(value)) {
    if (Array.isArray(value)) {
      return value.every(v => isEmpty(v))
    } else {
      const obj: any = value
      Object.keys(obj).forEach(k => {
        if (!isEmpty(obj[k])) {
          empty = false
        }
      })
    }
  } else {
    empty = value === null || value === undefined || value === ''
  }
  return empty
}
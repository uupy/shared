'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const noop = () => void 0;
const objToStr = (val) => Object.prototype.toString.call(val);
const toRawType = (val) => objToStr(val).slice(8, -1);
const isString = (val) => typeof val === 'string';
const isNumber = (val) => typeof val === 'number';
const isFunction = (val) => typeof val === 'function';
const isArray = Array.isArray;
const isPlainObject = (val) => toRawType(val) === 'Object';
const isDate = (val) => val instanceof Date;

const regPhone = /^[1][3,4,5,7,8,9][0-9]{9}$/;
/**检验手机号码*/
const isPhoneNumber = (val) => regPhone.test(val);
const regEmail = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
/**检验邮箱*/
const isEmail = (val) => regEmail.test(val);

exports.isArray = isArray;
exports.isDate = isDate;
exports.isEmail = isEmail;
exports.isFunction = isFunction;
exports.isNumber = isNumber;
exports.isPhoneNumber = isPhoneNumber;
exports.isPlainObject = isPlainObject;
exports.isString = isString;
exports.noop = noop;
exports.objToStr = objToStr;
exports.toRawType = toRawType;

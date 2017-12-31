export const ObjectString = obj =>  Object.prototype.toString.call(obj)
export const object = obj => ObjectString(obj) == '[object Object]';
export const array = obj => ObjectString(obj) == '[object Array]';
export const string = obj => ObjectString(obj) == '[object String]';
export const date = obj => ObjectString(obj) == '[object Date]';
export const number = obj => ObjectString(obj) == '[object Number]';
export const fn = obj => ObjectString(obj) == '[object Function]';
export const boolean = obj => ObjectString(obj) == '[object Boolean]';
export const nullObject = obj => ObjectString(obj) == '[object Null]';
export const undefined = obj => ObjectString(obj) == '[object Undefined]';
export const regExp = obj => ObjectString(obj) == '[object RegExp]';
export const phone = (tel) => /^1[345789]\d{9}$/.test(tel);

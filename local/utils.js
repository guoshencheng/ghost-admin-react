import { combineReducers } from 'redux';
import { is } from './tools';

const ObjectString = obj =>  Object.prototype.toString.bind(obj)()

export function log(...argument) {
  console.log('mum-react log → ', ...argument);
}

export function warn(...argument) {
  console.warn('mum-react warn → ', ...argument);
}

export const patchFn = (target, extra) => {
  Object.keys(extra).filter(key => is.fn(extra[key])).forEach(key => {
    const fn = extra[key];
    target[key] = fn.bind(target);
  });
}

import type from "../type";
/**
 * @description 验证两个对象的属性值是否相等
 *
 * 只支持一维
 * NAN需要特殊处理
 *
 * @param { prev } [object]
 * @param { next } [object]
 *
 * @returns [boolean]
 */

export default function isEqual(prev, next) {
  if (!type.isObject(prev) || !type.isObject(next)) return false;

  let prevKeys = Object.keys(prev);

  let nextKeys = Object.keys(next);

  if (prevKeys.length !== nextKeys.length) return false;

  for (let n = 0; n < prevKeys.length; n++) {
    if (
      prev[prevKeys[n]] !== next[prevKeys[n]] &&
      !(Number.isNaN(prev[prevKeys[n]]) && Number.isNaN(next[prevKeys[n]]))
    ) {
      return false;
    }
  }
  return true;
}

// let o1 = {
//   name: 12,
//   age: NaN
// }
// let o2 = {
//   name: NaN,
//   age: 12
// }

// console.log(isEqual(o1,o2))

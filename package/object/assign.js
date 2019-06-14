import type from "../type";

/**
 * @description 对象拷贝，后面的对象覆盖前面对象，并且不存在的直接追加
 * 暂时不考虑深拷贝的情况，类型判断很烦人，并且用处不大
 * @param { target } [object] 目标对象
 * @param { resourse } [object] 源对象
 */

export default function assign(target, resourse) {
  if (!type.isObject(target) || !type.isObject(resourse)) return target;

  let targetKeys = Object.keys(target);

  let reourseKeys = Object.keys(resourse);

  if (targetKeys.length === 0 || reourseKeys.length === 0) return target;

  reourseKeys.forEach(key => {
    target[key] = resourse[key];
  });

  return target;
}

// let newObject = {
//   name: 'dsdd',
//   p: ''
// }
// let object = {
//   name: 'hjq',
//   age: 11,
//   p: null
// }

// console.log(assign(newObject, object))

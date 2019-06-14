import type from "../type";

/**
 * @description 对象拷贝
 * 暂时不考虑深拷贝的情况，类型判断很烦人，并且用处不大
 *
 * @param { resourse } [object] 源对象
 *
 * @returns [object]
 */

export default function clone(resourse) {
  let target = {};

  if (!type.isObject(resourse)) return target;

  let reourseKeys = Object.keys(resourse);

  if (reourseKeys.length === 0) return target;

  reourseKeys.forEach(key => {
    target[key] = resourse[key];
  });

  return target;
}

// let newObject = {
//   name: 'dsdd',
//   p: ''
// }

// let clones = clone(newObject)

// newObject['name'] = 'ssjsjsj'

// console.log(newObject)

// console.log(clones)

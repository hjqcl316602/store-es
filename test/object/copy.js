import type from "../type";

/**
 * @description 对象复制 - 向前复制
 * 后面的对象中存在前面的对象的键即可复制，否则不予赋值
 * 暂时不考虑深拷贝的情况，类型判断很烦人，并且用处不大
 * @param { target } [object] 目标对象
 * @param { resourse } [object] 源对象
 */

export default function copy(target, resourse) {
  if (!type.isObject(target) || !type.isObject(resourse)) return target;

  let targetKeys = Object.keys(target);

  let reourseKeys = Object.keys(resourse);

  if (targetKeys.length === 0 || reourseKeys.length === 0) return target;

  targetKeys.forEach(key => {
    if (reourseKeys.findIndex(item => key === item) > -1) {
      target[key] = resourse[key];
    }
  });

  return target;
}

// let newObject = {
//   name:'dsdd',
//   p : ''
// }
// let object = {
//   name:'hjq',
//   age:11,
//   p:null
// }

// console.log(copy(newObject,object))

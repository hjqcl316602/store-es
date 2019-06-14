import type from "../type";

/**
 * @description 按指定的函数过滤出对象属性
 *
 * @param { object } [object]
 * @param  {callback} [function]
 * @param { context} [any]
 *
 * @returns [object]
 */

export default function filterWith(object, callback, context = this) {
  if (!type.isObject(object)) return object;
  let keys = Object.keys(object);
  let resObject = {};
  if (keys.length === 0 || typeof callback !== "function") return object;
  keys.forEach(key => {
    if (callback.call(context, object[key], key, object)) {
      resObject[key] = object[key];
    }
  });
  return resObject;
}

// let object = {
//   name: 'hjq',
//   age: 19,
//   dd: ''
// }
// let arr = [1, 3, 4]

// console.log(filterWith(object, function (item, key) {
//   return item === ''
// }))

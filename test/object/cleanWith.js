import type from "../type";

/**
 * @description 按指定的函数清除对象属性
 * @param { object } [object]
 * @param  {callback} [function]
 * @param { context} [any]
 * @returns [object]
 */

export default function cleanWith(object, callback, context = this) {
  let keys = Object.keys(object);
  if (!type.isObject(object) || keys.length === 0) {
    console.error("[object] is not object or  empty");
    return object;
  }
  if (typeof callback !== "function") {
    console.error("[callback] is not function");
    return object;
  }

  let res = {};
  keys.forEach(key => {
    if (!callback.call(context, object[key], key, object)) {
      res[key] = object[key];
    }
  });
  return res;
}

// let object = {
//   name: "hjq",
//   age: 19,
//   dd: ""
// };
// let arr = [1, 3, 4];

// console.log(
//   cleanWith(object, function(item, key) {
//     return item === "";
//   })
// );

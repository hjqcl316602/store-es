import type from "../type";

/**
 * @name: 获取对象的关键字
 * @param : { object } [ object ]
 * @return: [ array ] 关键字数组
 */

export default function keys(object) {
  if (!type.isObject(object)) {
    throw new Error("参数[object]的类型必须是对象类型");
  }
  return Object.keys(object);
}

// function keys2(o) {
//   let keys = [];
//   for (let key in o) {
//     if (o.hasOwnProperty(key)) {
//       keys.push(key);
//     }
//   }
//   return keys;
// }

//console.log(keys({ name: "", age: "", address: "" }));

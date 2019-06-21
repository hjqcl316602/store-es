/**
 * @name 数据的克隆
 * @param { target } [ any ] 目标数据
 * @return [ any ]
 */
import type from "./type";
export default function clone(target) {
  if (type(target) === "array") {
    let res = [];
    for (let n = 0; n < target.length; n++) {
      res.push(clone(target[n]));
    }
    return res;
  }
  if (type(target) === "object") {
    let res = {};
    for (let key in target) {
      res[key] = clone(target[key]);
    }
    return res;
  } else {
    return target;
  }
}
// let object = { name: ["", 2, 3, 5] };
// let cloneObject = clone(object);
// console.log(cloneObject);
// cloneObject.name[3] = 10;
// console.log(object);

// let regex = /^[\d]+$/;
// let regex2 = /^[\d]+$/;
// console.log(regex === regex2);

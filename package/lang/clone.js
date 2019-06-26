/**
 * @name 数据的克隆
 * @msg 支持对[ object , array ]的深拷贝，即和源数据之间不存在引用关系
 * @param { target } [ any ] 目标数据
 * @return [ any ]
 * @example clone({ name: ["", 2, 3, 5] }) => { name: ["", 2, 3, 5] }
 */
import type from "../type/type";
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

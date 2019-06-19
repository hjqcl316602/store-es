import type from "../type";

/**
 * @description 清除出对象指定的属性
 * @param { object } [object]
 * @param  {...args}
 * @returns [object]
 */

export default function clean(object, ...args) {
  if (!type.isObject(object)) return object;
  let keys = Object.keys(object);
  let resObject = {};
  if (keys.length === 0 || args.length === 0) return object;
  keys.forEach(key => {
    let find = args.findIndex(arg => arg === key);
    if (find === -1) {
      resObject[key] = object[key];
    }
  });
  return resObject;
}

// let object = {
//   name: 'hjq',
//   age: 19,
//   dd:''
// }
// let arr = [1, 3, 4]

// console.log(clean(object, 'name','dd'))

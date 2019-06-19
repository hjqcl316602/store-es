import isObject from "../type";

/**
 * 判断一个对象是否是纯粹的对象
 *
 * 纯粹的对象 - 该对象是通过'{}'和'new Object()'方式创建的
 *
 * @param {*} value 需要验证的对象
 */
export default function isObjectPlain(value) {
  if (!isObject(value)) return false;

  let proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto; // 指向同一个object原型对象
}

// function Person(name){
//   this.name = name
// }
// console.log({})
// console.log(isObjectPlain({}))       // true
// console.log(new Object())
// console.log(isObjectPlain(new Object()))       // true
// console.log(Object.create(null) )
// console.log(isObjectPlain(Object.create(null) ))       // false
// console.log(isObjectPlain(new Date()))       // false
// console.log(isObjectPlain(new Person('hhh')))       // false

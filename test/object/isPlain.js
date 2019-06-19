/**
 * @name 判断一个对象是否是纯粹的对象
 * @msg 纯粹的对象 - 该对象是通过'{}'和'new Object()'方式创建的，不是通过继承和实例化的对象
 * @param { value } [ object ] 需要验证的对象
 */
export default function isObjectPlain(value) {
  if (!isObjectPlain.isObject(value)) {
    console.error("[value] is not object");
    return false;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto; // 指向同一个object原型对象
}
// 判断是否是对象
isObjectPlain.isObject = function(value) {
  let type = Object.prototype.toString.call(value).slice(8, -1);
  return type.toLowerCase() === "object";
};
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

/**
 * @name: 创建一个新的对象，使用现有的对象来提供新创建的__proto__
 * @param {type}
 * @return:
 */
export default function create(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}

// let obj = Object.create({ name: "黄军泉" });
// console.log(obj, obj.__proto__); // => {} , { name :"黄军泉"}

// let obj2 = Object.create(null);
// console.log(obj2, obj2.__proto__); // => {} , undefined

// let obj3 = Object.create(Object.prototype);
// console.log(obj3, obj3.__proto__); // => {} , { constructor:f(),toString:f()...}

// // 创建一个以另一个空对象为原型,且拥有一个属性p的对象
// // 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
// let obj4 = Object.create({}, { p: { value: 42 } });
// console.log(obj4, obj4.__proto__, obj4.__proto__.__proto__); // => { p : 42 } , { },{ constructor:f(),toString:f()...}
// // obj4.p = 24;
// // console.log(obj4);// => 42

// let obj5 = Object.create(
//   {},
//   { p: { value: 42, writable: true, enumerable: true, configurable: true } }
// );
// console.log(obj4, obj4.__proto__, obj4.__proto__.__proto__); // => { p : 42 } , { },{ constructor:f(),toString:f()...}
// obj5.p = 24;
// console.log(obj5); // => 24

function createShim(proto, propertiesObject) {
  if (typeof proto !== "object" && typeof proto !== "function") {
    throw new TypeError("Object prototype may only be an Object: " + proto);
  } else if (proto === null) {
    throw new Error(
      "This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument."
    );
  }

  if (typeof propertiesObject != "undefined")
    throw new Error(
      "This browser's implementation of Object.create is a shim and doesn't support a second argument."
    );

  function F() {}
  F.prototype = proto;

  return new F();
}

// let object = createShim({ name: "" });
// console.log(object, object.__proto__); //  {}

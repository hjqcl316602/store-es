/**
 * @name 验证一个数据是否是对象
 * @param { object } [ any ]
 * @return [ boolean ]
 * @example check({})=> true
 */

export default function check(object) {
  return (
    Object.prototype.toString
      .call(object)
      .slice(8, -1)
      .toLowerCase() === "object"
  );
}

/**
 * @name 验证一个对象地方是空对象
 * @msg 没有自身属性
 * @param { object } [ object ]
 * @return [ boolean ]
 * @example check.empty({}) => true
 */
check.empty = function(object) {
  if (!check(object)) {
    throw new Error("The argument must be object.");
  }
  return Object.keys(object).length === 0;
};

//console.log(check.empty({}));

/**
 * @name 验证一个数据是否是纯对象
 * @msg 该对象是通过 {} 和 new Object()方式创建
 * @msg Object.getPrototypeOf 不能获取 [ undefined,null ]的原型，所以使用了try catch
 * @param { object } [ any ]
 * @return [ boolean ]
 * @example check.plain({}) => true
 * @example check.plain(new Object()) => true
 * @example check.plain("") => false
 */
check.plain = function(object) {
  try {
    let proto = object;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    //console.log(Object.getPrototypeOf(null));
    return Object.getPrototypeOf(object) === proto; // 指向同一个object原型对象
  } catch (error) {
    return false;
  }
};
/**
 * @name 验证一个数据是否是纯对象
 * @msg 该对象是通过 {} 和 new Object()方式创建
 * @param { object } [ any ]
 * @return [ boolean ]
 */
check.plain.simple = function(object) {
  try {
    return Object.getPrototypeOf(Object.getPrototypeOf(object)) === null;
  } catch (error) {
    return false;
  }
};

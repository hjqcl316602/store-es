/**
 * @name: 验证字符串是否是有值
 * @param : { string  }  [ string ]
 * @return: [ boolean ]
 */

export default function isRequire(string) {
  if (typeof string !== "string") {
    throw new Error("参数[string]必须是字符串类型");
  }
  return /^[\s\S]+$/.test(string);
}

//console.log(isRequire("")); => false

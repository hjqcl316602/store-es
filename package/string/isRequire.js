/**
 * @name: 验证字符串是否是有值
 * @param : { string  }  [ string ]
 * @return: [ boolean ]
 */

export default function isRequire(string) {
  return typeof string === "string" && /^[\s\S]+$/.test(string);
}

//console.log(isRequire("s")); // false

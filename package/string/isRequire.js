/**
 * @name  验证字符串是否是有值
 * @param   { string  }  [ string ]
 * @return  [ boolean ]
 * @example isRequire("s") => true
 * @example isRequire("") => false
 * @example isRequire(0) => false
 * @example isRequire(" ") => true
 */

export default function isRequire(string) {
  return typeof string === "string" && /^[\s\S]+$/.test(string);
}

//console.log(isRequire("s")); // false

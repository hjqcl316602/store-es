/**
 * @name: 判断一个字符串中是否存在空白
 * @param: {string} [ string ]
 * @return: [ boolean ]
 * @msg : String.prototype.trim 只能删除字符串开头的空白
 */

export default function isSpace(string) {
  return typeof string === "string" && string.replace(/\s+/g, "") !== string;
}

//console.log(isSpace() ) // false
//console.log(isSpace("fff fff")); // true

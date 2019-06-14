import type from "../type";
/**
 * @name: 验证字符串是否是连续的
 * @param : { string } [ string ]
 * @return: [ boolean ]
 */

export default function isContinue(string) {
  if (!type.isString(string) || string.length < 2) {
    throw new Error(
      "string  must be type of string , and its length must be greater than 2 "
    );
  }

  for (let n = 1; n < string.length; n++) {
    if (string.charCodeAt(n) - string.charCodeAt(n - 1) !== 1) {
      return false;
    }
  }
  return true;
}

//console.log(isContinue("1")); // true
// console.log(isContinue('6789')) // true
// console.log(isContinue('abcdef')) // true

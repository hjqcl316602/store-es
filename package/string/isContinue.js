/**
 * @name: 验证字符串是否是连续的
 * @param : { string } [ string ]
 * @return: [ boolean ]
 */

export default function isContinue(string) {
  if (typeof string !== "string" || string.length < 2) {
    console.error("[string] is not string or its length less than 2 ");
    return false;
  }

  for (let n = 1; n < string.length; n++) {
    if (string.charCodeAt(n) - string.charCodeAt(n - 1) !== 1) {
      return false;
    }
  }
  return true;
}

//console.log(isContinue("12")); // true
// console.log(isContinue('6789')) // true
// console.log(isContinue('abcdef')) // true

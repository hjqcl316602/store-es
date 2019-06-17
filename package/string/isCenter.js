/**
 * @name: 验证一个字符串是否存在某字符串的中部
 * @param : { string } [ string ]
 * @param : { target } [ string ]
 * @return: [ boolean]
 */

export default function isCenter(string, target) {
  if (typeof string !== "string" || typeof target !== "string") {
    console.error("[string] or [target] is not string");
    return false;
  }
  if (target.length > string.length) {
    console.error("[target] length is greater than [string] length");
    return false;
  }
  let index = (string.length - target.length) / 2;
  if (!Number.isInteger(index)) return false;
  return string.slice(index, index + target.length) === target;
}

//console.log(isCenter("huang", "huangjun"));

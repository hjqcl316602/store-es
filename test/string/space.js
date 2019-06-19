/**
 * @name 验证一个字符串是否是空白字符串
 * @param { string } string
 * @return [ boolean ]
 * @example space("   ") => true
 */

export default function space(string) {
  if (typeof string !== "string") {
    console.error("[string] is not string");
    return false;
  }
  return /^\s+$/.test(string);
}

//console.log(space(327237827));

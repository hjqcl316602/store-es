/**
 * @description 按指定的正则表达式提取字符串中满足条件的值
 *
 * @param {string } [string]
 * @param {regex} [regex]
 *
 * @returns [array] 满足条件的字符串数组
 */

export default function match(string, regex) {
  if (typeof string !== "string") return string;
  return string.match(regex);
}

// console.log(match('1123sss222ssss222',/\d{1,}/g))
// console.log(match('1123sss222ssss222',/[a-z]{3,}/g))

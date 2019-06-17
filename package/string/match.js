import type from "../type";
/**
 * @name: 按指定的正则表达式提取字符串中满足条件的值
 * @param: { string } [ string ]
 * @param: { regexp } [ regexp ]
 * @return: [ array ] 满足条件的字符串数组
 */

export default function match(string, regexp) {
  if (typeof string !== "string" || !type.isRegexp(regexp)) {
    console.error("[string] is not string or [regex] is not regex");
    return string;
  }
  return string.match(regexp);
}

//console.log(match("1123sss222ssss222", /\d{1,}/g));
// console.log(match('1123sss222ssss222',/[a-z]{3,}/g))

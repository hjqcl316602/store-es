/**
 * @name: 按指定的正则表达式提取字符串中满足条件的值
 * @param: { string } [ string ]
 * @param: { regexp } [ regexp ]
 * @return: [ array ] 满足条件的字符串数组
 * @example match('1123sss222ssss222',/[a-z]{3,}/g) => ["sss", "ssss"]
 */

export default function match(string, regexp) {
  if (typeof string !== "string") {
    console.error("[string] is not string ");
    return [];
  }
  if (!(regexp instanceof RegExp)) {
    console.error("[regex] is not regexp");
  }
  return string.match(regexp);
}

//console.log(match("1123sss222ssss222", /\d{1,}/g));
//console.log(match("1123sss222ssss222", /[a-z]{3,}/g));

/**
 * @name: 验证一个字符串是否是以指定的值结尾
 * @param : { string } [ string ]
 * @param : { prex } [ string ]
 * @returns : [ boolean ]
 */

export default function isEnd(string, prex) {
  if (typeof string !== "string" || typeof prex !== "string") {
    throw new Error("string and prex must be type of string");
  }
  return prex.slice(prex.length - prex.length) === prex;
}

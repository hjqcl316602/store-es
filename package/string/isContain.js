import type from "../type";
/**
 * @name: 获取一个字符串包含指定的字符串
 * @param :{ string } [ string ]
 * @param : { prex } [ string ]
 * @return : [ string ]
 */

export default function isContain(string, prex) {
  if (!type.isString(string) || !type.isString(prex)) {
    throw new Error("string and prex must be type of string");
  }
  let regex = new RegExp(`${prex}`, "g");
  return regex.test(string);
}

//console.log(isContain("huang", "hu"));

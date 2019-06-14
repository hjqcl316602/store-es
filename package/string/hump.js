import types from "../type";

/**
 * @name: 驼峰字符串转链接字符串
 * @param : { string }  [ string ] 条件：1.每个链接的单词必须是由[ a-z ] 组成的字符串，2.链接符号必须是"-"
 * @return: [ string ]
 */
export default function toHump(string) {
  if (!types.isString(string)) {
    throw new Error("string must be type of string");
  }
  if (!/^([a-z]+\-[a-z]+)+$/.test(string)) {
    throw new Error("Format of string is error");
  }
  let regex = new RegExp(/\-(\w)/g);
  return string.replace(regex, function(m, c) {
    return c ? c.toUpperCase() : "";
  });
}

//console.log(toHump("name-name-name-leight")); // nameNameNameLeight

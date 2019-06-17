/**
 * @name: 驼峰字符串转链接字符串
 * @param : { string }  [ string ] 条件：1.每个链接的单词必须是由[ a-z ] 组成的字符串，2.链接符号必须是"-"
 * @return: [ string ]
 */
export default function hump(string) {
  if (typeof string !== "string") {
    console.error("[string] must be type of string");
    return string;
  }
  if (!/^([a-z]+\-[a-z]+)+$/.test(string)) {
    console.error("[string] format is error,it must be [a-z]");
    return string;
  }
  let regex = new RegExp(/\-(\w)/g);
  return string.replace(regex, function(m, c) {
    return c ? c.toUpperCase() : "";
  });
}

//console.log(hump("name-name-name-l333ht")); // nameNameNameLeight

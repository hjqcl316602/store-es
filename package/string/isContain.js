/**
 * @name: 获取一个字符串包含指定的字符串
 * @param :{ string } [ string ]
 * @param : { target } [ string ]
 * @return : [ boolean ]
 */

export default function isContain(string, target) {
  if (typeof string !== "string" || typeof target !== "string") {
    console.error("[string] or [target] is not string");
    return false;
  }
  let regex = new RegExp(`${target}`, "g");
  return regex.test(string);
}

//console.log(isContain("huang", "hu"));

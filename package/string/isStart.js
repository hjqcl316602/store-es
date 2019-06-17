/**
 * @name: 验证一个字符串是否是以指定的值开头
 * @param: { string } [ string ]
 * @param: { prex} [ string ]
 * @return:[ boolean ]
 */

export default function isStart(string, target) {
  if (typeof string !== "string" || typeof target !== "string") {
    console.error("[string] or [target] is not string");
    return false;
  }
  return string.slice(0, target.length) === target;
}

//console.log(isStart("huang"));

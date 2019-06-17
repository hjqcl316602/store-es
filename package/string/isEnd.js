/**
 * @name: 验证一个字符串是否是以指定的值结尾
 * @param : { string } [ string ]
 * @param : { target } [ string ]
 * @returns : [ boolean ]
 */

export default function isEnd(string, target) {
  if (typeof string !== "string" || typeof target !== "string") {
    console.error("[string] or [target] is not string");
    return false;
  }
  return target.slice(target.length - target.length) === target;
}

//console.log(isEnd("huang"));

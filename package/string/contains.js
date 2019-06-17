import type from "../type";
/**
 * @name: 获取一个字符串包含指定的字符串的所有角标
 * @param : { string } [ string ]
 * @param : { target } [ string ] 指定的字符串
 * @return: [ array ] 角标位置数组
 */

export default function contains(string, target) {
  let res = [];
  if (typeof string !== "string" || typeof target !== "string") {
    console.error("[string] and [regexp] must be type of string");
    return res;
  }
  let regex = new RegExp(`${target}`, "g");
  string.replace(regex, function(regex, index, string) {
    res.push(index);
  });
  return res;
}

// 方式二 - 循环
// function contains2(string, prex) {
//   let res = [];
//   if (String(string) !== string || String(prex) !== prex) return res;
//   let regex = new RegExp(`${prex}`, "g");
//   let result;
//   do {
//     result = regex.exec(string);
//     result && res.push(result["index"]);
//   } while (result != null);
//   return res;
// }

//console.log(contains("insssinsssins", false)); // [0,5,10]

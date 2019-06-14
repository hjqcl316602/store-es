import type from "../type";

/**
 * @name: 返字符串中匹配正则表达式的值
 * @msg : replace的callback函数的参数的个数由正则表达式决定的 1.第一个 ： 正则表达式结果;2.倒数第二个：角标;3.倒数第一个：字符串本身;4.剩余的：正则表达式匹配的结果
 * @param : { string }  [ string ]
 * @param : { regex } [ regex ]
 * @return: [ array<object> ]
 */

export default function containsWith(string, regexp) {
  if (!type.isString(string)) {
    throw new Error("string must be type of string");
  }
  if (!type.isRegexp(regexp)) {
    throw new Error("regexp must be not type of regexp");
  }
  let res = [];
  if (String(string) !== string) return res;
  let newRegex = new RegExp(regexp);
  string.replace(newRegex, function(...args) {
    res.push({
      regex: args[0],
      string: args[args.length - 1],
      index: args[args.length - 2],
      match: [...args.slice(1, -2)]
    });
  });
  return res;
}

// 获取字符串中{}中的值
// let string = "a{b}c{d}e{f}";
// console.log(containsWith(string, /\{(.*?)\}/g));
// 获取字符串中[]中的值
// let string2 = 'a[b]c[d]e[f]'
// console.log(containsWith(string2, /\[(.*?)\]/g))
// 获取字符串中单词中的值
//let string3 = 'ass ass asas asas asas sa'
//console.log(containsWith(string3, /\b(\w+)\b/g))

// 获取url字符串中的key=value
// let string4 = "name=hjq&age=10&address=si";
// console.log(containsWith(string4, /(\w+)(\=)(\w+)(\&)/g));

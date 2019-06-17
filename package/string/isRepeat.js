/**
 * @name 验证是否是重复的字组成的字符串，即由一个字符串组成的字符串
 * @param  { string  } [ string ] 字符串，长度应不少于2位
 * @return [ boolean ]
 * @exampale isRepeat('aa') => true
 */

export default function isRepeat(string) {
  if (typeof string !== "string" || string.length < 2) {
    console.error("[string] is not string  or its length less than 2 ");
    return false;
  }
  return (
    string
      .split("")
      .filter((item, index, array) => array.indexOf(item) === index).length ===
    1
  );
}

//console.log(isRepeat("")); // true
// console.log(isRepeat(''))  // false
// console.log(isRepeat('a'))  // false
// console.log(isRepeat('aa'))  // true

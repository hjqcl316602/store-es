/**
 * @description 验证是否是重复的字组成的字符串
 *
 * @param { string  } [string] 字符串，长度应不少于2位
 *
 * @returns [boolean]
 */

export default function isRepeat(string) {
  if (String(string) !== string || string.length < 2) return false;
  return (
    string
      .split("")
      .filter((item, index, array) => array.indexOf(item) === index).length ===
    1
  );
}

// console.log(isRepeat('aaaaaaa'))  // true
// console.log(isRepeat(''))  // false
// console.log(isRepeat('a'))  // false
// console.log(isRepeat('aa'))  // true

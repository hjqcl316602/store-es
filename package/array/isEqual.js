/**
 * @name 验证两个数组的值是否相等
 * @msg 只支持一维，支持NAN
 * @param { prev }  [array ]
 * @param { next } [ array ]
 * @returns [boolean]
 */
export default function isEqual(prev, next) {
  if (!Array.isArray(prev) || !Array.isArray(next)) {
    console.error("[prev] or [next] is not array");
    return false;
  }
  if (prev.length !== next.length) {
    console.error("[prev] and [next] length is not equal");
    return false;
  }
  for (let n = 0; n < prev.length; n++) {
    let isNan = !(Number.isNaN(prev[n]) && Number.isNaN(next[n]));
    if (prev[n] !== next[n] && isNan) {
      return false;
    }
  }
  return true;
}

// let a = function() {};
// console.log(isEqual([a], [a]));

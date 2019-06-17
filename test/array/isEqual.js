/**
 * @description 验证两个数组的值是否相等
 *
 * 只支持一维
 * NAN需要特殊处理
 *
 * @param { prev } [object]
 * @param { next } [object]
 *
 * @returns [boolean]
 */

export default function isEqual(prev, next) {
  if (!Array.isArray(prev) || !Array.isArray(next)) return false;

  if (prev.length !== next.length) return false;

  for (let n = 0; n < prev.length; n++) {
    if (
      prev[n] !== next[n] &&
      !(Number.isNaN(prev[n]) && Number.isNaN(next[n]))
    ) {
      return false;
    }
  }

  return true;
}

//console.log(isEqual([1, NaN, 3, 4], [1, NaN, 3, 4]))

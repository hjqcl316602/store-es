/**
 * @description 数组反向
 *
 * @param {arr} [array] 数组
 * @param {callback} [function] 回调函数
 * @param {context} [any] 执行上下文
 *
 * @returns [array]
 */

export default function reverse(arr) {
  if (!Array.isArray(arr)) return arr;
  let newArr = [];
  for (let n = arr.length - 1; n > -1; n--) {
    newArr.push(arr[n]);
  }
  return newArr;
}

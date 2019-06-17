/**
 * @description 数组遍历
 *
 * @param {arr} [array] 数组
 * @param {callback} [function] 回调函数
 * @param {context} [any] 执行上下文
 *
 * @returns [array]
 */

export default function map(arr, callback, context = this) {
  if (!Array.isArray(arr)) return arr;
  if (typeof callback !== "function") return arr;
  let newArr = [];
  for (let n = 0, len = arr.length; n < len; n++) {
    newArr.push(callback.call(context, arr[n], n, arr));
  }
  return newArr;
}

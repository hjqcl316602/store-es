/**
 * @description 数组过滤
 *
 * @param {arr} 数组
 * @param {callback} 回调函数
 * @param {context} 执行上下文
 *
 * @returns [number]
 */

export default function findIndex(arr, callback, context = this) {
  if (!Array.isArray(arr)) return -1;
  if (typeof callback !== "function") return -1;
  for (let n = 0, len = arr.length; n < len; n++) {
    if (callback.call(context, arr[n], n, arr)) {
      return n;
    }
  }
  return -1;
}
/**
 * @description 数组遍历
 *
 * @param {arr} [array] 数组
 * @param {callback} [function] 回调函数
 * @param {context} [any] 执行上下文
 */

export default function each(arr, callback, context = this) {
  if (!Array.isArray(arr)) return arr;
  if (typeof callback !== "function") return arr;
  for (let n = 0, len = arr.length; n < len; n++) {
    callback.call(context, arr[n], n, arr);
  }
}

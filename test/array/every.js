/**
 * @description 是否全部满足指定的函数测试
 *
 * @param {arr} [array] 数组
 * @param {callback} [function] 回调函数
 * @param {context}  [any] 执行上下文
 *
 * @returns [boolean]
 */

export default function every(arr, callback, context = this) {
  if (!Array.isArray(arr)) return false;
  if (typeof callback !== "function") return false;
  let res = true;
  for (let n = 0, len = arr.length; n < len; n++) {
    if (!callback.call(context, arr[n], n, arr)) {
      res = false;
      break;
    }
  }
  return res;
}

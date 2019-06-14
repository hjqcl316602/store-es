/**
 * @description 是否在包含数组中
 *
 * @param {arr} 数组
 * @param {callback} 回调函数
 * @param {context} 执行上下文
 *
 * @returns [boolean]
 */

export default function include(arr, callback, context = this) {
  if (!Array.isArray(arr)) return false;
  if (typeof callback !== "function") return false;
  for (let n = 0, len = arr.length; n < len; n++) {
    if (callback.call(context, arr[n], n, arr)) {
      return true;
    }
  }
  return false;
}

/**
 * @description 数组过滤
 *
 * @param {arr} 数组
 * @param {callback} 回调函数
 * @param {context} 执行上下文
 *
 * @returns [array]
 */

export default function filter(arr, callback, context = this) {
  if (!Array.isArray(arr)) return arr;
  if (typeof callback !== "function") return arr;
  let newArr = [];
  for (let n = 0, len = arr.length; n < len; n++) {
    if (callback.call(context, arr[n], n, arr)) {
      newArr.push(arr[n]);
    }
  }
  return newArr;
}

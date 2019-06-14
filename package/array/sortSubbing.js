/**
 * @description 数组排序 - 冒泡
 *
 * @param {arr} [array] 数组
 * @param { bool } [boolean] 是否是升序
 *
 * @returns [array]
 */

export default function sortSubbing(arr, bool = true) {
  if (!Array.isArray(arr)) return arr;
  for (let i = 0, l = arr.length; i < l - 1; i++) {
    for (let j = i + 1; j < l; j++) {
      if (bool) {
        if (arr[i] < arr[j]) {
          let tem = arr[i];
          arr[i] = arr[j];
          arr[j] = tem;
        }
      } else {
        if (arr[i] > arr[j]) {
          let tem = arr[i];
          arr[i] = arr[j];
          arr[j] = tem;
        }
      }
    }
  }
  return arr;
}

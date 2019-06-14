/**
 * @description 数组排序 - 快速
 *
 * @param {arr} [array] 数组
 * @param { bool } [boolean] 是否是升序
 *
 * @returns [array]
 */

export default function sortQuick(arr, bool = true) {
  if (!Array.isArray(arr)) return arr;
  var middle = arr[0];
  var leftArr = [];
  var rightArr = [];
  if (arr.length < 1) {
    return arr;
  }
  for (let n = 1; n < arr.length; n++) {
    if (bool) {
      if (arr[n] > middle) {
        rightArr.push(arr[n]);
      } else {
        leftArr.push(arr[n]);
      }
    } else {
      if (arr[n] < middle) {
        rightArr.push(arr[n]);
      } else {
        leftArr.push(arr[n]);
      }
    }
  }
  return sortQuick(leftArr).concat(middle, sortQuick(rightArr));
}

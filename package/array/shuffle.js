/**
 * @description 数组随机
 *
 * @param {arr}  [array] 数组
 *
 * @returns [array]
 */

export default function shuffle(arr) {
  if (!Array.isArray(arr)) return arr;
  var m = arr.length;
  while (m) {
    let i = Math.floor(Math.random() * m--);
    let t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
}

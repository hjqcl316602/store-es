/**
 * @description 数组排序
 *
 * @param { arr } [array]
 * @param { type } [number] [1] 排序类型 1 => 升序 2=>降序 3=> 随机
 *
 * @returns [array]
 *
 */

export default function sort(arr, type = 1) {
  if (!Array.isArray(arr) || arr.length === 0) return arr;

  return arr.sort((a, b) => {
    switch (type) {
      case 1:
        return a - b;
      case 2:
        return b - a;
      case 3:
        return Math.random() - 0.5;
      default:
        return arr;
    }
  });
}

// let arr = sort([1,23,12,4,5],1)
// console.log(arr)

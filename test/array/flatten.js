/**
 * @description 扁平化数组
 *
 * @param {array} 需要偏平化的数组
 *
 * @returns [array] 新的数组
 */

export default function flatten(array, deepth = 1) {
  let arr = [];
  for (let n = 0; n < array.length; n++) {
    if (deepth > 1) {
      if (!Array.isArray(array[n])) {
        arr.push(array[n]);
      } else {
        arr.push(...flatten(array[n], --deepth));
      }
    } else {
      arr.push(array[n]);
    }
  }
  return arr;
}

//console.log(flatten([1,2,3]))

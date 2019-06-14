/**
 * @description 数组置换
 *
 * @param {array} [array] 需要置换的数组
 *
 * 必须是二维数组
 * 每个元素的的长度一致
 *
 * @returns [array]
 */

export default function transpose(array) {
  if (!Array.isArray(array) || array.length === 0) return array;

  if (
    !array.every(item => Array.isArray(item) && item.length === array[0].length)
  )
    return array;

  let resArr = [];

  for (let k = 0; k < array[0].length; k++) {
    resArr.push([]);
  }
  for (let n = 0; n < array.length; n++) {
    for (let k = 0; k < array[n].length; k++) {
      resArr[k][n] = array[n][k];
    }
  }
  return resArr;
}

//console.log(transpose([ [1,2,3],[4,5,6],[ 7,8,9]]) )

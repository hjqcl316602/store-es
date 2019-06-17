/**
 * @name 数组置换
 * @param {array} [array] 需要置换的数组
 * @msg 目标数组必须是二维数组，并且每一个元素的长度一致，且不能为0
 * @return  [array]
 */

export default function transpose(array) {
  // 判断是否是数组，并且长度不能为0
  if (!Array.isArray(array) || array.length === 0) {
    console.error("[array] is not array or its length is 0");
    return array;
  }
  // 判断是否是二维数组
  if (!transpose.isDimen(array)) {
    console.error("[array] is not dimen array");
    return array;
  }
  // 判断元素的长度是否一致，并且不能为0
  if (!transpose.isEqual(array)) {
    console.error(" length of [array] item is not equal or length is 0");
    return array;
  }

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

// 判断数组是否是二维数组
transpose.isDimen = function(array) {
  for (let n = 0; n < array.length; n++) {
    if (!Array.isArray(array[n])) {
      return false;
    }
  }
  return true;
};

// 判断数组子元素的长度是否一致，并长度不能为0
transpose.isEqual = function(array) {
  let len = array[0].length;
  for (let n = 1; n < array.length; n++) {
    if (array[n].length === 0 || array[n].length !== len) {
      return false;
    }
  }
  return true;
};

//console.log(transpose([[1, 11], [11, 1], [2, 22]]));

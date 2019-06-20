/**
 * @name 数组置换
 * @param {array} [array] 需要置换的数组
 * @msg 目标数组必须是二维数组，并且每一个元素的长度一致
 * @return  [array]
 */

export default function transpose(array) {
  // 判断是否是数组
  if (!Array.isArray(array)) {
    throw new Error("The argument must be array.");
  }
  // 判断是否是二维数组
  if (!transpose.isDimen(array) || !transpose._isEqualLen(array)) {
    throw new Error(
      "The argument must be dimen array,and this item length must be equal."
    );
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

/**
 * @name 判断数组是二维数组
 * @msg 子元素全部是数组组成的数组
 * @param { array } [ array ]
 * @return [boolean]
 */
transpose.isDimen = function(array) {
  if (!Array.isArray(array)) {
    throw new Error("The argument must be array.");
  }
  for (let n = 0; n < array.length; n++) {
    if (!Array.isArray(array[n])) {
      return false;
    }
  }
  return true;
};

// 判断数组子元素的长度是否一致，并长度不能为0
transpose._isEqualLen = function(array) {
  let len = array[0].length;
  for (let n = 1; n < array.length; n++) {
    if (array[n].length !== len) {
      return false;
    }
  }
  return true;
};

//console.log(transpose([[1, 2], [4, 5, 6], [7, 8, 9]]));

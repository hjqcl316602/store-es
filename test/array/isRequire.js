/**
 * @description 验证数组是否是空
 *
 * 数组的长度不为0
 *
 * @param { array } 数组
 *
 * @returns [boolean]
 */

export default function isRequire(array) {
  return Array.isArray(array) && array.length > 0;
}

//console.log(isArrayRequire([1,2,3]))

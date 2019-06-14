/*
 * @Descripttion: 二分法查找
 * @version: 1.0.0
 * @Author: huangjunquan
 * @Date: 2019-05-25 22:36:33
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-12 11:52:49
 */

/**
 * @name: 二分法查找
 * @msg
 * @param { array } [ array ] 数组 是一个有序数字的数组
 * @param { value } [ number ] 查找的值
 * @return:[number] 角标值
 */
export default function halfSearch(array, value) {
  if (!Array.isArray(array)) {
    throw new TypeError("参数1，必须是一个数组！");
  }
  if (array.length === 0) {
    throw new TypeError("参数1，必须是一个长度不为0数组！");
  }
  if (typeof value !== "number") {
    throw new TypeError("参数2，必须是一个数字！");
  }
  let min = 0,
    max = array.length - 1,
    mid = 0;
  let count = 0;

  while (max >= min) {
    count++;
    //console.log(count)
    mid = Math.floor((max + min) / 2);
    if (array[mid] > value) {
      max = mid - 1;
    } else if (array[mid] < value) {
      min = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// let array = [1,2,3,5,6,7,8,9,10,11,12,13,14]

// let res = halfSearch(array,1)
// console.log(res)

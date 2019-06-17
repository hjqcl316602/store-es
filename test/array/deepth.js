/**
 * @name: 判断数组最大的维度
 * @param: {array} [ array ] 数组
 * @returns [number]
 */

export default function deepth(array) {
  let deep = 0;
  if (Array.isArray(array)) {
    deep = 1;

    (function deepthArr(arr) {
      for (let n = 0; n < arr.length; n++) {
        if (Array.isArray(arr[n])) {
          deep++;
          deepthArr(arr[n]);
        }
      }
    })(array);
  }
  return deep;
}

//console.log(deepth([0, [1, [2, [3]]]])) // 1

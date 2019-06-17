/**
 * @description 通过指定的函数来去重
 * @param {array} [array] 数组
 * @returns [array]
 * @bads 如果两者判断是相等的话，则取前者
 */

export default function uniqueWith(array, callback, context = this) {
  if (!Array.isArray(array) || array.length < 1) return array;

  if (typeof callback !== "function") return array;

  let newArr = [array[0]];

  for (let n = 1; n < array.length; n++) {
    if (
      newArr.findIndex(item => callback.call(context, item, array[n])) === -1
    ) {
      newArr.push(array[n]);
    }
  }

  return newArr;
}

// let array = [{ name: 'aa', age: 12 }, { name: 'aaa', age: 12 }, { name: 'aa', age: 12 }, { name: 'aaa', age: 12 }, { name: 'aa', age: 12 }]

// let ui = uniqueWith(array, function (pre, next) {
//   return pre['name'] === next['name']
// })

// console.log(ui)

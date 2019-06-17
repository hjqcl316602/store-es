/**
 * @description 实现 Sum() 和 Join() 方法的合并
 *
 * @param { array } [array]
 * @param {callback} [function]
 * @param { initialValue } [any]
 * @param {context} [any]
 *
 * @returns [number,string]
 */

export default function reduce(array, callback, initialValue, context = this) {
  let result = initialValue;

  if (!Array.isArray(array)) return result;

  if (typeof callback !== "function") return result;

  for (let n = 0; n < array.length; n++) {
    result = callback.call(context, result, array[n], n, array);
  }
  return result;
}

// let arr = [{number:1},{number:2},{number:3}]

// let res = reduce([1,2,3,4,5,6,7,8,9],function(value,item,index,array){
//   return value +'-'+ item
// },null)

// console.log(res)
// // null-1-2-3-4-5-6-7-8-9

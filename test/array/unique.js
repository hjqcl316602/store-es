/**
 * @name 数组去重
 * @msg 只支持 object 类型
 * @param {array}  [array]
 * @returns  [array]
 */

export default function unique(array) {
  if (!Array.isArray(array)) {
    throw new Error("The first argument must be array");
  }
  return [...new Set(array)];
}

// function unique2(array) {
//   if (!Array.isArray(array)) return array;
//   return array.filter((item, index) => array.indexOf(item) === index);
// }

//console.log(unique([1, false, 0, { name: "" }, 1]));

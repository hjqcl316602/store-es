/**
 * @name 数组去重
 * @param {array}  [array]
 * @returns  [array]
 */

export default function unique(array) {
  if (!Array.isArray(array)) {
    console.error("[array] is not array");
    return array;
  }
  return [...new Set(array)];
}

// function unique2(array) {
//   if (!Array.isArray(array)) return array;
//   return array.filter((item, index) => array.indexOf(item) === index);
// }

// console.log(unique2([1,2,3,1,2,3,'2',[3]]))

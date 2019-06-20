/**
 * @name 过滤掉数组中的falsy值
 * @msg [ false , 0 , null, undefined , NaN , ""] 表示falsy值
 * @param { array } [ array ]
 * @return: array
 */

export default function truly(array) {
  if (!Array.isArray(array)) {
    throw new Error("The first argument must be a array.");
  }
  return array.filter(Boolean);
}

// let array = [false, 0, null, undefined, NaN, ""];
// for (let n = 0; n < array.length; n++) {
//   console.log(Boolean(array[n]));
//   console.log(array[n] === array[n]);
// }

// console.log(truly([NaN]));
// console.log(truly([0, 1, "", 2, false, null, undefined, NaN]));

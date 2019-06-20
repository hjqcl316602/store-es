/**
 * @name 数组比较，返回一个新的数组
 * @msg 由第一个数组决定，第一个数组中的值没有出现在第二个数组中，即按第二个数组来过滤第一个数组
 * @param { target } [ array ]
 * @param { resource } [ array ]
 * @return: array
 */
export default function diffrence(target = [], resource = []) {
  if (!Array.isArray(target) || !Array.isArray(resource)) {
    throw new Error("The first and second argument must be array.");
  }
  return target.filter(element => {
    return resource.findIndex(item => element === item) === -1;
  });
}

//console.log(diffrence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3]));

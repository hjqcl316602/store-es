/**
 * @description 一维数组转树形结构数据
 * 利用js的引用对象实现
 *
 * @param {array} [array]
 * @param {pid} 根
 *
 * @
 */

// 对象引用的方式

export default function tree(array, pid = "") {
  if (!Array.isArray(array)) return [];
  // 防止污染原本的数据
  let newArr = JSON.parse(JSON.stringify(array));
  newArr.forEach(ele => {
    let arr = newArr.filter(item => item["pid"] === ele["id"]);
    if (arr.length > 0) {
      ele["children"] = arr;
    }
  });
  return newArr.filter(item => item["pid"] === pid);
}

// 递归的方式

function tree2(array, pid) {
  if (!Array.isArray(array)) return [];
  let copyArr = JSON.parse(JSON.stringify(array));
  let resArr = [];
  copyArr.forEach(item => {
    if (item["pid"] === pid) {
      let children = tree2(copyArr, item["id"]);
      if (children.length > 0) {
        item["children"] = children;
      }
      resArr.push(item);
    }
  });
  return resArr;
}

// let data = [
//   { id: 1, pid: '', text: '中国' },
//   { id: 11, pid: 1, text: '四川省' },
//   { id: 111, pid: 11, text: '成都市' },
//   { id: 112, pid: 11, text: '内江市' },
//   { id: 113, pid: 11, text: '绵阳市' },
//   { id: 12, pid: 1, text: '云南省' },
//   { id: 2, pid: '', text: '日本' },
// ]

// let format = tree2(data, '')
// console.log(format)
// console.log(data)

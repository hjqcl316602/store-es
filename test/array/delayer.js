import clean from "../object/clean";

/**
 * @description 树形结构数据转一维数组
 *
 * @param {array} [array]
 * @param  {...any} args 需要清除的一些属性
 *
 * @returns [array]
 */

export default function delayer(array, ...args) {
  if (!Array.isArray(array)) return [];

  let newArray = [];

  array.forEach(item => {
    let children = item["children"];

    let rest = clean(item, ...args);

    newArray.push(rest);

    if (children) {
      newArray.push(...delayer(children, ...args));
    }
  });

  return newArray;
}

// let data = [
//   {
//     id: 1,
//     pid: '',
//     text: '中国',
//     children: [
//       {
//         id: 11,
//         pid: 1,
//         text: '四川省',
//         children: [
//           {
//             id: 111,
//             pid: 11,
//             text: '成都市',
//           },
//           {
//             id: 112,
//             pid: 11,
//             text: '内江市',
//           }
//         ]
//       },
//       {
//         id: 12,
//         pid: 1,
//         text: '云南省',
//       }
//     ]
//   },
//   {
//     id: 2,
//     pid: '',
//     text: '中国' ,
//     children:[]
//   }
// ]

// let format = delayer(data, 'children')

// console.log(format)

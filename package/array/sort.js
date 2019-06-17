/**
 * @name  数组排序
 * @param { arr } [ array ]
 * @param { type } [ number ] [1] 排序类型 1 => 升序 2=>降序 3=> 随机
 * @returns [ array ]
 */

export default function sort(array, type = 1) {
  if (!Array.isArray(array)) {
    console.error("[array] is not array");
    return array;
  }
  return array.sort((a, b) => {
    switch (type) {
      case 1:
        return a - b;
      case 2:
        return b - a;
      case 3:
        return Math.random() - 0.5;
      default:
        return array;
    }
  });
}
sort.storage = [
  { type: 1, label: "升序" },
  { type: 2, label: "降序" },
  { type: 3, label: "乱序" }
];

// let arr = sort([1, 23, 12, 4, 5], 3);
// console.log(arr);

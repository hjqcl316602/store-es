/**
 * @name: 字符串的空格去除
 * @param: {string} [ string ] 字符串
 * @param: {type} [ 1,2,3,4] 类型
 * @return:[ string ]
 */

export default function trim(string, type) {
  if (typeof string !== "string") {
    console.error("[string] is not string");
    return string;
  }
  if (trim.storage.findIndex(item => item["type"] === type) === -1) {
    console.error("[type] is not in [1,2,3,4]");
    type = 1;
  }
  switch (type) {
    case 1:
      return string.replace(/\s+/g, "");
    case 2:
      return string.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return string.replace(/(^\s*)/g, "");
    case 4:
      return string.replace(/(\s*$)/g, "");
    default:
      return string;
  }
}
trim.storage = [
  { type: 1, lebal: "所有空格" },
  { type: 2, lebal: "前后空格" },
  { type: 3, lebal: "前空格" },
  { type: 4, lebal: "后空格" }
];

console.log(trim("ss ss", 4));

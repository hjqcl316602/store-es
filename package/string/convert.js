import types from "../type";
/**
 * @name: 字符串的转换
 * @param : {str} [ string ]
 * @param : { type } [ number<1,2,3,4,5> ]
 * @return: [ string ]
 */

let storages = [
  { type: 1, lebal: "首字母大写，剩余的小写" },
  { type: 2, lebal: "首字母小写，剩余的大写" },
  { type: 3, lebal: "大写转小写，小写转大写" },
  { type: 4, lebal: "全部大写" },
  { type: 5, lebal: "全部小写" }
];

export default function convert(string, type = 4) {
  if (!types.isString(string)) {
    throw new Error("string must be type of string");
  }
  if (
    !types.isNumber(type) ||
    storages.findIndex(storage => storage["type"] === type) === -1
  ) {
    throw new Error(
      "Type must be in [1,2,3,4,5],and it must be type of number"
    );
  }

  switch (type) {
    case 1:
      return string.replace(/\b\w+\b/g, function(word) {
        return (
          word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
        );
      });
    case 2:
      return string.replace(/\b\w+\b/g, function(word) {
        return (
          word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
        );
      });
    case 3:
      return string
        .split("")
        .map(function(word) {
          if (/[a-z]/.test(word)) {
            return word.toUpperCase();
          } else {
            return word.toLowerCase();
          }
        })
        .join("");
    case 4:
      return string.toUpperCase();
    case 5:
      return string.toLowerCase();
    default:
      return string;
  }
}

//console.log(convert("sSs", 3));

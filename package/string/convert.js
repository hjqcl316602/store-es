/**
 * @name: 字符串的转换
 * @param : {str} [ string ]
 * @param : { type } [ number<1,2,3,4,5> ]
 * @return: [ string ]
 */

export default function convert(string, type) {
  if (typeof string !== "string") {
    console.error("[string] must be type of string");
    return string;
  }
  if (convert.storages.findIndex(storage => storage["type"] === type) === -1) {
    console.error("[type] is not in [1,2,3,4,5]");
    type = 4;
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

convert.storages = [
  { type: 1, lebal: "首字母大写，剩余的小写" },
  { type: 2, lebal: "首字母小写，剩余的大写" },
  { type: 3, lebal: "大写转小写，小写转大写" },
  { type: 4, lebal: "全部大写" },
  { type: 5, lebal: "全部小写" }
];

//console.log(convert("sSs", -1));

/**
 * @name: 驼峰字符串转链接字符串
 * @param: {string} [string]
 * @return: [string]
 */
export default function toLink(string) {
  if (typeof string !== "string" || !/^[A-z]+$/.test(string)) {
    console.error("[string] is not string  or its not [a-zA-Z]");
    return string;
  }
  return string.replace(/([A-Z])/g, function(a, b, c) {
    return "-" + b.toLowerCase();
  });
}

//console.log(toLink("asashAHjjasHsa"));

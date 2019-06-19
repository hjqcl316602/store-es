/**
 * @name  驼峰字符串转链接字符串
 * @param  {string} [string]
 * @msg 只能是[ a-zA-Z ] 组成的字符串
 * @return  [string]
 * @example link("asashAHjjasHsa") => asash-a-hjjas-hsa
 */
export default function link(string) {
  if (typeof string !== "string" || !/^[A-z]+$/.test(string)) {
    console.error("[string] is not string  or its not [a-zA-Z]");
    return string;
  }
  return string.replace(/([A-Z])/g, function(a, b, c) {
    return "-" + b.toLowerCase();
  });
}

//console.log(link("asashAHjjasHsa"));

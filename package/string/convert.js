/**
 * @name 字符串的转换-全部大写
 * @param  {string} [ string ]
 * @return [ string ]
 * @example convert("sSs") => 'SSS'
 */

export default function convert(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must string.");
  }
  return string.toUpperCase();
}
/**
 * @name 字符串的转换-全部大写
 * @param  {string} [ string ]
 * @return [ string ]
 * @example convert.upper("sSs") => 'SSS'
 */
convert.upper = function(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must string.");
  }
  return string.toUpperCase();
};
/**
 * @name 字符串的转换-全部小写
 * @param  {string} [ string ]
 * @return [ string ]
 * @example convert.lower("sSs") => 'sss'
 */
convert.lower = function(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must string.");
  }
  return string.toLowerCase();
};
/**
 * @name 字符串的转换-首字母大写，其他的小写
 * @param  {string} [ string ]
 * @return [ string ]
 * @example convert.upperStart("sSs") => 'Sss'
 */
convert.upperStart = function(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must string.");
  }
  return string.replace(/\b\w+\b/g, function(word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  });
};
/**
 * @name 字符串的转换-首字母小写，其他的大写
 * @param  {string} [ string ]
 * @return [ string ]
 * @example convert.lowerStart("sSs") => 'sSS'
 */
convert.lowerStart = function(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must string.");
  }
  return string.replace(/\b\w+\b/g, function(word) {
    return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
  });
};
/**
 * @name 字符串的转换-大写转小写，小写转大写
 * @param  {string} [ string ]
 * @return [ string ]
 * @example convert.switch("sSs") => 'SsS'
 */
convert.switch = function(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must string.");
  }
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
};
//console.log(convert.switch("sSs"));

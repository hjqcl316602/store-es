/**
 * @name  字符串的空格去除-整体
 * @msg String.prototype.trim 只能删除字符串开头的空白
 * @param  {string} [ string ] 字符串
 * @return [ string ]
 */

export default function trim(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }
  return string.replace(/\s+/g, "");
}

/**
 * @name  字符串的空格去除-开头 
 * @param  {string} [ string ] 字符串
 * @return [ string ]
 */

trim.start = function(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }
  return string.replace(/(^\s*)/g, "");
};

/**
 * @name  字符串的空格去除-尾部 
 * @param  {string} [ string ] 字符串
 * @return [ string ]
 */

trim.end = function(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }
  return string.replace(/(\s*$)/g, "");
};

/**
 * @name  字符串的空格去除-两侧 
 * @param  {string} [ string ] 字符串
 * @return [ string ]
 */

trim.both = function(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }
  return string.replace(/(^\s*)|(\s*$)/g, "");
};

/**
 * @description 字符串的转义
 *
 * @param {str}
 */

export default function transfer(str) {
  if (String(str) !== str) return str;
  str = str.replace(/&/gi, "&amp;");
  str = str.replace(/</gi, "&lt;");
  str = str.replace(/>/gi, "&gt;");
  str = str.replace(" ", "&nbsp;");
  return str;
}

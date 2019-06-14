/**
 * @description 验证一个字符串是否是以指定的值开头
 *
 * @param {*} str
 * @param {*} prex
 */

export default function isStart(str, prex) {
  return (
    String(str) === str &&
    String(prex) === prex &&
    str.slice(0, prex.length) === prex
  );
}

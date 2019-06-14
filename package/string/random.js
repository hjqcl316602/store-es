/**
 * @description 生成随机字符串
 *
 * @param {n} 指定长度 ， 默认长度为16
 */

export default function random(n = 16) {
  if (!(Number.isInteger(n) && n > 0)) return "";
  let standard = "abcdefghijklmnopqrstuvwxyz9876543210";
  let len = standard.length;
  let result = "";
  for (let i = 0; i < n; i++) {
    result += standard.charAt(Math.floor(Math.random() * len));
  }
  return result;
}

//console.log(random(16))

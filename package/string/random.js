/**
 * @name: 生成随机字符串
 * @param: { n } [ number ] 指定长度 ， 默认长度为16
 * @return: [ string ]
 */

export default function random(n) {
  if (!(Number.isInteger(n) && n > 0)) {
    console.error("[n] is not integer or less than 1");
    n = 16;
  }
  let standard = "abcdefghijklmnopqrstuvwxyz9876543210";
  let len = standard.length;
  let result = "";
  for (let i = 0; i < n; i++) {
    result += standard.charAt(Math.floor(Math.random() * len));
  }
  return result;
}

//console.log(random(16));

/**
 * @description 随机生成颜色字符串
 *
 * @param { isOpacity } [ boolean ] 是否需要透明度
 *
 * @returns [string]
 */

export default function randomColor(isOpacity = false) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Math.random();
  return isOpacity ? `rgba(${r},${g},${b},${a})` : `rgb(${r},${g},${b})`;
}

function randomColor2() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

//console.log(randomColor(true))

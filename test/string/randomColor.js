/**
 * @name  随机生成颜色字符串
 * @param  { isOpacity } [ boolean ] 是否需要透明度
 * @return  [string]
 * @example randomColor(true) => rgba(226,180,173,0.3421123393946621)
 * @example randomColor() => rgba(226,180,173)
 */

export default function randomColor(isOpacity) {
  if (typeof isOpacity !== "boolean") {
    console.error("[isOpacity] is not boolean");
    isOpacity = false;
  }
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Math.random();
  return isOpacity ? `rgba(${r},${g},${b},${a})` : `rgb(${r},${g},${b})`;
}

// function randomColor2() {
//   return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
// }

//console.log(randomColor(true));

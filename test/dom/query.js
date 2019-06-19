/**
 * 获取页面元素
 *
 * @param {selector} 元素
 */

export default function query(selector) {
  var type = selector.substring(0, 1);
  if (type === "#") {
    if (document.querySelecotor) return document.querySelector(selector);
    return document.getElementById(selector.substring(1));
  } else if (type === ".") {
    if (document.querySelecotorAll) return document.querySelectorAll(selector);
    return document.getElementsByClassName(selector.substring(1));
  } else {
    return document.querySelectorAll
      ? document.querySelectorAll(selector)
      : document.getElementsByTagName(selector);
  }
}

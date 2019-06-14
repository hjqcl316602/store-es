/*
 * @Descripttion: 获取当前页面的滚动元素
 * @version: 1.0.0
 * @Author: huangjunquan
 * @Date: 2019-05-29 16:53:09
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-12 11:48:28
 */

export default function getScrollEventTarget(element, rootParent = window) {
  let node = element;
  while (
    node &&
    node.tagName !== "HTML" &&
    node.tagName !== "BODY" &&
    node.nodeType === 1 &&
    node !== rootParent
  ) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowY === "scroll" || overflowY === "auto") {
      return node;
    }
    node = node.parentNode;
  }
  return rootParent;
}

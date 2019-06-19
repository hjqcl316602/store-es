/*
 * @Descripttion: 事件解除
 * @version:0.0.1
 * @Author: huangjunquan
 * @Date: 2019-06-13 15:55:09
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-13 16:05:04
 */
export default (function() {
  if (window.removeEventListener) {
    // 标准浏览器
    return function(elem, type, handler) {
      elem.removeEventListener(type, handler, false);
    };
  } else if (window.detachEvent) {
    // IE浏览器
    return function(elem, type, handler) {
      elem.detachEvent("on" + type, handler);
    };
  }
})();

/*
 * @Descripttion: 事件绑定
 * @version:0.0.1
 * @Author: huangjunquan
 * @Date: 2019-06-13 15:55:09
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-13 16:00:20
 */
export default (function() {
  if (window.addEventListener) {
    // 标准浏览器
    return function(elem, type, handler) {
      elem.addEventListener(type, handler, false);
    };
  } else if (window.attachEvent) {
    // IE浏览器
    return function(elem, type, handler) {
      elem.attachEvent("on" + type, handler);
    };
  }
})();

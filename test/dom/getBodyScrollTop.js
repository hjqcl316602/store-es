/*
 * @Descripttion: 获取body的滚动距离
 * @version: 1.0.0
 * @Author: huangjunquan
 * @Date: 2019-05-29 16:55:44
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-13 16:07:46
 */

export default (function() {
  if (document.documentElement && document.documentElement.scrollTop) {
    return function() {
      document.documentElement.scrollTop;
    };
  } else if (document.body) {
    return function() {
      document.body.scrollTop;
    };
  }
})();

/*
 * @Descripttion: 获取浏览器的可见高度
 * @version: 1.0.0
 * @Author: huangjunquan
 * @Date: 2019-05-29 16:56:52
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-13 16:10:18
 */

export default function getClientHeight() {
  var clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = Math.min(
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  } else {
    clientHeight = Math.max(
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  }
  return clientHeight;
}

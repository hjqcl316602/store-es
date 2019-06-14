/*
 * @Descripttion: 获取文档的完整高度
 * @version: 1.0.0
 * @Author: huangjunquan
 * @Date: 2019-05-29 16:58:16
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-13 16:10:10
 */

export default function getScrollHeight() {
  return Math.max(
    document.body.scrollHeight || 0,
    document.documentElement.scrollHeight || 0
  );
}

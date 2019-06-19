/*
 * @Descripttion: 获取指定元素的滚动距离
 * @version: 1.0.0
 * @Author: huangjunquan
 * @Date: 2019-05-29 16:54:08
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-12 11:48:42
 */
/**
 * @name: 获取元素的滚动距离
 * @msg:
 */
export default function getScrollTop(element) {
  return "scrollTop" in element ? element.scrollTop : element.pageYOffset;
}
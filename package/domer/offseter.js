import checker from "./checker";

// window 和 element 元素的属性区别
// 1. window.pageYOffset表示文档在窗口左上角垂直方向上的滚动像素，element没有该属性
// 2. element.scrollTop 表示该元素文档被卷的像素，可读写 element.scrollTop = 100 可直接设置被卷的像素，window没有该属性

/**
 * @name 获取指定的元素的高度
 * @param { element } [ element ] 目标元素
 * @return [ number ]
 */
let offseter = function(element) {
  if (!checker(element)) throw new Error("The first argument must be HTMLElement.");
  return element.offsetHeight;
};

/**
 * @name 获取指定的元素的宽度
 * @param { element } [ element ] 目标元素
 * @return [ number ]
 */

offseter.width = function(element) {
  if (!checker(element)) throw new Error("The first argument must be HTMLElement.");
  return element.offsetWidth;
};

/**
 * @name 获取文档可见的高度
 * @msg 非浏览器的高度，浏览器的高度只会大于等于文档可见的高度
 * @return [ number ]
 */

offseter.client = function() {
  var clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
  } else {
    clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
  }
  return clientHeight;
};

/**
 * @name 获取文档可见的宽度
 * @return [ number ]
 */

offseter.client.width = function() {
  var clientWidth = 0;
  if (document.body.clientWidth && document.documentElement.clientWidth) {
    clientWidth = Math.min(document.body.clientWidth, document.documentElement.clientWidth);
  } else {
    clientWidth = Math.max(document.body.clientWidth, document.documentElement.clientWidth);
  }
  return clientWidth;
};

offseter.window = function() {
  return window.outerHeight;
};
// console.log(offseter.window(), window.innerHeight);
// console.log(document.body.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
export default offseter;

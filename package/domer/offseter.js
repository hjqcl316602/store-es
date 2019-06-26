import checker from "./checker";
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

export default offseter;

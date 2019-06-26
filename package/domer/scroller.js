import checker from "./checker";
/**
 * @name 获取完整的文档高度
 * @return [ number ]
 */
let scroller = function() {
  return Math.max(document.body.scrollHeight || 0, document.documentElement.scrollHeight || 0);
};

/**
 * @name 获取完整的文档宽度
 * @return [ number ]
 */
scroller.width = function() {
  return Math.max(document.body.scrollWidth || 0, document.documentElement.scrollWidth || 0);
};

/**
 * @name 获取指定元素的滚动距离
 * @return [ number ]
 */
scroller.top = function(element) {
  if (!checker(element)) throw new Error("The first argument must be HTMLElement.");
  return "scrollTop" in element ? element.scrollTop : element.pageYOffset;
};

/**
 * @name 获取文档的滚动距离
 * @return [ number ]
 */
scroller.top.body = function() {
  return document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
};
/**
 * @name 获取当前元素最近的滚动的祖先元素
 * @param { element } [ element ] 当前元素
 * @param { rootParent = window } 默认返回的祖先元素
 * @return [ element ]
 */
scroller.target = function(element, rootParent = window) {
  if (!checker(element)) throw new Error("The first argument must be HTMLElement.");
  let node = element;
  while (node && node.tagName !== "HTML" && node.tagName !== "BODY" && node.nodeType === 1 && node !== rootParent) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowY === "scroll" || overflowY === "auto") {
      return node;
    }
    node = node.parentNode;
  }
  return rootParent;
};

export default scroller;

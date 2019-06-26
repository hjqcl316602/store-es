/**
 * @name 判断一个值是否是dom元素
 * @param { elem } [ any ]
 * @return [ boolean ]
 */
let checker = (function() {
  if (typeof HTMLElement === "object") {
    return function(elem) {
      return elem instanceof HTMLElement;
    };
  } else {
    return function(elem) {
      return !!elem && typeof elem === "object" && elem.nodeType === 1 && typeof elem.nodeName === "string";
    };
  }
})();
export default checker;

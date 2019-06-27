/**
 * @name 判断是否是dom节点
 * @care
 * console.log(document.__proto__); // HTMLDocument
 * console.log(document.__proto__.__proto__); // Document
 * console.log(document.__proto__.__proto__.__proto__); // Node
 * console.log(document.__proto__.__proto__.__proto__.__proto__); // EventTarget
 *
 * console.log(window.__proto__); // Window
 * console.log(window.__proto__.__proto__); // WindowProperties
 * console.log(window.__proto__.__proto__.__proto__); // Node
 * console.log(window.__proto__.__proto__.__proto__.__proto__); // EventTarget
 *
 * console.log(document.body.__proto__); // HTMLBodyElement
 * console.log(document.body.__proto__.__proto__); // HTMLElement
 * console.log(document.body.__proto__.__proto__.__proto__); // Element
 * console.log(document.body.__proto__.__proto__.__proto__.__proto__); // Node
 * console.log(document.body.__proto__.__proto__.__proto__.__proto__.__proto__); // EventTarget
 *
 * console.log(document.documentElement.__proto__); // HTMLHtmlElement
 * console.log(document.documentElement.__proto__.__proto__); // HTMLElement
 * console.log(document.documentElement.__proto__.__proto__.__proto__); // Element
 * console.log(document.documentElement.__proto__.__proto__.__proto__.__proto__); // Node
 * console.log(document.documentElement.__proto__.__proto__.__proto__.__proto__.__proto__); // EventTarget
 * @param { elem } [ any ]
 * @return [ boolean ]
 */

let checker = function(elem) {
  return elem != null && typeof elem === "object" && elem.nodeType === 1 && typeof elem.nodeName === "string";
};

/**
 * @name 判断是否是document
 * @param { elem } [ any ]
 * @return [ boolean ]
 */
checker.document = function(document) {
  return document != null && typeof document === "object" && document.nodeType === 9 && document.nodeName === "#document";
};
/**
 * @name 判断是否是window
 * @param { elem } [ any ]
 * @return [ boolean ]
 */
checker.window = function(window) {
  return window != null && window === window.window;
};

//console.log(checker.document(document));
export default checker;

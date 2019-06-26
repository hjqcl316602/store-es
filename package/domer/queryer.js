/**
 * @name 获取页面元素
 * @param { selector }  [ string ]
 */
let queryer = function(selector) {
  var type = selector.substring(0, 1);
  if (type === "#") {
    if (document.querySelecotor) return document.querySelector(selector);
    return document.getElementById(selector.substring(1));
  } else if (type === ".") {
    if (document.querySelecotorAll) return document.querySelectorAll(selector);
    return document.getElementsByClassName(selector.substring(1));
  } else {
    return document.querySelectorAll ? document.querySelectorAll(selector) : document.getElementsByTagName(selector);
  }
};

/**
 * @name 通过id获取页面元素
 * @param { selector }  [ string ]
 */
queryer.byIdName = (function() {
  if (document.querySelecotor) {
    return function(selector) {
      if (typeof selector !== "string") throw new Error("The argument must be string.");
      return document.querySelector("#" + selector);
    };
  } else {
    return function(selector) {
      if (typeof selector !== "string") throw new Error("The argument must be string.");
      return document.getElementById(selector);
    };
  }
})();

/**
 * @name 通过class名获取页面元素
 * @param { selector }  [ string ]
 */
queryer.byClassName = (function() {
  if (document.querySelecotorAll) {
    return function(selector) {
      if (typeof selector !== "string") throw new Error("The argument must be string.");
      return document.querySelectorAll("." + selector);
    };
  } else {
    return function(selector) {
      if (typeof selector !== "string") throw new Error("The argument must be string.");
      return document.getElementsByClassName(selector);
    };
  }
})();

/**
 * @name 通过tag名获取页面元素
 * @param { selector }  [ string ]
 */
queryer.byTagName = (function() {
  if (document.querySelectorAll) {
    return function(selector) {
      if (typeof selector !== "string") throw new Error("The argument must be string.");
      return document.querySelectorAll(selector);
    };
  } else {
    return function(selector) {
      if (typeof selector !== "string") throw new Error("The argument must be string.");
      return document.getElementsByTagName(selector);
    };
  }
})();

export default queryer;

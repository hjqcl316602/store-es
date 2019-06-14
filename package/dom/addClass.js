/**
 * 为dom元素添加class属性
 * @param { ele } [dom] dom节点
 * @param { className } [string] class 字符串链接
 */

export default function addClass(ele, className) {
  if ("classList" in ele) {
    ele.classList.add(className);
  } else {
    let prevClassName = ele.getAttribute("class");
    let setClassName = prevClassName
      ? prevClassName + " " + className
      : className;
    ele.setAttribute("class", setClassName);
  }
  return ele;
}

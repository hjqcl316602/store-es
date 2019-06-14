/**
 * 执行方法节流  - 时间戳式
 * 就是指连续触发事件但是在 n 毫秒中只执行一次函数，
 *
 * @param { fn } [function] 执行方法
 * @param { delay }   间隔多少秒后执行方法
 */

export default function throttleTime(fn, delay) {
  if (typeof fn !== "function") {
    throw new TypeError("Expected of first params is function!");
  }
  let previous = 0;
  let time = 0;
  delay = +delay || 0;

  return function(...args) {
    let now = +new Date();

    if (now - previous > delay) {
      time++;
      fn.call(this, ...args);
      previous = now;
    }
    return time;
  };
}

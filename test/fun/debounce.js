/**
 * 执行方法去抖动
 * 如果一个函数持续地触发，那么只在它结束后过一段时间只执行一次
 *
 * @param {fn } [function] 执行的方法
 * @param {delay }  等待多少时间触发
 *
 *
 * 使用闭包的作用，独立每个的bounce，互相不影响
 */

export default function debounce(fn, delay) {
  if (typeof fn !== "function") {
    throw new TypeError("Expected of first params is function!");
  }
  let timeout = null;
  let time = 0;
  delay = +delay || 0;
  return function(...args) {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      time++;
      fn.call(this, ...args);
    }, delay);
    return time;
  };
}

// 1.频繁执行会重新创建定时器
// 2.支持执行定时器之后，若配置了立即执行，则会再次立即执行

// test
// mounted() {
//   this._debounceHanlder = this.$fn.debounce(function(e,type){
//     console.log(e)
//     console.log(type)
//   },500)
// },
// methods:{

//   hanlder(evt){
//     this._debounceHanlder(evt,'click')
//   }
// }

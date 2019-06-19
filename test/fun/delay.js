/***
 *  延迟多少时间触发事件
 *
 * @param {fn} [function] 触发的方法
 * @param { wait }  等待的时长
 * @param { ..args} 方法的参数
 */

export default function delay(fn, wait, ...args) {
  if (typeof fn !== "function") {
    throw new TypeError("Expected of first params is function!");
  }
  return function() {
    setTimeout(fn, Number(wait) || 0, ...args);
  };
}

//test
// let fn = function(text,name){
//   console.log(text,name)
// }

//  let delayFn = delay(fn,'sds','later','hjq')

//   console.log(delayFn())

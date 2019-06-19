/**
 * 方法执行前函数
 *
 * 暂时只支持同步函数
 *
 * @param { fn  } [function] 执行的方法
 * @param {beforefn} [function] 方法执行前需要执行的方法
 */
export default function before(fn, beforefn) {
  if (typeof fn !== "function") {
    throw new TypeError("Expected of first params is function!");
  }
  if (typeof beforefn !== "function") {
    throw new TypeError("Expected of second params is function!");
  }
  return function() {
    beforefn.apply(this, arguments);
    return fn.apply(this, arguments);
  };
}

// let dod = before(function(){
//   console.log('do')
// },function(){
//   setTimeout(()=>{
//     console.log('before do')
//   },100)
// })

// console.log(dod())

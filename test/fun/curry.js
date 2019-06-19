/**
 * 函數柯里化
 *
 * 概念
 * 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数
 *
 * 可以任意传参，到达预期的时候触发函数执行返回值（可以是参数为空的时候）
 */

export default function curry(fn, ...args) {
  if (typeof fn !== "function") {
    throw new TypeError("Expected of first params is function!");
  }
  let params = args;
  return function(...rest) {
    if (rest.length === 0) {
      let _args = params.concat();
      params = [];
      return fn.call(this, ..._args);
    } else {
      params.push(...rest);
      return curry.call(this, fn, ...params);
    }
  };
}

//  let add  = function (...args){
//    return args.reduce((prex,next)=> prex + next )
//  }
//  let curryFn = curry(add,0)

//  console.log( curryFn(1,2,3)(4)(5,6,7,8)(9,10)() )

// new Array([]).filter(item=>{ return item.length > 10 })()

import type from "./type";
import is from "./is";

// 支持的数据类型
const supportType = ["number", "string", "boolean", "null", "undefined", "array", "object", "function", "symbol"];

//原始数据类型,包含null
const originType = ["number", "string", "boolean", "null", "undefined", "function", "symbol"];
// 引用数据类型
const quoteType = ["object", "array"];

/**
 * @name 对象的拷贝-向前
 * @param { prev } [ number,string,boolean,null,undefined,array,object ,function,symbol ]
 * @param { next } [ number,string,boolean,null,undefined,array,object ,function,symbol ]
 * @return [ number,string,boolean,null,undefined,array,object ,function,symbol ]
 */

export default function extend(prev, next) {
  if (!is(...supportType)(prev)) {
    throw new Error(`The first argument type must be in [ number,string,boolean,null,undefined,function,symbol,array,object ],but the argument type is ${type(prev)}.`);
  }

  if (!is(...supportType)(next)) {
    throw new Error("The second argument type must be in [ number,string,boolean,null,undefined,function,symbol,array,object ],but the argument type is " + type(next) + ".");
  }
  let prevType = type(prev);
  let nextType = type(next);
}

// console.log(extend(1, new Date()));

console.log(extend(1, { name: "hjq" }));

// console.log(extend([1], 1));
// console.log(extend(1, [1]));
// console.log(extend(1, { name: 1 }));
// console.log(extend({ name: 1 }, 1));
// console.log(extend({ name: 1 }, [1]));
// console.log(extend([1], { name: 1 }));

// 原始1 + 原始2 => 原始2
// 原始 + 引用 => 原始
// 引用 + 原始 => 引用（深复制）
// array + 原始
// object + 原始
// 引用 + 引用
// array + array => array2(深复制)
// array + object => array(深复制)
// object + array  => object(深复制)
// object + object => object2(深复制)

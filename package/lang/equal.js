import type from "../type/type";

// 支持的数据类型
const support = ["number", "string", "boolean", "null", "undefined", "array", "object"];

// 数据是否在支持的数据类型中
const isCheck = function(value) {
  return support.findIndex(item => type(value) === item) > -1;
};

/**
 * @name 判断两个数据的属性值是否相等
 * @param { prev } [ number,string,boolean,null,undefined,array,object ]
 * @param { next } [ number,string,boolean,null,undefined,array,object ]
 * @msg 只支持number,string,boolean,null,undefined,array,object类型的数据比较，如果需要比较symbol、function，可以强制转为string之后再比较，作用不大，所以放弃了对他们的比较
 * @msg 支持多维度的array和object类型，但其子元素类型也必须要满足在这些类型中
 * @return: [ boolean ]
 * @example //console.log(equal(NaN, NaN)); => true
 * @example //console.log(equal([NaN, { name: true }], [NaN, { name: true }])); => true
 */

export default function equal(prev, next) {
  if (!isCheck(prev) || !isCheck(next)) {
    throw new Error("The first argument and second argument type must be in [ number,string,boolean,null,undefined,array,object ]");
  }
  let prevType = type(prev);
  let nextType = type(next);
  if (prevType !== nextType) return false;
  if (prevType === "string" || prevType === "boolean" || prevType === "null" || prevType === "undefined") return prev === next;
  if (prevType === "number") return prev === next || (Number.isNaN(prev) && Number.isNaN(next));
  if (prevType === "object") {
    let prevKeys = Object.keys(prev);
    let nextKeys = Object.keys(next);
    if (prevKeys.length !== nextKeys.length) return false;
    for (let n = 0; n < prevKeys.length; n++) {
      let isCheck = equal(prev[prevKeys[n]], next[prevKeys[n]]);
      if (!isCheck) {
        return false;
      }
    }
    return true;
  }
  if (prevType === "array") {
    if (prev.length !== next.length) return false;
    for (let n = 0; n < prev.length; n++) {
      let isCheck = equal(prev[n], next[n]);
      if (!isCheck) {
        return false;
      }
    }
    return true;
  }
}

//console.log(equal(NaN, NaN));
//console.log(equal([NaN, { name: true }], [NaN, { name: true }]));

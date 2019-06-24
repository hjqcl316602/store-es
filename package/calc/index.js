/*
 * @Descripttion: 数学计算
 * @version: 0.0.1
 * @Author: huangjunquan
 * @Date: 2019-06-11 18:07:02
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-24 18:39:58
 * @msg: 安全性：
 */
import template from "../array/template";
/**
 * @name 数字计算
 * @msg
 * @return [ object ]
 * @care
 * 1.自动转为科学计数，当数值为整数时，后面有21个0时， 9000000000000000000000 => 9e+21 ； 当数值为浮点数时，一个不为0的数前面有7个0时，0.0000001 => 1e-7，需要将科学计数转为正常的数值进行计算
 * 2.安全数：[-Math.pow(2,53)+1] - [ Math.pow(2,53)-1 ] 之内为安全数
 * 3.当两数计算时，如果采用原生计算，需要先判断两数是否是安全数范围，否则得到的数不完全正确，但是当数是科学计数会增加复杂性，解决办法：入参只能是字符串
 */

export default function Calc() {}

/**
 * @name 加法运算
 * @param { prev } [ number | string ]
 * @param { next } [ number | string ]
 * @return [string]
 * @example add(0.1,0.2) => 0.3
 */

Calc.prototype.add = function(prev, next) {
  if (typeof prev !== "string" || typeof next !== "string") {
    throw new Error("The first and second argument must be string.");
  }
  console.log(prev, next);
  let prevSlotLen = prev.split(".")[1] ? prev.split(".")[1].length : 0;
  let nextSlotLen = next.split(".")[1] ? next.split(".")[1].length : 0;
  let maxSlotLen = Math.max(prevSlotLen, nextSlotLen);
  console.log(prevSlotLen, nextSlotLen);
  let slotMinus = prevSlotLen - nextSlotLen;
  let slotZero = template.of(Math.abs(slotMinus), () => "0").join("");
  if (slotMinus > 0) {
    next = next + slotZero;
  } else if (slotMinus < 0) {
    prev = prev + slotZero;
  }
  next = next.replace(".", "");
  prev = prev.replace(".", "");
  prev = prev.split("").reverse();
  next = next.split("").reverse();
  console.log(prev, next);
  let len = Math.max(prev.length, next.length);
  let resArr = [];
  for (let i = 0; i < len; i++) {
    let adds = Number(prev[i] || 0) + Number(next[i] || 0) + Number(resArr[i] || 0);

    resArr[i] = adds % 10;
    resArr[i + 1] = (adds - (adds % 10)) / 10;
  }
  let res = resArr.reverse().join("");
  let res2 = +res === 0 ? "0" : res.replace(/^0+/, "");
  let res3 = maxSlotLen !== 0 ? res2.substring(0, res2.length - maxSlotLen) + "." + res2.substring(res2.length - maxSlotLen) : res2;
  return res3.startsWith(".") ? "0" + res3 : res3;
};

/**
 * @name 减法运算
 * @param { prev } [ number | string ]
 * @param { next } [ number | string ]
 * @return [ string ]
 */

Calc.prototype.minus = function(prev, next) {
  if (typeof prev !== "number" && typeof prev !== "string") {
    throw new Error("The first argument must be number or string.");
  }

  if (Number.isNaN(Number(prev))) {
    throw new Error("The first argument must be valid number.");
  }
  if (typeof next !== "number" && typeof next !== "string") {
    throw new Error("The second argument must be number or string.");
  }

  if (Number.isNaN(Number(next))) {
    throw new Error("The second argument must be valid number.");
  }

  var prevSlot, nextSlot, multiple;
  try {
    prevSlot = prev.toString().split(".")[1].length;
  } catch (f) {
    prevSlot = 0;
  }
  try {
    nextSlot = next.toString().split(".")[1].length;
  } catch (f) {
    nextSlot = 0;
  }
  multiple = Math.pow(10, Math.max(prevSlot, nextSlot));

  let prevSloted = prev * multiple;
  let nextSloted = next * multiple;
  if (!Number.isSafeInteger(prevSloted)) {
    throw new Error("The first argument must be safeInteger while it formated");
  }
  if (!Number.isSafeInteger(nextSloted)) {
    throw new Error("The second argument must be safeInteger while it formated");
  }

  return (prevSloted - nextSloted) / multiple;
};

/**
 * @name 乘法运算
 * @msg
 * 小数与整数的积也不能得到期望值，1.2334567 * 1000 = 1233.4567000000002
 * @condition
 * 1.参数必须是字符串和数字类型形式
 * 2.通过Nmber()强制后，不能是NaN,即筛选出可以进行计算的数字，可以是 '3e+10'=> 300 '.2'=>0.2 ''
 * 3.替换掉字符串中的'.'后，再强制转换为数字后必须是在安全数之内，即在[ -Math.pow(2,53)-1,Math.pow(2,53)-1]之间的数字
 * 4.两数乘积也必须要安全数范围之内
 * @param { prev } [ number | string ]
 * @param { next } [ number | string ]
 * @return [ string ]
 */

Calc.prototype.mul = function(prev, next) {
  if ((typeof prev !== "string" && typeof prev !== "number") || (typeof next !== "string" && typeof next !== "number")) {
    throw new Error("The argument must pass through condition 1.");
  }
  if (Number.isNaN(Number(prev)) || Number.isNaN(Number(next))) {
    throw new Error("The argument must pass through condition 2.");
  }
  let prevString = Number(prev).toString();
  let prevIntString = prevString.replace(".", "");
  let prevIntNumber = Number(prevIntString);

  let nextString = Number(next).toString();
  let nextIntString = nextString.replace(".", "");
  let nextIntNumber = Number(nextIntString);

  if (!Number.isSafeInteger(prevIntNumber) || !Number.isSafeInteger(nextIntNumber)) {
    throw new Error("The argument must pass through condition 3.");
  }
  let slot = 0;
  slot += prevString.split(".")[1] ? prevString.split(".")[1].length : 0;
  slot += nextString.split(".")[1] ? nextString.split(".")[1].length : 0;
  let muls = prevIntNumber * nextIntNumber;
  if (!Number.isSafeInteger(muls)) {
    throw new Error("The result must pass through condition 4.");
  }
  return muls / Math.pow(10, slot);
};

/**
 * @name 除法运算
 * @param  { prev } [ number | string ]
 * @param  { next } [ number | string ]
 * @return [ string ]
 */

Calc.prototype.div = function(a, b) {
  var c,
    d,
    e = 0,
    f = 0;
  try {
    e = a.toString().split(".")[1].length;
  } catch (g) {
    e = 0;
  }
  try {
    f = b.toString().split(".")[1].length;
  } catch (g) {
    f = 0;
  }
  return (c = Number(a.toString().replace(".", ""))), (d = Number(b.toString().replace(".", ""))), this.mul(c / d, Math.pow(10, f - e));
};

/**
 * @name 大整数相加
 * @param  { prev } [ number | string ]
 * @param  { next } [ number | string ]
 * @return [ string ]
 */

Calc.prototype.bigIntAdd = function(prev, next) {
  if (typeof prev !== "string" || typeof next !== "string") {
    throw new Error("The first argument and second argument must be string.");
  }
  if (!/^[0-9]+$/.test(prev) || !/^[0-9]+$/.test(next)) {
    throw new Error("The first argument and second argument must be [0-9] string.");
  }
  prev = prev.split("").reverse();
  next = next.split("").reverse();
  let len = Math.max(prev.length, next.length);
  let resArr = [];
  for (let i = 0; i < len; i++) {
    let adds = Number(prev[i] || 0) + Number(next[i] || 0) + Number(resArr[i] || 0);

    resArr[i] = adds % 10;
    resArr[i + 1] = (adds - (adds % 10)) / 10;
  }
  let res = resArr.reverse().join("");
  return +res === 0 ? "0" : res.replace(/^0+/, "");
};

/**
 * @name 大整数相乘
 * @param  { prev } [ number | string ]
 * @param  { next } [ number | string ]
 * @return [ string ]
 */

Calc.prototype.bigIntMul = function(prev, next) {
  if (typeof prev !== "string" || typeof next !== "string") {
    throw new Error("The first argument and second argument must be string.");
  }
  if (!/^[0-9]+$/.test(prev) || !/^[0-9]+$/.test(next)) {
    throw new Error("The first argument and second argument must be [0-9] string.");
  }
  let resArr = [];
  for (let n = prev.length - 1; n >= 0; n--) {
    for (let k = next.length - 1; k >= 0; k--) {
      let value = Number(prev[n] || 0) * Number(next[k] || 0) + (resArr[n + k + 1] || 0);
      resArr[n + k + 1] = value % 10;
      resArr[n + k] = (value - (value % 10)) / 10;
    }
  }
  let res = resArr.join("");
  return +res === 0 ? "0" : res.replace(/^0+/, "");
};

let calc = new Calc();
console.log(calc.add("123.0", "1234.0"));

/*
 * @Descripttion: 数学计算
 * @version: 0.0.1
 * @Author: huangjunquan
 * @Date: 2019-06-11 18:07:02
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-12 18:34:50
 * @msg:number类型的值必须要在安全范围之内，string类型必须是数字组成，超过安全范围可用大数相加,但不考虑小数，采用字符串的形式
 */

export default function Calc() {}

/**
 * @name: 加法运算
 * @param :  { prev } [ number | string ]
 * @param :  { next } [ number | string ]
 * @return:[string]
 */

Calc.prototype.add = function(a, b) {
  var c, d, e;
  try {
    c = a.toString().split(".")[1].length;
  } catch (f) {
    c = 0;
  }
  try {
    d = b.toString().split(".")[1].length;
  } catch (f) {
    d = 0;
  }
  return (
    (e = Math.pow(10, Math.max(c, d))), (this.mul(a, e) + this.mul(b, e)) / e
  );
};

/**
 * @name: 减法运算
 * @param :  { prev } [ number | string ]
 * @param :  { next } [ number | string ]
 * @return:[ string ]
 */

Calc.prototype.minus = function(a, b) {
  var c, d, e;
  try {
    c = a.toString().split(".")[1].length;
  } catch (f) {
    c = 0;
  }
  try {
    d = b.toString().split(".")[1].length;
  } catch (f) {
    d = 0;
  }
  return (
    (e = Math.pow(10, Math.max(c, d))), (this.mul(a, e) - this.mul(b, e)) / e
  );
};

/**
 * @name: 乘法运算
 * @param :  { prev } [ number | string ]
 * @param :  { next } [ number | string ]
 * @return:[ string ]
 */

Calc.prototype.mul = function(a, b) {
  var c = 0,
    d = a.toString(),
    e = b.toString();
  try {
    c += d.split(".")[1].length;
  } catch (f) {
    c += 0;
  }
  try {
    c += e.split(".")[1].length;
  } catch (f) {
    c += 0;
  }
  return (
    (Number(d.replace(".", "")) * Number(e.replace(".", ""))) / Math.pow(10, c)
  );
};

/**
 * @name: 除法运算
 * @param :  { prev } [ number | string ]
 * @param :  { next } [ number | string ]
 * @return:[ string ]
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
  return (
    (c = Number(a.toString().replace(".", ""))),
    (d = Number(b.toString().replace(".", ""))),
    this.mul(c / d, Math.pow(10, f - e))
  );
};

/**
 * @name: 大整数相加
 * @param :  { prev } [ number | string ]
 * @param :  { next } [ number | string ]
 * @return:[ string ]
 */

Calc.prototype.bigIntAdd = function(prev, next) {
  prev = String(prev);
  next = String(next);
  if (!/^[0-9]+$/.test(prev) || !/^[0-9]+$/.test(next)) return "";
  prev = prev.split("").reverse();
  next = next.split("").reverse();
  let len = Math.max(prev.length, next.length);
  let resArr = [];
  for (let i = 0; i < len; i++) {
    let adds =
      Number(prev[i] || 0) + Number(next[i] || 0) + Number(resArr[i] || 0);

    resArr[i] = adds % 10;
    resArr[i + 1] = (adds - (adds % 10)) / 10;
  }
  let res = resArr.reverse().join("");
  return +res === 0 ? "0" : res.replace(/^0+/, "");
};

/**
 * @name: 大整数相乘
 * @param :  { prev } [ number | string ]
 * @param :  { next } [ number | string ]
 * @return:[ string ]
 */

Calc.prototype.bigIntMul = function(prev, next) {
  prev = String(prev);
  next = String(next);
  if (!/^[0-9]+$/.test(prev) || !/^[0-9]+$/.test(next)) return "";
  let resArr = [];
  for (let n = prev.length - 1; n >= 0; n--) {
    for (let k = next.length - 1; k >= 0; k--) {
      let value =
        Number(prev[n] || 0) * Number(next[k] || 0) + (resArr[n + k + 1] || 0);
      resArr[n + k + 1] = value % 10;
      resArr[n + k] = (value - (value % 10)) / 10;
    }
  }
  let res = resArr.join("");
  return +res === 0 ? "0" : res.replace(/^0+/, "");
};

// let calc = new Calc();
// console.log(calc.add(1, 0.3));

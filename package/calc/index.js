/*
 * @Descripttion: 数学计算
 * @version: 0.0.1
 * @Author: huangjunquan
 * @Date: 2019-06-11 18:07:02
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-27 14:31:29
 * @msg: 安全性：
 */
import template from "../array/template";
import insert from "../string/insert";
/**
 * @name 数字计算
 *
 * @msg
 * 解决js 中 0.1 + 0.2 != 0.3
 * 为何不支持数字？
 * 因为有些特殊的数字会自动转为科学计数，并且存在安全数范围。
 * 自动转为科学计数，当数值为整数时，后面有21个0时， 9000000000000000000000 => 9e+21 ； 当数值为浮点数时，一个不为0的数前面有7个0时，0.0000001 => 1e-7
 * @return [ object ]
 */

export default function Calc() {}
/**
 * @name 数字格式化
 * @msg
 * 1.是否存在'.'，若存在，去掉开头和结尾的0，否则，只去掉开头的0
 * 2.当以'.'开头，则前面补'0'
 * 3.当以'.'结尾，则去掉结尾的'.'
 * 4.若为空，则返回0
 * @param { string } [ string]
 * @return string
 * @example console.log(calc.format("000.0001"));=> '0.0001'
 */
Calc.prototype.format = function(string) {
  if (typeof string !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (string.indexOf(".") > -1) {
    string = string.replace(/(0+)$/, "");
  }
  string = string.replace(/^(0+)/, "");
  if (string.startsWith(".")) {
    string = "0" + string;
  }
  string = string.replace(/\.$/, "");
  return string.length === 0 ? "0" : string;
};
/**
 * @name 是否是合法的可计算的我数字
 * @msg
 * 1.以'0'开头，若后面没有有小数点，则'0'本身；若后面有小数点，则小数点后面有至少一位的数字
 * 2.不以'0'开头，后面跟任意位的数字，若有小数点，后面至少需要一位以上的数字
 * @param { string } [ string ]
 * @return [ boolean ]
 * @example isFreeNumber("0.0") => true
 * @example isFreeNumber("0.") => false
 * @example isFreeNumber("001") => false
 * @example isFreeNumber(".0") => false
 * @example isFreeNumber("-1") => false
 * @example isFreeNumber("+1") => false
 */
Calc.prototype.isFreeNumber = function(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }
  let regex = /(^[0](\.[0-9]+)?$)|(^[1-9]([0-9]+)?(\.[0-9]+)?$)/; ///(^0\.([0-9]*)?[1-9]+([0-9]*)?$)|(^[0]{1}$)|(^[1-9]([0-9]+)?(\.[0-9]+)?$)/;
  return regex.test(string);
};
/**
 * @name 加法运算
 * @param { prev } [ number | string ]
 * @param { next } [ number | string ]
 * @return [string]
 * @example console.log(calc.add("1.123", "0.877")); // => 2
 * @example console.log(calc.add("0.1", "0.2")); // 0.3
 * @example console.log(calc.add("0.1", "1.23")); // => 1.33
 * @example console.log(calc.add("1000", "0.0001")); //=>1000.0001
 * @example console.log(calc.add("00001", "1")); // => 2
 * @example console.log(calc.add("99999999999999999", "1")); //=> 1000000000000000
 */

Calc.prototype.add = function(prev, next) {
  if (typeof prev !== "string" || typeof next !== "string") {
    throw new Error("The first and second argument must be string.");
  }
  if (!this.isFreeNumber(prev) || this.isFreeNumber(next)) {
    throw new Error("The first and second argument must be free number.");
  }
  let prevSplit = prev.split("."),
    nextSplit = next.split(".");
  let prevIntLen = prevSplit[0].length,
    nextIntLen = nextSplit[0].length,
    minusIntLen = prevIntLen - nextIntLen,
    maxIntLen = Math.max(prevIntLen, nextIntLen);
  let prevFloatLen = prevSplit[1] ? prevSplit[1].length : 0,
    nextFloatLen = nextSplit[1] ? nextSplit[1].length : 0,
    minusFloatLen = prevFloatLen - nextFloatLen,
    maxFloatLen = Math.max(prevFloatLen, nextFloatLen);
  // 进行整数部分0的补位
  let intZero = template.of(Math.abs(minusIntLen), () => "0").join("");
  if (minusIntLen > 0) {
    next = intZero + next;
  } else if (minusIntLen < 0) {
    prev = intZero + prev;
  }
  // 进行浮点数部分0的补位
  let floatZero = template.of(Math.abs(minusFloatLen), () => "0").join("");
  if (minusFloatLen > 0) {
    next = next + floatZero;
  } else if (minusFloatLen < 0) {
    prev = prev + floatZero;
  }
  next = next.replace(".", "");
  prev = prev.replace(".", "");
  prev = prev.split("").reverse();
  next = next.split("").reverse();
  let resArr = [];
  for (let i = 0; i < prev.length; i++) {
    let addRes = Number(prev[i] || 0) + Number(next[i] || 0) + Number(resArr[i] || 0);
    resArr[i] = addRes % 10;
    let res = (addRes - (addRes % 10)) / 10;
    res > 0 ? (resArr[i + 1] = res) : null;
  }
  let res = resArr.reverse().join("");
  let resSlot = insert(res, res.length - maxFloatLen, ".");

  return this.format(resSlot);
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
 * @example console.log(calc.mul("0.1", "0.7")); => '0.07'
 * @example console.log(calc.mul("123456", "0.123456")); => '15241.383936'
 */

Calc.prototype.mul = function(prev, next) {
  if (typeof prev !== "string" || typeof next !== "string") {
    throw new Error("The first and second argument must be string.");
  }
  if (!this.isFreeNumber(prev) || !this.isFreeNumber(next)) {
    throw new Error("The first and second argument must be free number.");
  }
  let prevSplit = prev.split("."),
    nextSplit = next.split(".");
  let prevIntLen = prevSplit[0].length,
    nextIntLen = nextSplit[0].length,
    minusIntLen = prevIntLen - nextIntLen,
    maxIntLen = Math.max(prevIntLen, nextIntLen);
  let prevFloatLen = prevSplit[1] ? prevSplit[1].length : 0,
    nextFloatLen = nextSplit[1] ? nextSplit[1].length : 0,
    addFloatLen = prevFloatLen + nextFloatLen,
    maxFloatLen = Math.max(prevFloatLen, nextFloatLen);
  prev = prev.replace(".", "");
  next = next.replace(".", "");
  let res = [];
  for (let n = prev.length - 1; n >= 0; n--) {
    for (let k = next.length - 1; k >= 0; k--) {
      let value = Number(prev[n] || 0) * Number(next[k] || 0) + (res[n + k + 1] || 0);

      let value1 = value % 10;
      let value2 = (value - value1) / 10;
      res[n + k + 1] = value1;
      res[n + k] = value2 + Number(res[n + k] || 0);
    }
  }
  let resJoin = res.join("");
  let resInsert = insert(resJoin, resJoin.length - addFloatLen, ".");
  let resFormat = this.format(resInsert);
  return resFormat;
};

// let calc = new Calc();
// console.log(calc.isFreeNumber("0.123456"));
// console.log(calc.mul("123456.7", "0.1"));

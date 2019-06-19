/*
 * @Descripttion: 表单数据验证
 * @version:0.0.1
 * @Author: huangjunquan
 * @Date: 2019-06-12 11:17:47
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-13 14:43:45
 * @msg : 首先会判断是否是必填项； 是，则先判断是否有值，再进行后续的验证判断；否，先判断是否有值，无，则跳过该数据的后续验证，有，则继续后续验证、
 * @msg : 支持的类型 regex | len | function
 */
import regexs from "../regex";

export default function Check() {
  this.data = null;
  this.message = "";
  this.pass = true;
  this.isRequire = false;
  this.sourse = [];

  /**
   * @name: 绑定当前验证的数据
   * @param ： { data } [ string ]
   * @return: [ object ] 当前实例
   */
  this.set = function(data) {
    if (!this.pass) return this;
    this.isRequire = false;
    this.data = data;

    this.sourse.push({
      data: data,
      require: false
    });

    this.pass = true;
    this.message = "";
    return this;
  };

  this.require = function(message) {
    if (!this.pass) return this;
    this.isRequire = true;
    this.pass = this._isRequire(this.data);
    this.sourse[this.sourse.length - 1]["require"] = true;
    if (!this.pass) {
      this.message = message;
    }
    return this;
  };

  this.len = function(message, len) {
    if (!this.pass || (!this.isRequire && !this._isRequire(this.data))) {
      return this;
    }
    let regex = new RegExp(`^[\\s\\S]{${len}}$`);
    this.pass = regex.test(this.data);
    if (!this.pass) {
      this.message = message;
    }
    return this;
  };

  this.minLen = function(message, min) {
    if (!this.pass || (!this.isRequire && !this._isRequire(this.data))) {
      return this;
    }
    let regex = new RegExp(`^[\\s\\S]{${min},}$`);
    this.pass = regex.test(this.data);
    if (!this.pass) {
      this.message = message;
    }
    return this;
  };

  this.maxLen = function(message, max) {
    if (!this.pass || (!this.isRequire && !this._isRequire(this.data))) {
      return this;
    }
    let regex = new RegExp(`^[\\s\\S]{0,${max}}$`);
    this.pass = regex.test(this.data);
    if (!this.pass) {
      this.message = message;
    }
    return this;
  };

  this.rangeLen = function(message, min, max) {
    if (!this.pass || (!this.isRequire && !this._isRequire(this.data))) {
      return this;
    }
    let regex = new RegExp(`^[\\s\\S]{${min},${max}}$`);
    this.pass = regex.test(this.data);
    if (!this.pass) {
      this.message = message;
    }
    return this;
  };

  this.regex = function(message, type) {
    if (!this.pass || (!this.isRequire && !this._isRequire(this.data))) {
      return this;
    }
    let regex = regexs.find(reg => reg.type === type)["value"];
    this.pass = regex.test(this.data);
    if (!this.pass) {
      this.message = message;
    }
    return this;
  };

  this.check = function(message, callback) {
    if (!this.pass || (!this.isRequire && !this._isRequire(this.data))) {
      return this;
    }
    this.pass = callback.call(this, this.data, regexs);
    if (!this.pass) {
      this.message = message;
    }
    return this;
  };

  this._isRequire = function(string) {
    return typeof string === "string" && /^[\s\S]+$/.test(string);
  };
  this._isString = function(string) {
    return typeof string === "string";
  };
  this._isFunction = function(fn) {
    return typeof fn === "function";
  };
  this._isArray = function(array) {
    return Array.isArray(array);
  };
}

// test

// let check = new Check()
//   .set("12")
//   .maxLen("10wei", 10)
//   .set("黄军泉黄军泉")
//   .require("dhsdsjdhjs")
//   .regex("中文", "chinese")
//   .rangeLen("2-3", 2, 6)
//   .check("开头必须是黄", value => value.startsWith("黄"))
//   .set("黄军泉黄军泉")
//   .require("dhsdsjdhjs")
//   .regex("中文", "chinese")
//   .rangeLen("2-3", 2, 6)
//   .check("开头必须是黄", value => value.startsWith("黄"))
//   .set("51102519920316019x")
//   .regex("身份证格式错误", "id-card");

// console.log(check);
// console.log(check.pass, check.message);

import is from "./is";
import type from "./type";
import ios from "./ios";
import browser from "./browser";
import orientation from "./orientation";

const isNumber = is("number");
const isString = is("string");
const isFunction = is("function");
const isBoolean = is("boolean");
const isNull = is("null");
const isUndefined = is("undefined");
const isObject = is("object");
const isArray = is("array");
const isNil = is("null", "undefined");
const isRegexp = is("regexp");

export default {
  is,
  type,
  isNumber,
  isString,
  isFunction,
  isBoolean,
  isNull,
  isUndefined,
  isObject,
  isArray,
  isNil,
  isRegexp,

  ios,
  browser,
  orientation
};

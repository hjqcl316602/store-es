import browser from "./browser";
import clone from "./clone";
import copy from "./copy";
import equal from "./equal";
import extend from "./extend";
import ios from "./ios";
import is from "./is";
import orientation from "./orientation";
import type from "./type";

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
  browser,
  clone,
  copy,
  equal,
  extend,
  ios,
  is,
  orientation,
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
  isRegexp
};

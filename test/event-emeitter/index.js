/*
 * @Descripttion: 发布、订阅模式
 * @version: 1.0.0
 * @Author: huangjunquan
 * @Date: 2019-05-24 11:24:11
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-12 11:47:41
 */

export default function EventEmeitter() {
  this.events = new Map();
}
/**
 * @name: 监听名为type的事件
 * @msg:
 * @param {type}
 * @return: 当前实例
 */
EventEmeitter.prototype.addListener = function(type, fn) {
  if (typeof type !== "string" || !type) {
    throw new TypeError("参数1，必须是非空字符串！");
  }

  if (typeof fn !== "function") {
    throw new TypeError("参数2，必须是function类型！");
  }

  let handler = this.events.get(type);
  if (!handler) {
    this.events.set(type, fn);
  } else if (handler && typeof handler === "function") {
    this.events.set(type, [handler, fn]);
  } else {
    handler.push(fn);
  }
  return this;
};
/**
 * @name: 触发名为type的事件
 * @msg:
 * @param {type} [string]
 * @return: 当前实例
 */
EventEmeitter.prototype.emit = function(type, ...args) {
  if (typeof type !== "string" || !type) {
    throw new TypeError("参数1，必须是非空字符串！");
  }
  let handler = this.events.get(type);
  if (!handler) {
    throw new TypeError("还未绑定监听事件" + type + "！");
  }

  if (Array.isArray(handler)) {
    handler.forEach(handlerItem => {
      handlerItem.call(this, ...args);
    });
  } else if (typeof handler === "function") {
    handler.call(this, ...args);
  }
  return this;
};
/**
 * @name: 移除监听事件
 * @msg:
 * @param {type} 事件名
 * @return: 当前实例
 */
EventEmeitter.prototype.removeListener = function(type) {
  if (typeof type !== "string" || !type) {
    throw new TypeError("参数1，必须是非空字符串！");
  }
  this.events.delete(type);
};

// let evt = new  EventEmeitter()
// evt.addListener('click',function(...params){
//   console.log(params.length)
// })
// evt.addListener('click',function(...params){
//   console.log(params[1])
// })
// console.log(evt)
// evt.addListener('click',function(...params){

//   console.log(params)
// })
// .emit('click','name')

// evt.removeListener('click')
// console.log(evt)
//console.log(evt)

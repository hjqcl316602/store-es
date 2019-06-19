import format from "../date/format";
/*
 * @Descripttion: 本地存储
 * @version: 0.0.1
 * @Author: huangjunquan
 * @Date: 2019-06-12 11:17:47
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-12 17:45:24
 * @msg:暂时只能存储的数据类型 string boolean number null  object array  not function symbol undefined
 */
/**
 * @param :  { isLocal } [ boolean ] [ true,false ] 是否是本地存储
 */

export default function Storage(isLocal = true) {
  this.isLocal = typeof isLocal === "boolean" ? isLocal : true;
  this.storage = window[`${this.isLocal ? "local" : "session"}Storage`];
}
/**
 * @name:获取存储信息
 * @param : { key } [ string ] 关键字
 * @return: { any }
 */
Storage.prototype.getItem = function(key) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let store = this.storage.getItem(key);
        let storeFormat = store ? JSON.parse(store) : undefined;
        resolve(storeFormat && storeFormat["value"]);
      } catch (e) {
        reject(e);
      }
    }, 0);
  });
};

/**
 * @name: 存储信息
 * @param : { key }
 * @param : { value }
 * @return:
 */

Storage.prototype.setItem = function(key, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let result = {};
        result.time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
        result.path = window.location.href;
        result.type = Object.prototype.toString
          .call(value)
          .slice(8, -1)
          .toLowerCase();
        result.value = value;
        this.storage.setItem(key, JSON.stringify(result));
        resolve(value);
      } catch (e) {
        reject(e);
      }
    }, 0);
  });
};

/**
 * @name: 移除存储信息
 * @param : { key } [ string ]
 * @return:
 */

Storage.prototype.removeItem = function(key) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        this.storage.removeItem(key);
        resolve(key);
      } catch (e) {
        reject(e);
      }
    }, 0);
  });
};

/**
 * @name: 清除存储信息
 */

Storage.prototype.clear = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        this.storage.clear();
        resolve();
      } catch (e) {
        reject(e);
      }
    }, 0);
  });
};

// test
// let storage = new Storage(true);

// storage.setItem("message", null);

// storage
//   .getItem("message")
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {});

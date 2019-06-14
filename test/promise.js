const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class MyPromise {
  constructor(callback) {
    this.fulfilledQueues = [];
    this.rejectedQueues = [];
    try {
      callback(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {
      this._reject(error);
    }
  }
  _resolve(val) {
    setTimeout(() => {
      let cb;
      while ((cb = this.fulfilledQueues.shift())) {
        cb(val);
      }
    }, 0);
  }
  _reject(val) {
    setTimeout(() => {
      let cb;
      while ((cb = this.rejectedQueues.shift())) {
        cb(val);
      }
    }, 0);
  }
  then(onFulfilled, onRejected) {
    this.fulfilledQueues.push(onFulfilled);
    this.rejectedQueues.push(onRejected);
  }
  catch(onRejected) {
    this.then(undefined, onRejected);
  }
}

// let myPromise = new MyPromise(function(resovle, reject) {
//   console.log(resovle);
//   setTimeout(() => {
//     reject("fail");
//   }, 3000);
// })
//   .then(function(val) {
//     console.log(val);
//     return "sss";
//   })
//   .catch(err => {
//     console.log(err);
//   });

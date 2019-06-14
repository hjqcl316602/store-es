/**
 * @description 获取数据类型
 *
 * @param  {...any}
 *
 * @returns [function] => @returns [boolean]
 */

export default function is(...args) {
  return function(value) {
    let type = Object.prototype.toString
      .call(value)
      .slice(8, -1)
      .toLowerCase();
    return args.some(arg => arg === type);
  };
}

//console.log(is('null','undefined')())

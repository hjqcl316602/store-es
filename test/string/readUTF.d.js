/**
 * @description  中文转换
 *
 * @param {arr} arr  需要转换的数组
 */

export default function readUTF(arr) {
  if (typeof arr === "string") {
    return arr;
  }
  var UTF = "",
    _arr = arr;
  for (var i = 0; i < _arr.length; i++) {
    var one = _arr[i].toString(2),
      v = one.match(/^1+?(?=0)/);
    if (v && one.length == 8) {
      var bytesLength = v[0].length;
      var store = _arr[i].toString(2).slice(7 - bytesLength);
      for (var st = 1; st < bytesLength; st++) {
        store += _arr[st + i].toString(2).slice(2);
      }
      UTF += String.fromCharCode(parseInt(store, 2));
      i += bytesLength - 1;
    } else {
      UTF += String.fromCharCode(_arr[i]);
    }
  }
  return UTF;
}

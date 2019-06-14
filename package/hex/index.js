/**
 * 16进制转换
 *
 * 不支持中文
 */

export default function Hex(concat) {
  // 16进制转换连接符

  this.concat =
    String(concat) === concat && Boolean(concat.trim()) ? concat : ",";

  this.encode = function(str) {
    if (str === "") return "";
    var hexCharCode = [];
    hexCharCode.push("0x");
    for (var i = 0; i < str.length; i++) {
      hexCharCode.push(str.charCodeAt(i).toString(16));
    }
    return hexCharCode.join("");
  };
  /**
   * 16进制转换 - 不支持中文转换
   */

  this.decode = function(hexCharCodeStr) {
    var trimedStr = hexCharCodeStr.trim();
    var rawStr =
      trimedStr.substr(0, 2).toLowerCase() === "0x"
        ? trimedStr.substr(2)
        : trimedStr;
    var len = rawStr.length;
    if (len % 2 !== 0) {
      alert("Illegal Format ASCII Code!");
      return "";
    }
    var curCharCode;
    var resultStr = [];
    for (var i = 0; i < len; i = i + 2) {
      curCharCode = parseInt(rawStr.substr(i, 2), 16); // ASCII Code Value
      resultStr.push(String.fromCharCode(curCharCode));
    }
    return resultStr.join("");
  };

  this.encode_utf = function(str) {
    var val = "";
    for (var i = 0; i < str.length; i++) {
      if (val == "") val = str.charCodeAt(i).toString(16);
      else val += this.concat + str.charCodeAt(i).toString(16);
    }
    return val;
  };

  this.decode_utf = function(str) {
    var val = "";
    var arr = str.split(this.concat);
    for (var i = 0; i < arr.length; i++) {
      val += String.fromCharCode(parseInt(arr[i], 16));
    }
    return val;
  };

  this.decodeUTF = function(str) {
    var buf = [];
    for (var i = 0; i < str.length; i += 2) {
      console.log(str.substring(i, i + 2));
      buf.push(parseInt(str.substring(i, i + 2), 16));
    }
    console.log(buf);
    return this.readUTF(buf);
  };

  this.readUTF = function(arr) {
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
  };
}

// let hex = new Hex(',')

// let encode = hex.encode_utf('《》，。》？,.<>&*&*!2#$!@#$%^&*(){}[]dsds颠三倒四');
// console.log(encode)
// let decode = hex.decode_utf(encode)
// console.log(decode)
// let str = '7B2262616E6B5265616C4E616D65223A22E9BB84E5869BE6B389222C22616C69706179223A223133393830343634323337222C22616C69706179436F646555726C223A22687474703A2F2F74726164652E627374636861696E2E636F6D2F75706C6F61642F38623364346337632D663735662D343636372D393161362D3430373330366436636563642E6A7067222C22666565223A2231303030222C226D6F62696C65223A223135393238343039323834222C22776563686174223A22222C2271725765436F646555726C223A22222C22616C697061795265616C4E616D65223A22E9BB84E5869BE6B389222C22616C6970617955726C223A2268747470733A2F2F71722E616C697061792E636F6D2F666B78303132393966686772617A62343970796C306462222C22636172644E6F223A2236323231383836353130303435373338363734222C2262616E6B223A22E4B8ADE59BBDE982AEE694BFE582A8E89384E993B6E8A18C222C227375624D656D4964223A223130222C2277656368617455726C223A22222C226D656D4964223A2233227D'
// let decode_uuu = hex.decodeUTF(str)
// console.log(decode_uuu.length)

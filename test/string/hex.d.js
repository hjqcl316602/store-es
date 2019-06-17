import readUTF from "./readUTF.d";

/**
 * @description 16进制转字符串
 *
 * @param {str} 字符串
 */

export default function hex(str) {
  var buf = [];
  for (var i = 0; i < str.length; i += 2) {
    buf.push(parseInt(str.substring(i, i + 2), 16));
  }
  return readUTF(buf);
}

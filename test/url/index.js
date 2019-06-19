/**
 *
 * url 编码和解码
 *
 * @param {type} 类型
 */

export default class URL {
  constructor(type) {
    this.type = type;
  }
  encode(str) {
    switch (this.type) {
      case 1:
        return escape(str);
      case 2:
        return encodeURI(str);
      case 3:
        return encodeURIComponent(str);
      default:
        return str;
    }
  }
  decode(str) {
    switch (this.type) {
      case 1:
        return unescape(str);
      case 2:
        return decodeURI(str);
      case 3:
        return decodeURIComponent(str);
      default:
        return str;
    }
  }
}

/**
 * @description 字符串的空格去除
 *
 * @param {str} 字符串
 * @param {type} 类型
 *
 * { type : 1 , lebal :'所有空格' }
 * { type : 2 , lebal :'前后空格' }
 * { type : 3 , lebal :'前空格' }
 * { type : 4 , lebal :'后空格' }
 */

export default function trim(str, type) {
  if (String(str) !== str) return str;

  type = type || 1;
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
}

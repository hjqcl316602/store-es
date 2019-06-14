/**
 * @description 驼峰字符串转链接字符串
 *
 * @param {string} [string]
 *
 * @returns [string]
 */
export default function toLink(string) {
  if (String(string) !== string) return string;
  if (!/^[A-z]+$/.test(string)) return string;
  return string.replace(/([A-Z])/g, function(a, b, c) {
    return "-" + b.toLowerCase();
  });
}

//console.log(toLink('backGroundColor'))

/**
 * @description 验证是否是数组
 *
 * @param { array }  [array] 数组
 *
 * @return [Boolean]
 */

export default function isArray(array) {
  return (
    Object.prototype.toString
      .call(array)
      .slice(8, -1)
      .toLowerCase() === "array"
  );
}

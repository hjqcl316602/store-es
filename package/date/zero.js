/**
 * 补0
 * @param {value} [number] 需要补0的数
 */

export default function setZero(value) {
  let isChecked = Boolean(Number(value) === value && value > 0);
  if (!isChecked) return value;
  return value < 10 ? "0" + value : +value;
}

/**
 * @name 补0
 * @param {value} [number] 需要补0的数
 * @return [ string ]
 */

export default function setZero(value) {
  let isChecked = Boolean(Number(value) === value && value > 0);
  if (!isChecked) return value;
  return value < 10 ? "0" + value : +value;
}

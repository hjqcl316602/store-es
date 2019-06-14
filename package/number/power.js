export default function power(a, v) {
  for (var n = 0; n < 10; n++) {
    var num = Math.pow(a, n);
    if (num == v) {
      return n;
    }
  }
  return -1;
}
power(2, 512);

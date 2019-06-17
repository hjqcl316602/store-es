/**
 * @name  数组乱序
 * @msg 使用fisher-tayes算法，目前最好的乱序方式，使得每个元素参数的概率一致
 * @param  { array }  [ array ] 数组
 * @return [ array ]
 */

export default function shuffle(array) {
  if (!Array.isArray(array)) {
    console.error("[array] is not array");
    return array;
  }
  var m = array.length;
  while (m > 1) {
    let index = Math.floor(Math.random() * m--);
    [array[m], array[index]] = [array[index], array[m]];
  }
  return array;
}

//console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/**
 * @name: 判断数组最深的维度
 * @param: {array} [ array ] 数组
 * @returns [number]
 */

let deep = 0;

export default function deepth(array) {
  for (let n = 0; n < array.length; n++) {
    if (Array.isArray(array[n])) {
      deep++;
    }
  }
  console.log(deep);

  // for( let n = 0 ; n < array.length;n++){
  //    if( Array.isArray( array[n])){
  //    }
  // }
  // let deep = 0;
  // if (Array.isArray(array)) {
  //   deep = 1;
  //   (function deepthArr(arr) {
  //     for (let n = 0; n < arr.length; n++) {
  //       if (Array.isArray(arr[n])) {
  //         deep++;
  //         deepthArr(arr[n]);
  //       }
  //     }
  //   })(array);
  // }
  // return deep;
}

console.log(deepth([0, [1]])); // 1

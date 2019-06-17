let values = [
  // temp | String() | toString()
  true, // 'true'
  [1], // '1'
  false, // 'false'
  [], // ''
  [0], // '0'
  null, // 'null'
  undefined, // 'undefined'
  { name: "" }, // '[object Object]'
  function() {}, // function () { }
  [10, 10] // '10,10'
];

// for (let n = 0; n < values.length; n++) {
//   let temp = values[n];
//   console.log(temp, String(temp), temp + "");
// }

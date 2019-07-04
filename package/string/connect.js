/**
 * @name 每隔几位添加指定的连接符-从末尾计数
 * @param { string } [ string ]
 * @param { connect = '-' } [ string ] 连接符
 * @param { len = 4 } [ number ]  每隔多少位
 * @return [ string ]
 * @example connect("13980464237"," ",4) => 139 8046 4237
 * @msg  exp1(?=exp2) 查找exp2前面的exp1 || (?<=exp2)exp1 查找exp2后面的exp1 || exp1(?!exp2) 查找后面不是exp2的exp1 ||  (?<!=exp2)exp1 查找前面不是exp2的exp1
 */

export default function connect(string, connect = "-", len = 4) {
  if (typeof string !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof connect !== "string") {
    throw new Error("The second argument must be string.");
  }
  if (!Number.isInteger(len) || len < 1) {
    throw new Error("The third argument must be int number and it must not less then 1");
  }

  let regexp = new RegExp(`([\\s\\S])(?=([\\S\\s]{${len}})+$)`, "g");
  return string.replace(regexp, function (a, b, c) {
    return a + connect;
  });
}

/**
 * @name 每隔几位添加指定的连接符-从开始计数
 * @param { string } [ string ]
 * @param { connect = '-' } [ string ] 连接符
 * @param { len = 4 } [ number ]  每隔多少位
 * @return [ string ]
 * @example connect("13980464237"," ",4) => 1398 0464 237 
 */

connect.start = function (string, connect = "-", len = 4) {
  if (typeof string !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof connect !== "string") {
    throw new Error("The second argument must be string.");
  }
  if (!Number.isInteger(len) || len < 1) {
    throw new Error("The third argument must be int number and it must not less then 1");
  }

  let regexp = new RegExp(`(?<=^([\\S\\s]{${len}})+)([\\s\\S])`, "g");
  //console.log(regexp);
  return string.replace(regexp, function (a, b, c) {
    return connect + a;
  });
};

// let regex = /(?<=^([0-9]{4})+)([0-9])/g; ///([0-9])(?=([0-9]{4})+$)/g;
// let string = "11112222333311";
// let newString = string.replace(regex, function(a, b, c, d, e) {
//   console.log(a, b, c, d, e);
//   return "-" + a;
// });
// console.log(newString);

// console.log(
//   connect(
//     "6221886510045738674",
//     " ",
//     4
//   )
// );

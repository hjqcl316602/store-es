/**
 * @name 每隔几位添加指定的连接符
 * @param { string } [ string ]
 * @param { connect } [ string ] 连接符
 * @param { len } [ number ]  每隔多少位
 * @return [ string ]
 * @example connect("13980464237"," ",4) => 139 8046 4237
 */
export default function connect(string, connect, len, start = true) {
  if (typeof string !== "string") {
    console.error("[string] is not string");
    return string;
  }
  if (typeof connect !== "string") {
    console.error("[connect] is not string");
    connect = "-";
  }
  if (typeof len !== "number" || len < 1) {
    console.error("[len] is not number or less then 1");
    len = 4;
  }
  let regexp = new RegExp(`([\\s\\S])(?=([\\S\\s]{${len}})+$)`, "g");
  return string.replace(regexp, "$1" + connect);
}

// console.log(
//   connect(
//     "013980464237",
//     "*"
//   )
// );

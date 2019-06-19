/**
 * @name 每隔几位添加指定的连接符
 * @param { string } [ string ]
 * @param { connect } [ string ] 连接符
 * @param { len } [ number ]  每隔多少位
 * @param { start } [ boolean ] 是否是重开头计算
 * @return [ string ]
 * @example connect("13980464237"," ",4) => 139 8046 4237
 */

import reverse from "./reverse";
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

  if (typeof start !== "boolean") {
    console.error("[start] is not boolean");
    start = true;
  }
  let regexp = new RegExp(`([\\s\\S])(?=([\\S\\s]{${len}})+$)`, "g");
  if (start) {
    return reverse(reverse(string).replace(regexp, "$1" + connect));
  } else {
    return string.replace(regexp, "$1" + connect);
  }
}

console.log(
  connect(
    "13980464237",
    " ",
    4
  )
);

console.log(
  connect(
    "6221886510045738674",
    " ",
    4
  )
);

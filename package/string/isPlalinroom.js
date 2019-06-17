/**
 * @name: 判断一个字符串是否是回文字符串
 * @param : { string } [ string ]
 * @returns [ boolean ]
 */

export default function plalinroom(string) {
  if (typeof string !== "string" || string.length < 2) {
    console.error("[string] is not string  or its length less than 2 ");
    return false;
  }
  return (
    string
      .split("")
      .reverse()
      .join("") === string
  );
}

//console.log(plalinroom(false));

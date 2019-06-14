/**
 * @name: 判断一个字符串是否是回文字符串
 * @param : { string } [ string ]
 * @returns [ boolean ]
 */

export default function plalinroom(string) {
  if (typeof string !== "string" || string.length < 2) {
    throw new Error(
      "string  must be type of string ,and its length must be greater than 2 "
    );
  }
  return (
    string
      .split("")
      .reverse()
      .join("") === string
  );
}

//console.log(plalinroom("hjf"));

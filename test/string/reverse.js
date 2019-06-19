/**
 * @name: 字符串反向
 * @param { string  } string
 * @return: [string]
 */

export default function reverse(string) {
  if (typeof string !== "string") {
    console.error("[string] is not string");
    return string;
  }
  return string
    .split("")
    .reverse()
    .join("");
}

//console.log(reverse("hhuang"));

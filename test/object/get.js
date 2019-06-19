import path from "../string/path";

/**
 * @description 按指定的路径获取对象
 *
 * @param { object } [ any ]
 * @param { urls } [ array,string]
 * @param { defaults } [ any ]
 *
 * @returns [any]
 */

export default function get(object, urls = [], defaults) {
  if (String(urls) === urls) {
    urls = path(urls);
  }

  if (!Array.isArray(urls)) return object;

  try {
    let result = object;

    for (let n = 0; n < urls.length; n++) {
      if (result.hasOwnProperty(urls[n])) {
        result = result[urls[n]];
      } else {
        return defaults;
      }
    }

    return result;
  } catch (e) {
    return object;
  }
}

// let o = {
//   n: {
//     ss: {
//       name: 'ss'
//     },
//     sss: {
//       name: 'sss'
//     },
//   }
// }

// console.log(get(o, 'n.ss.sss', { name: 'def' }))

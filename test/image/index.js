import format from "../date/format";

/*
 * @Descripttion: 图片处理
 * @version: 1.0.0
 * @Author: huangjunquan
 * @Date: 2019-05-24 16:01:02
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-12 17:59:03
 */

export default function Image$() {}

/**
 * @name: 获取本地文件资源的详细信息
 * @param: { file } [ file ]
 * @return: { object }
 */

Image$.prototype.getFileMessage = function(file) {
  let lastUpdateDate = format(file.lastModified, "yyyy-MM-dd HH:mm:ss");
  let transformSize = this.transformSize(file.size);
  let types = file.type.split("/");
  let name = file.name;
  let nameSlotIndex = file.name.lastIndexOf(".");
  return {
    type: types[0],
    subType: types[1],
    fileType: name.substring(nameSlotIndex + 1),
    byte: file.size,
    name: name.substring(0, nameSlotIndex),
    lastUpdateDate: lastUpdateDate,
    size: transformSize["value"],
    sizeUnit: transformSize["unit"]
  };
};

/**
 * @name : 获取本地资源文件的二进制流
 * @param : { file } [ file ]
 * @return : [ promise ] => [ string ]
 * @descripttion : 可以获取图片的二进制流直接用于页面显示
 */

Image$.prototype.getFileBlob = function(file) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let url;
      try {
        if (window.createObjectURL != undefined) {
          // basic
          url = window.createObjectURL(file);
        } else if (window.URL != undefined) {
          // mozilla(firefox)
          url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) {
          // webkit or chrome
          url = window.webkitURL.createObjectURL(file);
        }
        resolve(url);
      } catch (e) {
        reject({ message: "未能获取本地文件的二进制流数据" });
      }
    }, 0);
  });
};

/**
 * @name: 获取本地资源文件的base64数据
 * @param: { file } [ file ]
 * @return: [ promise ] => [ string ]
 */

Image$.prototype.getFileBase64 = function(file) {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      try {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
          resole(reader.result);
        };
        reader.onerror = function() {
          reject({ message: "未能获取本地资源文件的base64数据" });
        };
      } catch (e) {
        reject({ message: "未能获取本地资源文件的base64数据" });
      }
    }, 0);
  });
};

/**
 * @name: 获取based64文件的类型
 * @param : { base64 } [ string ]
 * @return: { string }
 */

Image$.prototype.getBase64Type = function(base64) {
  let type = "";
  base64.replace(/\:(.*?)\;/, function(a, b, c) {
    type = b;
  });
  return type;
};

/**
 * @name: 获取base64格式的图片的体积
 * @msg : 必须是base64格式图片地址
 * @return: [ number ] 字节大小
 */

Image$.prototype.getBase64Size = function(base64) {
  let index1 = base64.indexOf(",");
  let index2 = base64.indexOf("=");
  let base = base64.slice(index1 + 1, index2 > -1 ? index2 : base64.length);
  let strLength = base.length;
  let fileLength = parseInt(strLength - (strLength / 8) * 2);
  return fileLength;
};

/**
 * @name: 获取图片资源的体积
 * @msg : 该方式不能获取源图片的体积，得到的是转换成 blob 格式之后的体积，由于jpg、gif 等格式的图片转换成png格式体积会变化
 * @param : { src } [ string ] 图片地址
 * @param : { type } [ string ]
 * @return: [ promise ] => [ number ]
 */

Image$.prototype.getBlobSize = function(src, type = "image/png") {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image["crossOrigin"] = "Anonymous";
      image.onload = () => {
        try {
          let canvas = document.createElement("canvas");
          canvas.height = image.height;
          canvas.width = image.width;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          canvas.toBlob(
            function(blob) {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              resolve(blob["size"]);
            },
            type,
            1
          );
        } catch (e) {
          reject({ message: "图片压缩失败" });
        }
      };
      image.onerror = () => {
        reject({ message: "图片资源不存在" });
      };
    }, 0);
  });
};
/**
 * @name: 获取图片资源的类型
 * @msg : 通过再次请求该图片，获取该请求下的一些信息
 * @param { src } [ string ] 图片路径
 * @return: [ promise ]
 */
Image$.prototype.getType = function(src) {
  return new Promise((resolve, reject) => {
    let xmlhttp;
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      xmlhttp = new window.ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp != null) {
      xmlhttp.open("GET", src, true);
      xmlhttp.onloadend = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          //console.log(xmlhttp.getResponseHeader('Content-type'))
          resolve(xmlhttp.getResponseHeader("Content-type"));
          //xmlhttp.getAllResponseHeaders()
        } else {
          reject({ message: "获取图片类型失败！" });
        }
      };
      try {
        xmlhttp.send(null);
      } catch (e) {
        reject({ message: "图片请求失败！" });
      }
    } else {
      reject({ message: "浏览器不支持！" });
    }
  });
};

/**
 * @name: 获取资源的体积
 * @msg :  该方式能正确的获取资源的体积
 * @param : { src } [ string ] 图片路径
 * @return : [ promise ]
 */
Image$.prototype.getSize = function(src) {
  return new Promise((resolve, reject) => {
    let xmlhttp;
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      xmlhttp = new window.ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp != null) {
      xmlhttp.open("GET", src, true);
      let size = 0;
      xmlhttp.onloadend = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          //console.log(xmlhttp.getResponseHeader('Content-type'))
          resolve(size);
          //xmlhttp.getAllResponseHeaders()
        } else {
          reject({ message: "获取图片类型失败！" });
        }
      };
      xmlhttp.onprogress = function(e) {
        //console.log(e)
        size = e.total;
      };
      try {
        xmlhttp.send(null);
      } catch (e) {
        reject({ message: "图片请求失败！" });
      }
    } else {
      reject({ message: "浏览器不支持！" });
    }
  });
};

/**
 * @name: 尺寸格式化
 * @param :{ size } [ number ]
 * @return: [ object ]
 */
Image$.prototype.transformSize = function(size) {
  let storage = [
    { unit: "B", scaler: 1 },
    { unit: "KB", scaler: 1024 },
    { unit: "MB", scaler: 1024 * 1024 },
    { unit: "GB", scaler: 1024 * 1024 * 1024 },
    { unit: "TB", scaler: 1024 * 1024 * 1024 * 1024 }
  ];
  let res = {
    value: 0,
    unit: ""
  };
  for (let n = storage.length - 1; n > -1; n--) {
    let value = Math.round(size / storage[n]["scaler"]);
    if (value > 0) {
      res.value = value;
      res.unit = storage[n]["unit"];
      return res;
    }
  }
  return res;
};

/**
 * @name: 获取图片的高宽
 * @param : { src } [ string ] 图片地址 [ 访问路径式，based4式，二进制式]
 * @return: [ object ]
 */
Image$.prototype.getAspect = function(src) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image.onload = () => {
        resolve({
          width: image.width,
          height: image.height
        });
      };
      image.onerror = () => {
        reject({ message: "图片资源不存在！" });
      };
    }, 0);
  });
};

/**
 * @name: 图片转base64格式
 * @param : { src } [ string ]
 * @param : { type } [ string ]
 * @return: { string }
 * @msg: JPG转PNG文件大小通常会增加5倍以上，这是因为JPG是有损压缩，而PNG是无损压缩。
 * JPG转为PNG图片的质量不会有变化，但大小会增加很多；而PNG转JPG，会损失掉透明的部分（因为JPG不支持图片的透明），但文件大小会减少很多，根据不同的压缩比，可以达到10倍的压缩比
 */

Image$.prototype.transformBase64 = function(src, type = "image/png") {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image["crossOrigin"] = "Anonymous";
      //image.setAttribute("crossOrigin",'Anonymous') // Tainted canvases may not be exported. 跨域问题
      image.onload = () => {
        try {
          let canvas = document.createElement("canvas");
          canvas.width = image.width;
          canvas.height = image.height;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          let dataurl = canvas.toDataURL(type, 1);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          resolve(dataurl);
        } catch (e) {
          reject({ message: "图片压缩失败！" });
        }
      };
      image.onerror = () => {
        reject({ message: "图片资源不存在！" });
      };
    }, 0);
  });
};

/**
 * @name: 图片转blob格式
 * @param { src }
 * @return: { string }
 * @msg : 除png之外的图片尺寸都会变化
 */
Image$.prototype.transformBlob = function(src, type = "image/png") {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image["crossOrigin"] = "Anonymous";
      image.onload = () => {
        try {
          let canvas = document.createElement("canvas");
          //document.body.appendChild(canvas)
          canvas.width = image.width;
          canvas.height = image.height;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          canvas.toBlob(
            function(blob) {
              resolve(blob);
            },
            type,
            1
          );
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        } catch (e) {
          reject({ message: "图片压缩失败！" });
        }
      };
      image.onerror = () => {
        reject({ message: "图片资源不存在！" });
      };
    }, 0);
  });
};

/**
 * @name: 图片压缩  - 按质量
 * @param { quality } [number] 压缩后的质量
 * @param { type } [type] 文件的类型，最好是先知道文件的类型，相同类型之间的压缩会更准确
 * @return: [ string ] base64
 */
Image$.prototype.getCompressQuality = function(
  src,
  quality = 0.7,
  type = "image/png"
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image["crossOrigin"] = "Anonymous";
      //image.setAttribute("crossOrigin",'Anonymous') // Tainted canvases may not be exported. 跨域问题
      image.onload = () => {
        try {
          let canvas = document.createElement("canvas");
          //document.body.appendChild(canvas)
          canvas.width = image.width;
          canvas.height = image.height;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          let dataurl = canvas.toDataURL(type, quality);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          resolve(dataurl);
        } catch (e) {
          reject({ message: "图片压缩失败！" });
        }
      };
      image.onerror = () => {
        reject({ message: "图片资源不存在！" });
      };
    }, 0);
  });
};

/**
 * @name: 图片压缩  - 指定宽
 * @return: [ string ] base64
 */
Image$.prototype.getCompressWidth = function(src, width, type = "image/png") {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image["crossOrigin"] = "Anonymous";
      image.onload = () => {
        try {
          let canvas = document.createElement("canvas");
          canvas.width = width || image.width;
          canvas.height = (image.height / image.width) * canvas.width;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          let dataurl = canvas.toDataURL(type, 1);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          resolve(dataurl);
        } catch (e) {
          reject({ message: "图片压缩失败！" });
        }
      };
      image.onerror = () => {
        reject({ message: "图片资源不存在！" });
      };
    }, 0);
  });
};

/**
 * @name: 图片压缩  - 指定高度
 * @return: [ string ] base64
 */
Image$.prototype.getCompressHeight = function(src, height, type = "image/png") {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image["crossOrigin"] = "Anonymous";
      image.onload = () => {
        try {
          let canvas = document.createElement("canvas");
          canvas.height = height || image.height;
          canvas.width = (image.width / image.height) * canvas.height;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          let dataurl = canvas.toDataURL(type, 1);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          resolve(dataurl);
        } catch (e) {
          reject({ message: "图片压缩失败！" });
        }
      };
      image.onerror = () => {
        reject({ message: "图片资源不存在！" });
      };
    }, 0);
  });
};

/**
 * @name: 图片压缩  - 指定高和宽
 * @return: [ string ] base64
 * @msg: 图片会被挤压
 */
Image$.prototype.getCompressAspect = function(
  src,
  width,
  height,
  type = "image/png"
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image["crossOrigin"] = "Anonymous";
      image.onload = () => {
        try {
          let canvas = document.createElement("canvas");
          canvas.height = height || image.height;
          canvas.width = width || image.width;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          let dataurl = canvas.toDataURL(type, 1);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          resolve(dataurl);
        } catch (e) {
          reject({ message: "图片压缩失败！" });
        }
      };
      image.onerror = () => {
        reject({ message: "图片资源不存在！" });
      };
    }, 0);
  });
};

/**
 * @name: 图片压缩  - 指定比率
 * @return: [ string ] base64
 */
Image$.prototype.getCompressRatio = function(
  src,
  ratio = 1.0,
  type = "image/png"
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image["crossOrigin"] = "Anonymous";
      image.onload = () => {
        try {
          let canvas = document.createElement("canvas");
          canvas.height = image.height * ratio;
          canvas.width = image.width * ratio;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          let dataurl = canvas.toDataURL(type, 1);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          resolve(dataurl);
        } catch (e) {
          reject({ message: "图片压缩失败！" });
        }
      };
      image.onerror = () => {
        reject({ message: "图片资源不存在！" });
      };
    }, 0);
  });
};

/**
 * @name: 图片压缩  - 指定体积的图片
 * @msg  Base64编码要求把3个8位字节（3 * 8=24）转化为4个6位的字节（4 * 6=24），之后在6位的前面补两个0，形成8位一个字节的形式。 如果剩下的字符不足3个字节，则用0填充，输出字符使用’=’，因此编码后输出的文本末尾可能会出现1或2个’=’
 * @param { size } [ number ] | 200 * 1024 压缩到指定的大小 需要精确到 Bytes
 * @param { range } [number ] | 10 * 1024 容错范围即可 需要精确到 Bytes
 * @return: [ string ] base64
 */
Image$.prototype.getCompressSize = function(
  src,
  size = 200 * 1024,
  range = 100,
  type = "image/png"
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image["crossOrigin"] = "Anonymous";
      image.onload = () => {
        try {
          let start = 0,
            end = 1,
            mid = 1,
            count = 0;
          let resSize = 0;
          let res;
          do {
            count++;
            if (count !== 1) {
              mid = (start + end) / 2;
            }
            let canvas = document.createElement("canvas");
            canvas.width = image.width * mid;
            canvas.height = image.height * mid;
            let ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            res = canvas.toDataURL(type, 1);
            resSize = this.getBase64Size(res);
            if (count === 1 && resSize < size) {
              break;
            } else {
              if (Math.abs(resSize - size) <= range) {
                break;
              } else if (resSize - size > range) {
                end = mid - 0.0000000001;
              } else if (size - resSize > range) {
                start = mid + 0.0000000001;
              }
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          } while (start < end);
          resolve(res);
        } catch (e) {
          reject({ message: "图片压缩失败！" });
        }
      };
      image.onerror = () => {
        reject({ message: "图片资源不存在！" });
      };
    }, 0);
  });
};

// let file = e.target.files[0];
// let image = new Image$();
// image.getFileBlob(file).then(res => {
//   this.img = res;
//   image.getCompressSize(this.img, 7000, 10).then(com => {
//     this.img = com;
//     image.transformBlob(this.img).then(blob => {
//       console.log(blob);
//     });
//   });
// });

// 获取图片资源的类型和体积
// let image = new Image$();
// let src = "http://img2.imgtn.bdimg.com/it/u=298887015,2313380003&fm=26&gp=0.jpg";
// image.getSize(src).then(res=>{
//   console.log(image.transformSize(res))
// })
// image.getType(src).then(res=>{
//   console.log(res)
// })

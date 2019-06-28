/**
 * @name  获取图片的高宽
 * @param  { src } [ string ] 图片地址 [ 访问路径式，based4式，二进制式]
 * @return  [ promise ] => [ number ]
 * @example sizer("http://img5.imgtn.bdimg.com/it/u=1128579105,2742690848&fm=26&gp=0.jpg").then(res => console.log(res));
 */
let sizer = function(src) {
  if (typeof src !== "string") {
    throw new Error("The argument must be string.");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image.onload = () => {
        resolve({ width: image.width, height: image.height });
      };
      image.onerror = e => {
        reject(e);
      };
    }, 0);
  });
};

/**
 * @name  获取图片的宽度
 * @param  { src } [ string ] 图片地址 [ 访问路径式，based4式，二进制式]
 * @return  [ promise ] => [ number ]
 * @example sizer.widther("http://img5.imgtn.bdimg.com/it/u=1128579105,2742690848&fm=26&gp=0.jpg").then(res => console.log(res));
 */
sizer.widther = function(src) {
  if (typeof src !== "string") {
    throw new Error("The argument must be string.");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image.onload = () => {
        resolve(image.width);
      };
      image.onerror = e => {
        reject(e);
      };
    }, 0);
  });
};

/**
 * @name  获取图片的高度
 * @param  { src } [ string ] 图片地址 [ 访问路径式，based4式，二进制式]
 * @return  [ promise ] => [ number ]
 * @example sizer.heighter("http://img5.imgtn.bdimg.com/it/u=1128579105,2742690848&fm=26&gp=0.jpg").then(res => console.log(res));
 */
sizer.heighter = function(src) {
  if (typeof src !== "string") {
    throw new Error("The argument must be string.");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image.onload = () => {
        resolve(image.height);
      };
      image.onerror = e => {
        reject(e);
      };
    }, 0);
  });
};
/**
 * @name 获取资源的体积
 * @msg  该方式能正确的获取资源的体积
 * @param  { src } [ string ] 图片路径
 * @return  [ promise ]
 * @example sizer.volumer("http://img5.imgtn.bdimg.com/it/u=1128579105,2742690848&fm=26&gp=0.jpg").then(res => console.log(res));
 */
sizer.volumer = function(src) {
  if (typeof src !== "string") {
    throw new Error("The argument must be string.");
  }
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
          reject({ message: "The picture request is failded." });
        }
      };
      xmlhttp.onprogress = function(e) {
        //console.log(e)
        size = e.total;
      };
      try {
        xmlhttp.send(null);
      } catch (e) {
        reject({ message: "The http request is aborted." });
      }
    } else {
      reject({ message: "The browser is not support xmlhttp." });
    }
  });
};
export default sizer;
//sizer("http://img5.imgtn.bdimg.com/it/u=1128579105,2742690848&fm=26&gp=0.jpg").then(res => console.log(res));

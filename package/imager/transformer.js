let transformer = {};
/**
 * @name 图片转base64格式
 * @param { src } [ string ]
 * @params { type = image/png} [string ]
 * @return [ promise ] => [ string<base64>]
 * @example transformer.baser("http://img5.imgtn.bdimg.com/it/u=1128579105,2742690848&fm=26&gp=0.jpg").then(res => console.log(res));
 */

transformer.baser = function(src, type = "image/png") {
  if (typeof src !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof type !== "string") {
    throw new Error("The second argument must be string.");
  }
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
          reject(e);
        }
      };
      image.onerror = e => {
        reject(e);
      };
    }, 0);
  });
};

/**
 * @name  图片转blob格式
 * @param { src } [ string ]
 * @param { type = image/png } [ string ]
 * @return  [ promise] => [ string<blob> ]
 * @msg   除png之外的图片尺寸都会变化
 * @example transformer.blober("http://img5.imgtn.bdimg.com/it/u=1128579105,2742690848&fm=26&gp=0.jpg").then(res => console.log(res));
 */
transformer.blober = function(src, type = "image/png") {
  if (typeof src !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof type !== "string") {
    throw new Error("The second argument must be string.");
  }
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
          reject({ message: "Fail to loaded the picture." });
        }
      };
      image.onerror = () => {
        reject({ message: "Fail to loaded the picture." });
      };
    }, 0);
  });
};

export default transformer;
//transformer.baser("http://img5.imgtn.bdimg.com/it/u=1128579105,2742690848&fm=26&gp=0.jpg").then(res => console.log(res)); //image/jpeg
//transformer.blober("http://img5.imgtn.bdimg.com/it/u=1128579105,2742690848&fm=26&gp=0.jpg").then(res => console.log(res)); //image/jpeg

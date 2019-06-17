# store-js-es

## 对象式

### string

- 方法
  - contains(string[string],target[string]) => [ array ] || 获取一个字符串包含指定的字符串的所有角标
  - containsWith(string[string],regexp[regexp]) => [ array ] || 返字符串中匹配正则表达式的值
  - convert(string[string],type[number[1,2,3,4]]) => [ string] || 字符串的转换
  - hump(string[string]) => [ string ] || 驼峰字符串转链接字符串
  - isCenter(string[string],target[string]) => [ boolean ] || 验证一个字符串是否存在某字符串的中部
  - isContain(string[string], target[string]) => [ boolean ] || 获取一个字符串包含指定的字符串
  - isContinue(string[string]) => [ string ] || 验证字符串是否是连续的
  - isEnd(string[string], target[string]) => [ boolean ] || 验证一个字符串是否是以指定的值结尾
  - plalinroom(string[string]) => [ boolean ] || 判断一个字符串是否是回文字符串
  - isRepeat(string[string]) => [ boolean ] || 验证是否是重复的字组成的字符串
  - isRequire(string[string]) => [ boolean ] || 验证字符串是否是有值
  - isSpace(string[string]) => [ boolean ] || 判断一个字符串中是否存在空白
  - isStart(string[string], target[string]) => [ boolean ] || 验证一个字符串是否是以指定的值开头
  - link(string[string]) => [ string ] || 驼峰字符串转链接字符串
  - match(string[string], regexp[string]) => [ array ] || 按指定的正则表达式提取字符串中满足条件的值
  - path(string[string]) => [ array ] || 将字符串转成合法的对象的键
  - random(n[number]) => [ string ] || 生成随机字符串
  - randomColor(isOpacity[ boolean ]) => [ string ] || 随机生成颜色字符串
  - shousand(string[string,number]) => [ string ] || 字符串转千分位
  - transfer(string[string]) => [ string ] || 字符串的转义
  - trim(string[string], type[number]) => [ string ] || 字符串的空格去除

## 类式（需要实例化）

### Calc

- 描述

  - 解决 js 中 0.1 + 0.2 != 0.3
  - 解决大数相乘的问题，js 的数字存在安全数范围，
  - 超过安全数范围的计算会出现不正确的运算，判断安全数，是小数点移除之后判断，即 12.345 => 12345

- 方法

  - add( prev[number|string],next[number|string]) => ( string ) || 加法运算
  - minus( prev[number|string],next[number|string]) => ( string ) || 减法运算
  - mul( prev[number|string],next[number|string]) => ( string ) || 乘法运算
  - div( prev[number|string],next[number|string]) => ( string ) || 除法运算
  - bigIntAdd(prev[number|string],next[number|string]) => ( string ) || 大数的加法
  - bigIntMul(prev[number|string],next[number|string]) => ( string )|| 大数的乘法

### Image\$

- 方法

  - getFileMessage( file[file] ) => ( object ) || 获取本地文件资源的详细信息
  - getFileBlob(file[file]) => ( promise) => ( string ) || 获取本地资源文件的二进制流
  - getFileBase64(file[file]) => ( promise ) => ( string ) || 获取本地资源文件的 base64 格式文件
  - getBase64Type(base64[string]) => ( string ) || 获取 based64 文件的类型
  - getBase64Size(base64[string]) => ( number ) || 获取 based64 文件的体积 （字节大小）
  - getBlobSize(src[string],[type[string]='image/png']) => ( promise) => ( number ) || 获取图片资源的体积（该体积不是源文件的体积）
  - getType(src[string]) => ( promise ) => ( string ) || 获取资源（图片）的类型
  - getSize(src[string]) => ( promise ) => ( number ) || 获取资源（图片）的体积
  - transformSize(size[number]) => ( object ) || 文件尺寸的转化
  - getAspect(src[string]) => ( promise ) = ( object ) || 获取资源的高宽
  - transformBase64(src[string],[ type[string] = 'image/png'] ) => ( promise ) => ( string )
  - transformBlob( src[string] ,[ type[string] = "image/png"]) => ( promise ) => ( blob ) || 将图片的格式转换为 blob 格式
  - getCompressQuality( src[string] ,[ quality[number] = 0.7 ,type[string] = "image/png" ])=> ( promise ) => ( string[base64]) || 按指定质量压缩图片
  - getCompressWidth( src[string] ,width[number],[ type[string] = "image/png" ]) => ( promise ) => ( string[base64]) || 按指定宽度压缩图片
  - getCompressHeight( src[string] , height[number],[ type[string] = "image/png" ]) => ( promise ) => ( string[base64]) || 按指定高度压缩图片
  - getCompressAspect( src[string],width[number], height[number], [ type[string] = "image/png" ]) => ( promise ) => ( string[base64]) || 按指定高宽压缩图片
  - getCompressRatio( src[string],[ ratio[number] = 1 ,type [string]= "image/png"]) => ( promise ) => ( string[base64]) || 按指定体积压缩图片
  - getCompressSize(src[string], [size[number] = 200 \* 1024, range[number] = 100, type[string] = "image/png"]) => ( promise ) => ( string[base64]) || 按指定体积压缩图片

### Storage([local=true])

参数[ local ]是否是本地存储信息
只能存储 除 undefined function symbol 类型之外的数据

- 方法

  - setItem(key[string],value[any]) => ( promise ) => ( any ) || 存储信息
  - getItem(key[string]) => ( promise ) => ( any ) || 获取存储信息
  - removeItem(key[string]) => ( promise ) => ( null ) || 移除指定的信息
  - clear() => ( promise ) => ( null ) || 全部清除

### Query

- 缺点

  - 互转之后，数字和布尔均会变成字符串

- 方法

  - encode( string[string]) => ( string ) || 字符串编码
  - decode( string[string]) => ( string ) || 字符串解码
  - stringify(obj[object]) => ( string ) || 对象转字符串
  - parse(query[string]) => ( oject ) || 字符串转对象

### Check

- 优点

  - 链式调用，每个方法均返回当前实例
  - 一个数据验证失败则后续的数据不进行验证

- 方法

  - set(data[string]) => ( object ) || 绑定当前验证的数据
  - require(message[string]) || 当前验证的数据是必填项，(message)错误提示信息
  - len(message[string],len[number]) || 验证当前数据的长度是否是指定的长度
  - rangeLen(message[string],min[number],max[number]) || 验证当前数据的长度是否是指定的长度范围
  - minLen(message[string],min[number]) || 验证当前数据的长度是否是不少于指定长度
  - maxLen(message[string],max[number]) || 验证当前数据的长度是否是不超过指定长度
  - regex(message[string],type[string]) || 按指定的正则表达式验证数据
  - check(message[string],callback[function]) || 以自定义回调函数验证数据

- 使用

```js
let check = new Check()
  .set("12")
  .maxLen("10wei", 10)
  .set("黄军泉黄军泉")
  .require("dhsdsjdhjs")
  .regex("中文", "chinese")
  .rangeLen("2-3", 2, 6)
  .check("开头必须是黄", value => value.startsWith("黄"))
  .set("黄军泉黄军泉")
  .require("dhsdsjdhjs")
  .regex("中文", "chinese")
  .rangeLen("2-3", 2, 6)
  .check("开头必须是黄", value => value.startsWith("黄"));

console.log(check);
console.log(check.pass, check.message);
```

## 其他

### regex

```js
export default [
  {
    type: "special",
    rules: ["含特殊字符组成的非空字符串"],
    text: "是否含特殊字符",
    success: ["!@#$$%^&*())", "1!"],
    error: ["123456", "qazxsw"],
    value: /[`~!@#$%^&*()_\-+=<>?:"{}|,.\\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im
  },
  {
    type: "chinese",
    rules: ["只能由中文汉字组成的非空字符串"],
    text: "是否是中文",
    success: ["一二三"],
    error: ["123456", "qazxsw"],
    value: /^[\u4E00-\u9FA5]+$/
  },
  {
    type: "english",
    rules: ["只能由'a-z'|'A-Z'组成的非空字符串"],
    text: "是否是英文",
    success: ["qazxsw", "QAZWSX", "qazWSX"],
    error: ["123456", "123qaz"],
    value: /^[a-zA-Z]+$/
  },
  {
    type: "english-upper",
    rules: ["只能由'A-Z'组成的非空字符串"],
    text: "是否是大写英文",
    success: ["QAZWSX"],
    error: ["qazwsx"],
    value: /^[A-Z]+$/
  },
  {
    type: "english-lower",
    rules: ["只能由'a-z'组成的非空字符串"],
    text: "是否是小写英文",
    success: ["qazxsw"],
    error: ["QAZWSX"],
    value: /^[a-z]+$/
  },

  {
    type: "number",
    rules: ["只能由0-9组成的非空字符串"],
    text: "是否是数字",
    success: ["13231", "093920"],
    error: ["dsdsdsdsds", "0.100102010201"],
    value: /^[0-9]+$/
  },
  {
    type: "number-free",
    rules: [
      "只能由'0-9'|'.'|'-'组成的非空字符串",
      "小数点至多有一个，并且第一位不能是小数点",
      "以0打头，后面没有小数点，则0本身，且前面不能带'-'，否则，后面跟任意位的非全0的数字",
      "非0打头，后面没有小数点，则数值本身，否则后面跟任意位的任意数字"
    ],
    text: "是否是合法的数字",
    success: ["1", "0", "10", "-1", "0.1", "0.01"],
    error: ["-0", "0.", "0.00", ".0", "01"],
    value: /(^(-)?0\.([0-9]*)?[1-9]+([0-9]*)?$)|(^[0]{1}$)|(^(-)?[1-9]([0-9]+)?(\.[0-9]+)?$)/
  },
  {
    type: "number-integer",
    rules: ["只能由'0-9'|'-'组成的非空字符串", "以0打头，则0本身"],
    text: "是否是整数",
    success: ["1", "0", "10", "-1"],
    error: ["-0", "0.1", "0.00", ".0", "0.001", "01"],
    value: /(^(-)?([1-9][0-9]*)$)|(^[0]{1}$)/
  },
  {
    type: "number-money",
    rules: [
      "只能由'0-9'|'.'组成的非空字符串",
      "小数点至多有一个，并且第一位不能是小数点",
      "以0打头，后面没有小数点，则0本身，否则后面跟不能全为0的至少一位数字",
      "非0打头，后面没有小数点，则数值本身，否则后面跟1-2位的任意数字"
    ],
    success: ["0.01", "0.10", "0.1", "0", "1"],
    error: ["-0", "0.0", "0.00", ".0", "0.001", "-1", "01"],
    text: "是否是金钱格式",
    value: /(^[0]{1}$)|(^0\.[1-9]([0-9])?$)|(^0\.([0-9])?[1-9]$)|(^[1-9]([0-9]*)?(\.[0-9]{1,2})?$)/
  },
  {
    type: "mobile",
    rules: ["只能由0-9组成的11位非空字符串", "首位一定是1"],
    text: "是否是手机号码",
    success: ["13980464237"],
    error: ["02334455555"],
    value: /^1[0-9]{10}$/
  },
  {
    type: "tel",
    rules: ["只能由'0-9'|'-'组成的[7,8,11]位非空字符串"],
    text: "是否是座机号码",
    success: ["028-12345678", "0832-5231402", "12345678", "5231402"],
    error: ["02812345678"],
    value: /(^[0-9]{3}\-[0-9]{8}$)|(^[0-9]{4}\-[0-9]{7}$)|(^[0-9]{7,8}$)/
  },
  {
    type: "id-card",
    memo: "该方法只是简单的验证，更复杂的需要判断生日，地区，校验等",
    rules: [
      "长度只能是15位或18位",
      "若15位，则全部是数字",
      "若18位，则前17位全部是数字，最后一位可能是数字或字符x"
    ],
    text: "验证身份证号码",
    success: ["5110251992071806019", "511025199207180601x", "51102519920718"],
    error: ["511025199207180601o", "511025199"],
    value: /(^\d{15}$)|(^\d{17}(\d|X|x)$)/
  }
];
```

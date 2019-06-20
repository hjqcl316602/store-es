# store-es

```js
 npm install store-es
```

## 对象式

### array

#### delayer

- @name 树形结构数据转一维数组
- @param {array} [array]
- @returns [array]

#### flatten

- @name 扁平化数组
- @param { array } [ array ] 需要偏平化的数组
- @param { deepth } [ number ] 深度
- @returns [array]

#### isEqual

- @name 验证两个数组的值是否相等
- @msg 只支持一维，支持 NAN
- @param { prev } [array ]
- @param { next } [ array ]
- @returns [boolean]

#### shuffle

- @name 数组乱序
- @msg 使用 fisher-tayes 算法，目前最好的乱序方式，使得每个元素参与的概率一致
- @param { array } [ array ] 数组
- @return [ array ]

#### shuffle.sort

- @name 数组乱序
- @msg 该方式乱序不完全，由于每个元素参与的次数不一致
- @param { array }
- @return:[ array ]

#### sort

- @name 数组排序
- @msg 不支持对象类型元素,会改变原数组的顺序
- @param { array } [ array ]
- @param { isUp = true } [ boolean ] 是否是升序
- @return [ array ]

#### sort.quick

- @name 数组排序-快速
- @msg 不支持对象元素
- @param { array } [ array ]
- @param { isUp = true } [ boolean ] 是否是升序
- @return: [ array ]

#### sort.quick.with

- @name 数组排序-快速
- @msg 支持对象元素的排序
- @param { array } [array]
- @param { callback } [ function ] 通过指定的函数，参数 (prev,next,array)
- @param { context } [ any ] 执行方法的执行上下文
- @return:[ array ]

#### sort.subbing

- @name 数组排序(冒泡)
- @msg 所有排序中速度最慢的
- 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
- 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
- 针对所有的元素重复以上的步骤，除了最后一个。
- 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
- 冒泡排序总的平均时间复杂度为 O(n^2)
- @param {arr} [ array] 数组
- @param { isUp = true } [ boolean] 是否是升序
- @return [array]

#### template

- @name: 生成一个数组模板
- @param { start =0 } [ number<int>]开始值
- @param { len = 10 } [ number<int> ]长度
- @param { isUp = true } [ boolean ] 是否是向上递增，否则向下递减
- @return: array<number>

#### template.string

- @name: 生成一个指定长度的数组，每个元素并由指定长度字符串组成
- @param { len = 10 } [ number<int> ] 指定长度数组
- @param { charLen = 4 } [ number<int> ] 指定长度的字符串元素
- @return: [ array<number>]

#### times

- @name 数组中元素出现的次数信息统计
- @msg 不支持对象类型[ objecy,array ]统计，支持 NaN
- @param { array = [] } [ array ]
- @return: [ array<'object'> ]

#### times.max

- @name 判断数组中出现最多次数的值
- @param { array = [] } [ array ]
- @return:[ array<'object'> ]

#### times.min

- @name 判断数组中出现最少次数的值
- @param { array = [] } [ array ]
- @return:[ array<'object'> ]

#### transpose

- @name 数组置换
- @param {array} [array] 需要置换的数组
- @msg 目标数组必须是二维数组，并且每一个元素的长度一致
- @return [array]

#### transpose.isDimen

- @name 判断数组是二维数组
- @msg 子元素全部是数组组成的数组
- @param { array } [ array ]
- @return [boolean]

#### tree

- @name 一维数组转树形结构数据
- @msg 利用 js 的引用对象实现，会修改原本的数组
- @param { array } [array]
- @param { pid } [ string ] 根的 pid 值
- @return [ array ]

#### unique

- @name 数组去重
- @msg 只支持 object 类型
- @param {array} [array]
- @return [array]

### type

#### browserType

- @name 获取浏览器的类型
- @return [ string ]

#### ios

- @name 判断客户端是否是 ios
- @return [boolean]

#### is

- @name 获取数据类型
- @param { ...args } [ array<string> ]
- @return [ function ]
- @param { value } [ any ]
- @return [ boolean ]

#### orientation

- @name 判断手机的方向
- @return [ string ] 'horizontal' => 横屏 'vertical' => 竖屏 '' => 未知

#### type

- @name 获取数据类型
- @param { value } [ any ]
- @return [ string ]
- @example type('null') => string type(0) => number

### string

#### connect

- @name 每隔几位添加指定的连接符
- @param { string } [ string ]
- @param { connect } [ string ] 连接符
- @param { len } [ number ] 每隔多少位
- @return [ string ]
- @example connect("13980464237"," ",4) => 139 8046 4237

#### contains

- @name 获取一个字符串包含指定的字符串的所有角标
- @param { string } [ string ]
- @param { target } [ string ] 指定的字符串
- @return [ array ] 角标位置数组

#### containsWith

- @name 返字符串中匹配正则表达式的值
- @msg replace 的 callback 函数的参数的个数由正则表达式决定的 1.第一个 ： 正则表达式结果;2.倒数第二个：角标;3.倒数第一个：字符串本身;4.剩余的：正则表达式匹配的结果
- @param { string } [ string ]
- @param { regexp } [ regexp ]
- @return [ array<'object'> ]

#### convert

- @name 字符串的转换
- @param {string} [ string ]
- @param { type } [ number<1,2,3,4,5> ]
- { type: 1, lebal: "首字母大写，剩余的小写" },
- { type: 2, lebal: "首字母小写，剩余的大写" },
- { type: 3, lebal: "大写转小写，小写转大写" },
- { type: 4, lebal: "全部大写" },
- { type: 5, lebal: "全部小写" }
- @return [ string ]

#### hump

- @name 驼峰字符串转链接字符串
- @msg 每个链接的单词必须是由[ a-z ] 组成的字符串；链接符号必须是"-"
- @param { string } [ string ]
- @return [ string ]

#### isCenter

- @name 验证一个字符串是否存在某字符串的中部
- @param { string } [ string ]
- @param { target } [ string ]
- @return [ boolean]

#### isContain

- @name 验证一个字符串包含指定的字符串
- @param { string } [ string ]
- @param { target } [ string ]
- @return [ boolean ]

#### isContinue

- @name 验证字符串是否是连续的
- @param { string } [ string ]
- @return [ boolean ]
- @example isContinue("12") => true isContinue('abcdef') => true

#### isEnd

- @name 验证一个字符串是否是以指定的值结尾
- @param { string } [ string ]
- @param { target } [ string ]
- @return [ boolean ]
- @exampale isEnd("huang", "ang")=> true

#### plalinroom

- @name 判断一个字符串是否是回文字符串
- @param { string } [ string ]
- @return [ boolean ]
- @example plalinroom("aha")=> true

#### isRepeat

- @name 验证是否是重复的字组成的字符串，即由一个字符串组成的字符串
- @param { string } [ string ] 字符串，长度应不少于 2 位
- @return [ boolean ]
- @exampale isRepeat('aa') => true

#### isRequire

- @name 验证字符串是否是有值
- @param { string } [ string ]
- @return [ boolean ]
- @example isRequire("s") => true
- @example isRequire("") => false
- @example isRequire(0) => false
- @example isRequire(" ") => true

#### isSpace

- @name 判断一个字符串中是否存在空白
- @param {string} [ string ]
- @return [ boolean ]
- @msg String.prototype.trim 只能删除字符串开头的空白
- @example isSpace("fff fff") => true
- @example isSpace("") => false

#### isStart

- @name 验证一个字符串是否是以指定的值开头
- @param { string } [ string ]
- @param { prex} [ string ]
- @return [ boolean ]
- @example isStart("huang", "hu") => true

#### link

- @name 驼峰字符串转链接字符串
- @param {string} [string]
- @msg 只能是[ a-zA-Z ] 组成的字符串
- @return [string]
- @example link("asashAHjjasHsa") => asash-a-hjjas-hsa

#### match

- @name: 按指定的正则表达式提取字符串中满足条件的值
- @param: { string } [ string ]
- @param: { regexp } [ regexp ]
- @return: [ array ]
- @example match('1123sss222ssss222',/[a-z]{3,}/g) => ["sss", "ssss"]

#### path

- @name 将字符串转成合法的对象的键
- @msg
- a.b.c 形式，获取对象属性的时候用'.'，获取数组的时候可以使用'.0'，也可以使用 a[0],
- []只能是数组的角标 0-9 组成的字符串，并且 [] 中不能再存在 []
- 不能以'.'开头，且不能有连续的'.'
- 对象的属性名需要满足 js 变量命名规则
- JS 标识符的命名规则，即变量的命名规则：
- 标识符只能由字母、数字、下划线和‘\$’组成
- 数字不可以作为标识符的首字符
- 对象属性的命名规则
- 通过[]操作符为对象添加属性时，属性名称可以是任何字符串（包括只包含空格的字符串和空字符串）；
- 通过.操作符为对象添加属性时，属性名称必须是合法的标识符名称；
- 如果属性名包含非法的标识符字符，则只能采用 obj[“propertyName”]的形式；
- 如果属性名是合法的标识符，读取时即可以采用 obj.propertyName,也可以采用 obj[“propertyName”]的形式；
- @param { string } [ string ]
- @return [ array ]
- @example path(".a[a].b[0.s..s].c[c].....") => ['a','0','b','0','c','c']

#### random

- @name 生成随机字符串
- @param { n } [ number ] 指定长度 ， 默认长度为 16
- @return [ string ]
- @example random(16) => n568c2cjdbdi3oop

#### randomColor

- @name 随机生成颜色字符串
- @param { isOpacity } [ boolean ] 是否需要透明度
- @return [string]
- @example randomColor(true) => rgba(226,180,173,0.3421123393946621)
- @example randomColor() => rgba(226,180,173)

#### shousand

- @name 字符串转千分位
- @msg 判断字符串是否存在'.'，存在则使用 Number(value).toLocaleString()，否则正则替换
- @param { string } [ string,number ]
- @return [ string ]
- @example shousand(123456788) => 123,456,788
- @example shousand(123456788.11) => 123,456,788.11

#### space

- @name 验证一个字符串是否是空白字符串
- @param { string } string
- @return [ boolean ]
- @example space(" ") => true

#### transfer

- @name 字符串的转义
- @param {string} [ string ]
- @return [ string ]
- @example transfer("< >") => "&lt &nbsp &gt "

#### trim

- @name 字符串的空格去除
- @msg String.prototype.trim 只能删除字符串开头的空白
- @param {string} [ string ] 字符串
- @param {type} [ 1,2,3,4] 类型
- { type: 1, lebal: "所有空格" }
- { type: 2, lebal: "前后空格" }
- { type: 3, lebal: "前空格" }
- { type: 4, lebal: "后空格" }
- @return [ string ]

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

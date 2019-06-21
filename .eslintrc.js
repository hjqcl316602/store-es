
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "eslint:recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": [0],          // [2, {"vars": "all", "args": "after-used"}]  不能有声明后未被使用的变量或参数
    "no-useless-escape": [0]        // 去掉正则表达式中的提示  开启时，/\:(.*?)\;/ 两处的\\ 会报错
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
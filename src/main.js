import Vue from "vue";
import App from "./App.vue";
import { string, Calc, array, type, object, util } from "../package/index";
import "../test/index";
//import * as store from "store-es";
//console.log(util.extend.replace([1, 2, 3], ["1", 2, 2, null, true]));
console.log(string);
new Vue({
  render: h => h(App)
}).$mount("#app");

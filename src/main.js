import Vue from "vue";
import App from "./App.vue";
import { string, Calc, array } from "../package/index";
import "../test/index";
//import * as store from "store-es";
//console.log(store);
console.log(array.times.max([1, 2, 3, 4, 1, 2, 3, 1, 2, 1]));
new Vue({
  render: h => h(App)
}).$mount("#app");

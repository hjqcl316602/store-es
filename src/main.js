import Vue from "vue";
import App from "./App.vue";
import { string, Calc, array, type, object } from "../package/index";
import "../test/index";
//import * as store from "store-es";
//console.log(store);
console.log(type.equal([false, { name: 12 }], [false, { name: 12 }]));
new Vue({
  render: h => h(App)
}).$mount("#app");

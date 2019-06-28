import Vue from "vue";
import App from "./App.vue";
import * as store from "../package/index";
//import "../test/index";
//import * as store from "store-es";
//console.log(util.extend.replace([1, 2, 3], ["1", 2, 2, null, true]));
console.log(store);
new Vue({
  render: h => h(App)
}).$mount("#app");

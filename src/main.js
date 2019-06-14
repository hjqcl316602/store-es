import Vue from "vue";
import App from "./App.vue";
import { string, Calc } from "../package/index";
import "../test/index";

new Vue({
  render: h => h(App)
}).$mount("#app");

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <input type="file" @change="change" />
    <button ref="btn">单击</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { string, Calc, Image$, dom } from "../package/index";
let image = new Image$();

export default {
  name: "app",
  components: {
    HelloWorld
  },
  mounted() {},
  methods: {
    change(e) {}
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <div class="main" v-if="false">
      <div class="main-child">
        <div class="main-child-child">
          <div class="list blue" v-for="item in 4" :key="item">list {{ item }}</div>
        </div>
      </div>
      <div class="center red">center</div>
      <div class="main-child">
        <div class="main-child-child2">
          <div class="list green" v-for="item in 3" :key="item">list {{ item }}</div>
        </div>
      </div>
    </div>
    <div>
      <input type="file" @change="change" />
    </div>
  </div>
</template>

<script>
import { string, Calc, Image$, dom } from "../package/index";
let image = new Image$();
export default {
  name: "app",
  components: {},
  mounted() {},
  methods: {
    change(e) {}
  }
};
</script>

<style>
.main {
  width: 100%;
  height: 350px;
}
.center {
  height: 100px;
  width: 100%;
}
.main-child {
  height: 350px;
  width: 100%;
  position: relative;
}
.main-child-child {
  max-height: 100%;
  overflow: auto;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background: green;
}
.main-child-child2 {
  max-height: 100%;
  overflow: auto;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background: blue;
}
.list {
  height: 50px;
  border: 1px solid #000;
}
.red {
  background: red;
}
.blue {
  background: blue;
}
.green {
  background: green;
}
</style>

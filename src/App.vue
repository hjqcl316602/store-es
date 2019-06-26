<template>
  <div id="app">
    <div ref="main" class="main" id="main">
      <div class="main-child">
        <div class="main-child-child" ref="main-child">
          <div class="list blue" v-for="item in 10" :key="item">list {{ item }}</div>
        </div>
      </div>
      <div class="center red">center</div>
      <div class="main-child">
        <div class="main-child-child2 ">
          <div class="list green" v-for="item in 3" :key="item">list {{ item }}</div>
        </div>
      </div>
    </div>
    <div>
      <input type="file" @change="change" />
    </div>
    <button ref="btn">单击</button>
  </div>
</template>

<script>
import { domer } from "../package/index";
import { setTimeout } from "timers";
console.log(domer);
export default {
  name: "app",
  components: {},
  mounted() {
    console.log(domer.offseter.client(this.$refs["main"]));
  },
  methods: {
    change(e) {}
  }
};
</script>

<style>
.main {
  width: 100%;
  height: 550px;
}
.center {
  height: 50px;
  width: 100%;
}
.main-child {
  height: 250px;
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

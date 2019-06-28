<template>
  <div id="app">
    <div class="outer blue" ref="outer">
      <div class="inner green">
        <div v-for="item in 10" :key="item">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { domer } from "../package/index";
//console.log(domer);
export default {
  name: "app",
  data() {
    return {
      height: {
        document: 0,
        window: 0,
        inner: 0
      },
      scroller: {
        top: 0
      }
    };
  },
  components: {},
  mounted() {
    this.$nextTick(() => {
      console.log(domer.queryer.byClassName("inner"));
      console.log(domer.queryer.byIdName("app"));
      console.log(domer.queryer.byTagName("body"));
    });
  },
  methods: {
    hanlder() {},
    change(e) {}
  }
};
</script>

<style>
.outer {
  height: 500px;
  overflow: auto;
  padding: 20px;
}
.inner {
  height: 1500px;
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

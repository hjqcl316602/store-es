<template>
  <div id="app" class="app">
    <button @click="hanlder">单击</button>
  </div>
</template>

<script>
import { domer, imager, funer } from "../package/index";
console.log(imager);
export default {
  name: "app",
  data() {
    return {};
  },
  components: {},
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    hanlder: funer.throttler.timeout(function(e) {
      console.log(e);
    }, 2000)
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

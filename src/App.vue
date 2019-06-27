<template>
  <div id="app">
    <div class="inner blue" ref="inner">
      <p>height.document : {{ height.document }}</p>
      <p>height.window : {{ height.window }}</p>
      <p>height.inner : {{ height.inner }}</p>
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
      }
    };
  },
  components: {},
  mounted() {
    this.$nextTick(() => {
      this.height.document = domer.heighter(document);
      this.height.window = domer.heighter(window);
      this.height.inner = domer.heighter(this.$refs["inner"]);
      let bool = domer.checker(this.$refs["inner"]);
      console.log(bool);
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
  padding: 20px;
  height: 500px;
}
.inner {
  height: 400px;
  padding: 20px;
  border: 10px solid black;
  margin-bottom: 20px;
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

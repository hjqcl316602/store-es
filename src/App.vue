<template>
  <div id="app">
    <input type="file" @change="change" />
  </div>
</template>

<script>
import { domer, imager } from "../package/index";
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
    hanlder() {},
    change(e) {
      let file = e.target.files[0];
      let message = imager.filer.baser(file).then(res => {
        console.log(res);
        console.log(imager.baser.size(res));
      });
    }
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

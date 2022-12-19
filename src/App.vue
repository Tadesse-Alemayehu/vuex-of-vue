<template>
  <h1>Counter is {{ count }}</h1>
  <button :onclick="incrementCounter">increment</button>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  computed: mapState(["count"]),
  methods: {
    incrementCounter(e) {
      console.log(e.target);
      this.$store.commit("increment");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

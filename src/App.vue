<template>
  <h1>Counter is {{ count }}</h1>
  <h1>completed todos are {{ getCompletedTodosCount }}</h1>
  <h1>completed todos with user number {{ getCompletedTodosCountMult }}</h1>
  <button :onclick="increment">increment</button>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["getCompletedTodosCount"]),
  },
  methods: {
    ...mapMutations(["increment"]),
    // incrementCounter(e) {
    //   console.log(e.target);
    //   this.$store.commit("increment");
    // },
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

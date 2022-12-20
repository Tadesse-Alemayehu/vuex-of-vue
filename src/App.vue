<template>
  <h1>Counter is {{ count }}</h1>
  <h1>completed todos are {{ getCompletedTodosCount }}</h1>
  <h1>todo counts {{}}</h1>
  <button :onclick="increment">increment</button>
  <button :onclick="fetchAndAddTodo">Add todo</button>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import * as types from "./vuex/mutation-types";
export default {
  name: "App",
  computed: {
    ...mapState(["count"]),
    getCompletedTodosCount() {
      return this.$store.state.todos.length;
    },
  },
  methods: {
    ...mapMutations({
      increment() {
        console.log(types.INCREMENT_COUNTER_BY_4);
        return this.$store.commit({
          type: types["INCREMENT_COUNTER_BY_4"],
          num: 4,
        });
      },
    }),
    ...mapActions(["fetchAndAddTodo"]),
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

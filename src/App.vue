<template>
  <h1>Counter is {{ counter }}</h1>
  <button :onclick="incrementCounter">increment</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      console.log("clicked");
      this.counter = this.counter + 1;
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

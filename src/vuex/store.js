import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      todos: [
        { id: 1, text: "...", done: true },
        { id: 2, text: "...", done: false },
      ],
      count: 0,
    };
  },
  mutations: {
    addToDo() {},
    increment(state, payload) {
      state.count += payload.num;
      console.log(state);
    },
  },
  getters: {
    getCompletedTodos: (state) => state.todos.filter((todo) => todo.done),
    getCompletedTodosCount: (state, getters) =>
      getters.getCompletedTodos.length,
    getCompletedTodosCountMult: (state, getters) =>
      getters.getCompletedTodos.length * 5,
  },
});

import { createStore } from "vuex";
import * as types from "./mutation-types";
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
    addToDo(state, payload) {
      state.todos.push(payload.todo);
      console.log(state);
    },
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
  actions: {
    fetchAndAddTodo({ commit }) {
      setTimeout(() => {
        commit(types.ADD_TODO, {
          todo: { id: 3, text: "this is the thired todo", done: false },
        });
      }, 1000);
    },
  },
});

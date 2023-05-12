import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    toDos: [],
  },
  getters: {
    toDos(currentState) {
      return currentState.toDos;
    },
  },
  actions: {
    init({commit}) {
      commit('init');
    },
    addToDo({ commit }, item) {
      commit('addToDo', item);
    },
    toggleIsDone({ commit }, index) {
      commit('toggleIsDone', index);
    },
    removeToDo({commit}, index) {
      commit('removeToDo', index);
    }
  },
  mutations: {
    init(state) {
      const toDos = localStorage.getItem('toDos');
      if(toDos) {
        state.toDos = JSON.parse(toDos);
      }
    },
    addToDo(state, item) {
      state.toDos = [...state.toDos, item];
      this.commit('updateToDosToLocalStorage');
    },
    toggleIsDone(state, index) {
      const todos = [...state.toDos];
      todos[index].isDone = !todos[index].isDone;
      state.toDos = todos;
      this.commit('updateToDosToLocalStorage');
    },
    removeToDo(state, index) {
      state.toDos = state.toDos.filter((todo, todoIndex) => todoIndex !== index);
      this.commit('updateToDosToLocalStorage');
    },
    updateToDos(state, toDos) {
      state.toDos = toDos;
      this.commit('updateToDosToLocalStorage');
    },
    updateToDosToLocalStorage(state) {
      localStorage.setItem("toDos", JSON.stringify(state.toDos));
    },
  },
})

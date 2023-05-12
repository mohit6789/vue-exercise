<template>
  <div>
    <div class='todo-item' v-for='(todo, index) in toDos' :key='index'>
      <span @click='toggleIsDone(index)' class='item-text' :class='{completed: todo.isDone}'>{{ todo.item }}</span>
      <button @click='removeItem(index)'>Remove</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { store } from '@/store';

export default {
  name: 'todoList',
  computed: {
    ...mapGetters({
      toDos: 'toDos',
    }),
  },
  methods: {
    toggleIsDone(index) {
      store.dispatch('toggleIsDone', index);
    },
    removeItem(index) {
      store.dispatch('removeToDo', index);
    }
  },
};
</script>

<style scoped>
  .todo-item {
    display: flex;
    margin-bottom: 10px;
  }
  .item-text {
    flex: 1;
    padding: 10px 5px;
    border: 1px solid gray;
  }
  .item-text.completed {
    background-color: green;
    text-decoration: line-through;
  }
</style>

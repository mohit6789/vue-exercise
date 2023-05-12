<template>
  <div id='app' class='app-container'>
    <h1>Tasks <span class='count'>({{toDos.length}})</span></h1>
    <todo-form @formSubmit='submitForm' />
    <todo-list class='todo-list'/>
  </div>
</template>

<script>
import '@/assets/main.css';
import TodoForm from '@/components/todoForm.vue';
import { store } from '@/store';
import TodoList from '@/components/todoList.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: { TodoList, TodoForm },
  computed: {
    ...mapGetters(['toDos'])
  },
  methods: {
    submitForm($event) {
      store.dispatch('addToDo', $event);
    },
  },
  beforeMount() {
    store.dispatch('init');
  }
};
</script>

<style scoped>
.app-container {
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
}
.todo-list {
  margin-top: 20px;
}
.count {
  color: lightgray;
}
</style>

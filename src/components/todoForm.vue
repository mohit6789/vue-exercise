<template>
  <form v-on:submit.prevent='submitForm' class='form'>
    <input type='text' v-model='todoItem' />
    <button type='submit' :disabled='!todoItem'>+Add</button>
  </form>
</template>

<script>

export default {
  name: 'todoForm',
  data() {
    return {
      todoItem: '',
    };
  },
  methods: {
    submitForm() {
      this.$emit('formSubmit', {
        item: this.todoItem,
        isDone: false,
      });
      this.todoItem = '';
    },
  },
};
</script>

<style scoped>
  .form {
    display: flex;
  }
  .form :first-child {
    flex: 1;
  }
</style>

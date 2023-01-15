<template>
  <div class="container">
    <div>
      <p><strong>What is your name?</strong></p>
      <input type="text" :value="personalInfo.name" @input="onNameChanged($event)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "name-form",
  data() {
    return {
      name: ''
    }
  },
  computed: {
    personalInfo() {
      return this.$store.state.personalInfo;
    }
  },
  methods: {
    onNameChanged($event) {
      this.$store.commit('updatePersonalInfo', {
        key: 'name',
        value: $event.target.value
      });
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

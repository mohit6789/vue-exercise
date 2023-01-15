<template>
  <div>
    <strong>Thanks, {{ personalInfo.name }}</strong>
    <p>Your country is the {{personalInfo.country}} and your city is {{personalInfo.city}}.
      Your preferred color is {{personalInfo.color}}</p>
  </div>
</template>

<script>
export default {
  name: "summary-form",
  computed: {
    personalInfo() {
      return this.$store.state.personalInfo;
    },
    colorText() {
      return this.$store.state.personalInfo.color;
    }
  }
}
</script>

<template>
  <div class="stepper">
    <div v-for="(step, index) in steps" :key="step.title" class="step-container">
      <Step :step="step" :step-counter="index + 1" :current-step="currentStep"></Step>
    </div>
  </div>
</template>

<script>
import Step from "@/components/Step.vue";
export default {
  name: "stepper-comp",
  components: { Step },
  props: {
    steps: {
      type: Array,
      required: true
    },
    currentStep: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
  .stepper {
    display: flex;
    flex-direction: row;
  }
  .step-container {
    flex: 1 0 33%;
  }
</style>

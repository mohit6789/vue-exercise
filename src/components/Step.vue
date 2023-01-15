<template>
  <div class="step">
    <div class="counter"
         :class="{selected: currentStep === stepCounter, 'previous-step': currentStep > stepCounter}"
    >
      {{ stepCounter }}
    </div>
    <div>
      <div>{{ step.title }}</div>
      <div v-if="step.subTitle" class="subtitle">{{step.subTitle}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "step-comp",
  props: {
    step: {
      type: Object,
      required: true
    },
    stepCounter: {
      type: Number,
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
.step {
  display: flex;
}
.step .counter {
  display: flex;
  min-width: 20px;
  min-height: 20px;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.step .counter.selected {
  background-color: lightskyblue;
}
.step .counter.previous-step {
  background-color: green;
  color: white;
}
.subtitle {
  color: gray;
  font-size: 14px;
}
</style>

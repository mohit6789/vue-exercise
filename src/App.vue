<template>
  <div id="app">
    <Stepper :steps="steps" :currentStep="currentStep" />
    <form class="form-container" @submit.prevent="submit">
      <div>
        <name-form v-if="currentStep === 1"/>
        <additional-info-form v-else-if="currentStep === 2"/>
        <summary-form v-else/>
      </div>
      <div class="button-container">
        <button class="previous-button" v-if="currentStep !== 1" type="button" @click="previousStep">Back</button>
        <button class="next-button" type="submit" :disabled="isInvalidForm">
          {{
            currentStep === 3 ? 'Submit' : 'Next'
          }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Stepper from "@/components/Stepper.vue";
import NameForm from "@/components/NameForm";
import AdditionalInfoForm from "@/components/AdditionaInfoFrom";
import SummaryForm from "@/components/SummaryForm";
import "@/assets/main.css";

export default {
  name: 'App',
  components: {
    Stepper,
    SummaryForm,
    NameForm,
    AdditionalInfoForm,
  },
  computed: {
    steps() {
      return [
        { title: "Type a name", subTitle: this.currentStep > 1 ? `(${this.personalInfo.name})` : '' },
        { title: "Fill the form" },
        { title: "Summary" }
      ];
    },
    currentStep() {
      return this.$store.state.currentStep;
    },
    personalInfo() {
      return this.$store.state.personalInfo;
    },
    isInvalidForm() {
      if (this.currentStep === 1) {
        return this.personalInfo.name.length < 2;
      }
      if (this.currentStep === 2) {
        return !this.personalInfo.country || this.personalInfo.city.length < 2 || !this.personalInfo.color;
      }
      return false;
    }
  },
  methods: {
    submit() {
      if (this.currentStep === 3) {
        alert(JSON.stringify(this.personalInfo));
      } else {
        this.nextStep();
      }
    },
    nextStep() {
      this.$store.commit('nextStep');
    },
    previousStep() {
      this.$store.commit('previousStep');
    },
  }
}
</script>

<style scoped>
#app {
  width: 500px;
  height: 100vh;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid gray;
  margin: auto;
  margin-top: 20px;
  overflow: auto;
}

.form-container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.button-container {
  display: flex;
  margin-top: auto;
  padding-top: 20px;
}

.button-container button {
  padding: 5px 30px;
  border-radius: 4px;
  border: 1px solid black;
}

.button-container .next-button {
  margin-left: auto;
}

.button-container .next-button:not(:disabled) {
  background-color: green;
  color: white;
  border-color: transparent;
}
</style>

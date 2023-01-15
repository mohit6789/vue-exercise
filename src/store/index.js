import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentStep: 1,
    personalInfo: {
      name: '',
      country: '',
      city: '',
      color: '',
    },
  },
  mutations: {
    nextStep (state) {
      state.currentStep++;
    },
    previousStep (state) {
      state.currentStep--;
    },
    updatePersonalInfo(state, payload) {
      state.personalInfo[payload.key] = payload.value;
    }
  }
})

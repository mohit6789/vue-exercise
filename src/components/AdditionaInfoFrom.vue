<template>
  <div>
    <div>
      <p>Country</p>
      <select @change="onCountryChange($event)" :value="personalInfo.country">
        <option value="">Pick a country</option>
        <option v-for="country in countries" :key="country">
          {{ country }}
        </option>
      </select>
    </div>
    <div>
      <p>City</p>
      <input type="text" placeholder="Type your city..." :value="personalInfo.city" @input="onCityChanged($event)"/>
    </div>
    <div>
      <p>Preferred color</p>
      <span
        v-for="color in colors"
        :key="color"
        class="color"
        :class="{selected: color === personalInfo.color}"
        @click="onColorSelected(color)"
        :style="{background: color}">
      </span>
    </div>
  </div>
</template>

<script>
import {countries} from "@/contants/countries";

const colors = ['green', 'red', 'purple'];

export default {
  name: "additional-info-form",
  data() {
    return {
      countries,
      colors
    }
  },
  computed: {
    personalInfo() {
      return this.$store.state.personalInfo;
    }
  },
  methods: {
    previousStep() {
      this.$store.commit('previousStep');
    },
    onColorSelected(color) {
      this.$store.commit('updatePersonalInfo', {
        key: 'color',
        value: color
      });
    },
    onCountryChange($event) {
      this.$store.commit('updatePersonalInfo', {
        key: 'country',
        value: $event.target.value
      });
    },
    onCityChanged($event) {
      this.$store.commit('updatePersonalInfo', {
        key: 'city',
        value: $event.target.value
      });
    }
  }
}
</script>

<style scoped>
.color {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border: 2px solid transparent;
}
.color.selected {
  border: 2px solid black;
}
</style>

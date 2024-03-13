<template>
  <div>
    <button @click="startTour" data-step="1" data-intro="This is Button 1! Click 'Next' to continue.">Button 1</button>
    <button data-step="2" data-intro="Now, this is Button 2!">Button 2</button>
    <button @click="goToDataComponent" data-step="3" data-intro="Finally, this is Button 3 that takes you to the DataComponent!">Button 3</button>
  </div>
</template>

<script>
export default {
  name: 'Header-',
  mounted() {
    const introJS = require("intro.js")();
    introJS.setOptions({
      doneLabel: "Done",
      skipLabel: "Skip",
      nextLabel: "Next",
      prevLabel: "Previous"
    });
    introJS.start();
  },
  methods: {
    goToDataComponent() {
      this.$router.push('/data');
    },
  },
}
</script>

<style>
/* Overlay Style */
.introjs-overlay {
  background-color: rgba(0, 0, 0, 0.6) !important;
}

/* Tooltip Style */
.introjs-tooltip {
  max-width: 500px;
  color: #2a2a;
  background-color: #b21a1a;
  border: 2px solid #f3a703;
  border-radius: 40px;
  padding: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Tooltip Arrow */
.introjs-arrow {
  border-color: #9eb1c5 transparent !important;
}

/* Buttons Style */
.introjs-button {
    background-color: white !important;
    color: black !important;
    border: 1px solid black !important;
    margin-right: 8px !important; /* Adds space between buttons */
    transition: background-color 0.3s ease !important;
}

.introjs-button:hover {
    background-color: orange !important;
    color: white !important;
}

/* Hide the step number */
.introjs-helperNumberLayer {
  display: true;
}

.header {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #ebee32;
  color: rgb(62, 0, 0);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
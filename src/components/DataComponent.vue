<template>
  <div class="data-component">
    <h2>Data component</h2>
    <button @click="startTour" data-step="3" data-intro="This is a button on a new component!">Example Button 1</button>
    <button data-step="4" data-intro="Here's another button, on the same component!">Example Button 2</button>
  </div>
</template>

<script>
export default {
  name: 'DataComponent',
  mounted() {
    this.startTour();
  },
  methods: {
    startTour() {
      this.$nextTick(() => {
        const introJS = require('intro.js')();
        introJS.setOptions({
          steps: [
            {
              element: document.querySelector('[data-step="3"]'),
              intro: 'This is a button on a new component!',
            },
            {
              element: document.querySelector('[data-step="4"]'),
              intro: "Here's another button, on the same component!",
            },
          ],
          showStepNumbers: false,
          exitOnOverlayClick: false,
          skipLabel: 'Skip',
          nextLabel: 'Next >',
          prevLabel: '< Previous',
          doneLabel: 'Done',
        });

        introJS.start();
      });
    },
  },
};
</script>

<style>
.data-component {
  background-color: #e9ecef;
  padding: 20px;
  text-align: center;
}
</style>

<template>
  <q-page class="q-pa-md" style="background-color: lightgrey">
    Support under maintenance</q-page
  >
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Support",

  data() {
    return {
      test: true,
    };
  },

  methods: {
    printamo() {
      return this.test;
    },
  },
});
</script>

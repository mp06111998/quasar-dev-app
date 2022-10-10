<template>
  <q-page style="background-color: lightgrey">
    <div class="q-pa-md" style="text-align: center; padding-top: 60px">
      <div class="text-caption">
        Support email:
        <span style="color: green"><b>support_knightgain@gmail.com</b></span>
      </div>
    </div>
  </q-page>
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

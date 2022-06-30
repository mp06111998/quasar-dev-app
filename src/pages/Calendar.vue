<template>
  <q-page class="q-pa-md" style="background-color: lightgrey">
    <div class="q-pa-md">
      <q-date v-model="days" title="John Doe" range />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Calendar",

  data() {
    return {
      days: [{ from: "2020/07/01", to: "2020/07/10" }],
      left: 12,
    };
  },
});
</script>

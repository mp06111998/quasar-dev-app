<template>
  <q-page class="q-pa-md" style="background-color: lightgrey">
    <q-card class="my-card">
      <q-card-section absolute-right>
        <q-linear-progress
          size="18px"
          :value="progress1"
          color="black"
          style="width: 78%"
        >
          <div class="absolute-full flex flex-center">
            <q-badge color="white" text-color="black" :label="progressLabel1" />
          </div>
        </q-linear-progress>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "PageIndex",

  setup() {
    const progress1 = ref(0.3);

    return {
      progress1,
      progressLabel1: computed(() => (progress1.value * 100).toFixed(2) + "%"),
    };
  },
});
</script>

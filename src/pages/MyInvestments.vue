<template>
  <q-page class="q-pa-md" style="background-color: lightgrey">
    <q-card class="my-card">
      <div class="row">
        <div class="col-3 q-pa-sm">
          <span class="col text-h6 ellipsis">Small Gain</span>
          <br />
          <span class="q-px-sm" style="background-color: black; color: white"
            >€ {{ 100 * 1.2 }}</span
          >
        </div>
        <div class="col-9">
          <q-card-section absolute-right>
            <q-linear-progress size="18px" :value="progress1" color="black">
              <div class="absolute-full flex flex-center">
                <q-badge
                  color="white"
                  text-color="black"
                  :label="progressLabel1()"
                />
              </div>
            </q-linear-progress>
          </q-card-section>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "My Investments",

  data() {
    return {
      progress1: 0.42,
    };
  },

  methods: {
    progressLabel1() {
      return this.progress1 * 100 + "%";
    },
  },
});
</script>

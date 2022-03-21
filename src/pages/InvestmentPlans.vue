<template>
  <q-page class="flex flex-center">
    <q-card class="my-card q-mx-md q-my-md">
      <q-img style="height: 220px" src="~assets/small.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="euro"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">Small Gain</div>
          <div
            class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
          >
            <q-icon name="euro" />
            50 - 1000
          </div>
        </div>

        <q-slider
          v-model="priceModel1"
          class="q-mt-xl"
          color="black"
          :inner-min="50"
          :inner-max="1000"
          :label-value="smallValue"
          step="50"
          markers
          label
          label-always
          :min="50"
          :max="1000"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Gain projections:
          <span class="q-px-sm" style="background-color: black; color: white"
            >€ {{ priceModel1 * 1.2 }}</span
          >
        </div>
        <div class="text-caption text-grey">
          All investment plans lock your investment for 120 days.
          <br />
          After 120 days you get profit of 20%. Everything else
          <br />
          is on Juicy Gain.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn color="primary"> Invest </q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card q-mx-md q-my-md">
      <q-img style="height: 220px" src="~assets/medium.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="euro"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">Medium Gain</div>
          <div
            class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
          >
            <q-icon name="euro" />
            1050 - 10.000
          </div>
        </div>

        <q-slider
          v-model="priceModel2"
          class="q-mt-xl"
          color="black"
          :inner-min="1050"
          :inner-max="10000"
          :label-value="mediumValue"
          step="50"
          markers
          label
          label-always
          :min="1050"
          :max="10000"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Gain projections:
          <span class="q-px-sm" style="background-color: black; color: white"
            >€ {{ priceModel2 * 1.2 }}</span
          >
        </div>
        <div class="text-caption text-grey">
          All investment plans lock your investment for 120 days.
          <br />
          After 120 days you get profit of 20%. Everything else
          <br />
          is on Juicy Gain.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn color="primary"> Invest </q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card q-mx-md q-my-md">
      <q-img style="height: 220px" src="~assets/large.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="euro"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">Large Gain</div>
          <div
            class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
          >
            <q-icon name="euro" />
            10.050 - 20.000
          </div>
        </div>

        <q-slider
          v-model="priceModel3"
          class="q-mt-xl"
          color="black"
          :inner-min="10050"
          :inner-max="20000"
          :label-value="largeValue"
          step="50"
          markers
          label
          label-always
          :min="10050"
          :max="20000"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Gain projections:
          <span class="q-px-sm" style="background-color: black; color: white"
            >€ {{ priceModel3 * 1.2 }}</span
          >
        </div>
        <div class="text-caption text-grey">
          All investment plans lock your investment for 120 days.
          <br />
          After 120 days you get profit of 20%. Everything else
          <br />
          is on Juicy Gain.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn color="primary"> Invest </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "PageIndex",

  setup() {
    const priceModel1 = ref(50);
    const priceModel2 = ref(1050);
    const priceModel3 = ref(10050);

    return {
      priceModel1,
      priceModel2,
      priceModel3,
      smallValue: computed(() => `€ ${priceModel1.value}`),
      mediumValue: computed(() => `€ ${priceModel2.value}`),
      largeValue: computed(() => `€ ${priceModel3.value}`),
    };
  },
});
</script>

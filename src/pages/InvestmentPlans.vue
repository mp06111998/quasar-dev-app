<template>
  <q-page class="flex flex-center" style="background-color: lightgrey">
    <q-card class="my-card q-mx-md q-my-md" style="max-width: 350px">
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
          v-model="smallValue"
          class="q-mt-xl"
          color="black"
          :inner-min="50"
          :inner-max="1000"
          :label-value="smallValue"
          :step="50"
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
            >€ {{ smallValue * 1.2 }}</span
          >
        </div>
        <div class="text-caption text-grey">
          All investment plans lock your investment for 120 days. After 120 days
          you get profit of 20%. Everything else is on Juicy Gain.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="center">
        <q-btn color="primary" @click="click(smallValue)"> Invest </q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card q-mx-md q-my-md" style="max-width: 350px">
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
          v-model="mediumValue"
          class="q-mt-xl"
          color="black"
          :inner-min="1050"
          :inner-max="10000"
          :label-value="mediumValue"
          :step="50"
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
            >€ {{ mediumValue * 1.2 }}</span
          >
        </div>
        <div class="text-caption text-grey">
          All investment plans lock your investment for 120 days. After 120 days
          you get profit of 20%. Everything else is on Juicy Gain.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="center">
        <q-btn color="primary" @click="click(mediumValue)"> Invest </q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card q-mx-md q-my-md" style="max-width: 350px">
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
          v-model="largeValue"
          class="q-mt-xl"
          color="black"
          :inner-min="10050"
          :inner-max="20000"
          :label-value="largeValue"
          :step="50"
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
            >€ {{ largeValue * 1.2 }}</span
          >
        </div>
        <div class="text-caption text-grey">
          All investment plans lock your investment for 120 days. After 120 days
          you get profit of 20%. Everything else is on Juicy Gain.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="center">
        <q-btn color="primary" @click="click(largeValue)"> Invest </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>

  <q-dialog
    v-model="openInvest"
    transition-show="rotate"
    transition-hide="rotate"
    persistent
  >
    <q-card style="max-width: 410px">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Investment plan</div>
      </q-card-section>

      <q-card-section class="q-py-lg">
        <p>
          Investment of
          <span class="q-px-sm" style="background-color: black; color: white"
            >€ {{ myValue }}</span
          >
          with gain projections
          <span class="q-px-sm" style="background-color: black; color: white"
            >€ {{ myValue * 1.2 }}</span
          >.
        </p>
        <div class="text-caption text-grey">
          After you confirm your investment plan, your investment will apear
          under "My investments" in menu. There you can pay or cancel it.
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn
          label="Confirm"
          color="primary"
          v-close-popup
          @click="triggerPositive()"
          href="/#/my_investments"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "Investment Plans",

  data() {
    return {
      $q: useQuasar(),

      smallValue: 50,
      mediumValue: 1050,
      largeValue: 10050,

      openInvest: false,
      myValue: 0,
    };
  },

  methods: {
    triggerPositive() {
      this.$q.notify({
        type: "positive",
        message: "Successfully confirmed investment plan.",
      });
    },

    click(num) {
      this.myValue = num;
      this.openInvest = true;
    },
  },
});
</script>

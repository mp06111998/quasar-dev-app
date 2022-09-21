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
          All investment plans lock your investment for 100 days. With small
          gain investment you get
          <span style="color: green"><b>profit of 20% after 100 days</b></span
          >. Everything else is on Juicy Gain.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="center">
        <q-btn color="primary" @click="click(smallValue, 1.2)"> Invest </q-btn>
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
            1050 - 10000
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
            >€ {{ mediumValue * 1.4 }}</span
          >
        </div>
        <div class="text-caption text-grey">
          All investment plans lock your investment for 100 days. With medium
          gain investment you get
          <span style="color: green"><b>profit of 40% after 100 days</b></span
          >. Everything else is on Juicy Gain.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="center">
        <q-btn color="primary" @click="click(mediumValue, 1.4)"> Invest </q-btn>
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
            10050 - 20000
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
            >€ {{ largeValue * 1.6 }}</span
          >
        </div>
        <div class="text-caption text-grey">
          All investment plans lock your investment for 100 days. With large
          gain investment you get
          <span style="color: green"><b>profit of 60% after 100 days</b></span
          >. Everything else is on Juicy Gain.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="center">
        <q-btn color="primary" @click="click(largeValue, 1.6)"> Invest </q-btn>
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
          Investment of:
          <span class="q-px-sm" style="background-color: black; color: white"
            >€ {{ myValue }}</span
          ><br />
          Gain projections:
          <span class="q-px-sm" style="background-color: black; color: white"
            >€ {{ myValue * multiplier }}</span
          >
        </p>
        <div class="text-caption text-grey">
          After you confirm your investment plan, your investment will apear
          <span style="color: green"><b>under "My investments"</b></span> in
          menu. There
          <span style="color: green"><b>you can pay or cancel it</b></span
          >.
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn
          label="Confirm"
          color="primary"
          v-close-popup
          @click="invest()"
          href="/#/my_investments"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { collection, addDoc } from "firebase/firestore";
import db from "src/boot/firebase";
import { getAuth } from "@firebase/auth";

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
      multiplier: 0,
    };
  },

  methods: {
    invest() {
      let newInvestment = {
        invested: this.myValue,
        gain: this.myValue * this.multiplier,
        email: getAuth().currentUser.email,
        status: "unpaid",
      };

      const docRef = addDoc(collection(db, "investments"), newInvestment);

      this.$q.notify({
        type: "positive",
        message: "Successfully confirmed investment plan.",
      });
    },

    click(num, multiply) {
      this.myValue = num;
      this.openInvest = true;
      this.multiplier = multiply;
    },
  },
});
</script>

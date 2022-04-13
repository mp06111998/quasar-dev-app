<template>
  <q-page class="q-pa-md" style="background-color: lightgrey">
    <q-card class="my-card" style="max-width: ">
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
      <q-card-actions align="right">
        <q-btn color="primary" @click="pay()"> Payment </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>

  <q-dialog
    v-model="openPay"
    transition-show="rotate"
    transition-hide="rotate"
    persistent
  >
    <q-card>
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Pay investment</div>
      </q-card-section>

      <q-card-section class="q-py-lg">
        <p>
          Only current payment on platform is with crypto. Investment
          <br />of
          <span class="q-px-sm" style="background-color: black; color: white"
            >€ 22</span
          >. Note that you need to pay Gas Fee too.
        </p>

        <div style="text-align: center">
          <q-img
            style="max-width: 55%; max-height: 55%"
            src="~assets/pay.png"
          />
        </div>

        <div class="text-caption text-grey">
          After you pay your investment plan and we sucessfully confirm it,
          <br />
          your investment will go live.
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn label="Ok" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "My Investments",

  data() {
    return {
      progress1: 0.42,
      openPay: false,
    };
  },

  methods: {
    progressLabel1() {
      return this.progress1 * 100 + "%";
    },
    pay() {
      this.openPay = true;
    },
  },
});
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
    rel="stylesheet"
  />
  <q-page style="background-color: lightgrey">
    <div
      v-if="this.investments.length == 0"
      class="q-pa-md"
      style="text-align: center; padding-top: 60px"
    >
      <div class="text-caption">
        No investment yet. Go
        <span style="color: green"><b>under "Investment plans"</b></span> in
        menu.<br />There
        <span style="color: green"><b>you can choose investment plans</b></span
        >.
      </div>
    </div>
    <!--<div style="background-color: white" class="bg-image">
      <div class="justify-center full-height full-width text-center myFont">
        <div style="color: white; font-size: 70px; height: 200px"></div>
      </div>
    </div>-->
    <!-- <q-img style="height: 220px" src="~assets/my.jpeg" /> -->

    <div class="q-pa-md" v-for="item in this.investments" v-bind:key="item">
      <q-card class="my-card" style="max-width: 1100px; margin: 0 auto">
        <q-card-section>
          <div class="text-h6 q-mb-xs">My Gain</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="row">
          <div class="col-12 col-sm-4 col-md-4">
            <span>Invested amount:&nbsp;</span>
            <span class="q-px-sm" style="background-color: black; color: white"
              >€ {{ item.invested }}</span
            ><br />
            <span>Gain projections:&nbsp;</span>
            <span class="q-px-sm" style="background-color: black; color: white"
              >€ {{ item.gain }}</span
            ><br />
            <span>Status:&nbsp;</span>
            <q-badge rounded color="red" v-if="item.status == 'unpaid'">
              UNPAID
            </q-badge>
            <q-badge rounded color="green" v-if="item.status == 'live'">
              LIVE
            </q-badge>
            <q-badge
              rounded
              color="orange"
              v-if="item.status == 'withdrawable'"
            >
              WITHDRAWABLE
            </q-badge>
          </div>
          <br />
          <div class="col-12 col-sm-1 col-md-0"></div>
          <br />
          <div class="col-12 col-sm-7 col-md-8">
            <q-linear-progress
              size="18px"
              stripe
              :value="calculateProcentage(item.date)"
              color="black"
            >
              <div class="absolute-full flex flex-center">
                <q-badge
                  color="white"
                  text-color="black"
                  :label="progressLabel1(item.date)"
                />
              </div>
            </q-linear-progress>
            <br />
            <div class="text-caption text-grey" v-if="item.status == 'live'">
              <!-- v-if="item.status == 'live'" -->
              Investment payed on
              {{ calculateToDate(item.date) }}. And will be withdrawable on
              {{ calculateEndDate(item.date) }}.
            </div>
            <div class="text-caption text-grey" v-if="item.status == 'unpaid'">
              <!-- v-if="item.status == 'live'" -->
              Investment is not payed yet.
            </div>
            <div
              class="text-caption text-grey"
              v-if="item.status == 'withdrawable'"
            >
              <!-- v-if="item.status == 'live'" -->
              Congrats! You can withdraw your money.
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <!--<div class="q-gutter-md" style="margin-right: 5px; font-size: 1.5em">
            <q-icon name="info" />
            <q-tooltip
              anchor="top middle"
              self="center middle"
              style="max-width: 150px"
            >
              After you pay your investment plan and we sucessfully confirm it,
              your investment will go live. After 100 days button "withdraw"
              will enable and you will be able to withdraw your gains.
            </q-tooltip>
          </div>-->
          <q-btn
            flat
            color="primary"
            :disabled="item.status != 'unpaid'"
            v-if="item.status == 'unpaid'"
            @click="cancel(item)"
          >
            Cancel
          </q-btn>
          <q-btn
            color="primary"
            :disabled="item.status != 'unpaid'"
            v-if="item.status == 'unpaid'"
            @click="pay(item.invested)"
          >
            Pay
          </q-btn>
          <q-btn
            color="primary"
            :disabled="item.status != 'withdrawable'"
            v-if="item.status != 'unpaid'"
            @click="withdraw()"
          >
            Withdraw
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>

  <q-dialog
    v-model="openPay"
    transition-show="rotate"
    transition-hide="rotate"
    persistent
  >
    <q-card style="max-width: 410px">
      <q-card-section class="bg-black text-white">
        <div class="text-h6">Pay investment</div>
      </q-card-section>

      <q-card-section class="q-py-lg">
        <p>
          Only current payment on platform is with crypto Tether (USDT).
          Investment of
          <span class="q-px-sm" style="background-color: black; color: white"
            >€ {{ this.currentInvestedAmount }}</span
          >. Note that you need to pay Gas Fee too.
        </p>
        <div style="text-align: center">
          <q-img
            style="max-width: 40%; max-height: 40%"
            src="~assets/tether.png"
          />
        </div>
        <br />
        <q-input
          v-model="cryptoNetwork"
          rounded
          standout
          dense
          type="text"
          bg-color="lightgrey"
          label-color="black"
          input-style="color: black"
          readonly
          hide-bottom-space
          label="Network"
          style="width: 300px; margin: 0 auto"
        />
        <br />
        <q-input
          v-model="cryptoId"
          rounded
          standout
          dense
          type="text"
          bg-color="lightgrey"
          label-color="black"
          input-style="color: black"
          readonly
          hide-bottom-space
          @click="onCryptoId()"
          label="USDT Deposit Address"
          style="width: 300px; margin: 0 auto"
        />
        <br />
        <!--<div style="text-align: center">
          <q-img
            style="max-width: 55%; max-height: 55%"
            src="~assets/pay.png"
          />
        </div>-->

        <div class="text-caption text-grey">
          After you pay your investment plan and we sucessfully confirm it, your
          investment will go live.
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn label="Ok" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog
    v-model="openCancel"
    transition-show="rotate"
    transition-hide="rotate"
    persistent
  >
    <q-card style="max-width: 410px">
      <q-card-section class="bg-black text-white">
        <div class="text-h6">Cancel investment</div>
      </q-card-section>

      <q-card-section class="q-py-lg">
        <p>Are you sure you want to cancel this investment?</p>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat label="No" color="primary" v-close-popup />
        <q-btn
          label="Yes"
          color="primary"
          @click="cancelConfirm()"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db from "src/boot/firebase";
import { getAuth } from "@firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { copyToClipboard } from "quasar";
import { Timestamp } from "firebase/firestore";
import moment from "moment";

export default defineComponent({
  name: "My Investments",

  data() {
    return {
      openPay: false,
      openCancel: false,
      cancelItem: null,
      cryptoNetwork: "Tron (TRC20)",
      cryptoId: "TF1iT5rygTEFpugDoYfgD2TjPD79b6AgAU",
      currentInvestedAmount: null,
      investments: [],
    };
  },

  methods: {
    progressLabel1(date) {
      return Math.round(this.calculateProcentage(date) * 100) + "%";
    },
    calculateProcentage(date) {
      if (date == undefined || date == null) {
        return 0;
      }

      let start = moment(date.toDate());
      let end = moment(new Date());

      let duration = moment.duration(end.diff(start));
      let days = duration.asDays();

      return Math.floor(days) / 100;
    },
    calculateToDate(date) {
      /*return date.toDate();*/
      return moment(String(date.toDate())).format("DD.MM.YYYY");
    },
    calculateEndDate(date) {
      /*return date.toDate();*/

      /* new Date() */

      return moment(moment(date.toDate()).add(100, "days").toDate()).format(
        "DD.MM.YYYY"
      );
    },
    cancel(item) {
      this.cancelItem = item;
      this.openCancel = true;
      /*db.collection("investments")
        .doc(item.id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });*/
    },
    async cancelConfirm() {
      this.$q.notify({
        type: "warning",
        message: "Investment plan successfully canceled.",
      });
      await deleteDoc(doc(db, "investments", this.cancelItem.id));
    },
    onCryptoId() {
      copyToClipboard(this.cryptoId);

      this.$q.notify({
        type: "info",
        message: "Deposit Address successfully copied.",
      });
    },
    pay(amount) {
      /*const q = query(
        collection(db, "investments"),
        where("email", "==", getAuth().currentUser.email)
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let usersChange = change.doc.data();
          if (change.type === "added") {
            //console.log("New user: ", usersChange);
            //console.log(usersChange);
            console.log("#####################");
            this.investments = usersChange;
            console.log(this.investments);
            console.log("#####################");
            //console.log(this.users.length);
          }
          if (change.type === "modified") {
            //console.log("Modified user: ", usersChange);
          }
          if (change.type === "removed") {
            //console.log("Removed user: ", usersChange);
          }
        });
      });*/
      this.currentInvestedAmount = amount;
      this.openPay = true;
    },
  },

  created() {
    const q = query(
      collection(db, "investments"),
      where("email", "==", getAuth().currentUser.email)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let usersChange = change.doc.data();
        usersChange.id = change.doc.id;
        if (change.type === "added") {
          //console.log("New user: ", usersChange);
          //console.log(usersChange);
          this.investments.unshift(usersChange);
          //console.log(this.users.length);
        }
        if (change.type === "modified") {
          //console.log("Modified user: ", usersChange);
        }
        if (change.type === "removed") {
          //console.log("Removed user: ", usersChange);
          let index = this.investments.findIndex(
            (investment) => investment.id === usersChange.id
          );
          this.investments.splice(index, 1);
        }
      });
    });
  },
});
</script>

<style>
.bg-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(~assets/background.jpg);
  background-size: cover;
}
</style>

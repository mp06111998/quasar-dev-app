<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
    rel="stylesheet"
  />
  <q-page style="background-color: lightgrey">
    <div v-if="this.investments.length == 0" class="q-pa-md">
      No investments yet
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
          <q-linear-progress size="18px" :value="progress1" color="black">
            <div class="absolute-full flex flex-center">
              <q-badge
                color="white"
                text-color="black"
                :label="progressLabel1()"
              />
            </div>
          </q-linear-progress>
          <br />
          <div class="text-caption text-grey">
            <!-- v-if="item.status == 'live'" -->
            Investment payed on 24.06.2022. And will be withdrawable on
            30.10.2022.
          </div>
          <br />
          <span>Invested amount:&nbsp;</span>
          <span class="q-px-sm" style="background-color: black; color: white"
            >€ {{ item.invested }}</span
          >
          <span>&nbsp;&nbsp;&nbsp;&nbsp;Gain projections:&nbsp;</span>
          <span class="q-px-sm" style="background-color: black; color: white"
            >€ {{ item.gain }}</span
          >
          <span>&nbsp;&nbsp;&nbsp;&nbsp;Status:&nbsp;</span>
          <q-badge rounded color="red" v-if="item.status == 'unpaid'">
            UNPAID
          </q-badge>
          <q-badge rounded color="green" v-if="item.status == 'live'">
            LIVE
          </q-badge>
          <q-badge rounded color="orange" v-if="item.status == 'withdrawable'">
            WITHDRAWABLE
          </q-badge>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <div class="q-gutter-md" style="margin-right: 5px; font-size: 1.5em">
            <q-icon name="info" />
            <q-tooltip
              anchor="top middle"
              self="center middle"
              style="max-width: 150px"
            >
              After you pay your investment plan and we sucessfully confirm it,
              your investment will go live. After 60 days button "withdraw" will
              enable and you will be able to withdraw your gains.
            </q-tooltip>
          </div>
          <q-btn color="primary" @click="pay()"> Payment </q-btn>
          <q-btn color="primary" disabled @click="pay()"> Withdraw </q-btn>
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
        <div style="text-align: center">
          <q-img
            style="max-width: 40%; max-height: 40%"
            src="~assets/tether.png"
          />
        </div>
        <br />
        <p>
          Only Ethereum blockchain. Only current payment on platform is with
          crypto Tether. Investment of
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
</template>

<script>
import { defineComponent } from "vue";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db from "src/boot/firebase";
import { getAuth } from "@firebase/auth";

export default defineComponent({
  name: "My Investments",

  data() {
    return {
      progress1: 0.42,
      openPay: false,
      investments: [],
    };
  },

  methods: {
    progressLabel1() {
      return this.progress1 * 100 + "%";
    },
    pay() {
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

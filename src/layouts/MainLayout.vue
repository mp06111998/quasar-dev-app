<template>
  <q-layout
    view="hHh LpR fFf
"
  >
    <!-- hHh lpR fFf -->
    <q-header elevated>
      <q-toolbar style="height: 100px">
        <q-btn
          v-if="!leftDrawerOpen"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <img
            v-if="!$q.screen.lt.md"
            alt="Knight gain logo"
            src="~assets/logoNew.png"
            style="width: 180px; margin-top: 10px"
          />
          <img
            v-if="$q.screen.lt.md"
            alt="Knight gain logo"
            src="~assets/logo2.png"
            style="width: 60px; margin-top: 10px; margin-left: -15px"
          />
        </q-toolbar-title>

        <q-btn-dropdown
          flat
          dense
          round
          icon="account_circle"
          aria-label="Menu"
          :label="!$q.screen.lt.md ? getName : null"
          @click="toggleAccount"
        >
          <q-list>
            <!--<q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Profile</q-item-label>
              </q-item-section>
            </q-item>-->

            <q-item clickable v-close-popup @click="openSettings()">
              <q-item-section>
                <q-item-label>My Account</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="onLogOut()" href="/#/">
              <q-item-section>
                <q-item-label>Log Out</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      style="background-color: #000000"
    >
      <img
        v-if="$q.screen.lt.md"
        alt="Knight gain logo"
        src="~assets/logoNew.png"
        style="width: 180px; margin-top: 10px; margin-left: 20px"
      />

      <q-list>
        <EssentialLink
          style="color: white"
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

  <q-dialog
    v-model="settings"
    transition-show="rotate"
    transition-hide="rotate"
    persistent
  >
    <q-card style="max-width: 410px">
      <q-card-section class="bg-black text-white">
        <div class="text-h6">My Account</div>
      </q-card-section>

      <q-card-section class="q-py-lg">
        <!--<p>
          Only current payment on platform is with crypto Tether (USDT).
          Investment of
          <span class="q-px-sm" style="background-color: black; color: white"
            >€ {{ this.currentInvestedAmount }}</span
          >. Note that you need to pay Gas Fee too.
        </p>-->
        <q-input
          v-model="this.user.firstName"
          rounded
          standout
          dense
          readonly
          type="text"
          bg-color="lightgrey"
          label-color="black"
          input-style="color: black"
          label="First Name"
          hide-bottom-space
          style="width: 300px; margin: 0 auto"
        />
        <br />
        <q-input
          v-model="this.user.lastName"
          rounded
          standout
          dense
          readonly
          type="text"
          bg-color="lightgrey"
          label-color="black"
          input-style="color: black"
          label="Last Name"
          hide-bottom-space
          style="width: 300px; margin: 0 auto"
        />
        <br />
        <q-input
          v-model="this.user.email"
          rounded
          standout
          dense
          readonly
          type="text"
          bg-color="lightgrey"
          label-color="black"
          input-style="color: black"
          label="Email"
          hide-bottom-space
          style="width: 300px; margin: 0 auto"
        />
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn label="Ok" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Investment plans",
    icon: "paid",
    to: "/investment_plans",
  },
  {
    title: "My investments",
    icon: "account_balance",
    to: "/my_investments",
  },
  /*{
    title: "Calendar",
    icon: "calendar_month",
    to: "/calendar",
  },*/
  {
    title: "Greenpaper",
    icon: "description",
    to: "/green_paper",
  },
  {
    title: "Support",
    icon: "support_agent",
    to: "/support",
  },
];

import db from "src/boot/firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { defineComponent, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { reject } from "q";
import { removeListener } from "process";

export default defineComponent({
  name: "MainLayout",

  data() {
    return {
      settings: false,
      users: [],
      user: null,
    };
  },

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      toggleAccount() {},

      getName: getAuth().currentUser.email,
    };
  },

  methods: {
    onLogOut() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push("/");
      });
    },

    async openSettings() {
      const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
      this.getUserByEmail();
      await sleep(1000);

      this.settings = true;
      this.user = this.users[0];
    },

    getUserByEmail() {
      const q = query(
        collection(db, "users"),
        where("email", "==", getAuth().currentUser.email)
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let usersChange = change.doc.data();
          if (change.type === "added") {
            //console.log("New user: ", usersChange);
            //console.log(usersChange);
            this.users.unshift(usersChange);
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

    /*getCurrentUser() {
      return new Promise((resolve, reject) => {
        removeListener = onAuthStateChanged(
          getAuth,
          (user) => {
            removeListener();
            resolve(user);
          },
          reject
        );
      });
    },*/
  },

  beforeRouteEnter(to, from, next) {
    //async
    if (getAuth().currentUser) {
      //await getCurrentUser()
      next();
    } else {
      /*alert(
        "You don't have access! Sign in with your account or register one."
      );*/
      next("/");
    }
    next();
  },
});
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
  />
  <q-page class="q-pa-md bg-image">
    <div class="justify-center full-height full-width text-center myFont">
      <h2 style="color: white">Sign In</h2>
    </div>
    <br />
    <q-input
      v-model="email"
      rounded
      standout
      dense
      type="email"
      bg-color="white"
      label-color="black"
      input-style="color: black"
      label="Email"
      hide-bottom-space
      :error="emailError || emailReqError"
      :error-message="emailError ? 'This is a required field!' : null"
      @click="onEmailInput()"
      style="width: 300px; margin: 0 auto"
    />
    <br />
    <q-input
      v-model="password"
      rounded
      standout
      dense
      type="password"
      bg-color="white"
      label-color="black"
      input-style="color: black"
      label="Password"
      @keyup.enter="signIn()"
      hide-bottom-space
      :error="passwordError || passwordReqError"
      :error-message="
        passwordError
          ? 'This is a required field!'
          : 'Incorrect email address or password!'
      "
      @click="onPasswordInput()"
      style="width: 300px; margin: 0 auto"
    />
    <br />
    <div style="width: 82px; margin: 0 auto">
      <q-btn
        class="glossy"
        color="white"
        @click="signIn()"
        rounded
        text-color="black"
        v-if="!isLoading"
      >
        Sign in
      </q-btn>
      <q-spinner color="white" size="3em" v-if="isLoading" class="q-ml-md" />
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="row">
      <div class="col-1 col-md-4 myFont" style="text-align: left; color: white">
        <!--<a style="color: white; font-size: 30px"
          ><i style="width: 40px" class="las la-map-marker-alt"></i
        ></a>
        Ljubljana, Slovenia
        <br />
        <a style="color: white; font-size: 30px"
          ><i style="width: 40px" class="las la-envelope"></i
        ></a>
        juicygain@gmail.com -->
      </div>
      <div
        class="col-3 col-md-2 myFont"
        style="text-align: center; color: white"
      >
        <a href="/#/greenpaper" style="color: white; text-decoration: none"
          >Greenpaper</a
        >
        <br />
        <br />
        <a
          href="/#/terms_and_conditions"
          style="color: white; text-decoration: none"
          >Terms and Conditions</a
        >
      </div>
      <div class="col-5 col-md-2 myFont" style="text-align: center">
        <a href="/#/impressum" style="color: white; text-decoration: none"
          >Impressum</a
        >
        <br />
        <br />
        <a href="/#/privacy_policy" style="color: white; text-decoration: none"
          >Privacy Policy</a
        >
      </div>
      <div
        class="col-1 col-md-4 myFont"
        style="text-align: right; color: white"
      >
        <!-- <q-btn
          fab
          color="primary"
          class="lab la-youtube"
          style="font-size: 30px"
        /> -->
        <!--<a
          href="http://juicytelegram.com/"
          target="_blank"
          style="color: white; text-decoration: none"
          ><span v-if="!$q.screen.lt.md">Telegram</span
          ><i style="width: 40px; font-size: 30px" class="lab la-telegram"></i
        ></a>
        <br />-->
        <a
          href="https://www.instagram.com/knightgain/"
          target="_blank"
          style="color: white; text-decoration: none"
          ><span v-if="!$q.screen.lt.md">Instagram</span
          ><i style="width: 40px; font-size: 30px" class="lab la-instagram"></i
        ></a>
        <br />
        <a
          href="https://www.youtube.com/channel/UCse9wDIa_u6Yh3IdVHp5wOQ"
          target="_blank"
          style="color: white; text-decoration: none"
          ><span v-if="!$q.screen.lt.md">Youtube</span
          ><i style="width: 40px; font-size: 30px" class="lab la-youtube"></i
        ></a>
      </div>
    </div>
  </q-page>
</template>

<script>
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
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { computed } from "vue";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";

export default defineComponent({
  name: "Home",

  data() {
    return {
      test: true,
      email: "",
      password: "",
      users: [],
      emailError: false,
      emailReqError: false,
      passwordError: false,
      passwordReqError: false,
      isLoading: false,
    };
  },

  methods: {
    printamo() {
      return this.test;
    },

    onEmailInput() {
      this.emailError = false;
      this.emailReqError = false;
    },
    onPasswordInput() {
      this.passwordError = false;
      this.passwordReqError = false;
    },

    checkForErrors() {
      let error = false;

      if (this.email === "") {
        this.emailError = true;
        error = true;
      }
      if (this.password === "") {
        this.passwordError = true;
        error = true;
      }

      return error;
    },

    getUserLogin() {
      const q = query(
        collection(db, "users"),
        where("email", "==", this.email),
        where("password", "==", this.password)
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

    async signIn() {
      if (!this.checkForErrors()) {
        this.isLoading = true;
        const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
        this.getUserLogin();
        await sleep(1000);

        if (!this.users.length == 0) {
          this.users = [];

          /*this.$router.push("/investment_plans");*/
          const auth = getAuth();
          signInWithEmailAndPassword(getAuth(), this.email, this.password)
            .then((data) => {
              this.$router.push("/investment_plans");
              this.isLoading = false;
            })
            .catch((error) => {
              alert(error.message);
              this.isLoading = false;
            });
        } else {
          this.emailReqError = true;
          this.passwordReqError = true;
          this.users = [];
          this.isLoading = false;
        }
      }
      /*const auth = getAuth();
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          console.log("login");
          console.log(auth.currentUser);
          this.$router.push("/investment_plans");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });*/
    },
  },

  setup() {
    const $q = useQuasar();
    const buttonColor = computed(() => {
      return $q.screen.lt.md ? true : false;
    });

    return { buttonColor };
  },
});
</script>

<style>
.bg-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(~assets/background.jpg);
  background-size: cover;
}

div .q-field__messages {
  font-size: 14px;
  font-weight: bold;
  color: red !important;
}
</style>

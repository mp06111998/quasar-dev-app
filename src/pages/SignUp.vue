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
      <h2 style="color: white">Sign Up</h2>
    </div>
    <br />
    <q-input
      v-model="firstName"
      rounded
      standout
      dense
      type="text"
      bg-color="white"
      label-color="black"
      input-style="color: black"
      label="First Name"
      hide-bottom-space
      :error="firstNameError"
      error-message="This is a required field!"
      @click="onFirstNameInput()"
      style="width: 300px; margin: 0 auto"
    />
    <br />
    <q-input
      v-model="lastName"
      rounded
      standout
      dense
      type="text"
      bg-color="white"
      label-color="black"
      input-style="color: black"
      label="Last Name"
      hide-bottom-space
      :error="lastNameError"
      error-message="This is a required field!"
      @click="onLastNameInput()"
      style="width: 300px; margin: 0 auto"
    />
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
      :error="emailError || emailReqError || emailUsedError"
      :error-message="
        emailError
          ? 'This is a required field!'
          : emailUsedError
          ? 'This email has already been taken!'
          : 'Invalid email address!'
      "
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
      hide-bottom-space
      :error="passwordError || passwordReqError"
      :error-message="
        passwordError
          ? 'This is a required field!'
          : 'The password must contain at least six characters!'
      "
      @click="onPasswordInput()"
      style="width: 300px; margin: 0 auto"
    />
    <br />
    <div class="q-gutter-sm text-center">
      <q-checkbox
        size="xs"
        v-model="left2"
        val="xs"
        dark
        color="green"
        :style="left2Error ? 'color:red' : 'color: white'"
        @click="onLeft2Input()"
        label="I have read and accept Terms and Conditions"
      />
    </div>
    <br />
    <div style="width: 86px; margin: 0 auto">
      <q-btn
        class="glossy"
        color="white"
        @click="signUp()"
        rounded
        text-color="black"
      >
        Sign up
        <!--href="/#/investment_plans"-->
      </q-btn>
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
      <div class="col-4 myFont" style="text-align: left; color: white">
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
      <div class="col-2 myFont" style="text-align: center; color: white">
        <a href="" style="color: white; text-decoration: none"
          >Terms and Conditions</a
        >
        <br />
        <br />
        <a href="" style="color: white; text-decoration: none">Greenpaper</a>
      </div>
      <div class="col-2 myFont" style="text-align: center">
        <a href="" style="color: white; text-decoration: none"
          >Privacy policy</a
        >
        <br />
        <br />
        <a href="" style="color: white; text-decoration: none">Impressum</a>
      </div>
      <div class="col-4 myFont" style="text-align: right; color: white">
        <!-- <q-btn
          fab
          color="primary"
          class="lab la-youtube"
          style="font-size: 30px"
        /> -->
        <a
          href="http://juicytelegram.com/"
          target="_blank"
          style="color: white; text-decoration: none"
          ><span v-if="!$q.screen.lt.md">Telegram</span
          ><i style="width: 40px; font-size: 30px" class="lab la-telegram"></i
        ></a>
        <br />
        <a
          href="https://www.instagram.com/juicygain/"
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

export default defineComponent({
  name: "Home",

  data() {
    return {
      test: true,
      email: "",
      password: "",
      left2: false,
      firstName: "",
      lastName: "",
      users: [],
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      emailReqError: false,
      emailUsedError: false,
      passwordError: false,
      passwordReqError: false,
      left2Error: false,
    };
  },

  methods: {
    printamo() {
      return this.test;
    },

    getUserByEmail() {
      const q = query(
        collection(db, "users"),
        where("email", "==", this.email)
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

    /*async signUp() {
      let newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };

      // check if email exists
      this.getUserByEmail();

      console.log("izveden zapis");
      if (this.users.length == 0) {
        // save user
        const docRef = await addDoc(collection(db, "users"), newUser);
      } else {
        this.emailError = true;
        this.users = [];
      }
    },*/

    onFirstNameInput() {
      this.firstNameError = false;
    },
    onLastNameInput() {
      this.lastNameError = false;
    },
    onEmailInput() {
      this.emailError = false;
      this.emailReqError = false;
      this.emailUsedError = false;
    },
    onPasswordInput() {
      this.passwordError = false;
      this.passwordReqError = false;
    },
    onLeft2Input() {
      this.left2Error = false;
    },

    checkForErrors() {
      let error = false;

      if (this.firstName === "") {
        this.firstNameError = true;
        error = true;
      }
      if (this.lastName === "") {
        this.lastNameError = true;
        error = true;
      }
      if (this.email === "") {
        this.emailError = true;
        error = true;
      }
      if (!this.isEmailValid(this.email)) {
        this.emailReqError = true;
        error = true;
      }
      if (this.password === "") {
        this.passwordError = true;
        error = true;
      }
      if (this.password.length < 6) {
        this.passwordReqError = true;
        error = true;
      }
      if (this.left2 == false) {
        this.left2Error = true;
        error = true;
      }

      return error;
    },

    isEmailValid(email) {
      let regex = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
      return regex.test(email);
    },

    async signUp() {
      if (!this.checkForErrors()) {
        let newUser = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        };

        // check if email exists (fill table users with match email)
        const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
        this.getUserByEmail();
        await sleep(1000);

        if (this.users.length == 0) {
          // save user
          const docRef = await addDoc(collection(db, "users"), newUser);
          this.users = [];

          this.$router.push("/sign_in");

          this.$q.notify({
            type: "positive",
            message: "Sign up successful.",
          });
        } else {
          this.emailUsedError = true;
          this.users = [];
        }
      }
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

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
        style="color: white"
        label="I have read and accept Terms and Conditions"
      />
    </div>
    <br />
    <div style="width: 86px; margin: 0 auto">
      <q-btn
        class="glossy"
        color="white"
        @click="signIn()"
        rounded
        text-color="black"
        href="/#/investment_plans"
      >
        Sign up
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
        <a style="color: white; font-size: 30px"
          ><i style="width: 40px" class="las la-map-marker-alt"></i
        ></a>
        Ljubljana, Slovenia
        <br />
        <a style="color: white; font-size: 30px"
          ><i style="width: 40px" class="las la-envelope"></i
        ></a>
        juicygain@gmail.com
      </div>
      <div class="col-2 myFont" style="text-align: center; color: white">
        <a href="" style="color: white; text-decoration: none">Greenpaper</a>
        <br />
        <br />
        <a href="" style="color: white; text-decoration: none">Impressum</a>
      </div>
      <div class="col-2 myFont" style="text-align: center">
        <a href="" style="color: white; text-decoration: none"
          >Terms and Conditions</a
        >
        <br />
        <br />
        <a href="" style="color: white; text-decoration: none"
          >Privacy policy</a
        >
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
          >Telegram<i
            style="width: 40px; font-size: 30px"
            class="lab la-telegram"
          ></i
        ></a>
        <br />
        <a
          href="https://www.instagram.com/juicygain/"
          target="_blank"
          style="color: white; text-decoration: none"
          >Instagram<i
            style="width: 40px; font-size: 30px"
            class="lab la-instagram"
          ></i
        ></a>
        <br />
        <a
          href="https://www.youtube.com/channel/UCse9wDIa_u6Yh3IdVHp5wOQ"
          target="_blank"
          style="color: white; text-decoration: none"
          >Youtube<i
            style="width: 40px; font-size: 30px"
            class="lab la-youtube"
          ></i
        ></a>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

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
    };
  },

  methods: {
    printamo() {
      return this.test;
    },
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

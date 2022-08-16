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
      <h2 style="color: white" v-if="$q.screen.lt.md">
        Automated Sure Betting Platform
      </h2>
      <h3 style="color: lightgrey" v-if="$q.screen.lt.md">
        Who needs bitcoin, when you have Juicy Gain?
      </h3>
      <h5 style="color: white" v-if="$q.screen.lt.md">
        Become <span style="color: lightgrey">investor</span> and benefit from
        the booming gains.
        <br />
        Be among <span style="color: lightgrey">the first</span> to join the
        movement.
      </h5>

      <h1 style="color: white" v-if="!$q.screen.lt.md">
        Automated Sure Betting Platform
      </h1>
      <h2 style="color: lightgrey" v-if="!$q.screen.lt.md">
        Who needs bitcoin, when you have Juicy Gain?
      </h2>
      <h4 style="color: white" v-if="!$q.screen.lt.md">
        Become <span style="color: lightgrey">investor</span> and benefit from
        the booming gains.
        <br />
        Be among <span style="color: lightgrey">the first</span> to join the
        movement.
      </h4>
    </div>
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
        <a href="/#/green_paper" style="color: white; text-decoration: none"
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
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { computed } from "vue";

export default defineComponent({
  name: "Home",

  data() {
    return {
      test: true,
    };
  },

  methods: {
    printamo() {
      return this.test;
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
</style>

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
      <h1 style="color: white">Investing Platform</h1>
      <h2 style="color: lightgrey">
        Who needs bitcoin, when you have Juicy Gain?
      </h2>
      <h4 style="color: white">
        Become <span style="color: lightgrey">investor</span> and benefit from
        the booming gains
        <br />
        Be among <span style="color: lightgrey">the first</span> to join the
        movement
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

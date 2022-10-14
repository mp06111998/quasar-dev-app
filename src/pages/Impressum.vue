<!--<template>
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
  <q-page
    class="flex flex-center"
    style="background-color: lightgrey; padding: 2% 5% 2% 5%"
  >
    <div
      style="
        background-color: white;
        padding: 5% 10% 8% 10%;
        border-radius: 100px;
      "
      class="bg-logo"
    >
      <h4><b>Impressum</b></h4>
      <div style="font-size: 22px"><b>Juicy Gain Platform</b></div>
      <br />
      <div style="font-size: 10px; color: grey">Legal address:</div>
      <div style="font-size: 18px">20 Water St, London E14 5GX</div>
      <div style="font-size: 18px">London, United Kingdom</div>
      <br />
      <div style="font-size: 10px; color: grey">E-mail:</div>
      <div style="font-size: 18px">info.knightgain@gmail.com</div>
      <br />
      <div style="font-size: 10px; color: grey">Social media:</div>
      <div style="font-size: 18px">
        <a
          href="https://www.instagram.com/knightgain/"
          target="_blank"
          style="text-decoration: none"
          >Juicy Gain Instagram</a
        >
      </div>
      <div style="font-size: 18px">
        <a
          href="https://www.youtube.com/channel/UCse9wDIa_u6Yh3IdVHp5wOQ"
          target="_blank"
          style="text-decoration: none"
          >Juicy Gain Youtube</a
        >
      </div>
    </div>
  </q-page>
</template>-->
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
  <q-page class="flex flex-center" style="background-color: lightgrey">
    <q-card class="my-card q-my-md" style="padding: 0px 30px 30px 30px">
      <q-card-section>
        <!--<q-btn
          fab
          href="https://www.linkedin.com/"
          color="primary"
          icon="lab la-linkedin"
          class="absolute"
          style="top: 80px; right: -50px; transform: translateY(-50%)"
        />-->

        <q-btn
          fab
          href="/#/our_roots"
          color="primary"
          icon="las la-users"
          class="absolute"
          style="top: 140px; right: -50px; transform: translateY(-50%)"
        />

        <h4><b>Impressum</b></h4>

        <div style="font-size: 22px"><b>Knight Gain Platform</b></div>
        <br />
        <div style="font-size: 10px; color: grey">Legal address:</div>
        <div style="font-size: 18px">20 Water St, London E14 5GX</div>
        <div style="font-size: 18px">London, United Kingdom</div>
        <br />
        <div style="font-size: 10px; color: grey">E-mail:</div>
        <div style="font-size: 18px">info.knightgain@gmail.com</div>
        <br />
        <div style="font-size: 10px; color: grey">Registered office:</div>
        <div style="font-size: 18px">London, United Kingdom</div>
        <br />
        <div style="font-size: 10px; color: grey">Managing director:</div>
        <div style="font-size: 18px">Andrei Harrison</div>
      </q-card-section>
    </q-card>

    <!--<div
      style="
        background-color: white;
        margin: 5% 10% 5% 10%;
        padding: 0% 10% 5% 10%;
        text-align: justify !important;
        border-radius: 40px;
      "
    >
      <h4><b>Impressum</b></h4>

      <div style="font-size: 22px"><b>Juicy Gain Platform</b></div>
      <br />
      <div style="font-size: 10px; color: grey">Legal address:</div>
      <div style="font-size: 18px">20 Water St, London E14 5GX</div>
      <div style="font-size: 18px">London, United Kingdom</div>
      <br />
      <div style="font-size: 10px; color: grey">E-mail:</div>
      <div style="font-size: 18px">info.knightgain@gmail.com</div>
      <br />
      <div style="font-size: 10px; color: grey">Registered office:</div>
      <div style="font-size: 18px">London, United Kingdom</div>
      <br />
      <div style="font-size: 10px; color: grey">Managing director:</div>
      <div style="font-size: 18px">Andrei Harrison</div>
      <div v-if="$q.screen.lt.md"><br /></div>
    </div>

    <span>
      <div
        style="
          background-color: black;
          height: 40px;
          width: 40px;
          border-radius: 40px;
          text-align: center;
          padding-top: 5px;
        "
      >
        <a
          href="https://www.instagram.com/knightgain/"
          target="_blank"
          style="color: white; text-decoration: none"
          ><i style="width: 40px; font-size: 30px" class="lab la-linkedin"></i
        ></a>
      </div>
      <br />
      <div
        style="
          background-color: black;
          height: 40px;
          width: 40px;
          border-radius: 40px;
          text-align: center;
          padding-top: 5px;
        "
      >
        <a
          href="https://www.instagram.com/knightgain/"
          target="_blank"
          style="color: white; text-decoration: none"
          ><i style="width: 40px; font-size: 30px" class="las la-users"></i
        ></a>
      </div>
    </span>-->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { computed } from "vue";

export default defineComponent({
  name: "TermsAndConditions",

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

.bg-logo {
  background-image: linear-gradient(
      rgb(255, 255, 255, 0.97),
      rgba(255, 255, 255, 0.97)
    ),
    url(~assets/log.jpg);
  background-size: cover;
}
</style>

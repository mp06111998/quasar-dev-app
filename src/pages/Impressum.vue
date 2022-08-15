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
    <div
      style="
        background-color: white;
        padding: 5% 10% 10% 10%;
        border-radius: 100px;
      "
      class="bg-logo"
    >
      <h4><b>Impressum</b></h4>
      <div style="font-size: 18px">Juicy Gain Platform</div>
      <br />
      <div style="font-size: 10px; color: grey">Legal address:</div>
      <div style="font-size: 18px">London, United Kingdom</div>
      <br />
      <div style="font-size: 10px; color: grey">E-mails:</div>
      <div style="font-size: 18px">support_juicygain@gmail.com</div>
      <div style="font-size: 18px">business_juicygain@gmail.com</div>
      <div style="font-size: 18px">legal_juicygain@gmail.com</div>
    </div>
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

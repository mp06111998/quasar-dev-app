<template>
  <q-layout>
    <q-header>
      <q-toolbar style="height: 100px">
        <q-toolbar-title>
          <a href="/#/home">
            <img
              alt="Juicy gain logo"
              src="~assets/logo.png"
              style="width: 180px; margin-top: 10px"
            />
          </a>
        </q-toolbar-title>
        <q-btn
          class="glossy"
          color="white"
          rounded
          text-color="black"
          href="/#/sign_in"
        >
          <span v-if="!$q.screen.lt.md">Sign in&nbsp;</span>
          <q-icon name="login" />
        </q-btn>
        <q-btn
          color="white"
          rounded
          text-color="black"
          class="q-ml-md glossy"
          href="/#/sign_up"
        >
          <span v-if="!$q.screen.lt.md">Sign up&nbsp;</span>
          <q-icon name="app_registration" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";

export default {
  setup() {
    const $q = useQuasar();
    const buttonColor = computed(() => {
      return $q.screen.lt.md ? true : false;
    });

    return { buttonColor };
  },
};
</script>

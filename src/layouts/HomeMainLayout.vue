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
          @click="signIn()"
          rounded
          text-color="black"
          href="/#/sign_in"
        >
          Sign in
        </q-btn>
        <q-btn
          color="white"
          @click="signIn()"
          rounded
          text-color="black"
          class="q-ml-md glossy"
          href="/#/sign_up"
        >
          Sign up
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script></script>

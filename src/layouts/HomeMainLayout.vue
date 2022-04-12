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
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script></script>

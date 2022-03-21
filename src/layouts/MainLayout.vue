<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar style="height: 100px">
        <q-btn
          v-if="!leftDrawerOpen"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <img
            alt="Juicy gain logo"
            src="~assets/logo.png"
            style="width: 180px; margin-top: 10px"
          />
        </q-toolbar-title>

        <q-btn-dropdown
          flat
          dense
          round
          icon="account_circle"
          aria-label="Menu"
          label="marcel"
          @click="toggleAccount"
        >
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Profile</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Settings</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Log Out</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      style="background-color: #000000"
    >
      <q-list>
        <EssentialLink
          style="color: white"
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Investment plans",
    icon: "paid",
    to: "/investment_plans",
  },
  {
    title: "My investments",
    icon: "account_balance",
    to: "/my_investments",
  },
  {
    title: "Calendar",
    icon: "calendar_month",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Greenpaper",
    icon: "description",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Support",
    icon: "support_agent",
    link: "https://forum.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      toggleAccount() {},
    };
  },
});
</script>

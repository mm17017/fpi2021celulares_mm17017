<template>
  <v-app id="inspire">
    <navbars/>
    <v-main class="principal blue lighten-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped>
h3 {
  color: aliceblue;
}

.text-color {
  color: aliceblue;
}
</style>

<script>
import Navbars from "./components/navars/Navbars.vue";

export default {
  components: {
    Navbars,
  },

  Indexdata: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
  }),
};
</script>

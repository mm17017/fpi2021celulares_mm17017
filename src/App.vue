<template>
  <v-app id="inspire">
    <navbars/>
    <v-main class="blue lighten-4 altura">
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
};
</script>

<style scoped>
.altura{
  height: 100%;
}
</style>

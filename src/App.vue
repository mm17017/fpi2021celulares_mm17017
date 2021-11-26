<template>
  <v-app id="inspire">
    <navbars/>
    <v-main class="blue lighten-4 altura">
      <router-view></router-view>
    </v-main>
    <template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
     

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Elaborado por: Christian Meda Margueiz. Carnet: MM17017</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
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
  data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
};
</script>

<style scoped>
.altura{
  height: 100%;
}
</style>

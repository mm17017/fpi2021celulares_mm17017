<template>
  <v-container>
    <br><br>
    <v-row v-for="(articulo, index) in carrito" :key="index">
      <v-col cols="12">
      <carrito :articulo="articulo" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carrito from "../components/carro/Carrito.vue";
import { mapState } from "vuex";
export default {
  components: { Carrito },

  computed: {...mapState(["carrito"])},
};
</script>

<style>
</style>
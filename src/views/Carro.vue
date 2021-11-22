<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card shaped dark class="alinear">
          <v-card-title>
            <h1>
            Costo total: &nbsp;&nbsp;&nbsp;&nbsp;
            $&nbsp;{{calcularCosto}}
            </h1>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-for="(articulo, index) in carrito" :key="index">
      <v-col cols="12">
        <carrito :articulo="articulo" :index="index" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carrito from "../components/carro/Carrito.vue";
import { mapState } from "vuex";
import { mapGetters } from 'vuex'

export default {
  components: { Carrito },
  data:()=>({
    costoTotal:0
  }),

created:{
  costoTotal: 8
},
  computed: { 
    ...mapState(["carrito"]),
    ...mapGetters(['calcularCosto'])

  },
};
</script>

<style>
.alinear{
  display: flex;
  justify-content: right;
}
</style>
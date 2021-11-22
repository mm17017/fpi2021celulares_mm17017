<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card shaped dark class="alinear">
          <v-card-title>
            <h1>
              Costo total: &nbsp;$&nbsp;{{ calcularCosto }}
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
    <v-row>
      <v-col cols="12" >
        <v-btn x-large dark shaped block color="red" @click="enviarCompra">Terminar Compra</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carrito from "../components/carro/Carrito.vue";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { db } from '@/db';

export default {
  components: { Carrito },
  data: () => ({
    costoTotal: 0,
  }),
  methods:{
    enviarCompra(){
      this.carrito.forEach(articulo => {
        let compra = {
          ...articulo,
          nowShop:new Date()
        }
        db.collection('compras').add(compra)
      });
    }
  },
  computed: {
    ...mapState(["carrito"]),
    ...mapGetters(["calcularCosto"]),
  },
};
</script>

<style>
.alinear {
  display: flex;
  justify-content: right;
}
</style>
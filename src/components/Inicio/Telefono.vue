<template>
  <v-card elevation="11" outlined shaped height="400px">
    <v-img
      alt="Contiene algun telefono"
      :src="telefono.fotos[0]"
      class="tam"
    ></v-img>
    <v-card-title class="text-truncate"> {{telefono.titulo}} </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <p>${{telefono.precio}}</p>
      <v-spacer></v-spacer>
      <router-link to="/phone">
        <v-btn color="blue darken1" elevation="25" fab @click="verProducto(telefono)">
          <v-icon dark large> mdi-plus </v-icon>
        </v-btn>
      </router-link>
    </v-card-actions>
    <v-card-text  class="text-truncate">{{telefono.descripcion}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Telefono",
  props:['telefono'],
  methods:{
    verProducto(index){
      this.$store.commit('verTelefono',index)
    }
  }
};

</script>

<style>
.tam {
  width: 100px;
  height: 190px;
  margin: auto;
}
</style>
<template>
  <v-card
    shaped
    elevation="11"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{articulo.titulo}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Costo: $ {{articulo.precio}}
        </v-list-item-title>
        <v-list-item-subtitle>{{articulo.descripcion}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar 
        size="100"
        color="white"

      >
      <v-img width="25%" :src="articulo.fotos[0]"/>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions @click="eliminarArticulo(index)">
      <v-btn
        outlined
        rounded
        color="red"
      >
        Quitar del carrito
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name:'Carrito',
    props:['articulo','index'],
    methods:{
      eliminarArticulo(index){
        this.$store.commit('eliminarTelefonoCarrito',index)
      }
    }

}
</script>

<style>

</style>
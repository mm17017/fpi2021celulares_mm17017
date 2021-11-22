<template>
  <v-card shaped dark class="mx-auto" elevation="10">
    <v-card-text class="white-text">
      <p class="text-h4 text-white">{{detalleTelefono.titulo}}</p>
      <p class="text-h6 text-white">${{detalleTelefono.precio}}</p>

      <div class="text--default">
        <p class="detalles">
{{detalleTelefono.descripcion}}
        </p>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn large block color="success" @click="reveal = true">
          <v-icon large right dark>mdi-eye-plus</v-icon>&nbsp;&nbsp;
          Ver Mas </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--white">Caracteristicas</p>
          <p>Sistema Operativo: {{detalleTelefono.sistema}}</p>
          <p>Pantalla: {{detalleTelefono.pantalla}}</p>
          <p>Marca: {{detalleTelefono.marca}}</p>
          <p>RAM: {{detalleTelefono.ram}}</p>
          <p>ROM: {{detalleTelefono.rom}}</p>
          <p>Estado: {{detalleTelefono.estado}}</p>
          <p>Modelo: {{detalleTelefono.modelo}}</p>
          

        </v-card-text>
                <v-card-text class="pb-0">
          <p class="text-h4 text--white">Informacion del vendedor</p>
          <p>
  {{detalleTelefono.descripcion}}
          </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn block large color="warning" @click="reveal = false"> &nbsp;&nbsp;
              <v-icon large right dark>mdi-eye-remove</v-icon>&nbsp;&nbsp;
              Ver menos</v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
    <v-card-actions class="pt-0">
      <router-link to="/carrito" class="enlace"> 
      <v-btn x-large block color="red" @click="agregarAlCarro(detalleTelefono)"> &nbsp;&nbsp;
        <v-icon large right dark> mdi-cart-plus </v-icon>&nbsp;&nbsp;
        Añadir al Carro
      </v-btn>
      </router-link>
    </v-card-actions>
    
    <v-divider></v-divider>

  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DescripcionPhone",
  data: () => ({
    reveal: false,
  }),
methods:{
  agregarAlCarro(telefono){
    this.$store.commit('agregarCarrito',telefono)
    
  }
},
    computed: {
    ...mapState(["detalleTelefono"]),
  },

};
</script>

<style scoped>
.detalles {
  text-align: center;
  font-size: 20px;
}

.enlace{
  width: 100%;
}
a:link, a:visited, a:active {
    text-decoration:none;
}
</style>
<template>
  <v-card elevation="11" outlined shaped>
    <v-card-title primary-title class="justify-center pie">
      INFORMACION DEL ANUNCIO
    </v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12" lg="12" sm="12">
          <v-text-field
            label="Titulo breve del anuncio"
            placeholder="Titulo"
            outlined
            v-model="infoAnuncio.titulo"
            @keypress="enviarAnuncio"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Vendedor"
            placeholder="Nombre del vendedor"
            outlined
            v-model="infoAnuncio.vendedor"
            @keypress="enviarAnuncio"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Descripcion"
            placeholder="Ingrese una descripcion"
            outlined
            v-model="infoAnuncio.descripcion"
            @keypress="enviarAnuncio" 
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="6">
          <v-text-field label="Telefono" placeholder="2222-2222" outlined v-model="infoAnuncio.telefono" @keypress="enviarAnuncio"/>
        </v-col>
        <v-col cols="6">
          <v-text-field label="Precio" type="number" outlined v-model="infoAnuncio.precio" @keyup="enviarAnuncio"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "InforAnuncioRegister",
  data:()=>({
    infoAnuncio:{
      titulo:'',
      vendedor:'',
      telefono:'',
      precio:''
    },
    enviar : true
  }),
  methods:{
  enviarAnuncio(){
    this.$emit('infoAnuncioRegister',this.infoAnuncio)
  },
  guardar(){
    this.$emit('save',this.enviar)
  },
  cancelar(){
    this.$emit('cancel','cancelar')
  }
  }
  
};
</script>

<style scoped>
.texto {
  text-align: center;
}
.pie {
  padding-top: 1.5rem;
  padding-bottom: 1rem;
}

.row {
  height: 4.5rem;
}
</style>
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
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Vendedor"
            placeholder="Nombre del vendedor"
            outlined
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-text-field label="Telefono" placeholder="2222-2222" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Descripcion"
            placeholder="Ingrese una descripcion"
            outlined
          />
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="4">
          <v-text-field label="Precio" type="number" outlined />
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row  class="justify-center">
        <v-col cols="4" >
          <v-btn shaped color="success" x-large>
            <v-icon large right>mdi-content-save</v-icon>&nbsp;&nbsp;Guardar
          </v-btn>
        </v-col>
        <v-col cols="4" class="justify-center">
          <v-btn dark shaped color="red" x-large>
            <v-icon large right>mdi-close-circle</v-icon>&nbsp;&nbsp;Cancelar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "InforAnuncioRegister",
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
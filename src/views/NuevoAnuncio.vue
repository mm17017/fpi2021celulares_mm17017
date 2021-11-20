<template>
  <v-container>
    <h1 class="text-center">NUEVO ANUNCIO</h1>
    <v-row>
      <!-- Columna para primer formularios -->
      <v-col cols="12" sm="12" lg="4">
        <info-telefono-register @infoTelefono="cargarInfoTelefono" />
      </v-col>
      <!-- columna para segundo formularios -->
      <v-col cols="12" sm="12" lg="8">
        <carga-imagenes @cargarImagen="cargarImagenes" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <info-anuncio-register
          @infoAnuncioRegister="cargaInfoRegister"
          
        />
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="6" lg="4" sm="12" xs="12" class="justify-center">
            <v-btn shaped color="success" x-large block @click="guardar">
              <v-icon x-large right>mdi-content-save</v-icon
              >&nbsp;&nbsp;&nbsp;Guardar
            </v-btn>
          </v-col>
          <v-col cols="6" lg="4" sm="12" xs="12" class="justify-center">
            <v-btn dark shaped color="red" x-large block>
              <v-icon x-large right>mdi-close-circle</v-icon
              >&nbsp;&nbsp;&nbsp;Cancelar
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CargaImagenes from "../components/nuevoanuncio/CargaImagenes.vue";
import InfoAnuncioRegister from "../components/nuevoanuncio/InfoAnuncioRegister.vue";
import InfoTelefonoRegister from "../components/nuevoanuncio/InfoTelefonoRegister.vue";
import {db} from '@/db'

export default {
  name: "NuevoAnuncio",
  data: () => ({
    infoTelefono: {},
    infoAnuncio: {},
    listaImagenes: {},
    nuevoAnuncio: {},
  }),
  components: {
    CargaImagenes,
    InfoTelefonoRegister,
    InfoAnuncioRegister,
  },
  methods: {
    cargarImagenes(ev) {
      
      this.listaImagenes = { ...ev };
    },
    cargaInfoRegister(ev) {
      
      this.infoAnuncio = { ...ev };
    },
    cargarInfoTelefono(ev) {
      this.infoTelefono = { ...ev };
    },
    guardar() {
      console.log('eventoBoton')
        this.nuevoAnuncio = {...this.infoAnuncio,...this.infoTelefono,...this.listaImagenes};
        db.collection('anuncios').add(this.nuevoAnuncio)
      console.log(this.nuevoAnuncio)
    },
  },
};
</script>

<style>
</style>
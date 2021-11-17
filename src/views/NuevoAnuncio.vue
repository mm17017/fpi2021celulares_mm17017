<template>
  <v-container>
      <h1 class="text-center">NUEVO ANUNCIO</h1>
      <v-row>
        <!-- Columna para primer formularios -->
        <v-col cols="12" sm="12" lg="4">
          <info-telefono-register/>
        </v-col>
        <!-- columna para segundo formularios -->
        <v-col cols="12" sm="12" lg="4">
          <carga-imagenes/>
        </v-col>
        <v-col cols="12" sm="12" lg="4">
          <img-phone/>
        </v-col>
      </v-row>
      <v-row>
                <v-col cols="12">
          <info-anuncio-register/>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import CargaImagenes from '../components/nuevoanuncio/CargaImagenes.vue'
import InfoAnuncioRegister from '../components/nuevoanuncio/InfoAnuncioRegister.vue'
import InfoTelefonoRegister from '../components/nuevoanuncio/InfoTelefonoRegister.vue'
import ImgPhone from '../components/phone/ImgPhone.vue'
export default {
  components: { InfoTelefonoRegister, InfoAnuncioRegister , CargaImagenes, ImgPhone},

}
</script>

<style>
    

</style>
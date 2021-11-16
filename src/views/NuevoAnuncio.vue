<template>
  <v-container>
      <h1 class="text-center">NUEVO ANUNCIO</h1>
      <v-row>
        <!-- Columna para primer formularios -->
        <v-col cols="12" sm="12" lg="5">
          <info-telefono-register/>
        </v-col>
        <!-- columna para segundo formularios -->
        <v-col cols="12" sm="12" lg="7">
          <info-anuncio-register/>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import InfoAnuncioRegister from '../components/nuevoanuncio/InfoAnuncioRegister.vue'
import InfoTelefonoRegister from '../components/nuevoanuncio/InfoTelefonoRegister.vue'
export default {
  components: { InfoTelefonoRegister, InfoAnuncioRegister },

}
</script>

<style>

</style>
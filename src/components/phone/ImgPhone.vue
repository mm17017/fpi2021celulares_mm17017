<template>
  <v-card shaped elevation="11" height="500px">
    <v-carousel v-model="model">
      <v-carousel-item v-for="(color, i) in detalleTelefono.fotos" :key="i">
        <v-sheet :color="color" height="100%" tile>
          <viewer>
            <center>
            <img
              alt="Contiene algun telefono"
              :src="color"
              width="60%"
            />
            </center>
          </viewer>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "ImgPhone",
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),

  computed: {
    ...mapState(["detalleTelefono"]),
  },
  tamano() {
    return this.tamano;
  },
};
</script>

<style scoped>
.imagen {
  margin: auto !important;
  width: 20rem;
}
</style>
<template>
  <v-card shaped elevation="11">
    <center>
      <viewer>
        <img
          class="imagen"
          alt="Contiene algun telefono"
          src="@/assets/cel.png"
        />
      </viewer>
    </center>
  </v-card>
</template>

<script>
export default {
  name: "ImgPhone",
};
</script>

<style scoped>
.imagen {
  margin: auto !important;
  width: 20rem;
}
</style>
<template>
  <v-card elevation="11" outlined shaped>
    <v-img
      alt="Contiene algun telefono"
      src="../../assets/cel.png"
      class="tam"
    ></v-img>
    <v-card-title> XIAOMI </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <p>$132.00</p>
      <v-spacer></v-spacer>
      <router-link to="/phone">
        <v-btn color="blue darken1" elevation="25" fab>
          <v-icon dark large> mdi-plus </v-icon>
        </v-btn>
      </router-link>
    </v-card-actions>
    <v-card-text>Bre descripcion del telefono </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Telefono",
};
</script>

<style>
.tam {
  width: 70%;
  margin: auto;
}
</style>
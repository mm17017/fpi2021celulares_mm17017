<template>
  <v-app-bar color="blue darken-3" flat dark>
    <v-container class="py-0 fill-height">
      <h3 class="blue-text d-none d-sm-flex">Phone Store</h3>
      &nbsp;&nbsp;
      <v-avatar class="mr-10 d-none d-sm-flex" color="white darken-1" size="45">
        <v-icon color="blue darken-4" x-large>mdi-cellphone</v-icon>
      </v-avatar>
      <v-spacer></v-spacer>
      <v-responsive max-width="200">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
      <v-spacer></v-spacer>

      <v-responsive class="d-none d-sm-flex">
          <router-link to="/">
        <v-btn class="ma-2" color="success">
            <v-icon right dark> mdi-home </v-icon>&nbsp; Inicio
        </v-btn>
          </router-link>
        <v-btn class="ma-2" color="blue ligthen-1">
          <span class="text-color">
            <v-icon right dark> mdi-call-missed </v-icon>&nbsp; Estadisticas
          </span>
        </v-btn>
        <router-link to="/nuevoanuncio">
          <v-btn class="mx-2" fab dark color="blue lighten-3" small>
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </router-link>
        <v-btn class="mx-2" fab dark color="red">
          <v-icon dark> mdi-cart-plus </v-icon>
        </v-btn>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "BigNavbar",
};
</script>

<style>
h3 {
  color: aliceblue;
}

.text-color {
  color: aliceblue;
}
</style>
<template>
  <v-card dark >
    <v-app-bar color="blue darken-3">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute fixed temporary height="17.5rem" >
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-btn large block :to="{ path: '/' }">
              <v-icon right> mdi-cellphone</v-icon>&nbsp; CellPhone Store
            </v-btn>
          </v-list-item>
          
          <v-divider dark></v-divider>
          <br>
          <v-list-item>
            <v-btn large block color="success" :to="{ path: '/' }">
              <v-icon right> mdi-home </v-icon>&nbsp; Inicio
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn large block color="warning" :to="{ path: '/nuevoanuncio' }">
              <v-icon right> mdi-plus </v-icon> &nbsp; Nuevo Anuncio
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn large block color="red" :to="{ path: '/' }">
              <v-icon right> mdi-cart-plus </v-icon> &nbsp; Añadir al carro
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn large block color="primary" :to="{ path: '/' }">
              <v-icon right> mdi-call-missed </v-icon>&nbsp; Estadisticas
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
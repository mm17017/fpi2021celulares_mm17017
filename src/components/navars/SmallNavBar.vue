<template>
  <v-card>
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

    <v-navigation-drawer  v-model="drawer" absolute temporary app clipped>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-blue--text text--accent-4"
        >
          <v-list-item color="success">
            
            <v-list-item-icon >
                <v-icon right > mdi-home </v-icon>&nbsp; 
            </v-list-item-icon>
            Inicio
          </v-list-item>
          <v-list-item color="primary">
            <v-list-item-icon>
                <v-icon right> mdi-call-missed </v-icon>&nbsp;
            </v-list-item-icon>
             Estadisticas
          </v-list-item>

          <v-list-item color="warning">
            <v-list-item-icon>
                <v-icon right> mdi-plus </v-icon> &nbsp;
            </v-list-item-icon>
             Nuevo Anuncio
          </v-list-item>

          <v-list-item color="red">
            <v-list-item-icon>
                <v-icon right> mdi-cart-plus </v-icon> &nbsp;
            </v-list-item-icon>
          Añadir al carro
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
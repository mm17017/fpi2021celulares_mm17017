<template>
  <v-card>
      <v-container>
    <v-row>
      <v-col cols="12" sm="2">
        <v-select
          :items="items"
          label="Ordenar por:"
          outlined
          prepend-inner-icon="mdi-align-vertical-bottom"
        ></v-select>
      </v-col>
    </v-row>
    </v-container>

    <v-btn color="primary" elevation="11" @click.stop="drawer = !drawer">
      <v-icon>mdi-filter </v-icon>
    </v-btn>
    <v-navigation-drawer v-model="drawer" absolute temporary app clipped right>
      <criterio-busqueda />
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import CriterioBusqueda from "./CriterioBusqueda.vue";
export default {
  name: "FilesSearch",
  data: () => ({
    drawer: false,
    group: null,
  }),
  components: {
    CriterioBusqueda,
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
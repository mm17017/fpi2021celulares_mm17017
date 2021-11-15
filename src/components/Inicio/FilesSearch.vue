<template>
  <v-row class="d-lg-none d-xl-flex">
    <v-col cols="12" lg="1" sm="1">
      <v-card>
        <v-container>
          <v-row>
            <v-col cols="8">
              <v-select
                class="altura"
                :items="items"
                label="Ordenar por:"
                outlined
                prepend-inner-icon="mdi-align-vertical-bottom"
              ></v-select>
            </v-col>
            <v-col cols="4">
              <v-btn
                color="primary"
                block
                x-large
                elevation="2"
                @click.stop="drawer = !drawer"
              >
                <v-icon>mdi-filter </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          app
          clipped
          right
        >
          <criterio-busqueda />
        </v-navigation-drawer>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import CriterioBusqueda from "./CriterioBusqueda.vue";
export default {
  name: "FilesSearch",
  data: () => ({
    drawer: false,
    group: null,
    items: ["Precio", "Calidad"],
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


<style scoped>
.altura {
  height: 2.1rem;
}
</style>
<template>
  <v-container>
    <v-row>
      <v-col class="d-none d-lg-flex d-xl-none" cols="12" lg="" sm="12">
        <criterio-busqueda />
      </v-col>
      <v-col cols="12" lg="10" sm="12">
        <v-row class="d-none d-lg-flex d-xl-none">
          <v-col cols="12" lg="1" ></v-col>
          <v-col cols="12" lg="2">
            <v-text-field type="number" min="0"></v-text-field>
          </v-col>
          <v-col cols="12" lg="2">
            <v-text-field type="number" min="0"></v-text-field>
          </v-col>
          <v-col cols="12" lg="3">
            <v-select
              :items="items"
              label="Ordenar por:"
              outlined
              prepend-inner-icon="mdi-align-vertical-bottom"
            ></v-select>
          </v-col>
          <v-col cols="12" lg="1">
            <v-btn
              color="primary"
              block
              x-large
              elevation="2"
              outlined
              margin="auto"
            >
              Buscar</v-btn
            >
          </v-col>
          <v-col cols="12" lg="2" ></v-col>
        </v-row>
        <v-row class="d-lg-none d-xl-flex" >
          <v-col cols="12" lg="1" sm="1">
            <files-search />
          </v-col>
          <v-spacer />
        </v-row>
        <v-row>
          <v-col v-for="k in 8" :key="k" cols="6" lg="3">
            <telefono />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Telefono from "../components/Inicio/Telefono.vue";
import CriterioBusqueda from "../components/Inicio/CriterioBusqueda.vue";
import FilesSearch from "../components/Inicio/FilesSearch.vue";

export default {
  name: "Inicio",
  components: {
    Telefono,
    CriterioBusqueda,
    FilesSearch,
  },
  data: () => ({
    items: ["Fecha", "Precio"],
  }),
};
</script>

<style scoped>
#input-usage .v-input__prepend-outer,
#input-usage .v-input__append-outer,
#input-usage .v-input__slot,
#input-usage .v-messages {
  border: 1px dashed rgba(0, 0, 0, 0.4);
}
</style>
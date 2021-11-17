<template>
  <v-container>
    <v-row>
      <v-col class="d-none d-lg-flex d-xl-none" cols="12" lg="" sm="12">
        <criterio-busqueda />
      </v-col>
      <v-col cols="12" lg="10" sm="12">
        <lg-search />
        <files-search />
        <v-row>
          <v-col cols="6" lg="3">
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
import LgSearch from "../components/Inicio/LgSearch.vue";

export default {
  name: "Inicio",
  components: {
    Telefono,
    CriterioBusqueda,
    FilesSearch,
    LgSearch,
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
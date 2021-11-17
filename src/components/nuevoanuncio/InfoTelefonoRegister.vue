<template>
  <v-card elevation="11" outlined shaped>
    <v-container>
      <v-row>
        <v-col cols="12">
          <label class="text-center" for="radios">Estado Telefono:</label>
          <v-radio-group id="radios" row>
            <v-radio label="Nuevo" value="Nuevo"></v-radio>
            <v-divider vertical /> &nbsp;&nbsp;&nbsp;
            <v-radio label="Usado" value="Usado"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-select :items="marcas" label="Marca" outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field label="Modelo" placeholder="Modelo" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-select :items="pantallas" label="Pantalla" outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-select :items="sistemas" label="Sistema" outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field type="number" label="ROM" min="8" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field type="number" label="RAM" min="1" outlined />
        </v-col>
      </v-row>
     
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "InfoTelefonoRegister",

  computed: {
    ...mapState(["marcas", "sistemas", "pantallas"]),
  },
};
</script>

<style scoped>
.row {
  height: 4.5rem;
}

.tbl {
  height: auto !important;
}

label {
  margin: auto;
}
</style>
<template>
  <v-sheet min-height="70vh" width="100%" dark outlined elevation="13">
    <v-list color="center-align transparent">
      <v-list-item>
        <v-switch dark :label="`Nuevo`"></v-switch>
      </v-list-item>
      <v-list-item>Marca</v-list-item>
      <v-list-item
        class="check"
        link
        v-for="(marca, index) in marcas"
        :key="index + 'marca'"
      >
        <v-checkbox :label="marca" />
      </v-list-item>
      <v-divider class="my-1"></v-divider>
      <v-list-item>Sistema</v-list-item>
      <v-list-item
        class="check"
        link
        v-for="(sistema, index) in sistemas"
        :key="index + 'sis'"
      >
        <v-checkbox :label="sistema" />
      </v-list-item>
      <v-divider class="my-1"></v-divider>
      <v-list-item>Pantalla</v-list-item>
      <v-list-item
        class="check"
        link
        v-for="(pantalla, index) in pantallas"
        :key="index + 'pantalla'"
      >
        <v-checkbox :label="pantalla" />
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CriterioBusqueda",
  data: () => ({}),
  computed: {
    ...mapState(["marcas", "sistemas", "pantallas"]),
  },
};
</script>

<style>
.check {
  height: 0.5rem;
}
</style>
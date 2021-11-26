<template>
  <v-sheet min-height="70vh" width="100%" dark outlined elevation="13">
    <v-list color="center-align transparent">
      <v-list-item>
        <v-switch dark :label="`Nuevo`" v-model="estado"></v-switch>
      </v-list-item>
      <v-list-item>Marca</v-list-item>
      <v-list-item
        class="check"
        link
        v-for="(marca, index) in marcas"
        :key="index + 'marca'"
      >
        <v-checkbox :label="marca" v-model="marcass" :value="marca" />
      </v-list-item>
      <v-divider class="my-1"></v-divider>
      <v-list-item>Sistema</v-list-item>
      <v-list-item
        class="check"
        link
        v-for="(sistema, index) in sistemas"
        :key="index + 'sis'"
      >
        <v-checkbox :label="sistema" v-model="sistemass" :value="sistema" />
      </v-list-item>
      <v-divider class="my-1"></v-divider>
      <v-list-item>Pantalla</v-list-item>
      <v-list-item
        class="check"
        link
        v-for="(pantalla, index) in pantallas"
        :key="index + 'pantalla'"
      >
        <v-checkbox :label="pantalla" v-model="pantallass" :value="pantalla" />
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CriterioBusqueda",
  data: () => ({
    estado: true,
    marcass: [],
    sistemass: [],
    pantallass: [],
  }),
  methods: {
    enviarMarca(marca) {
      console.log(this.marcass);
      this.$emit("buscarMarca", marca);
    },
    enviarSistema(sistema) {
      this.$emit("buscarSistema", sistema);
    },
    enviarPantalla(pantalla) {
      this.$emit("buscarPantalla", pantalla);
    },
    enviarEstado() {
      let estado = "";
      if (this.estado) {
        estado = "Nuevo";
      } else {
        estado = "Usado";
      }
      this.$emit("porEstado", estado);
    },
  },
  computed: {
    ...mapState(["marcas", "sistemas", "pantallas"]),
  },
  watch: {
    marcass(nuevoValor) {
      this.$emit("buscarMarca", nuevoValor);
    },
    sistemass(nuevoValor) {
      this.$emit("buscarSistema", nuevoValor);
    },
    pantallass(nuevoValor) {
      this.$emit("buscarPantalla", nuevoValor);
    },
    estado(nuevoValor) {
      let estado = "";
      if (nuevoValor) {
        estado = "Nuevo";
      } else {
        estado = "Usado";
      }
      this.$emit("porEstado", estado);
    },
  },
};
</script>

<style>
.check {
  height: 0.5rem;
}
</style>
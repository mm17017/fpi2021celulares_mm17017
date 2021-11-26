<template>
  <v-container>
    <v-row>
      <v-col class="d-none d-lg-flex d-xl-none" cols="12" lg="" sm="12">
        <criterio-busqueda
          @porEstado="filtrarEstado"
          @buscarMarca="filtrarMarca"
          @buscarSistema="filtrarSistema"
          @buscarPantalla="filtrarPantalla"
        />
      </v-col>
      <v-col cols="12" lg="10" sm="12">
        <!-- <lg-search />
        <files-search /> -->
        <v-row v-if="filtros.length == 0 && filtrando == false">
          <v-col cols="6" lg="3" v-for="(anuncio, key) in anuncios" :key="key">
            <telefono :telefono="anuncio" />
          </v-col>
        </v-row>
        <v-row v-if="filtros.length > 0 && filtrando == true">
          <v-col cols="6" lg="3" v-for="(anuncio, key) in filtros" :key="key">
            <telefono :telefono="anuncio" />
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
// import FilesSearch from "../components/Inicio/FilesSearch.vue";
// import LgSearch from "../components/Inicio/LgSearch.vue";
import { db } from "@/db";

export default {
  name: "Inicio",
  components: {
    Telefono,
    CriterioBusqueda,
  },
  data: () => ({
    items: ["Fecha", "Precio"],
    anuncios: [],
    filtros: [],
    filtrando: false,
  }),
  methods: {
    filtrarMarca(ev) {
      this.filtrando = true;
      this.filtros = [];
      console.log(ev);
      try {
        ev.forEach((marca) => {
          this.filtros.push(
            this.anuncios.filter((anuncio) => anuncio.marca == marca)
          );
        });
        this.filtros = [...new Set(this.filtros.flat())];
        this.verificarFiltracion(ev);
      } catch (error) {
        console.log(error);
      }
    },
    filtrarSistema(ev) {
      this.filtrando = true;
      this.filtros = [];
      console.log(ev);
      try {
        ev.forEach((sistema) => {
          this.filtros.push(
            this.anuncios.filter((anuncio) => anuncio.sistema == sistema)
          );
        });
        this.filtros = [...new Set(this.filtros.flat())];
        this.verificarFiltracion(ev);
      } catch (error) {
        console.log(error);
      }
    },
    filtrarPantalla(ev) {
      this.filtrando = true;
      this.filtros = [];
      console.log(ev);
      try {
        ev.forEach((pantalla) => {
          this.filtros.push(
            this.anuncios.filter((anuncio) => anuncio.pantalla == pantalla)
          );
        });
        this.filtros = [...new Set(this.filtros.flat())];
        this.verificarFiltracion(ev);
      } catch (error) {
        console.log(error);
      }
    },
    verificarFiltracion(ev) {
      if (ev.length == 0) {
        this.filtrando = false;
      }
    },
    filtrarEstado(ev) {
      this.filtrando = true;
      this.filtros = [];
      console.log(ev);
      try {
        
          this.filtros.push(
            this.anuncios.filter((anuncio) => anuncio.estado == ev)
          );
        
        this.filtros = [...new Set(this.filtros.flat())];
        this.verificarFiltracion(ev);
      } catch (error) {
        console.log(error);
      }
    },
  },
  firestore: {
    anuncios: db.collection("anuncios"),
  },
  created: () => {
    
  },
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
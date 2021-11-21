<template>
  <v-card elevation="11" outlined shaped height="500px">
    <v-card-title primary-title class="justify-center pie">
      IMAGENES DEL TELEFONO
    </v-card-title>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" lg="6" sm="12">
            <v-file-input
              color="deep-blue accent-4"
              label="File input"
              v-model="infoImages.imagenFiles"
              multiple
              filled
              chips
              placeholder="Select your files"
              prepend-icon="mdi-paperclip"
              outlined
              @change="obtenerImagen"
              :show-size="1000"
            >
              <template v-slot:selection="{ text }">
                <v-chip small label color="primary">
                  {{ text }}
                </v-chip>
              </template>
            </v-file-input>
            <v-simple-table dense dark fixed-header max-height="4">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">Imagenes</th>
                    <th class="text-center">Accion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(img, index) in infoImages.imagenFiles"
                    :key="index"
                    class="text-center" >
                    <td>{{ img.name }}</td>
                    <td>
                      <v-btn
                        dark
                        rounded
                        x-small
                        color="red"
                        elevation="10"
                        @click="eliminarImagen(index)"
                      >
                        <v-icon> mdi-minus-thick </v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
          <v-col cols="12" lg="6" sm="12" class="d-none d-sm-flex d-sm-none d-md-flex">
            <v-card height="400px" class="overflow-x-auto"  >
              <center>
                <carrousel :imagenes="imagenesTelefono.fotos" :tamano="infoImages.tamano"/>
                
              </center>
            </v-card>
          </v-col>
          <v-col cols="12" lg="6" sm="12"> </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import Carrousel from './Carrousel.vue';
export default {
  components: {Carrousel},
  name: "CargaImagenes",
  data: () => ({
    imagenCargar: "",
    infoImages: {
      imagenFiles: [],
      tamano:'80%'
    },
    imagenesTelefono: {
      fotos: [],
    },
  }),

  methods: {
    obtenerImagen() {
      this.infoImages.imagenFiles.forEach((e) => {
        this.cargarImagen(e);
      });
      this.enviarImagen()
    },
    cargarImagen(e) {
      let reader = new FileReader();
      reader.onloadend = () => {
        this.imagenCargar = reader.result;
        this.imagenesTelefono.fotos.push(this.imagenCargar);
      };
      if (e) {
        reader.readAsDataURL(e);
      } else {
        console.log("Todo se derrumbooo");
        this.imagenCargar = "";
      }
    },
    eliminarImagen(index) {
      this.infoImages.imagenFiles.splice(index, 1);
      this.imagenesTelefono.fotos.splice(index, 1);
    },
    enviarImagen(){
      this.$emit('cargarImagen',this.imagenesTelefono)
    }
  },
  computed: {
    imagen() {
      return this.cargarImagen;
    },
  },
};
</script>

<style scoped>
.pie {
  padding-top: 1.5rem;
  padding-bottom: 1.1rem;
}
.tam .tamcell {
  height: 25% !important;
}

.imagen {
  width: 60%;
}
</style>
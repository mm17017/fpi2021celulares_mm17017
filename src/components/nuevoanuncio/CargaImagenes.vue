<template>
    <v-card elevation="11" outlined shaped>
            <v-card-title primary-title class="justify-center pie">
      IMAGENES DEL TELEFONO
    </v-card-title>
    <v-container>
       <v-row>
        <v-col cols="12">
          <v-file-input
            color="deep-purple accent-4"
            label="File input"
            multiple
            filled
            chips
            placeholder="Select your files"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
            @change="ar"
          >
            <template v-slot:selection="{ text }">
              <v-chip small label color="primary">
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
        </v-col>
      </v-row>
            <v-row>
        <v-col cols="12" >
          <v-btn color="success" block x-large @click="actualizarImagen"
            >Cargar</v-btn>
        </v-col>
      </v-row>
      <v-row class="tbl">
        <v-col cols="12" lg="12" sm="12">
          <v-simple-table dense dark fixed-header max-height="4">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">N</th>
                  <th class="text-center">Tamano</th>
                  <th class="text-center">Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="img in images" :key="img.name" class="text-center">
                  <td>{{ img.name }}</td>
                  <td>{{ img.calories }}</td>
                  <td>
                    <v-btn dark rounded x-small color="red" elevation="10">
                      <v-icon> mdi-minus-thick </v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
    </v-card>
</template>

<script>
export default {
    name:'CargaImagenes',

     data: () => ({
    images: [
      {
        name: "Frozen Yogurt",
        calories: 159,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
      },
      {
        name: "Eclair",
        calories: 262,
      },
      {
        name: "Cupcake",
        calories: 305,
      },
      {
        name: "Gingerbread",
        calories: 356,
      },
      {
        name: "Jelly bean",
        calories: 375,
      },
      {
        name: "Lollipop",
        calories: 392,
      },
    ],

    files: [],
    previews: [],
    muestras: [],
    errorImage: "url of an image to use to indicate an error",
  }),
   
  methods: {
    ar(files) {
      console.log(files);
      files.forEach((file, index) => {
        var reader = new FileReader();
        let lectura;
        reader.load = function () {
          lectura = reader.result;
        };
        this.previews[index] = lectura;
        if (file) {
          reader.readAsDataURL(file);
        } else {
          this.previews[index] = "";
        }
      });
    },

    actualizarImagen() {
      console.log(this.previews);
      this.muestras = this.previews;
    },
  },
}
</script>

<style scoped>
.pie {
  padding-top: 1.5rem;
  padding-bottom: 1.1rem;
}
.row {
  height: 4.5rem;
}

.tbl {
  height: auto !important;
}


</style>
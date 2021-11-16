<template>
  <v-card elevation="11" outlined shaped >
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" lg="4" sm="4">
          <label class="text-center" for="radios">Estado Telefono:</label>
        </v-col>
        <v-col cols="12" lg="8" sm="8">
          <v-radio-group id="radios" row>
            <v-radio label="Option 1" value="Nuevo"></v-radio>
            <v-divider vertical /> &nbsp;&nbsp;&nbsp;
            <v-radio label="Option 2" value="Usado"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6" sm="6">
          <v-text-field label="Marca" placeholder="Marca" outlined />
        </v-col>
        <v-col cols="12" lg="6" sm="6">
          <v-text-field label="Modelo" placeholder="Modelo" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6" sm="6">
          <v-text-field type="number" label="Pantalla" min="3" outlined />
        </v-col>
        <v-col cols="12" lg="6" sm="6">
          <v-select :items="items" label="Marca" outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6" sm="6">
          <v-text-field type="number" label="ROM" min="8" outlined />
        </v-col>
        <v-col cols="12" lg="6" sm="6">
          <v-text-field type="number" label="RAM" min="1" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="8" sm="8">
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
        <v-col cols="12" lg="4" sm="4">
          <v-btn color="success" x-large @click="actualizarImagen"
            >Cargar</v-btn
          >
        </v-col>
      </v-row>
      <v-row  class="tbl">
        <v-col  cols="12" lg="12" sm="12">
          <v-simple-table dense dark fixed-header  height="200px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">N</th>
                  <th class="text-center">Tamano</th>
                  <th class="text-center">Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name" class="text-center">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
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
  name: "InfoTelefonoRegister",
  data: () => ({
    desserts: [
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
      {
        name: "Honeycomb",
        calories: 408,
      },
      {
        name: "Donut",
        calories: 452,
      },
      {
        name: "KitKat",
        calories: 518,
      },
    ],

    files: [],
    previews: [],
    muestras: [],
    errorImage: "url of an image to use to indicate an error",
    items: ["Samsumg", "Xiami", "LG", "Huawei"],
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
};
</script>

<style scoped>
.row {
  height: 4.5rem;
}

.tbl{
  height: auto !important;
}


label {
  margin: auto;
}
</style>
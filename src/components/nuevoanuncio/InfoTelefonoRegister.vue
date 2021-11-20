<template>
  <v-card elevation="11" outlined shaped>
    <v-container>
      <v-row>
        <v-col cols="12">
          <label class="text-center" for="radios">Estado Telefono:</label>
          <v-radio-group id="radios" row v-model="infoTelefono.estado" @change="enviarInfoRegister" >
            <v-radio label="Nuevo" value="Nuevo" ></v-radio>
            <v-divider vertical /> &nbsp;&nbsp;&nbsp;
            <v-radio label="Usado" value="Usado" ></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-select :items="marcas" label="Marca" outlined v-model="infoTelefono.marca" @change="enviarInfoRegister"></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field label="Modelo" placeholder="Modelo" outlined v-model="infoTelefono.modelo" @keypress="enviarInfoRegister"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-select :items="pantallas" label="Pantalla" outlined v-model="infoTelefono.pantalla" @change="enviarInfoRegister"></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-select :items="sistemas" label="Sistema" outlined v-model="infoTelefono.sistema" @change="enviarInfoRegister"></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field type="number" label="ROM" min="8" outlined  v-model="infoTelefono.rom" @change="enviarInfoRegister"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field type="number" label="RAM" min="1" outlined v-model="infoTelefono.ram" @change="enviarInfoRegister"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "InfoTelefonoRegister",
  data:()=>({
        infoTelefono:{
      estado:'',
      marca:'',
      modelo:'',
      pantalla:'',
      sistema:'',
      rom:0,
      ram:0
    }
  }),
methods:{
  enviarInfoRegister(){
    
    this.$emit('infoTelefono',this.infoTelefono)
  }
},

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
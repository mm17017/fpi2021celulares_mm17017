<template>
  <v-container>
    <v-row>
      <v-col lg="6" sm="12">
          <img-phone/>
      </v-col>
      <v-col lg="6" sm="12">
          <descripcion-phone/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DescripcionPhone from '../components/phone/DescripcionPhone.vue';
import ImgPhone from '../components/phone/ImgPhone.vue';
export default {
  components: { DescripcionPhone, ImgPhone },
  name: "CompraTelefono",
};
</script>

<style scoped>
.imagen {
    
  margin: auto !important;
  border-radius: 10rem;
}
</style>
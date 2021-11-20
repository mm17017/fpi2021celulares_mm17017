<template>
  <viewer :images="imagenes">
    <img
      v-for="(src, index) in imagenes"
      :key="index"
      :width="tamano"
      alt="Contiene algun telefono"
      :src="src"
    />
  </viewer>
</template>

<script>
export default {
    name:'Carrousel',
    props:['imagenes','tamano']
};
</script>

<style scoped>
.imagen {
  width: 60%;
}
</style>
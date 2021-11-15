<template>
   <v-row class="altura d-none d-lg-flex d-xl-none">
    <v-col cols="12" lg="1"></v-col>
    <v-col cols="12" lg="2">
      <v-text-field type="number" min="0"></v-text-field>
    </v-col>
    <v-col cols="12" lg="2">
      <v-text-field type="number" min="0"></v-text-field>
    </v-col>
    <v-col cols="12" lg="3">
      <v-select
        :items="items"
        label="Ordenar por:"
        outlined
        prepend-inner-icon="mdi-align-vertical-bottom"
      ></v-select>
    </v-col>
    <v-col cols="12" lg="1">
      <v-btn color="primary" block x-large elevation="2" outlined margin="auto">
        Buscar</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LogSearch",
    data: () => ({
    items: ["Fecha", "Precio"],
  }),
};
</script>

<style scoped>

.altura{
  height: 5rem;
}
</style>>

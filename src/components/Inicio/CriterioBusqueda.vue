<template>
  <v-sheet min-height="70vh" width="100%" dark outlined elevation="13">
    <v-list color="center-align transparent">
      <v-list-item>
        <v-switch dark :label="`Nuevo`"></v-switch>
      </v-list-item>
      <v-list-item>Marca</v-list-item>
      <v-list-item class="check" link>
        <v-checkbox label="Checkbox" />
      </v-list-item>
      <v-divider class="my-1"></v-divider>
      <v-list-item>Sistema</v-list-item>
      <v-list-item class="check" link>
        <v-checkbox label="Checkbox" />
      </v-list-item>
      <v-divider class="my-1"></v-divider>
      <v-list-item>Pantalla</v-list-item>
      <v-list-item class="check"  link>
        <v-checkbox label="Checkbox" />
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  name: "CriterioBusqueda",
};
</script>

<style>
.check {
  height: 0.5rem;
}
</style>
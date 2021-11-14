<template>
  <v-sheet min-height="70vh" dark outlined elevation="13">
    <v-list color="center-align transparent">
      <v-list-item>
        <v-switch dark :label="`Nuevo`"></v-switch>
      </v-list-item>
      <v-list-item>Marca</v-list-item>
      <v-list-item class="check" v-for="i in 5" :key="i" link>
        <v-checkbox :label="`Checkbox ${i}`" />
      </v-list-item>
      <v-divider class="my-1"></v-divider>
      <v-list-item>Sistema</v-list-item>
      <v-list-item class="check" v-for="j in 5" :key="j" link>
        <v-checkbox :label="`Checkbox ${j}`" />
      </v-list-item>
      <v-divider class="my-1"></v-divider>
      <v-list-item>Pantalla</v-list-item>
      <v-list-item class="check" v-for="a in 5" :key="a" link>
        <v-checkbox :label="`Checkbox ${a}`" />
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
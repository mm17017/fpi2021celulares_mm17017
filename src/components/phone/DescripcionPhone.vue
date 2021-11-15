<template>
  <v-card shaped dark class="mx-auto" elevation="10">
    <v-card-text class="white-text">
      <p class="text-h4 text-white">XIAOMI</p>
      <p class="text-h6 text-white">$132.00</p>

      <div class="text--default">
        <p class="detalles">
          relating to or dependent on charity; charitable.<br />
          "an eleemosynary educational institution.
        </p>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn large block color="success" @click="reveal = true">
          <v-icon large right dark>mdi-eye-plus</v-icon>&nbsp;&nbsp;
          Ver Mas </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--white">Caracteristicas</p>
          <p>
            late 16th century (as a noun denoting a place where alms were
            distributed): from medieval Latin eleemosynarius, from late Latin
            eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
          </p>
        </v-card-text>
                <v-card-text class="pb-0">
          <p class="text-h4 text--white">Informacion del vendedor</p>
          <p>
            late 16th century (as a noun denoting a place where alms were
            distributed): from medieval Latin eleemosynarius, from late Latin
            eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
          </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn block large color="warning" @click="reveal = false"> &nbsp;&nbsp;
              <v-icon large right dark>mdi-eye-remove</v-icon>&nbsp;&nbsp;
              Ver menos</v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
    <v-card-actions class="pt-0">
      <v-btn x-large block color="red"> &nbsp;&nbsp;
        <v-icon large right dark> mdi-cart-plus </v-icon>&nbsp;&nbsp;
        Añadir al Carro
      </v-btn>
    </v-card-actions>
    
    <v-divider></v-divider>

  </v-card>
</template>

<script>
export default {
  name: "DescripcionPhone",
  data: () => ({
    reveal: false,
  }),
};
</script>

<style scoped>
.detalles {
  text-align: center;
  font-size: 20px;
}
</style>
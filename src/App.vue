<template>
  <v-app id="inspire">
    <v-app-bar app color="blue darken-3" flat>
      <v-container class="py-0 fill-height">
        <h3 class="blue-text">Phone Store</h3>
        &nbsp;&nbsp;
        <v-avatar class="mr-10" color="white darken-1" size="45">
          <v-icon color="blue darken-4" x-large>mdi-cellphone</v-icon>
        </v-avatar>
        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
        <v-spacer></v-spacer>
        <v-btn
          class="ma-2"
          color="success"
        >
          <v-icon right dark> mdi-home </v-icon>&nbsp; Inicio
        </v-btn>
        <v-btn
          class="ma-2"
         
          color="blue ligthen-1"
         
        >
          <span class="text-color">
            <v-icon right dark> mdi-call-missed </v-icon>&nbsp; Estadisticas
          </span>
        </v-btn>

        <v-btn class="mx-2" fab dark color="blue lighten-3" small>
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>

        <v-btn class="mx-2" fab dark color="red" >
          <v-icon dark> mdi-cart-plus </v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item v-for="n in 5" :key="n" link>
                  <v-list-item-content>
                    <v-list-item-title> List Item {{ n }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title> Refresh </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
h3 {
  color: aliceblue;
}

.text-color {
  color: aliceblue;
}
</style>

<script>
export default {
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
  }),
};
</script>

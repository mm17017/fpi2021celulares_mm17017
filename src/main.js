import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./plugins/axios";
import router from "./router";
import store from "./store";
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
import { firestorePlugin } from "vuefire";
Vue.use(Viewer);
Viewer.setDefaults({
  Options: {
    inline: true,
    button: true,
    navbar: true,
    title: true,
    toolbar: true,
    tooltip: true,
    movable: true,
    zoomable: true,
    rotatable: true,
    scalable: true,
    transition: true,
    fullscreen: true,
    keyboard: true,
    url: "data-source",
  },
});
Vue.use(firestorePlugin);

Vue.config.productionTip = false;



new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import Vue from 'vue'
import Vuex from 'vuex'
// import {db} from '@/db'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    marcas:['XIAOMI','SAMSUMG','IPHONE','HUAWEI'],
    sistemas:['ANDRIOD','IOS'],
    pantallas:['6.0','6.3','6.6','5.9'],
    detalleTelefono:{},
    carrito:[],
    telefonos:[]

  },
  mutations: {
    verTelefono(state,update){
      state.detalleTelefono=update
    },
    agregarCarrito(state,telefono){
      state.carrito.push(telefono)
    },
    cargarTelefonos(state,telefonos){
      state.telefonos = telefonos
    },
    eliminarTelefonoCarrito(state,index){
      state.carrito.splice(index,1)
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    calcularCosto: state=>{
      let costo=0
      state.carrito.forEach((articulo)=>{
        costo+=Number(articulo.precio)
      })
      return costo

    }
  }
})

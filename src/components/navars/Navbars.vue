<template>
  <div class="di">
    <!-- Div de menu para telefono -->
    <div class="d-lg-none d-xl-flex">
      <small-nav-bar />
    </div>
    <!-- Div de menu para pc -->
    <div class="d-none d-lg-flex d-xl-none">
      <big-navbar />
    </div>
  </div>
</template>

<script>
import BigNavbar from './BigNavbar.vue';
import SmallNavBar from './SmallNavBar.vue'
export default {
  name: "Navbars",
  components:{
      BigNavbar,
      SmallNavBar
  }
};
</script>

<style>

</style>
<template>
 <nav>
   <v-app-bar
    app
    clipped-left
    clipped-right
    color="light-blue darken-2"
  >
     <v-app-bar-nav-icon
      color="white"
      @click="miniVariant = !miniVariant"
      >
     </v-app-bar-nav-icon>
     <v-toolbar-title class="white--text">
       <v-icon
        left
        color="white"
        class="mx-0 pb-1"
        >
          mdi-newspaper-variant
        </v-icon>
       Topic Analysis
     </v-toolbar-title>
   </v-app-bar>
   <v-slide-x-transition appear>
      <nav-drawer :miniVariant="miniVariant" />
    </v-slide-x-transition>

 </nav>
</template>

<script>
import NavDrawer from './NavDrawer.vue';

export default {
  name: 'Navbar',
  data() {
    return {
      miniVariant: false,
    };
  },
  components: {
    NavDrawer,
  },

};
</script>

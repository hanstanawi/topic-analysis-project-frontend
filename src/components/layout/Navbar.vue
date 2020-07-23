<template>
 <nav>
   <v-app-bar
    app
    clipped-left
    clipped-right
  >
     <v-app-bar-nav-icon
      @click="miniVariant = !miniVariant"
      >
     </v-app-bar-nav-icon>
     <v-toolbar-title>
       <v-icon left class="mx-0">mdi-newspaper-variant</v-icon>
       News Analysis
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

<template>
  <div>
    <v-navigation-drawer
      app
      clipped
      persistent
      :mini-variant="miniVariant"
      class="hidden-md-only"
      width="200"
      permanent
      overflow
      color="white"
      >
      <v-list
        dense
        color="white"
      >
          <v-list-item
            v-for="link in links"
            :key="link.label"
            color="white"
            route
            :to="link.url"
            dense
            active-class="blue lighten-5"
          >
            <v-list-item-action>
              <v-icon color="grey darken-2">{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-subtitle class="black--text">
              {{ link.label }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'NavDrawer',
  props: {
    miniVariant: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data() {
    return {
      links: [
        {
          label: 'Dashboard',
          url: '/',
          icon: 'mdi-view-dashboard-variant-outline',
        },
        // {
        //   label: 'Topic Detection',
        //   url: '/topics',
        //   icon: 'mdi-chart-histogram',
        // },
        {
          label: 'Keyword Search',
          url: '/articles',
          icon: 'mdi-comment-search',
        },
        {
          label: 'Article Search',
          url: '/articles-search',
          icon: 'mdi-text-search',
        },
      ],
    };
  },
};
</script>

<style>

</style>

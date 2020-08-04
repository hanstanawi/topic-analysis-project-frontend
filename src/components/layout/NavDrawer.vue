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
      >
      <v-list
        dense
      >
          <v-list-item
            v-for="link in links"
            :key="link.label"
            route
            :to="link.url"
            dense
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
        {
          label: 'Topic Detection',
          url: '/topics',
          icon: 'mdi-chart-histogram',
        },
        {
          label: 'Articles Search',
          url: '/articles',
          icon: 'mdi-feature-search',
        },
      ],
    };
  },
};
</script>

<style>

</style>

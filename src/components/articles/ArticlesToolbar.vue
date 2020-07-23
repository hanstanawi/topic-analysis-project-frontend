<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6" align="center">
      <v-text-field
        v-model="searchTerm"
        outlined
        rounded
        prepend-inner-icon="mdi-magnify"
        label="Search"
        append-icon="mdi-close"
        append-outer-icon="mdi-filter-variant"
        @click:append="searchTerm = ''"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ArticlesToolbar',
  data() {
    return {
      searchTerm: '',
    };
  },
  watch: {
    searchTerm(val) {
      if (val === null) {
        this.searchTerm = '';
        return;
      }
      this.$emit('updateSearchValue', val);
    },
  },
};
</script>

<style>

</style>

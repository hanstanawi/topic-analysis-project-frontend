<template>
  <v-row
    justify="center">
    <v-col
      cols="12"
      sm="8"
      md="6"
      align="center"
    >
      <!-- FILTER SEARCH -->
      <v-text-field
        v-if="filterMode"
        v-model="searchTerm"
        outlined
        rounded
        background-color="#fff"
        dense
        prepend-icon="mdi-magnify"
        prepend-inner-icon="mdi-filter-variant"
        label="Filter the Articles List"
        append-icon="mdi-close"
        @click:append="searchTerm = ''"
        @click:prepend="filterMode = !filterMode"
      />
      <!-- TAG SEARCH -->
      <v-combobox
        v-if="!filterMode"
        v-model="tags"
        :filter="filter"
        :hide-no-data="!tagSearch"
        :items="items"
        :search-input.sync="tagSearch"
        hide-selected
        background-color="#fff"
        label="Enter a keyword"
        multiple
        small-chips
        dense
        rounded
        outlined
        prepend-inner-icon="mdi-magnify"
        prepend-icon="mdi-filter-variant"
        @click:prepend="filterMode = !filterMode"
      >
        <!-- SEARCH OR CREATE A CHIP -->
        <template v-slot:no-data>
          <v-list-item>
            <span class="subheading mr-2">Create a Tag</span>
            <v-chip
              :color="`${colors[nonce - 1]} lighten-3`"
              label
              small
            >
              {{ tagSearch }}
            </v-chip>
          </v-list-item>
        </template>
        <!-- CREATED CHIP -->
        <template v-slot:selection="{ attrs, item, parent, selected }">
          <v-chip
            v-if="item === Object(item)"
            v-bind="attrs"
            :color="`${item.color} lighten-3`"
            :input-value="selected"
            label
            small
          >
            <span class="pr-2">
              {{ item.text }}
            </span>
            <v-icon
              small
              @click="parent.selectItem(item)"
            >mdi-close</v-icon>
          </v-chip>
        </template>
        <!-- EDIT CHIP -->
        <template v-slot:item="{ index, item }">
          <v-text-field
            v-if="editing === item"
            v-model="editing.text"
            autofocus
            flat
            background-color="transparent"
            hide-details
            solo
            @keyup.enter="edit(index, item)"
          />
          <v-chip
            v-else
            :color="`${item.color} lighten-3`"
            dark
            label
            small
          >
            {{ item.text }}
          </v-chip>
          <v-spacer></v-spacer>
          <v-list-item-action @click.stop>
            <v-btn
              icon
              @click.stop.prevent="edit(index, item)"
            >
              <v-icon>{{ editing !== item ? 'mdi-pencil' : 'mdi-check' }}</v-icon>
            </v-btn>
          </v-list-item-action>
        </template>
        <template v-slot:append-outer>
          <v-btn
            color="light-blue darken-2"
            small
            class="white--text"
            style="transform: translate(0, -7%);"
            @click="$emit('search-keyword', singleKeyword)"
          >
              Search
          </v-btn>
        </template>
      </v-combobox>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ArticlesToolbar',
  data() {
    return {
      searchTerm: '',
      filterMode: false,
      tags: [],
      activator: null,
      attach: null,
      colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
      editing: null,
      index: -1,
      items: [
        { header: 'Select a tag or create one' },
      ],
      nonce: 1,
      menu: false,
      tagSearch: null,
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
    tags(val, prev) {
      if (val.length === prev.length) return;

      this.tags = val.map((v) => {
        if (typeof v === 'string') {
          // eslint-disable-next-line no-param-reassign
          v = {
            text: v,
            color: this.colors[this.nonce - 1],
          };
          this.items.push(v);
          this.nonce += 1;
        }
        return v;
      });
    },
  },
  computed: {
    singleKeyword() {
      const singleKeyword = this.tags.slice(0, 2).map((tag) => tag.text);
      return singleKeyword.toString();
    },
  },
  methods: {
    edit(index, item) {
      if (!this.editing) {
        this.editing = item;
        this.index = index;
      } else {
        this.editing = null;
        this.index = -1;
      }
    },
    filter(item, queryText, itemText) {
      if (item.header) return false;

      const hasValue = (val) => (val != null ? val : '');

      const text = hasValue(itemText);
      const query = hasValue(queryText);

      return text.toString()
        .toLowerCase()
        .indexOf(query.toString().toLowerCase()) > -1;
    },
  },
};
</script>

<style>

</style>

<template>
  <v-container
    max-width="700px"
    fluid
  >
    <v-row>
      <v-col cols="11">
        <apexchart
          type="bar"
          :options="chartOptions"
          :series="series"
          :height="height"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'BarChart',
  props: {
    height: {
      type: Number,
      default: 250,
    },
    width: {
      type: Number,
      default: null,
    },
    title: {
      type: String,
      default: '',
    },
    series: {
      type: Array,
      required: true,
      default: () => [],
    },
    categories: {
      type: Array,
      required: true,
      default: () => [],
    },
    stacked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'barchart',
          toolbar: {
            show: false,
          },
          stacked: this.stacked,
        },
        xaxis: {
          categories: this.categories,
        },
        title: {
          text: this.title,
          align: 'left',
        },

      },
    };
  },
};
</script>

<style>
</style>

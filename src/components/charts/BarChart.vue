<template>
  <v-card
    max-width="700px"
    flat
  >
    <v-row>
      <v-col cols="11">
        <apexchart
          type="bar"
          :options="chartOptions"
          :series="series"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'BarChart',
  props: {
    height: {
      type: Number,
      default: null,
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
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'barchart',
          toolbar: {
            show: false,
          },
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

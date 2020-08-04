<template>
 <v-card width="900">
   <v-row>
     <v-col cols="11" align="center">
       <apexchart
        :height="height"
        type="line"
        :options="chartOptions"
        :series="series"
      />
     </v-col>
   </v-row>
 </v-card>
</template>

<script>
export default {
  name: 'LineChart',
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
          id: 'lineChart',
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
        stroke: {
          curve: 'smooth',
        },
      },
    };
  },
};
</script>

<style>

</style>

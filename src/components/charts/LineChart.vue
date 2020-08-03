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
    },
    width: {
      type: Number,
    },
    series: {
      type: Array,
      default: () => [],
    },
    categories: {
      type: Array,
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
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        title: {
          text: 'Top 3 Topics',
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

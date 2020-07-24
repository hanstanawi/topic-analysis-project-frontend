<template>
 <v-card max-width="700px">
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
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        title: {
          text: 'Your Recent Searches',
          align: 'left',
        },
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91],
      }],
    };
  },
};
</script>

<style>

</style>

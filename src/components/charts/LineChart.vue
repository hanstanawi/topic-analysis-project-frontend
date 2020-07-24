<template>
 <v-card width="900">
   <v-row>
     <v-col cols="11" align="center">
       <apexchart
        height="300"
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
      series: [
        {
          name: 'Topic 1',
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
        {
          name: 'Topic 2',
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
        },
        {
          name: 'Topic 3',
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
        },
      ],
    };
  },
};
</script>

<style>

</style>

<template>
  <v-container fluid>
    <v-row justify="end">
      <v-col cols="12" align="start">
        <apexchart
          type="donut"
          height="400"
          :options="chartOptions"
          :series="series"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PieChart',
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
    // categories: {
    //   type: Array,
    //   required: true,
    //   default: () => [],
    // },
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'donut',
        },
        labels: ['PTT', 'CNN', 'BBC', 'Guardian', 'WSJ'],
        plotOptions: {
          pie: {
            donut: {
              size: '65%',
            },
          },
        },
        title: {
          display: true,
          text: 'Top 5 News Sources',
          style: {
            fontSize: '20px',
            fontWeight: 600,
            color: '#000',
            fontFamily: 'Roboto',
          },
          margin: 0,
        },
        legend: {
          position: 'right',
          fontSize: '12px',
          offsetY: 100,
          offsetX: 80,
          horizontalAlign: 'start',
          itemMargin: {
            vertical: 2,
            horizontal: 5,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'right',
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>

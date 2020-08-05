<template>
 <v-card
  width="700px"
  class="pa-1"
  flat
  >
   <v-row>
     <v-col cols="11">
       <apexchart
        type="area"
        :options="chartOptions"
        :series="series"
      />
     </v-col>
   </v-row>
 </v-card>
</template>

<script>
export default {
  name: 'AreaChart',
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
          id: 'vuechart-example',
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

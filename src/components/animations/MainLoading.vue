<template>
  <Lottie
    :options="animationOptions"
    :height="size"
    :width="size"
    class="loadingAnimation"
    @animCreated="handleAnimation"
  />
</template>

<script>
import Lottie from 'vue-lottie';
import * as animationData from './assets/loading.json';

export default {
  name: 'MainLoading',
  components: {
    Lottie,
  },
  props: {
    size: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      animationOptions: {
        animationData: animationData.default,
      },
      animationSpeed: 1,
    };
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    },
    onSpeedChange() {
      this.anim.setSpeed(this.animationSpeed);
    },
  },
};
</script>

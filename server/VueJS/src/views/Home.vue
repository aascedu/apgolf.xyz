<template>
  <Banner />
  <StagesHome />
  <CoachHome />
  <!-- <AvisHome /> -->
</template>

<script>
import StagesHome from '@/components/StagesHome.vue'
import Banner from '@/components/Banner.vue';
import AvisHome from '@/components/AvisHome.vue';
import CoachHome from '@/components/CoachHome.vue';

export default {
  components: {
    StagesHome,
    Banner,
    AvisHome,
    CoachHome,
  },
};
</script>

<style>
</style>
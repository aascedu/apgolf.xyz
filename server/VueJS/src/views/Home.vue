<template>
  <Banner
    image="/assets/home_banner.jpeg"
    text='banner.home'
  />
  <StagesHome />
  <CoachHome />
</template>

<script>
import StagesHome from '@/components/StagesHome.vue'
import CoachHome from '@/components/CoachHome.vue';
import Banner from '@/components/Banner.vue';

export default {
  components: {
    StagesHome,
    CoachHome,
    Banner,
  },
};
</script>
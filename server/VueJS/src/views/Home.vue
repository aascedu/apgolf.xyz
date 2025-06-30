<template>
  <Banner />
  <StagesHome />
  <CoachHome />
  <!-- <AvisHome /> -->
   <Footer />
</template>

<script>
import StagesHome from '@/components/StagesHome.vue'
import Banner from '@/components/Banner.vue';
import AvisHome from '@/components/AvisHome.vue';
import CoachHome from '@/components/CoachHome.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    StagesHome,
    Banner,
    AvisHome,
    CoachHome,
    Footer,
  },
};
</script>

<style>
</style>
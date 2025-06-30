<template>
  <Banner />
  <StagesHome />
  <CoachHome />
  <!-- <AvisHome /> -->
   <FooterHome />
</template>

<script>
import StagesHome from '@/components/StagesHome.vue'
import Banner from '@/components/Banner.vue';
import AvisHome from '@/components/AvisHome.vue';
import CoachHome from '@/components/CoachHome.vue';
import FooterHome from '@/components/FooterHome.vue';

export default {
  components: {
    StagesHome,
    Banner,
    AvisHome,
    CoachHome,
    FooterHome
  },
};
</script>

<style>
</style>
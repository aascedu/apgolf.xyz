<template>
  <Banner
  image="/assets/home_banner.jpeg"
  text='banner.home'
  />
  <div class="padded-div">
    <HomeElement 
      image="/assets/home_banner.jpeg"
      :title="$t('home.stages.title')"
      :description="$t('home.stages.description')"
      :buttonText="$t('home.stages.buttonText')"
      href="/stages"
    />
    <div class="md:flex flex-row gap-8">
      <div class="flex-1">
        <HomeElement 
          image="/assets/home_banner.jpeg"
          :title="$t('home.sejours.title')"
          :description="$t('home.sejours.description')"
          :buttonText="$t('home.sejours.buttonText')"
          href="/sejours"
        />
      </div>
      <div class="flex-1">
        <HomeElement 
          image="/assets/home_banner.jpeg"
          :title="$t('home.competitions.title')"
          :description="$t('home.competitions.description')"
          :buttonText="$t('home.competitions.buttonText')"
          href="/competitions"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HomeElement from '@/components/HomeElement.vue'
import Banner from '@/components/Banner.vue';

export default {
  components: {
    HomeElement,
    Banner,
  },
};
</script>
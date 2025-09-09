<template>
  <Banner
    image="/assets/home_banner.jpeg"
    :text="$t('banner.home')"
  />
  <div class="padded-div">
    <div class="home-elements">
      <HomeElement 
        image="/assets/Accueil-Stages.jpg"
        :title="$t('home.stages.title')"
        :description="$t('home.stages.description')"
        :buttonText="$t('home.stages.buttonText')"
        href="/stages"
      />
      <div class="secondary-row justify-between">
        <HomeElement 
          image="/assets/Accueil-Sejours.jpg"
          :title="$t('home.sejours.title')"
          :description="$t('home.sejours.description')"
          :buttonText="$t('home.sejours.buttonText')"
          href="/sejours"
        />
        <HomeElement 
          image="/assets/ProAm.jpg"
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

<style scoped>
.home-elements {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.secondary-row {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 1300px) {
  .home-elements {
    flex-direction: column;
    gap: 2rem;
  }
  .primary-element {
    margin-bottom: 2rem;
  }
  .secondary-row {
    flex-direction: row;
    gap: 0rem; 
  }
}
</style>
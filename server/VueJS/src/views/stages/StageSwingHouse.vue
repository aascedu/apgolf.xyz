<template>
    <div class="md:pt-0 pt-16">
      <BannerStage image="/assets/home_banner.jpeg" />
      <DescriptionStage
        :title="$t('stageDecouverte.title')"
        :description="$t('stageDecouverte.description')"
        :program="[
          $t('stageDecouverte.program.day1'),
          $t('stageDecouverte.program.day2'),
          $t('stageDecouverte.program.day3')
        ]"
        :additionalInfo="{
          duree: $t('stageDecouverte.additionalInfo.duration'),
          dates: $t('stageDecouverte.additionalInfo.dates'),
          lieu: $t('stageDecouverte.additionalInfo.location'),
          tarif: $t('stageDecouverte.additionalInfo.price'),
          nombrePersonnes: $t('stageDecouverte.additionalInfo.participants'),
          niveau: $t('stageDecouverte.additionalInfo.level')
        }"
      />
      <SwingHouse />
    </div>
  </template>
  
  <script>
  import DescriptionStage from "@/components/DescriptionStage.vue";
  import BannerStage from "@/components/BannerStage.vue";
  import SwingHouse from "@/components/SwingHouse.vue";

  export default {
    components: {
      DescriptionStage,
      BannerStage,
      SwingHouse,
    },
  };
  </script>
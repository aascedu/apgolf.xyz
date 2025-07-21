<template>
    <div class="md:pt-0 pt-16">
      <BannerStage image="/assets/home_banner.jpeg" />
      <DescriptionElement
        :title="$t('stageSwingHouse.title')"
        :description="$t('stageSwingHouse.description')"
        :program="[
          $t('stageSwingHouse.program.day1'),
          $t('stageSwingHouse.program.day2'),
          $t('stageSwingHouse.program.day3')
        ]"
        :additionalInfo="{
          duree: $t('stageSwingHouse.additionalInfo.duration'),
          dates: $t('stageSwingHouse.additionalInfo.dates'),
          lieu: $t('stageSwingHouse.additionalInfo.location'),
          tarif: $t('stageSwingHouse.additionalInfo.price'),
          nombrePersonnes: $t('stageSwingHouse.additionalInfo.participants'),
          niveau: $t('stageSwingHouse.additionalInfo.level')
        }"
      />
      <SwingHouse />
    </div>
  </template>
  
  <script>
  import DescriptionElement from "@/components/DescriptionElement.vue";
  import BannerStage from "@/components/BannerStage.vue";
  import SwingHouse from "@/components/SwingHouse.vue";

  export default {
    components: {
      DescriptionElement,
      BannerStage,
      SwingHouse,
    },
  };
  </script>
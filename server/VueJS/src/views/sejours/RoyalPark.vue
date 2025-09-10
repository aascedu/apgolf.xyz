<template>
  <div class="md:pt-0 pt-16">
    <Banner image="/assets/sejours/RoyalPark.jpg" />
      <DescriptionElement
        :title="$t('sejours.royalPark.title')"
        :description="$t('sejours.royalPark.description')"
        :program="[
          $t('sejours.royalPark.program.day1'),
          $t('sejours.royalPark.program.day2'),
          $t('sejours.royalPark.program.day3')
        ]"
        :additionalInfo="{
          duree: $t('sejours.royalPark.additionalInfo.duration'),
          dates: $t('sejours.royalPark.additionalInfo.dates'),
          lieu: $t('sejours.royalPark.additionalInfo.location'),
          tarif: $t('sejours.royalPark.additionalInfo.price'),
          nombrePersonnes: $t('sejours.royalPark.additionalInfo.participants'),
          niveau: $t('sejours.royalPark.additionalInfo.level')
        }"
      />
    </div>
</template>

<script>
import DescriptionElement from "@/components/DescriptionElement.vue";
import Banner from "@/components/Banner.vue";

export default {
  components: {
    DescriptionElement,
    Banner,
  },
};
</script>
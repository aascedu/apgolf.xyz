<template>
  <div class="md:pt-0 pt-16">
    <Banner image="/assets/sejours/SkiGolf.jpg" />
      <DescriptionElement
        :title="$t('sejours.skiGolf.title')"
        :description="$t('sejours.skiGolf.description')"
        :program="[
          $t('sejours.skiGolf.program.day1'),
          $t('sejours.skiGolf.program.day2'),
          $t('sejours.skiGolf.program.day3')
        ]"
        :additionalInfo="{
          duree: $t('sejours.skiGolf.additionalInfo.duration'),
          dates: $t('sejours.skiGolf.additionalInfo.dates'),
          lieu: $t('sejours.skiGolf.additionalInfo.location'),
          tarif: $t('sejours.skiGolf.additionalInfo.price'),
          nombrePersonnes: $t('sejours.skiGolf.additionalInfo.participants'),
          niveau: $t('sejours.skiGolf.additionalInfo.level')
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
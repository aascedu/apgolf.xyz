<template>
  <div class="md:pt-0 pt-16">
    <Banner image="/assets/sejours/MontBlancExperience.jpg" />
      <DescriptionElement
        :title="$t('sejours.montBlancExperience.title')"
        :description="$t('sejours.montBlancExperience.description')"
        :program="[
          $t('sejours.montBlancExperience.program.day1'),
          $t('sejours.montBlancExperience.program.day2'),
          $t('sejours.montBlancExperience.program.day3')
        ]"
        :additionalInfo="{
          duree: $t('sejours.montBlancExperience.additionalInfo.duration'),
          dates: $t('sejours.montBlancExperience.additionalInfo.dates'),
          lieu: $t('sejours.montBlancExperience.additionalInfo.location'),
          tarif: $t('sejours.montBlancExperience.additionalInfo.price'),
          nombrePersonnes: $t('sejours.montBlancExperience.additionalInfo.participants'),
          niveau: $t('sejours.montBlancExperience.additionalInfo.level')
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
<template>
  <div class="md:pt-0 pt-16">
    <Banner image="/assets/sejours/VillaCarolina.jpg" />
      <DescriptionElement
        :title="$t('sejours.villaCarolina.title')"
        :description="$t('sejours.villaCarolina.description')"
        :program="[
          $t('sejours.villaCarolina.program.day1'),
          $t('sejours.villaCarolina.program.day2'),
          $t('sejours.villaCarolina.program.day3'),
          $t('sejours.villaCarolina.program.day4'),
          $t('sejours.villaCarolina.program.day5')
        ]"
        :additionalInfo="{
          duree: $t('sejours.villaCarolina.additionalInfo.duration'),
          dates: $t('sejours.villaCarolina.additionalInfo.dates'),
          lieu: $t('sejours.villaCarolina.additionalInfo.location'),
          tarif: $t('sejours.villaCarolina.additionalInfo.price'),
          nombrePersonnes: $t('sejours.villaCarolina.additionalInfo.participants'),
          niveau: $t('sejours.villaCarolina.additionalInfo.level')
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
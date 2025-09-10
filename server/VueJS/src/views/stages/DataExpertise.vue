<template>
  <div class="md:pt-0 pt-16">
    <Banner image="/assets/stages/DataExpertise.jpg" />
      <DescriptionElement
        :title="$t('stages.dataExpertise.title')"
        :description="$t('stages.dataExpertise.description')"
        :program="[
          $t('stages.dataExpertise.program.day1'),
          $t('stages.dataExpertise.program.day2'),
          $t('stages.dataExpertise.program.day3')
        ]"
        :additionalInfo="{
          duree: $t('stages.dataExpertise.additionalInfo.duration'),
          dates: $t('stages.dataExpertise.additionalInfo.dates'),
          lieu: $t('stages.dataExpertise.additionalInfo.location'),
          tarif: $t('stages.dataExpertise.additionalInfo.price'),
          nombrePersonnes: $t('stages.dataExpertise.additionalInfo.participants'),
          niveau: $t('stages.dataExpertise.additionalInfo.level')
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
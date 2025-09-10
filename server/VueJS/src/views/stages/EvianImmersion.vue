<template>
  <div class="md:pt-0 pt-16">
    <Banner image="/assets/stages/EvianImmersion.jpg" />
      <DescriptionElement
        :title="$t('stages.evianImmersion.title')"
        :description="$t('stages.evianImmersion.description')"
        :program="[
          $t('stages.evianImmersion.program.day1'),
          $t('stages.evianImmersion.program.day2'),
          $t('stages.evianImmersion.program.day3')
        ]"
        :additionalInfo="{
          duree: $t('stages.evianImmersion.additionalInfo.duration'),
          dates: $t('stages.evianImmersion.additionalInfo.dates'),
          lieu: $t('stages.evianImmersion.additionalInfo.location'),
          tarif: $t('stages.evianImmersion.additionalInfo.price'),
          nombrePersonnes: $t('stages.evianImmersion.additionalInfo.participants'),
          niveau: $t('stages.evianImmersion.additionalInfo.level')
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
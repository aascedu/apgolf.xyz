<template>
  <div class="md:pt-0 pt-16">
    <Banner image="/assets/home_banner.jpeg" />
    <DescriptionElement
      :title="$t('stageEntreprise.title')"
      :description="$t('stageEntreprise.description')"
      :program="[
        $t('stageEntreprise.program.day1'),
        $t('stageEntreprise.program.day2'),
        $t('stageEntreprise.program.day3')
      ]"
      :additionalInfo="{
        duree: $t('stageEntreprise.additionalInfo.duration'),
        dates: $t('stageEntreprise.additionalInfo.dates'),
        lieu: $t('stageEntreprise.additionalInfo.location'),
        tarif: $t('stageEntreprise.additionalInfo.price'),
        nombrePersonnes: $t('stageEntreprise.additionalInfo.participants'),
        niveau: $t('stageEntreprise.additionalInfo.level')
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
<template>
  <div class="md:pt-0 pt-16">
    <BannerStage image="/assets/home_banner.jpeg" />
    <DescriptionStage
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
import DescriptionStage from "@/components/DescriptionStage.vue";
import BannerStage from "@/components/BannerStage.vue";

export default {
  components: {
    DescriptionStage,
    BannerStage,
  },
};
</script>
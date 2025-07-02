<template>
  <div class="md:pt-0 pt-16">
    <BannerStage image="/assets/home_banner.jpeg" />
    <DescriptionStage
      :title="$t('stageIntensif.title')"
      :description="$t('stageIntensif.description')"
      :program="[
        $t('stageIntensif.program.day1'),
        $t('stageIntensif.program.day2'),
        $t('stageIntensif.program.day3'),
        $t('stageIntensif.program.day4'),
        $t('stageIntensif.program.day5')
      ]"
      :additionalInfo="{
        duree: $t('stageIntensif.additionalInfo.duration'),
        dates: $t('stageIntensif.additionalInfo.dates'),
        lieu: $t('stageIntensif.additionalInfo.location'),
        tarif: $t('stageIntensif.additionalInfo.price'),
        nombrePersonnes: $t('stageIntensif.additionalInfo.participants'),
        niveau: $t('stageIntensif.additionalInfo.level')
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
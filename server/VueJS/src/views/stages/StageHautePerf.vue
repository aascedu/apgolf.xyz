<template>
  <div class="md:pt-0 pt-16">
    <BannerStage image="/assets/home_banner.jpeg" />
    <DescriptionStage
      :title="$t('stageHautePerf.title')"
      :description="$t('stageHautePerf.description')"
      :program="[
        $t('stageHautePerf.program.day1'),
        $t('stageHautePerf.program.day2'),
        $t('stageHautePerf.program.day3'),
        $t('stageHautePerf.program.day4'),
        $t('stageHautePerf.program.day5'),
        $t('stageHautePerf.program.day6')
      ]"
      :additionalInfo="{
        duree: $t('stageHautePerf.additionalInfo.duration'),
        dates: $t('stageHautePerf.additionalInfo.dates'),
        lieu: $t('stageHautePerf.additionalInfo.location'),
        tarif: $t('stageHautePerf.additionalInfo.price'),
        nombrePersonnes: $t('stageHautePerf.additionalInfo.participants'),
        niveau: $t('stageHautePerf.additionalInfo.level')
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
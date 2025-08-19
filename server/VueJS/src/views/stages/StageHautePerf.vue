<template>
  <div class="md:pt-0 pt-16">
    <Banner image="/assets/home_banner.jpeg" />
    <DescriptionElement
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
import DescriptionElement from "@/components/DescriptionElement.vue";
import Banner from "@/components/Banner.vue";

export default {
  components: {
    DescriptionElement,
    Banner,
  },
};
</script>
<template>
  <div class="md:pt-0 pt-16">
    <Banner image="/assets/stages/BootCampAcademy.png" />
      <DescriptionElement
        :title="$t('stages.bootCampAcademy.title')"
        :description="$t('stages.bootCampAcademy.description')"
        :program="[
          $t('stages.bootCampAcademy.program.day1'),
          $t('stages.bootCampAcademy.program.day2'),
          $t('stages.bootCampAcademy.program.day3'),
          $t('stages.bootCampAcademy.program.day4')
        ]"
        :additionalInfo="{
          duree: $t('stages.bootCampAcademy.additionalInfo.duration'),
          dates: $t('stages.bootCampAcademy.additionalInfo.dates'),
          lieu: $t('stages.bootCampAcademy.additionalInfo.location'),
          tarif: $t('stages.bootCampAcademy.additionalInfo.price'),
          nombrePersonnes: $t('stages.bootCampAcademy.additionalInfo.participants'),
          niveau: $t('stages.bootCampAcademy.additionalInfo.level')
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
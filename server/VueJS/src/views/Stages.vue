<template>
    <Banner
        image="/assets/Accueil-StagesBanner.jpg"
        :text="$t('banner.stages')"
    />
    <div class="padded-div ">
        <StagesIntro />
        <div class="flex flex-row flex-wrap justify-between">
            <ItemElement
                image="/assets/stages/BootCampAcademy.png"
                :title="$t('stages.bootCampAcademy.title')"
                :description="$t('stages.bootCampAcademy.description')"
                link="/boot-camp-academy"
            />
            <ItemElement 
                image="/assets/stages/DataExpertise.jpg"
                :title="$t('stages.dataExpertise.title')"
                :description="$t('stages.dataExpertise.description')"
                link="/data-expertise"
            />
            <ItemElement 
                image="/assets/stages/EvianImmersion.jpg"
                :title="$t('stages.evianImmersion.title')"
                :description="$t('stages.evianImmersion.description')"
                link="/evian-immersion"
            />
        </div>
        <StageCustom 
            image="/assets/home_banner.jpeg"
            :title="$t('stageCustom.title')"
            :description="$t('stageCustom.description')"
            :buttonText="$t('stageCustom.buttonText')"
            href="/contact"
        />
    </div>
</template>

<script>
import CarouselStage from "@/components/CarouselStage.vue";
import ItemElement from "@/components/ItemElement.vue";
import StageCustom from "@/components/StageCustom.vue";
import Banner from "@/components/Banner.vue";
import StagesIntro from "@/components/StagesIntro.vue";

export default {
  components: {
    CarouselStage,
    StageCustom,
    Banner,
    StagesIntro,
    ItemElement,
  },
};
</script>
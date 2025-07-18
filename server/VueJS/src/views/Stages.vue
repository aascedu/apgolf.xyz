<template>
    <Banner
        image="/assets/home_banner.jpeg"
        text='banner.stages'
    />
    <div class="padded-div">
        <StagesIntro />
        <CarouselStage
            :slides="[
                {
                    image: '/assets/home_banner.jpeg',
                    title: $t('stages.carousel.highPerformance'),
                    link: '/stage-haute-performance',
                },
                {
                    image: '/assets/home_banner.jpeg',
                    title: $t('stages.carousel.discovery'),
                    link: '/stage-decouverte',
                },
                {
                    image: '/assets/home_banner.jpeg',
                    title: $t('stages.carousel.corporate'),
                    link: '/stage-entreprise',
                },
                {
                    image: '/assets/home_banner.jpeg',
                    title: $t('stages.carousel.intensive'),
                    link: '/stage-intensif',
                },
                {
                    image: '/assets/home_banner.jpeg',
                    title: $t('stages.carousel.swinghouse'),
                    link: '/stage-swing-house',
                }
            ]"
        />
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
import StageCustom from "@/components/StageCustom.vue";
import Banner from "@/components/Banner.vue";
import StagesIntro from "@/components/StagesIntro.vue";

export default {
  components: {
    CarouselStage,
    StageCustom,
    Banner,
    StagesIntro,
  },
};
</script>
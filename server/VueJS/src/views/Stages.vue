<template>
    <Banner
        image="/assets/home_banner.jpeg"
        text='banner.stages'
    />
    <div class="padded-div ">
        <StagesIntro />
        <div class="flex flex-row flex-wrap gap-10 justify-center">
            <StageElement 
                image="/assets/home_banner.jpeg"
                title="Golf à Chamonix"
                description="10-12 mai 2025"
                link="/stage-haute-performance"
            />
            <StageElement 
                image="/assets/home_banner.jpeg"
                title="Golf à Évian"
                description="24-26 mai 2025"
                link="/stage-decouverte"
            />
            <StageElement 
                image="/assets/home_banner.jpeg"
                title="Golf à Megève"
                description="7-9 juin 2025"
                link="/stage-entreprise"
            />
            <StageElement 
                image="/assets/home_banner.jpeg"
                title="Golf à Paris"
                description="21-23 juin 2025"
                link="/stage-intensif"
            />
            <StageElement 
                image="/assets/home_banner.jpeg"
                title="Golf à Chamonix - Initiation"
                description="5-7 juillet 2025"
                link="/stage-swing-house"
            />
            <StageElement 
                image="/assets/home_banner.jpeg"
                title="Golf à Évian - Junior"
                description="12-14 juillet 2025"
                link="/stage-entreprise"
            />
            <StageElement 
                image="/assets/home_banner.jpeg"
                title="Golf à Megève - Famille"
                description="19-21 juillet 2025"
                link="/stage-intensif"
            />
            <StageElement 
                image="/assets/home_banner.jpeg"
                title="Golf à Paris - Compétition"
                description="26-28 juillet 2025"
                link="/stage-swing-house"
            />
        </div>
        <!-- <CarouselStage
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
        /> -->
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
import StageElement from "@/components/StageElement.vue";
import StageCustom from "@/components/StageCustom.vue";
import Banner from "@/components/Banner.vue";
import StagesIntro from "@/components/StagesIntro.vue";

export default {
  components: {
    CarouselStage,
    StageCustom,
    Banner,
    StagesIntro,
    StageElement,
  },
};
</script>
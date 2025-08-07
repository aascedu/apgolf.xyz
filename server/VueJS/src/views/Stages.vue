<template>
    <Banner
        image="/assets/home_banner.jpeg"
        text='banner.stages'
    />
    <div class="padded-div ">
        <StagesIntro />
        <div class="flex flex-row flex-wrap gap-10 justify-center">
            <ItemElement
                image="/assets/home_banner.jpeg"
                title="Golf à Chamonix"
                description="10-12 mai 2025"
                link="/stage-haute-performance"
            />
            <ItemElement 
                image="/assets/home_banner.jpeg"
                title="Golf à Évian"
                description="24-26 mai 2025"
                link="/stage-decouverte"
            />
            <ItemElement 
                image="/assets/home_banner.jpeg"
                title="Golf à Megève"
                description="7-9 juin 2025"
                link="/stage-entreprise"
            />
            <ItemElement 
                image="/assets/home_banner.jpeg"
                title="Golf à Paris"
                description="21-23 juin 2025"
                link="/stage-intensif"
            />
            <ItemElement 
                image="/assets/home_banner.jpeg"
                title="Golf à Chamonix - Initiation"
                description="5-7 juillet 2025"
                link="/stage-swing-house"
            />
            <ItemElement 
                image="/assets/home_banner.jpeg"
                title="Golf à Évian - Junior"
                description="12-14 juillet 2025"
                link="/stage-entreprise"
            />
            <ItemElement 
                image="/assets/home_banner.jpeg"
                title="Golf à Megève - Famille"
                description="19-21 juillet 2025"
                link="/stage-intensif"
            />
            <ItemElement 
                image="/assets/home_banner.jpeg"
                title="Golf à Paris - Compétition"
                description="26-28 juillet 2025"
                link="/stage-swing-house"
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
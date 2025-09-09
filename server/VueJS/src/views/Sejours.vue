<template>
    <Banner
        image="/assets/Accueil-SejoursBanner.jpg"
        :text="$t('banner.sejours')"
    />
    <div class="padded-div">
        <SejoursIntro />
        <div class="flex flex-row flex-wrap justify-start">

            <ItemElement 
                    image="/assets/sejours/MontBlancExperience.jpg"
                    title="Mont Blanc Golf Experience"
                    description="Dates flexibles"
                    link="/mont-blanc-experience"
                />
                <ItemElement 
                    image="/assets/sejours/RoyalPark.jpg"
                    title="Royal Park I Roveri"
                    description="Dates flexibles"
                    link="/royal-park"
                />
                <ItemElement 
                    image="/assets/sejours/SkiGolf.jpg"
                    title="Ski & Golf"
                    description="Entre le 22 avril et le 3 mai"
                    link="/ski-golf"
                />
                <ItemElement 
                    image="/assets/sejours/VillaCarolina.jpg"
                    title="Sejour a Villa Carolina"
                    description="Dates flexibles"
                    link="/villa-carolina"
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

import Banner from '@/components/Banner.vue';
import SejoursIntro from '@/components/SejoursIntro.vue';
import ItemElement from '@/components/ItemElement.vue';
import StageCustom from '@/components/StageCustom.vue';

export default {
    components: {
        Banner,
        SejoursIntro,
        ItemElement,
        StageCustom,
    },
};
</script>
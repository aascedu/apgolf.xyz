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
                    :title="$t('sejours.montBlancExperience.title')"
                    :description="$t('sejours.montBlancExperience.description')"
                    link="/mont-blanc-experience"
                />
                <ItemElement 
                    image="/assets/sejours/RoyalPark.jpg"
                    :title="$t('sejours.royalPark.title')"
                    :description="$t('sejours.royalPark.description')"
                    link="/royal-park"
                />
                <ItemElement 
                    image="/assets/sejours/SkiGolf.jpg"
                    :title="$t('sejours.skiGolf.title')"
                    :description="$t('sejours.skiGolf.description')"
                    link="/ski-golf"
                />
                <ItemElement 
                    image="/assets/sejours/VillaCarolina.jpg"
                    :title="$t('sejours.villaCarolina.title')"
                    :description="$t('sejours.villaCarolina.description')"
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
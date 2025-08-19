<template>
    <Banner
        image="/assets/Accueil-SejoursBanner.jpg"
        :text="$t('banner.sejours')"
    />
    <div class="padded-div">
        <SejoursIntro />
        <div class="flex flex-row flex-wrap justify-start">

            <ItemElement 
                    image="/assets/home_banner.jpeg"
                    title="Voyage a Agadir"
                    description="10-12 mai 2025"
                    link="/test-sejour"
                />
                <ItemElement 
                    image="/assets/home_banner.jpeg"
                    title="Voyage a Marrakech"
                    description="24-26 mai 2025"
                    link="/test-sejour"
                />
                <ItemElement 
                    image="/assets/home_banner.jpeg"
                    title="Voyage en Italie"
                    description="7-9 juin 2025"
                    link="/test-sejour"
                />
                <ItemElement 
                    image="/assets/home_banner.jpeg"
                    title="Decouverte du Sud Ouest et ses golfs"
                    description="21-23 juin 2025"
                    link="/test-sejour"
                />
                <ItemElement 
                    image="/assets/home_banner.jpeg"
                    title="Golf à Chamonix - Initiation"
                    description="5-7 juillet 2025"
                    link="/test-sejour"
                />
                <ItemElement 
                    image="/assets/home_banner.jpeg"
                    title="Golf à Évian - Junior"
                    description="12-14 juillet 2025"
                    link="/test-sejour"
                />
                <ItemElement 
                    image="/assets/home_banner.jpeg"
                    title="Golf à Megève - Famille"
                    description="19-21 juillet 2025"
                    link="/test-sejour"
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
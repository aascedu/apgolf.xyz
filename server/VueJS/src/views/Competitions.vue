<template>
    <Banner
        image="/assets/Accueil-ProAmBanner.jpg"
        :text="$t('banner.competitions')"
    />
    <div class="padded-div">
        <ProAmIntro />
        <div class="flex flex-row flex-wrap justify-start">
            <ItemElement 
                    image="/assets/home_banner.jpeg"
                    title="Pro Am d'Evian"
                    description="10-12 mai 2025"
                    link="/test-proam"
                />
                <ItemElement 
                    image="/assets/home_banner.jpeg"
                    title="Pro Am de Paris"
                    description="24-26 mai 2025"
                    link="/test-proam"
                />
                <ItemElement 
                    image="/assets/home_banner.jpeg"
                    title="Pro Am de Beaver Creek"
                    description="7-9 juin 2025"
                    link="/test-proam"
                />
                <ItemElement 
                    image="/assets/home_banner.jpeg"
                    title="Pro Am de Tokyo"
                    description="21-23 juin 2025"
                    link="/test-proam"
                />
                <ItemElement 
                    image="/assets/home_banner.jpeg"
                    title="Golf à Chamonix - Initiation"
                    description="5-7 juillet 2025"
                    link="/test-proam"
                />
                <ItemElement 
                    image="/assets/home_banner.jpeg"
                    title="Golf à Évian - Junior"
                    description="12-14 juillet 2025"
                    link="/test-proam"
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

import InfoPratique from '@/components/InfoPratique.vue';
import Banner from '@/components/Banner.vue';
import ProAmIntro from '@/components/ProAmIntro.vue';
import ItemElement from '@/components/ItemElement.vue';
import StageCustom from '@/components/StageCustom.vue';

export default {
    components: {
        InfoPratique,
        Banner,
        ProAmIntro,
        ItemElement,
        StageCustom,
    },
};
</script>
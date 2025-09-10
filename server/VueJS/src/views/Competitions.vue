<template>
    <Banner
        image="/assets/Accueil-ProAmBanner.jpg"
        :text="$t('banner.competitions')"
    />
    <div class="padded-div">
        <StageCustom 
            image="/assets/ProAmCustom.jpg"
            :title="$t('proAmCustom.title')"
            :description="$t('proAmCustom.description')"
            :buttonText="$t('proAmCustom.buttonText')"
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
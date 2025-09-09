<template>
    <Banner
        image="/assets/home_banner.jpeg"
        :text="$t('banner.about')"
    />
    <div class="padded-div">
        <!-- <Presentation /> -->
        <HomeElement 
            image="/assets/APropos.jpg"
            title="Pierre ASCEDU"
            :description="$t('presentation.description')"
            href="/contact"
            :buttonText="$t('presentation.buttonText')"
        />
    </div>
</template>

<script>

import Presentation from '@/components/Presentation.vue';
import Banner from '@/components/Banner.vue';
import HomeElement from '@/components/HomeElement.vue';

export default {
    components: {
        Presentation,
        Banner,
        HomeElement,
    },
};
</script>
<template>
    <Banner
        image="/assets/home_banner.jpeg"
        text='banner.about'
    
    />
    <Presentation />
</template>

<script>

import Presentation from '@/components/Presentation.vue';
import Banner from '@/components/Banner.vue';

export default {
    components: {
        Presentation,
        Banner,
    },
};
</script>
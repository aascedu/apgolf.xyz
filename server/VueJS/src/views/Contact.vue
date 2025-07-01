<template>
    <Banner
        image="src/assets/home_banner.jpeg"
        text="Un échange, un premier pas"/>
    <InfoPratique />
</template>

<script>

import InfoPratique from '@/components/InfoPratique.vue';
import Banner from '@/components/Banner.vue';

export default {
    components: {
        InfoPratique,
        Banner,
    },
};
</script>
<template>
    <Banner
        image="/assets/home_banner.jpeg"
        text='banner.contact'
    />
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
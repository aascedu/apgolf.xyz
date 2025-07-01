<template>
    <Banner
        image="/src/assets/home_banner.jpeg"
        text="De l’expérience naît la méthode"
    
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
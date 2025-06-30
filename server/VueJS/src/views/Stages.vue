<template>
    <div class="hidden md:flex w-full justify-center">
        <div class="flex items-center justify-center mt-[2vw] mb-[2vw]">
        <div class="w-[10vw] mr-[1vw] h-[3px] bg-[#ffc107]"></div>
        <h2 class="text-[2.0vw] max-text-[48px] font-bold uppercase mx-4 text-green-700 whitespace-nowrap">
          Nos stages
        </h2>
        <div class="w-[10vw] ml-[1vw] h-[3px] bg-[#ffc107]"></div>
      </div>
    </div>
    <CarouselStage />
</template>

<script>

import CarouselStage from '@/components/CarouselStage.vue';

export default {
    components: {
        CarouselStage,
    },
};
</script>
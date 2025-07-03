<template>
    <Banner
        image="/assets/home_banner.jpeg"
        text='banner.stages'
    />
    <!-- Desktop Div -->
    <div class="hidden md:block">
        <div class="flex w-full mt-[2vw] justify-center">
            <div class="flex items-center justify-center mt-[2vw] mb-[2vw]">
                <div class="w-[10vw] mr-[1vw] h-[3px] bg-[#ffc107]"></div>
                <h2 class="text-[2.0vw] max-text-[48px] font-bold uppercase mx-4 text-green-700 whitespace-nowrap">
                    {{ $t('stages.title') }}
                </h2>
                <div class="w-[10vw] ml-[1vw] h-[3px] bg-[#ffc107]"></div>
            </div>
        </div>
        <div class="mb-[4vw] text-center px-[5vw]">
            <p class="text-[1.2vw] max-text-[20px] leading-relaxed text-gray-700 ">
                {{ $t('stages.description') }}
            </p>
        </div>
    </div>

    <!-- Mobile Div -->
    <div class="md:hidden w-full px-8 mt-8 mb-8">
        <div class="flex items-center justify-center">
            <!-- Horizontal Line Before Text -->
            <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
            <h2 class="text-2xl font-bold uppercase text-green-700 text-center mx-4 whitespace-nowrap">
                {{ $t('stages.title') }}
            </h2>
            <!-- Horizontal Line After Text -->
            <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
        </div>
        <p class="mt-6 text-base text-gray-700 leading-relaxed text-center max-w-[20rem] mx-auto">
            {{ $t('stages.description') }}
        </p>
    </div>
    <div>
        <CarouselStage
            :slides="[
                {
                    image: '/assets/home_banner.jpeg',
                    title: $t('stages.carousel.highPerformance'),
                    link: '/stage-haute-performance',
                },
                {
                    image: '/assets/home_banner.jpeg',
                    title: $t('stages.carousel.discovery'),
                    link: '/stage-decouverte',
                },
                {
                    image: '/assets/home_banner.jpeg',
                    title: $t('stages.carousel.corporate'),
                    link: '/stage-entreprise',
                },
                {
                    image: '/assets/home_banner.jpeg',
                    title: $t('stages.carousel.intensive'),
                    link: '/stage-intensif',
                },
                {
                    image: '/assets/home_banner.jpeg',
                    title: $t('stages.carousel.swinghouse'),
                    link: '/stage-swing-house',
                }
            ]"
        />
    </div>
    <StageCustom />
</template>

<script>
import CarouselStage from "@/components/CarouselStage.vue";
import StageCustom from "@/components/StageCustom.vue";
import Banner from "@/components/Banner.vue";

export default {
  components: {
    CarouselStage,
    StageCustom,
    Banner,
  },
};
</script>
<template>
    <Banner
        image="/assets/home_banner.jpeg"
        text="Préparez votre jeu, vivez l’expérience"
    
    />
    <!-- Desktop Div -->
    <div class="hidden md:block">
        <div class="flex w-full mt-[2vw] justify-center">
            <div class="flex items-center justify-center mt-[2vw] mb-[2vw]">
                <div class="w-[10vw] mr-[1vw] h-[3px] bg-[#ffc107]"></div>
                <h2 class="text-[2.0vw] max-text-[48px] font-bold uppercase mx-4 text-green-700 whitespace-nowrap">
                    Nos stages
                </h2>
                <div class="w-[10vw] ml-[1vw] h-[3px] bg-[#ffc107]"></div>
            </div>
        </div>
        <div class="mb-[4vw] text-center px-[5vw]">
            <p class="text-[1.2vw] max-text-[20px] leading-relaxed text-gray-700 ">
                Découvrez nos stages de golf adaptés à tous les niveaux, que vous soyez débutant ou joueur confirmé. Profitez d’un encadrement professionnel et d’un cadre exceptionnel pour perfectionner votre technique, améliorer votre jeu et vivre une expérience unique. Rejoignez-nous pour des moments d’apprentissage, de partage et de passion autour du golf.
            </p>
        </div>
    </div>

    <!-- Mobile Div -->
    <div class="md:hidden w-full px-8 mt-8 mb-8">
        <div class="flex items-center justify-center">
        <!-- Horizontal Line Before Text -->
        <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
        <h2 class="text-2xl font-bold uppercase text-green-700 text-center mx-4 whitespace-nowrap">
            Nos Stages
        </h2>
        <!-- Horizontal Line After Text -->
        <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
        </div>
        <p class="mt-6 text-base text-gray-700 leading-relaxed text-center max-w-[20rem] mx-auto">
        Stages de golf à Chamonix, encadrés par un coach expert de la haute performance. Que vous soyez débutant, amateur passionné ou joueur en quête d’excellence, ces stages s’adaptent à votre niveau : découverte, immersion nature ou perfectionnement intensif. Chaque session allie progression technique, travail mental et plaisir du jeu dans un cadre exceptionnel, au pied du Mont-Blanc.
        </p>
    </div>
    <div>
    <CarouselStage
      :slides="[
        {
          image: '/assets/home_banner.jpeg',
          title: 'Stage Haute Performance',
          link: '/stage-haute-performance',
        },
        {
          image: '/assets/home_banner.jpeg',
          title: 'Stage Découverte',
          link: '/stage-decouverte',
        },
        {
          image: '/assets/home_banner.jpeg',
          title: 'Stage Entreprise',
          link: '/stage-entreprise',
        },
        {
          image: '/assets/home_banner.jpeg',
          title: 'Stage Intensif',
          link: '/stage-intensif',
        },
        {
          image: '/assets/home_banner.jpeg',
          title: 'Stage Haute Performance',
          link: '/stage-haute-performance',
        },
        {
          image: '/assets/home_banner.jpeg',
          title: 'Stage Découverte',
          link: '/stage-decouverte',
        },
        {
          image: '/assets/home_banner.jpeg',
          title: 'Stage Entreprise',
          link: '/stage-entreprise',
        },
        {
          image: '/assets/home_banner.jpeg',
          title: 'Stage Intensif',
          link: '/stage-intensif',
        },
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
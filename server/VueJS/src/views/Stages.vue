<template>
    <!-- Desktop Div -->
    <div class="hidden md:block">
        <div class="flex w-full justify-center">
            <div class="flex items-center justify-center mt-[2vw] mb-[2vw]">
                <div class="w-[10vw] mr-[1vw] h-[3px] bg-[#ffc107]"></div>
                <h2 class="text-[2.0vw] max-text-[48px] font-bold uppercase mx-4 text-green-700 whitespace-nowrap">
                    Nos stages
                </h2>
                <div class="w-[10vw] ml-[1vw] h-[3px] bg-[#ffc107]"></div>
            </div>
        </div>
        <div class="mb-[4vw] text-center px-[5vw]">
            <p class="text-[1.2vw] max-text-[20px] leading-relaxed text-gray-700 font-matangi">
                Découvrez nos stages de golf adaptés à tous les niveaux, que vous soyez débutant ou joueur confirmé. Profitez d’un encadrement professionnel et d’un cadre exceptionnel pour perfectionner votre technique, améliorer votre jeu et vivre une expérience unique. Rejoignez-nous pour des moments d’apprentissage, de partage et de passion autour du golf.
            </p>
        </div>
    </div>

    <!-- Mobile Div -->
    <div class="md:hidden">
        <div class="flex w-full justify-center">
            <div class="flex items-center justify-center mt-4 mb-4">
                <div class="w-[20vw] mr-2 h-[2px] bg-[#ffc107]"></div>
                <h2 class="text-[5vw] font-bold uppercase mx-2 text-green-700 whitespace-nowrap">
                    Nos stages
                </h2>
                <div class="w-[20vw] ml-2 h-[2px] bg-[#ffc107]"></div>
            </div>
        </div>
        <div class="mb-6 text-center px-6">
            <p class="text-[4vw] leading-relaxed text-gray-700 font-matangi">
                Découvrez nos stages de golf adaptés à tous les niveaux, que vous soyez débutant ou joueur confirmé. Profitez d’un encadrement professionnel et d’un cadre exceptionnel pour perfectionner votre technique, améliorer votre jeu et vivre une expérience unique. Rejoignez-nous pour des moments d’apprentissage, de partage et de passion autour du golf.
            </p>
        </div>
    </div>
    <CarouselStage />
</template>

<script>
import CarouselStage from "@/components/CarouselStage.vue";

export default {
  components: {
    CarouselStage,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Matangi&display=swap');

.font-matangi {
  font-family: 'Matangi', sans-serif;
}
</style>
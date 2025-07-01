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
            <p class="text-[1.2vw] max-text-[20px] leading-relaxed text-gray-700 ">
                Vous avez un besoin precis ou un projet spécifique en tête ? Notre équipe est là pour vous accompagner dans la création d’un stage de golf sur mesure, adapté à vos attentes et à votre niveau. Que ce soit pour un groupe, une entreprise ou un événement particulier, nous mettons tout en œuvre pour vous offrir une expérience unique et personnalisée. Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons le réaliser ensemble.
            </p>
        </div>
    </div>

    <!-- Mobile Div -->
    <div class="md:hidden w-full px-8 mt-8">
        <div class="flex items-center justify-center">
        <!-- Horizontal Line Before Text -->
        <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
        <h2 class="text-[4.5vw] font-bold uppercase text-green-700 text-center mx-4 whitespace-nowrap">
            Stages personnalisés
        </h2>
        <!-- Horizontal Line After Text -->
        <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
        </div>
        <p class="mt-6 text-base text-gray-700 leading-relaxed text-center max-w-[20rem] mx-auto">
        Stages de golf à Chamonix, encadrés par un coach expert de la haute performance. Que vous soyez débutant, amateur passionné ou joueur en quête d’excellence, ces stages s’adaptent à votre niveau : découverte, immersion nature ou perfectionnement intensif. Chaque session allie progression technique, travail mental et plaisir du jeu dans un cadre exceptionnel, au pied du Mont-Blanc.
        </p>
        <!-- Square Image -->
        <div class="mt-6 flex justify-center">
        <img
            src="/src/assets/home_banner.jpeg"
            alt="Golf Banner"
            class="w-[80vw] h-[70vw] object-cover rounded-md mb-8"
        />
        </div>
        <!-- Button -->
        <div class="flex justify-center mb-8">
        <button
            class="px-6 py-2 bg-green-700 text-white  font-bold uppercase rounded-md border-2 border-[#ffc107] hover:bg-green-800 transition"
            @click="navigateToStages"
        >
            Contactez-nous
        </button>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    navigateToStages() {
      window.location.href = '/contact';
    },
  },
};
</script>
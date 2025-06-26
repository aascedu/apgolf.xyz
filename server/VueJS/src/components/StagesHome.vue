<template>
  <!-- Desktop -->
  <div class="hidden md:flex w-full justify-center px-[5vw] mt-[4vw] mb-[4vw]">
    <!-- Picture on the Left -->
    <div class="flex-shrink-0 w-[30vw] h-[20vw]">
      <img
        src="/src/assets/home_banner.jpeg"
        alt="Golf Banner"
        class="w-[30vw] h-[20vw] object-cover rounded-md"
      />
    </div>
    <!-- Text and Button on the Right -->
    <div class="ml-[4vw] text-center">
      <div class="flex items-center justify-center">
        <div class="w-[10vw] h-[3px] bg-[#ffc107]"></div>
        <h2 class="text-[2.0vw] max-text-[48px] font-bold uppercase mx-4 text-green-700 whitespace-nowrap">
          Nos stages
        </h2>
        <div class="w-[10vw] h-[3px] bg-[#ffc107]"></div>
      </div>
      <p class="text-[1.2vw] max-text-[20px] text-gray-700 leading-relaxed max-w-[40vw] mx-auto">
        Stages de golf à Chamonix, encadrés par un coach expert de la haute performance. Que vous soyez débutant, amateur passionné ou joueur en quête d’excellence, ces stages s’adaptent à votre niveau : découverte, immersion nature ou perfectionnement intensif. Chaque session allie progression technique, travail mental et plaisir du jeu dans un cadre exceptionnel, au pied du Mont-Blanc.
      </p>
      <div class="flex justify-center">
        <button
          class="mt-[1vw] px-[2vw] py-[1vw] text-[1.2vw] bg-green-700 text-white font-bold uppercase rounded-md border-2 border-[#ffc107] hover:bg-green-800 transition"
          @click="navigateToStages"
        >
          Voir les stages
        </button>
      </div>
    </div>
  </div>
  <!-- Mobile -->
  <div class="md:hidden w-full px-8 mt-8">
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
    <!-- Square Image -->
    <div class="mt-6 flex justify-center">
      <img
        src="/src/assets/home_banner.jpeg"
        alt="Golf Banner"
        class="w-[400px] h-[300px] object-cover rounded-md mb-8"
      />
    </div>
    <!-- Button -->
    <div class="flex justify-center mb-8">
      <button
        class="px-6 py-2 bg-green-700 text-white font-bold uppercase rounded-md border-2 border-[#ffc107] hover:bg-green-800 transition"
        @click="navigateToStages"
      >
        Voir les stages
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToStages() {
      window.location.href = '/stages';
    },
  },
};
</script>

<style scoped>
</style>
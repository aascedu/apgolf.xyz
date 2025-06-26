<template>
  <!-- Desktop -->
  <div class="hidden md:block w-full px-32 mt-16">
    <div class="flex items-center w-full">
      <div class="w-32 h-[3px] bg-[#ffc107]"></div>
      <h2 class="text-4xl font-bold uppercase ml-4 mr-4 text-[#ffc107] whitespace-nowrap">
        Nos stages
      </h2>
      <div class="w-32 h-[3px] bg-[#ffc107]"></div>
    </div>
    <p class="mt-6 text-lg text-gray-700 leading-relaxed text-center max-w-[32rem]">
      Stages de golf à Chamonix, encadrés par un coach expert de la haute performance. Que vous soyez débutant, amateur passionné ou joueur en quête d’excellence, ces stages s’adaptent à votre niveau : découverte, immersion nature ou perfectionnement intensif. Chaque session allie progression technique, travail mental et plaisir du jeu dans un cadre exceptionnel, au pied du Mont-Blanc.
    </p>
  </div>
  <!-- Mobile -->
  <div class="md:hidden w-full px-8 mt-8">
    <div class="flex items-center justify-center">
      <!-- Horizontal Line Before Text -->
      <div class="flex-1 h-[2px] bg-green-700"></div>
      <h2 class="text-2xl font-bold uppercase text-green-700 text-center mx-4 whitespace-nowrap">
        Nos Stages
      </h2>
      <!-- Horizontal Line After Text -->
      <div class="flex-1 h-[2px] bg-green-700"></div>
    </div>
    <p class="mt-6 text-base text-gray-700 leading-relaxed text-center max-w-[20rem] mx-auto">
      Stages de golf à Chamonix, encadrés par un coach expert de la haute performance. Que vous soyez débutant, amateur passionné ou joueur en quête d’excellence, ces stages s’adaptent à votre niveau : découverte, immersion nature ou perfectionnement intensif. Chaque session allie progression technique, travail mental et plaisir du jeu dans un cadre exceptionnel, au pied du Mont-Blanc.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
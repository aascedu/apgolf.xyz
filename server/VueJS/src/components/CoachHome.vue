<template>
  <!-- Desktop -->
  <div class="hidden md:block w-full px-8 mt-[4vw] mb-[2vw]">
    <!-- Title with Horizontal Line -->
    <div class="flex items-center mb-[2vw]">
      <div class="flex-1 max-w-[17vw] h-[3px] bg-[#ffc107] ml-[2vw] mr-[2vw]"></div>
      <!-- Title -->
      <h2 class="text-[2vw] font-bold uppercase text-green-700 whitespace-nowrap">
        Le Coach
      </h2>
      <!-- Horizontal Line -->
      <div class="flex-1 h-[3px] bg-[#ffc107] ml-[2vw] mr-[2vw]"></div>
    </div>

    <!-- Coach Presentation Section -->
    <div class="flex items-center">
      <!-- Text Section -->
      <div class="w-1/2 text-center text-left">
        <p class="mt-[2vw] ml-[4vw] text-[1.4vw] text-gray-700 leading-[1.8] tracking-wide">
          Professionnel diplômé depuis plus de 30 ans, Pierre Ascedu enseigne au Golf de Chamonix avec passion et exigence.
          Ancien entraîneur de l’équipe militaire française de ski, il possède une expertise unique du coaching en milieu de haute performance.
          Sa pédagogie repose sur une approche personnalisée, technique et mentale, adaptée à tous les niveaux de jeu. Que vous soyez débutant ou joueur confirmé,
          il vous accompagne dans votre progression avec précision, bienveillance et efficacité.
          Grâce à des outils modernes (Trackman, AimPoint, TPI) et une grande expérience de terrain,
          Pierre vous aide à atteindre vos objectifs, que ce soit pour le loisir ou la compétition.
        </p>
        <!-- Button -->
        <div class="mt-[2vw]">
          <button
            class="px-[2vw] py-[1vw] text-[1vw] bg-green-700 text-white font-bold uppercase rounded-md border-2 border-[#ffc107] hover:bg-green-800 transition"
            @click="navigateToCoach"
          >
            En savoir plus
          </button>
        </div>
      </div>
      <!-- Picture Section -->
      <div class="w-1/2 flex justify-center">
        <img
          src="/src/assets/home_banner.jpeg"
          alt="Coach Pierre ASCEDU"
          class="w-[40vw] h-[30vw] object-cover rounded-md shadow-md"
        />
      </div>
    </div>
  </div>

  <!-- Mobile -->
  <div class="md:hidden w-full px-8 mt-8">
    <div class="flex items-center justify-center">
      <!-- Horizontal Line Before Text -->
      <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
      <h2 class="text-2xl font-bold uppercase text-green-700 text-center mx-4 whitespace-nowrap">
        Le Coach
      </h2>
      <!-- Horizontal Line After Text -->
      <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
    </div>
    <p class="mt-6 text-base text-gray-700 leading-relaxed text-center max-w-[20rem] mx-auto">
      Professionnel diplômé depuis plus de 30 ans, Pierre Ascedu enseigne au Golf de Chamonix avec passion et exigence.
      Ancien entraîneur de l’équipe militaire française de ski, il possède une expertise unique du coaching en milieu de haute performance.
      Sa pédagogie repose sur une approche personnalisée, technique et mentale, adaptée à tous les niveaux de jeu. Que vous soyez débutant ou joueur confirmé,
      il vous accompagne dans votre progression avec précision, bienveillance et efficacité.
      Grâce à des outils modernes (Trackman, AimPoint, TPI) et une grande expérience de terrain,
      Pierre vous aide à atteindre vos objectifs, que ce soit pour le loisir ou la compétition.
    </p>
    <!-- Square Image -->
    <div class="mt-6 flex justify-center">
      <img
        src="/src/assets/home_banner.jpeg"
        alt="Coach Pierre ASCEDU"
        class="w-[80vw] h-[70vw] object-cover rounded-md mb-8"
      />
    </div>
    <!-- Button -->
    <div class="flex justify-center mb-8">
      <button
        class="px-6 py-2 bg-green-700 text-white font-bold uppercase rounded-md border-2 border-[#ffc107] hover:bg-green-800 transition"
        @click="navigateToCoach"
      >
        En savoir plus
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToCoach() {
      window.location.href = '/propos';
    },
  },
};
</script>

<style scoped>
/* Improved readability for the text */
p {
  font-family: 'Matangi', sans-serif;
  word-spacing: 0.05em;
}
</style>
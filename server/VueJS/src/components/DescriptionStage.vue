<template>
  <!-- Desktop Div -->
  <div class="hidden md:block w-full px-8 mt-8">
    <!-- Title with Horizontal Lines -->
    <div class="flex items-center justify-center">
      <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
      <h2 class="text-[3.5vw] md:text-[2vw] font-bold uppercase text-green-700 text-center mx-4 whitespace-nowrap">
        {{ title }}
      </h2>
      <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
    </div>

    <!-- Content Section -->
    <div class="flex flex-col md:flex-row mt-8 space-y-8 md:space-y-0 md:space-x-8 px-8">
      <!-- Short Description and Program -->
      <div class="flex-1">
        <!-- Short Description -->
        <p class="text-[3.5vw] md:text-[1.2vw] text-gray-700 leading-relaxed text-left max-w-[90%] md:max-w-[40vw]">
          {{ description }}
        </p>

        <!-- Program Section -->
        <div v-if="program && program.length" class="mt-8">
          <h3 class="text-[3.5vw] md:text-[1.5vw] font-bold uppercase text-green-700 text-left mb-4">
            Le programme en détails
          </h3>
          <ul class="space-y-6">
            <li v-for="(day, index) in program" :key="index" class="text-[3.5vw] md:text-[1.2vw] text-gray-700 leading-relaxed">
              <span v-html="day"></span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Additional Information -->
      <div class="flex-1 md:p-6 text-left md:text-right">
        <h3 class="text-[3.5vw] md:text-[1.5vw] font-bold uppercase text-green-700 mb-4">Informations</h3>
        <ul class="text-[3.5vw] md:text-[1.2vw] text-gray-700 leading-relaxed space-y-4">
          <li><strong>Durée:</strong> {{ additionalInfo.duree }}</li>
          <li><strong>Dates:</strong> {{ additionalInfo.dates }}</li>
          <li><strong>Lieu / Accueil:</strong> {{ additionalInfo.lieu }}</li>
          <li><strong>Tarif participant:</strong> {{ additionalInfo.tarif }}</li>
          <li><strong>Nombre de personnes:</strong> {{ additionalInfo.nombrePersonnes }}</li>
          <li><strong>Niveau:</strong> {{ additionalInfo.niveau }}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class=" md:hidden w-full px-8 mt-8">
    <!-- Title with Horizontal Lines -->
    <div class="flex items-center justify-center">
      <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
      <h2 class="text-[3.5vw] font-bold uppercase text-green-700 text-center mx-4 whitespace-nowrap">
        {{ title }}
      </h2>
      <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
    </div>

    <!-- Content Section -->
    <div class="flex flex-col mt-8 space-y-8 px-8">
      <!-- Short Description and Program -->
      <div class="flex-1">
        <!-- Short Description -->
        <p class="text-[3.5vw] text-gray-700 leading-relaxed text-left max-w-[90%]">
          {{ description }}
        </p>

        <!-- Program Section -->
        <div v-if="program && program.length" class="mt-8">
          <h3 class="text-[3.5vw] font-bold uppercase text-green-700 text-left mb-4">
            Le programme en détails
          </h3>
          <ul class="space-y-6">
            <li v-for="(day, index) in program" :key="index" class="text-[3.5vw] text-gray-700 leading-relaxed">
              <span v-html="day"></span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Additional Information -->
      <div class="flex-1 text-left ">
        <h3 class="text-[3.5vw] font-bold uppercase text-green-700 mb-4">Informations</h3>
        <ul class="text-[3.5vw] text-gray-700 leading-relaxed space-y-4">
          <li><strong>Durée:</strong> {{ additionalInfo.duree }}</li>
          <li><strong>Dates:</strong> {{ additionalInfo.dates }}</li>
          <li><strong>Lieu / Accueil:</strong> {{ additionalInfo.lieu }}</li>
          <li><strong>Tarif participant:</strong> {{ additionalInfo.tarif }}</li>
          <li><strong>Nombre de personnes:</strong> {{ additionalInfo.nombrePersonnes }}</li>
          <li><strong>Niveau:</strong> {{ additionalInfo.niveau }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionStage",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    program: {
      type: Array,
      required: false,
      default: () => [],
    },
    additionalInfo: {
      type: Object,
      required: true,
      default: () => ({
        duree: "",
        dates: "",
        lieu: "",
        tarif: "",
        nombrePersonnes: "",
        niveau: "",
      }),
    },
  },
};
</script>
<template>
  <!-- Desktop -->
  <div class="hidden md:flex w-full justify-center px-[5vw] mt-[4vw]">
    <!-- Picture on the Left -->
    <div class="flex-shrink-0">
      <img
        src="/assets/home_banner.jpeg"
        alt="Golf Banner"
        class="w-[40vw] h-[30vw] object-cover rounded-md"
      />
    </div>
    <!-- Text and Button on the Right -->
    <div class="ml-[4vw] text-center">
      <div class="flex items-center justify-center mt-[2vw]">
        <div class="w-[10vw] mr-[1vw] h-[3px] bg-[#ffc107]"></div>
        <h2 class="text-[2.0vw] max-text-[48px] font-bold uppercase mx-4 text-green-700 whitespace-nowrap">
          {{ $t('stagesHome.title') }}
        </h2>
        <div class="w-[10vw] ml-[1vw] h-[3px] bg-[#ffc107]"></div>
      </div>
      <p class="text-[1.2vw] max-text-[20px] text-gray-700 leading-relaxed max-w-[40vw] mt-[3vw] mb-[3vw] mx-auto">
        {{ $t('stagesHome.description') }}
      </p>
      <div class="flex justify-center">
        <button
          class="mt-[1vw] px-[2vw] py-[1vw] text-[1.2vw] bg-green-700 text-white font-bold uppercase rounded-md border-2 border-[#ffc107] hover:bg-green-800 transition"
          @click="navigateToStages"
        >
          {{ $t('stagesHome.buttonText') }}
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
        {{ $t('stagesHome.title') }}
      </h2>
      <!-- Horizontal Line After Text -->
      <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
    </div>
    <p class="mt-6 text-base text-gray-700 leading-relaxed text-center max-w-[20rem] mx-auto">
      {{ $t('stagesHome.description') }}
    </p>
    <!-- Square Image -->
    <div class="mt-6 flex justify-center">
      <img
        src="/assets/home_banner.jpeg"
        alt="Golf Banner"
        class="w-[80vw] h-[70vw] object-cover rounded-md mb-8"
      />
    </div>
    <!-- Button -->
    <div class="flex justify-center mb-8">
      <button
        class="px-6 py-2 bg-green-700 text-white font-bold uppercase rounded-md border-2 border-[#ffc107] hover:bg-green-800 transition"
        @click="navigateToStages"
      >
        {{ $t('stagesHome.buttonText') }}
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
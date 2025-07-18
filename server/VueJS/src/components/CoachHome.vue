<template>
  <!-- Desktop -->
  <div class="hidden md:flex flex-row flex-wrap mt-[4vw]">
    <!-- Picture on the Left -->
    <div class="flex-shrink-0 w-[35%]">
      <img
        src="/assets/home_banner.jpeg"
        alt="Golf Banner"
        class="aspect-[4/3] object-cover"
      />
    </div>
    <!-- Text and Button on the Right -->
    <div class="flex-1 ml-[2vw]">
      <div class="flex items-center">
        <h2 class="font-bold uppercase text-green-700 whitespace-nowrap">
          {{ $t('stagesHome.title') }}
        </h2>
        <div class="line"></div>
      </div>
      <p class="text-gray-700 text-[0.70vw] leading-relaxed">
        {{ $t('stagesHome.description') }}
      </p>
      <div class="mt-[1vw]">
        <button
          class="bg-green-700 text-white font-bold text-[0.7vw] rounded-full border-2 border-[#ffc107] hover:bg-green-800 transition"
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
        {{ $t('coachHome.title') }}
      </h2>
      <!-- Horizontal Line After Text -->
      <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
    </div>
    <p class="mt-6 text-base text-gray-700 leading-relaxed text-center max-w-[20rem] mx-auto">
      {{ $t('coachHome.description') }}
    </p>
    <!-- Square Image -->
    <div class="mt-6 flex justify-center">
      <img
        src="/assets/home_banner.jpeg"
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
        {{ $t('coachHome.buttonText') }}
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
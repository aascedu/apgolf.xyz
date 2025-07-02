<template>
  <!-- Desktop Div -->
  <div class="hidden md:block w-full px-8 mb-[2vw]">
    <!-- Title with Horizontal Line -->
    <div class="flex items-center mb-[2vw]">
      <div class="flex-1 max-w-[10vw] h-[3px] bg-[#ffc107] ml-[2vw] mr-[2vw]"></div>
      <!-- Title -->
      <h2 class="text-[2vw] font-bold uppercase text-green-700 whitespace-nowrap">
        {{ $t('stageCustom.title') }}
      </h2>
      <!-- Horizontal Line -->
      <div class="flex-1 h-[3px] bg-[#ffc107] ml-[2vw] mr-[2vw]"></div>
    </div>

    <!-- Coach Presentation Section -->
    <div class="flex items-center">
      <!-- Text Section -->
      <div class="w-1/2 text-center text-left">
        <p class="mt-[2vw] ml-[4vw] text-[1.4vw] text-gray-700 leading-[1.8] tracking-wide">
          {{ $t('stageCustom.description') }}
        </p>
        <!-- Button -->
        <div class="mt-[2vw]">
          <button
            class="px-[2vw] ml-[2vw] py-[1vw] text-[1vw] bg-green-700 text-white font-bold uppercase rounded-md border-2 border-[#ffc107] hover:bg-green-800 transition"
            @click="navigateToContact"
          >
            {{ $t('stageCustom.buttonText') }}
          </button>
        </div>
      </div>
      <!-- Picture Section -->
      <div class="w-1/2 flex justify-center">
        <img
          src="/assets/home_banner.jpeg"
          alt="Coach Pierre ASCEDU"
          class="w-[40vw] h-[30vw] object-cover rounded-md shadow-md"
        />
      </div>
    </div>
  </div>

  <!-- Mobile Div -->
  <div class="md:hidden w-full px-8 mt-8">
    <div class="flex items-center justify-center">
      <!-- Horizontal Line Before Text -->
      <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
      <h2 class="text-[4.5vw] font-bold uppercase text-green-700 text-center mx-4 whitespace-nowrap">
        {{ $t('stageCustom.title') }}
      </h2>
      <!-- Horizontal Line After Text -->
      <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
    </div>
    <p class="mt-6 text-base text-gray-700 leading-relaxed text-center max-w-[20rem] mx-auto">
      {{ $t('stageCustom.descriptionMobile') }}
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
        @click="navigateToContact"
      >
        {{ $t('stageCustom.buttonText') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToContact() {
      window.location.href = '/contact';
    },
  },
};
</script>
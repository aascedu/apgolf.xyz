<template>
  <div>
    <!-- Desktop Version -->
    <div class="hidden md:flex w-full justify-center px-[5vw] mt-[4vw]">
      <!-- Text Section -->
      <div class="w-1/2 text-center">
        <!-- Title with Horizontal Lines -->
        <div class="flex items-center justify-center mt-[2vw]">
          <div class="w-[10vw] mr-[1vw] h-[3px] bg-[#ffc107]"></div>
          <h2 class="text-[2.0vw] max-text-[48px] font-bold uppercase mx-4 text-green-700 whitespace-nowrap">
            {{ $t('presentation.title') }}
          </h2>
          <div class="w-[10vw] ml-[1vw] h-[3px] bg-[#ffc107]"></div>
        </div>
        <!-- Text -->
        <p class="text-[1.2vw] max-text-[20px] text-gray-700 leading-relaxed max-w-[40vw] mt-[3vw] mb-[3vw] mx-auto">
          {{ $t('presentation.description') }}
        </p>
      </div>

      <!-- Picture Section -->
      <div class="w-1/2 flex justify-center">
        <img
          src="/assets/home_banner.jpeg"
          alt="Golfer"
          class="w-[30vw] h-auto object-cover rounded-md shadow-md"
        />
      </div>
    </div>

    <!-- Mobile Version -->
    <div class="md:hidden w-full px-8 mt-8">
      <!-- Title with Horizontal Lines -->
      <div class="flex items-center justify-center">
        <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
        <h2 class="text-[4.5vw] font-bold uppercase text-green-700 text-center mx-4 whitespace-nowrap">
          {{ $t('presentation.title') }}
        </h2>
        <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
      </div>

      <!-- Text Section -->
      <p class="mt-6 text-[4vw] text-gray-700 leading-relaxed text-center max-w-[90%] mx-auto">
        {{ $t('presentation.description') }}
      </p>

      <!-- Picture Section -->
      <div class="mt-6 flex justify-center">
        <img
          src="/assets/home_banner.jpeg"
          alt="Golfer"
          class="w-[90vw] h-auto object-cover rounded-md shadow-md"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Presentation",
};
</script>
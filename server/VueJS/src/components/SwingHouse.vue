<template>
  <!-- Desktop Div -->
  <div class="hidden md:block w-full px-8 mt-[4vw] mb-[2vw]">
    <!-- Title with Horizontal Line -->
    <div class="flex items-center mb-[2vw] px-8">
      <div class="flex-1 h-[2px] bg-[#ffc107] mr-[2vw]"></div>
      <h2 class="text-[2vw] font-bold uppercase text-green-700 whitespace-nowrap">
        {{ $t('swingHouse.title') }}
      </h2>
      <div class="flex-1 h-[2px] bg-[#ffc107] ml-[2vw] mr-[2vw]"></div>
    </div>

    <!-- Content Section -->
    <div class="flex px-8">
      <!-- Text Section -->
      <div class="w-1/2 text-center mt-[2vw]">
        <p class="text-[1.4vw] text-gray-700 leading-[1.8] tracking-wide max-w-[60vw] mx-auto">
          {{ $t('swingHouse.description') }}
        </p>
        <!-- Button with Image -->
        <div class="mt-[2vw] flex flex-col items-center">
            <span class="mt-2 mb-2 text-[1vw] font-bold text-green-700 uppercase">
              {{ $t('swingHouse.buttonText') }} :
            </span>
          <a
            href="https://www.swinghouse-chamonix.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="hover-effect"
          >
            <img
              src="/assets/swinghouse-logo-black.png"
              alt="Swing House Logo"
              class="w-[30vw] h-auto object-contain"
            />
          </a>
          <!-- Button Text -->
        </div>
      </div>

      <!-- Picture Section -->
      <div class="w-1/2 flex justify-center">
        <img
          src="/assets/home_banner.jpeg"
          alt="Swing House"
          class="w-[40vw] h-[35vw] object-cover rounded-md shadow-md"
        />
      </div>
    </div>
  </div>

  <!-- Mobile Div -->
  <div class="md:hidden w-full px-4 mt-8">
    <!-- Title with Horizontal Line -->
    <div class="flex items-center justify-center mb-4">
      <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
      <h2 class="text-xl font-bold uppercase text-green-700 text-center mx-4">
        {{ $t('swingHouse.title') }}
      </h2>
      <div class="flex-1 h-[2px] bg-[#ffc107]"></div>
    </div>

    <!-- Content Section -->
    <div class="flex flex-col items-center space-y-6">
      <!-- Text Section -->
      <p class="text-base text-gray-700 leading-relaxed text-center max-w-[90%]">
        {{ $t('swingHouse.description') }}
      </p>

      <!-- Button with Image -->
      <span class="text-sm font-bold text-green-700 uppercase">
        {{ $t('swingHouse.buttonText') }} :
      </span>
      <a
        href="#"
        @click.prevent="navigateWithDelay"
        class="hover-effect_mobile flex flex-col items-center"
      >
        <img
          src="/assets/swinghouse-logo-black.png"
          alt="Swing House Logo"
          class="w-[70vw] h-auto object-contain"
        />
      </a>

      <!-- Picture Section -->
      <!-- <img
        src="/assets/home_banner.jpeg"
        alt="Swing House"
        class="w-[80vw] h-[60vw] object-cover rounded-md shadow-md"
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SwingHouse",
  methods: {
    navigateWithDelay() {
      setTimeout(() => {
        window.location.href = "https://www.swinghouse-chamonix.com/";
      }, 300);
    },
  },
};
</script>

<style scoped>
/* Hover effect for the logo */
.hover-effect {
  display: inline-block;
  position: relative;
}

.hover-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 130 54); /* Updated color */
  border-radius: 1.5vw; /* Fully rounded */
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.hover-effect:hover::before {
  opacity: 1;
}

.hover-effect_mobile {
  display: inline-block;
  position: relative;
}

.hover-effect_mobile::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 130 54); /* Updated color */
  border-radius: 4vw; /* Fully rounded */
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.hover-effect_mobile:hover::before {
  opacity: 1;
}
</style>
<template>
  <!-- Desktop Div -->
  <div class="hidden md:block w-full padded-div">
    <!-- Title with Horizontal Line -->
    <div class="flex items-center mb-[2vw]">
      <h2 class="text-[2vw] font-bold uppercase text-green-700 whitespace-nowrap">
        {{ $t('swingHouse.title') }}
      </h2>
    </div>

    <!-- Content Section -->
    <div class="flex">
      <!-- Text Section -->
      <div class="w-1/2 text-center mt-[2vw]">
        <p class="text-[1.4vw] text-gray-700 leading-[1.8] tracking-wide max-w-[60vw] mx-auto">
          {{ $t('swingHouse.description') }}
        </p>
        <!-- Button with Image -->
        <div class="flex flex-col items-center">
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
  <div class="md:hidden w-full padded-div mt-8">
    <!-- Title with Horizontal Line -->
      <h2 class="text-xl font-bold uppercase text-green-700 text-left">
        {{ $t('swingHouse.title') }}
      </h2>

    <!-- Content Section -->
    <div class="flex flex-col mt-4">
      <!-- Text Section -->
      <p class="text-base text-gray-700 leading-relaxed text-left max-w-[90%]">
        {{ $t('swingHouse.description') }}
      </p>

      <!-- Button with Image -->
      <span class="text-sm font-bold text-green-700 uppercase text-center">
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
<template>
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
        <div class="mt-[2vw] flex justify-center">
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
</template>

<script>
export default {
  name: "SwingHouse",
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
</style>
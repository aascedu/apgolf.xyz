<template>
  <!-- Desktop -->
  <div class="hidden md:block w-full px-8 mt-16">
    <!-- Title with Horizontal Line -->
    <div class="flex items-center justify-between">
      <!-- Title -->
      <h2 class="ml-[2vw] text-[2vw] font-bold uppercase text-green-700 whitespace-nowrap">
        Avis de nos clients
      </h2>
      <!-- Horizontal Line -->
      <div class="flex-1 h-[3px] bg-[#ffc107] ml-[2vw]"></div>
    </div>

    <!-- Carousel Section -->
    <div class="ml-[2vw] mt-8 mb-8">
      <div class="relative w-full">
        <!-- Carousel Wrapper -->
        <div class="flex items-center overflow-x-auto space-x-4 scrollbar-hide">
          <!-- Example Carousel Items -->
          <div class="flex-shrink-0 w-[300px] h-[200px] bg-gray-100 rounded-md shadow-md p-4">
            <p class="text-gray-700 text-sm">
              "Une expérience incroyable ! Le coach était très professionnel et le cadre magnifique."
            </p>
            <p class="mt-4 text-right text-green-700 font-bold">- Client 1</p>
          </div>
          <div class="flex-shrink-0 w-[300px] h-[200px] bg-gray-100 rounded-md shadow-md p-4">
            <p class="text-gray-700 text-sm">
              "J'ai beaucoup progressé grâce à ces stages. Je recommande vivement !"
            </p>
            <p class="mt-4 text-right text-green-700 font-bold">- Client 2</p>
          </div>
          <div class="flex-shrink-0 w-[300px] h-[200px] bg-gray-100 rounded-md shadow-md p-4">
            <p class="text-gray-700 text-sm">
              "Un moment inoubliable, merci à toute l'équipe pour cette expérience !"
            </p>
            <p class="mt-4 text-right text-green-700 font-bold">- Client 3</p>
          </div>
        </div>
        <!-- Carousel Navigation (Optional) -->
        <div class="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button class="p-2 bg-green-700 text-white rounded-full shadow-md hover:bg-green-800">
            ‹
          </button>
        </div>
        <div class="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button class="p-2 bg-green-700 text-white rounded-full shadow-md hover:bg-green-800">
            ›
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Hide scrollbar for the carousel */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
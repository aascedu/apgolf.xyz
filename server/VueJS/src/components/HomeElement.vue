<template>
  <!-- Desktop -->
  <div class="hidden md:flex flex-row flex-wrap mt-32">
    <!-- Picture on the Left -->
    <div class="flex-shrink-0 w-[35%]">
      <img
        :src="image"
        :alt="title"
        class="aspect-[4/3] object-cover"
      />
    </div>
    <!-- Text and Button on the Right -->
    <div class="flex-1 ml-12">
      <div class="flex items-center">
        <h2 class="text-green-700 whitespace-nowrap">
          {{ title }}
        </h2>
        <div class="line"></div>
      </div>
      <p class="text-gray-700 leading-relaxed">
        {{ description }}
      </p>
      <div class="mt-8">
        <button
          class="bg-green-700 text-white font-bold rounded-full border-2 border-[#ffc107] hover:bg-green-800 transition"
          @click="navigateTo"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
  <!-- Mobile -->
  <div class="md:hidden w-full px-8 mt-8">
    <div class="flex items-center gap-4">
      <!-- Horizontal Line Before Text -->
      <div class="line_mobile"></div>
      <h2 class="text-green-700 text-center whitespace-nowrap">
        {{ title }}
      </h2>
      <!-- Horizontal Line After Text -->
      <div class="line_mobile"></div>
    </div>
    <p class="text-gray-700 leading-relaxed text-center max-w-[20rem]">
      {{ description }}
    </p>
    <!-- Square Image -->
    <div class="flex justify-center">
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
        @click="navigateTo"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    buttonText: { type: String, required: true },
    href: { type: String, required: true }
  },
  methods: {
    navigateTo() {
      window.location.href = this.href;
    },
  },
};
</script>
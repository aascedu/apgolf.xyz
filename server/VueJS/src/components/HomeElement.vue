<template>
  <!-- Desktop -->
  <div class="hidden md:flex flex-row flex-wrap mt-20">
    <!-- Picture on the Left -->
    <div class="flex-shrink-0 w-[30%]">
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
      <p class="text-gray-500 leading-relaxed">
        {{ description }}
      </p>
      <div class="mt-8">
        <button
          class="bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition"
          @click="navigateTo"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
  <!-- Mobile -->
  <div class="md:hidden flex flex-col mt-16">
    <img
      :src="image"
      :alt="title"
      class="w-full aspect-[4/3] object-cover"
    />
    <div class="flex items-center w-full gap-2 mt-2">
      <h2 class="text-green-700 text-left whitespace-nowrap">
        {{ title }}
      </h2>
      <div class="line_mobile flex-1"></div>
    </div>
    <p class="text-gray-500 text-left mt-1">
      {{ description }}
    </p>
    <button
      class="mt-2 bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition"
      @click="navigateTo"
    >
      {{ buttonText }}
    </button>
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
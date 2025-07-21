<template>
  <!-- Desktop -->
  <a
    :href="link"
    class="hidden md:flex mt-10 flex-col items-center w-72 transition duration-300 group"
  >
    <div class="relative w-72 h-72">
      <img
        :src="image"
        :alt="title"
        class="w-72 h-72 object-cover transition duration-300 brightness-[100%] group-hover:brightness-50"
      />
    </div>
    <div class="w-full">
      <p class="text-gray-700 text-sm font-bold text-center mt-2 group-hover:text-green-700 transition duration-300">
        {{ title }}
      </p>
      <p class="text-gray-500 text-xs text-center">
        {{ description }}
      </p>
    </div>
  </a>
  <!-- Mobile -->
  <a
    :href="link"
    class="flex flex-col items-center w-full mt-4 transition duration-300 group md:hidden"
  >
    <img
        :src="image"
        :alt="title"
        class="w-full aspect-[4/3] object-cover"
      />
    <p class="text-gray-700 text-sm font-bold text-center mt-2 group-hover:text-green-700 transition duration-300">
      {{ title }}
    </p>
    <p class="text-gray-500 text-xs text-center">
      {{ description }}
    </p>
  </a>
</template>

<script>
export default {
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }
  },
}
</script>

<style scoped>
</style>
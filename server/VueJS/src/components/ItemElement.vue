<template>
  <!-- Desktop -->
  <a
    :href="link"
    class="hidden md:flex mt-8 flex-col items-center transition duration-300 w-[25%] p-[1.25em] group"
  >
    <div class="w-full aspect-square">
      <img
        :src="image"
        :alt="title"
        class="object-cover aspect-square transition duration-300 brightness-[100%] group-hover:brightness-50"
      />
    </div>
    <div>
      <p class="text-gray-700 under-pic font-bold text-center text-pretty mt-2 group-hover:text-green-700 transition duration-300">
        {{ title }}
      </p>
      <p class="text-gray-500 text-center text-pretty">
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
p.under-pic {
  font-size: clamp(0.5em, 1em, 50em) !important;
}

p.desc-pic {
  font-size: clamp(0.85em, 0.85em, 50em) !important;
}
</style>
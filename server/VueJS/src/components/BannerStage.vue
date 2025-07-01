<template>
  <div class="relative">
    <!-- Image Wrapper -->
    <div class="relative overflow-hidden">
      <!-- Banner Image -->
      <img
        :src="image"
        alt="Banner"
        class="w-full block brightness-75"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerStage",
  props: {
    image: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div class="banner-container">
    <img :src="image" alt="Banner" class="banner-image" />
    <!-- Text Overlay -->
    <div class="banner-text-overlay">
      <h1 class="text-white font-bold text-center">
        {{ text }}
      </h1>
    </div>
    <img src="/assets/golfer.png" alt="golfer Overlay" class="golfer-overlay" />
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.banner-container {
  height: 65vh;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(0.8);
}

.banner-text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 3;
  pointer-events: none;
}

.golfer-overlay {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 20%;
  height: auto;
  z-index: 2;
  pointer-events: none;
  filter: invert(1) brightness(2);
}

@media (max-width: 767px) {
  .banner-container {
    height: 35vh;
    /* margin-top: 61px; */
  }
}
</style>
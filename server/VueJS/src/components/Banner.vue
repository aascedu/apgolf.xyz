<template>
  <div class="banner-container">
    <img :src="image" alt="Banner" class="banner-image" />
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
  height: 65vh; /* 35% of the viewport height */
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
  object-fit: cover; /* Fill container, crop if needed */
  display: block;
  filter: brightness(0.8);
}

.golfer-overlay {
  position: absolute;
  left: 0;
  bottom: 0; /* Stick to the bottom */
  width: 300px; /* Fixed width, adjust as needed */
  height: auto;
  z-index: 2;
  pointer-events: none;
  filter: invert(1) brightness(2);
}

@media (max-width: 1024px) {
  .golfer-overlay {
    width: 180px; /* Smaller width for tablets */
  }
}

@media (max-width: 767px) {
  .banner-container {
    height: 35vh; /* Still 35% of viewport height on mobile */
    margin-top: 61px;
  }
}
</style>
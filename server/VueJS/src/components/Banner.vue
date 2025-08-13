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
  width: 100%;
  height: 40%; /* Adjust this percentage as needed */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  position: relative; /* Needed for overlay positioning */
}

@media (max-width: 768px) {
  .banner-container {
    margin-top: 61px;
  }
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensures the whole image is always visible, no cropping or zooming */
  display: block;
}

.golfer-overlay {
  position: absolute;
  left: 0;
  bottom: -35%;
  width: 25%;
  height: auto;
  z-index: 2;
  pointer-events: none;
  filter: invert(1) brightness(2); /* Makes the overlay image white */
}

@media (max-width: 768px) {
  .golfer-overlay {
    width: 30%; /* Adjust size for small screens */
    bottom: -43%; /* Adjust position if needed */
  }
}
</style>
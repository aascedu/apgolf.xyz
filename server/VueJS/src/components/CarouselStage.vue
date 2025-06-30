<template>
  <div class="hidden md:block w-full relative">
    <div class="swiper centered-slide-carousel swiper-container relative">
      <!-- Slides -->
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="h-[32vw] flex justify-center items-center">
            <img
              src="/src/assets/home_banner.jpeg"
              alt="Slide 1"
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="h-[32vw] flex justify-center items-center">
            <img
              src="/src/assets/home_banner.jpeg"
              alt="Slide 2"
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="h-[32vw] flex justify-center items-center">
            <img
              src="/src/assets/home_banner.jpeg"
              alt="Slide 3"
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="h-[32vw] flex justify-center items-center">
            <img
              src="/src/assets/home_banner.jpeg"
              alt="Slide 4"
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="h-[32vw] flex justify-center items-center">
            <img
              src="/src/assets/home_banner.jpeg"
              alt="Slide 5"
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="h-[32vw] flex justify-center items-center">
            <img
              src="/src/assets/home_banner.jpeg"
              alt="Slide 6"
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default {
  name: "CarouselStage",
  setup() {
    onMounted(() => {
      new Swiper(".centered-slide-carousel", {
        modules: [Navigation, Pagination],
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1920: { slidesPerView: 2, spaceBetween: 60 },
          770: { slidesPerView: 2, spaceBetween: 10 },
        },
      });
    });
  },
};
</script>

<style scoped>
.swiper-wrapper {
  width: 100%;
  height: max-content !important;
  padding-bottom: 64px !important;
  -webkit-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
  position: relative;
}
.swiper-pagination-bullet {
  background: #ffc107;
}
.swiper-pagination-bullet-active {
  background: #ffc107 !important;
}
.swiper-button-prev,
.swiper-button-next {
  color: #ffc107;
  position: absolute;
  top: 50%; /* Center vertically */
  transform: translateY(-50%); /* Adjust for perfect centering */
  z-index: 10;
}
.swiper-button-prev {
  left: 10px; /* Adjust spacing from the left */
}
.swiper-button-next {
  right: 10px; /* Adjust spacing from the right */
}
</style>
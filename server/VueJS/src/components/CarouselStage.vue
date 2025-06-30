<template>
  <div class="w-full relative">
    <div class="swiper centered-slide-carousel swiper-container relative">
      <!-- Slides -->
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="bg-indigo-50 rounded-2xl h-[32vw] flex justify-center items-center">
            <span class="text-3xl font-semibold text-[#ffc107]">Slide 1</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-indigo-50 rounded-2xl h-[32vw] flex justify-center items-center">
            <span class="text-3xl font-semibold text-[#ffc107]">Slide 2</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-indigo-50 rounded-2xl h-[32vw] flex justify-center items-center">
            <span class="text-3xl font-semibold text-[#ffc107]">Slide 3</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-indigo-50 rounded-2xl h-[32vw] flex justify-center items-center">
            <span class="text-3xl font-semibold text-[#ffc107]">Slide 1</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-indigo-50 rounded-2xl h-[32vw] flex justify-center items-center">
            <span class="text-3xl font-semibold text-[#ffc107]">Slide 2</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-indigo-50 rounded-2xl h-[32vw] flex justify-center items-center">
            <span class="text-3xl font-semibold text-[#ffc107]">Slide 3</span>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <!-- <div class="swiper-pagination"></div> -->

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
          1028: { slidesPerView: 2, spaceBetween: 10 },
          770: { slidesPerView: 1, spaceBetween: 0 },
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
}
</style>
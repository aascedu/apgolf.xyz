<template>
  <!-- Desktop -->
  <div class="hidden md:block w-full relative">
    <div class="swiper centered-slide-carousel swiper-container relative">
      <!-- Slides -->
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="/stage1" class="h-[32vw] flex justify-center items-center relative group">
            <img
              src="/src/assets/home_banner.jpeg"
              alt="Slide 1"
              class="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:brightness-50"
            />
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span class="text-white text-xl font-bold font-matangi uppercase">Stage Intensif</span>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="/stage1" class="h-[32vw] flex justify-center items-center relative group">
            <img
              src="/src/assets/home_banner.jpeg"
              alt="Slide 2"
              class="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:brightness-50"
            />
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span class="text-white text-xl font-bold font-matangi uppercase">Stage decouverte</span>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="/stage1" class="h-[32vw] flex justify-center items-center relative group">
            <img
              src="/src/assets/home_banner.jpeg"
              alt="Slide 3"
              class="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:brightness-50"
            />
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span class="text-white text-xl font-bold font-matangi uppercase">Stage entreprise</span>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="/stage1" class="h-[32vw] flex justify-center items-center relative group">
            <img
              src="/src/assets/home_banner.jpeg"
              alt="Slide 4"
              class="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:brightness-50"
            />
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span class="text-white text-xl font-bold font-matangi uppercase">Stage intensif</span>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="/stage1" class="h-[32vw] flex justify-center items-center relative group">
            <img
              src="/src/assets/home_banner.jpeg"
              alt="Slide 5"
              class="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:brightness-50"
            />
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span class="text-white text-xl font-bold font-matangi uppercase">Stage decouverte</span>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="/stage1" class="h-[32vw] flex justify-center items-center relative group">
            <img
              src="/src/assets/home_banner.jpeg"
              alt="Slide 6"
              class="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:brightness-50"
            />
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span class="text-white text-xl font-bold font-matangi uppercase">Stage entreprise</span>
            </div>
          </a>
        </div>
      </div>
      <!-- Navigation Buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>

  <!-- Mobile -->
  <div class="md:hidden w-full relative bg-white">
    <div class="swiper mobile-slide-carousel swiper-container relative">
      <!-- Slides -->
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="/stage1" class="h-[50vw] flex justify-center items-center relative group px-4">
            <img
              src="/src/assets/home_banner.jpeg"
              alt="Slide 1"
              class="w-full h-full object-cover rounded-lg transition-all duration-300 brightness-[0.8] group-hover:brightness-[0.5]"
            />
            <div
              class="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300"
            >
              <span class="text-white text-sm font-bold font-matangi uppercase drop-shadow-md">
                Stage Intensif
              </span>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="/stage1" class="h-[50vw] flex justify-center items-center relative group px-4">
            <img
              src="/src/assets/home_banner.jpeg"
              alt="Slide 2"
              class="w-full h-full object-cover rounded-lg transition-all duration-300 brightness-[0.8] group-hover:brightness-[0.5]"
            />
            <div
              class="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300"
            >
              <span class="text-white text-sm font-bold font-matangi uppercase drop-shadow-md">
                Stage Découverte
              </span>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="/stage1" class="h-[50vw] flex justify-center items-center relative group px-4">
            <img
              src="/src/assets/home_banner.jpeg"
              alt="Slide 3"
              class="w-full h-full object-cover rounded-lg transition-all duration-300 brightness-[0.8] group-hover:brightness-[0.5]"
            />
            <div
              class="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300"
            >
              <span class="text-white text-sm font-bold font-matangi uppercase drop-shadow-md">
                Stage Entreprise
              </span>
            </div>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
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
      // Desktop Swiper
      new Swiper(".centered-slide-carousel", {
        modules: [Navigation, Pagination],
        centeredSlides: true,
        loop: true,
        slidesPerView: 2,
        slidesPerGroup: 1,
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

      // Mobile Swiper
      new Swiper(".mobile-slide-carousel", {
        modules: [Navigation, Pagination],
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        slidePerGroup: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Matangi&display=swap');

.font-matangi {
  font-family: 'Matangi', sans-serif;
}

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
  top: 47%; /* Center vertically */
  transform: translateY(-47%); /* Adjust for perfect centering */
  z-index: 10;
}
.swiper-button-prev {
  left: 10px; /* Adjust spacing from the left */
}
.swiper-button-next {
  right: 10px; /* Adjust spacing from the right */
}
</style>
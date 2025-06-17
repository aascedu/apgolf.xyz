<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans">
    <!-- Hero Section -->
    <section class="flex flex-col items-center justify-center text-center px-6 py-20 bg-gray-100 sm:px-12">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-2">An Unforgettable Golf Experience</h1>
      <p class="text-base sm:text-lg md:text-xl mb-6 max-w-xl px-2">Professional golf coaching and events tailored for all skill levels in one of the most beautiful place in the world.</p>
      <button
        class="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        @click="$router.push('/stages')"
      >
        Book a session
      </button>
    </section>

    <section
      class="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-20 mx-auto items-center"
      :style="{ maxWidth: '2200px', width: '90vw' }"
    >
      <img
        :src="homeBanner"
        alt="Golf"
        class="rounded-xl shadow-md w-full object-cover max-h-[900px]"
      />
      <div class="px-2">
        <h2 class="text-2xl sm:text-3xl font-semibold mb-4">About Us</h2>
        <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
          We help golfers improve through personalized coaching, top-tier facilities, and data-driven training methods. Whether you're a beginner or a pro, we tailor the experience to your goals.
        </p>
      </div>
    </section>

    <Carousel :items="services" />

    <!-- Footer -->
    <footer class="text-center text-sm text-gray-500 py-10">
      © 2025 AP Golf. All rights reserved.
    </footer>
  </div>
</template>

<script>
import homeBanner from '@/assets/home_banner.jpeg'
import Carousel from '@/components/Carousel.vue'

export default {
  name: "HomePage",
  components: { Carousel },
  data() {
    return {
      homeBanner,
      services: [
        {
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Private Coaching",
          description: "One-on-one training with experienced golf coaches."
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
          title: "Golf Clinics",
          description: "Group sessions focused on technique and performance."
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          title: "Corporate Events",
          description: "Custom golf events for businesses and teams."
        }
      ]
    }
  }
}
</script>

<style>
@import 'src/css/main.css';
</style>
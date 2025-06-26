<template>
  <div class="relative mt-[64px] md:mt-0">
    <!-- Image Wrapper -->
    <div class="relative">
      <!-- Banner Image -->
      <img
        src="/src/assets/home_banner.jpeg"
        alt="Banner"
        class="w-full block brightness-90"
      />

      <!-- Mobile Centered Text -->
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
      >
        <h1
          class="md:hidden font-matangi uppercase text-white text-nowrap text-xl md:text-6xl font-bold drop-shadow-custom"
        >
          Une experience inoubliable
        </h1>
      </div>
    </div>

    <!-- Box with Description and Button for Mobile -->
    <div class="flex flex-col items-center mt-4 md:hidden">
      <p class="text-black text-lg text-center mb-4">
        Donnez un nouvel élan à vos performances, prenez rendez-vous pour une séance personnalisée.
      </p>
      <button
        class="shadow__btn mt-2 mb-2"
        role="button"
        @click="animateAndNavigate('/stages')"
      >
        Réserver une session
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    animateAndNavigate(url) {
      const button = event.target;
      button.classList.add('active');
      setTimeout(() => {
        window.location.href = url;
      }, 300);
    },
  },
};
</script>

<style scoped>
/* Import Matangi font */
@import url('https://fonts.googleapis.com/css2?family=Matangi:wght@500;700&display=swap');

.font-matangi {
  font-family: 'Matangi', sans-serif;
  font-weight: 500;
}

.drop-shadow-custom {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.shadow__btn {
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: #000;
  border-radius: 7px;
  letter-spacing: 4px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow, background-color;
  background: #ffc107;
  box-shadow: 0 0 25px rgba(255, 193, 7, 0.6);
}

.shadow__btn:hover,
.shadow__btn.active {
  background: #ffca28;
  box-shadow: 0 0 5px rgba(255, 193, 7, 0.8),
              0 0 25px rgba(255, 193, 7, 0.8),
              0 0 50px rgba(255, 193, 7, 0.8),
              0 0 100px rgba(255, 193, 7, 0.8);
}
</style>
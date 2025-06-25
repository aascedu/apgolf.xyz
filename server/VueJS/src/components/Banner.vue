<!-- filepath: /home/aascedu/Documents/apgolf.xyz/server/VueJS/src/components/Banner.vue -->
<template>
    <div class="relative mt-[64px] md:mt-0">
      <!-- Banner Image -->
      <img
        src="/src/assets/home_banner.jpeg"
        alt="Banner"
        class="w-full block brightness-90"
      />
  
      <!-- Desktop -->
      <div class="absolute top-0 left-0 right-0 flex flex-col items-center justify-center z-10 h-[50%] md:h-full">
        <!-- Big Text -->
        <h1
          class="hidden md:block font-matangi uppercase text-white text-2xl md:text-6xl font-bold drop-shadow-custom"
        >
          Une experience inoubliable
        </h1>
  
        <!-- Button for Desktop -->
        <button
          class="hidden md:block shadow__btn mt-16"
          role="button"
          onclick="window.location.href='/stages'"
        >
          Réserver une session
        </button>
      </div>
  
      <!-- Mobile -->
      <div class="absolute top-0 left-0 right-0 h-[100%] flex flex-col items-center justify-center md:hidden z-10">
        <!-- Big Text -->
        <h1
          class="font-matangi uppercase text-white text-2xl md:text-6xl font-bold drop-shadow-custom"
        >
          Une experience inoubliable
        </h1>
      </div>
  
      <!-- Box with Description and Button for Mobile -->
      <div class="flex flex-col items-center mt-4 md:hidden bg-gray-100 p-4 rounded-md shadow-md z-20">
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
        const button = event.target; // Get the button element
        button.classList.add('active'); // Add an "active" class to trigger the animation
  
        // Wait for 300ms (or the duration of the animation) before navigating
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
  
  /* Add a custom TailwindCSS class for the Matangi font */
  .font-matangi {
    font-family: 'Matangi', sans-serif;
    font-weight: 500;
  }
  
  /* Add a custom text shadow */
  .drop-shadow-custom {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }
  
  .shadow__btn {
    padding: 10px 20px;
    border: none;
    font-size: 17px;
    color: #000; /* Black text for high contrast */
    border-radius: 7px;
    letter-spacing: 4px;
    font-weight: 700;
    text-transform: uppercase;
    transition: 0.5s;
    transition-property: box-shadow, background-color;
    background: #ffc107; /* Bright Yellow / Goldenrod */
    box-shadow: 0 0 25px rgba(255, 193, 7, 0.6); /* Yellow Glow */
  }
  
  .shadow__btn:hover,
  .shadow__btn.active {
    background: #ffca28; /* Slightly brighter yellow on hover */
    box-shadow: 0 0 5px rgba(255, 193, 7, 0.8),
                0 0 25px rgba(255, 193, 7, 0.8),
                0 0 50px rgba(255, 193, 7, 0.8),
                0 0 100px rgba(255, 193, 7, 0.8); /* Enhanced Yellow Glow */
  }
  </style>
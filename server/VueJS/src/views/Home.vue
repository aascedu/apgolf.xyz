<template>
  <div class="relative mt-[64px] md:mt-0">
    <!-- Banner Image -->
    <img
      src="/src/assets/home_banner.jpeg"
      alt="Banner"
      class="w-full block brightness-90"
    />

    <!-- Desktop -->
    <div class="absolute inset-0 flex flex-col items-center justify-center">
      <!-- Big Text -->
      <h1
        class="hidden md:block font-matangi uppercase text-white text-2xl md:text-6xl font-bold drop-shadow-custom"
      >
        Une experience inoubliable
      </h1>

      <!-- Button for Desktop -->
      <a
        href="/stages"
        class="hidden md:block mt-4 px-6 py-3 bg-green-700 text-white text-lg font-bold uppercase rounded-md hover:bg-green-800 transition"
      >
        Book a session
      </a>
    </div>

    <!-- Mobile -->
    <div class="absolute inset-0 flex flex-col items-center top-16 md:hidden">
      <!-- Big Text -->
      <h1
        class="font-matangi uppercase text-white text-2xl md:text-6xl font-bold drop-shadow-custom"
      >
        Une experience inoubliable
      </h1>
    </div>

    <!-- Box with Description and Button for Mobile -->
    <div class="flex flex-col items-center mt-4 md:hidden bg-gray-100 p-4 rounded-md shadow-md">
      <p class="text-black text-lg text-center">
        Découvrez nos stages de golf pour tous les niveaux et améliorez votre jeu.
      </p>
      <a
        href="/stages"
        class="mt-4 px-6 py-3 bg-green-700 text-white text-lg font-bold uppercase rounded-md hover:bg-green-800 transition"
      >
        Book a session
      </a>
    </div>
  </div>
</template>

<style>
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
</style>

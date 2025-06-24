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
    <div class="absolute top-0 left-0 right-0 h-[50%] flex flex-col items-center justify-center md:hidden z-10">
      <!-- Big Text -->
      <h1
        class="font-matangi uppercase text-white text-2xl md:text-6xl font-bold drop-shadow-custom"
      >
        Une experience inoubliable
      </h1>
    </div>

    <!-- Box with Description and Button for Mobile -->
    <div class="flex flex-col items-center mt-4 md:hidden bg-gray-100 p-4 rounded-md shadow-md z-20">
      <p class="text-black text-lg text-center">
        Découvrez nos stages de golf pour tous les niveaux et améliorez votre jeu.
      </p>
      <button
        class="shadow__btn mt-4"
        role="button"
        onclick="window.location.href='/stages'"
      >
        Réserver une session
      </button>
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

.shadow__btn {
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 7px;
  letter-spacing: 4px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow;
}

.shadow__btn {
  background: rgb(34, 139, 34); /* Forest Green */
  box-shadow: 0 0 25px rgb(34, 139, 34); /* Green Glow */
}

.shadow__btn:hover {
  box-shadow: 0 0 5px rgb(34, 139, 34),
              0 0 25px rgb(34, 139, 34),
              0 0 50px rgb(34, 139, 34),
              0 0 100px rgb(34, 139, 34); /* Enhanced Green Glow on Hover */
}
</style>
<template>
  <footer class="hidden md:block footer">
    <div class="flex-1 h-[3px] bg-[#ffc107]"></div>
    <div class="flex justify-center space-x-[64px] mt-[2vw] text-white uppercase text-lg">
      <a href="/" class="hover:underline">Acceuil</a>
      <a href="/stages" class="hover:underline">Stages</a>
      <a href="/propos" class="hover:underline">A propos</a>
      <a href="/contact" class="hover:underline">Contact</a>
    </div>
    <div class="flex justify-center items-center mt-[4vw] flex-wrap">
      <!-- Text on the Left -->
      <span class="text-white text-[1.5vw] font-bold mr-[2vw]">AP GOLF</span>
      
      <!-- Centered Image -->
      <img
        src="/src/assets/golfer.png"
        alt="Golfer"
        class="w-[16vw] invert brightness-100"
      />
      <!-- Icons on the Right -->
      <div class="flex space-x-[1vw] ml-[2vw]">
        <!-- Updated Instagram Icon -->
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[2vw] h-[2vw] fill-white hover:fill-[#ffc107]" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm5.25-2.5a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75z"/>
          </svg>
        </a>
        <!-- Updated Facebook Icon -->
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[2vw] h-[2vw] fill-white hover:fill-[#ffc107]" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
  <footer class="md:hidden footer_mobile">
    <!-- Mobile Footer -->
    <div class="flex flex-col items-center text-white space-y-4">
      <!-- Links -->
      <div class="flex flex-col items-center space-y-2 mt-8 mb-4">
        <a href="/" class="hover:underline text-sm uppercase">Acceuil</a>
        <a href="/stages" class="hover:underline text-sm uppercase">Stages</a>
        <a href="/propos" class="hover:underline text-sm uppercase">A propos</a>
        <a href="/contact" class="hover:underline text-sm uppercase">Contact</a>
      </div>
      <!-- Icons -->
      <div class="flex space-x-4">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-white hover:fill-[#ffc107]" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm5.25-2.5a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75z"/>
          </svg>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-white hover:fill-[#ffc107]" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/>
          </svg>
        </a>
      </div>
      <!-- Image -->
      <img
        src="/src/assets/golfer.png"
        alt="Golfer"
        class="w-[40vw] invert brightness-100" style="margin-left: 10vw;"
      />
      <!-- Text -->
      <div class="flex flex-col justify-center items-center mt-6">
        <span class="text-white text-3xl font-bold tracking-wide">AP GOLF</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterHome",
};
</script>

<style scoped>
.footer {
  font-family: 'Matangi', sans-serif;
  word-spacing: 0.05em;
  margin-top: 8vw;
  background-color: oklch(52.7% 0.154 150.069);
  /* height: 20vh; Fixed height of 20% of the viewport */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden; /* Prevent content overflow */
}

.footer_mobile {
  font-family: 'Matangi', sans-serif;
  word-spacing: 0.05em;
  margin-top: 8vw;
  background-color: oklch(52.7% 0.154 150.069);
  padding: 4vw 0;
}
</style>
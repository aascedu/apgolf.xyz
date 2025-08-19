<template>
  <footer class="hidden md:block footer">
    <div class="flex-1 h-[3px] bg-[#ffc107]"></div>
    <div class="flex justify-center space-x-[64px] mt-[2vw] text-white uppercase text-lg">
      <a href="/" class="hover:underline">{{ $t('footer.home') }}</a>
      <a href="/stages" class="hover:underline">{{ $t('footer.stages') }}</a>
      <a href="/sejours" class="hover:underline">{{ $t('footer.sejours') }}</a>
      <a href="/competitions" class="hover:underline">{{ $t('footer.competitions') }}</a>
      <a href="/propos" class="hover:underline">{{ $t('footer.about') }}</a>
      <a href="/contact" class="hover:underline">{{ $t('footer.contact') }}</a>
    </div>
    <div class="flex justify-center items-center mt-[4vw] flex-wrap">
      <!-- Text on the Left -->
      <span class="text-white text-[1.5vw] font-bold mr-[2vw]">{{ $t('footer.brand') }}</span>
      
      <!-- Centered Image -->
      <img
        src="/assets/golfer.png"
        alt="Golfer"
        class="w-[16vw] invert brightness-100"
      />
      <!-- Icons on the Right -->
      <div class="flex space-x-[1vw] ml-[2vw]">
        <!-- Instagram Icon -->
        <a href="https://www.instagram.com/p.ascedu/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[2vw] h-[2vw] fill-white hover:fill-[#ffc107]" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm5.25-2.5a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75z"/>
          </svg>
        </a>
        <!-- Facebook Icon -->
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[2vw] h-[2vw] fill-white hover:fill-[#ffc107]" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/>
          </svg>
        </a>
        <!-- LinkedIn Icon -->
        <a href="https://www.linkedin.com/in/pierre-ascedu-bb8a49b2/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[2vw] h-[2vw] fill-white hover:fill-[#ffc107]" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 19h-2.5v-10h2.5v10zm-1.25-11.25c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm13 11.25h-2.5v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-2.5v-10h2.5v1.25c.731-.919 1.836-1.5 3-1.5 2.209 0 4 1.791 4 4v6.25z"/>
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
        <a href="/" class="hover:underline text-sm uppercase">{{ $t('footer.home') }}</a>
        <a href="/stages" class="hover:underline text-sm uppercase">{{ $t('footer.stages') }}</a>
        <a href="/propos" class="hover:underline text-sm uppercase">{{ $t('footer.about') }}</a>
        <a href="/contact" class="hover:underline text-sm uppercase">{{ $t('footer.contact') }}</a>
      </div>
      <!-- Icons -->
      <div class="flex space-x-4">
        <a href="https://www.instagram.com/p.ascedu/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-white hover:fill-[#ffc107]" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm5.25-2.5a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75z"/>
          </svg>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-white hover:fill-[#ffc107]" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/>
          </svg>
        </a>
        <!-- LinkedIn Icon -->
        <a href="https://www.linkedin.com/in/pierre-ascedu-bb8a49b2/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-white hover:fill-[#ffc107]" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 19h-2.5v-10h2.5v10zm-1.25-11.25c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm13 11.25h-2.5v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-2.5v-10h2.5v1.25c.731-.919 1.836-1.5 3-1.5 2.209 0 4 1.791 4 4v6.25z"/>
          </svg>
        </a>
      </div>
      <!-- Image -->
      <img
        src="/assets/golfer.png"
        alt="Golfer"
        class="w-[40vw] invert brightness-100" style="margin-left: 10vw;"
      />
      <!-- Text -->
      <div class="flex flex-col justify-center items-center mt-6">
        <span class="text-white text-3xl font-bold tracking-wide">{{ $t('footer.brand') }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  font-family: 'Matangi', sans-serif;
  word-spacing: 0.05em;
  margin-top: 4vw;
  background-color: oklch(52.7% 0.154 150.069);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.footer_mobile {
  font-family: 'Matangi', sans-serif;
  word-spacing: 0.05em;
  margin-top: 8vw;
  background-color: oklch(52.7% 0.154 150.069);
  padding: 4vw 0;
}
</style>
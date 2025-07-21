<template>
    <!-- Desktop Version -->
    <div class="hidden md:flex w-full justify-center mt-32">
      <!-- Text Section -->
      <div class="text-center">
        <!-- Title with Horizontal Lines -->
        <div class="flex w-full items-center justify-center">
          <h2 class="text-[2.0vw] max-text-[48px] font-bold uppercase text-green-700 whitespace-nowrap">
            {{ $t('infoPratique.title') }}
          </h2>
          <!-- <div class="line"></div> -->
        </div>
        <!-- Text -->
        <p class="text-[1.2vw] max-text-[20px] text-gray-700 leading-relaxed max-w-[40vw] mx-auto">
          {{ $t('infoPratique.contactUs') }} <br />
          {{ $t('infoPratique.interested') }}
          <a href="/stages" class="text-green-700 font-bold hover:underline">{{ $t('infoPratique.stages') }}</a> ? <br />
          <span class="block mt-[2vw]">{{ $t('infoPratique.sendMailOrCall') }}</span>
          <br />{{ $t('infoPratique.phone') }} <br />
          {{ $t('infoPratique.email') }}
          <a href="mailto:pierre.ascedu@zoho.com" class="text-green-700 font-bold hover:underline">pierre.ascedu@zoho.com</a>
        </p>
      </div>
    </div>

    <!-- Mobile Version -->
    <div class="md:hidden w-full mt-16">
      <!-- Title with Horizontal Lines -->
      <div class="flex items-center justify-center">
        <h2 class="text-[4.5vw] font-bold uppercase text-green-700 text-center whitespace-nowrap">
          {{ $t('infoPratique.title') }}
        </h2>
      </div>

      <!-- Text Section -->
      <p class="mt-6 text-[4vw] text-gray-700 leading-relaxed text-center max-w-[90%] mx-auto">
        {{ $t('infoPratique.contactUs') }} <br />
        {{ $t('infoPratique.interested') }}
        <a href="/stages" class="text-green-700 font-bold hover:underline">{{ $t('infoPratique.stages') }}</a> ? <br />
        <span class="block mt-[8vw]">{{ $t('infoPratique.sendMailOrCall') }}</span> <br />
        {{ $t('infoPratique.phone') }} <br />
        {{ $t('infoPratique.email') }}
        <a href="mailto:pierre.ascedu@zoho.com" class="text-green-700 font-bold hover:underline">pierre.ascedu@zoho.com</a>
      </p>
    </div>
</template>

<script>
export default {
  name: "InfoPratique",
};
</script>
<template>
  <!-- Desktop Div -->
  <div class="hidden md:block w-full padded-div mt-16">
    <!-- Title with Horizontal Lines -->
    <div class="flex items-center justify-center gap-4">
      <div class="flex-1 h-[2px] bg-[#ffc107]"></div>

      <h2 class="text-[3.5vw] md:text-[2vw] font-bold uppercase text-green-700 text-center whitespace-nowrap">
        {{ title }}
      </h2>
      <div class="flex-1 h-[2px] bg-[#ffc107]"></div>

    </div>

    <!-- Content Section -->
    <div class="flex flex-col md:flex-row mt-8">
      <!-- Short Description and Program -->
      <div class="flex-1">
        <!-- Short Description -->
        <p class="text-[3.5vw] md:text-[1.2vw] text-gray-700 leading-relaxed text-left max-w-[90%] md:max-w-[40vw]">
          {{ description }}
        </p>

        <!-- Program Section -->
        <div v-if="program && program.length" class="mt-8">
          <h3 class="text-[3.5vw] md:text-[1.5vw] font-bold uppercase text-green-700 text-left mb-4">
            {{ $t('descriptionStage.programDetails') }}
          </h3>
          <ul class="space-y-6">
            <li v-for="(day, index) in program" :key="index" class="text-[3.5vw] md:text-[1.2vw] text-gray-700 leading-relaxed">
              <span v-html="day"></span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Additional Information -->
      <div class="flex-1 md:p-6 text-left md:text-right">
        <h3 class="text-[3.5vw] md:text-[1.5vw] font-bold uppercase text-green-700 mb-4">
          {{ $t('descriptionStage.information') }}
        </h3>
        <ul class="text-[3.5vw] md:text-[1.2vw] text-gray-700 leading-relaxed space-y-4">
          <li><strong>{{ $t('descriptionStage.duration') }}:</strong> {{ additionalInfo.duree }}</li>
          <li><strong>{{ $t('descriptionStage.dates') }}:</strong> {{ additionalInfo.dates }}</li>
          <li><strong>{{ $t('descriptionStage.location') }}:</strong> {{ additionalInfo.lieu }}</li>
          <li><strong>{{ $t('descriptionStage.price') }}:</strong> {{ additionalInfo.tarif }}</li>
          <li><strong>{{ $t('descriptionStage.participants') }}:</strong> {{ additionalInfo.nombrePersonnes }}</li>
          <li><strong>{{ $t('descriptionStage.level') }}:</strong> {{ additionalInfo.niveau }}</li>
        </ul>
        <div class="flex mt-[2vw] justify-end">
          <button
            class="mt-[1vw] px-[2vw] py-[1vw] text-[1.2vw] bg-green-700 text-white font-bold uppercase rounded-full hover:bg-green-800 transition"
            @click="navigateToContact"
          >
            {{ $t('descriptionStage.contactReserve') }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Div -->
  <div class="md:hidden w-full padded-div mt-8">
    <!-- Title with Horizontal Lines -->
    <h2 class="text-[3.5vw] font-bold uppercase text-green-700 text-left whitespace-nowrap">
      {{ title }}
    </h2>

    <!-- Content Section -->
    <div class="flex flex-col mt-8">
      <!-- Short Description and Program -->
      <div class="flex-1">
        <!-- Short Description -->
        <p class="text-[3.5vw] text-gray-700 leading-relaxed text-left max-w-[90%]">
          {{ description }}
        </p>

        <!-- Program Section -->
        <div v-if="program && program.length" class="mt-8">
          <h3 class="text-[3.5vw] font-bold uppercase text-green-700 text-left mb-4">
            {{ $t('descriptionStage.programDetails') }}
          </h3>
          <ul class="space-y-6">
            <li v-for="(day, index) in program" :key="index" class="text-[3.5vw] text-gray-700 leading-relaxed">
              <span v-html="day"></span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Additional Information -->
      <div class="flex-1 text-left">
        <h3 class="text-[3.5vw] font-bold uppercase text-green-700 mb-4">
          {{ $t('descriptionStage.information') }}
        </h3>
        <ul class="text-[3.5vw] text-gray-700 leading-relaxed space-y-4">
          <li><strong>{{ $t('descriptionStage.duration') }}:</strong> {{ additionalInfo.duree }}</li>
          <li><strong>{{ $t('descriptionStage.dates') }}:</strong> {{ additionalInfo.dates }}</li>
          <li><strong>{{ $t('descriptionStage.location') }}:</strong> {{ additionalInfo.lieu }}</li>
          <li><strong>{{ $t('descriptionStage.price') }}:</strong> {{ additionalInfo.tarif }}</li>
          <li><strong>{{ $t('descriptionStage.participants') }}:</strong> {{ additionalInfo.nombrePersonnes }}</li>
          <li><strong>{{ $t('descriptionStage.level') }}:</strong> {{ additionalInfo.niveau }}</li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center mt-8 mb-8">
      <button
        class="px-6 py-2 bg-green-700 text-white font-bold uppercase rounded-full hover:bg-green-800 transition"
        @click="navigateToContact"
      >
        {{ $t('descriptionStage.contactReserve') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionElement",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    program: {
      type: Array,
      required: false,
      default: () => [],
    },
    additionalInfo: {
      type: Object,
      required: true,
      default: () => ({
        duree: "",
        dates: "",
        lieu: "",
        tarif: "",
        nombrePersonnes: "",
        niveau: "",
      }),
    },
  },
  methods: {
    navigateToContact() {
      this.$router.push('/contact');
    }
  }
};
</script>
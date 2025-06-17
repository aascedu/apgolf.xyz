<template>
    <v-carousel
      height="450"
      :show-arrows="false"
      hide-delimiter-background
      color="blue"
    >
      <v-carousel-item
        v-for="(item, index) in items"
        :key="index"
        :src="item.src"
        cover
      >
        <div class="carousel-content text-lg">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </v-carousel-item>
    </v-carousel>
</template>
  
<script>
  export default {
    name: "ServicesCarousel",
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>
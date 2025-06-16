<script setup>
import imgTerreur from '@/assets/terreur.jpeg'
</script>

<template>
    <h1>Profite de cette terreur nocturne</h1>
    <img :src="imgTerreur" alt="Terreur Nocturne de Charlotte" />
    <nav>
      <RouterLink to="/">
        <button>
            <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="20"
          height="20"
          style="vertical-align: middle; margin-left: 6px;"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 9l4 4-4 4" />
        </svg>
        </button>
      </RouterLink>
    </nav>
  </template>
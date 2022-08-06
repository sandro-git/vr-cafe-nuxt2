<template>
  <div class="flex flex-col items-center">
    <h1 class="text-4xl font-bold">
      <!-- {{ game.name }} Page -->
    </h1>
    <nuxt-link to="/" class="bg-gray-400 text-white text-xl px-4 py-2 rounded-xl">
      Home Page
    </nuxt-link>
    {{ $route.params.slug }}
  </div>
</template>

<script>

export default {
  name: 'SlugPage'
}
</script>

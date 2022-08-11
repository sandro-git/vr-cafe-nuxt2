<template>
  <div class="flex flex-col items-center mt-20">
    <h1 class="text-4xl font-bold">
      <!-- {{ game.name }} Page -->
    </h1>
    <nuxt-link to="/" class="bg-gray-400 text-white text-xl px-4 py-2 rounded-xl">
      Home Page
    </nuxt-link>

    <SanityImage
      class="w-1/2 h-1/2"
      :asset-id="$data.result[0].imageUrl.asset._ref "
      auto="format"
    />
    {{ $data.result[0].text }}

  </div>
</template>

<script>

export default {
  name: 'SlugPage'
}
</script>

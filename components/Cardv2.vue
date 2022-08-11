<template>
  <!-- component -->
  <div class="bg-gray-600 max-w-sm overflow-hidden rounded-xl shadow-md duration-200 hover:scale-105 hover:shadow-xl w-full h-full">
    <nuxt-img
      provider="sanity"
      :src="game.imageUrl.asset._ref"
      placeholder
      class="h-52 w-full"
    />
    <div class="p-5">
      <p class="text-medium mb-5 text-gray-200">
        {{ game.name }}
      </p>
      <nuxt-link :to="game.slug.current">
        <button class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
          Plus
        </button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GameCardv2',
  props: {
    game: {
      default: null,
      type: Object,
      required: true
    }

  }
}
</script>

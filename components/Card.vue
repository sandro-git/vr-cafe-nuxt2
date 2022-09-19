<template>
  <div class="grid grid-cols-1 grid-row-3 place-self-auto xl:grid-cols-4 gap-4 items-center p-10  ">
    <div v-for="game in games" :key="game._id" class="flex flex-col items-center h-full w-full  rounded-xl ">
      <nuxt-link :to="game.slug.current" class="max-w-sm overflow-hidden rounded-xl shadow-md duration-200 hover:scale-105 hover:shadow-xl w-full h-full border-2 border-pink-500">
        <div>
          <nuxt-img
            provider="sanity"
            :src="game.imageUrl.asset._ref+'?h=208&'"
            placeholder
            class="h-52 w-full"
            quality="100"
            width="342"
            height="208"
            :alt="game.name"
          />
          <div class="p-5">
            <p class="text-2xl text-center mb-5 text-gray-50">
              {{ game.name }}
            </p>
            <button class="w-full rounded-md bg-indigo-700  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
              En savoir plus
            </button>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GameCard',
  props: {
    games: {
      default: null,
      type: Array
    }
  }
}
</script>

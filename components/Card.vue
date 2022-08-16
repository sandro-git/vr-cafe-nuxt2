<template>
  <div class="grid grid-cols-1 grid-row-3 place-self-auto xl:grid-cols-4 gap-4 items-center p-10  ">
    <div v-for="game in games" :key="game._id" class="flex flex-col items-center h-full w-full  rounded-xl ">
      <div class="bg-gray-400 max-w-sm overflow-hidden rounded-xl shadow-md duration-200 hover:scale-105 hover:shadow-xl w-full h-full border-2 border-pink-500">
        <nuxt-img
          provider="sanity"
          :src="game.imageUrl.asset._ref"
          placeholder
          class="h-52 w-full"
        />
        <div v-if="editor" class="p-5">
          <p class="text-2xl text-center mb-5 text-gray-50">
            {{ game.name }}
          </p>
          <nuxt-link :to="game.slug.current">
            <button class="w-full rounded-md bg-indigo-700  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
              En savoir plus
            </button>
          </nuxt-link>
        </div>
      </div>
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
    },
    editor: {
      default: true,
      type: Boolean
    }
  }
}
</script>
